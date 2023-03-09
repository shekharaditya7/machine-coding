import DoublyLinkedList from "./doubly-linked-list";
class LRUCache {
  length: number;
  hash: Map<number, number>;
  list: DoublyLinkedList;

  constructor(length: number) {
    this.length = length;
    this.list = new DoublyLinkedList();
    this.hash = new Map();
  }

  get(val: number) {
    if (this.hash.has(val)) {
      // Cache Hit, update the order
      this.list.delete(val);
      this.list.push_front(val);
      this.list.print();
      return val;
    }

    if (this.hash.size < this.length) {
      // Cache Miss
      this.hash.set(val, val);
      this.list.push_front(val);
      this.list.print();
      return val;
    }

    // Cache full, delete the least recently used entry
    const valToBeDeleted = this.list.pop_back();
    if (valToBeDeleted?.val) this.hash.delete(valToBeDeleted.val);

    this.hash.set(val, val);
    this.list.push_front(val);
    this.list.print();
    return val;
  }
}

// const lruCache = new LRUCache(4);
// lruCache.get(1);
// lruCache.get(2);
// lruCache.get(3);
// lruCache.get(4);
// lruCache.get(5);
// lruCache.get(4);

export default LRUCache;
