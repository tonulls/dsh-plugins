# `/ecc-dotnet-patterns`

Helps write and review idiomatic C#/.NET code: organization, dependency injection, async/await, and practices for maintaining reliable applications.

## Simple Request

```text
/ecc-dotnet-patterns Check whether cancellation and exceptions are handled correctly in this async .NET method.
```

## Template Request

```text
/ecc-dotnet-patterns
Target .NET/C# version: [versions]
Component: [description]
Code: [snippet or path]
Requirements: [performance/compatibility]
Suggest an idiomatic option considering DI and async; review only for now.
```

## Detailed Request

```text
/ecc-dotnet-patterns Analyze [component] for [.NET/C# version]. Compare the solution with the project's current style. Check type responsibilities and DI lifetime, async behavior and CancellationToken propagation, resource management, exceptions and error contracts, nullability, and readability. Identify where changes would help and where abstraction would be excessive. Do not edit files, add packages, or make external calls without my approval. Suggest a concise code option, test scenarios, and potential migration risks; explicitly distinguish facts from assumptions.
```
