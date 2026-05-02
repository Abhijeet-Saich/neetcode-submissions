class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        let rows = grid.length;
        let cols = grid[0].length;

        let dirs = [[1,0],[-1,0],[0,1],[0,-1]]

        let memo = Array.from({length : rows}, () => new Array(cols).fill(0));

        function dfs(node){

            let [i,j] = node;
            memo[i][j] = 1;    //marking the node visited

            let neighbors = [];

            for(let dir of dirs){
                let [dr, dc] = dir;

                let ro = i + dr;
                let co = j + dc;

                if(ro >= 0 && ro < rows && co >= 0 && co < cols
                    && grid[ro][co] == 1
                    && memo[ro][co] != 1
                ) neighbors.push([ro,co]);
            }

            for(let neigh of neighbors) dfs(neigh)
        }

        let no_of_islands = 0;

        for(let i = 0; i < rows; i++ ){
            for(let j = 0; j < cols; j++){

                if(grid[i][j] == 1 && memo[i][j] != 1){    // land not visited
                    no_of_islands++;
                    dfs([i,j]);
                }

            }
        }

        return no_of_islands;
    }
}
