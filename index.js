function getName(node) {
  return node.name;
}

function headNode(node, collection) {
  return collection[node];
}

function next(node, collection) {
  return collection[node.next];
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList;
  }
  return nodeAt(index - 1, linkedList, collection).next;
}

function indexAt(node, collection, linkedList) {
  let index = 0;
  while (nodeAt(index, linkedList, collection) !== node) {
    index++;
  }
  return index;
}

insertNodeAt()