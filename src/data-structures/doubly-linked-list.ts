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
    return this.head;
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
    return this.head;
  }

  pop_back() {
    if (this.size === 0) return this.head?.val;
    if (this.size === 1) {
      const val = this.head?.val;
      this.head = null;
      this.tail = null;
      this.size--;
      return val;
    }

    if (this.tail) {
      const val = this.tail.val;
      let prevNode: DoublyLinkedListNode | null = this.tail.prev;
      if (prevNode) {
        this.size--;
        this.tail.prev = null;
        prevNode.next = null;
        this.tail = prevNode;
      }
      return val;
    }
  }

  pop_front() {
    if (this.size === 0) return this.head;
    if (this.size === 1) {
      this.size--;
      this.head = this.tail = null;
      return this.head;
    }
    if (this.head?.next) {
      this.head = this.head?.next;
      this.head.prev = null;
      this.size--;
    }
    return this.head;
  }

  delete(val: number) {
    if (this.size === 0) return this.head;

    let temp: DoublyLinkedListNode | null = this.head;

    // Deleting First Node
    if (temp && temp.val === val) {
      temp = temp.next;
      this.head = temp;
      if (this.head) this.head.prev = null;
      this.size--;

      if (this.size === 0) {
        this.head = null;
        this.tail = null;
      }
      return this.head;
    }

    while (temp && temp.val !== val) {
      temp = temp.next;
    }

    //Found
    if (temp?.val === val) {
      let prevNode = temp.prev;

      //update Tail
      if (temp === this.tail) {
        this.tail = prevNode;
      }
      if (prevNode) {
        prevNode.next = temp.next;
        this.size--;
        if (temp.next?.prev) temp.next.prev = prevNode;
        return this.head;
      }
    }

    return this.head;
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
// myList.push_front(1);
// myList.push_front(2);
// myList.push_back(3);
// myList.push_back(4);
// myList.pop_back();
// myList.pop_front();
// myList.delete(3);
// myList.push_front(2);
// myList.push_back(3);
// myList.push_back(4);
// myList.print();

export default DoublyLinkedList;
