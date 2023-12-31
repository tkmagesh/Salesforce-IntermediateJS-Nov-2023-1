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

useCase('Filter', () => {
    useCase('[Specific] Filter stationary products', () => {
        function filterStationaryProducts(){
            let result = [];
            for (let p of products){
                if (p.category === 'stationary') 
                    result.push(p);
            }
            return result
        }
        let stationaryProducts = filterStationaryProducts()
        console.table(stationaryProducts)
    });
    useCase('[Generic] Filter any by any criteria', () => {
        function filter(list, predicate){
            let result = [];
            for (let p of list){
                if (predicate(p)) 
                    result.push(p);
            }
            return result
        }

        function negate(predicate){
            return function(...args){
                return !predicate(...args)
            }
        }

        useCase('Products by cost', () => {
            let costlyProductPredicate = p => p.cost > 60;

            useCase('Costly products [cost > 50]', () => {
               let costlyProducts = filter(products, costlyProductPredicate);
               console.table(costlyProducts);
            });
            useCase('Affordable products', () => {
                // let affordableProductPredicate = p => p.cost <= 60
                // let affordableProductPredicate = p => !costlyProductPredicate(p)
                let affordableProductPredicate = negate(costlyProductPredicate)
                let affordableProducts = filter(products, affordableProductPredicate);
                console.table(affordableProducts);
            })
        })
        useCase('Products by units', () => {
            let understockedProductPredicate = p => p.units < 50;

            useCase('Understocked products [units < 50]', () => {
                let understockedProducts = filter(products, understockedProductPredicate);
                console.table(understockedProducts);
            });
            useCase('Wellstocked products', () => {
                // let wellstockedProductPredicate = p => !understockedProductPredicate(p)
                let wellstockedProductPredicate = negate(understockedProductPredicate)
                let wellstockedProducts = filter(products, wellstockedProductPredicate);
                console.table(wellstockedProducts);
            });
        })
    })
})

useCase('GroupBy', () => {
    useCase('[Specific] Group by category', () => {
        function groupProductsByCategory(){
            let result = {
                stationary: [],
                grocery: [],
                utencil: [],
                electronics: []
            };
            for (let p of products){
                let key = p.category
                result[key].push(p)
            }
            return result
        }
        let productsByCategory = groupProductsByCategory()
        console.log(productsByCategory)
    })
    useCase('[Generic] Group any list by any key', () => {
        function groupBy(list, keySelector){
            let result = {};
            for (let p of list){
                let key = keySelector(p)
                /* 
                if (typeof result[key] !== 'undefined')
                    result[key] = [] 
                */
                result[key] = result[key] || [];
                result[key].push(p)
            }
            return result
        }
        useCase('Products by cost', () => {
            let costKeySelector = p => p.cost > 50 ? 'costly' : 'affordable';
            let productsByCost = groupBy(products, costKeySelector)
            console.log(productsByCost)
        })
        useCase('Products by units', () => {
            let unitsKeySelector = p => p.units > 50 ? 'wellstocked' : 'understocked';
            let productsByUnits = groupBy(products, unitsKeySelector)
            console.log(productsByUnits)
        
        })
    })

})

useCase('Sort using builtin function', () => {
    function getComparer(attrName){
        return (item1, item2) => {
            if (item1[attrName] > item2[attrName]) return 1;
            if (item1[attrName] < item2[attrName]) return -1;
            return 0;
        }
    }
    function sort(list, comparer){
        if (typeof comparer === 'function') return list.sort(comparer)
        if (typeof comparer === 'string') {
            let comparerFn = getComparer(comparer)
            return list.sort(comparerFn)
        }
    }

    // The above implementation will lead to two sort implementations (Array.sort, our own sort)
    // Not advisable but possible
    /* 
    (() => {
        let builtinSort = Array.prototype.sort;
        Array.prototype.sort = function(comparer){
            if (typeof comparer === 'function') return builtinSort.call(this, comparer)
            if (typeof comparer === 'string') {
                let comparerFn = getComparer(comparer)
                return builtinSort.call(this, comparerFn)
            }
        }
    })() 
    */
})

/* 
groupBy using 'Array.reduce' 

let productsByCategory = products.reduce(function(prevResult, product){
    let key = product.category;
    let newResult = { ...prevResult, [key] : prevResult[key] || [] }
    newResult[key].push(product)
    return newResult;
}, {})

let productsByCost = products.reduce(function(prevResult, product){
    let key = product.cost > 50 ? 'costly' : 'affordable'
    let newResult = { ...prevResult, [key] : prevResult[key] || [] }
    newResult[key].push(product)
    return newResult;
}, {})
*/

