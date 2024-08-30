"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumberCollection extends Sorter_1.Sorter {
    constructor(items) {
        super();
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
