var age = prompt("Please enter your age");
var gender = prompt("please enter your gender");
if (age > 18 && gender == "male") {
    document.write("you can travel alone");
} 
else if (age > 25 && gender == "female") {
    document.write("you can travel alone");
} 
else if (age < 25 && gender == "female") {
 document.write("you can not travel alone");
} 
else {
    document.write("you can not travel alone");
}
