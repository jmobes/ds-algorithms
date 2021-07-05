class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (!value) return;
    if (!this.length) {
      this.head = node;
      this.tail = node;
      node.next = null;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (!this.length) return undefined;
    let current = this.head;
    let tail = current;
    while (current.next) {
      current = current.next;
      tail = current;
    }
    this.tail = tail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}
