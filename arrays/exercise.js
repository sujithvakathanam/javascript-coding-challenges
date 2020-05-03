const todoList = [{title     : 'Accounts verification',
  completed : true},
{
  title     : 'Gardening',
  completed : false
},
{
  title     : 'Incometax filing',
  completed : true
},
{
  title     : 'Paytax',
  completed : false
}];

const sorttodoList = function (todoList) {
  todoList.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1; // A with false will remain followed by b with true
    } else if (a.completed && !b.completed) {
      return 1; // A with true will be replaced. b with false will come first followed by a with true
    }

    return 0; // Both a is false and b is false , it will remain as such , no change in their positions
  });
};
sorttodoList(todoList);
console.log(todoList);
