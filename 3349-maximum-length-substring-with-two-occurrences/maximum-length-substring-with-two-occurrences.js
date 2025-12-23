/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
     if (s.length <= 1) return s.length;

    let map = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        map.set(ch, (map.get(ch) || 0) + 1);

        // Shrink window until all characters appear at most twice
        while (map.get(ch) > 2) {
            const leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};