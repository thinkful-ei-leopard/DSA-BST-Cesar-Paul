// 3 - Build BST CLASS

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // if tree already exists, then start at the root and compare it to the key you want to insert.
    if (this.key == null) {
      this.key = key;
      this.value = value;
      // if new key is less than the node's key, then new node needs to live in the left-hand branch.
    } else if (key < this.key) {
      // if the existing node does not have a left child, meaning that if the left pointer is empty, then we can just instantiate and insert the node as the left child of that node, passing 'this' as the parent
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      // similarly, if the new key is greater than the node's key then you do the same thing, but on the right hand side
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      //If the node only has a left child, then you replace the node with its left child
      else if (this.left) {
        this._replaceWith(this.left);
      }
      //If the node only has a right child, then you replace the node with its right child
      else if (this.right) {
        this._replaceWith(this.right);
      } else {
        /* If the node has no children then
           simply remove it and any references to it 
           by calling "this._replaceWith(null)" */
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  find(key) {
    // if the item is found at the root then return that value
    if (this.key == key) {
      return this.value;
    }
    // if item you are looking for is less than the root, then follow the left child.
    // if there is an existing left child, then recursively check its left and/or right item until you find the item
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    // if item you are looking for is greater than the root, then follow the right child.
    // if there is an existing right child, then recursively check its left and/or right child until you find the item
    else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    // check if node has a parent. if it does and this node is equal to parent's left, then set parent left pointer to node. else if this node is equal to parent's right, set parent right pointer node.
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }
      // if node, set node's parent to this parent.
      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

function createTree() {
  const newTree = new BinarySearchTree();

  newTree.insert(3);
  newTree.insert(1);
  newTree.insert(4);
  newTree.insert(6);
  newTree.insert(9);
  newTree.insert(2);
  newTree.insert(5);
  newTree.insert(7);

  return newTree;
}

// console.log(createTree());

module.exports = { BinarySearchTree, createTree };

// Expected tree:
//        3
//    1 2   4
//           6
//         5  9
//           7
