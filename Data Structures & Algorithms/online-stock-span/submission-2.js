class StockSpanner {
    constructor() {
        this.maxStack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {

        let count = 1;
        while(this.maxStack.length && price >= this.maxStack[this.maxStack.length - 1].val){
            count += this.maxStack.pop().span;
        }
        
        let obj = {
            val : price,
            span : count
        }

        this.maxStack.push(obj);
        return count;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
