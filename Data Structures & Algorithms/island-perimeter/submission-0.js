class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let perimeter = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    perimeter += 4;

                    // check top
                    if (i > 0 && grid[i - 1][j] === 1) perimeter--;

                    // check bottom
                    if (i < rows - 1 && grid[i + 1][j] === 1) perimeter--;

                    // check left
                    if (j > 0 && grid[i][j - 1] === 1) perimeter--;

                    // check right
                    if (j < cols - 1 && grid[i][j + 1] === 1) perimeter--;
                }
            }
        }

        return perimeter;
    }
}
