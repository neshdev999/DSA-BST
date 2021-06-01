function isBalanced(tree) {
    if (tree === null) {
        return true;
    }

    if (
        tree.left &&
        (tree.left.left || tree.left.right) &&
        !tree.right
    ) {
        return false;
    }
    if (
        tree.right &&
        (tree.right.left || tree.right.right) &&
        !tree.left
    ) {
        return false;
    }

    let left = isBalanced(tree.left);
    let right = isBalanced(tree.right);

    return left && right;
}