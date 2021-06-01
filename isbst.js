const BinarySearchTree = require('./binarySearchTree');

function isBst(tree) {
    if (tree === null) {
        return true;
    }

    if (tree.left && tree.left.key > tree.key) {
        return false;
    }
    if (tree.right && tree.right.key < tree.key) {
        return false;
    }

    let left = isBst(tree.left);
    let right = isBst(tree.right);

    return left && right;
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
const out = isBst(BST);
console.log(out);