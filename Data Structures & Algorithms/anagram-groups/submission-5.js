class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const result = {};

        for (let str of strs) {
            // record freq of each character
            const freq = Array(26).fill(0);
            for (let char of str) {
                freq[char.charCodeAt() - 'a'.charCodeAt()] += 1;
            }
            const key = freq.join('-');
            // if key is not in result then create empty array
            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(str);
        }

        return Object.values(result);

    }
}
