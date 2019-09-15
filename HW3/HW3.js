/* /// Function Declarations

function greet(firstName = 'John', lastName = 'doe'){
   if(typeof firstName === 'undefined'){firstName = 'John'}
   if(typeof lastName === 'undefined'){lastName = 'Doe'}
    //console.log('hello');
    return 'hello ' + firstName + ' ' + lastName; 
}

/* console.log(greet(/* 'john' , 'Doe' */ /* 'steve', 'smith' *//* )); */ 

// function expressions

/* const square = function(x = 3){
    return x*x;
};
 */
/* console.log(square(/* 8 *//* )) */

//Immidiately invokable function expressions -Ifies

/* (function(){
    console.log('ifie Ran..');
})(); */

/* (function(name){
    console.log('Hello ' + name);
})('Brad'); */

// property methods

/* const todo = {
    add: function(){
        console.log('Add todo');
    },
    edit: function(id){
        console.log(`edit todo ${id}..`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete(); */