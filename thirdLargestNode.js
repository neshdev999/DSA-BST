const BinarySearchTree = require('./binarySearchTree');


function thirdLargestNode(tree) {
    let flatTree = displayBST(tree);
    let orderedTreeArray = flatTree.split('')

    return orderedTreeArray[orderedTreeArray.length - 3]
}

const BST = new BinarySearchTree;
BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);
console.log(BST);
const out = thirdLargestNode(BST);
console.log(out);