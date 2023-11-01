# JavaScript Language

# What is it?
- Loosely typed
    - Any value can be assigned to any variable
    - Use 'typeof' to get the typeof of the data in a variable
- Dynamic
    - JavaScript objects are dictionaries (collection of key/value pairs)
    ```
        var car = {
            color : 'red',
            model : 'toyota'
        }
        
        //update the value of an existing attribute (use the '.' notation)
        car.color = 'blue'

        //introduce a new attribute 'year' (use the '[]' notation)
        car['year'] = 2023
    ```
    - Attributes & methods can be added / removed on the go
    ```
    var car = {}

    // attributes are added on the go
    car.color = 'red'
    car.model = 'Toyota'

    console.log(car.color)
    console.log(car.model)

    // attributes are deleted on the go
    delete car.color
    delete car.model
    ```
    - Enumerate through the attributes of an object
    ```
    for(var attrName in car){
        console.log(attrName, car[attrName])
    }
    ```
    - Check for the existence of an attribute
    ```
    if (car.hasOwnProperty('category')){
        console.log('car.category = ', car.category);
    } else {
        console.log('category does not exist')
    }
    ```
- Functional (Functions are objects)
    - Creation - 1
    ```
    // function statement
    function fn(){
    }

    // function expression
    var fn = function(){
    }
    ```
    - Creation - 2
    ```
    var fn = new Function()

    var sayHi = new Function('console.log("Hi there!");')

    var add = new Function('x', 'y', 'return x + y;')
    ```
    - Functions can have attributes
    ```
    function fn(){
    }
    
    fn['id'] = 100
    ```
    - Functions can have methods
    ```
    function fn(){
    }

    fn['whoAmI'] = function(){
        console.log('i am a function')
    }

    fn.whoAmI()
    ```
    - Functions can be passed as arguments to other functions
    - Functions can be returned as return values from other other functions


- Object Based