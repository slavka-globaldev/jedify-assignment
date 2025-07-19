import clsx from 'clsx';
import React from 'react';
import { Link, NavLink } from 'react-router';

import { ROUTES } from '@routes/app-router.routes';

import { Container } from '@shared/ui/container';

import { menuLinks } from './header.config';

export const Header = () => (
  <header className="flex h-20 w-full items-center border-b border-b-zinc-800 bg-zinc-800">
    <Container className="flex items-center gap-x-16">
      <Link className="text-xl font-bold uppercase" to={ROUTES.DASHBOARD}>
        Lorem Logo
      </Link>
      <nav className="flex items-center">
        {menuLinks.map((link, idx) => (
          <React.Fragment key={link.label}>
            <NavLink
              className={({ isActive }) =>
                clsx('text-md flex items-center gap-x-2 p-2', {
                  'text-amber-200': isActive,
                  'text-zinc-400 hover:text-zinc-200': !isActive
                })
              }
              to={link.link}
            >
              {link.icon}
              {link.label}
            </NavLink>
            {idx < menuLinks.length - 1 && <span className="mx-4 text-zinc-700">|</span>}
          </React.Fragment>
        ))}
      </nav>
    </Container>
  </header>
);
