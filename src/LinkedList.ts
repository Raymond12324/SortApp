class ElementNode {
    next: ElementNode | null = null;

    constructor(public data: number) { }
}

export class LinkedList {
    head: ElementNode | null = null;

    add(value: number): void {
        const newNode = new ElementNode(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }

        tail.next = newNode;
    }

    get length(): number {
        if (!this.head) {
            return 0;
        }

        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }

    at(index: number): ElementNode{
        if (!this.head) {
            throw new Error("Index out of bounds");
        } 
        let counter = 0;
        let node : ElementNode | null  = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    }

    compare(leftHand: number, rightHand: number): boolean {
        if(!this.head){
           throw new Error("List is empty"); 
        }
        return this.at(leftHand).data > this.at(rightHand).data;
    }

    swap(leftHand: number, rightHand: number): void { 
        const leftNode = this.at(leftHand);
        const rightNode = this.at(rightHand);


        const leftHandValue = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHandValue;

    }

    print(): void { 
        if(!this.head){
            return;
        }

        let node : ElementNode | null = this.head ;
        while(node){
            console.log(node.data);
            node = node.next;
        }
    }
}
