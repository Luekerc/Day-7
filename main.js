
// var y;
// console.log(y==="cool");

var slotMachine = function(){

    var x = Math.ceil(Math.random()*(.1,.3)*10); 
    var y = Math.ceil(Math.random()*(.1,.3)*10);
    var z = Math.ceil(Math.random()*(.1,.3)*10);

   console.log(x,y,z);

   if( x > y && y > z)
   {
   	console.log("YOU WIN!");
   }

   else {
   	console.log("SORRY");
   }
};
slotMachine();

var userChoice = prompt("Do you want to play again?");

if (userChoice === 'yes'){
	slotMachine();
	userChoice = prompt("Do you want to play again?");

	}









  



