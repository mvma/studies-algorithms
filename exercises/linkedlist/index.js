// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        if (this.head == null) {
            this.head = new Node(data);
        } else {
            let newHead = new Node(data, this.head);
            this.head = newHead;
        }
    }

    size() {
        let size = 0;

        let node = this.head;
        while (node !== null) {
            size++;

            node = node.next;
        }

        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        while (node !== null) {

            if (node.next === null) {
                break;
            }

            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        if (this.head === null) {
            return;
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let next = this.head.next;

        while (next.next) {
            if (next.next === null) {
                break;
            }

            previous = next;
            next = next.next;

        }

        previous.next = null;
    }

    insertLast(data) {
        if (this.head == null) {
            this.head = new Node(data);
            return;
        }

        if (this.head.next == null) {
            this.head.next = new Node(data);
            return;
        }

        let previous = this.head.next;
        while (previous.next) {
            previous = previous.next;
            if (previous.next == null) {
                break;
            }
        }

        previous.next = new Node(data);
    }

    getAt(index) {
        if (index === 0 || this.head === null) return this.head;

        let next = this.head.next;
        let i = 1;
        while (i < index && next !== null) {

            i++;
            next = next.next;
        }

        return next;
    }

    /*removeAt(index) {
        if (this.head === null) return;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previous = this.head;
        let next = this.head.next;

        let i = 1;
        while (i < index && next != null) {
            i++;

            previous = next;
            next = next.next;
        }

        if (next === null) {
            previous.next = next;
        } else {
            previous.next = next.next;
        }
    }*/

    removeAt(index) {
        if (this.head === null) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index - 1);

        if (previous === null || previous.next === null) return;

        previous.next = previous.next.next;
    }

    /*
    insertAt(data, index) {
        let newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let properIndex = Math.min(this.size(), index);

        let previous = this.getAt(properIndex - 1);

        if (previous === null) {
            return;
        };

        newNode.next = previous.next;
        previous.next = newNode;
    } */

    insertAt(data, index) {
        let newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let properIndex = this.getAt(index - 1) || this.getLast();

        let previous = this.getAt(properIndex - 1);

        if (previous === null) {
            return;
        };

        newNode.next = previous.next;
        previous.next = newNode;
    }

    forEach(fn) {
        let node = this.head;
        while (node) {
            fn(node);

            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while (node) {
            yield node;

            node = node.next;
        }
    }
}

module.exports = {
    Node,
    LinkedList
};