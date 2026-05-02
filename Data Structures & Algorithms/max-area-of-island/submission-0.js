class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        let rows = grid.length;
        let cols = grid[0].length;

        let dirs = [[1,0],[-1,0],[0,1],[0,-1]];

        let memo = Array.from({length : rows}, () => new Array(cols).fill(0));
        let max = 0;

        function dfs(node){

            let [ro, co] = node;

            memo[ro][co] = 1 //markin land as visited;
            let total = 1;

            for(let [dr, dc] of dirs){
                let p = ro + dr;
                let q = co + dc;

                if( p >= 0 && p < rows && q >=0 && q < cols
                    && memo[p][q] != 1 && grid[p][q] == 1
                ){
                    total += dfs([p,q]);
                }
            }

            return total
        }

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){

                if( grid[i][j] == 1 && memo[i][j] != 1){
                    let trav = dfs([i,j]);
                    max = Math.max(trav, max);
                } 
            }
        }

        return max;
    }
}
