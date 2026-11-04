class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const obj = {};
    for (let i = 0; i < nums.length; i ++) {
        if (obj[nums[i]]) {
            return true;
        }

        obj[nums[i]] = true;
    }
    return false;
  }
}
