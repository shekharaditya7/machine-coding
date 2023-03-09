"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var doubly_linked_list_1 = require("./doubly-linked-list");
var Queue = /** @class */ (function () {
    function Queue() {
        this.size = 0;
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    Queue.prototype.push_back = function (val) {
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
    Queue.prototype.pop_front = function () {
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
    Queue.prototype.print = function () {
        var temp = this.head;
        while (temp) {
            console.log(temp.val);
            temp = temp.next;
        }
    };
    return Queue;
}());
exports.default = Queue;
