"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedListNode = /** @class */ (function () {
    function DoublyLinkedListNode(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    return DoublyLinkedListNode;
}());
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
        return this.head;
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
        return this.head;
    };
    DoublyLinkedList.prototype.pop_back = function () {
        if (this.size === 0)
            return this.head;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--;
            return this.head;
        }
        if (this.tail) {
            var prevNode = this.tail.prev;
            if (prevNode) {
                this.size--;
                this.tail.prev = null;
                prevNode.next = null;
                this.tail = prevNode;
            }
        }
        return this.head;
    };
    DoublyLinkedList.prototype.pop_front = function () {
        var _a, _b;
        if (this.size === 0)
            return this.head;
        if (this.size === 1) {
            this.size--;
            this.head = this.tail = null;
            return this.head;
        }
        if ((_a = this.head) === null || _a === void 0 ? void 0 : _a.next) {
            this.head = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
            this.head.prev = null;
            this.size--;
        }
        return this.head;
    };
    DoublyLinkedList.prototype.delete = function (val) {
        var _a;
        if (this.size === 0)
            return this.head;
        var temp = this.head;
        // Deleting First Node
        if (temp && temp.val === val) {
            temp = temp.next;
            this.head = temp;
            if (this.head)
                this.head.prev = null;
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
        if ((temp === null || temp === void 0 ? void 0 : temp.val) === val) {
            var prevNode = temp.prev;
            //update Tail
            if (temp === this.tail) {
                this.tail = prevNode;
            }
            if (prevNode) {
                prevNode.next = temp.next;
                this.size--;
                if ((_a = temp.next) === null || _a === void 0 ? void 0 : _a.prev)
                    temp.next.prev = prevNode;
                return this.head;
            }
        }
        return this.head;
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
var myList = new DoublyLinkedList();
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
myList.print();
exports.default = DoublyLinkedList;
