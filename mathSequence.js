// math sequence challenge
// objective: find the sequence of numbers in an array is arithmetic, geometric or no pattern
// assumptions: no negative numbers

function mathSequence(arr) {
  let arithSet = new Set();
  let geoSet = new Set();

  for (let i = arr.length - 1; i > 0; i--) {
    let diff = arr[i] - arr[i - 1];
    arithSet.add(diff);
    let ratio = arr[i] / arr[i - 1];
    geoSet.add(ratio);
  }

  if (arithSet.size === 1) {
    return 'Arithmetic';
  }

  if (geoSet.size === 1) {
    return 'Geometric';
  }

  return -1;
}

console.log(mathSequence([3, 9, 27]));

module.exports = mathSequence;
