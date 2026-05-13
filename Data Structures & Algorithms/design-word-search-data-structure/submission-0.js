
class Node {
    constructor(){
        this.child = {},
        this.isEnd = false
    }
}



class WordDictionary {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for(let x of word){
            if(!curr.child[x]) curr.child[x] = new Node();
            curr = curr.child[x];
        }

        curr.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let len = word.length;

        function recur(k, node){

            if(k == len) return node.isEnd
                
            let found = false;

            if(word[k] == '.'){
                for(let x of [...Object.keys(node.child)]){
                    found = found || recur(k+1, node.child[x])
                    if(found) return found;
                }
            }else{
                let char = node.child[word[k]];
                if(char) found = found || recur(k+1,node.child[word[k]])
            }

            return found;
        }


        return recur(0, this.root)
    }
}
