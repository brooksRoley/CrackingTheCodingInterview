// Pseudo classical instantiation to have one property; "Head", which will initially point to null.
function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(value) {
  var node = {
    value: value,
    next: null
  }
  if (this.head === null) {
    this.head = node;
  } else {
    var current = this.head;
    while(current.next) {
      current = current.next
    }
    current.next = node;
  }
  return node;
};

// Makes sure the head is defined, if it is it begins by checking if the head == the node. If that is the case, it will remove the head and have the linked list point to "next". Otherwise it traverses til it finds the node. If it does, it will take the node out. If it does not, it will return null.
LinkedList.prototype.remove = function(node) {
  var current,
      value = node.value;

  if(this.head !== null) {
    if(this.head === node) {
      this.head = this.head.next;
      node.next = null;
      return value;
    }
    current = this.head;
    while(current.next) {
      if (current.next === node) {
        current.next = node.next;
        return value
      }
      current = current.next;
    }
  }
}

var list = new LinkedList();
list.add(4);
var obj = list.add(5);
list.add(6);
list.remove(obj);
console.log(list);
