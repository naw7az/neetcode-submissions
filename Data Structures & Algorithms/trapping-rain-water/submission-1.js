class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let water = 0;
        let left = 0;
        let right = height.length - 1;
        let leftMax = height[0];
        let rightMax = height[height.length - 1];


        while (left < right) {
            if (height[left] < height[right]) {
                leftMax = Math.max(leftMax, height[left]);
                let trapped = leftMax - height[left];
                water = water + trapped;
                left++;

            } else {
                rightMax = Math.max(rightMax, height[right]);
                let trapped = rightMax - height[right];
                water = water + trapped;
                right--;
            }

        }

        return water;
    }
}
