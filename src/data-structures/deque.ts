import { DoublyLinkedListNode } from "./doubly-linked-list";

class Deque {
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;
  size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push_back(val: number) {
    let temp: DoublyLinkedListNode | null = this.tail;
    const newNode = new DoublyLinkedListNode(val);
    if (temp) {
      temp.next = newNode;
      newNode.prev = temp;
      this.tail = newNode;
    } else {
      this.head = this.tail = newNode;
    }
    this.size++;
    return newNode;
  }

  push_front(val: number) {
    let temp: DoublyLinkedListNode | null = this.head;
    const newNode = new DoublyLinkedListNode(val);

    if (temp) {
      temp.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = this.tail = newNode;
    }
    this.size++;
    return newNode;
  }

  pop_back() {
    let deletedNode = null;
    if (this.size === 0) return deletedNode;
    if (this.size === 1) {
      deletedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return deletedNode;
    }

    if (this.tail) {
      deletedNode = this.tail;
      let prevNode: DoublyLinkedListNode | null = this.tail.prev;
      if (prevNode) {
        this.size--;
        deletedNode.prev = null;
        deletedNode.next = null;
        prevNode.next = null;
        this.tail = prevNode;
      }
      return deletedNode;
    }
  }

  pop_front() {
    let deletedNode = null;
    if (this.size === 0) return deletedNode;
    if (this.size === 1 && this.head) {
      deletedNode = this.head;
      deletedNode.next = null;
      deletedNode.prev = null;
      this.size--;
      this.head = this.tail = null;
      return deletedNode;
    }
    if (this.head?.next) {
      deletedNode = this.head;
      this.head = this.head?.next;
      this.head.prev = null;
      deletedNode.next = null;
      deletedNode.prev = null;
      this.size--;
    }
    return deletedNode;
  }

  print() {
    let temp: DoublyLinkedListNode | null = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

export default Deque;
