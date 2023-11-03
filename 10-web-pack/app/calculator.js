
export function add(x,y){
    return x + y
}

export function subtract(x,y){
    return x - y;
}

// There can be ONLY one 'default' export in a file
let utils = {
    getTime(){
        return new Date().getTime()
    }
}

export default utils;