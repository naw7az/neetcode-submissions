class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      

        const prefix = Array(nums.length).fill(1);
        const suffix = Array(nums.length).fill(1);


        // prefix loop
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1]
        }

        // suffix loop
        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = nums[i + 1] * suffix[i + 1]
        }

        const productArray = [];

        for (let i = 0; i < prefix.length; i++) {
            productArray[i] = prefix[i] * suffix[i]
        }

        return productArray;
    }
}
