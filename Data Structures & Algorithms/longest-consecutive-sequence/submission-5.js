class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const numSet = new Set(nums);

        const startSequence = [];
        for (let num of nums) {
            // start of a sequence
            if (!numSet.has(num - 1)) {
                startSequence.push(num);
            }
        }
        let maxSequence = 0;

        for (let start of startSequence) {
            let currentValue = start;
            let currentMax = 1;
            while (numSet.has(currentValue + 1)) {
                currentValue += 1;
                currentMax += 1;
            }

            maxSequence = Math.max(maxSequence, currentMax);
        }

        return maxSequence;
    }
}
