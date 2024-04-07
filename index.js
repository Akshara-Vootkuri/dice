
var randomNumber1= Math.floor(Math.random()*6) +1
var randomNumber2= Math.floor(Math.random()*6) +1
var randomdiceimage="dice"+randomNumber1+".png"
var randomdiceimage2="dice"+randomNumber2+".png"
var imageSource="./images/"+randomdiceimage
var imageSource1="./images/"+randomdiceimage2
document.querySelector(".image1").setAttribute("src",imageSource)
document.querySelector(".image2").setAttribute("src",imageSource1)
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player1 winner"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player2 winner"
}
else{
    document.querySelector("h1").innerHTML="Refresh me"
}
document.querySelector("h1").addEventListener("click",function(){
    alert("i got clicked")
})