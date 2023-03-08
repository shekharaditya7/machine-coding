class DoublyLinkedList {
  val: number;
  next: DoublyLinkedList | null;
  prev: DoublyLinkedList | null;
  head: DoublyLinkedList | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
    this.head = this;
  }

  insert(val: number) {
    let temp: DoublyLinkedList | null = this.head;
    while (temp && temp.next) {
      temp = temp.next;
    }
    if (temp) {
      temp.next = new DoublyLinkedList(val);
      temp.next.prev = temp;
      console.log(`Inserted ${val}`);
    }
  }

  delete(val: number) {
    let temp: DoublyLinkedList | null = this.head;

    // Deleting First Node
    if (temp && temp.val === val) {
      temp = temp.next;
      this.head = temp;

      if (this.head) {
        this.head.prev = null;
      }

      console.log(`Deleted ${val}`);
      return;
    }

    while (temp && temp.next && temp.next.val !== val) {
      temp = temp.next;
    }

    //Found
    if (temp?.next && temp?.next.val === val) {
      let nodeToBeDeleted = temp.next;
      temp.next = nodeToBeDeleted.next;
      if (temp.next) {
        temp.next.prev = nodeToBeDeleted.prev;
      }
      nodeToBeDeleted.next = null;
      nodeToBeDeleted.prev = null;

      console.log(`Deleted ${val}`);
      return;
    }

    console.log(`Not Found ${val}`);
  }

  print() {
    let temp: DoublyLinkedList | null = this.head;
    while (temp && temp.next) {
      //   console.log(temp.val);
      temp = temp.next;
    }

    while (temp) {
      console.log(temp.val);
      temp = temp.prev;
    }
  }
}

const myList = new DoublyLinkedList(3);
myList.insert(4);
myList.insert(5);
myList.insert(6);
myList.delete(3);
myList.delete(5);
myList.delete(6);
myList.delete(8);
myList.delete(4);
myList.delete(9);
myList.print();

export default DoublyLinkedList;
