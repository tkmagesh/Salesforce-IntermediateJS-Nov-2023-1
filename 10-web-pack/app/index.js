/* 
import * as calc from './calculator'
console.log(calc); 
*/

/* 
import * as calc from './calculator'
console.log(calc.add(100,200))
console.log(calc.subtract(100,200)) 
*/

/* 
import * as calc from './calculator'
const {add, subtract} = calc;
console.log(add(1000,2000))
console.log(subtract(1000,2000))  
*/

/* 
import {add, subtract} from './calculator'
console.log(add(2000,2000))
console.log(subtract(2000,2000))   
*/

// importing the default exported object
import utilsObj from './calculator'
console.log(utilsObj.getTime())
