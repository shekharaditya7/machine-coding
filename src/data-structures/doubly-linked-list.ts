export class DoublyLinkedListNode {
  val: number;
  next: DoublyLinkedListNode | null;
  prev: DoublyLinkedListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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

  delete(val: number) {
    if (this.size === 0) return this.head;

    let temp: DoublyLinkedListNode | null = this.head;

    // Deleting First Node
    if (temp && temp.val === val) {
      const deletedNode = temp;
      temp = temp.next;
      this.head = temp;

      deletedNode.next = null;
      deletedNode.prev = null;
      if (this.head) this.head.prev = null;
      this.size--;

      if (this.size === 0) {
        this.head = null;
        this.tail = null;
      }
      return deletedNode;
    }

    while (temp && temp.val !== val) {
      temp = temp.next;
    }
    //Found
    if (temp?.val === val) {
      let prevNode = temp.prev;
      const nodeToBeDeleted = temp;

      //update Tail
      if (temp === this.tail) {
        this.tail = prevNode;
      }
      if (prevNode) {
        prevNode.next = temp.next;
        this.size--;
        if (temp.next?.prev) temp.next.prev = prevNode;

        nodeToBeDeleted.next = null;
        nodeToBeDeleted.prev = null;
        return nodeToBeDeleted;
      }
    }

    return null;
  }

  find(val: number) {
    let temp: DoublyLinkedListNode | null = this.head;
    while (temp && temp.val !== val) {
      temp = temp.next;
    }
    return temp;
  }

  print() {
    let temp: DoublyLinkedListNode | null = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

// const myList = new DoublyLinkedList();
// console.log(myList.push_front(1));
// console.log(myList.push_front(2));
// console.log(myList.push_back(3));
// console.log(myList.push_back(4));
// console.log(myList.pop_back());
// console.log(myList.pop_front());
// console.log(myList.delete(3));
// console.log(myList.push_front(2));
// console.log(myList.push_back(3));
// console.log(myList.push_back(4));
// console.log(myList.find(1));
// myList.print();

export default DoublyLinkedList;
