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

    // async
    function addAsync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            let result = x + y;
            console.log(`   [@service] returning result`)
            return result;
        }, 5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering addAsync`)
        let result = addAsync(x,y);
        console.log(`[@client] result = ${result}`)
    }

    window['addAsyncClient'] = addAsyncClient;

})()