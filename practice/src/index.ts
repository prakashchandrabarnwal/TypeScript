import { Sorter } from './sorter';
import { NumberCollection } from './NumbersCollection';
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from './LinkedList';
const numberCollection = new NumberCollection([2, 1, 7, 5]);
numberCollection.sort();
console.log(numberCollection.data);


const charCollection = new CharacterCollection("Xcasx");
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(12);;
linkedList.add(1);
linkedList.add(100);

linkedList.sort();
linkedList.print();