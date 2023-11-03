function addAsyncCallback(x,y, callbackFn){
    console.log(`   [@Service] processing ${x} and ${y}`)
    setTimeout(function(){
        let result = x + y;
        console.log(`   [@Service] returning result`)
        callbackFn(result);
    }, 4000)
}

test("addAsyncCallback", function(done){
    addAsyncCallback(1,2, function(result){
        expect(result).toBe(3);
        done();
    })

})

 function addAsyncPromise(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`)
        let p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                let result = x + y;
                console.log(`   [@Service] returning result`)
                resolveFn(result);
            }, 4000)
        })
        return p;
    }

test("addAsyncPromise", function(done){
    addAsyncPromise(1,2).then(function(result){
        expect(result).toBe(3);
        done();
    })
})

function divideAsyncPromise(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`)
        return new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                if ( y === 0){
                    let e = new Error("Cannot divide by zero")
                    return rejectFn(e)
                }
                let result = x / y;
                console.log(`   [@Service] returning result`)
                resolveFn(result);
            }, 4000)
        })
        
    }

async function addAndDivide(x,y,z){
    return addAsyncPromise(x,y)
        .then(result => divideAsyncPromise(result, z))
}

test("addAndDivide", function(done){
    addAndDivide(10,20,2).then(result => {
        expect(result).toBe(15);
        done();
    })
    .catch(err => {
        
    })
}, 10000)
