var numberofDrums=document.querySelectorAll(".drum").length;

   document.querySelectorAll("button")[0].addEventListener("click",handleclick0);
   function handleclick0(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();}
    document.querySelectorAll("button")[1].addEventListener("click",handleclick1);
   function handleclick1(){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();}
    document.querySelectorAll("button")[2].addEventListener("click",handleclick2);
   function handleclick2(){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();}
    document.querySelectorAll("button")[3].addEventListener("click",handleclick3);
   function handleclick3(){
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();}
    document.querySelectorAll("button")[4].addEventListener("click",handleclick4);
   function handleclick4(){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();}
    document.querySelectorAll("button")[5].addEventListener("click",handleclick5);
   function handleclick5(){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();}
    document.querySelectorAll("button")[6].addEventListener("click",handleclick6);
   function handleclick6(){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();}

    




