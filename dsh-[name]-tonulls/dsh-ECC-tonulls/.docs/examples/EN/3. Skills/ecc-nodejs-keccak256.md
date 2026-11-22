# ecc-nodejs-keccak256

**Command:** `/ecc-nodejs-keccak256`

**Purpose:** Prevents Ethereum hashing errors in JavaScript/TypeScript: Node.js `sha3-256` is NIST SHA-3, not Ethereum Keccak-256; this distinction matters for selectors, signatures, storage slots, and address derivation.

## Prompts

### 1. Short Request
> /ecc-nodejs-keccak256 Check whether this code uses NIST SHA3 instead of Ethereum Keccak-256: [snippet]. Explain the consequences and a correct verification method.

### 2. Template with Context
> /ecc-nodejs-keccak256 Environment: [Node.js/TS, version]; hashing library: [name/version]; input bytes and encoding: [description]; expected output: [hex/value]; actual output: [value]. Determine where SHA3-256 and Keccak-256 may be confused. Check input encoding and output format; do not substitute algorithms or invent expected hashes.

### 3. Detailed Request
> /ecc-nodejs-keccak256 Diagnose an incorrect Ethereum hash for [selector/signature/storage slot/address derivation] in the supplied JavaScript/TypeScript. 1) Trace the exact input bytes: text encoding, prefixes, padding, and serialization. 2) Identify the actual API algorithm—specifically check whether `sha3-256` is NIST SHA-3 rather than Keccak-256. 3) Verify applicability to the stated Ethereum use case and conversion rules for selector/slot/address; do not conflate Keccak with EIP-55 or ABI rules without justification. 4) Suggest a library call and independent test using a known vector, but do not invent a vector. Do not modify files or install dependencies. Format: cause, byte sequence → algorithm → result, minimal recommendation, and test criteria.
