function receivesAFunction (simpleParameter) {
    simpleParameter()
}
receivesAFunction(function () { return "Heyoooo!!!"})

function returnsANamedFunction(){
    function namedFunctionToReturn () {
    }
    return function namedFunctionToReturn() { return "Heyoooo!!!"}
}

function returnsAnAnonymousFunction(){
    return function() { return "Heyoooo!!!"}
}