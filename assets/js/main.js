


$(document).ready(() => {
  "use strict";
     
    //--== Preloader ==--//
    setTimeout(function() {
      $('.preloader').fadeToggle();
    }, 1500);
    //--== Preloader ==--//

    //Header Menu
    const mobileMenu = () => {
      document.querySelectorAll(".menu-items > a").forEach(link => {
          const subMenu = link.parentElement.querySelector(".sub-menus");
          if (!subMenu) return;
          // Set initial styles
          subMenu.style.overflow = "hidden";
          subMenu.style.maxHeight = "0";
          subMenu.style.opacity = "0";
          subMenu.style.transition = "max-height 0.4s ease-in-out, opacity 0.3s ease-in-out";
          link.addEventListener("click", (e) => {
              e.preventDefault();
              const isActive = subMenu.classList.toggle("active");
              if (isActive) {
                  subMenu.style.maxHeight = `${subMenu.scrollHeight}px`;
                  subMenu.style.opacity = "1";
                  // Expand parent menus to fit the newly expanded submenu
                  let parent = subMenu.parentElement.closest(".sub-menus");
                  while (parent) {
                      parent.style.maxHeight = `${parent.scrollHeight + subMenu.scrollHeight}px`;
                      parent = parent.parentElement.closest(".sub-menus");
                  }
              } else {
                  subMenu.style.maxHeight = "0";
                  subMenu.style.opacity = "0";
                  // Collapse parent menus if all child menus are closed
                  let parent = subMenu.parentElement.closest(".sub-menus");
                  while (parent) {
                      parent.style.maxHeight = `${parent.scrollHeight - subMenu.scrollHeight}px`;
                      parent = parent.parentElement.closest(".sub-menus");
                  }
              }
          });
      });
    };
    mobileMenu();
    //header active 
    document.addEventListener("click", (event) => {
      const barsButton = event.target.closest(".bars-button");
      const headerMobile = document.querySelector(".header-mobile");
      const overlay = document.querySelector(".custom-header-overlay");
  
      if (barsButton) {
          // Toggle active class when clicking bars button
          headerMobile.classList.toggle("active");
          overlay.classList.toggle("active");
      } else if (!headerMobile.contains(event.target) && !event.target.closest(".header-mobile")) {
          // Remove active class when clicking outside
          headerMobile.classList.remove("active");
          overlay.classList.remove("active");
      }
    });
  

    

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
    // $('.menu-item, .active-button').on('click', function () {
    //   $(this).siblings("ul").slideToggle(300); 
    // });
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

    //  fade up animation
    let fadeArray_items = document.querySelectorAll('.fade_anim');
    if (fadeArray_items.length > 0) {
      const fadeArray = gsap.utils.toArray('.fade_anim');
      fadeArray.forEach((item, i) => {
        var fade_direction = 'bottom';
        var onscroll_value = 1;
        var duration_value = 0.75;
        var fade_offset = 40;
        var delay_value = 0.15;
        var ease_value = 'power2.out';

        if (item.getAttribute('data-duration')) {
          duration_value = item.getAttribute('data-duration');
        }
        if (item.getAttribute('data-fade-from')) {
          fade_direction = item.getAttribute('data-fade-from');
        }
        if (item.getAttribute('data-delay')) {
          delay_value = item.getAttribute('data-delay');
        }

        let animation_settings = {
          opacity: 0,
          ease: ease_value,
          duration: duration_value,
          delay: delay_value,
        };

        if (fade_direction == 'top') {
          animation_settings['y'] = -fade_offset;
        }
        if (fade_direction == 'left') {
          animation_settings['x'] = -fade_offset;
        }

        if (fade_direction == 'bottom') {
          animation_settings['y'] = fade_offset;
        }

        if (fade_direction == 'right') {
          animation_settings['x'] = fade_offset;
        }

        if (onscroll_value == 1) {
          animation_settings['scrollTrigger'] = {
            trigger: item,
            start: 'top 90%',
          };
        }
        gsap.from(item, animation_settings);
      });
    }

    // title anim
    gsap.utils.toArray(".title_anim").forEach((title, i) => {
      gsap.fromTo(
        title,
        {
          opacity: 0,    
          clipPath: "inset(0 100% 0 0)", // Hidden from right
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          clipPath: "inset(0 0% 0 0)", // Reveal from right
        //   duration: 1,
          ease: "power3.in",
          delay: i * 0.3, // Stagger effect
          scrollTrigger: {
            trigger: title,
            start: "top 85%", // Start when title enters viewport
            toggleActions: "play none none none",
          },
        }
      );
    });

    // reveal animation
    function revealAnim(selector) {
        document.querySelectorAll(selector).forEach((item) => {
            const direction = item.getAttribute("data-reveal-from") || "left"; // Default: bottom
            const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default: 0s
            const duration = parseFloat(item.getAttribute("data-duration")) || 1.2; // Default: 1.2s
        
            // Define animation properties based on direction
            let fromVars = {
                opacity: 0,
                clipPath: "inset(0 0 0 0)", // Default, changes dynamically
                ease: "power3.out",
                duration: duration,
                delay: delay,
            };
        
            switch (direction) {
                case "top":           
                    fromVars.clipPath = "inset(100% 0% 0% 0%)";
                    break;
                case "right":           
                    fromVars.clipPath = "inset(0% 0% 0% 100%)";
                    break;
                case "bottom":           
                    fromVars.clipPath = "inset(0% 0% 100% 0%)";
                    break;
                case "left":           
                    fromVars.clipPath = "inset(0% 100% 0% 0%)";
                    break;
            }
        
            gsap.fromTo(
                item,
                fromVars,
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration: duration,
                    delay: delay,
                    ease: "power3.inOut",
                    clipPath: "inset(0% 0% 0% 0%)",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }

    // text split animation
    function splitTextAnimation(selector) {
        document.querySelectorAll(selector).forEach((item) => {
            const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default: 0s
            const duration = parseFloat(item.getAttribute("data-duration")) || .5; // Default: 1s
        
            // Preserve spaces while wrapping each letter in a span
            let text = item.innerText;
            item.innerHTML = text.split("").map(letter => {
                return letter === " " 
                    ? "&nbsp;" // Keep space intact
                    : `<span style="display: inline-block; opacity: 0;">${letter}</span>`;
            }).join("");
        
            const letters = item.querySelectorAll("span");
        
            gsap.to(letters, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: duration,
                delay: delay,
                ease: "back.out(1.7)",
                stagger: 0.05, // Stagger effect for each letter
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        
            // Initial hidden state for animation
            gsap.set(letters, { opacity: 0, y: 50, rotationX: 90 });
        });
    }
    // scale and fade animation
    function scaleFadeTextReveal(selector) {
        document.querySelectorAll(selector).forEach((item) => {
            const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default delay
            const duration = parseFloat(item.getAttribute("data-duration")) || 1.4; // Default duration

            // Preserve spaces while wrapping each letter in a span
            let text = item.innerText;
            item.innerHTML = text.split("").map(letter => {
                return letter === " " 
                    ? "&nbsp;" // Keeps spaces intact
                    : `<span style="display: inline-block; opacity: 0; transform: scale(0.5);">${letter}</span>`;
            }).join("");

            const letters = item.querySelectorAll("span");

            gsap.to(letters, {
                opacity: 1,
                scale: 1,
                duration: duration,
                delay: delay,
                rotateX: 0,
                ease: "back.out", // Gives a bouncy feel
                stagger: 0.05, // Adds a smooth delay between each letter
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // Set initial hidden state
            gsap.set(letters, { rotateX: 180 });
        });
    }

    // sliding blur text animation
    function slidingBlurTextReveal(selector) {
        document.querySelectorAll(selector).forEach((item) => {
            const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default delay
            const duration = parseFloat(item.getAttribute("data-duration")) || .8; // Default duration

            // Preserve spaces while wrapping each letter in a span
            let text = item.innerText;
            item.innerHTML = text.split("").map(letter => {
                return letter === " " 
                    ? "&nbsp;" // Keeps spaces intact
                    : `<span style="display: inline-block; opacity: 0; filter: blur(10px);">${letter}</span>`;
            }).join("");

            const letters = item.querySelectorAll("span");

            gsap.to(letters, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: duration,
                delay: delay,
                ease: "power3.out",
                stagger: 0.05, // Adds a smooth delay between each letter
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // Set initial hidden state
            gsap.set(letters, { opacity: 0, filter: "blur(10px)" });
        });
    }
    // explode text animation
    function explodeTextReveal(selector) {
        document.querySelectorAll(selector).forEach((item) => {
            const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default delay
            const duration = parseFloat(item.getAttribute("data-duration")) || 1; // Default duration

            // Preserve spaces while wrapping each letter in a span
            let text = item.innerText;
            item.innerHTML = text.split("").map(letter => {
                return letter === " " 
                    ? "&nbsp;" // Keeps spaces intact
                    : `<span style="display: inline-block; transform: scale(0); opacity: 0;">${letter}</span>`;
            }).join("");

            const letters = item.querySelectorAll("span");

            gsap.to(letters, {
                scale: 1, // Resets the scale to normal size
                opacity: 1, // Fades in the letter
                duration: duration,
                delay: delay,
                ease: "back.out(1.7)", // Exploding back effect
                stagger: 0.05, // Adds a stagger between each letter for the explosion effect
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // Set initial hidden state with scaling to 0
            gsap.set(letters, { scale: 0, opacity: 0 });
        });
    }
    function slidingBlurCardReveal(selector) {
      document.querySelectorAll(selector).forEach((item) => {
          const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default delay
          const duration = parseFloat(item.getAttribute("data-duration")) || 1.2; // Default duration

          // Set initial hidden state
          gsap.set(item, { opacity: 0, filter: "blur(10px)", y: 50 });

          gsap.to(item, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: duration,
              delay: delay,
              ease: "power3.out",
              scrollTrigger: {
                  trigger: item,
                  start: "top 85%",
                  toggleActions: "play none none none",
              },
          });
      });
    }

    // Initialize the animation on elements with the .card-reveal class
    slidingBlurCardReveal(".card_reveal");

    // Call function for elements with class "explode-anim"
    slidingBlurTextReveal(".blur_anim");
    scaleFadeTextReveal(".scale_anim");
    revealAnim(".reveal_anim");
    splitTextAnimation(".split_anim");
    explodeTextReveal(".explode_anim");

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



});