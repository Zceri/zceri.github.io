function myFunction() {
document.getElementById("demo").innerHTML = "Hello Javascript!"
  }

var forhere = 1;

document.getElementById("forhere").innerHTML = "Section/Screen: TakeOut/Take Out";
document.getElementById("switch").innerHTML = "Switch To Eat In";
document.getElementById("bottombar1").classList.add('active');

document.getElementById("food").classList.remove('notinuse');
document.getElementById("hotdrinks").classList.add('notinuse');
document.getElementById("colddrinks").classList.add('notinuse');
document.getElementById("groceryitems").classList.add('notinuse');
document.getElementById("fees").classList.add('notinuse');
function purplebottom1(){
  document.getElementById("bottombar1").classList.add('active');
  document.getElementById("bottombar2").classList.remove('active');
  document.getElementById("bottombar3").classList.remove('active');
  document.getElementById("bottombar4").classList.remove('active');
  document.getElementById("bottombar5").classList.remove('active');
  
  document.getElementById("food").classList.remove('notinuse');
  document.getElementById("hotdrinks").classList.add('notinuse');
  document.getElementById("colddrinks").classList.add('notinuse');
  document.getElementById("groceryitems").classList.add('notinuse');
  document.getElementById("fees").classList.add('notinuse');

}

function purplebottom2(){
  document.getElementById("bottombar1").classList.remove('active');
  document.getElementById("bottombar2").classList.add('active');
  document.getElementById("bottombar3").classList.remove('active');
  document.getElementById("bottombar4").classList.remove('active');
  document.getElementById("bottombar5").classList.remove('active');
  
  document.getElementById("food").classList.add('notinuse');
  document.getElementById("hotdrinks").classList.remove('notinuse');
  document.getElementById("colddrinks").classList.add('notinuse');
  document.getElementById("groceryitems").classList.add('notinuse');
  document.getElementById("fees").classList.add('notinuse');
}

function purplebottom3(){
  document.getElementById("bottombar1").classList.remove('active');
  document.getElementById("bottombar2").classList.remove('active');
  document.getElementById("bottombar3").classList.add('active');
  document.getElementById("bottombar4").classList.remove('active');
  document.getElementById("bottombar5").classList.remove('active');
  
  document.getElementById("food").classList.add('notinuse');
  document.getElementById("hotdrinks").classList.add('notinuse');
  document.getElementById("colddrinks").classList.remove('notinuse');
  document.getElementById("groceryitems").classList.add('notinuse');
  document.getElementById("fees").classList.add('notinuse');
}

function purplebottom4(){
  document.getElementById("bottombar1").classList.remove('active');
  document.getElementById("bottombar2").classList.remove('active');
  document.getElementById("bottombar3").classList.remove('active');
  document.getElementById("bottombar4").classList.add('active');
  document.getElementById("bottombar5").classList.remove('active');
  
  document.getElementById("food").classList.add('notinuse');
  document.getElementById("hotdrinks").classList.add('notinuse');
  document.getElementById("colddrinks").classList.add('notinuse');
  document.getElementById("groceryitems").classList.remove('notinuse');
  document.getElementById("fees").classList.add('notinuse');
}

function purplebottom5(){
  document.getElementById("bottombar1").classList.remove('active');
  document.getElementById("bottombar2").classList.remove('active');
  document.getElementById("bottombar3").classList.remove('active');
  document.getElementById("bottombar4").classList.remove('active');
  document.getElementById("bottombar5").classList.add('active');
  
  document.getElementById("food").classList.add('notinuse');
  document.getElementById("hotdrinks").classList.add('notinuse');
  document.getElementById("colddrinks").classList.add('notinuse');
  document.getElementById("groceryitems").classList.add('notinuse');
  document.getElementById("fees").classList.remove('notinuse');
}


function forhereswitch() {
  forhere++;
  if (forhere%2 == 1) {
    document.getElementById("forhere").innerHTML = "Section/Screen: TakeOut/Take Out";
	document.getElementById("switch").innerHTML = "Switch To Eat In";}
  else {
    document.getElementById("forhere").innerHTML = "Section/Screen: EatIn/Eat In";
	document.getElementById("switch").innerHTML = "Switch To Take Out";}

}



