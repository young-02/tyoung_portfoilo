
//setion01
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
    gsap.set(".main-visual  ", {height:"0",opacity:0}) 
  
setTimeout(() => {
    //$(".main h3").css("opacity","1");
    //document.querySelector(".main h3").style.opacity = "1"
    gsap.to(".main-visual ", {duration: 0.5,height:"100%" ,opacity:1})
    gsap.to(".port-main h3 span", {duration: 0.5, stagger: 0.035, opacity: 1, y: 0 ,delay: 0.4})
    gsap.to(".port-main span", {duration: 0.5, opacity: 1, y: 0, delay: 0.8})
    gsap.to(".nav ", {duration: 0.5, opacity: 1, y: 0, delay: 1})
    gsap.to(".scroll ", {duration: 0.5, opacity: 1, y: 0, delay: 1.6})


}, 2000);


var nav = $(".nav ul li");
var cont = $("#contents > section");

nav.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    //alert(index);
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= cont.eq(0).offset().top){
        nav.removeClass("on");
        nav.eq(0).addClass("on");
    }
    if(wScroll >= cont.eq(1).offset().top){
        nav.removeClass("on");
        nav.eq(1).addClass("on");
    }
    if(wScroll >= cont.eq(2).offset().top){
        nav.removeClass("on");
        nav.eq(2).addClass("on");
    }
    if(wScroll >= cont.eq(3).offset().top){
        nav.removeClass("on");
        nav.eq(3).addClass("on");
    }
    if(wScroll >= cont.eq(4).offset().top){
        nav.removeClass("on");
        nav.eq(4).addClass("on");
    }
    if(wScroll >= cont.eq(5).offset().top){
        nav.removeClass("on");
        nav.eq(5).addClass("on");
    }
});


