$(".split").each(function(){
    let text = $(this).text();
    let split = text.split("").join("</span><span aria-hidden='true'>");
        split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", text);
});

gsap.set(".port-main h3 span", {opacity: 0, y: 100})
gsap.set(".port-main span", {opacity: 0, y: 50})
gsap.set(".nav", {opacity: 0, y: -250})
gsap.set(".scroll", {opacity: 0, y: 200})

setTimeout(() => {
    //$(".main h3").css("opacity","1");
    //document.querySelector(".main h3").style.opacity = "1"
    gsap.to(".main-visual ", {duration: 0.5,height:"532"})
    gsap.to(".port-main h3 span", {duration: 0.5, stagger: 0.035, opacity: 1, y: 0 ,delay: 0.4})
    gsap.to(".port-main span", {duration: 0.5, opacity: 1, y: 0, delay: 0.8})
    gsap.to(".nav ", {duration: 0.5, opacity: 1, y: 0, delay: 1})
    gsap.to(".scroll ", {duration: 0.5, opacity: 1, y: 0, delay: 1.6})

}, 2000);


//스크롤 ㄴㅊ
const outline = document.querySelector(".moving-outline circle");
const outlineLength = outline.getTotalLength();
outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = 0;

let duration = 60;
let elapsed = 0;
animate(elapsed);
function animate(offset) {
  setTimeout(() => {
    elapsed++;
    if (elapsed > duration * 2) elapsed = 0;
    animate((elapsed / duration) * outlineLength);
  }, 10);
  outline.style.strokeDashoffset = offset;
}