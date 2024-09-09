// Reverse and times array

// // input        // result
// [1,4,6,7]       // [14,12,8,2]
// [7,4,2,1]       // [2,4,8,14]
// [5]             // [10]
// [1,3]			//[6,2]


function reverseandtimes(input) {
  const inputs = input.split('').map(Number);
  const output = inputs.map(num => num*2);

  return output.join('')
}