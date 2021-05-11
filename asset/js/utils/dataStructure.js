export class Queue {
    constructor() {
        this.array = [];
    }
    getLength() {
        return this.array.length;
    }
    enqueue(value) {
        this.array.push(value);
    }
    dequeue() {
        return this.array.shift();
    }
}
