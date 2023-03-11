import BinaryTree, { BinaryTreeNode } from "./binary-tree";

class BinarySearchTree extends BinaryTree {
  insert(val: number) {
    if (!this.root) {
      const newNode = new BinaryTreeNode(val);
      this.root = newNode;
      return this.root;
    }
    return this.insertNode(this.root, val);
  }
  insertNode(root: BinaryTreeNode | null, val: number): BinaryTreeNode | null {
    if (!root) {
      const newNode = new BinaryTreeNode(val);
      return newNode;
    }
    if (val < root.val) root.left = this.insertNode(root.left, val);
    else root.right = this.insertNode(root.right, val);
    return root;
  }

  find(val: number): BinaryTreeNode | null {
    if (!this.root) return null;
    return this.findNode(this.root, val);
  }

  findNode(root: BinaryTreeNode | null, val: number): BinaryTreeNode | null {
    if (!root) return null;
    if (root.val === val) return root;
    if (val < root.val) return this.findNode(root.left, val);
    else return this.findNode(root.right, val);
  }

  delete(val: number) {
    if (!this.root) return null;
    this.root = this.deleteNode(this.root, val);
  }
  deleteNode(root: BinaryTreeNode | null, val: number): BinaryTreeNode | null {
    if (!root) return null;
    if (root.val === val) {
      //no child
      if (root.left === null && root.right === null) {
        return null;
      } else if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      } else {
        let temp: BinaryTreeNode | null = this.inorderSuccesor(root.right);
        if (temp) {
          root.val = temp?.val;
          root.right = this.deleteNode(root.right, temp.val);
        }
        return root;
      }
    }

    if (val < root.val) {
      root.left = this.deleteNode(root.left, val);
      return root;
    } else {
      root.right = this.deleteNode(root.right, val);
      return root;
    }
  }

  // next largest node
  inorderSuccesor(root: BinaryTreeNode | null) {
    if (!root) return null;
    while (root.left !== null) root = root.left;
    return root;
  }
}

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

export default BinarySearchTree;
