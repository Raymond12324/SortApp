import { Sorter } from "./Sorter";

export class CharactersCollections extends Sorter {
  constructor(public items: string) {
    super();
  }

  get length(): number {
    return this.items.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.items[leftIndex].toLowerCase() > this.items[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.items.split("");
    const leftHanded = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHanded;
    this.items = characters.join("");
  }
}
