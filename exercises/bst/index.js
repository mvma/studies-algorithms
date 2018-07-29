// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (this.data > data) {
            this.left = this.add(this.left, data)
        } else {
            this.right = this.add(this.right, data);
        }
    }

    contains(data) {
        if (this.data == data) {
            return this;
        }

        if (this.data > data && this.left) {
            return this.left.contains(data);
        } else if (this.data < data && this.right) {
            return this.right.contains(data);
        } else {
            return null;
        }
    }

    add(node, data) {
        if (node === null) {
            return new Node(data);
        }

        if (node.data > data) {
            node.left = this.add(node.left, data);
        } else {
            node.right = this.add(node.right, data);
        }

        return node;
    }
}

module.exports = Node;