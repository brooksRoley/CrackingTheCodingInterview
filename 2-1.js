function LinkedList(){
  this.head = null;
}
LinkedList.prototype.add = function(data){
  var node = {
    data: data,
    next: null
  }
  if (this.head === null) {
    this.head = node;
  } else {
    var current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
  return node;
}

LinkedList.prototype.delete = function(data){
  if (this.head.data === data) {
    this.head = this.head.next;
  } else {
    var current = this.head;
    while(current.next){
      if (current.next.data === data) {
        current.next = current.next.next;
        break;
      };
      current = current.next;
    }
  }
}
Array.prototype.includes = function(element){
  for (var i = 0; i < this.length; i++) {
    if(this[i] === element){
      return true;
    }
  };
  return false;
}

LinkedList.prototype.remove_duplicates = function(){
  var has = [];
  var current = this.head;
  while(current !== null){
    if(has.includes(current.data)){
      this.delete(current.data);
    } else {
      has.push(current.data);
    }
    current = current.next;
  }
}

LinkedList.prototype.find = function(k){
  var current = this.head;
  for (var i = 1; i < k; i++) {
    current = current.next;
  };
  return current;
}

LinkedList.prototype.print = function(){
  var current = this.head;
  while(current !== null){
    // console.log(current);
    console.log(current.data);
    current = current.next;
  }
}


// Ok, So there are some things wrong about this. It sorts  the selection > the
// partition midpoint but not those <. It has to add to the new linked list n times.
// It has some space complexity in a new linked list and an array the size of >=
// elements. I want to refactor this to be more linked list and pointer specific.
LinkedList.prototype.partition = function(midpoint){
  var less = new LinkedList;
  var greater = [];

  var current = this.head;
  while(current !== null){
    if (current.data < midpoint) {
      less.add(current.data);
    } else {
      greater.push(current.data);
    }
    current = current.next;
  }
  greater.sort();
  for (var i = 0; i < greater.length; i++) {
    less.add(greater[i]);
  };
  return less;
}

LinkedList.prototype.sum_data = function(){
  var current = this.head;

}

LinkedList.prototype.sum_data_reverse = function(){

}


var list = new LinkedList;
list.add(1);
list.add(2);
list.add(3);

// // 2-1
// // Write code to remove duplicates from an unsorted linked list.
// // FOLLOW UP
// // How would you solve this problem if a temporary buffer is not allowed?
// list.add(1);
// list.remove_duplicates();
// list.print();

// // 2-2
// // Implement an algorithm to find the kth to last element of a singly linked list.
// console.log(list.find(1));
// console.log(list.find(2));
// console.log(list.find(3));
// console.log(list.find(4));

// 2-3
// // Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.
// list.delete(2);
// list.delete(3);
// list.print();

// // 2-4
// // Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.
list.add(8);
list.add(7);
list.add(6);
list.add(8);
list = list.partition(7);
list.print();

// // 2-5
// // You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the Ts digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.


// 2-7
// Implement a function to check if a linked list is a palindrome.