class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort();
        let ans = false

        for(let i=0; i<nums.length; i++) {
            if(nums[i] === nums[i+1]) {
                ans = true;
            } else {
                continue;
            }
        }

        return ans;
    }
}
