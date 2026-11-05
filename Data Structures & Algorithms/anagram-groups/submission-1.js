class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};
        for (let str of strs) {
            const key = str.split('').sort().join('');
            if (key in obj) {
                obj[key] = [...obj[key], str];
            } else {
                obj[key] = [str];
            }
        }

        return Object.values(obj);
    }
}
