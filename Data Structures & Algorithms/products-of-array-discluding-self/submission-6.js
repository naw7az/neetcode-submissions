class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Solution with Prefix and Suffix 
        const prefix = Array(nums.length).fill(1);
        const suffix = Array(nums.length).fill(1);
        const res = [];

        // prefix loop
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        // suffix loop
        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1]
        }

        // take product of prefix and suffix
        for (let i = 0; i < prefix.length; i++) {
            res[i] = prefix[i] * suffix[i];
        }

        return res;
    }
}
