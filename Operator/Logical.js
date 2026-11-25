
//Logical Operators-->use to combine conditional statements..
//&&(Logical AND (&&));
//||(Logical Or);
//!(Logical not)


//Logical AND (&&)
var a=25; var b= 30
var c=(a<30&&b>25); //  Inj logical And(&&) when all condition are true , all condition are true
                    
console.log(c);

var a=25; var b= 30
var c=(a<30&&b>36); //But one condition is false , all condition are false
console.log(c);

//Logical Or(||)--->
var a=25; var b= 30
var c=(a<30||b>25);
console.log(c);
                     /*In logical OR(||) condition one condition is true and others all condition is 
                     false so all conditions are true*/
var a=25; var b= 30
var c=(a<30||b>33);
console.log(c);
