/*
 * @lc app=leetcode id=2257 lang=typescript
 *
 * [2257] Count Unguarded Cells in the Grid
 */

// @lc code=start

function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
    const building = Array.from({ length: m }, () => Array(n).fill("E"));
    for (let i = 0; i < guards.length; i++) {
        building[guards[i][0]][guards[i][1]] = "G";
    }
    for (let j = 0; j < walls.length; j++) {
        building[walls[j][0]][walls[j][1]] = "W";
    }
    function guardsView(rows: number, cols: number): void {
        //down
        for (let r = rows + 1; r < m; r++) {
            if (building[r][cols] != "G" && building[r][cols] != "W") {
                building[r][cols] = "A";
            } else {
                break;
            }
        }
        //up
        for (let l = rows - 1; l >= 0; l--) {
            if (building[l][cols] != "G" && building[l][cols] != "W") {
                building[l][cols] = "A";
            } else {
                break;
            }
        }
        //left
        for (let u = cols - 1; u >= 0; u--) {
            if (building[rows][u] != "G" && building[rows][u] != "W") {
                building[rows][u] = "A";
            } else {
                break;
            }
        }
        //Right
        for (let d = cols + 1; d < n; d++) {
            if (building[rows][d] != "G" && building[rows][d] != "W") {
                building[rows][d] = "A";
            } else {
                break;
            }
        }
    }
    for (let k = 0; k < guards.length; k++) {
        guardsView(guards[k][0], guards[k][1]);
    }
    let ans = 0;
    for (let p = 0; p < building.length; p++) {
        for (let q = 0; q < building[p].length; q++) {
            if (building[p][q] === "E") ans++;
        }
    }
    return ans;
};
// @lc code=end

