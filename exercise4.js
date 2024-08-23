function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let sequence = [0, 1];
    
    while (sequence[sequence.length - 1] < n) {
      let nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      if (nextNum <= n) {
        sequence.push(nextNum);
      } else {
        break;
      }
    }
    
    return sequence;
  }