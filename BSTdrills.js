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

function heightBST(tree) {
  if (!tree) {
    return 0;
  }

  return 1 + Math.max(heightBST(tree.left), heightBST(tree.right));
}

// console.log(heightBST(myTree));

// height of myTree is 5

// QUESTION 6 - IS IT A BST?

// function isBST(node) {
//   if (!node) {
//     return true;
//   }

//   let prev;

//   if (!isBST(node.left)) {
//     return false;
//   }

//   if (prev !== null && node.key <= prev) {
//     return false;
//   }

//   prev = node.key;

//   if (!isBST(node.right)) {
//     return false;
//   }

//   return true;
// }

// console.log(isBST(myTree));

// 7 - 3RD LARGEST NODE

let countObj = {
  counter: 0,
  highest: 0,
};

function thirdLargest(node) {
  let { counter, highest } = countObj;

  if (!node) {
    return;
  }

  if (node.key > highest) {
    highest = node.key;
    counter++;
  }

  if (node.left) {
    thirdLargest(node.left);
  }

  if (counter === 3) {
    console.log(highest);
    return highest; // ?
  }

  thirdLargest(node.right);
}

console.log(thirdLargest(myTree));

// console.log(myTree);

// 8. Balanced BST

function BalancedBST(tree) {
  if (!tree) {
    return;
  }

  let distance = heightBST(tree.left) - heightBST(tree.right);
  if (distance > 1 || distance < -1) {
    return false;
  } else {
    return true;
  }
}

console.log(BalancedBST(myTree));

// 9. Are they the same BST?

function sameBST(array1, array2) {
  let countObj = {};

  for (let i = 0; i < array1.length; i++) {
    countObj[array1[i]] = countObj[array1[i]] + 1 || 1;
  }

  for (let i = 0; i < array2.length; i++) {
    let num = array2[i];
    if (countObj[num]) {
      countObj[num] -= 1;
    } else {
      countObj[num] = 1;
    }
  }

  let testArray = Object.values(countObj);

  for (let i = 0; i < testArray.length; i++) {
    if (testArray[i] !== 0) {
      return false;
    }
  }
  return true;
}

function sameBST2(array1, array2) {
  let string1 = '';
  let string2 = '';

  let sortedArray1 = array1.sort();
  let sortedArray2 = array2.sort();

  for (let i = 0; i < sortedArray1.length; i++) {
    string1 += sortedArray1[i];
  }

  for (let i = 0; i < sortedArray2.length; i++) {
    string2 += sortedArray2[i];
  }

  return string1 === string2 ? true : false;

}

console.log(sameBST2([1, 2, 3, 4], [1, 2, 3, 4]));
