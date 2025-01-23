This repository demonstrates a common yet subtle bug in TypeScript involving generic type inference with array combination. The `combineArrays` function aims to merge two arrays of the same type. However, when using it with arrays of different types, type inference fails due to the compiler's inability to resolve a single type for the generic parameter `T`. The solution involves explicitly specifying the generic type during the function call to resolve ambiguity.  This example highlights the importance of explicit typing when dealing with generics in TypeScript, especially in scenarios with potential type mismatches.