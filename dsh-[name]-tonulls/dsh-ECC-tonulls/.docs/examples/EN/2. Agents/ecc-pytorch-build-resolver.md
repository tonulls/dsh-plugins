# Prompt Example: `/ecc-pytorch-build-resolver`

**Invocation command:** `/ecc-pytorch-build-resolver`

## Purpose

Diagnoses PyTorch training/inference failures involving tensor shapes, devices, gradients, DataLoader, and mixed precision; fixes should be minimal.

## 1. Short Request

```text
/ecc-pytorch-build-resolver Diagnose the PyTorch failure {error message}; do not start training or download dependencies.
```

## 2. Template Request

```text
/ecc-pytorch-build-resolver Training/inference fails in {model/step}: {error}, input shapes {shapes}, device and precision {parameters}. Trace tensor shapes and devices to the failure and suggest the minimal cause/fix. Do not run training, download models/packages, or modify files without approval.
```

## 3. Detailed Request

```text
/ecc-pytorch-build-resolver Conduct a systematic analysis of task {scenario/change} for the pytorch-build-resolver.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: tensor shapes, devices, gradients, DataLoader, and mixed precision; fixes should be minimal.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```