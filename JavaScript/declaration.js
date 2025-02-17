let a = 10
b = "Today"
c = true
a = 14
console.log(a,b,c);
console.log(typeof(a),typeof(b),typeof(c));
array = [1,"One",true]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array);
//objects
//list type of object declaration 
object={
    "Name":"Pavithra",
    "Year":3,
    "College":"SSN",
    "CGPA":10
}
console.log(object);
//second type of object declaration
object1={}
object1["firstName"]="Pavithra"
object1["College"]=["SSN","Anna",'MIT']
console.log(object1);
//third type of object declaration
object3=new Object()
console.log(object3);
object3.firstName="Pavikutty"
object3.College=["SSN",'MIT']
console.log(object3);
//set
set = new Set()
console.log(set);
set.add("hello")
console.log(set);
console.log(typeof(set));
console.log(typeof(object));
console.log(typeof(array));
