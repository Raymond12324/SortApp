"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const collection = new NumbersCollection_1.NumberCollection([10, 3, -5, 0]);
const sort = new Sorter_1.Sorter(collection);
sort.sort();
console.log(sort.collection);
