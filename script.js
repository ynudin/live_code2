// Reverse and times array

// // input        // result
// [1,4,6,7]       // [14,12,8,2]
// [7,4,2,1]       // [2,4,8,14]
// [5]             // [10]
// [1,3]			//[6,2]


// cara 1

const number = [1,4,6,7];
const reversed = number.reverse();
const time = reversed.map(num => num*2);
console.log(time)

// cara 2

function reverseandtimes(input) {
  const output = input.reverse().map(num => num*2);

  return output;
}

const input = [1, 4, 6, 7]
const output = reverseandtimes(input);
console.log(output);
