// Tree Treminology:
// Root - the top node in a tree.
// Child - A node directly connected to another node when moving away from the Root.
// Parent - The converse notion of a child.
// Siblings - A group of nodes with the same parent.
// Leaf - A node with no children.
// Edge - The connection between one node and another.

// Examples: HTML DOM, Network Routing, File Systems OS

// Trees
// Binary Trees
// Binary Search Tree
// -- every parent node has at most TWO children.
// -- every node to the LEFT of a parent node is always less thean the parent.
// -- every node to the RIGHT of a parent node is always greater then the parent.

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value == current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

let tree = new BinarySearchTree();
