import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharactersCollections } from "./CharactersCollection";


const collectionChar = new CharactersCollections('dcbaz');
const collectionNumber = new NumberCollection([10, 3, -5, 0]);
const sort = new Sorter(collectionChar);
sort.sort();
console.log(sort.collection);