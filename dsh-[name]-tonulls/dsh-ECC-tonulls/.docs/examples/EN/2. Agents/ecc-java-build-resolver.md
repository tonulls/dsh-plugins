# `/ecc-java-build-resolver`

**Purpose:** Diagnoses and minimally fixes Java/Maven/Gradle build, compilation, and dependency errors; recognizes Spring Boot and Quarkus. Use for Java build failures.

## Short Prompt

```text
/ecc-java-build-resolver Diagnose the Java/Maven/Gradle build error and suggest a minimal fix; do not download or install dependencies.
```

## Template Prompt

```text
/ecc-java-build-resolver
Context: [project path / excerpt / system / symptom].
Task: diagnose and minimally fix a Java/Maven/Gradle error for [goal or subject].
Focus: compilation and dependency errors, the applicable Spring Boot/Quarkus context, and available local checks.
Constraints: Make only minimal changes within [permitted scope], using tools already available locally; do not install or download anything. Stop and ask for approval before broadening the change.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-java-build-resolver
Perform the task “diagnose and minimally fix a Java/Maven/Gradle error” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check compilation and dependency errors, the applicable Spring Boot/Quarkus context, and available local checks.
3. Make a minimal fix only after confirming the root cause, then repeat an appropriate local check.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Make only minimal changes within [permitted scope], using tools already available locally; do not install or download anything. Stop and ask for approval before broadening the change.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```