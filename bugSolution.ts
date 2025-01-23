function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const numArray1: number[] = [1, 2, 3];
const strArray1: string[] = ['a', 'b', 'c'];

const combinedNum: number[] = combineArrays<number>(numArray1, numArray1); //Explicit Type
console.log(combinedNum);
const combinedStr: string[] = combineArrays<string>(strArray1, strArray1); //Explicit Type
console.log(combinedStr); 