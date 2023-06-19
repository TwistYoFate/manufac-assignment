import { DataPoint } from "../domain/types";

// Function which rounds the decimal places of a value upto the defined place
function roundTo(val:number,places:number):number{
  return parseFloat(val.toFixed(3));
}

// Calculate mean of an array of numbers
function calculateMean(numbers: number[]): number {
  console.log("mean",numbers);
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  console.log("sum",sum);
  return parseFloat((sum / numbers.length).toFixed(3));
}

// Calculate median of an array of numbers
function calculateMedian(numbers: number[]): number {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const mid = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 0) {
    // Even number of elements, average the middle two numbers
    return roundTo((sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2, 3);
  } else {
    // Odd number of elements, return the middle number
    return roundTo(sortedNumbers[mid],3);
  }
}

// Calculate modes of an array of numbers
function calculateMode(numbers: number[]): number[] {
  const frequencyMap: { [key: number]: number } = {};
  let maxFrequency = 0;
  const modes: Set<number> = new Set();

  for (const num of numbers) {
    frequencyMap[num] = frequencyMap[num] ? frequencyMap[num] + 1 : 1;
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
    }
  }

  for (const num in frequencyMap) {
    if (frequencyMap[num] === maxFrequency) {
      modes.add(roundTo(parseFloat(num),3));
    }
  }

  return Array.from(modes);
}

// Get the number of unique classes available in a DataPoint[]
function getNumberOfClasses(keyWord: string, arr: DataPoint[]): number {
  const set = new Set();
  arr.forEach(obj => {
    set.add(obj[keyWord]);
  })
  return set.size;
}

export default {
  roundTo,
  calculateMean,
  calculateMedian,
  calculateMode,
  getNumberOfClasses
}
