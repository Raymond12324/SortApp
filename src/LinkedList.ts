class ElementNode {
  next: ElementNode | null = null;

  constructor(public data: number) {}
}

class LinkedList {
  head: ElementNode | null = null;

  add(value: number): void {
    const node = new ElementNode(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    return 0;
  }

  at(index: number): void {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }
  }

  swap(leftHand: number, rightHand: number): void {}

  compare(leftHand: number, rightHand: number): boolean {
    return true;
  }

  print(): void {}
}
