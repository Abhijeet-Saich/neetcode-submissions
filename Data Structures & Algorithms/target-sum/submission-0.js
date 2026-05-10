class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {



        let length = nums.length;
        let ways = 0;

        function dp(sum, k){

            if(k > length) return;
            if(sum == target && k == length){
                ways++;
                return;
            }

            dp(sum + nums[k], k+1);
            dp(sum - nums[k], k+1);
        }

        dp(0, 0);

        return ways;
    }
}
