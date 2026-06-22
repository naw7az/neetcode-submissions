class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let num of nums) {
            // set count in map
            map.set(num, (map.get(num) || 0) + 1);
        }

        const List = Array.from(map.entries()).sort((a,b) => b[1] - a[1]).splice(0, k).map((val) => val[0]);

        console.log('List', List);
        return List;
    }
}
