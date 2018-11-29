/* Name: Can you get the loop ?
 * Level: 5kyu
 * Instructions: You are given a node that is the beginning of a linked list.
 * This list always contains a tail and a loop.
 *
 * Your objective is to determine the length of the loop.
 *
 * // Use the `getNext' method or 'next' property to get the following node.
 * node.getNext()
 * node.next
 *
 * Note: do NOT mutate the nodes!
 *
 * Thanks to shadchnev, I broke all of the methods from the Hash class.
 * Don't miss dmitry's article in the discussion after you pass the Kata !!
 */

function loop_size(node) {
  let seenNodes = [];
  while (seenNodes.indexOf(node) < 0) {
    seenNodes.push(node);
    node = node.next;
  }

  return seenNodes.length - seenNodes.indexOf(node);
}
