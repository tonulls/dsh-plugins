# `/ecc-gan-planner` — Prompt Examples

## Purpose

Turns a brief idea into a product specification describing features, sprints, evaluation criteria, and design direction.

## Short Request

```text
/ecc-gan-planner Expand the idea “{idea}” into a specification with features, phases, and verifiable acceptance criteria.
```

## Template Request

```text
/ecc-gan-planner Create a specification for {product/audience} based on the idea {idea}. Include prioritized features, MVP boundaries, phases/sprints, evaluation criteria, and design direction. Separate provided input from assumptions and questions.
```

## Detailed Request

```text
/ecc-gan-planner Turn the idea {brief description} into a product specification for {target audience}, considering {platform, constraints, timeline}.
1. Describe the problem, users, and desired outcomes without adding unknown market facts.
2. Break features into MVP and later phases; note the value and dependencies of each.
3. Describe user flows and design direction concretely enough for implementation, without inventing unconfirmed visual requirements.
4. Divide the work into sequential sprints/phases with measurable outcomes.
5. Define evaluation and acceptance criteria that an evaluator can verify; specify a threshold only if one is provided or explicitly justified.

Format: brief summary, audience/goals, scope and out of scope, features, phases, evaluation criteria, assumptions, and open questions. Planning only: do not change code, install packages, access the network, or deploy.
```