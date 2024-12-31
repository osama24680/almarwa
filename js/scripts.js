(function ($) {
  $(".woocommerce-form-coupon-toggle .showcoupon").on("click", function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".woocommerce-form-coupon").stop(true, true).slideDown();
    } else {
      $(".woocommerce-form-coupon").stop(true, true).slideUp();
    }
  });
  /* --------------------------------------------------
   * sticky header
   * --------------------------------------------------*/
  $(".header-static .is-fixed")
    .parent()
    .append('<div class="header-clone"></div>');
  $(".header-clone").height($("#site-header .is-fixed").outerHeight());
  $(".header-static .header-clone").hide();
  $(window).on("scroll", function () {
    var site_header = $("#site-header").outerHeight() + 1;

    if ($(window).scrollTop() >= site_header) {
      $(".site-header .is-fixed").addClass("is-stuck");
      $(".header-static .header-clone").show();
    } else {
      $(".site-header .is-fixed").removeClass("is-stuck");
      $(".header-static .header-clone").hide();
    }
  });

  /* --------------------------------------------------
   * slider
   * --------------------------------------------------*/
  $(document).ready(function () {
    const slider = $(".slider");
    const logos = $(".slider img");
    let speed = 1; // سرعة التحريك (أبطأ قليلاً لجعلها سلسة)

    // تكرار الصور لضمان التمرير المستمر
    const sliderHTML = slider.html();
    slider.append(sliderHTML).append(sliderHTML); // نسخ مرتين لضمان السلاسة

    // ضبط الموضع الأولي
    let translateX = 0;

    function moveLogos() {
      translateX -= speed;

      // إعادة ضبط الموضع عندما تخرج الصور الأولى بالكامل
      if (translateX <= -slider[0].scrollWidth / 3) {
        translateX = 0;
      }

      // تحديث الموضع
      slider.css("transform", `translateX(${translateX}px)`);

      // استمرار الحركة
      requestAnimationFrame(moveLogos);
    }

    moveLogos(); // بدء الحركة
  });

  /* --------------------------------------------------
   * mobile menu
   * --------------------------------------------------*/
  // $(".mmenu_wrapper li:has(ul)").prepend(
  //   '<span class="arrow"><i class="ot-flaticon-next"></i></span>'
  // );
  // $(".mmenu_wrapper .mobile_mainmenu > li span.arrow").on("click", function () {
  //   $(this).parent().find("> ul").stop(true, true).slideToggle();
  //   $(this).toggleClass("active");
  // });

  // $("#mmenu_toggle").on("click", function () {
  //   $(this).toggleClass("active");
  //   $(this).parents(".header_mobile").toggleClass("open");
  //   if ($(this).hasClass("active")) {
  //     $(".mobile_nav").stop(true, true).slideDown(100);
  //   } else {
  //     $(".mobile_nav").stop(true, true).slideUp(100);
  //   }
  // });

  /* ==========================================
    Search on Header
    ========================================== */
  $(".toggle_search").on("click", function () {
    $(this).toggleClass("active");
    $(".h-search-form-field").toggleClass("show");
    if ($(this).find("i").hasClass("ot-flaticon-search")) {
      $(".toggle_search > i")
        .removeClass("ot-flaticon-search")
        .addClass("ot-flaticon-close-1");
    } else {
      $(".toggle_search > i")
        .removeClass("ot-flaticon-close-1")
        .addClass("ot-flaticon-search");
    }
    $(".h-search-form-inner > form > input.search-field").focus();
  });

  var element = $("#panel-btn"),
    sidebar = $("#side-panel");

  function panel_handler() {
    var isActive = !element.hasClass("active");

    element.toggleClass("active", isActive);
    sidebar.toggleClass("side-panel-open", isActive);
    $("body").toggleClass("side-panel-active", isActive);
    return false;
  }

  $("#panel-btn, .side-panel-close, .panel-overlay").on("click", panel_handler);

  /* --------------------------------------------------
   * mobile menu
   * --------------------------------------------------*/
  // var element = $("#mmenu-toggle"),
  //   mmenu = $("#mmenu-wrapper");

  // function mmenu_handler() {
  //   var isActive = !element.hasClass("active");

  //   element.toggleClass("active", isActive);
  //   mmenu.toggleClass("mmenu-open", isActive);
  //   $("body").toggleClass("mmenu-active", isActive);
  //   return false;
  // }

  // $("#mmenu-toggle, .mmenu-close, .mmenu-overlay").on("click", mmenu_handler);

  // $(".mmenu-wrapper li:has(ul)").prepend(
  //   '<span class="arrow"><i class="ot-flaticon-next"></i></span>'
  // );
  // $(".mmenu-wrapper .mobile_mainmenu > li span.arrow").on("click", function () {
  //   $(this).parent().find("> ul").stop(true, true).slideToggle();
  //   $(this).toggleClass("active");
  // });

  /* Counter */
  // $(window).on("scroll", function () {
  //   $(".ot-counter").each(function () {
  //     var pos_y = $(this).offset().top - window.innerHeight;
  //     var $this = $(this).find("span.num"),
  //       countTo = $this.attr("data-to"),
  //       during = parseInt($this.attr("data-time")),
  //       topOfWindow = $(window).scrollTop();

  //     if (pos_y < topOfWindow) {
  //       $({
  //         countNum: $this.text(),
  //       }).animate(
  //         {
  //           countNum: countTo,
  //         },
  //         {
  //           duration: during,
  //           easing: "swing",
  //           step: function () {
  //             $this.text(Math.floor(this.countNum));
  //           },
  //           complete: function () {
  //             $this.text(this.countNum);
  //           },
  //         }
  //       );
  //     }
  //   });

  //   $(".ot-counter2").each(function () {
  //     var pos_y = $(this).offset().top - window.innerHeight;
  //     var $this = $(this).find("span.num"),
  //       countTo = $this.attr("data-to"),
  //       during = parseInt($this.attr("data-time")),
  //       topOfWindow = $(window).scrollTop();

  //     if (pos_y < topOfWindow) {
  //       $({
  //         countNum: $this.text(),
  //       }).animate(
  //         {
  //           countNum: countTo,
  //         },
  //         {
  //           duration: during,
  //           easing: "swing",
  //           step: function () {
  //             $this.text(Math.floor(this.countNum));
  //           },
  //           complete: function () {
  //             $this.text(this.countNum);
  //           },
  //         }
  //       );
  //     }
  //   });

  //   $(".circle-progress").each(function () {
  //     var bar_color = $(this).data("color");
  //     var bar_hei = $(this).data("height");
  //     var bar_size = $(this).data("size");
  //     var pos_y = $(this).offset().top;
  //     var topOfWindow = $(window).scrollTop();
  //     if (pos_y < topOfWindow + 900) {
  //       $(this)
  //         .find(".inner-bar")
  //         .easyPieChart({
  //           barColor: bar_color,
  //           trackColor: false,
  //           scaleColor: false,
  //           lineCap: "square",
  //           lineWidth: bar_hei,
  //           size: bar_size,
  //           animate: 1000,
  //           onStart: $.noop,
  //           onStop: $.noop,
  //           easing: "easeOutBounce",
  //           onStep: function (from, to, percent) {
  //             $(this.el).find(".percent").text(Math.round(percent)) + "%";
  //           },
  //         });
  //     }
  //   });
  // });

  $(".ot-accordions").each(function () {
    var selector = $(this),
      content = selector.find(".acc-content"),
      header = selector.find(".acc-toggle");

    header.off("click");

    header.each(function () {
      if ($(this).data("default") == "yes") {
        $(this).next().addClass("active").slideDown(300);
        $(this).parent().addClass("current");
      }
    });

    header.on("click", function (e) {
      e.preventDefault();
      var $this = $(this);

      $this.next().toggleClass("active").slideToggle(300);
      $this.parent().toggleClass("current");
      content.not($this.next()).slideUp(300);
      header.not($this).parent().removeClass("current");
    });
  });

  $(".ot-tabs").each(function () {
    var selector = $(this),
      tabs = selector.find(".tabs-heading li"),
      content = selector.find(".tab-content");
    tabs.first().addClass("current");
    content.first().addClass("current");

    tabs.on("click", function () {
      var tab_id = $(this).attr("data-tab");
      $(this).siblings().removeClass("current");
      $(this).parents(".ot-tabs").find(".tab-content").removeClass("current");
      $(this).addClass("current");
      $("#" + tab_id).addClass("current");
    });
  });

  $(".service-box").each(function () {
    var selector = $(this),
      imgPopup = selector.find(".image-box > div");
    selector.lightGallery({
      selector: imgPopup,
      share: false,
      pager: false,
    });
  });

  $(".team-wrap").each(function () {
    var selector = $(this).find(".team-social > span");
    selector.on("click", function () {
      $(this).parent().toggleClass("active");
    });
  });

  $(".ot-process[data-tab]").each(function () {
    var selector = $(this);
    selector.find(".process_nav li").first().addClass("current");
    selector.find(".process-des div.process-des-item").hide();
    selector.find(".process-des div.process-des-item").first().show();
    selector.find(".process_nav li").on("click", function () {
      $(this).parent().find("li").removeClass("current");
      $(this).addClass("current");
      $(this)
        .parents(".ot-process")
        .find(".process-des div.process-des-item")
        .hide();

      var index = $(this).index();
      $(this)
        .parents(".ot-process")
        .find(".process-des div.process-des-item:eq(" + index + ")")
        .fadeIn(300);
    });
  });

  $(".ot-countdown").each(function () {
    var selector = $(this),
      date = selector.data("date"),
      zone = selector.data("zone"),
      day = selector.data("day"),
      days = selector.data("days"),
      hour = selector.data("hour"),
      hours = selector.data("hours"),
      min = selector.data("min"),
      mins = selector.data("mins"),
      second = selector.data("second"),
      seconds = selector.data("seconds");
    selector.countdown(
      {
        date: date,
        offset: zone,
        day: day,
        days: days,
        hour: hour,
        hours: hours,
        minute: min,
        minutes: mins,
        second: second,
        seconds: seconds,
      },
      function () {
        alert("Done!");
      }
    );
  });

  $(window).on("load resize", function () {
    var hero = $("#hero-section"),
      heroContent = hero.find(".hero-content"),
      contentHeight = heroContent.height(),
      sliderHeight = $(window).height(),
      headerHeight = $("#site-header-wrap").height();

    if ($("body").hasClass("header-sticky")) headerHeight = headerHeight / 2;

    var contentMargin = (sliderHeight - contentHeight - headerHeight) / 2;

    hero.css({ height: sliderHeight + "px" });

    heroContent.css({
      "margin-top": headerHeight + contentMargin + "px",
      "margin-bottom": contentMargin + "px",
    });
  });

  if ($().vegas) {
    $("#hero-section").each(function () {
      var $this = $(this),
        number = $this.data("number"),
        number = parseInt(number),
        effect = $this.data("effect"),
        i = 1,
        slides = [];

      while (i <= number) {
        slides.push({ src: $this.data("image-" + i) });
        i++;
      }

      $this.vegas({
        slides: slides,
        overlay: true,
        transition: effect,
      });
    });
  }

  $("a.scroll-target").on("click", function (e) {
    var $anchor = $(this);
    $("html, body").animate({
      scrollTop: $($anchor.attr("href")).offset().top - 0,
    });
    e.preventDefault();
  });

  /* Meeage Box */
  $(".message-box > i").on("click", function () {
    $(this).parent().fadeOut();
  });

  /*Gallery Post*/
  $(".gallery-post").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    auto: true,
    loop: true,
    navText: [
      '<i class="ot-flaticon-left-arrow"></i>',
      '<i class="ot-flaticon-right-arrow"></i>',
    ],
    responsive: [],
  });

  $(".simple-slide").owlCarousel({
    items: 2,
    nav: true,
    dots: false,
    auto: true,
    loop: true,
    navText: [
      '<i class="ot-flaticon-left-arrow"></i>',
      '<i class="ot-flaticon-right-arrow"></i>',
    ],
    responsive: {
      1000: {
        items: 2,
      },
      767: {
        nav: false,
        dots: true,
        items: 1,
      },
      0: {
        nav: false,
        dots: true,
        items: 1,
      },
    },
  });

  $(".ot-testimonials-slider-s1").owlCarousel({
    nav: false,
    dots: true,
    loop: true,
    margin: 30,
    navText: [
      '<i class="ot-flaticon-left-arrow"></i>',
      '<i class="ot-flaticon-right-arrow"></i>',
    ],
    responsive: {
      1000: {
        items: 2,
      },
      767: {
        items: 1,
      },
      0: {
        items: 1,
      },
    },
  });

  $(".testi-col-3").owlCarousel({
    nav: false,
    dots: true,
    loop: true,
    margin: 30,
    navText: [
      '<i class="ot-flaticon-left-arrow"></i>',
      '<i class="ot-flaticon-right-arrow"></i>',
    ],
    responsive: {
      1000: {
        items: 3,
      },
      767: {
        items: 1,
      },
      0: {
        items: 1,
      },
    },
  });

  $(".testimonials-slide-2").owlCarousel({
    nav: true,
    dots: false,
    loop: true,
    navText: [
      '<i class="ot-flaticon-left-arrow"></i>',
      '<i class="ot-flaticon-right-arrow"></i>',
    ],
    responsive: {
      1000: {
        items: 1,
      },
      767: {
        items: 1,
      },
      0: {
        items: 1,
      },
    },
  });

  $(".team-slider").owlCarousel({
    nav: false,
    dots: true,
    loop: true,
    navText: [
      '<i class="ot-flaticon-left-arrow"></i>',
      '<i class="ot-flaticon-right-arrow"></i>',
    ],
    responsive: {
      1200: {
        items: 5,
      },
      767: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  });

  $(".clients-slide").owlCarousel({
    nav: false,
    dots: false,
    loop: true,
    margin: 140,
    item: "center",
    navText: [
      '<i class="ot-flaticon-left-arrow"></i>',
      '<i class="ot-flaticon-right-arrow"></i>',
    ],
    responsive: {
      1600: {
        items: 6,
      },
      1200: {
        margin: 60,
        items: 6,
      },
      767: {
        margin: 60,
        items: 4,
      },
      0: {
        margin: 50,
        items: 3,
      },
    },
  });

  $(".clients-slide-medium").owlCarousel({
    nav: false,
    dots: false,
    loop: true,
    margin: 100,
    item: "center",
    navText: [
      '<i class="ot-flaticon-left-arrow"></i>',
      '<i class="ot-flaticon-right-arrow"></i>',
    ],
    responsive: {
      1600: {
        items: 6,
      },
      1200: {
        margin: 60,
        items: 6,
      },
      767: {
        margin: 60,
        items: 4,
      },
      0: {
        margin: 100,
        items: 2,
      },
    },
  });

  $(".project-slider").owlCarousel({
    nav: false,
    dots: true,
    loop: true,
    margin: 30,
    navText: [
      '<i class="ot-flaticon-left-arrow"></i>',
      '<i class="ot-flaticon-right-arrow"></i>',
    ],
    responsive: {
      1200: {
        items: 3,
      },
      767: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  });

  $(".project-slider-4item").owlCarousel({
    nav: false,
    dots: false,
    loop: true,
    navText: [
      '<i class="ot-flaticon-left-arrow"></i>',
      '<i class="ot-flaticon-right-arrow"></i>',
    ],
    responsive: {
      1200: {
        items: 4,
      },
      767: {
        items: 2,
      },
      0: {
        dots: true,
        items: 1,
      },
    },
  });

  $(".single-product").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    callbacks: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: "URLHash",
  });

  /* --------------------------------------------------
   * image gallery
   * --------------------------------------------------*/
  $(".image-gallery").each(function () {
    var selector = $(this),
      popup = selector.find(".gallery-icon > a");
    popup.append(
      '<a href="#" class="overlay"><i class="ot-flaticon-add"></i></a>'
    );
    selector.lightGallery({
      selector: popup,
      share: false,
      pager: false,
    });
  });

  $(".single-product .item ").each(function () {
    var selector = $(this),
      imgPopup = selector.find("> a");
    selector.lightGallery({
      selector: imgPopup,
      share: false,
      showThumbByDefault: false,
      pager: false,
    });
  });
  /* --------------------------------------------------
   * popup video
   * --------------------------------------------------*/
  var video_popup = $(".video-popup");
  if (video_popup.length > 0) {
    video_popup.each(function () {
      $(this).lightGallery({
        selector: ".video-popup > a",
      });
    });
  }

  /* --------------------------------------------------
   * related projects
   * --------------------------------------------------*/
  $(".portfolio-related-posts").each(function () {
    //   var selector = $(this);
    //   new Swiper(selector, {
    //     slidesPerView: 3,
    //     loop: false,
    //     speed: 600,
    //     watchOverflow: true,
    //     spaceBetween: 30,
    //     pagination: {
    //       el: ".octf-swiper-pagination",
    //       clickable: true,
    //     },
    //     breakpoints: {
    //       360: {
    //         slidesPerView: 1,
    //         slidesPerGroup: 1,
    //       },
    //       768: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 1,
    //       },
    //       1024: {
    //         slidesPerView: 3,
    //         slidesPerGroup: 1,
    //         pagination: {
    //           clickable: true,
    //         },
    //       },
    //     },
    //   });
    // });

    /* --------------------------------------------------
     * filter projects
     * --------------------------------------------------*/
    function updateFilter() {
      $(window).load(function () {
        $(".project_filters a").each(function () {
          var data_filter = this.getAttribute("data-filter");
          var num = $(this)
            .closest(".project-filter-wrapper")
            .find(".project-item")
            .filter(data_filter).length;
          $(this).find(".filter-count").text(num);
          if (num != 0 && $(this).hasClass("empty")) {
            $(this).removeClass("empty");
          }
        });
      });
    }
    $(window).load(function () {
      $(".project-filter-wrapper").each(function () {
        var $container = $(this).find(".projects-grid");
        $container.isotope({
          itemSelector: ".project-item",
          animationEngine: "css",
          masonry: {
            columnWidth: ".grid-sizer",
          },
          layoutMode: "fitRows",
        });

        var $optionSets = $(this).find(".project_filters"),
          $optionLinks = $optionSets.find("a");

        $optionLinks.on("click", function () {
          var $this = $(this);

          if ($this.hasClass("selected")) {
            return false;
          }
          var $optionSet = $this.parents(".project_filters");
          $optionSet.find(".selected").removeClass("selected");
          $this.addClass("selected");

          var selector = $(this).attr("data-filter");
          $container.isotope({
            filter: selector,
          });
          return false;
        });
        /* popup gallery */
        if ($container.hasClass("img-popup")) {
          $(".img-popup").lightGallery({
            selector: ".projects-thumbnail",
            share: false,
            pager: false,
            thumbnail: false,
          });
        }
        /* count filters */
        updateFilter();
      });
    });

    /* --------------------------------------------------
     * back to top
     * --------------------------------------------------*/
    // if ($("#back-to-top").length) {
    //   var scrollTrigger = 500, // px
    //     backToTop = function () {
    //       var scrollTop = $(window).scrollTop();
    //       if (scrollTop > scrollTrigger) {
    //         $("#back-to-top").addClass("show");
    //       } else {
    //         $("#back-to-top").removeClass("show");
    //       }
    //     };
    //   backToTop();
    //   $(window).on("scroll", function () {
    //     backToTop();
    //   });
    //   $("#back-to-top").on("click", function (e) {
    //     e.preventDefault();
    //     $("html,body").animate(
    //       {
    //         scrollTop: 0,
    //       },
    //       700
    //     );
    //   });
    // }
  });
})(jQuery);







//  Counter
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".num");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-to");
    const duration = +counter.getAttribute("data-time");
    const increment = target / (duration / 10);

    let count = 0;

    const updateCounter = () => {
      count += increment;
      if (count >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = Math.floor(count);
        setTimeout(updateCounter, 10);
      }
    };

    updateCounter();
  });
});


// back to top button
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector("#back-to-top");
  if (backToTopButton) {
    const scrollTrigger = 500; // px

    // Function to toggle visibility of the button
    const backToTop = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > scrollTrigger) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    };

    // Run the function once to set initial state
    backToTop();

    // Add scroll event listener
    window.addEventListener("scroll", backToTop);

    // Add click event listener for smooth scroll to top
    backToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});



// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("#mmenu-toggle");
  const mmenu = document.querySelector("#mmenu-wrapper");
  const body = document.body;

  // Handler for toggling the mobile menu
  function mmenuHandler() {
    const isActive = !element.classList.contains("active");

    element.classList.toggle("active", isActive);
    mmenu.classList.toggle("mmenu-open", isActive);
    body.classList.toggle("mmenu-active", isActive);
    return false;
  }

  // Add click event listeners to the toggle button, close button, and overlay
  document
    .querySelectorAll("#mmenu-toggle, .mmenu-close, .mmenu-overlay")
    .forEach((item) => {
      item.addEventListener("click", mmenuHandler);
    });

  // Add arrows to list items with submenus
  document.querySelectorAll(".mmenu-wrapper li").forEach((li) => {
    if (li.querySelector("ul")) {
      const arrow = document.createElement("span");
      arrow.classList.add("arrow");
      arrow.innerHTML = '<i class="ot-flaticon-next"></i>';
      li.prepend(arrow);
    }
  });

  // Toggle submenus when clicking on arrows
  document
    .querySelectorAll(".mmenu-wrapper .mobile_mainmenu > li .arrow")
    .forEach((arrow) => {
      arrow.addEventListener("click", function () {
        const submenu = arrow.parentElement.querySelector("> ul");
        if (submenu) {
          submenu.style.display =
            submenu.style.display === "block" ? "none" : "block";
          arrow.classList.toggle("active");
        }
      });
    });
});




document.addEventListener("DOMContentLoaded", function () {
  // Add arrow to list items with submenus
  document.querySelectorAll(".mmenu_wrapper li").forEach((li) => {
    if (li.querySelector("ul")) {
      const arrow = document.createElement("span");
      arrow.classList.add("arrow");
      arrow.innerHTML = '<i class="ot-flaticon-next"></i>';
      li.prepend(arrow);
    }
  });

  // Toggle submenu visibility on arrow click
  document
    .querySelectorAll(".mmenu_wrapper .mobile_mainmenu > li .arrow")
    .forEach((arrow) => {
      arrow.addEventListener("click", function () {
        const submenu = arrow.parentElement.querySelector("> ul");
        if (submenu) {
          if (submenu.style.display === "block") {
            submenu.style.display = "none";
          } else {
            submenu.style.display = "block";
          }
          arrow.classList.toggle("active");
        }
      });
    });

  // Toggle mobile menu
  const mmenuToggle = document.querySelector("#mmenu_toggle");
  if (mmenuToggle) {
    mmenuToggle.addEventListener("click", function () {
      const headerMobile = mmenuToggle.closest(".header_mobile");
      const mobileNav = document.querySelector(".mobile_nav");

      mmenuToggle.classList.toggle("active");
      if (headerMobile) headerMobile.classList.toggle("open");

      if (mobileNav) {
        if (mmenuToggle.classList.contains("active")) {
          mobileNav.style.display = "block";
        } else {
          mobileNav.style.display = "none";
        }
      }
    });
  }
});




// transperency of slider logos
document.addEventListener("DOMContentLoaded", function () {
  const groundText = document.querySelector(".ground-text");
  const sliderImages = document.querySelectorAll(".slider img");

  // Function to fade images and show text
  const fadeImagesAndShowText = () => {
    groundText.style.opacity = 1; // Make text visible
    sliderImages.forEach((img) => {
      img.classList.add("faded"); // Reduce image opacity
    });

    // Restore images' opacity after 3 seconds
    setTimeout(() => {
      groundText.style.opacity = 0; // Hide text
      sliderImages.forEach((img) => {
        img.classList.remove("faded");
      });
    }, 3000); // Adjust timing as needed
  };

  // Trigger the fade effect every time the slider changes
  setInterval(fadeImagesAndShowText, 5000); // Adjust timing as per slider duration
});



  // Function to handle progress bar animation
  function handleProgressBars() {
    const progressBars = document.querySelectorAll(".ot-progress");

    progressBars.forEach((progress) => {
      const posY = progress.getBoundingClientRect().top + window.scrollY;
      const value = progress
        .querySelector(".progress-bar")
        .getAttribute("data-percent");
      const topOfWindow = window.scrollY;

      // Check if the element is in view
      if (posY < topOfWindow + 900) {
        progress.querySelector(".progress-bar").style.width = value;
      }
    });

    progressBars.forEach((progress) => {
      // Skip already processed progress bars
      if (progress.dataset.processed) return;

      const bar = progress;
      const line = bar.querySelector(".progress-bar");
      const progressEnd = parseInt(bar.getAttribute("data-percent"), 10);
      const percentText = bar.querySelector(".ppercent");
      const scrollTop = document.documentElement.scrollTop + window.innerHeight;

      if (scrollTop > posY + bar.offsetHeight) {
        bar.setAttribute("data-processed", "true");
        line.style.width = `${bar.offsetWidth * (progressEnd / 100)}px`;

        for (let i = 0; i <= 50; i++) {
          setTimeout(() => {
            percentText.innerHTML = `${Math.round((progressEnd / 50) * i)}%`;
          }, 30 * i);
        }
      }
    });

    progressBars.forEach((progress) => {
      if (progress.dataset.processed) {
        const bar = progress;
        const line = bar.querySelector(".progress-bar");
        const progressEnd = parseInt(bar.getAttribute("data-percent"), 10);

        line.style.width = `${bar.offsetWidth * (progressEnd / 100)}px`;
      }
    });
  }
  window.addEventListener("scroll", handleProgressBars);
  handleProgressBars();
