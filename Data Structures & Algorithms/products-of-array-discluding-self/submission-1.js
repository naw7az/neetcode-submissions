class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let totalProduct = 1;
        let ZeroCount = 0;
        for (let num of nums) {
            if (num === 0) {
                ZeroCount += 1;
            } else {
                totalProduct = totalProduct * num;
            }
        }
        // al product is going to be 0
        if (ZeroCount > 1) {
            return Array.from({ length: nums.length }, () => 0)
        }

        if (ZeroCount === 1) {
            const result = Array.from({ length: nums.length }, () => 0);
            const idx = nums.findIndex((v) => v === 0);
            result[idx] = totalProduct;
            return result;
        }

        const result = [];
        for (let num of nums) {
            if (num === 0) {
                result.push(totalProduct);
            } else {
                result.push(totalProduct / num);
            }
        }
        return result;
    }
}
