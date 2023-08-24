function sumOfDistinctElements(set1, set2) {
  let distinctElements = new Set(); // Create a Set to store distinct elements

  for (let num of set1) {
    distinctElements.add(num); // Add elements from set1 to the Set
  }

  for (let num of set2) {
    distinctElements.add(num); // Add elements from set2 to the Set
  }

  let sum = 0;
  distinctElements.forEach((element) => {
    sum += element; // Calculate the sum of distinct elements
  });

  return sum;
}

// Example sets
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

const result = sumOfDistinctElements(set1, set2);
console.log("Output:", result); // This will print the sum of distinct elements



