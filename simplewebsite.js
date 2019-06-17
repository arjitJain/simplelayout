/*alert("Welcome to simple website layout which is made by me.");
var name=prompt("Enter Your Name plz to continue further");
if(name==="tushar"||name==="Tushar"){
	alert("Thank you for creating me!");
}
else{
alert("Hello "+name+"!");
}*/

/*var onclick = document.getElementById("onclick");
var ul=document.queryselector("ul");
var pass;*/

function callme(){
	password();
}

function password(){
	var pass=prompt("Enter password to continue further");
if(pass==="sachdeva1997"){
	alert("You can access further!");
}
else{
	alert("Emergency System Attack!");
}
}
/*onclick.AddeventListener("click",password);
console.log(pass.value);*/



/*var database=[
   {
     username:"Tushar",
     password:"sachdeva1997",
   },
   {
   	username:"bhavya",
   	password:"malumnhi"
   },
   {
   	username:"abhishek",
   	password:"crackkrlo"
   },
];

var newsfeed=[
    {
    	username:"bhavya",
    	timeline:"m pagal ho",
    },
    {
    	username:"abhishek",
    	timeline:"job lgva do koi",
    }

];

var usernameprompt=prompt("Enter username");
var passwordprompt=prompt("Enter password");

function checkdatabase(username,password){
	for(var i=0;i<database.length;i++){
		if((username===database[i].username)&&(password===database[i].password)){
			return true;
		}
	}
	return false;
}
 

function authenticate(username,password) {
	if(checkdatabase(username,password)){
		console.log(newsfeed);
	}
	else{
		alert("Wrong Credentials!, try again or get lost");
	}
}
authenticate(usernameprompt,passwordprompt);*/