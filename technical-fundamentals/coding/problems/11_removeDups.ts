// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  const seen = new Set<T>();
  let current = head;
  let prev: Node<T> | undefined;

  while (current) {
    if (seen.has(current.value)) {
	    if (prev) prev.next = current.next;
    } else {
      seen.add(current.value);
      prev = current;
    }
    current = current.next;
  }
  return head;
}
