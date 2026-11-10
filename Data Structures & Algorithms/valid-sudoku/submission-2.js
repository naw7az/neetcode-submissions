class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // row check
        for (let row = 0; row < 9; row++) {
            let rowSet = new Set();
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    continue;
                }
                if (rowSet.has(board[row][col])) {
                    return false;
                }
                rowSet.add(board[row][col]);
            }
        }

        // col check
        for (let row = 0; row < 9; row++) {
            let colSet = new Set();
            for (let col = 0; col < 9; col++) {
                if (board[col][row] === '.') {
                    continue;
                }
                if (colSet.has(board[col][row])) {
                    return false;
                }
                colSet.add(board[col][row]);
            }
        }

        const subBox = {};
        // subBox check
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    continue;
                }
                const key = `${Math.floor(row / 3) * 3 + Math.floor(col / 3)}`;;

                if (!subBox[key]) {
                    subBox[key] = new Set();
                }

                if (subBox[key].has(board[row][col])) {
                    return false;
                }

                subBox[key].add(board[row][col]);
            }

        }

        return true;

    }
}
