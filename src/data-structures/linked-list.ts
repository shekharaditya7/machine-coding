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
    return newNode;
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
    return newNode
  }

  pop_back() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return null;
    }

    let temp: LinkedListNode | null = this.head;
    if (temp) {
      while (temp && temp.next !== this.tail) {
        temp = temp.next;
      }
      const deletedNode = this.tail;
      if (temp?.next) temp.next = null;
      this.tail = temp;
      this.size--;
      return deletedNode;
    }
  }

  pop_front() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.size--;
      this.head = this.tail = null;
      return null;
    }
    let deletedNode = null;
    if (this.head?.next) {
      deletedNode = this.head;
      this.head = this.head?.next;
      deletedNode.next = null;
      this.size--;
    }
    return deletedNode;
  }

  delete(val: number) {
    let temp: LinkedListNode | null = this.head;

    // Deleting First Node
    if (temp && temp.val === val) {
      const deletedNode = temp;
      temp = temp.next;
      this.head = temp;
      this.size--;
      deletedNode.next = null;

      if (this.size === 0) {
        this.tail = this.head;
      }
      return deletedNode;
    }

    while (temp && temp.next && temp.next.val !== val) {
      temp = temp.next;
    }

    //Found
    if (temp?.next && temp?.next.val === val) {
      let nodeToBeDeleted = temp.next;

      //update Tail
      if (nodeToBeDeleted === this.tail) {
        this.tail = temp;
      }
      temp.next = nodeToBeDeleted.next;
      nodeToBeDeleted.next = null;

      this.size--;
      return nodeToBeDeleted;
    }
    return null;
  }

  find(val:number){
    let temp: LinkedListNode | null = this.head;
    while (temp && temp.val !== val) {
      temp = temp.next;
    }
    return temp;
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
myList.push_front(2);
myList.push_back(3);
myList.push_back(4);
myList.find(1);
myList.print();

export default LinkedList;
