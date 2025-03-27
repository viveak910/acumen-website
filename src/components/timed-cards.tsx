"use client"
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from 'react-swipeable';
import { gsap } from "gsap";

const data = [
  {
    place: "Switzerland Alps",
    title: "SAINT",
    title2: "ANTONIEN",
    description:
      "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",
    image: "https://i.ibb.co/nNR07QNH/1.jpg",
    bimage : "https://i.ibb.co/nNR07QNH/2.jpg",
  },
  {
    place: "Japan Alps",
    title: "NAGANO",
    title2: "PREFECTURE",
    description:
      "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best powder.",
      image: "https://i.ibb.co/mVFvPVmb/2.jpg",
      bimage : "https://i.ibb.co/mVFvPVmb/1.jpg",
  },
  {
    place: "Sahara Desert - Morocco",
    title: "MARRAKECH",
    title2: "MEROUGA",
    description:
      "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
      image: "https://i.ibb.co/nNR07QNH/3.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/3.jpg",
  },
  {
    place: "Sierra Nevada - USA",
    title: "YOSEMITE",
    title2: "NATIONAL PARK",
    description:
      "Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.",
      image: "https://i.ibb.co/nNR07QNH/4.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/4.jpg",
  },
  {
    place: "Tarifa - Spain",
    title: "LOS LANCES",
    title2: "BEACH",
    description:
      "Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach's long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.",
      image: "https://i.ibb.co/nNR07QNH/5.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/5.jpg",
  },
  {
    place: "Cappadocia - Turkey",
    title: "GÖREME",
    title2: "VALLEY",
    description:
      "Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.",
      image: "https://i.ibb.co/nNR07QNH/6.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/6.jpg",
  },
  {
    place: "Kyoto - Japan",
    title: "FUSHIMI",
    title2: "INARI",
    description:
      "Fushimi Inari Shrine, famous for its thousands of vibrant red torii gates, winds through the wooded forest of Mount Inari. This iconic Shinto shrine is dedicated to Inari, the god of rice and prosperity, attracting visitors from all over the world.",
      image: "https://i.ibb.co/nNR07QNH/7.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/7.jpg",
  },
  {
    place: "Bora Bora - French",
    title: "BORA",
    title2: "BORA",
    description:
      "Bora Bora, a jewel in French Polynesia, is synonymous with luxury and natural beauty. Its turquoise lagoon, overwater bungalows, and lush volcanic slopes create an idyllic setting for romance and adventure.",
      image: "https://i.ibb.co/nNR07QNH/8.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/8.jpg",
  },
  {
    place: "Machu Picchu - Peru",
    title: "MACHU",
    title2: "PICCHU",
    description:
      "Machu Picchu, the lost city of the Incas, is an awe-inspiring archaeological site nestled high in the Andes Mountains. Its intricate stonework and stunning panoramic views offer a glimpse into the ingenuity and artistry of the Inca civilization.",
      image: "https://i.ibb.co/nNR07QNH/9.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/9.jpg",
  },
  {
    place: "Santorini - Greece",
    title: "OIA",
    title2: "VILLAGE",
    description:
      "Oia, a picturesque village on the island of Santorini, is renowned for its whitewashed buildings, blue-domed churches, and breathtaking sunsets over the Aegean Sea. Its romantic ambiance and stunning vistas make it a sought-after destination for travelers worldwide.",
      image: "https://i.ibb.co/nNR07QNH/10.jpg",
    bimage : "https://i.ibb.co/nNR07QNH/10.jpg",
  },
  {
    place: "Banff - Canada",
    title: "LAKE",
    title2: "LOUISE",
    description:
      "Lake Louise, located in Banff National Park, is a pristine alpine lake known for its turquoise waters, surrounded by towering mountains and glaciers. It's a haven for outdoor enthusiasts, offering activities such as hiking, canoeing, and ice skating.",
      image: "https://i.ibb.co/nNR07QNH/11.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/11.jpg",
  },
  {
    place: "Great Barrier Reef - Australia",
    title: "GREAT",
    title2: "REEF",
    description:
      "The Great Barrier Reef, the world's largest coral reef system, is a vibrant underwater ecosystem teeming with marine life. Snorkeling and diving reveal a kaleidoscope of colors and diverse species, making it a paradise for nature lovers.",
      image: "https://i.ibb.co/nNR07QNH/12.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/12.jpg",
  },
  {
    place: "Zhangjiajie - China",
    title: "AVATAR",
    title2: "MOUNTAINS",
    description:
      "Zhangjiajie National Forest Park, with its towering sandstone pillars, inspired the floating mountains in the movie Avatar. Hiking through this surreal landscape offers breathtaking views and a sense of wonder.",
      image: "https://i.ibb.co/nNR07QNH/13.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/13.jpg",
  },
  {
    place: "Salar de Uyuni - Bolivia",
    title: "SALAR",
    title2: "UYUNI",
    description:
      "Salar de Uyuni, the world's largest salt flat, is a vast, otherworldly expanse that creates stunning mirror-like reflections during the rainy season. Its surreal beauty and unique geological formations make it a photographer's dream.",
      image: "https://i.ibb.co/nNR07QNH/14.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/14.jpg",
  },
  {
    place: "Iceland",
    title: "REYKJAVIK",
    title2: "CAPITAL",
    description:
      "Reykjavik, the capital of Iceland, is a vibrant city known for its colorful buildings, geothermal spas, and proximity to natural wonders like the Blue Lagoon and the Northern Lights. It's a gateway to Iceland's stunning landscapes and unique cultural experiences.",
      image: "https://i.ibb.co/nNR07QNH/15.jpg",
      bimage : "https://i.ibb.co/nNR07QNH/15.jpg",
  },
];

export function TimedCards() {
  let order = useRef([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  let detailsEven = useRef(true);
  let clicks = useRef(0);

  const [offsetTop, setOffsetTop] = useState(200);
  const [offsetLeft, setOffsetLeft] = useState(700);
  const [cardWidth, setCardWidth] = useState(200);
  const [cardHeight, setCardHeight] = useState(300);
  const [gap, setGap] = useState(40);
  const [isMobile, setIsMobile] = useState(false);

  let numberSize = 50;
  const ease = "sine.inOut";

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
        if (clicks.current === 0) {
            step('next');
        }
    },
    onSwipedRight: () => {
        if (clicks.current === 0) {
            step('prev');
        }
    },
    preventScrollOnSwipe: true,
    trackMouse: true
  });
  const getCard = (index: number) => `#card${index}`;
  const getCardContent = (index: number) => `#card-content-${index}`;
  const getSliderItem = (index: number) => `#slide-item-${index}`;

  const handleNextCard = () => {
    if (clicks.current === 0) {
        step('next');
    }
};

const handlePrevCard = () => {
    if (clicks.current === 0) {
        step('prev');
    }
};

// Add an autoplay ref to track the timeout/interval
const autoplayRef = useRef<{
  timeoutId: ReturnType<typeof setTimeout> | null;
  intervalId: ReturnType<typeof setInterval> | null;
}>({ timeoutId: null, intervalId: null });

// Modify your step function to reset the autoplay
const step = async (direction: 'next' | 'prev' = 'next') => {
  if (clicks.current > 0) return;
  clicks.current = 1;

  // Reset autoplay when step is called manually
  if (autoplayRef.current.intervalId) {
    clearInterval(autoplayRef.current.intervalId);
    autoplayRef.current.intervalId = null;
  }
  
  // Handle array manipulation based on direction
  if (direction === 'next') {
      order.current.push(order.current.shift()!);
  } else {
      order.current.unshift(order.current.pop()!);
  }

  detailsEven.current = !detailsEven.current;

  const detailsActive = detailsEven.current ? "#details-even" : "#details-odd";
  const detailsInactive = detailsEven.current ? "#details-odd" : "#details-even";

  const [active, ...rest] = order.current;
  const prv = direction === 'next' ? rest[rest.length - 1] : rest[0];

  // Update active card content
  const activeDetails = document.querySelector(detailsActive);
  if (activeDetails) {
      (activeDetails.querySelector(".place-box .text") as HTMLElement).textContent =
          data[active].place;
      (activeDetails.querySelector(".title-1") as HTMLElement).textContent =
          data[active].title;
      (activeDetails.querySelector(".title-2") as HTMLElement).textContent =
          data[active].title2;
      (activeDetails.querySelector(".desc") as HTMLElement).textContent =
          data[active].description;
  }

  // Handle animations
  gsap.set(detailsActive, { zIndex: 22 });
  gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
  gsap.to(`${detailsActive} .text`, { y: 0, delay: 0.1, duration: 0.7, ease });
  gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.15, duration: 0.7, ease });
  gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.15, duration: 0.7, ease });
  gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.3, duration: 0.4, ease });
  gsap.to(`${detailsActive} .cta`, { y: 0, delay: 0.35, duration: 0.4, ease });
  gsap.set(detailsInactive, { zIndex: 12 });

  // Card animations
  gsap.set(getCard(prv), { zIndex: 10 });
  gsap.set(getCard(active), { zIndex: 20 });

  // Add this new code for the background overlay
  const activeCardOverlay = document.querySelector(`${getCard(active)} > div`);
  if (activeCardOverlay) {
      gsap.set(activeCardOverlay, { 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${isMobile ? data[active].image : data[active].bimage})`,
          opacity: 0
      });
      gsap.to(activeCardOverlay, { opacity: 1, duration: 0.5, delay: 0.2 });
  }

  // Mobile-specific animations
  if (isMobile) {
      gsap.to(getCard(active), {
          x: 0,
          y: 0,
          width: window.innerWidth,
          height: window.innerHeight,
          borderRadius: 0,
          ease,
          duration: 0.5,
      });
  } else {
      gsap.to(getCard(prv), { scale: 1.5, ease });
  }

  gsap.to(getCardContent(active), {
      y: offsetTop + cardHeight - 10,
      opacity: 0,
      duration: 0.3,
      ease,
  });

  // Update slider and progress
  gsap.to(getSliderItem(active), { x: 0, ease });
  gsap.to(getSliderItem(prv), { x: -numberSize, ease });
  gsap.to(".progress-sub-foreground", {
      width: isMobile ? 
          200 * (1 / order.current.length) * (active + 1) : 
          500 * (1 / order.current.length) * (active + 1),
      ease,
  });

  // Main card animation
  gsap.to(getCard(active), {
      x: 0,
      y: 0,
      ease,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      onComplete: () => {
          const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
          
          // Reset previous card
          gsap.set(getCard(prv), {
              x: xNew,
              y: offsetTop,
              width: cardWidth,
              height: cardHeight,
              zIndex: 30,
              borderRadius: 10,
              scale: 1,
          });

          // Make sure the gradient overlay is properly maintained for the active card
          const activeCardOverlay = document.querySelector(`${getCard(active)} > div`);
          if (activeCardOverlay) {
              gsap.set(activeCardOverlay, {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${isMobile ? data[active].image : data[active].bimage})`,
                  opacity: 1,
                  filter: "brightness(0.8) contrast(1.2)"
              });
          }

          gsap.set(getCardContent(prv), {
              x: xNew,
              y: offsetTop + cardHeight - 100,
              opacity: 1,
              zIndex: 40,
          });

          gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

          // Reset inactive details
          gsap.set(detailsInactive, { opacity: 0 });
          gsap.set(`${detailsInactive} .text`, { y: 100 });
          gsap.set(`${detailsInactive} .title-1`, { y: 100 });
          gsap.set(`${detailsInactive} .title-2`, { y: 100 });
          gsap.set(`${detailsInactive} .desc`, { y: 50 });
          gsap.set(`${detailsInactive} .cta`, { y: 60 });

          // Reset click counter
          clicks.current = 0;

          // Restart autoplay after manual navigation
          autoplayRef.current.intervalId = setInterval(() => {
            if (clicks.current === 0) {
              step('next');
            }
          }, 3000);
      },
  });

  // Animate remaining cards
  rest.forEach((i, index) => {
      if (i !== prv) {
          const xNew = offsetLeft + index * (cardWidth + gap);
          const delay = 0.1 * (direction === 'next' ? index + 1 : rest.length - index);

          gsap.set(getCard(i), { zIndex: 30 });
          gsap.to(getCard(i), {
              x: xNew,
              y: offsetTop,
              width: cardWidth,
              height: cardHeight,
              ease,
              delay,
          });

          gsap.to(getCardContent(i), {
              x: xNew,
              y: offsetTop + cardHeight - 100,
              opacity: 1,
              zIndex: 40,
              ease,
              delay,
          });

          gsap.to(getSliderItem(i), {
              x: (index + 1) * numberSize,
              ease,
              delay,
          });
      }
  });
};
  const init = () => {
    const { innerHeight: height, innerWidth: width } = window;
    const mobile = width < 768;
    setIsMobile(mobile);

    const newOffsetTop = mobile ? height - 280 : height - 430;
    const newOffsetLeft = mobile ? width - 330 : width - 830;
    const newCardWidth = mobile ? 150 : 200;
    const newCardHeight = mobile ? 200 : 300;
    const newGap = mobile ? 20 : 40;

    setOffsetTop(newOffsetTop);
    setOffsetLeft(newOffsetLeft);
    setCardWidth(newCardWidth);
    setCardHeight(newCardHeight);
    setGap(newGap);

    const [active, ...rest] = order.current;
    const detailsActive = detailsEven.current ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven.current ? "#details-odd" : "#details-even";

    gsap.set("#pagination", {
      top: newOffsetTop + (mobile ? 230 : 330),
      left: mobile ? 20 : newOffsetLeft,
      y: 200,
      opacity: 0,
      zIndex: 60,
    });
    gsap.set("nav", { y: -200, opacity: 0 });

    gsap.set(getCard(active), {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // For ALL cards, set the overlay opacity
    data.forEach((_, index) => {
      const cardOverlay = document.querySelector(`${getCard(index)} > div`);
      if (cardOverlay) {
        gsap.set(cardOverlay, { 
          opacity: index === active ? 1 : 0
        });
      }
    });

    const activeCardOverlay = document.querySelector(`${getCard(active)} > div`);
    if (activeCardOverlay) {
        gsap.set(activeCardOverlay, { 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${isMobile ? data[active].image : data[active].bimage})`,
            opacity: 1,
            filter: "brightness(0.8) contrast(1.2)"
        });
    }

    gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
    gsap.set(detailsActive, { 
      opacity: 0, 
      zIndex: 22, 
      x: -200,
      ...(mobile && { 
        left: '20px',
        right: '20px',
        width: 'auto'
      })
    });
    gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
    gsap.set(`${detailsInactive} .text`, { y: 100 });
    gsap.set(`${detailsInactive} .title-1`, { y: 100 });
    gsap.set(`${detailsInactive} .title-2`, { y: 100 });
    gsap.set(`${detailsInactive} .desc`, { y: 50 });
    gsap.set(`${detailsInactive} .cta`, { y: 60 });

    gsap.set(".progress-sub-foreground", {
      width: mobile ? 200 * (1 / order.current.length) * (active + 1) : 500 * (1 / order.current.length) * (active + 1),
    });

    rest.forEach((i, index) => {
      gsap.set(getCard(i), {
        x: newOffsetLeft + 400 + index * (newCardWidth + newGap),
        y: newOffsetTop,
        width: newCardWidth,
        height: newCardHeight,
        zIndex: 30,
        borderRadius: 10,
      });
      gsap.set(getCardContent(i), {
        x: newOffsetLeft + 400 + index * (newCardWidth + newGap),
        y: newOffsetTop + newCardHeight - 100,
        zIndex: 40,
      });
      gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
    });

    gsap.set(".indicator", { x: -window.innerWidth });

    const startDelay = 0.6;

    gsap.to(".cover", {
      x: width + 400,
      delay: 0.5,
      ease,
    });

    rest.forEach((i, index) => {
      gsap.to(getCard(i), {
        x: newOffsetLeft + index * (newCardWidth + newGap),
        zIndex: 30,
        delay: 0.05 * index + startDelay,
        ease,
      });
      gsap.to(getCardContent(i), {
        x: newOffsetLeft + index * (newCardWidth + newGap),
        zIndex: 40,
        delay: 0.05 * index + startDelay,
        ease,
      });
    });

    gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
  };

  useEffect(() => {
    const loadImages = async () => {
      let loadedCount = 0;
      try {
        await Promise.all(
          data.map(({ image, bimage }) => {
            return Promise.all([
              new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                  loadedCount++;
                  resolve(true);
                };
                img.onerror = () => {
                  console.warn(`Failed to load image: ${image}`);
                  resolve(false);
                };
                img.src = image;
              }),
              new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                  loadedCount++;
                  resolve(true);
                };
                img.onerror = () => {
                  console.warn(`Failed to load background image: ${bimage}`);
                  resolve(false);
                };
                img.src = bimage;
              })
            ]);
          }).flat()
        );
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        if (loadedCount > 0) {
          init();
          window.addEventListener('resize', init);
          return () => window.removeEventListener('resize', init);
        }
      }
    };

    loadImages();
  }, []);

  // Update the useEffect for autoplay to use the ref
  useEffect(() => {
    autoplayRef.current.timeoutId = setTimeout(() => {
      autoplayRef.current.intervalId = setInterval(() => {
        if (clicks.current === 0) {
          step('next');
        }
      }, 3000);
    }, 0);
    
    return () => {
      if (autoplayRef.current.timeoutId) clearTimeout(autoplayRef.current.timeoutId);
      if (autoplayRef.current.intervalId) clearInterval(autoplayRef.current.intervalId);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-[#1a1a1a] text-[#FFFFFFDD]">
        <div className="wrapper" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <div className="indicator" />

            <div id="demo" {...swipeHandlers}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        id={`card${index}`}
                        className="card absolute left-0 top-0 transition-all duration-300 overflow-hidden"
                        style={{
                            backgroundImage: `url(${isMobile ? item.image : item.bimage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: index === order.current[0] ? '100%' : cardWidth,
                            height: index === order.current[0] ? '100%' : cardHeight,
                            transform: `translate(${index === order.current[0] ? 0 : offsetLeft + index * (cardWidth + gap)}px, ${index === order.current[0] ? 0 : offsetTop}px)`,
                            zIndex: index === order.current[0] ? 20 : 30,
                            borderRadius: index === order.current[0] ? 0 : '10px',
                        }}
                    >
                        <div
                            className="absolute inset-0 transition-opacity duration-500"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`,
                                opacity: index === order.current[0] ? 1 : 0,
                                filter: "brightness(0.8) contrast(1.2)"
                            }}
                        />
                    </div>
                ))}
                {data.map((item, index) => (
                    <div key={index} id={`card-content-${index}`} className="card-content absolute left-0 top-0 pl-4">
                        <div className="content-start w-[30px] h-[5px] rounded-full bg-[#FFFFFFDD]" />
                        <div className="content-place mt-1.5 text-sm font-medium">{item.place}</div>
                        <div className="content-title-1 font-oswald text-xl font-semibold">{item.title}</div>
                        <div className="content-title-2 font-oswald text-xl font-semibold">{item.title2}</div>
                    </div>
                ))}
            </div>
        </div>

        <div id="details-des" className="details hidden md:block">
            <div id="details-even" className="details">
                <div className="place-box h-[46px] overflow-hidden">
                    <div className="text pt-4 text-xl relative before:absolute before:top-0 before:left-0 before:w-[30px] before:h-1 before:rounded-full before:bg-white">
                        {data[0].place}
                    </div>
                </div>
                <div className="title-box-1 mt-0.5 h-[100px] overflow-hidden">
                    <div className="title-1 font-oswald md:text-[72px] text-[42px] font-semibold">{data[0].title}</div>
                </div>
                <div className="title-box-2 mt-0.5 h-[100px] overflow-hidden">
                    <div className="title-2 font-oswald md:text-[72px] text-[42px] font-semibold">{data[0].title2}</div>
                </div>
                <div className="desc mt-4 md:w-[500px] w-full text-sm md:text-base">{data[0].description}</div>
                <div className="cta mt-6 flex items-center md:w-[500px] w-full">
                    <button className="bookmark grid place-items-center w-9 h-9 rounded-full bg-[#ecad29] text-white border-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <button className="discover ml-4 px-6 h-9 rounded-full border border-white bg-transparent text-white text-xs uppercase">
                        Discover Location
                    </button>
                </div>
            </div>
            <div id="details-odd" className="details sm:hidden md:block">
                <div className="place-box h-[46px] overflow-hidden">
                    <div className="text pt-4 text-xl relative before:absolute before:top-0 before:left-0 before:w-[30px] before:h-1 before:rounded-full before:bg-white">
                        {data[0].place}
                    </div>
                </div>
                <div className="title-box-1 mt-0.5 h-[100px] overflow-hidden">
                    <div className="title-1 font-oswald md:text-[72px] text-[42px] font-semibold">{data[0].title}</div>
                </div>
                <div className="title-box-2 mt-0.5 h-[100px] overflow-hidden">
                    <div className="title-2 font-oswald md:text-[72px] text-[42px] font-semibold">{data[0].title2}</div>
                </div>
                <div className="desc mt-4 md:w-[500px] w-full text-sm md:text-base">{data[0].description}</div>
                <div className="cta mt-6 flex items-center md:w-[500px] w-full">
                    <button className="bookmark grid place-items-center w-9 h-9 rounded-full bg-[#ecad29] text-white border-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <button className="discover ml-4 px-6 h-9 rounded-full border border-white bg-transparent text-white text-xs uppercase">
                        Discover Location
                    </button>
                </div>
            </div>
        </div>

        <div id="pagination" className="absolute left-0 top-0 inline-flex">
            <div
                className="arrow arrow-left grid place-items-center w-[50px] h-[50px] rounded-full border-2 border-[#ffffff55] z-[60] cursor-pointer"
                onClick={handlePrevCard}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-2 text-[#ffffff99]"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div
                className="arrow arrow-right ml-5 grid place-items-center w-[50px] h-[50px] rounded-full border-2 border-[#ffffff55] z-[60] cursor-pointer"
                onClick={handleNextCard}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-2 text-[#ffffff99]"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className="progress-sub-container ml-6 z-[60] md:w-[500px] w-[200px] h-[50px] flex items-center">
                <div className="progress-sub-background md:w-[500px] w-[200px] h-[3px] bg-[#ffffff33]">
                    <div className="progress-sub-foreground h-[3px] bg-[#ecad29]" />
                </div>
            </div>
            <div id="slide-numbers" className="slide-numbers w-[50px] h-[50px] overflow-hidden z-[60] relative">
                {data.map((_, index) => (
                    <div
                        key={index}
                        id={`slide-item-${index}`}
                        className="item absolute top-0 left-0 w-[50px] h-[50px] grid place-items-center text-white text-3xl font-bold"
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>

        <div className="cover absolute left-0 top-0 w-screen h-screen bg-white z-[100]" />
    </div>
  );
}
