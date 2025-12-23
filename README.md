# RIB UI Team Learning Repository

## Purpose

This repository serves as a centralized hub for all coding-related learning activities for the RIB UI team. Our goals are:

1.  **Shared Learning**: Facilitate visibility into each other's code to foster a collaborative learning environment.
2.  **Code Review Practice**: Provide a safe space to practice and improve code review skills.
3.  **AI Workflow Testing Ground**: Provide testing ground of ai tooling and collaboration

## Setup

1. Install ESLint and Prettier plugin (VSCode, Cursor, Antigravity,...)
2. Run `npm i` on the root folder
3. Navigate to a specific topic/project and start learning!!

## Structure

The repository is organized by **Topic**, then **Project**, and finally by **Personal Space**:

```
[topic]
  └── [project]
       └── [personal_space]
```

### Example

`angular/udemy-angular-complete-guide/chewbacca/`

## Workflow

We follow a **Trunk-Based Development** workflow:

- All Pull Requests (PRs) should be made directly against the `main` branch.
- Small, frequent updates are encouraged.
- Code changes within your own space can be merged by yourself, but must follow general rules for PRs (e.g. PR Description and Changelog)

### Clean Code & Standards

To ensure a high-quality codebase, we enforce linting and formatting rules across the repository.

1.  **ESLint**: We use ESLint with Angular and TypeScript configurations to catch errors and enforce best practices.
2.  **Prettier**: Formatting is strictly enforced via Prettier to maintain a consistent code style.
3.  **Husky Pre-push Hook**:
    - A Husky hook is configured to automatically run `npm run lint` and `npm run format:check` when you push changes.
    - **Rule**: If either check fails, the push will be rejected. You must fix the errors (or run `npm run format`) and commit them before pushing again.

## How to Join a Project

1.  Navigate to the project folder you wish to work on (e.g., `angular/udemy-angular-complete-guide`).
2.  Create a new directory for your personal workspace.
    - **Naming Convention**: `firstname_lastname` (e.g., `hans_mueller`) if you are comfortable, else at least 5 Characters.
3.  Add your code, exercises, or project files within your personal directory.
4.  Commit your changes and create a PR to `main`.

## Conventions

| Convention             | Description               | Link                                             |
| :--------------------- | :------------------------ | :----------------------------------------------- |
| **Naming Conventions** | General rules for naming. | [naming_conventions.md](./naming_conventions.md) |

## Topics & Projects

### Angular

| Project                          | Description                                                  | Link                                                       |
| :------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| **Udemy Angular Complete Guide** | "The Complete Guide to Angular" course material & exercises. | [README](./angular/udemy-angular-complete-guide/README.md) |

### TypeScript

_(Projects coming soon)_

### AI

_(Projects coming soon)_
