export class BinaryTreeNode {
  val: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  root: BinaryTreeNode | null;

  constructor() {
    this.root = null;
  }

  static printInOrder(root: BinaryTreeNode | null) {
    if (root) {
      this.printInOrder(root.left);
      console.log(root.val);
      this.printInOrder(root.right);
    }
  }
  static printPreOrder(root: BinaryTreeNode | null) {
    if (root) {
      console.log(root.val);
      this.printInOrder(root.left);
      this.printInOrder(root.right);
    }
  }
  static printPostOrder(root: BinaryTreeNode | null) {
    if (root) {
      this.printInOrder(root.left);
      this.printInOrder(root.right);
      console.log(root.val);
    }
  }
}

// const myTree = new BinaryTree();
// myTree.root = new BinaryTreeNode(3);
// myTree.root.left = new BinaryTreeNode(1);
// myTree.root.right = new BinaryTreeNode(5);
// myTree.root.left.right = new BinaryTreeNode(2);
// myTree.root.left.left = new BinaryTreeNode(0);
// myTree.root.right.left = new BinaryTreeNode(4);
// BinaryTree.printInOrder(myTree.root);

export default BinaryTree;
