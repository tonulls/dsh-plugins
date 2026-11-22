# `/ecc-ecc-recipes`

Selects an appropriate group of ECC commands for a described workflow, including step order and stop conditions; advises only and does not execute commands.

## Simple Request

```text
/ecc-ecc-recipes Which ECC commands should I use to fix a regression and verify the fix?
```

## Template Request

```text
/ecc-ecc-recipes
Workflow/goal: [what needs to be done]
Project context: [task type]
Constraints: [what must not be performed]
Suggest a command group, execution order, and stop condition. Explain only—do not execute anything.
```

## Detailed Request

```text
/ecc-ecc-recipes Match workflow [description] to an appropriate ECC command-group recipe. Clarify initial conditions and task type; suggest a sequence of commands with each purpose, dependencies, and handoff/stop point. If there are multiple options, explain the choice and applicability boundaries. This is reference guidance only: do not run commands or perform the workflow. If a command/family is unavailable in the accessible catalog, state that rather than inventing a name. Provide recommended order, transition criteria between steps, and approvals needed for potential side effects.
```
