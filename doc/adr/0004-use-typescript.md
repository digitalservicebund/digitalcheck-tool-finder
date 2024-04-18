# 4. Use TypeScript with React

Date: 2024-04-15

## Status

Accepted

## Context

We need to decide on whether to use TypeScript or pure JavaScript for developing the web application.

TypeScript is a superset of JavaScript that adds static type definitions.
It is widely used in the industry and has been adopted by many companies, including DigitalService, for frontend development.
Through its type safety, TypeScript improves reliability and maintainability while adding a moderate amount of engineering overhead.
The usage of TypeScript is independent of the frontend framework chosen, but it is well-suited for React, as it allows for type-safe components and props and can be integrated into the build process with minimal effort.

## Decision

We will use TypeScript for developing the web application.

## Consequences

Benefits of using TypeScript include:

- **Type Safety**: TypeScript provides type safety in development, leading to less error-prone code, more confidence in deployments and better maintainablity.
- **Tooling Support**: TypeScript offers better tooling support, such as autocompletion and type checking in the editor.

Drawbacks of using TypeScript include:

- **Setup Time**: We will have to spend time on setting up TypeScript.
- **Development Speed**: The development and build processes will be slightly slower due to the additional time needed for writing type definitions and type checking in the pipeline.
