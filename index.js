function getName(node) {
  return node.name;
}

function headNode(node, collection) {
  return collection[node];
}

function next(node, collection) {
  return collection[node.next];
}

function nodeAt(index, head, collection) {
  return [index, head];
  let node = headNode(head, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}