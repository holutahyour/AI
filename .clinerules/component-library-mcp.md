<!-- ## Brief overview
This rule outlines the process for using component libraries like Shadcn and Chakra UI via their respective MCP servers. The goal is to ensure efficient and consistent implementation of UI components.

## General Component Usage Rule
- When asked to use components from a library that has a corresponding MCP server (e.g., Shadcn, Chakra UI), always use the MCP server for component implementation.

## Planning Phase
- During the planning phase, identify all opportunities to use components from the available MCP servers.
- Prioritize using whole blocks or composite components (e.g., login page, calendar) from the MCP server when available to accelerate development.
- Apply components wherever they are applicable to maintain UI consistency.

## Implementation Phase
- Before implementing a component, use the `demo` tool from the respective MCP server to understand its usage and props.
- Implement the component as demonstrated in the demo to ensure correctness. -->

Usage Rule
When asked to use shadcn components, use the MCP server.
Planning Rule
When asked to plan using anything related to shadcn:

Use the MCP server during planning
Apply components wherever components are applicable
Use whole blocks where possible (e.g., login page, calendar)

Implementation Rule
When implementing:

First call the demo tool to see how it is used
Then implement it so that it is implemented correctly