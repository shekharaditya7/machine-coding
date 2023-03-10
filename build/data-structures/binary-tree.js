"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.BinaryTreeNode = void 0;
var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return BinaryTreeNode;
}());
exports.BinaryTreeNode = BinaryTreeNode;
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.printInOrder = function (root) {
        if (root) {
            this.printInOrder(root.left);
            console.log(root.val);
            this.printInOrder(root.right);
        }
    };
    BinaryTree.printPreOrder = function (root) {
        if (root) {
            console.log(root.val);
            this.printInOrder(root.left);
            this.printInOrder(root.right);
        }
    };
    BinaryTree.printPostOrder = function (root) {
        if (root) {
            this.printInOrder(root.left);
            this.printInOrder(root.right);
            console.log(root.val);
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
// const myTree = new BinaryTree();
// myTree.root = new BinaryTreeNode(3);
// myTree.root.left = new BinaryTreeNode(1);
// myTree.root.right = new BinaryTreeNode(5);
// myTree.root.left.right = new BinaryTreeNode(2);
// myTree.root.left.left = new BinaryTreeNode(0);
// myTree.root.right.left = new BinaryTreeNode(4);
// BinaryTree.printInOrder(myTree.root);
exports.default = BinaryTree;
