//Here we are used generic 

function add<A,U>(a:T,b:U):void{
    console.log(typeof a);
    console.log(typeof b);
}
const result = add<number, string>(a:5, b:"kapil")



function calculateNumber