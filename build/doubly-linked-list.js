"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
        this.head = this;
    }
    DoublyLinkedList.prototype.insert = function (val) {
        var temp = this.head;
        while (temp && temp.next) {
            temp = temp.next;
        }
        if (temp) {
            temp.next = new DoublyLinkedList(val);
            temp.next.prev = temp;
            console.log("Inserted ".concat(val));
        }
    };
    DoublyLinkedList.prototype.delete = function (val) {
        var temp = this.head;
        // Deleting First Node
        if (temp && temp.val === val) {
            temp = temp.next;
            this.head = temp;
            if (this.head) {
                this.head.prev = null;
            }
            console.log("Deleted ".concat(val));
            return;
        }
        while (temp && temp.next && temp.next.val !== val) {
            temp = temp.next;
        }
        //Found
        if ((temp === null || temp === void 0 ? void 0 : temp.next) && (temp === null || temp === void 0 ? void 0 : temp.next.val) === val) {
            var nodeToBeDeleted = temp.next;
            temp.next = nodeToBeDeleted.next;
            if (temp.next) {
                temp.next.prev = nodeToBeDeleted.prev;
            }
            nodeToBeDeleted.next = null;
            nodeToBeDeleted.prev = null;
            console.log("Deleted ".concat(val));
            return;
        }
        console.log("Not Found ".concat(val));
    };
    DoublyLinkedList.prototype.print = function () {
        var temp = this.head;
        while (temp && temp.next) {
            //   console.log(temp.val);
            temp = temp.next;
        }
        while (temp) {
            console.log(temp.val);
            temp = temp.prev;
        }
    };
    return DoublyLinkedList;
}());
var myList = new DoublyLinkedList(3);
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
exports.default = DoublyLinkedList;
