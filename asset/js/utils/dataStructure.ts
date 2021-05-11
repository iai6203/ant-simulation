export class Queue {
  private readonly array: any[];

  constructor() {
    this.array = [];
  }

  public getLength(): number {
    return this.array.length;
  }

  public enqueue(value: any): void {
    this.array.push(value);
  }

  public dequeue(): any {
    return this.array.shift();
  }
}