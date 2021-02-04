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
  return collection;
}