class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};

        for (let num of nums) {
            if (!obj[num]) {
                obj[num] = 0;
            }
            obj[num] += 1
        }

        // nums + 1 to include the case where all values are same in nums
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (let num in obj) {
            freq[obj[num]].push(num)
        }

        const res = [];

        for (let i = freq.length - 1; i >= 0; i--) {
            for (let num of freq[i]) {
                res.push(num);

                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
