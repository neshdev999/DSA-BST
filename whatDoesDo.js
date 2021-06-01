function tree(t) {
    if (!t) {
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

//This function recursively sums every element in a tree Runtime: O(n) as the function is called for every node in the tree