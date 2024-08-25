const reverseVowels = (str) => {
    if (typeof str !== 'string') {
        throw new Error("This must be a string");
    }

    const chars = str.split("");

    const vowels = new Set(['a', 'e', 'o', 'u', 'i', 'A', 'E', 'O', 'U', 'I']);

    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(chars[left])) {
            left++;
        }

        while (left < right && !vowels.has(chars[right])) {
            right--;
        }

        [chars[left], chars[chars[right]]] = [chars[right], chars[chars[left]]]

        left++;
        right--;
    }

    return chars.join("");
}

console.log('====================================');
console.log(reverseVowels("peorpleuxioty"));
console.log('====================================');