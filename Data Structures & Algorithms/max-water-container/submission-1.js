class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let maxWater = 0;

        while (left < right) {
            let height = Math.min(heights[left], heights[right]);
            let width = right - left;
            let water = width * height;

            maxWater = Math.max(maxWater, water);

            if (heights[left] < heights[right]) {
                left++
            } else {
                right--;
            }

        }

        return maxWater;
    }
}
