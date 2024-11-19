var x = 100

var testScope=function(){
    var x =50
    console.log(x)

    if(true){
        var x=30
        console.log(x)
    }
}
testScope();
console.log(x)