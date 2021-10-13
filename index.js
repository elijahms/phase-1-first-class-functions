function receivesAFunction(otherFunction) {
    otherFunction()
    return otherFunction()
}    

function returnsANamedFunction() {
    return function namedFunc(){
        
    }
}

function returnsAnAnonymousFunction() {
    return function(){

    }
}