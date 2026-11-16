class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort the numbers
        nums.sort((a, b) => a - b);

        const result = [];

        // the first pointer is going to loop from 0 to length -2
        // example: [ -4, -1, -1, 0, 1, 2 ]
        for (let i = 0; i < nums.length - 2; i++) {
            let left = i + 1;
            let right = nums.length - 1;

            if (nums[i] === nums[i -1]) {
                continue
            }

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                // match 
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);

                    // filter duplicates for left
                    while (left < right && nums[left] === nums[left + 1]) left++
                    // filter duplicates for right
                    while (left < right && nums[right] === nums[right - 1]) right--

                    // increment and decrement for new values
                    left++;
                    right--;

                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }

        }

        return result;
    }
}
