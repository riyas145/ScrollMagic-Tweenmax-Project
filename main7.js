if ($(window).width() >= 767) {
    $(function () {
          var duration = 3;
  TweenMax.to(".getquote", duration / 1, {y:-50, ease:Power2.easeOut, repeat:-1});
  TweenMax.to(".getquote", duration / 1, {y:0, ease:Bounce.easeOut, delay:duration / 4, repeat:-1});
        var winht = $(window).height(),
            winhwt = $(window).width();
        var controller = new ScrollMagic.Controller({ container: window });
        $(".appi-portfolio-sec").css("height", winht * 8 );
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: -winht * 2, duration: winht })
            .on("enter", function () {
                
                            //MidleText
                TweenLite.to(".mid__text  .t-1", 1.3, { ease: Power4.easeInOut, top: "80px" });
                //TextCount
                TweenLite.to(".count__text  .t-1", 1.3, { ease: Power4.easeInOut, top: "90px" });
                //TweenLite.set($(".appi-portfolio-sec-left.new_bg-cont"), {backgroundImage:'url(./img/bg-1.png)'});
                //Button
                TweenLite.to(".btn__cont .btn-1", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                //Image
                TweenLite.to(".img1", 1.3, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                //LastText
                TweenLite.to(".last__text  .t-1", 1.5, { ease: Power4.easeInOut, top: "40px" });
                //PortText
                TweenLite.to(".port__new_cont .last__text  .t-1", 1.5, { ease: Power4.easeInOut, top: "40px" });
                //Paratext
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l1 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l1 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l1 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to("#Layer-1", 1.6, { ease: Power4.easeInOut, strokeDasharray: "0, 1000" });
              

            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 0, duration: winht * 7 }).setPin(".appi-ins-portfolio-sec").addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: (-winht * 2) / 2, duration: winht * 2 })
            .on("enter", function () {
            
                //MidleText
                TweenLite.to(".mid__text  .t-1", 1, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".mid__text .t-2", 1, { ease: Power4.easeInOut, top: "80px" });
                //TextCount
                TweenLite.to(".count__text   .t-1", 1.1, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".count__text  .t-2", 1.1, { ease: Power4.easeInOut, top: "90px" });
                TweenLite.to(".appi-portfolio-sec-left.new_bg-cont ", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#2475B0" } });
                //Button
                TweenLite.to(".btn__cont .btn-1", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } });
                TweenLite.to(".btn__cont .btn-2", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                //LastText
                TweenLite.to(".last__text  .t-1", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".last__text  .t-2", 1.5, { ease: Power4.easeInOut, top: "40px" });
                //PortText
                TweenLite.to(".port__new_cont .last__text .t-1", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".port__new_cont .last__text .t-2", 1.5, { ease: Power4.easeInOut, top: "40px" });
                 //Image Load
                TweenLite.to(".img1", 1, { ease: Power4.easeInOut, css: { bottom: "-9%"} });
                TweenLite.to(".img2 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                //ParaText
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l1 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l1 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l1 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l2 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l2 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l2 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" });
                //Stroke
                TweenLite.to("#point-1", 1.6, { ease: Power4.easeInOut, fill: "#ffffff",opacity:"1",stroke:"00AEEF" });
                TweenLite.to("#point-2", 1.6, { ease: Power4.easeInOut, fill: "#ffffff",opacity:"0.5",stroke:"transparent" });
                TweenLite.to("#Layer-1", 1.6, { ease: Power4.easeInOut, strokeDasharray: "110, 1000" });

                
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht, duration: winht })
            .on("enter", function () {
                
              
                 //MidleText
                TweenLite.to(".mid__text  .t-1", 1.3, { ease: Power4.easeInOut, top: "-90px" });
                TweenLite.to(".mid__text  .t-2", 1.3, { ease: Power4.easeInOut, top: "0" });     
                TweenLite.to(".mid__text .t-3", 1.3, { ease: Power4.easeInOut, top: "80px" });
                //TextCount
                TweenLite.to(".count__text   .t-1", 1.1, { ease: Power4.easeInOut, top: "-100px" });
                TweenLite.to(".count__text  .t-2", 1.1, { ease: Power4.easeInOut, top: "0" });     
                TweenLite.to(".count__text  .t-3", 1.1, { ease: Power4.easeInOut, top: "90px" });
                 //Button
                TweenLite.to(".btn__cont .btn-1", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                TweenLite.to(".btn__cont .btn-2", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } });
                TweenLite.to(".btn__cont .btn-3", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
             
                //LastText 
                TweenLite.to(".last__text  .t-1", 1.5, { ease: Power4.easeInOut, top: "-40px" });
                TweenLite.to(".last__text  .t-2", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".last__text  .t-3", 1.5, { ease: Power4.easeInOut, top: "40px" });
                   //PortText
                TweenLite.to(".port__new_cont  .last__text  .t-1", 1.5, { ease: Power4.easeInOut, top: "-55px" });
                TweenLite.to(".port__new_cont  .last__text  .t-2", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".port__new_cont  .last__text  .t-3", 1.5, { ease: Power4.easeInOut, top: "40px" });
               //Image
                TweenLite.to(".img1 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                TweenLite.to(".img2 ", 1, { ease: Power4.easeInOut, css: { bottom: "-9%"} });
                TweenLite.to(".img3 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                //ParaText
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l1 p .l1", 1.2, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l1 p .l2", 1.4, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l1 p .l3", 1.6, { ease: Power4.easeInOut, top: "-300px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l2 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l2 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l2 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l3 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l3 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l3 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" });
               // TweenLite.set($(".appi-portfolio-sec-bg"), {backgroundImage:'url(./img/bg.png)'});
                 //Stroke
                TweenLite.to("#point-2", 1.6, { ease: Power4.easeInOut, fill: "#ffffff",opacity:"1",stroke:"00AEEF" });
                TweenLite.to("#point-3", 1.6, { ease: Power4.easeInOut, fill: "#ffffff",opacity:"0.5",stroke:"transparent" });
                TweenLite.to("#Layer-1", 1.6, { ease: Power4.easeInOut, strokeDasharray: "314, 1000" });
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht * 2, duration: winht })
            .on("enter", function () {
              
               
                //MidleText
                TweenLite.to(".mid__text  .t-2", 1.3, { ease: Power4.easeInOut, top: "-90px" });
                TweenLite.to(".mid__text  .t-3", 1.3, { ease: Power4.easeInOut, top: "0" });    
                TweenLite.to(".mid__text  .t-4", 1.3, { ease: Power4.easeInOut, top: "80px" });
                //TextCount
                TweenLite.to(".count__text   .t-2", 1.1, { ease: Power4.easeInOut, top: "-100px" });
                TweenLite.to(".count__text   .t-3", 1.1, { ease: Power4.easeInOut, top: "0" });    
                TweenLite.to(".count__text   .t-4", 1.1, { ease: Power4.easeInOut, top: "90px" });
                  //Button
                TweenLite.to(".btn__cont .btn-2", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                TweenLite.to(".btn__cont .btn-4", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                TweenLite.to(".btn__cont .btn-3", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } });
                //LastText
                TweenLite.to(".last__text  .t-2", 1.5, { ease: Power4.easeInOut, top: "-40px" });
                TweenLite.to(".last__text  .t-3", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".last__text  .t-4", 1.5, { ease: Power4.easeInOut, top: "40px" });
                  //PortText
                TweenLite.to(".port__new_cont  .last__text  .t-2", 1.5, { ease: Power4.easeInOut, top: "-55px" });
                TweenLite.to(".port__new_cont  .last__text  .t-3", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".port__new_cont  .last__text  .t-4", 1.5, { ease: Power4.easeInOut, top: "40px" });
                //Image
                TweenLite.to(".img2 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                TweenLite.to(".img3 ", 1, { ease: Power4.easeInOut, css: { bottom: "-9%"} });
                TweenLite.to(".img4 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                //ParaText
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l2 p .l1", 1.2, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l2 p .l2", 1.4, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l2 p .l3", 1.6, { ease: Power4.easeInOut, top: "-300px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l3 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l3 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l3 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l4 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l4 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l4 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" });
                 //Stroke
                TweenLite.to("#point-3", 1.6, { ease: Power4.easeInOut, fill: "#ffffff",opacity:"1",stroke:"00AEEF" });
                 TweenLite.to("#point-4", 1.6, { ease: Power4.easeInOut, fill: "#ffffff",opacity:"0.5",stroke:"transparent" });
               TweenLite.to("#Layer-1", 1.6, { ease: Power4.easeInOut, strokeDasharray: "570, 1000" });
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht * 3, duration: winht })
            .on("enter", function () {
               
                
                 //MidleText
                TweenLite.to(".mid__text  .t-3", 1.3, { ease: Power4.easeInOut, top: "-90px" });
                TweenLite.to(".mid__text .t-4", 1.3, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".mid__text  .t-5", 1.3, { ease: Power4.easeInOut, top: "80px" });
                //TextCount
                TweenLite.to(".count__text  .t-3", 1.1, { ease: Power4.easeInOut, top: "-100px" });
                TweenLite.to(".count__text .t-4", 1.1, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".count__text  .t-5", 1.1, { ease: Power4.easeInOut, top: "90px" });
                  //Button
                TweenLite.to(".btn__cont .btn-3", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                TweenLite.to(".btn__cont .btn-5", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                TweenLite.to(".btn__cont .btn-4", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } });
                 //LastText
                TweenLite.to(".last__text  .t-3", 1.5, { ease: Power4.easeInOut, top: "-40px" });
                TweenLite.to(".last__text  .t-4", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".last__text  .t-5", 1.5, { ease: Power4.easeInOut, top: "40px" });
                  //PortText
                TweenLite.to(".port__new_cont  .last__text  .t-3", 1.5, { ease: Power4.easeInOut, top: "-55px" });
                TweenLite.to(".port__new_cont  .last__text  .t-4", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".port__new_cont  .last__text  .t-5", 1.5, { ease: Power4.easeInOut, top: "40px" });
                 //Image
                TweenLite.to(".img3 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                TweenLite.to(".img4 ", 1, { ease: Power4.easeInOut, css: { bottom: "-9%"} });
                TweenLite.to(".img5 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                //ParaText
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l3 p .l1", 1.2, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l3 p .l2", 1.4, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l3 p .l3", 1.6, { ease: Power4.easeInOut, top: "-300px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l4 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l4 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l4 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l5 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l5 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l5 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" });
                 //Stroke
                TweenLite.to("#point-4", 1.6, { ease: Power4.easeInOut, fill: "#ffffff",opacity:"1",stroke:"00AEEF" });
                TweenLite.to("#point-5", 1.6, { ease: Power4.easeInOut, fill: "#ffffff",opacity:"0.5",stroke:"transparent" });
                TweenLite.to("#Layer-1", 1.6, { ease: Power4.easeInOut, strokeDasharray: "800, 1000" });
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht * 4, duration: winht })
            .on("enter", function () {
               
               
                 //MidleText
                TweenLite.to(".mid__text   .t-4", 1.3, { ease: Power4.easeInOut, top: "-90px" });  
                TweenLite.to(".mid__text  .t-5", 1.3, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".mid__text   .t-6", 1.3, { ease: Power4.easeInOut, top: "80px" });
                //TextCount
                TweenLite.to(".count__text   .t-4", 1.1, { ease: Power4.easeInOut, top: "-100px" });  
                TweenLite.to(".count__text  .t-5", 1.1, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".count__text  .t-6", 1.1, { ease: Power4.easeInOut, top: "90px" });
                 //Button
                TweenLite.to(".btn__cont .btn-4", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                TweenLite.to(".btn__cont .btn-6", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                TweenLite.to(".btn__cont .btn-5", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } });
                 //LastText
                TweenLite.to(".last__text  .t-4", 1.5, { ease: Power4.easeInOut, top: "-40px" });
                TweenLite.to(".last__text  .t-5", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".last__text  .t-6", 1.5, { ease: Power4.easeInOut, top: "40px" });
                  //PortText
                TweenLite.to(".port__new_cont  .last__text  .t-4", 1.5, { ease: Power4.easeInOut, top: "-55px" });
                TweenLite.to(".port__new_cont  .last__text  .t-5", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".port__new_cont  .last__text  .t-6", 1.5, { ease: Power4.easeInOut, top: "40px" });
                //Image
                TweenLite.to(".img4 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                TweenLite.to(".img5 ", 1, { ease: Power4.easeInOut, css: { bottom: "-9%"} });
                TweenLite.to(".img6 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                //ParaText
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l4 p .l1", 1.2, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l4 p .l2", 1.4, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l4 p .l3", 1.6, { ease: Power4.easeInOut, top: "-300px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l5 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l5 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l5 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l6 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l6 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l6 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" });
                 //Stroke
                TweenLite.to("#point-5", 1.6, { ease: Power4.easeInOut, fill: "#ffffff",opacity:"1",stroke:"00AEEF" });
                TweenLite.to("#point-6", 1.6, { ease: Power4.easeInOut, fill: "#ffffff",opacity:"0.5",stroke:"transparent" });
                TweenLite.to("#Layer-1", 1.6, { ease: Power4.easeInOut, strokeDasharray: "1000, 1000" });
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht * 5, duration: winht })
            .on("enter", function () {
               
                 //MidleText
                TweenLite.to(".mid__text  .t-5", 1.3, { ease: Power4.easeInOut, top: "-90px" }); 
                TweenLite.to(".mid__text  .t-6", 1.3, { ease: Power4.easeInOut, top: "0" });  
                TweenLite.to(".mid__text  .t-7", 1.3, { ease: Power4.easeInOut, top: "80px" });
                //TextCount
                TweenLite.to(".count__text   .t-5", 1.1, { ease: Power4.easeInOut, top: "-100px" }); 
                TweenLite.to(".count__text  .t-6", 1.1, { ease: Power4.easeInOut, top: "0" });  
                TweenLite.to(".count__text  .t-7", 1.1, { ease: Power4.easeInOut, top: "80px" });
                //Button
                TweenLite.to(".btn__cont .btn-5", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                TweenLite.to(".btn__cont .btn-7", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                TweenLite.to(".btn__cont .btn-6", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } });
                 //LastText
                TweenLite.to(".last__text  .t-5", 1.5, { ease: Power4.easeInOut, top: "-40px" });
                TweenLite.to(".last__text  .t-6", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".last__text  .t-7", 1.5, { ease: Power4.easeInOut, top: "40px" });
                  //PortText
                TweenLite.to(".port__new_cont  .last__text  .t-5", 1.5, { ease: Power4.easeInOut, top: "-55px" });
                TweenLite.to(".port__new_cont  .last__text  .t-6", 1.5, { ease: Power4.easeInOut, top: "0px" });
                TweenLite.to(".port__new_cont  .last__text  .t-7", 1.5, { ease: Power4.easeInOut, top: "40px" });
                //Image
                TweenLite.to(".img5 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                TweenLite.to(".img6 ", 1, { ease: Power4.easeInOut, css: { bottom: "-9%"} });
                TweenLite.to(".img7 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                 //ParaText
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l5 p .l1", 1.2, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l5 p .l2", 1.4, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l5 p .l3", 1.6, { ease: Power4.easeInOut, top: "-300px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l6 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l6 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l6 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l7 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l7 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l7 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" });
                 //Stroke
                TweenLite.to("#point-6", 1.6, { ease: Power4.easeInOut, fill: "#ffffff",opacity:"1",stroke:"00AEEF" });
                TweenLite.to("#Layer-1", 1.6, { ease: Power4.easeInOut, strokeDasharray: "1300, 1000" });
            })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: winht * 6, duration: winht - winht / 3 })
            .on("enter", function () {
               
                
                 //MidleText
                TweenLite.to(".mid__text   .t-6", 1.3, { ease: Power4.easeInOut, top: "-90px" }); 
                TweenLite.to(".mid__text   .t-7", 1.3, { ease: Power4.easeInOut, top: "0" });
                //TextCount
                TweenLite.to(".count__text   .t-6", 1.1, { ease: Power4.easeInOut, top: "-100px" }); 
                TweenLite.to(".count__text   .t-7", 1.1, { ease: Power4.easeInOut, top: "0" });
                //Button
                TweenLite.to(".btn__cont .btn-6", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } });
                TweenLite.to(".btn__cont .btn-7", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } });
                  //LastText
                TweenLite.to(".last__text  .t-6", 1.5, { ease: Power4.easeInOut, top: "-40px" });
                TweenLite.to(".last__text  .t-7", 1.5, { ease: Power4.easeInOut, top: "0px" });
                  //PortText
                TweenLite.to(".port__new_cont  .last__text  .t-6", 1.5, { ease: Power4.easeInOut, top: "-55px" });
                TweenLite.to(".port__new_cont  .last__text  .t-7", 1.5, { ease: Power4.easeInOut, top: "0px" });
                
                //Image
                TweenLite.to(".img6 ", 1, { ease: Power4.easeInOut, css: { bottom: "-100%"} });
                TweenLite.to(".img7 ", 1, { ease: Power4.easeInOut, css: { bottom: "-9%"} });
                 //ParaText
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l6 p .l1", 1.2, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l6 p .l2", 1.4, { ease: Power4.easeInOut, top: "-30px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l6 p .l3", 1.6, { ease: Power4.easeInOut, top: "-300px" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l7 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l7 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" });
                TweenLite.to(".appi-pp-para .appi-cont.appi-pp-l7 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" });
            
            })
            .addTo(controller);
    });
}
