var node = {
  value: 125,
  left: null,
  right: null
}

function BinarySearchTree() {
  this._root = null;
}

BinarySearchTree.prototype = {
  // restore constructor
  constructor: BinarySearchTree,

  add: function(value){
    var node = {
          value: value,
          left: null,
          right: null
        },
        current;

    if(this._root === null){
      this._root = node;
    } else {
      current = this._root;

      while(true){
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            break;
          } else{
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        } else{
          break;
        }
      }
    }
  },

  contains: function(value){
    var found       = false,
        current     = this._root;

    while(!found && current){
      if (value < current.left) {
        current = current.left;
      } else if (value > current.right) {
          current = current.right;
      } else{
        found = true;
      }
    }

    return found;
  },

  remove: function(value){
    var found     = false,
        parent    = null,
        current   = this._root,
        childCount,
        replacement,
        replacementParent;
    // MAKE SURE there is a node to search
    while(!found && current){
      // if the value is less than the current node, go left
      if (value < current.value) {
        parent = current;
        current = current.left;
        // Else if its greater than current, GO RIGHT!
      } else if (value > current.value){
        parent = current;
        current = current.right;
        // OR you found it!
      } else {
        found = true;
      }
    }

    if (found) {
      childCount = (current.left !== null ? 1 : 0) +
                   (current.right !== null ? 1 : 0);
      if (current === this._root) {
        switch(childCount){
          case 0:
            this._root = null;
            break;
          case 1:
            this._root = (current.right === null ?
                          current.left : current.right);
            break;
          case 2:
            // todo
        }
      } else {
        switch (childCount) {
          case 0:
            if (current.value < parent.value) {
              parent.left = null;
            } else {
              parent.right = null;
            }
            break;
          case 1:
          case 2:
        }
      }
    };
  },

  // Takes an argument "process" which is a function to be run on each node in the tree
  traverse: function(process){
    // Helper Function
    function inOrder(node){
      if (node) {
        // Traverse Left subtree
        if(node.left !== null){
          inOrder(node.left);
        }

        // Call the process method on this node
        process.call(this, node);

        // traverse right subtree
        if (node.right !== null) {
          inOrder(node.right);
        };
      }
    }
    inOrder(this._root);
  },

  size: function(){
    var length = 0;
    this.traverse(function(node){
      length++;
    });
    return length;
  },

  toArray: function(){
    var result = [];
    this.traverse(function(node){
      result.push(node.value);
    })
    return result;
  },

  toString: function(){
    return this.toArray().toString();
  },
}


var tree = new BinarySearchTree;

tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);

// console.log(tree.contains(3));
// console.log(tree.size());
// console.log(tree.toArray());
console.log(tree.toString());

// tree.remove(3);
// console.log(tree.contains(3));