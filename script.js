const przycisk = document.getElementById("przycisk");

przycisk.addEventListener("mouseover", function (){
    this.style.color = "#70CECF";
});

przycisk.addEventListener("mouseout", function(){
    this.style.color = "white";
});

const toggleBtn1 = document.getElementById("button1");
const text1 = document.getElementById("con1");

toggleBtn1.addEventListener("click", function () {
    if(text1.style.display === "block"){
        text1.style.display = "none";
    }else{
        text1.style.display = "block";
    }
});

const toggleBtn2 = document.getElementById("button2");
const text2 = document.getElementById("con2");

toggleBtn2.addEventListener("click", function () {
    if(text2.style.display === "block"){
        text2.style.display = "none";
    }else{
        text2.style.display = "block";
    }
});

const toggleBtn3 = document.getElementById("button3");
const text3 = document.getElementById("con3");

toggleBtn3.addEventListener("click", function () {
    if(text3.style.display === "block"){
        text3.style.display = "none";
    }else{
        text3.style.display = "block";
    }
});

$('.carousel_opinie').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<i class="fa-regular fa-chevron-left"></i>', '<i class="fa-regular fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        }
    }
});


$(".drop")
  .mouseover(function() {
  $(".dropdown").show(300);
});
$(".drop")
  .mouseleave(function() {
  $(".dropdown").hide(300);     
});

$(".drop")
  .mouseover(function() {
  $(".dropdown2").show(300);
});
$(".drop")
  .mouseleave(function() {
  $(".dropdown2").hide(300);     
});


const burger = document.querySelector(".burger");
const menuu = document.querySelector(".menuu");
burger.onclick = function() {
    menuu.classList.toggle("active");
}

const burger2 = document.querySelector(".burger2");
const menuu2 = document.querySelector(".menuu2");
burger2.onclick = function() {
    menuu2.classList.toggle("active2");
}
