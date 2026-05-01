    class Solution {
        /**
         * @param {string[]} words
         * @param {string} order
         * @return {boolean}
         */
        isAlienSorted(words, order) {
            
            let dict = {};

            for(let i = 0; i < order.length ; i++){
                dict[order[i]] = i+1; 
            }

            for(let k = 0; k < words.length-1; k++){
                let w1 = words[k];
                let w2 = words[k+1];

                let len = Math.min(w1.length, w2.length);
                let relative = false;

                for(let p = 0; p < len ; p++){
                    if(w1[p] !== w2[p]){

                        if(dict[w1[p]] > dict[w2[p]]) return false;

                        relative = true;
                        break;
                    }

                }
                
                if(!relative && w1.length > w2.length) return false;
            }

            return true;
        }
    }
