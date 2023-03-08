"use strict";
var LinkedList = /** @class */ (function () {
    function LinkedList(val) {
        this.val = val;
        this.next = null;
        this.head = this;
    }
    LinkedList.prototype.insert = function (val) {
        var temp = this.head;
        while (temp && temp.next) {
            temp = temp.next;
        }
        if (temp) {
            temp.next = new LinkedList(val);
            console.log("Inserted ".concat(val));
        }
    };
    LinkedList.prototype.delete = function (val) {
        var temp = this.head;
        // Deleting First Node
        if (temp && temp.val === val) {
            temp = temp.next;
            this.head = temp;
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
            nodeToBeDeleted.next = null;
            console.log("Deleted ".concat(val));
        }
        console.log("Not Found ".concat(val));
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
var myList = new LinkedList(3);
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
