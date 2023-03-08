"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(val) {
        this.val = val;
        this.next = null;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.size = 0;
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.push_back = function (val) {
        var temp = this.tail;
        var newNode = new LinkedListNode(val);
        if (temp) {
            temp.next = newNode;
            this.tail = temp.next;
        }
        else {
            this.head = this.tail = newNode;
        }
        this.size++;
        return this.head;
    };
    LinkedList.prototype.push_front = function (val) {
        var temp = this.head;
        var newNode = new LinkedListNode(val);
        if (temp) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            this.head = this.tail = newNode;
        }
        this.size++;
        return this.head;
    };
    LinkedList.prototype.pop_back = function () {
        if (this.size === 0)
            return this.head;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--;
            return this.head;
        }
        var temp = this.head;
        if (temp) {
            while (temp && temp.next !== this.tail) {
                temp = temp.next;
            }
            if (temp === null || temp === void 0 ? void 0 : temp.next)
                temp.next = null;
            this.tail = temp;
            this.size--;
            return this.head;
        }
    };
    LinkedList.prototype.pop_front = function () {
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
            this.size--;
        }
        return this.head;
    };
    LinkedList.prototype.delete = function (val) {
        var temp = this.head;
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
        if ((temp === null || temp === void 0 ? void 0 : temp.next) && (temp === null || temp === void 0 ? void 0 : temp.next.val) === val) {
            var nodeToBeDeleted = temp.next;
            //update Tail
            if (nodeToBeDeleted === this.tail) {
                this.tail = temp;
            }
            temp.next = nodeToBeDeleted.next;
            nodeToBeDeleted.next = null;
            this.size--;
            return this.head;
        }
        return this.head;
    };
    LinkedList.prototype.print = function () {
        var temp = this.head;
        while (temp) {
            console.log(temp.val);
            temp = temp.next;
        }
    };
    return LinkedList;
}());
var myList = new LinkedList();
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
exports.default = LinkedList;
