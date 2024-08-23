function reverseVowels(str) {
    const vowels = 'aeiouAEIOU';
    const chars = str.split('');
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        while (left < right && !vowels.includes(chars[left])) {
            left++;
        }
        while (left < right && !vowels.includes(chars[right])) {
            right--;
        }
        if (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join('');
}