class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        // Array length should be nums length + 1 to accomodate 
        // the frequency in case all the values are same number. 
        // freq[0] will always be empty since 0 freq number will not exist in obj
         const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (let num of nums) {
            obj[num] = (obj[num] || 0) + 1;
        }

        // place all the number inside an array of index same as the number's frequency
        for (let num in obj) {
            freq[obj[num]].push(parseInt(num));
        }

        const res = [];

        // last element index is freq.length -1 and not freq.length
        for (let i = freq.length - 1; i > 0; i--) {
            for (let num of freq[i]) {
                res.push(num);

                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
