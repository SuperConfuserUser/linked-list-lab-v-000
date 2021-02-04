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
  let node = headNode(head, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, head, collection) {
  if (index === 0) {
    return head;
  }
  return nodeAt(index - 1, head, collection).next;
}

function indexAt()