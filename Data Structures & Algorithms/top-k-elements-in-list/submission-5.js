class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        for (let num of nums) {
            // set count in map
            count[num] = (count[num] || 0) + 1;
        }

        const freq = Array.from({ length: nums.length + 1 }, () => [])

        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }
        const res = [];

        for (let i = freq.length - 1; i > 0; i--) {
            for (let n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
