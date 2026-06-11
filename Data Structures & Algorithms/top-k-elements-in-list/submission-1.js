class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const map = new Map();

        for(let i=0; i<nums.length; i++) {
            if(!map.get(nums[i])) {
                map.set(nums[i], 1);
            } else {
                map.set(nums[i], map.get(nums[i]) + 1);
            }
        }

        const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

        console.log(sorted);
        const ans = sorted.slice(0,k).map(([key, value]) => key);
        console.log(ans);
        return ans;
    }
}
