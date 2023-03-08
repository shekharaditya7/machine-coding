class LinkedListNode {
  val: number;
  next: LinkedListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push_back(val: number) {
    let temp: LinkedListNode | null = this.tail;
    const newNode = new LinkedListNode(val);
    if (temp) {
      temp.next = newNode;
      this.tail = temp.next;
    } else {
      this.head = this.tail = newNode;
    }
    this.size++;
    return this.head;
  }

  push_front(val: number) {
    let temp: LinkedListNode | null = this.head;
    const newNode = new LinkedListNode(val);

    if (temp) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = this.tail = newNode;
    }
    this.size++;
    return this.head;
  }

  pop_back() {
    if (this.size === 0) return this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return this.head;
    }

    let temp: LinkedListNode | null = this.head;
    if (temp) {
      while (temp && temp.next !== this.tail) {
        temp = temp.next;
      }
      if (temp?.next) temp.next = null;
      this.tail = temp;
      this.size--;
      return this.head;
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
      this.size--;
    }
    return this.head;
  }

  delete(val: number) {
    let temp: LinkedListNode | null = this.head;

    // Deleting First Node
    if (temp && temp.val === val) {
      temp = temp.next;
      this.head = temp;
      this.size--;

      if (this.size === 0) {
        this.tail = this.head;
      }
      return this.head;
    }

    while (temp && temp.next && temp.next.val !== val) {
      temp = temp.next;
    }

    //Found
    if (temp?.next && temp?.next.val === val) {
      let nodeToBeDeleted = temp.next;
      temp.next = nodeToBeDeleted.next;
      nodeToBeDeleted.next = null;

      this.size--;
      return this.head;
    }
    return this.head;
  }

  print() {
    let temp: LinkedListNode | null = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

const myList = new LinkedList();
myList.push_front(1);
myList.push_front(2);
myList.push_back(3);
myList.push_back(4);
myList.pop_back();
myList.pop_front();
myList.delete(3);
myList.print();

export default LinkedList;
