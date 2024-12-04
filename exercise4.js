function generatefibonacciSequence(num) {
  if (typeof num !== 'number' || num < 0) {
    throw new Error('Input must be a non-negative integer.');
  }

  if (num === 0) return [0];

  const sequence = [0, 1];

  while (true) {
    const nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];

    if (nextNum > num) break;

    sequence.push(nextNum);
  }

  return sequence;
}

console.log(generatefibonacciSequence(17))