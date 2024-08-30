import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter {
  constructor(public items: number[]) {
    super();
  }

  get length(): number {
    return this.items.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.items[leftIndex] > this.items[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHanded = this.items[leftIndex];
    this.items[leftIndex] = this.items[rightIndex];
    this.items[rightIndex] = leftHanded;
  }
}
