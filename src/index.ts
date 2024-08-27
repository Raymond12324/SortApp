class Sorter{
    constructor(public collection: number[]) {}

    sort(): number[] {
        const {length} = this.collection;

        for(let i = 0; i < length; i++){
            for(let j = 0; j < length - i - 1; j++){
                if(this.collection[i] > this.collection[j+1]){
                   let leftHanded = this.collection[j];
                   this.collection[j] = this.collection[j+1];
                   this.collection[j+1] = leftHanded;
                }
            }
        }
        return this.collection;
    }
}


const sort = new Sorter([10, 3, -5, 0]);
console.log(sort.sort());