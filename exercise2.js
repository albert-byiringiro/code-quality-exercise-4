function decodeRomanNumerals(roman) {
  const values = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  return roman.split("").reduce((result, char, i, arr) => {
    const currentValue = values[char];
    const nextValue = values[arr[i + 1]] || 0;
    return result + (currentValue < nextValue ? -currentValue : currentValue);
  }, 0)
}