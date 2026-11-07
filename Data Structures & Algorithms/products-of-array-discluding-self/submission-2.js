class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let totalZeros = 0;
        for (let num of nums) {
            if (num === 0) {
                totalZeros += 1;
            } else {
                product = product * num;
            }
        }

        // all product will be 0, if product is 0
        if (totalZeros > 1) {
            return Array(nums.length).fill(0)
        }

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
