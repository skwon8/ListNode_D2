class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
};

class List {
    constructor() {
        this.head = null;
    }

    /* Determine whether the list is empty. */
    IsEmpty() {
        if (this.head == null) {
            console.log("This list is empty")
            return this
        }
        console.log("this is not empty")
        return this
    }

    /* Insert a node with the given value to the end of the list */
    PushBack(value) {
        if (this.head == null) {
            this.head = new Node(value)
            return this
        }
        let runner = this.head
        while (runner.next != null) {
            runner = runner.next
        }
        runner.next = new Node(value)
        return this
    }

    /* Insert an array of nodes with the given values to the end of the list. */
    PushBackN(arr) {
        if (arr.length == 0) {
            return this
        }
        if (this.head == null) {
            let i = 0
            while (i < arr.length) {
                this.PushBack(arr[i])
                i++
            }
            return this
        }
        let runner = this.head
        while (runner.next != null) {
            runner = runner.next
        }
        let i = 0
        while (i < arr.length) {
            this.PushBack(arr[i])
            i++
        }
        return this
    }

    Iterate() {
        if (this.head == null) {
            console.log("List is empty")
            return this
        }
        var runner = this.head
        while (runner != null) {
            console.log(`Value: ${runner.value}`)
            runner = runner.next
        }
        return this
    }

    PushFront(value) {
        if (this.head == null) {
            this.head = new Node(value)
            return this
        }

        var new_node = new Node(value)

        new_node.next = this.head
        this.head = new_node
        return this

    }

    PopFront() {
        if (this.head == null) {
            console.log('List is empty')
            return this
        }

        if (this.head.next == null) {
            this.head = null
            return this
        }

        this.head = this.head.next
        return this
    };

    Average() {
        if (this.head == null) {
            console.log('List is empty');
            return this
        }

        var count = 0;
        var total = 0;
        var runner = this.head;

        while (runner != null) {
            total += runner.value;
            count++;
            runner = runner.next;
        }

        var avg = Math.round(total / count);
        console.log(`There are ${count} items in the list, the average is: ${avg}`);
        return this
    }
};

let test_data1 = 123;
let test_data2 = 234;
let test_data3 = 345;
let test_data4 = 456;
let test_data5 = 567;
let test_data6 = 678;

/* Create our list */
let list = new List();

/* Inserts a few nodes at the beginning of the list: */
list.PushFront(test_data1);
list.PushFront(test_data2);
list.PushFront(test_data3);

/* Removes and returns the head of list, but updates the list's head */
let old_head = list.PopFront();

/* Inserts a few more nodes at the beginning of the list */
list.PushFront(test_data4);
list.PushFront(test_data5);
list.PushFront(test_data6);

/* Iterates our list, so we can see our node values */
list.Iterate(value => console.log(value));

/* Expected Output: */
/*
    678
    567
    456
    234
    123
*/

console.log(list.Average()); /* Expected: 411 */