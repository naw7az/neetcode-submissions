class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = [];
        for (let str of strs) {
            const arr = Array(26).fill(0);
            for (let char of str) {
                arr[char.charCodeAt() - 'a'.charCodeAt()] += 1;
            }

            const key = arr.join();

            if (!obj[key]) {
                obj[key] = [];
            }

            obj[key].push(str);
        }

        return Object.values(obj)
    }
}
