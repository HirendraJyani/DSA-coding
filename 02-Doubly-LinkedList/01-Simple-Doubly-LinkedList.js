class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.prev = newNode;
    this.length = 1;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(5);
