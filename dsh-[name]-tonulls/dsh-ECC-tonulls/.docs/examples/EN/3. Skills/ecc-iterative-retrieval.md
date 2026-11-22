# ecc-iterative-retrieval

**Command:** `/ecc-iterative-retrieval`

**Purpose:** A pattern for iteratively refining context retrieval to address an agent subtask's context gaps. Use when the agent's context needs improvement over multiple passes.

## Prompts

### 1. Short Request
> /ecc-iterative-retrieval Help refine the context for an agent subtask.

### 2. Template with Context
> /ecc-iterative-retrieval Subtask: [description], known context: [data], gap: [question]. Suggest the next narrow retrieval query.

### 3. Detailed Request
> /ecc-iterative-retrieval Plan iterative context retrieval for subtask [description]. First list missing facts, formulate the minimal query/paths for the next pass, then define a stop criterion; limit search to authorized files. Do not expose secrets or run commands. Provide a context packet for the executor and remaining gaps.
