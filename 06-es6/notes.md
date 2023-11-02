# ES6

## let
    for(let i = 0; i < 10; i++){
    }

## const
    const pi = 3.14
    const emp = { id : 100 }

## array destructuring
    let nos = [3,1,4,2,5]
    let [x,y] = nos

## rest operator (array)
    let nos = [3,1,4,2,5]
    let [x,y, ...z] = nos

    function add(...values){
        let result = 0;
        for (let idx = 0; idx < values.length; idx++)
            result += values[idx]
        return result
    }
    add(10)
    add(10,20,30,40,50)

## spread operator (array)
    let nos = [3,1,4,2,5]
    let newNos = [ ...nos, 10,20,30 ]

    function add(x,y){
        return x + y;
    }
    
    var nos = [10,20]
    add(...nos)

## object destructuring
    let product = { id : 100, name : 'Pen', cost : 10 }
    let {cost , id } = product
    let {cost : x, id : y} = product // when the variables have to different from the attribute names

## rest operator (object)
    let product = { id : 100, name : 'Pen', cost : 10 }
    let {cost, ...z} = product

## spread operator (object)
    let product = { id : 100, name : 'Pen', cost : 10 }

    // cloning the object with new attributes added
    let newProduct = { ...product, category : 'stationary' }

    // cloning the object with updating existing attribute (cost)
    let newProduct = { ...product, cost : 20, category : 'stationary' }

## default arguments
    function add(x = 10, y = 20){
        return x + y;
    }
    
    add() //=> 30
    add(100) //=> 120
    add(undefined, 200) //=> 210
    add(100,200) //=> 300

## arrow functions
    /*
    //ways of creating functions
    //1. function statement
    function add(x,y){
        return x + y;
    }

    //2. function expression
    let add = function(x,y){
        return x + y;
    }

    //3. array function
    let add = (x,y) => {
        return x + y;
    }
    */
    //if the function body has only one expression
    let add = (x,y) => x + y;

## iterators (for..of)
    let nos = [3,1,4,2,5]
    for (let no of nos)
        console.log(no)

## class
    class Employee {
        
        // instance attributes
        _id = 0;
        name = '';
        salary = 0;

        // static attributes
        static type = 'Employee'

        //setter (id)
        set id(value){
            console.log('setter[id] invoked');
            if (value < 0)
                throw new Error('invalid id');
            this._id = value;
        }
        
        //getter(id)
        get id(){
            console.log('getter[id] invoked');
            return this._id;
        }
        
        // constructor method
        constructor(id, name, salary){
            console.log('constructor invoked');
            this._id = id;
            this.name = name;
            this.salary = salary;
        }

        // method
        format(){
            return `id = ${this.id}, name = ${this.name}, salary = ${this.salary}`
        }

        // static method
        static IsEmployee(obj){
            return obj instanceof Employee;
        }
    }  

    // usage
    let emp = new Employee(100, 'Magesh', 10000)
    
    emp.format()

    emp.id
    
    emp.id = 200
    emp.id = -200
    
    Employee.type
    
    Employee.IsEmployee(emp)
    
    Employee.IsEmployee({})

## class inheritence
    class FulltimeEmployee extends Employee {
    
        benefits = '';
        
        constructor(id, name, salary, benefits){
            super(id, name, salary);
            this.benefits = benefits
        }

        //override the format() method
        format(){
            return `${super.format()}, benefits = ${this.benefits}`
        }
    }

