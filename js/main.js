let breakpoint_sp = 1200;

/* ナビゲーション */
$(function () {
  $(".icon__btn").on("click", function () {
    $(this).toggleClass("icon__btn--open");
    $(".gnav").toggleClass("menu__nav--open");
  });
});

/* page_top */
$(function () {
  let pagetop = $(".page-top");
  let apper = false;

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      if (apper == false) {
        apper = true;
        pagetop.stop().animate({ opacity: 1 }, 500);
        pagetop.css("z-index", "0");
      }
    } else {
      if (apper == true) {
        apper = false;
        pagetop.stop().animate({ opacity: 0 }, 500);
        pagetop.css("z-index", "-1");
      }
    }
  });

  $(pagetop).click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

/* slick-key */
$(function () {
  $(".key-visual").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2500,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});

/* slick-item */
function item_anim(container_name) {
  $(container_name).slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 2500,
    slidesToShow: 3,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: breakpoint_sp,
        settings: {
          fade: true,
          slidesToShow: 1,
        },
      },
    ],
  });
}

window.addEventListener("DOMContentLoaded", function () {
  item_anim(".top-goods__container, .service-item__container");
});

/* fade anim */
window.addEventListener("DOMContentLoaded", function () {
  const AnimList = [
    "top-service__img",
    "about-copy__title",
    "about-copy__text",
    "about-main__img",
    "service-wedding__text-item",
    "service-cerem__text-item",
    "service-gift__text-item",
  ];
  for (let i in AnimList) {
    let target_name = AnimList[i];
    const target_element = document.querySelectorAll("." + target_name);
    const cb = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(target_name + "--active");
          observer.unobserve(entry.target);
        }
      });
    };
    const option = {
      rootMargin: "100px 0px",
    };
    const io = new IntersectionObserver(cb, option);
    if (target_element != null) {
      target_element.forEach((el) => io.observe(el));
    }
  }
});
