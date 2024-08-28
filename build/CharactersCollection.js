"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollections = void 0;
class CharactersCollections {
    constructor(items) {
        this.items = items;
    }
    get length() {
        return this.items.length;
    }
    compare(leftIndex, rightIndex) {
        return this.items[leftIndex].toLowerCase() > this.items[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const characters = this.items.split('');
        const leftHanded = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHanded;
        this.items = characters.join('');
    }
}
exports.CharactersCollections = CharactersCollections;
