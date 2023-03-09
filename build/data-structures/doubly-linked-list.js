"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedListNode = void 0;
var DoublyLinkedListNode = /** @class */ (function () {
    function DoublyLinkedListNode(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    return DoublyLinkedListNode;
}());
exports.DoublyLinkedListNode = DoublyLinkedListNode;
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.size = 0;
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    DoublyLinkedList.prototype.push_back = function (val) {
        var temp = this.tail;
        var newNode = new DoublyLinkedListNode(val);
        if (temp) {
            temp.next = newNode;
            newNode.prev = temp;
            this.tail = newNode;
        }
        else {
            this.head = this.tail = newNode;
        }
        this.size++;
        return newNode;
    };
    DoublyLinkedList.prototype.push_front = function (val) {
        var temp = this.head;
        var newNode = new DoublyLinkedListNode(val);
        if (temp) {
            temp.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            this.head = this.tail = newNode;
        }
        this.size++;
        return newNode;
    };
    DoublyLinkedList.prototype.pop_back = function () {
        var deletedNode = null;
        if (this.size === 0)
            return deletedNode;
        if (this.size === 1) {
            deletedNode = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return deletedNode;
        }
        if (this.tail) {
            deletedNode = this.tail;
            var prevNode = this.tail.prev;
            if (prevNode) {
                this.size--;
                deletedNode.prev = null;
                deletedNode.next = null;
                prevNode.next = null;
                this.tail = prevNode;
            }
            return deletedNode;
        }
    };
    DoublyLinkedList.prototype.pop_front = function () {
        var _a, _b;
        var deletedNode = null;
        if (this.size === 0)
            return deletedNode;
        if (this.size === 1 && this.head) {
            deletedNode = this.head;
            deletedNode.next = null;
            deletedNode.prev = null;
            this.size--;
            this.head = this.tail = null;
            return deletedNode;
        }
        if ((_a = this.head) === null || _a === void 0 ? void 0 : _a.next) {
            deletedNode = this.head;
            this.head = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
            this.head.prev = null;
            deletedNode.next = null;
            deletedNode.prev = null;
            this.size--;
        }
        return deletedNode;
    };
    DoublyLinkedList.prototype.delete = function (val) {
        var _a;
        if (this.size === 0)
            return this.head;
        var temp = this.head;
        // Deleting First Node
        if (temp && temp.val === val) {
            var deletedNode = temp;
            temp = temp.next;
            this.head = temp;
            deletedNode.next = null;
            deletedNode.prev = null;
            if (this.head)
                this.head.prev = null;
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
        if ((temp === null || temp === void 0 ? void 0 : temp.val) === val) {
            var prevNode = temp.prev;
            var nodeToBeDeleted = temp;
            //update Tail
            if (temp === this.tail) {
                this.tail = prevNode;
            }
            if (prevNode) {
                prevNode.next = temp.next;
                this.size--;
                if ((_a = temp.next) === null || _a === void 0 ? void 0 : _a.prev)
                    temp.next.prev = prevNode;
                nodeToBeDeleted.next = null;
                nodeToBeDeleted.prev = null;
                return nodeToBeDeleted;
            }
        }
        return null;
    };
    DoublyLinkedList.prototype.find = function (val) {
        var temp = this.head;
        while (temp && temp.val !== val) {
            temp = temp.next;
        }
        return temp;
    };
    DoublyLinkedList.prototype.print = function () {
        var temp = this.head;
        while (temp) {
            console.log(temp.val);
            temp = temp.next;
        }
    };
    return DoublyLinkedList;
}());
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
exports.default = DoublyLinkedList;
