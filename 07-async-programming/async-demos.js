(function(){
    // sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        let result = x + y;
        console.log(`   [@service] returning result`)
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering addSync`)
        let result = addSync(x,y);
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    // async (using callbacks)
    function addAsync(x,y, callbackFn){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            let result = x + y;
            console.log(`   [@service] returning result`)
            // return result // cannot "return" from a function that will be executed in future
            callbackFn(result);
        }, 5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering addAsync`)
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`)
        });
    }

    window['addAsyncClient'] = addAsyncClient;

    // sync
    function divideSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        if (y === 0) 
            throw new Error('cannot divide by zero');
        let result = x / y;
        console.log(`   [@service] returning result`)
        return result;
    }

    function divideSyncClient(x,y){
        console.log(`[@client] triggering divideSync`)
        try{
            let result = divideSync(x,y);
            console.log(`[@client] result = ${result}`)
        } catch(e){
            console.log(`[@client] caught exception: ${e}`)
        }
    }
    window['divideSyncClient'] = divideSyncClient;

    // Handling errors in async operations (using "error first callback" technique)
    // async (using callbacks)
    function divideAsync(x,y, callbackFn){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(() => {
            if (y === 0) {
                // throw new Error('cannot divide by zero'); // cannot "throw" an exception from a function that will be executed in future
                let err = new Error('cannot divide by zero');
                callbackFn(err, null);
                return;
            }
            let result = x / y;
            console.log(`   [@service] returning result`)
            callbackFn(null, result);
        }, 5000);
    }

    function divideAsyncClient(x,y){
        console.log(`[@client] triggering divideAsync`)
        divideAsync(x,y, function(err, result){
            if (err){
                console.log(`[@client] caught exception: ${err}`)
                return
            }
            console.log(`[@client] result = ${result}`)
        });
    }
    window['divideAsyncClient'] = divideAsyncClient;

    // async (using promises)
    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        let p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                let result = x + y;
                console.log(`   [@service] returning result`)
                // communicate the result to the promise?
                resolveFn(result); // the promise is being resolved
            }, 5000);
        });
        
        return p;
    }

    window['addAsyncPromise'] = addAsyncPromise;



   /* 
    function addAsyncClient(x,y){
        console.log(`[@client] triggering addAsync`)
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`)
        });
    }

    window['addAsyncClient'] = addAsyncClient; */

})()