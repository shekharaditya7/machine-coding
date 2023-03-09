"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var doubly_linked_list_1 = require("./doubly-linked-list");
var Deque = /** @class */ (function () {
    function Deque() {
        this.size = 0;
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    Deque.prototype.push_back = function (val) {
        var temp = this.tail;
        var newNode = new doubly_linked_list_1.DoublyLinkedListNode(val);
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
    Deque.prototype.push_front = function (val) {
        var temp = this.head;
        var newNode = new doubly_linked_list_1.DoublyLinkedListNode(val);
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
    Deque.prototype.pop_back = function () {
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
    Deque.prototype.pop_front = function () {
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
    Deque.prototype.print = function () {
        var temp = this.head;
        while (temp) {
            console.log(temp.val);
            temp = temp.next;
        }
    };
    return Deque;
}());
exports.default = Deque;
