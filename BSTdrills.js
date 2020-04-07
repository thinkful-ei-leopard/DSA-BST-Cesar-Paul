const { BinarySearchTree, createTree } = require('./BST');

const myTree = createTree();

// QUESTION 4

// takes a BST as input, recursively calls and adds values (or keys) together
// runtime O(N) because going through every node in the tree

// function tree(t) {
//   if (!t) {
//     return 0;
//   }
//   return tree(t.left) + t.key + tree(t.right);
// }

// console.log(tree(myTree));

// QUESTION 5

// function heightBST(tree) {
//   if (!tree) {
//     return 0;
//   }

//   return 1 + Math.max(heightBST(tree.left), heightBST(tree.right));
// }

// console.log(heightBST(myTree));

// height of myTree is 5

// QUESTION 6 - IS IT A BST?

function isBST(node) {
  if (!node) {
    return true;
  }

  let prev;

  if (!isBST(node.left)) {
    return false;
  }

  if (prev !== null && node.key <= prev) {
    return false;
  }

  prev = node.key;

  if (!isBST(node.right)) {
    return false;
  }

  return true;
}

console.log(isBST(myTree));


// 7 - 3RD LARGEST NODE
