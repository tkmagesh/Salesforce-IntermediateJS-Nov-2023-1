/* 
    Create an object and assign to a variable 'spinner'
    
    The object must have the following methods:
    - up()
    - down()
    
    Method Behavior:
    spinner.up() //=> 1
    spinner.up() //=> 2
    spinner.up() //=> 3
    spinner.up() //=> 4

    spinner.down() //=> 3
    spinner.down() //=> 2
    spinner.down() //=> 1
    spinner.down() //=> 0
    spinner.down() //=> -1

    IMPORTANT:
        The outcome of the up() & down() methods SHOULD NOT be able to be influenced from outside

        The following should NOT be possible
        window.count = 1000
        spinner.up() //=> 1001

        OR

        spinner.count = 1000
        spinner.up() //=> 1001
*/

// ver1.0
var spinner = (function (){
    var count = 0

    function up(){
        return ++count;
    }

    function down(){
        return --count
    }

    var spinner = {
        up : up,
        down : down
    }
    return spinner;
})()

// ver2.0
var spinner = (function(){
    var count = 0;
    return {
        up : function(){
            return ++count;
        },
        down: function(){
            return --count;
        }
    }
})()

// ver3.0 (spinner factory)
function spinnerFactory(){
    var count = 0;
    return {
        up : function(){
            return ++count;
        },
        down: function(){
            return --count;
        }
    }
}

var s1 = spinnerFactory()
var s2 = spinnerFactory()