class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        const length = nums.length;

        for(let i=0; i<nums.length; i++) {
            ans[i] = nums[i];
            ans[i + length] = nums[i];
        }

        return ans;
    }
}
