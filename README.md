# Project Overview

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm run dev`.
4. Run tests using `npm run test:unit`.

## Feature Choices Explanation

Features were selected to demonstrate a variety of interactions with libraries, state management, and UI components. The Dashboard feature is the most complex, showcasing advanced state and UI logic, while the Profile feature is simpler and more straightforward.

## Design Decisions

- **Dark Mode:** Chosen for comfortable viewing in low-light environments, providing a user-friendly dark theme.
- **Skeletons:** Implemented for better search optimization and smoother user interaction during data loading.

## Validation Approach

Validation is designed to prevent requests that could break backend logic in a real application. Most rules are practical, except for the `maxLength` on `fullName`, which was added primarily for validation testing purposes.

## Architecture

A simplified version of the Feature-Sliced Design (FSD) architecture is used. The full FSD was unnecessary for this scope, but its principles help organize code efficiently and maintainably.