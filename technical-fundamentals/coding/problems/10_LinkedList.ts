// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;
  length: number;

  constructor(head?: Node<T>) {
    this.head = head ?? undefined;
    this.tail = head ?? undefined;
    if (head) { this.length = 1; }
  }

  push(value: T): void {
    let newNode: Node<T> = {value: value};
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  
  filter(fn: (value: T) => boolean): LinkedList<T> {
     const newList = new LinkedList<T>();
     let current = this.head;

     while (current) {
       if (fn(current.value)) {
         newList.push(current.value);
       }
       current = current.next;
     }
     return newList;
  }

  visit(fn: (value: T) => void): void {
    let current = this.head;
    while (current) {
      fn(current.value)
      current = current.next;
    }
  }
  
  remove(fn: (value: T) => boolean): void {
    while (this.head && fn(this.head.value)) { 
      this.head = this.head.next; 
      this.length--; 
    }
    let current = this.head;
    while (current && current.next) {
      if (fn(current.next.value)) {
        current.next = current.next.next;
	this.length--;
      } else {
        current = current.next;
      }
      this.tail = current;
    }
  }
  
  merge(other: LinkedList<T>): LinkedList<T> {
    const newList = new Linkedlist<T>();
    let current = this.head;
    while (current) {
      newList.push(current.value);
      current = current.next;
    }
    current = other.head;
    while (current) {
      newList.push(current.value);
      current = current.next;
    }
    return newList;
  }
  
  print(): void {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.value + " -> ",
      current = current.next;
    }
    output += "undefined";
    console.log(output);
  }

  // extra

  // find(fn: (value: T) => boolean): Node<T> | undefined {}

  // get(index: number): Node<T> | undefined {}

  // iterator(): LinkedListIterator {}
}

const list = new LinkedList();
