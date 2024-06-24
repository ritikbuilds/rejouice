const page1 = document.querySelector(".page-1");
const page5Center = document.querySelector(".page-5-center");
const cursor = document.querySelector(".cursor");
const rspan = document.querySelectorAll(".underline-r-close");
const page8Bu = document.querySelector(".page-8 h1 .bold-underline");
const page2Bu1 = document.querySelector(
  ".page-2-bottom h1:first-of-type .bold-underline"
);
const page2Bu2 = document.querySelector(
  ".page-2-bottom h1:last-of-type .bold-underline"
);

function lenis() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function swiper() {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 0.8,
    spaceBetween: "13.5%",
    loop: true,

    breakpoints:{
      0:{
        slidesPerView:0.6
      },
      600:{
        slidesPerView:0.8
      }
    }
  });
}

function loaderAnimation() {
  let tl = gsap.timeline();

  tl.from(".loader h1", {
    delay: 0.5,
    opacity: 0,
    transform:'translate(40%)',
    duration: 1,
    ease: "power1.out",
  });

  tl.to(".loader h1", {
    opacity: 0,
    transform:'translate(-30%)',
    duration: 1,
    ease: "power1.out",
  });

  tl.to(".loader", {
    opacity: 0,
  });

  tl.to(".loader", {
    display: "none",
  });

  function titleAnimation() {
    tl.from(
      ".page-1 h1.title span",
      {
        delay: -1,
        opacity: 0,
        scaleY: 0.6,
        transform: "translateY(100%)",
        stagger: 0.1,
      },
      "flag"
    );

    tl.from(
      ".navbar h1",
      {
        delay: -1,
        opacity: 0.5,
        x: 60,
      },
      "flag"
    );
  }
  titleAnimation();
}

function cursorAnimation() {
  function cursorIn() {
    cursor.textContent = "Take One!";
    cursor.style.background = "#000";
    cursor.style.height = "12vh";
    cursor.style.width = "6vw";
    cursor.style.fontSize = "0.8vw";
  }

  function cursorOut() {
    cursor.textContent = "Play Reel";
    cursor.style.background = "#0000005f";
    cursor.style.height = "14vh";
    cursor.style.width = "7vw";
    cursor.style.fontSize = "1vw";
  }

  function hideCursor() {
    gsap.to(".cursor", {
      transform: `translate(-50%,-50%) scale(0)`,
    });
  }

  function displayCursor() {
    gsap.to(".cursor", {
      transform: `translate(-50%,-50%) scale(1)`,
    });
  }

  document.addEventListener("mousemove", (e) => {
    gsap.to(".cursor", {
      left: e.x,
      top: e.y,
    });
  });

  page1.addEventListener("mouseenter", () => {
    displayCursor();
  });

  page1.addEventListener("mouseleave", () => {
    hideCursor();
  });

  page5Center.addEventListener("mouseenter", () => {
    displayCursor();
    cursorIn();
  });

  page5Center.addEventListener("mouseleave", () => {
    hideCursor();
    cursorOut();
  });
}

function underlineAnimation() {
  gsap.to(".page-2-top.underline", {
    "--width": "100%",
    duration: 0.9,
    delay: 0.3,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".page-2-top h1",
      start: "top 100%",
      end: "top -60%",
      toggleActions: "play reset play reset",
    },
  });

  gsap.to(".page-4-top.underline", {
    "--width": "100%",
    duration: 0.9,
    delay: 0.3,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".page-4-top h1",
      start: "top 100%",
      end: "top -65%",
      toggleActions: "play reset play reset",
    },
  });

  gsap.to(".page-6-top.underline", {
    "--width": "100%",
    duration: 0.9,
    delay: 0.3,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".page-6-top h1",
      start: "top 100%",
      end: "top -65%",
      toggleActions: "play reset play reset",
    },
  });
}

function ParaAnimation() {
  function page2Para() {
    gsap.from(".page-2-top h1 span,.page-2-center h1 span", {
      transform: "translateY(100%)",
      duration: 0.7,
      delay: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".page-2-top h1",
        start: "top 100%",
        end: "top -60%",
        toggleActions: "play reset play reset",
      },
    });

    gsap.from(".page-2-bottom p span,.page-2-bottom h1 span", {
      transform: "translateY(100%)",
      duration: 0.7,
      delay: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".page-2-bottom p",
        start: "top 100%",
        end: "top -20%",
        toggleActions: "play reset play reset",
      },
    });
  }

  function page4para() {
    gsap.from(".page-4-top h1 span,.page-4-bottom h1 span", {
      transform: "translateY(100%)",
      duration: 0.7,
      delay: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".page-4-top h1",
        start: "top 100%",
        end: "top -65%",
        toggleActions: "play reset play reset",
      },
    });
  }

  function page6para() {
    gsap.from(".page-6-top h1 span,.page-6-bottom h1 span", {
      transform: "translateY(100%)",
      duration: 0.7,
      delay: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".page-6-top h1",
        start: "top 100%",
        end: "top -65%",
        toggleActions: "play reset play reset",
      },
    });
  }

  function page8para() {
    gsap.from(".page-8 h1 span", {
      transform: "translateY(100%)",
      duration: 0.7,
      delay: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".page-8 h1",
        start: "top 90%",
        toggleActions: "play reset play reset",
      },
    });
  }

  function footerPara() {
    gsap.from(".footer-top,.footer-bottom", {
      transform: "translateY(-100%)",
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".footer",
        start: "top 50%",
        end: "top -20%",
        scrub: 2,
      },
    });

    gsap.from(".footer h1.title span", {
      opacity: 0,
      scaleY: 0.6,
      transform: "translateY(100%)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".footer h1.title",
        toggleActions: "play reset play reset",
      },
    });
  }

  page2Para();
  page4para();
  page6para();
  page8para();
  footerPara();
}

function underlineRclose() {
  rspan.forEach((span) => {
    span.addEventListener("mouseenter", () => {
      gsap.to(span, {
        "--width": "100%",
      });

      span.addEventListener("mouseleave", () => {
        let tl = gsap.timeline();

        tl.to(span, {
          "--width": 0,
          "--left": "none",
          "--right": 0,
        });

        tl.to(span, {
          duration: 0,
          "--width": 0,
          "--left": 0,
          "--right": "none",
        });
      });
    });
  });
}

function boldUnderlineAnimation() {
  function page8BuAnimation() {
    page8Bu.addEventListener("mouseenter", () => {
      let tl = gsap.timeline();

      tl.to(page8Bu, {
        "--width": 0,
        duration: 0.12,
        ease: "circ.out",
      });

      tl.to(page8Bu, {
        duration: 0.12,
        "--width": "100%",
        ease: "circ.out",
      });
    });

    page8Bu.addEventListener("mouseleave", () => {
      let tl = gsap.timeline();

      tl.to(page8Bu, {
        "--width": 0,
        duration: 0.12,
        ease: "circ.out",
      });

      tl.to(page8Bu, {
        duration: 0.12,
        "--width": "100%",
        ease: "circ.out",
      });
    });
  }

  function page2Bu1Animation() {
    page2Bu1.addEventListener("mouseenter", () => {
      let tl = gsap.timeline();

      tl.to(
        ".page-2-bottom h1:first-of-type .bold-underline, .page-2-bottom h1:last-of-type .bold-underline ",
        {
          "--width": 0,
          duration: 0.12,
          ease: "circ.out",
        }
      );

      tl.to(
        ".page-2-bottom h1:first-of-type .bold-underline, .page-2-bottom h1:last-of-type .bold-underline ",
        {
          duration: 0.12,
          "--width": "100%",
          ease: "circ.out",
        }
      );
    });

    page2Bu1.addEventListener("mouseleave", () => {
      let tl = gsap.timeline();

      tl.to(
        ".page-2-bottom h1:first-of-type .bold-underline, .page-2-bottom h1:last-of-type .bold-underline ",
        {
          "--width": 0,
          duration: 0.12,
          ease: "circ.out",
        }
      );

      tl.to(
        ".page-2-bottom h1:first-of-type .bold-underline, .page-2-bottom h1:last-of-type .bold-underline ",
        {
          duration: 0.12,
          "--width": "100%",
          ease: "circ.out",
        }
      );
    });
  }

  function page2Bu2Animation() {
    page2Bu2.addEventListener("mouseenter", () => {
      let tl = gsap.timeline();

      tl.to(
        ".page-2-bottom h1:first-of-type .bold-underline, .page-2-bottom h1:last-of-type .bold-underline ",
        {
          "--width": 0,
          duration: 0.12,
          ease: "circ.out",
        }
      );

      tl.to(
        ".page-2-bottom h1:first-of-type .bold-underline, .page-2-bottom h1:last-of-type .bold-underline ",
        {
          duration: 0.12,
          "--width": "100%",
          ease: "circ.out",
        }
      );
    });

    page2Bu2.addEventListener("mouseleave", () => {
      let tl = gsap.timeline();

      tl.to(
        ".page-2-bottom h1:first-of-type .bold-underline, .page-2-bottom h1:last-of-type .bold-underline ",
        {
          "--width": 0,
          duration: 0.12,
          ease: "circ.out",
        }
      );

      tl.to(
        ".page-2-bottom h1:first-of-type .bold-underline, .page-2-bottom h1:last-of-type .bold-underline ",
        {
          duration: 0.12,
          "--width": "100%",
          ease: "circ.out",
        }
      );
    });
  }

  page8BuAnimation();
  page2Bu1Animation();
  page2Bu2Animation();
}

function videoMediaQuery(){
  let mediaQuery=window.matchMedia('(max-width:600px)')

  function mediaAnimate(){

    if(mediaQuery.matches){
      gsap.to('.page-3-bottom div:nth-child(1) img',{
        opacity:0,
        scrollTrigger:{
          start:'top 20%',
          end:'bottom 30%',
          trigger:'.page-3-bottom div:nth-child(1)',
          toggleActions:'play reset play reset'
        }
      })

      gsap.to('.page-3-bottom div:nth-child(2) img',{
        opacity:0,
        scrollTrigger:{
              start:'top 20%',
              end:'bottom 30%',
           trigger:'.page-3-bottom div:nth-child(2)',
              toggleActions:'play reset play reset'

        }
      })

      gsap.to('.page-3-bottom div:nth-child(3) img',{
        opacity:0,
        scrollTrigger:{
              start:'top 20%',
              end:'bottom 30%',
           trigger:'.page-3-bottom div:nth-child(3)',
              toggleActions:'play reset play reset'
              
        }
      })
    
    }

  }

  mediaAnimate()
  mediaQuery.addListener(mediaAnimate)
}

videoMediaQuery()
lenis();
boldUnderlineAnimation();
underlineRclose();
underlineAnimation();
loaderAnimation();
ParaAnimation();
cursorAnimation();
swiper();
