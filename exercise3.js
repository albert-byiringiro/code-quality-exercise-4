const reverseVowels = (str) => {
    const vowels = str.match(/[aeiou]/gi) || [];
    return str.replace(/[aeiou]/gi, () => vowels.pop());
}