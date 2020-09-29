if ($(window).width() >= 767) {
    $(function () {
        var winht = $(window).height(),
            winhwt = $(window).width();
        var controller = new ScrollMagic.Controller({ container: window });
        $(".appi-portfolio-sec").css("height", winht * 2);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: -winht * 2, duration: winht })
            .on("enter", function () {
                
                TweenLite.to(".port__head  .pt-1", 1, { ease: Power4.easeInOut, top: "45px" });
                TweenLite.to(".mid__text  .t-1", 1, { ease: Power4.easeInOut, top: "80px" });
                
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 0, duration: winht * 7 }).setPin(".appi-ins-portfolio-sec").addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: (-winht * 2) / 2, duration: winht * 2 })
            .on("enter", function () {
               
                TweenLite.to(".port__head  .pt-1", 1, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".port__head  .pt-2", 1, { ease: Power4.easeInOut, top: "45px" });
                TweenLite.to(".mid__text  .t-1", 1, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".mid__text .t-2", 1, { ease: Power4.easeInOut, top: "80px" });
                
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht, duration: winht })
            .on("enter", function () {
                
                TweenLite.to(".port__head  .pt-1", 1, { ease: Power4.easeInOut, top: "-45px" });
                TweenLite.to(".port__head  .pt-2", 1, { ease: Power4.easeInOut, top: "0" });     
                TweenLite.to(".port__head  .pt-3", 1, { ease: Power4.easeInOut, top: "45px" });
                TweenLite.to(".mid__text  .t-1", 1, { ease: Power4.easeInOut, top: "-90px" });
                TweenLite.to(".mid__text  .t-2", 1, { ease: Power4.easeInOut, top: "0" });     
                TweenLite.to(".mid__text .t-3", 1, { ease: Power4.easeInOut, top: "80px" });
                
               
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht * 2, duration: winht })
            .on("enter", function () {
              
                TweenLite.to(".port__head  .pt-2", 1, { ease: Power4.easeInOut, top: "-45px" });
                TweenLite.to(".port__head  .pt-3", 1, { ease: Power4.easeInOut, top: "0" });    
                TweenLite.to(".port__head  .pt-4", 1, { ease: Power4.easeInOut, top: "45px" });
                TweenLite.to(".mid__text  .t-2", 1, { ease: Power4.easeInOut, top: "-80px" });
                TweenLite.to(".mid__text  .t-3", 1, { ease: Power4.easeInOut, top: "0" });    
                TweenLite.to(".mid__text  .t-4", 1, { ease: Power4.easeInOut, top: "80px" });
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht * 3, duration: winht })
            .on("enter", function () {
               
                TweenLite.to(".port__head  .pt-3", 1, { ease: Power4.easeInOut, top: "-45px" });
                TweenLite.to(".port__head  .pt-4", 1, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".port__head  .pt-5", 1, { ease: Power4.easeInOut, top: "45px" });
                TweenLite.to(".mid__text  .t-3", 1, { ease: Power4.easeInOut, top: "-80px" });
                TweenLite.to(".mid__text .t-4", 1, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".mid__text  .t-5", 1, { ease: Power4.easeInOut, top: "80px" });
               
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht * 4, duration: winht })
            .on("enter", function () {
               
                TweenLite.to(".port__head  .pt-4", 1, { ease: Power4.easeInOut, top: "-45px" });  
                TweenLite.to(".port__head  .pt-5", 1, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".port__head  .pt-6", 1, { ease: Power4.easeInOut, top: "45px" });
                  TweenLite.to(".mid__text   .t-4", 1, { ease: Power4.easeInOut, top: "-80px" });  
                TweenLite.to(".mid__text  .t-5", 1, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".mid__text   .t-6", 1, { ease: Power4.easeInOut, top: "80px" });
                
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht * 5, duration: winht })
            .on("enter", function () {
               
                TweenLite.to(".port__head  .pt-5", 1, { ease: Power4.easeInOut, top: "-45px" }); 
                TweenLite.to(".port__head  .pt-6", 1, { ease: Power4.easeInOut, top: "0" });  
                TweenLite.to(".port__head  .pt-7", 1, { ease: Power4.easeInOut, top: "45px" });
                TweenLite.to(".mid__text  .t-5", 1, { ease: Power4.easeInOut, top: "-80px" }); 
                TweenLite.to(".mid__text  .t-6", 1, { ease: Power4.easeInOut, top: "0" });  
                TweenLite.to(".mid__text  .t-7", 1, { ease: Power4.easeInOut, top: "80px" });
                
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht * 6, duration: winht - winht / 3 })
            .on("enter", function () {
               
                TweenLite.to(".port__head  .pt-6", 1, { ease: Power4.easeInOut, top: "-45px" }); 
                TweenLite.to(".port__head  .pt-7", 1, { ease: Power4.easeInOut, top: "0" });
                 TweenLite.to(".mid__text   .t-6", 1, { ease: Power4.easeInOut, top: "-80px" }); 
                TweenLite.to(".mid__text   .t-7", 1, { ease: Power4.easeInOut, top: "0" });
                
                
            })
            .addTo(controller);
    });
}
