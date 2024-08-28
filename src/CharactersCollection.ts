export class CharactersCollections {
    constructor(public items: string) {

    }

    get length(): number {
        return this.items.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.items[leftIndex].toLowerCase() > this.items[rightIndex].toLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.items.split('');
        const leftHanded = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHanded;
        this.items = characters.join('');
    }
}