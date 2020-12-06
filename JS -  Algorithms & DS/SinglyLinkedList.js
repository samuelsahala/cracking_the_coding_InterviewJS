class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode; // new first head
      this.tail = this.head; // add tail to the first new head
    } else {
      this.tail.next = newNode; // already, take the last item (tail.next) and add the new node,
      this.tail = newNode; // take the flag tail and set it to the new new as the last one in the list.
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("you");
console.log(list);
