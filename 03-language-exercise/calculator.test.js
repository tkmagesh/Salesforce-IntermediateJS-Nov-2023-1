function sum(x,y){
    return x + y
}

test('sum(10,20) => 30', function(){
    //arrange
    var x = 10,
        y = 20,
        expectedResult = 30

    //act
    var actualResult = sum(x,y);

    //assert
    expect(actualResult).toBe(expectedResult)
})

test('sum(10, "20") => 30', function(){
    var expectedResult = 30
    var actualResult = sum(10, "20")
    expect(actualResult).toBe(expectedResult)
})

test('sum(10, "abc") => 10', function(){
    var expectedResult = 10
    var actualResult = sum(10, "abc")
    expect(actualResult).toBe(expectedResult)
})

test('sum(10,20,30,40,50) => 150', function(){
    var expectedResult = 150
    var actualResult = sum(10, 20, 30, 40, 50)
    expect(actualResult).toBe(expectedResult)
})

test('sum() => 0', function(){
    var expectedResult = 0
    var actualResult = sum()
    expect(actualResult).toBe(expectedResult)
})

test('sum([10,20,30],[40,50,60]) => 210', function(){
    var expectedResult = 210
    var actualResult = sum([10, 20, 30], [40, 50, 60])
    expect(actualResult).toBe(expectedResult)
})

test('sum([10,"20",30],[40,50,"abc"]) => 150', function(){
    var expectedResult = 150
    var actualResult = sum([10, "20", 30], [40, 50, "abc"])
    expect(actualResult).toBe(expectedResult)
})

test('sum([10,["20",30]],[40,50,60, "abc"]) => 210', function(){
    var expectedResult = 210
    var actualResult = sum([10, ["20", 30]], [40, 50, 60, "abc"])
    expect(actualResult).toBe(expectedResult)
})

test('sum(function () { return 10; }, function () { return 20; }) => 30', function(){
    var expectedResult = 30
    var actualResult = sum(function () { return 10; }, function () { return 20; })
    expect(actualResult).toBe(expectedResult)
})

test('sum(function () { return [10, ["20", 30]]; }, function () { return [40, 50, 60, "abc"]; }) => 210', function(){
    var expectedResult = 210
    var actualResult = sum(function () { return [10, ["20", 30]]; }, function () { return [40, 50, 60, "abc"]; })
    expect(actualResult).toBe(expectedResult)
})

test('sum([function () { return [10, ["20", 30]]; }, function () { return [40, 50, 60, "abc"]; }]) => 210', function(){
    var expectedResult = 210
    var actualResult = sum([function () { return [10, ["20", 30]]; }, function () { return [40, 50, 60, "abc"]; }])
    expect(actualResult).toBe(expectedResult)
})
