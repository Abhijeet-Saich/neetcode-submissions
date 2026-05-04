class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {

        let blocked = new Set(deadends);

        if(blocked.has("0000")) return -1;

        let queue = ["0000"];        
        let steps = 0

        while(queue.length > 0){
            let size = queue.length;

            for(let i = 0 ; i < size; i++){
                let node = queue.shift();

                if(node == target) return steps;
                if(blocked.has(node)) continue;
                blocked.add(node);

                for(let j = 0; j < 4; j++){
                    let digit = parseInt(node[j]);

                    for(let move of [1,-1]){
                        let newDigit = (digit + move + 10) % 10;

                        let next = node.slice(0, j) + newDigit + node.slice(j + 1);

                        if (!blocked.has(next)) {
                            queue.push(next);
                        }
                    }
                }
            }

            steps++;
        }

        return -1;
    }
}
