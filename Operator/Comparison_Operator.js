/* Comparison Operator-->Used to compare two values and return a boolean value
1) ==(equal to);
2.===(strict equalto);
3.!=(not equal to);
4.!==(Strict not equal to);
5)>(Greaterthan)
6.<(lessthan);
7.>=(Greater than or equal to);
8.<=(Less than or equal to)*/

//Difference Between Equal to vs Strict Equal to-->

var a=50;
var b="50";
var c=(a==b);///(Equal to only check value)
console.log(c);
var a=50;
var b="50";
var c=(a===b);//(Strict equal to must check datatype)
console.log(c);


var a=50;
var b="50";
var c=(a!=b);///(not equalto only check value)
console.log(c);

var a=50;
var b="50";
var c=(a!==b);///(Equal to  check value and datatype)
console.log(c)

var passing_marks=36;
if(passing_marks<=32){
    console.log("Cogratulation You  Passed");
}
else{
    console.log("You Failed!");
    
}