if ($(window).width() >= 767) {
    $(function () {
        var winht = $(window).height(),
            winhwt = $(window).width();
        var controller = new ScrollMagic.Controller({ container: window });

        $(".appi-portfolio-sec").css("height", winht * 8);
         var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            offset: 0,
            duration: winht * 6 + 2
        }).on("enter", function () {
               console.log("first screen");
              
               TweenLite.to(".port__head .pt-1", 1, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".port__head .pt-2", 1.2, { ease: Power4.easeInOut, top: "36px" });
                TweenLite.to(".port__head .pt-3", 1, { ease: Power4.easeInOut, top: "36px" });


            })
            .addTo(controller);
          var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 0, duration: winht * 2 }).setPin(".appi-ins-portfolio-sec").addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: (-winht * 2) / 2, duration: winht * 2 })
            .on("enter", function () {
              
                      TweenLite.to(".port__head .pt-1", 1, { ease: Power4.easeInOut, top: "0" });
                   TweenLite.to(".port__head .pt-2", 1, { ease: Power4.easeInOut, top: "36px" });
                   TweenLite.to(".port__head .pt-3", 1, { ease: Power4.easeInOut, top: "36px" });
               
            })
            .addTo(controller);
             var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht, duration: winht })
            .on("enter", function () {
                  TweenLite.to(".port__head .pt-2", 1, { ease: Power4.easeInOut, top: "0" });
                   TweenLite.to(".port__head .pt-1", 1, { ease: Power4.easeInOut, top: "36px" });
                   TweenLite.to(".port__head .pt-3", 1, { ease: Power4.easeInOut, top: "36px" });
            })
            .addTo(controller);
             var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht, duration: winht })
            .on("enter", function () {
                   TweenLite.to(".port__head .pt-3", 1, { ease: Power4.easeInOut, top: "0" });
                   TweenLite.to(".port__head .pt-2", 1, { ease: Power4.easeInOut, top: "36px" });
                   TweenLite.to(".port__head .pt-1", 1, { ease: Power4.easeInOut, top: "36px" });
            })
            .addTo(controller);
        
    });
}