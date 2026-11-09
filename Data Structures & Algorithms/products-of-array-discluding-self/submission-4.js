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
                totalZeros += 1
            } else {
                product *= num;
            }
        }

        // if total zeroes are more than 1, then all values will be 0
        if (totalZeros > 1) {
            return Array(nums.length).fill(0);
        }

        const res = [];
        for (let i = 0; i < nums.length; i++) {
            if (totalZeros === 1) {
                res[i] = nums[i] === 0 ? product : 0;
            } else {
                res[i] = product / nums[i]
            }
        }

        return res;

    }
}
