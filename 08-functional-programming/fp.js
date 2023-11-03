var products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];

/* 
Write the APIs for the following (DO NOT use the builtin array methods)
    - sort
    - filter
    - groupBy
*/

/* 
console.group('Initial List')
console.table(products)
console.groupEnd()

console.group('Sort')
console.group('[Specific] Products by id')
function sortProductsById(){
    for (let i = 0; i < products.length-1; i++)
        for (let j = i+1; j < products.length; j++){
            if (products[i].id > products[j].id){
                [products[i], products[j]] = [products[j], products[i]]
            }    
        }
}
sortProductsById()
console.table(products)
console.groupEnd()
console.groupEnd() 
*/


function useCase(title, fn){
    console.group(title)
    fn()
    console.groupEnd()
}

useCase('Initial List', function(){
    console.table(products)
})

useCase('Sort', function(){
    useCase('[Specific] Products by id', function(){
        function sortProductsById(){
            for (let i = 0; i < products.length-1; i++)
                for (let j = i+1; j < products.length; j++){
                    if (products[i].id > products[j].id){
                        [products[i], products[j]] = [products[j], products[i]]
                    }    
                }
        }
        sortProductsById()
        console.table(products)
    })
    useCase('[Generic] Any list by any attribute OR comparer', () => {
        function sort(list, comparer){
            let comparerFn;
            if (typeof comparer === 'function') comparerFn = comparer;
            if (typeof comparer === 'string'){
                comparerFn = (p1, p2) => {
                    if (p1[comparer] > p2[comparer]) return 1;
                    if (p1[comparer] < p2[comparer]) return -1;
                    return 0;
                }
            }
            if (!comparerFn) return;
            for (let i = 0; i < list.length-1; i++)
                for (let j = i+1; j < list.length; j++){
                    if (comparerFn(list[i], list[j]) > 0){
                        [list[i], list[j]] = [list[j], list[i]]
                    }    
                }
        }
        useCase('[Generic] Any list by any attribute', () => {
            /* 
            function sort(list, attrName){
                for (let i = 0; i < list.length-1; i++)
                    for (let j = i+1; j < list.length; j++){
                        if (list[i][attrName] > list[j][attrName]){
                            [list[i], list[j]] = [list[j], list[i]]
                        }    
                    }
            } 
            */
            useCase('Products by cost', () => {
                sort(products, 'cost')
                console.table(products)
            })
            useCase('Products by units', () => {
                sort(products, 'units')
                console.table(products)
            });
        })
        
        useCase('[Generic] Any list by any comparer', () => {
            /* 
            function sort(list, comparerFn){
                for (let i = 0; i < list.length-1; i++)
                    for (let j = i+1; j < list.length; j++){
                        if (comparerFn(list[i], list[j]) > 0){
                            [list[i], list[j]] = [list[j], list[i]]
                        }    
                    }
            } 
            */
            useCase('products by value [units * cost]', () => {
                let productsComparerByValue = (p1, p2) => {
                    let p1Value = p1.cost * p1.units,
                        p2Value = p2.cost * p2.units;
                    if (p1Value > p2Value) return 1;
                    if (p1Value < p2Value) return -1;
                    return 0;
                }
                sort(products, productsComparerByValue)
                console.table(products)
            })
        })
    })
})


