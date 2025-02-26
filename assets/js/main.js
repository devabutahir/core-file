


$(document).ready(() => {
  "use strict";
     
    //--== Preloader ==--//
    setTimeout(function() {
      $('.preloader').fadeToggle();
    }, 1500);
    //--== Preloader ==--//

    // lenis Scroll Init
    // gsap.registerPlugin(ScrollSmoother); 
    // const lenis = new Lenis();
    // gsap.ticker.add(function (time) {
    //   lenis.raf(time * 400);
    // });
    // gsap.ticker.lagSmoothing(0);
    // ScrollTrigger.update();
    // //Map Scrolling
    // const googleMap = document.querySelector("iframe");
    // if (googleMap && typeof lenis !== "undefined") {
    //   googleMap.addEventListener("mouseenter", () => {
    //     lenis.stop();
    //   });
    //   googleMap.addEventListener("mouseleave", () => {
    //     lenis.start();
    //   });
    // }
    
  // Click to Scroll Top
  var ScrollTop = $(".scrollToTop");
  $('.scrollToTop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // data background
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

    //--== Sticky Header ==--//
    $(window).on("scroll", function () {      
      var fixed_top = $(".header-section, .cmn-fixed");
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("header-fixed");
      }
      else {
        fixed_top.removeClass("header-fixed");
      }
      // Sticky Header
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("header-fixed");
      }
      else {
        fixed_top.removeClass("header-fixed");
      }
      // Check Scroll 
      if ($(this).scrollTop() < 600) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }

      //--== Odometer Counter ==--//
      let windowHeight = $(window).height();
      $('.odometer').children().each(function () {
        if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
          var section = $(this).closest(".counters");
          section.find(".odometer").each(function () {
            $(this).html($(this).attr("data-odometer-final"));
          });
        }
      });
      //--== Odometer Counter ==--//
  
    });
    //--== Sticky Header ==--//

    //--- Custom Sidebar ---//
    $(".remove-click").on("click", function (e) {
      $(".subside-barmenu").toggleClass("active");
    });
    //--- Custom Sidebar Start ---//

    //--- Custom Tilt Js Start ---//
    const tilt = document.querySelectorAll(".tilt");
    VanillaTilt.init(tilt, {
      reverse: true,
      max: 15,
      speed: 400,
      scale: 1.01,
      glare: true,
      reset: true,
      perspective: 800,
      transition: true,
      "max-glare": 0.45,
      "glare-prerender": false,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
    });
    //--- Custom Tilt Js End ---//

    //--== Aos Animation ==--//
    $(document).ready(function () {
      $('.title').attr({
        "data-aos": "zoom-in",
        "data-aos-duration": "2000"
      });
      
      AOS.init({
        once: true,
      });      
    });
    //--== Aos Animation ==--//

    //--== Nice Select ==--//
    $('select').niceSelect();
    //--== Nice Select ==--//

    //--== Magnigiq Popup Initial ==--//
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });
    $('.popup_img').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });

    //--== Magnigiq Popup Initial ==--//
    $('.navbar-toggle-btn, .cus-header-overlay').on('click', function () {
      $('.navbar-toggle-item, .cus-header-overlay2').toggleClass('active'); 
      $('body').toggleClass('overflow-hidden');
      $(this).toggleClass('open');
    });    
    $('.menu-item, .active-button').on('click', function () {
      $(this).siblings("ul").slideToggle(300); 
    });
    //--== Custom Navbar Header ==--//
  
    //--== Swipper SLider Init Area ==--//
    const mycustomslide = new Swiper(".mycustomslide", {
      spaceBetween: 30,
      speed: 1200,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
      breakpoints: {
        1399: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
      },
    }); 

    //--== Custom Comment / Review Reply Box ==--//
    $(".reply").on("click", function () {
      $(this).toggleClass("reply-active");
      $(this).parent().next(".reply__content").slideToggle();
    });
    //--== Custom Comment / Review Reply Box ==--//

    //--== Current Year ==--//
    $(".currentYear").text(new Date().getFullYear());
    //--== Current Year ==--//

    //-- Use Gsap Animation --// 

    // Create trigger the animation
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let visibleFromRight = entry.target;
          let split_item = new SplitText(visibleFromRight, { type: "chars, words" });      
          gsap.from(split_item.chars, { duration: 0.5, x: 95, autoAlpha: 0, stagger: 0.15 });      
          observer.unobserve(visibleFromRight);
        }
      });
    }, {
      threshold: 0.5 
    });
    document.querySelectorAll('.visible-from-right').forEach((element) => {
      observer.observe(element);
    });

    // Visible From Right Slowly Animation
    let visibleSlowlyRight = document.querySelectorAll(".visible-slowly-right");
    if ($(visibleSlowlyRight).length > 0) {
      let char_come = gsap.utils.toArray(visibleSlowlyRight);
      char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
          type: "chars, words",
          lineThreshold: 0.5,
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char_come,
            start: "top 90%", 
            end: "bottom 60%",
            scrub: false, 
            markers: false, 
            toggleActions: "play none none none", 
          },
        });
        tl2.from(split_char.chars, {
          duration: 0.8,
          x: 70,
          autoAlpha: 0,
          stagger: 0.03,
        });
      });

      // Force a ScrollTrigger refresh after the page loads or after resizing
      window.addEventListener("load", () => {
        ScrollTrigger.refresh();
      });
      window.addEventListener("resize", () => {
        ScrollTrigger.refresh();
      });
    }

    // Visible From Bottom Animation
    let visibleFromBottom = gsap.utils.toArray(".visible-from-bottom");
    visibleFromBottom.forEach(splitArea => {
      const contentSplitted = new SplitText(splitArea, { type: "words, lines" });
      gsap.set(splitArea, { perspective: 400 });
      contentSplitted.split({ type: "lines" });
      gsap.fromTo(
        contentSplitted.lines,
        { opacity: 0, rotationX: -75, transformOrigin: "top center -50" },
        {
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.1,
          force3D: true,
          scrollTrigger: {
            trigger: splitArea,
            start: "top 98%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            markers: false,
          }
        }
      );
    });

    // Visible Slowly From Bottom Animation
    const visibleSlowlyBottom = document.querySelectorAll(".visible-slowly-bottom");
    function visibleSlowly() {
      visibleSlowlyBottom.forEach(splitArea => {
        if (splitArea.anim) {
          // Kill any existing animation and revert the splitText
          splitArea.anim.progress(1).kill();
          splitArea.split.revert();
        }

        // Split the text into chars, words, and lines
        splitArea.split = new SplitText(splitArea, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        // Create a new animation with ScrollTrigger
        splitArea.anim = gsap.from(splitArea.split.chars, {
          scrollTrigger: {
            trigger: splitArea,
            toggleActions: "restart pause resume reverse", // Adjust behavior as needed
            start: 'top 90%', // When the top of the element reaches 90% of the viewport
          },
          duration: 0.8,
          ease: "circ.out", // Ease type for the animation
          y: 70,
          stagger: 0.02
        });
      });
    }
    ScrollTrigger.addEventListener("refresh", visibleSlowly);
    window.addEventListener("load", () => {
      ScrollTrigger.refresh(); 
      visibleSlowly(); 
    });
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh(); 
      visibleSlowly(); 
    });
    visibleSlowly();

    // img Vivacity
    let imgVivacity = document.querySelectorAll(".image-vivacity");
    if (imgVivacity) {
      VanillaTilt.init(imgVivacity, {
        max: 3,
        speed: 6800,
        perspective: 450,
      });
    }

    // image right to left 
    gsap.registerPlugin(ScrollTrigger);
      let revealContainers = document.querySelectorAll(".reveal-one");
      revealContainers.forEach((container) => {
      let image = container.querySelector(".reveal-image-one");
      let rts = gsap.timeline({
          scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
          start: "top 90%",
          end: "top 0%",
          }
      });
      rts.set(container, {
          autoAlpha: 1
      });
      rts.from(container, 1.5, {
          xPercent: 100,
          ease: Power2.out
      });
      rts.from(image, 1.5, {
          xPercent: -100,
          scale: 1.3,
          delay: -1.5,
          ease: Power2.out
      });
    });


});