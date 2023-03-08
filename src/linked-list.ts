class LinkedList {
  val: number;
  next: LinkedList | null;
  head: LinkedList | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.head = this;
  }

  insert(val: number) {
    let temp: LinkedList | null = this.head;
    while (temp && temp.next) {
      temp = temp.next;
    }
    if (temp) {
      temp.next = new LinkedList(val);
      console.log(`Inserted ${val}`);
    }
  }

  delete(val: number) {
    let temp: LinkedList | null = this.head;

    // Deleting First Node
    if (temp && temp.val === val) {
      temp = temp.next;
      this.head = temp;
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
      nodeToBeDeleted.next = null;

      console.log(`Deleted ${val}`);
    }

    console.log(`Not Found ${val}`);
  }

  print() {
    let temp: LinkedList | null = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

const myList = new LinkedList(3);
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
