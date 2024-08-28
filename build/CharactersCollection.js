"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollections = void 0;
class CharactersCollections {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftHanded = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHanded;
        this.data = characters.join('');
    }
}
exports.CharactersCollections = CharactersCollections;
