class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const half = nums.length / 2;
        const map = new Map();
        let result = 0;
        
        for(let i=0; i<nums.length; i++) {
            if(map.get(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1);
            } else {
                map.set(nums[i], 1);
            }
        }

        map.forEach((val, key) => {
            if(val > half) {
                result = key;
            }
        })

        return result;
    }
}
