export const getRandom = <T>(arr: T[]): T =>
  Array.isArray(arr) ? arr[Math.floor(Math.random() * arr.length)] : arr;
