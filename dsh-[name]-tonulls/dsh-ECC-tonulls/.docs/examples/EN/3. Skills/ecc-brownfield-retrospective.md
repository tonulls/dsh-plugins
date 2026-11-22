# `/ecc-brownfield-retrospective`

Retrospectively applies the ECC engineering process to an existing project area: studies its current state, reconstructs decisions, builds a gap register across four dimensions (thinking, development practice, missing capabilities, and technology choices), then—only when separately instructed—guides fixes through plan–TDD–review.

## Short Request

```text
/ecc-brownfield-retrospective Assess the legacy payments module: reconstruct the reasons for its current architecture and create a prioritized gap register, without edits for now.
```

## Template

```text
/ecc-brownfield-retrospective Conduct a retrospective of [path/subsystem] in project [repository]. Inheritance context: [what is known]. Audit only at first: record evidence and unknowns across four dimensions—engineering thinking, coding practices, missing capabilities, and technology choices. Do not start fixes without separate approval.
```

## Step-by-Step Request

```text
/ecc-brownfield-retrospective Review [project area] after [team transition/long development/ECC adoption].
1. Define audit boundaries and study the current state, history/documentation, and available decisions; do not present guesses about the past as confirmed facts.
2. Build a gap register across four dimensions: quality of problem framing/thinking, implementation practices, missing product capabilities, and justification of technology choices.
3. For each item, provide evidence (paths/artifacts), consequences, severity, and confidence; identify what to verify with the team.
4. Present findings and a proposed sequence first. Proceed to fixes only after my explicit approval of the specific scope; then plan and perform small steps using plan–TDD–review.
5. Do not install dependencies, use the network, or deploy without separate approval.

Output: brief state of the area, evidence-based prioritized gap table, questions, and safe action plan. If only an audit was requested, make no code changes.
```
