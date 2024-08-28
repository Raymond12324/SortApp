"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
class NumberCollection {
    constructor(items) {
        this.items = items;
    }
    get length() {
        return this.items.length;
    }
    compare(leftIndex, rightIndex) {
        return this.items[leftIndex] > this.items[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHanded = this.items[leftIndex];
        this.items[leftIndex] = this.items[rightIndex];
        this.items[rightIndex] = leftHanded;
    }
}
exports.NumberCollection = NumberCollection;
