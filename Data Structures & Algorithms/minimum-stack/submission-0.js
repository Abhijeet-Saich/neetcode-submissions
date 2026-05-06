class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        let len = this.minStack.length;
        if(len === 0 || val <= this.minStack[len-1]) this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {

        let len = this.minStack.length;

        if(!len) return;

        let popped = this.stack.pop();
        if(popped == this.minStack[len - 1]) this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        let len = this.stack.length;

        if(!len) return;
        return this.stack[len-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
