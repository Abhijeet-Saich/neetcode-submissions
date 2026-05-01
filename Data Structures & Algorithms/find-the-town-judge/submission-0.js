class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        
        let inDegree = new Array(n+1).fill(0);

        for(let [a,b] of trust){
            inDegree[a]--;
            inDegree[b]++;
        }

        for(let i = 1; i <= n; i++){
            if(inDegree[i] === n-1) return i
        }

        return -1
    }
}
