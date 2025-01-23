function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const numArray1: number[] = [1, 2, 3];
const strArray1: string[] = ['a', 'b', 'c'];

const combinedNumStr = combineArrays(numArray1, strArray1); // Error here
console.log(combinedNumStr);