"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var binary_tree_1 = __importStar(require("./binary-tree"));
var BinarySearchTree = /** @class */ (function (_super) {
    __extends(BinarySearchTree, _super);
    function BinarySearchTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinarySearchTree.prototype.insert = function (val) {
        if (!this.root) {
            var newNode = new binary_tree_1.BinaryTreeNode(val);
            this.root = newNode;
            return this.root;
        }
        return this.insertNode(this.root, val);
    };
    BinarySearchTree.prototype.insertNode = function (root, val) {
        if (!root) {
            var newNode = new binary_tree_1.BinaryTreeNode(val);
            return newNode;
        }
        if (val < root.val)
            root.left = this.insertNode(root.left, val);
        else
            root.right = this.insertNode(root.right, val);
        return root;
    };
    BinarySearchTree.prototype.find = function (val) {
        if (!this.root)
            return null;
        return this.findNode(this.root, val);
    };
    BinarySearchTree.prototype.findNode = function (root, val) {
        if (!root)
            return null;
        if (root.val === val)
            return root;
        if (val < root.val)
            return this.findNode(root.left, val);
        else
            return this.findNode(root.right, val);
    };
    BinarySearchTree.prototype.delete = function (val) {
        if (!this.root)
            return null;
        this.root = this.deleteNode(this.root, val);
    };
    BinarySearchTree.prototype.deleteNode = function (root, val) {
        if (!root)
            return null;
        if (root.val === val) {
            //no child
            if (root.left === null && root.right === null) {
                return null;
            }
            else if (root.left === null) {
                return root.right;
            }
            else if (root.right === null) {
                return root.left;
            }
            else {
                var temp = this.inorderSuccesor(root.right);
                if (temp) {
                    root.val = temp.val;
                    root.right = this.deleteNode(root.right, temp.val);
                }
                return root;
            }
        }
        if (val < root.val) {
            root.left = this.deleteNode(root.left, val);
            return root;
        }
        else {
            root.right = this.deleteNode(root.right, val);
            return root;
        }
    };
    // next largest node
    BinarySearchTree.prototype.inorderSuccesor = function (root) {
        if (!root)
            return null;
        while (root.left !== null)
            root = root.left;
        return root;
    };
    return BinarySearchTree;
}(binary_tree_1.default));
// const myTree = new BinarySearchTree();
// myTree.insert(6);
// myTree.insert(4);
// myTree.insert(2);
// myTree.insert(5);
// myTree.insert(9);
// myTree.insert(7);
// myTree.insert(8);
// myTree.insert(10);
// myTree.delete(9);
// console.log(myTree.find(2));
// BinarySearchTree.printInOrder(myTree.root);
// console.log(JSON.stringify(myTree.root, null, 4));
exports.default = BinarySearchTree;
