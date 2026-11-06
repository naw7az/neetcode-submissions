class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};

        for (let num of nums) {
            obj[num] = (obj[num] || 0) + 1;
        }

        return Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, k).map((arr) => Number(arr[0]))
    }
}
