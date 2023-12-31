# Functions

## Implicit values available in a function
- this
- arguments

# arguments
- array like object that contains all the argument values passed to the function
- arguments.length
- arguments[0]
- arguments[1]
- ....
```
ex:
function add(){
    var result = 0;
    for (var idx = 0; idx < arguments.length; idx++){
        result += arguments[idx];
    }
    return result;
}
add(10)
add(10,20)
add(10,20,30,40,50)
```

# Invocation Context (this)

In JavaScript, it DOES NOT matter **WHERE** the function is OR **WHO** owns the function. What matters is **HOW** the function is invoked!!

## Function Invocation Patterns (ways of invoking a function)
### 1. As a method of an object (this -> object)
    
    
    var emp = {
        name : 'Magesh'
    }

    function whoAmI(){
        console.log('I am ', this.name)
    }
    
    emp['whoAmI'] = whoAmI

    emp.whoAmI()

    // make the function as a method of another object
    var product = {
        name : 'Pen'
    }
    
    product['whoAmI'] = whoAmI

    product.whoAmI()

    //ex:2
    function greet(salutation, message){
        console.log(salutation + this.name + ', ' + message)
    }
    
    // How would you invoke the greet function in such a way that it prints the following?
    // 'Mr.Magesh, Have a nice day!'
    
    // make the function a method of emp object
    emp['greet'] = greet;
    
    // invoke the function as a method
    emp.greet('Mr.', 'Have a nice day!')
    
### 2. As a function (this -> global scope [window])
    
    function whoAmI(){
        console.log('I am ', this.name)
    }

    window.name = 'Chrome Browser'

    whoAmI()
    

### 3. Using the 'call()' method of the function
    
    function fn(){
        console.log('fn invoked');
    }

    fn.call()

    //ex:2
    var emp = {
        name : 'Magesh'
    }
    
    function greet(salutation, message){
        console.log(salutation + this.name + ', ' + message)
    }
    
    // How would you invoke the greet function in such a way that it prints the following (without making the function a method of the object)?
    // 'Mr.Magesh, Have a nice day!'
    
    greet.call(emp, 'Mr.', 'Have a nice day!')
    

### 4. Using the 'apply()' method of the function
    
    function fn(){
        console.log('fn invoked');
    }

    fn.apply()

    //ex:2
    var emp = {
        name : 'Magesh'
    }

    function greet(salutation, message){
        console.log(salutation + this.name + ', ' + message)
    }

    // How would you invoke the greet function in such a way that it prints the following (without making the function a method of the object)?
    // 'Mr.Magesh, Have a nice day!'

    greet.apply(emp, ['Mr.', 'Have a nice day!'])

### 5. As an Immediately Invoked Function Expression
    (function fn(){
        console.log('fn invoked')
    })()

    var result = (function add(x,y){
        return x + y;
    })(100,200)

### 6. Using the "new" keyword (constructor functions)

    function Product(id, name, cost){
        //this => new object
        this.id = id
        this.name = name
        this.cost = cost

        //to be fixed
        this.display = function(){
            console.log(this.id, this.name, this.cost)
        }
        // this => returned by default
    }

    var pen = new Product(100, 'Pen', 10)

    The object created will maintain a reference to the constructor function through the "constructor" attribute

    console.log(pen.constructor) //=> f Product(){...}
    