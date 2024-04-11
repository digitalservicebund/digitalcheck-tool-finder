# 2. React and TypeScript

Date: 2024-04-11

## Status

Accepted

## Context

We need to decide on the technology stack for developing the tool finder web application that meets the following requirements:

- We want to get it out of the door fast by re-using knowledge and code available
- The application only displays static data and does not need a dynamic datasource
- The application should be operable with low set-up and maintenance costs
- The used technologies should be proven, well maintained and state-of-the-art

## Decision

We will use React with TypeScript for developing the web application.

## Consequences

Choosing React and TypeScript aligns well with the outlined requirements and considerations in the following manner:

- **Code re-usability:** React and TypeScript components from other projects in the company can be re-used for development velocity.
- **Knowledge Transfer:** Existing knowledge within the company regarding React and TypeScript can be leveraged.
- **Hosting Simplicity:** Deploying the application as a static site simplifies hosting and reduces infrastructure requirements.
  However, dynamic functionalities that might be required in the future may need to be addressed through alternative means.
