console.log('web workers demo [process-data.js]')
function doWork(){
    for(let i = 1; i <= 10000; i++){
        for(let j = 0; j < 5000; j++)
        for(let k = 0; k < 500; k++){
        }
        if (i % 100 === 0){
            let percentCompleted = (i / 10000) * 100;
            self.postMessage({type : 'progress', percentCompleted : percentCompleted});
        }
    }
    self.postMessage({type : 'done'});
}

self.addEventListener('message', function(evtArg){
    if (evtArg.data === 'start'){
        console.log('work started');
        doWork();
        console.log('work completed');
        // the following line will throw an error as the document object is not accessible in the worker
        // document.getElementById('divMessages').innerHTML += 'Work Completed' + '<br/>'
        
    } else {
        console.log('unknown message :', evtArg.data);
    }
})