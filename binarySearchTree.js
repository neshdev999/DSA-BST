class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    // Because each row in a balanced tree contains 2 times as many nodes as the row before, the width grows exponentially with the number of nodes. This means that conversely, the height must grow logarithmically with the number of nodes. So the average insert case is O(log(n))

    insert(key, value) {
        // console.log('insert is looking at key ' + this.key + '!')
        if (this.key === null) {
            this.key = key;
            this.value = value;
        }

        if (key < this.key) {
            if (this.left === null) {
                this.left = new BinarySearchTree(key, value, this);
            } else {
                return this.left.insert(key, value);
            }
        } else if (key > this.key) {
            if (this.right === null) {
                this.right = new BinarySearchTree(key, value, this);
            } else {
                return this.right.insert(key, value);
            }
        }
    }

    find(key) {
        console.log('find is looking at key ' + this.key + '!')
        if (this.key === key) {
            return this.value;
        } else if (key < this.key && this.left) {
            return this.left.find(key);
        } else if (key > this.key && this.right) {
            return this.right.find(key);
        } else {
            throw Error('Key error')
        }
    }

    remove(key, parent = null) {
        // console.log('remove is looking at key ' + this.key + '!')
        if (this.key === key) {

            // In case remove is called on the key of the root node
            if (parent === null) {
                throw Error('You cannot delete the root node of the tree')
            }

            if (this.key < parent.key) {

                // Node has no children
                if (!this.left && !this.right) {
                    this._replaceWith(null);
                }

                // Node has one child
                else if (this.left && !this.right) {
                    this._replaceWith(this.left);
                } else if (!this.left && this.right) {
                    this._replaceWith(this.right);
                }

                // Node has two children
                else if (this.left && this.right) {
                    // Find the minimum value in the right subtree
                    // Make that node the new parent node
                    // Remove that node, as it is now a duplicate

                    const newParentNode = this.right._findMin();
                    this.key = newParentNode.key;
                    this.value = newParentNode.value;
                    newParentNode.remove(newParentNode.key);
                }
            }
        } else if (key < this.key && this.left) {
            return this.left.remove(key, this);
        } else if (key > this.key && this.right) {
            return this.right.remove(key, this);
        } else {
            throw Error('Key error')
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            } else if (this == this.parent.right) {
                this.parent.right = node;
            }

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

const BST = new BinarySearchTree;
BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);
console.log(BST)

const BST2 = new BinarySearchTree;
BST2.insert('E')
BST2.insert('A')
BST2.insert('S')
BST2.insert('Y')
BST2.insert('Q')
BST2.insert('U')
BST2.insert('E')
BST2.insert('S')
BST2.insert('T')
BST2.insert('I')
BST2.insert('O')
BST2.insert('N')
console.log(BST2)

module.exports = BinarySearchTree;