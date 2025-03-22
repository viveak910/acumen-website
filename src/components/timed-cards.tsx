import { useEffect, useRef, useState } from "react";
import { Globe, Search, User } from "lucide-react";
import { useSwipeable } from 'react-swipeable';

import { gsap } from "gsap";

const data = [
  {
    place: "Switzerland Alps",
    title: "SAINT",
    title2: "ANTONIEN",
    description:
      "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",
    image:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&q=80",
  },
  {
    place: "Japan Alps",
    title: "NAGANO",
    title2: "PREFECTURE",
    description:
      "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best powder.",
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
  },
  {
    place: "Sahara Desert - Morocco",
    title: "MARRAKECH",
    title2: "MEROUGA",
    description:
      "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
    image:
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800&q=80",
  },
  {
    place: "Sierra Nevada - USA",
    title: "YOSEMITE",
    title2: "NATIONAL PARK",
    description:
      "Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.",
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
  },
  {
    place: "Tarifa - Spain",
    title: "LOS LANCES",
    title2: "BEACH",
    description:
      "Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach's long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    place: "Cappadocia - Turkey",
    title: "GÖREME",
    title2: "VALLEY",
    description:
      "Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.",
    image:
      "https://images.unsplash.com/photo-1570143675316-91fb888f8afe?w=800&q=80",
  },
];

export function TimedCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  let order = useRef([0, 1, 2, 3, 4, 5]);
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

const step = async (direction: 'next' | 'prev' = 'next') => {
  if (clicks.current > 0) return;
  clicks.current = 1;

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
        zIndex: 40,
        y: newOffsetTop + newCardHeight - 100,
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

  // Removed duplicate handlePrevCard declaration

  useEffect(() => {
    const loadImages = async () => {
      let loadedCount = 0;
      try {
        await Promise.all(
          data.map(({ image }) => {
            return new Promise((resolve) => {
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
            });
          })
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

  return (
    <div className="relative h-screen overflow-hidden bg-[#1a1a1a] text-[#FFFFFFDD]">
        <div className="wrapper" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <div className="indicator" />

            <div id="demo" {...swipeHandlers}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        id={`card${index}`}
                        className="card absolute left-0 top-0 transition-transform duration-300"
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: index === order.current[0] ? '100%' : cardWidth,
                            height: index === order.current[0] ? '100%' : cardHeight,
                            transform: `translate(${index === order.current[0] ? 0 : offsetLeft + index * (cardWidth + gap)}px, ${index === order.current[0] ? 0 : offsetTop}px)`,
                            zIndex: index === order.current[0] ? 20 : 30,
                            borderRadius: index === order.current[0] ? 0 : '10px',
                        }}
                    />
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

        <div id="details-odd" className="details">
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
    </div>
  );
}