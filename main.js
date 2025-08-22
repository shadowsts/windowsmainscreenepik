let clickerapp = document.getElementById("clicker")
let calculatorapp = document.getElementById("calculator")
let clickhave = document.getElementById("clickhave")
let clicks = 0
let clickclick = document.getElementById("clickclick")

// clicker
clickerapp.addEventListener("dblclick",function () {
document.getElementById('click-menu').classList.remove('hidden'); 
});
document.getElementById('close-click').addEventListener('click', function() {
  document.getElementById('click-menu').classList.add('hidden'); 
});

clickclick.addEventListener("click",function() {
clicks += 1
clickhave.textContent = `ти натиснув ${clicks}  раз`
});
let numbers33 = " "
let firstnum = " "
let activan = false
let symbol2 = ""
// calculator
calculatorapp.addEventListener("dblclick",function () {
document.getElementById('calc-menu').classList.remove('hidden'); 
});
document.getElementById('close-calc').addEventListener('click', function() {
  document.getElementById('calc-menu').classList.add('hidden'); 
});
document.querySelector(".btn-1").addEventListener("click",function () {
numbers33 += "1"
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-2").addEventListener("click",function () {
numbers33 += "2"
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-3").addEventListener("click",function () {
numbers33 += "3"
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-4").addEventListener("click",function () {
numbers33 += "4"
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-5").addEventListener("click",function () {
numbers33 += "5"
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-6").addEventListener("click",function () {
numbers33 += "6"
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-7").addEventListener("click",function () {
numbers33 += "7"
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-8").addEventListener("click",function () {
numbers33 += "8"
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-9").addEventListener("click",function () {
numbers33 += "9"
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-0").addEventListener("click",function () {
numbers33 += "0"
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-point").addEventListener("click",function () {
numbers33 += "."
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-plus").addEventListener("click",function () {
  if (activan == false){
  firstnum = numbers33
  numbers33 = " "
  activan = true
  symbol2 = "+"
document.querySelector(".input-field").value = numbers33}
});
document.querySelector(".btn-minus").addEventListener("click",function () {
  if (activan == false){
  firstnum = numbers33
  numbers33 = " "
  activan = true
  symbol2 = "-"
document.querySelector(".input-field").value = numbers33}
});
document.querySelector(".btn-mult").addEventListener("click",function () {
  if (activan == false){
  firstnum = numbers33
  numbers33 = " "
  activan = true
  symbol2 = "*"
document.querySelector(".input-field").value = numbers33}
});
document.querySelector(".btn-div").addEventListener("click",function () {
  if (activan == false){
  firstnum = numbers33
  numbers33 = " "
  activan = true
  symbol2 = "/"
document.querySelector(".input-field").value = numbers33}
});
document.querySelector(".btn-clear").addEventListener("click",function () {
  activan = false
  numbers33 = ""
  firstnum = ""
  symbol2 = ""
document.querySelector(".input-field").value = numbers33
});
document.querySelector(".btn-equal").addEventListener("click",function () {
  if (activan == true){
    if(symbol2 == "+"){
      numbers33 = parseFloat(firstnum)+parseFloat(numbers33)
    }else if(symbol2 == "-"){
      numbers33 = parseFloat(firstnum)-parseFloat(numbers33)
    }else if(symbol2 == "/"){
      numbers33 = parseFloat(firstnum)/parseFloat(numbers33)
    }else if(symbol2 == "*"){
      numbers33 = parseFloat(firstnum)*parseFloat(numbers33)
    }
    firstnum = 0
    symbol2 = ""
    activan = false
document.querySelector(".input-field").value = numbers33}
});
// gallery

let images = document.querySelectorAll(".images")
images.forEach((item)=>{
item.addEventListener("click",function () {
  console.log(1)
document.getElementById("theimage").style.backgroundImage = `url("${item.dataset.img}")`
document.getElementById("theimage").dataset.img = item.dataset.img
document.getElementById("theimage").dataset.item = item
document.getElementById("image-menu").classList.remove('hidden')
})
}
)
document.getElementById("mainscreenplace").addEventListener("click",function () {
  document.getElementById("screen").style.backgroundImage = `url("${document.getElementById("theimage").dataset.img}")`
});
let addimg = document.getElementById("addimg")//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
addimg.addEventListener("click",function () {
  let neededurl = prompt("веди url своєї картинки")
  const newimgclone = document.createElement('button');
      newimgclone.classList.add('images');
      newimgclone.dataset.img = neededurl
      newimgclone.style.backgroundImage = `url("${neededurl}")`
      document.getElementById("gallery").appendChild(newimgclone);
        let images = document.querySelectorAll(".images")
        images.forEach((item)=>{
item.addEventListener("click",function () {
  console.log(1)
document.getElementById("theimage").style.backgroundImage = `url("${item.dataset.img}")`
document.getElementById("theimage").dataset.img = item.dataset.img
document.getElementById("theimage").dataset.item = item
document.getElementById("image-menu").classList.remove('hidden')
})
}
)

})
document.getElementById('close-gal').addEventListener('click', function() {
  document.getElementById('gal-menu').classList.add('hidden'); 
});
document.getElementById('close-image').addEventListener('click', function() {
  document.getElementById('image-menu').classList.add('hidden'); 
});
document.getElementById('gall').addEventListener('dblclick', function() {
  document.getElementById('gal-menu').classList.remove('hidden'); 
});
// google^^
document.getElementById('google').addEventListener('dblclick', function() {
   window.open("https://www.google.com", "_blank");
});
// roblox
document.getElementById('roblox').addEventListener('dblclick', function() {
   window.open("https://www.roblox.com", "_blank");
});
document.getElementById('discord').addEventListener('dblclick', function() {
   window.open("https://discord.com/", "_blank");
});