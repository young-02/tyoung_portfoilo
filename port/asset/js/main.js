// loading
var percent = document.querySelector('.percent');
var ico = document.querySelector('.ico-loading');
var preload = document.querySelector('.loading');
var count = 4;
var per = 16;
var loading = setInterval(animate, 1000 / 50);
function animate() {
    if (count >= 100) {
        clearInterval(loading);
        preload.classList.add('finished');
        loadingAfterMain();
    } else {
        count = count + 1;
        percent.textContent = count ;
    }
    if (count > 99.9) {
        count = 100;
    } 
}

window.onload = function () {
    animate(); //硫붿씤�붾㈃
    pageClick(); //�섏씠吏� �좊땲硫붿씠��
  };


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
    gsap.set("#scroll", {opacity: 0, y: 200})
    gsap.set(".main-visual  ", {height:"0",opacity:0}) 
  
setTimeout(() => {
    //$(".main h3").css("opacity","1");
    //document.querySelector(".main h3").style.opacity = "1"
    gsap.to(".main-visual ", {duration: 0.5,height:"100%" ,opacity:1})
    gsap.to(".port-main h3 span", {duration: 0.5, stagger: 0.035, opacity: 1, y: 0 ,delay: 0.4})
    gsap.to(".port-main span", {duration: 0.5, opacity: 1, y: 0, delay: 0.8})
    gsap.to(".nav ", {duration: 0.5, opacity: 1, y: 0, delay: 0.6})
    gsap.to("#scroll ", {duration: 0.5, opacity: 1, y: 0, delay: 1.6})
    // gsap.to("#logding ", {opacity:0})


}, 2000);




var nav = $(".nav ul li");
var cont = $("#contents > section");
var scr = $('#scroll');

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
        scr.removeClass('on');
        scr.children('p').text('scroll');
        $('.main01').addClass('view');
        $('.main02').addClass('view')
    }
    if(wScroll <= cont.eq(0).offset().top){
        $('.main01').removeClass('view');
        $('.main02').removeClass('view')
    }

    if(wScroll >= cont.eq(1).offset().top){
        nav.removeClass("on");
        nav.eq(1).addClass("on");
        scr.addClass('on');
        scr.children('p').text('↓')
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
    if(wScroll >= cont.eq(6).offset().top){
        nav.removeClass("on");
        nav.eq(6).addClass("on");
    }


    const scrollTop = $(window).scrollTop() + $(window).height();

    // if(scrollTop > $('#section02').offset().top){
    //     $('#section02').addClass('show');
    // }
    if(scrollTop > $('#section02').offset().top){
        $('#section02').addClass('show');
    }
    if(scrollTop > $('#section03').offset().top){
        $('#section03').addClass('show');
    }
    if(scrollTop > $('#section04').offset().top){
        $('#section04').addClass('show');
    }
    if(scrollTop > $('#section05').offset().top){
        $('#section05').addClass('show');
    }
    if(scrollTop > $('#section06').offset().top){
        $('#section06').addClass('show');
    }
    if(scrollTop > $('#section07').offset().top){
        $('#section07').addClass('show');
    }
    
});


 
$(window).scroll(function(){
    let scroll = $(window).scrollTop();

    $(".scroll").text(parseInt(scroll));

    let offset = (scroll - $("#section04").offset().top)

    if( scroll > $("#section04").offset().top ){
        //$(".sec3").css({left: -offset+"px"})
        //document.querySelector(".sec3").style.css = "left:"+ -offset + "px";
        
         gsap.to(".animation", {left: -offset, ease: "power2.out"}) 
     
    }
    if( scroll > $("#section04").offset().top + 100 ){

         gsap.to("#section04 .letter-wrap", {rotate:0, ease: "power2.out"}) 
     
    }else{
        gsap.to("#section04 .letter-wrap", {rotate:13, ease: "power2.out"}) 
    }
});


const letterWrapClass = 'letter-wrap';
const letterWrapElements = document.getElementsByClassName(letterWrapClass);

[...letterWrapElements].forEach(el => {
  letterWrap(el, letterWrapClass);
  letterAnimation(el, letterWrapClass);
});


//타이틀
function letterWrap(el, cls) {
  const words = el.textContent.split(' ');
  const letters = [];
  
  cls = cls || 'letter-wrap'
  
  words.forEach(word => {
    let html = '';
    for (var letter in word) {
      html += `
        <span class="${cls}__char">
          <span class="${cls}__char-inner" data-letter="${word[letter]}">
            ${word[letter]}
          </span>
        </span>
      `;
    };
    
    let wrappedWords = `<span class="${cls}__word">${html}</span>`;
    letters.push(wrappedWords);
  });
  
  return el.innerHTML = letters.join(' ');
}

function letterAnimation(el, cls) {
  const tl = new TimelineMax({ paused: true });
  const characters = el.querySelectorAll(`.${cls}__char-inner`);
  const duration = el.hasAttribute('data-duration') ? el.dataset.duration : 0.3;
  const stagger = el.hasAttribute('data-stagger') ? el.dataset.stagger : 0.03;
  
  el.animation = tl.staggerTo(characters, duration, {
    y: '-100%',
    ease: Power4.easeOut
  }, stagger);
      
  el.addEventListener('mouseenter', (event) => event.currentTarget.animation.play());
  el.addEventListener('mouseout', (event) => el.animation.reverse());
}

//마우스오버
$('.desc-img').mouseover(function(){
    $('.line').toggleClass('height');

});


$('.toggle').click(function(){
    $(this).toggleClass('active');
    $('.nav ul').toggleClass('mobile')
 });



 if($('.contact-contents').length > 0){
    var formInput = $('.contact-contents form input');

    formInput.click(function(){
      $(this).prev().addClass('active');
      $(this).attr('placeholder', '');
    });
  }
