// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...numbers) {
  // Add a loop here
  return numbers.reduce((accumulator, currentValue) =>
      accumulator + currentValue, 0);
}

add(1, 2, 3, 4, 5);
