function solution(roman) {
    const values = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < roman.length; i++) {
      if (i > 0 && values[roman[i]] > values[roman[i-1]]) {
        result += values[roman[i]] - 2 * values[roman[i-1]];
      } else {
        result += values[roman[i]];
      }
    }
    
    return result;
  }