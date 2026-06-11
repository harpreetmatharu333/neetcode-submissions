class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length === 0) {
            return 0;
        }

        const sorted = nums.sort((a, b) => a - b);
        const unique = [...new Set(sorted)];

        //console.log(unique);

        let current = 1;
        let maxLength = 1;

        for(let i=0; i<unique.length-1; i++) {
           if(unique[i] + 1 === unique[i+1]) {
                current++;
                maxLength = Math.max(current, maxLength);
           } else {
                current = 1;
           } 
        }

        return maxLength;
    }
}
