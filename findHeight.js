const BinarySearchTree = require('./binarySearchTree');

function findBstHeight(tree) {
    if (tree === null) {
        return -1;
    }

    let left = findBstHeight(tree.left);
    let right = findBstHeight(tree.right);

    if (left > right) {
        return left + 1;
    } else {
        return right + 1;
    }
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
const height = findBstHeight(BST);
console.log('Height: ' + height);