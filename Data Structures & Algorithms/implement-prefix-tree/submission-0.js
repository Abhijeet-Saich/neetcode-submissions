class Node {
    constructor(){
        this.childs = {},
        this.isEnd = false
    }
}


class PrefixTree {
    constructor() {
        this.root = new Node();   // initialize root node
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for(let x of word){
            if(!curr.childs[x]) curr.childs[x] = new Node();
            curr = curr.childs[x]
        }
        curr.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for(let x of word){
            if(!curr.childs[x]) return false;
            curr = curr.childs[x];
        }
        return curr.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for(let x of prefix){
            if(!curr.childs[x]) return false;
            curr = curr.childs[x];
        }
        return true;
    }
}
