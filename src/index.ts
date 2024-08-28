import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";

const collection = new NumberCollection([10, 3, -5, 0]);
const sort = new Sorter(collection);
sort.sort();
console.log(sort.collection);