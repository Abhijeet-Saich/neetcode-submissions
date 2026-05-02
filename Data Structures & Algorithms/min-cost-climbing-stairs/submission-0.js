class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        let top = cost.length;
        let memo = new Array(cost.length+1).fill(0);   //min cost to reach floor n

        function recur(n){

            if(n >= top) return 0;

            if(memo[n] != 0) return memo[n];

            let minCost = cost[n] + Math.min(recur(n+1), recur(n+2));

            memo[n] = minCost;
            return minCost;
        }

        return Math.min(recur(0), recur(1));
    }
}
