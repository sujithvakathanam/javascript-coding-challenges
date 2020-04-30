const todoList = [ {
    title : 'Accounts verification',
    completed : true}
    , {
    title : 'Gardening',
        completed : false
    },
    {
    title: 'Incometax filing',
    completed: true
    },
    {
     title: 'Paytax',
        completed: false
    }
]

const sorttodoList = function(todoList){
    todoList.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1 // a with false will remain followed by b with true
        } else if(a.completed && !b.completed){
            return 1 //a with true will be replaced. b with false will come first followed by a with true
        } else{
            return 0 // both a is false and b is false , it will remain as such , no change in their positions
        }
    })
}
sorttodoList(todoList);
console.log(todoList);
