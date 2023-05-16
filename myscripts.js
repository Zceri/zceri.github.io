function myFunction() {
document.getElementById("demo").innerHTML = "Hello Javascript!";
  }

var forhere = 1;
var a = "no";

document.getElementById("forhere").innerHTML = "Section/Screen: TakeOut/Take Out";
document.getElementById("switch").innerHTML = "Switch To Eat In";
document.getElementById("bottombar1").classList.add('active');

inuseadd();
document.getElementById("food").classList.remove('notinuse');

bottominuseadd();
document.getElementById("firstbottom").classList.remove('notinuse');

function activerem(){
  document.getElementById("bottombar1").classList.remove('active');
  document.getElementById("bottombar2").classList.remove('active');
  document.getElementById("bottombar3").classList.remove('active');
  document.getElementById("bottombar4").classList.remove('active');
  document.getElementById("bottombar5").classList.remove('active');
  document.getElementById("bottombar6").classList.remove('active');
  document.getElementById("bottombar7").classList.remove('active');
  document.getElementById("bottombar8").classList.remove('active');

  document.getElementById("foodbar1").classList.remove('active');
  document.getElementById("foodbar2").classList.remove('active');
  document.getElementById("foodbar3").classList.remove('active');
  document.getElementById("foodbar4").classList.remove('active');
  document.getElementById("foodbar5").classList.remove('active');
  
  document.getElementById("hotdrinksbar1").classList.remove('active');
  document.getElementById("hotdrinksbar2").classList.remove('active');
  document.getElementById("hotdrinksbar3").classList.remove('active');
  document.getElementById("hotdrinksbar4").classList.remove('active');
  
  document.getElementById("hotdrinksbar5").classList.remove('active');
  document.getElementById("hotdrinksbar6").classList.remove('active');
  document.getElementById("hotdrinksbar7").classList.remove('active');
  document.getElementById("hotdrinksbar8").classList.remove('active');
  document.getElementById("hotdrinksbar9").classList.remove('active');
  document.getElementById("hotdrinksbar10").classList.remove('active');
  document.getElementById("hotdrinksbar11").classList.remove('active');
  document.getElementById("hotdrinksbar12").classList.remove('active');
  document.getElementById("hotdrinksbar13").classList.remove('active');
  document.getElementById("hotdrinksbar14").classList.remove('active');
  document.getElementById("hotdrinksbar15").classList.remove('active');
  document.getElementById("hotdrinksbar16").classList.remove('active');
  document.getElementById("hotdrinksbar17").classList.remove('active');
  document.getElementById("hotdrinksbar18").classList.remove('active');
  document.getElementById("hotdrinksbar19").classList.remove('active');
  document.getElementById("hotdrinksbar20").classList.remove('active');
  document.getElementById("hotdrinksbar21").classList.remove('active');
  document.getElementById("hotdrinksbar22").classList.remove('active');
  document.getElementById("hotdrinksbar23").classList.remove('active');
  document.getElementById("hotdrinksbar24").classList.remove('active');
  document.getElementById("hotdrinksbar25").classList.remove('active');
  document.getElementById("hotdrinksbar26").classList.remove('active');
  
  document.getElementById("colddrinksbar1").classList.remove('active');
  document.getElementById("colddrinksbar2").classList.remove('active');
  document.getElementById("colddrinksbar3").classList.remove('active');
  document.getElementById("colddrinksbar4").classList.remove('active');
  
  document.getElementById("groceryitemsbar1").classList.remove('active');
  document.getElementById("groceryitemsbar2").classList.remove('active');
  document.getElementById("groceryitemsbar3").classList.remove('active');
  document.getElementById("groceryitemsbar4").classList.remove('active');
  document.getElementById("groceryitemsbar5").classList.remove('active');
  
  document.getElementById("feesbar1").classList.remove('active');
  document.getElementById("feesbar2").classList.remove('active');
}

function inuseadd(){
  document.getElementById("food").classList.add('notinuse');
  document.getElementById("foodbottom").classList.add('notinuse');
  document.getElementById("hotdrinks").classList.add('notinuse');
  document.getElementById("colddrinks").classList.add('notinuse');
  document.getElementById("groceryitems").classList.add('notinuse');
  document.getElementById("fees").classList.add('notinuse');
  document.getElementById("merch").classList.add('notinuse');
  document.getElementById("giftcards").classList.add('notinuse');
  document.getElementById("wholesale").classList.add('notinuse');
  
  document.getElementById("cinnamonbuns").classList.add('notinuse');
  document.getElementById("pastries").classList.add('notinuse');
  document.getElementById("notaxpastries").classList.add('notinuse');
  document.getElementById("savoury").classList.add('notinuse');
  document.getElementById("icing").classList.add('notinuse');
  
  document.getElementById("brewedcoffee").classList.add('notinuse');
  document.getElementById("frenchpress").classList.add('notinuse');
  document.getElementById("shotinthedark").classList.add('notinuse');
  document.getElementById("cafeaulait").classList.add('notinuse');
  
  document.getElementById("tea").classList.add('notinuse');
  document.getElementById("londonfog").classList.add('notinuse');
  document.getElementById("tealatte").classList.add('notinuse');
  document.getElementById("chaitealatte").classList.add('notinuse');
  document.getElementById("matchalatte").classList.add('notinuse');
  
  document.getElementById("americano").classList.add('notinuse');
  document.getElementById("amerconmisto").classList.add('notinuse');
  document.getElementById("espresso").classList.add('notinuse');
  document.getElementById("breve").classList.add('notinuse');
  document.getElementById("eggnoglatte").classList.add('notinuse');
  
  document.getElementById("latte").classList.add('notinuse');
  document.getElementById("cappuccino").classList.add('notinuse');
  document.getElementById("caramelmacchiato").classList.add('notinuse');
  document.getElementById("mocha").classList.add('notinuse');
  document.getElementById("pumpkinspicelatte").classList.add('notinuse');
  
  document.getElementById("steamedmilk").classList.add('notinuse');
  document.getElementById("hotchocolate").classList.add('notinuse');
  document.getElementById("caramelapplecider").classList.add('notinuse');
  document.getElementById("hotwater").classList.add('notinuse');
  
  document.getElementById("cortado").classList.add('notinuse');
  document.getElementById("flatwhite").classList.add('notinuse');
  document.getElementById("longblack").classList.add('notinuse');
  
  document.getElementById("iceddrinks").classList.add('notinuse');
  document.getElementById("frappe").classList.add('notinuse');
  document.getElementById("soda&juice").classList.add('notinuse');
  document.getElementById("coldmilk").classList.add('notinuse');
  
  document.getElementById("bulkcoffee").classList.add('notinuse');
  document.getElementById("frozenbatters").classList.add('notinuse');
  document.getElementById("mixes").classList.add('notinuse');
  document.getElementById("pizzadough").classList.add('notinuse');
  document.getElementById("syrupbottles").classList.add('notinuse');
  
  document.getElementById("deliverycharge").classList.add('notinuse');
  document.getElementById("packagingfees").classList.add('notinuse');
}

function bottominuseadd(){
  document.getElementById("firstbottom").classList.add('notinuse');
  document.getElementById("secondbottom").classList.add('notinuse');
  document.getElementById("foodbottom").classList.add('notinuse');
  document.getElementById("hotdrinksbottom1").classList.add('notinuse');
  document.getElementById("hotdrinksbottom2").classList.add('notinuse');
  document.getElementById("hotdrinksbottom3").classList.add('notinuse');
  document.getElementById("hotdrinksbottom4").classList.add('notinuse');
  document.getElementById("hotdrinksbottom5").classList.add('notinuse');  
  document.getElementById("hotdrinksbottom6").classList.add('notinuse');  
  document.getElementById("colddrinksbottom").classList.add('notinuse');  
  document.getElementById("groceryitemsbottom").classList.add('notinuse');  
  document.getElementById("feesbottom").classList.add('notinuse');  
}

function isbottom(){
  ifTrue = document.getElementById("hotdrinks").classList.contains('notinuse');
  return ifTrue;
}


function purplebottom1(){
  activerem();
  inuseadd();

  document.getElementById("bottombar1").classList.add('active');
  document.getElementById("food").classList.remove('notinuse');
  graybottom2();
}

function purplebottom2(){
  activerem();
  inuseadd();

  document.getElementById("bottombar2").classList.add('active');
  document.getElementById("hotdrinks").classList.remove('notinuse');
  graybottom2();
}

function purplebottom3(){
  activerem();
  inuseadd();

  document.getElementById("bottombar3").classList.add('active');
  document.getElementById("colddrinks").classList.remove('notinuse');
  graybottom2();
}

function purplebottom4(){
  activerem();
  inuseadd();
  
  document.getElementById("bottombar4").classList.add('active');
  document.getElementById("groceryitems").classList.remove('notinuse');
  graybottom2();
}

function purplebottom5(){
  activerem();
  inuseadd();

  document.getElementById("bottombar5").classList.add('active');
  document.getElementById("fees").classList.remove('notinuse');
  graybottom2();
}

function purplebottom6(){
  activerem();
  inuseadd();
  document.getElementById("bottombar6").classList.add('active');
  document.getElementById("merch").classList.remove('notinuse');
  graybottom1();
}

function purplebottom7(){
  activerem();
  inuseadd();
  
  document.getElementById("bottombar7").classList.add('active');
  document.getElementById("giftcards").classList.remove('notinuse');
  graybottom1();
}

function purplebottom8(){
  activerem();
  inuseadd();
  document.getElementById("bottombar8").classList.add('active');  
  document.getElementById("wholesale").classList.remove('notinuse');
  graybottom1();
}



function food1(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("foodbar1").classList.add('active');
  document.getElementById("foodbottom").classList.remove('notinuse');
  document.getElementById("cinnamonbuns").classList.remove('notinuse')
}

function food2(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("foodbar2").classList.add('active');
  document.getElementById("foodbottom").classList.remove('notinuse');
  document.getElementById("pastries").classList.remove('notinuse')
}

function food3(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("foodbar3").classList.add('active');
  document.getElementById("foodbottom").classList.remove('notinuse');
  document.getElementById("notaxpastries").classList.remove('notinuse')
}

function food4(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("foodbar4").classList.add('active');
  document.getElementById("foodbottom").classList.remove('notinuse');
  document.getElementById("savoury").classList.remove('notinuse')
}

function food5(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("foodbar5").classList.add('active');
  document.getElementById("foodbottom").classList.remove('notinuse');
  document.getElementById("icing").classList.remove('notinuse')
}



function hotdrinks1(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar1").classList.add('active');
  document.getElementById("hotdrinksbottom1").classList.remove('notinuse');
  document.getElementById("brewedcoffee").classList.remove('notinuse')
}

function hotdrinks2(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar2").classList.add('active');
  document.getElementById("hotdrinksbottom1").classList.remove('notinuse');
  document.getElementById("frenchpress").classList.remove('notinuse')
}

function hotdrinks3(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar3").classList.add('active');
  document.getElementById("hotdrinksbottom1").classList.remove('notinuse');
  document.getElementById("shotinthedark").classList.remove('notinuse')
}

function hotdrinks4(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar4").classList.add('active');
  document.getElementById("hotdrinksbottom1").classList.remove('notinuse');
  document.getElementById("cafeaulait").classList.remove('notinuse')
}

function hotdrinks5(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom2";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar5").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("tea").classList.remove('notinuse')
}

function hotdrinks6(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom2";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar6").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("londonfog").classList.remove('notinuse')
}

function hotdrinks7(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom2";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar7").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("tealatte").classList.remove('notinuse')
}

function hotdrinks8(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom2";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar8").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("chaitealatte").classList.remove('notinuse')
}

function hotdrinks9(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom2";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar9").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("matchalatte").classList.remove('notinuse')
}

function hotdrinks10(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom3";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar10").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("americano").classList.remove('notinuse')
}

function hotdrinks11(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom3";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar11").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("amerconmisto").classList.remove('notinuse')
}

function hotdrinks12(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom3";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar12").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("espresso").classList.remove('notinuse');
}

function hotdrinks13(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom3";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar13").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("breve").classList.remove('notinuse');
}

function hotdrinks14(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom3";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar14").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("eggnoglatte").classList.remove('notinuse');
}

function hotdrinks15(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom4";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar15").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("latte").classList.remove('notinuse');
}

function hotdrinks16(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom4";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar16").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("cappuccino").classList.remove('notinuse');
}

function hotdrinks17(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom4";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar17").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("caramelmacchiato").classList.remove('notinuse');
}

function hotdrinks18(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom4";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar18").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("mocha").classList.remove('notinuse');
}

function hotdrinks19(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom4";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar19").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("pumpkinspicelatte").classList.remove('notinuse');
}

function hotdrinks20(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom5";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar20").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("steamedmilk").classList.remove('notinuse');
}

function hotdrinks21(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom5";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar21").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("hotchocolate").classList.remove('notinuse');
}

function hotdrinks22(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom5";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar22").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("caramelapplecider").classList.remove('notinuse');
}

function hotdrinks23(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom5";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar23").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("hotwater").classList.remove('notinuse');
}

function hotdrinks24(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom6";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar24").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("cortado").classList.remove('notinuse');
}

function hotdrinks25(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom6";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar25").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("flatwhite").classList.remove('notinuse');
}

function hotdrinks26(){
  if (isbottom() == false) {
	a = "hotdrinksbottom1";
  }
  else {
	a = "hotdrinksbottom6";
  }
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("hotdrinksbar26").classList.add('active');
  document.getElementById(a).classList.remove('notinuse');
  document.getElementById("longblack").classList.remove('notinuse');
}


function colddrinks1(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("colddrinksbar1").classList.add('active');
  document.getElementById("colddrinksbottom").classList.remove('notinuse');
  document.getElementById("iceddrinks").classList.remove('notinuse');
}

function colddrinks2(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("colddrinksbar2").classList.add('active');
  document.getElementById("colddrinksbottom").classList.remove('notinuse');
  document.getElementById("frappe").classList.remove('notinuse');
}

function colddrinks3(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("colddrinksbar3").classList.add('active');
  document.getElementById("colddrinksbottom").classList.remove('notinuse');
  document.getElementById("soda&juice").classList.remove('notinuse');
}

function colddrinks4(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("colddrinksbar4").classList.add('active');
  document.getElementById("colddrinksbottom").classList.remove('notinuse');
  document.getElementById("coldmilk").classList.remove('notinuse');
}


function groceryitems1(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("groceryitemsbar1").classList.add('active');
  document.getElementById("groceryitemsbottom").classList.remove('notinuse');
  document.getElementById("bulkcoffee").classList.remove('notinuse');
}

function groceryitems2(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("groceryitemsbar2").classList.add('active');
  document.getElementById("groceryitemsbottom").classList.remove('notinuse');
  document.getElementById("frozenbatters").classList.remove('notinuse');
}

function groceryitems3(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("groceryitemsbar3").classList.add('active');
  document.getElementById("groceryitemsbottom").classList.remove('notinuse');
  document.getElementById("mixes").classList.remove('notinuse');
}

function groceryitems4(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("groceryitemsbar4").classList.add('active');
  document.getElementById("groceryitemsbottom").classList.remove('notinuse');
  document.getElementById("pizzadough").classList.remove('notinuse');
}

function groceryitems5(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("groceryitemsbar5").classList.add('active');
  document.getElementById("groceryitemsbottom").classList.remove('notinuse');
  document.getElementById("syrupbottles").classList.remove('notinuse');
}


function fees1(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("feesbar1").classList.add('active');
  document.getElementById("feesbottom").classList.remove('notinuse');
  document.getElementById("deliverycharge").classList.remove('notinuse');
}

function fees2(){
  activerem();
  inuseadd();
  bottominuseadd();
  document.getElementById("feesbar2").classList.add('active');
  document.getElementById("feesbottom").classList.remove('notinuse');
  document.getElementById("packagingfees").classList.remove('notinuse');
}




function grayhotdrinks1(){
  bottominuseadd();
  document.getElementById("hotdrinksbottom1").classList.remove('notinuse');
}

function grayhotdrinks2(){
  bottominuseadd();
  document.getElementById("hotdrinksbottom2").classList.remove('notinuse');
}

function grayhotdrinks3(){
  bottominuseadd();
  document.getElementById("hotdrinksbottom3").classList.remove('notinuse');
}

function grayhotdrinks4(){
  bottominuseadd();
  document.getElementById("hotdrinksbottom4").classList.remove('notinuse');
}

function grayhotdrinks5(){
  bottominuseadd();
  document.getElementById("hotdrinksbottom5").classList.remove('notinuse');
}

function grayhotdrinks6(){
  bottominuseadd();
  document.getElementById("hotdrinksbottom6").classList.remove('notinuse');
}




function graybottom1(){
  bottominuseadd();
  document.getElementById("secondbottom").classList.remove('notinuse');
}

function graybottom2(){
  bottominuseadd();
  document.getElementById("firstbottom").classList.remove('notinuse');
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

function deliverycharge1() {
	document.getElementById("itemsummary").innerHTML = "Delivery Charge             1             $10.00";
}


