import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Draggable from "gsap/dist/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);
const projects = [
  {
    id: "pr0",
    name: "Janhvi",
    href: "",
    img: "https://external-preview.redd.it/jhanvi-kapoor-v0-MHBmY2gwZXFhc2pmMWIFEPF7PqrrqwqX-jVRl9S8Nvq_G2BUROzUHlil2yJ0.png?format=pjpg&auto=webp&s=61198fe9867db7f4e1cf3502e167e8c71dbb7370",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Material", "Craftsmanship"],
  },
  {
    id: "pr1",
    name: "Gal Josef",
    href: "",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9RHIUl1InGgVGv3DDE6amAtFT0BZOrfAnq7H9fhTxhuLdzMQ0",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr2",
    name: "Ran Graber",
    href: "",
    img: "https://i.ytimg.com/vi/vHkD7zOHFwQ/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLAmXH905cgChy75JPtN80Iu3nv_WQ",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: [],
  },
  {
    id: "pr3",
    name: "Roi Bardas",
    href: "",
    img: "https://pbs.twimg.com/media/FCbirxKVIAwx2SM.jpg:large",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr4",
    name: "Yulie Toledano",
    href: "",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ04DlUYxL9JIZmTfuUNt_tSDSyNZYBfIh49bU6PalRWtGyCKZO",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr5",
    name: "Akiho Ka",
    href: "",
    img: "https://i.pinimg.com/236x/01/0c/a3/010ca3491ef997eff3ceaab037e255d3.jpg",
    school: "Osaka_Institute_of_Fashion",
    tags: ["Shape", "Sustainability"],
  },
  {
    id: "pr6",
    name: "Yol Meoded",
    href: "",
    img: "https://i.pinimg.com/736x/a0/c4/1c/a0c41c780d444886e004cc14cd3dad9d.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Material", "Craftsmanship"],
  },
  {
    id: "pr7",
    name: "Gal Josef",
    href: "",
    img: "https://sarisansar.com/cdn/shop/files/6318562325040315395.jpg?v=1727687326",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr8",
    name: "Ran Graber",
    href: "",
    img: "https://localnation.co.in/cdn/shop/files/xe9zD8r2IP.webp?v=1727170486",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: [],
  },
  {
    id: "pr9",
    name: "Roi Bardas",
    href: "",
    img: "https://localnation.co.in/cdn/shop/files/xe9zD8r2IP.webp?v=1727170486",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr10",
    name: "Yulie Toledano",
    href: "",
    img: "https://images.meesho.com/images/products/421181398/nw7pv_512.webp",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr11",
    name: "Akiho Ka",
    href: "",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9RHIUl1InGgVGv3DDE6amAtFT0BZOrfAnq7H9fhTxhuLdzMQ0",
    school: "Osaka_Institute_of_Fashion",
    tags: ["Shape", "Sustainability"],
  },
];
const TransmissionSlider = () => {
 
  useEffect(() => {
    let iteration = 0;
    let trigger;
    let playhead = { offset: 0 }; // Actual target offset
    let lerpedOffset = { value: 0 };
    gsap.set(".cards li", {
      xPercent: 210,
      scale: 0.25,
    });

    const cards = gsap.utils.toArray(".cards li");
    const spacing = 0.105;
    const snapTime = gsap.utils.snap(spacing);
    const sp = window.innerWidth > 1024 ? 210 : 180;
    const dr = window.innerWidth > 1024 ? 0.85 : 0.5;

    const animateFunc = (element) => {
      return gsap
        .timeline()
        .fromTo(
          element,
          { scale: 0.25 },
          {
            scale: 1,
            zIndex: 100,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.in",
            immediateRender: false,
          }
        )
        .fromTo(
          element,
          { xPercent: 210 },
          {
            xPercent: -210,
            duration: 1,
            ease: "none",
            immediateRender: true,
          },
          0
        );
    };

    const buildSeamlessLoop = (items, spacing, animateFunc) => {
      const rawSequence = gsap.timeline({ paused: true });
      const seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          this._time === this._dur && (this._tTime += this._dur - 0.01);
        },
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 100);
        },
      });

      const cycleDuration = spacing * items.length;
      let dur;

      items.concat(items, items, items, items).forEach((item, i) => {
        const anim = animateFunc(items[i % items.length]);
        rawSequence.add(anim, i * spacing);
        if (!dur) dur = anim.duration();
      });

      seamlessLoop.fromTo(
        rawSequence,
        { time: cycleDuration + dur / 2 },
        {
          time: `+=${cycleDuration}`,
          duration: cycleDuration,
          ease: "none",
        }
      );

      return seamlessLoop;
    };

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

    const scrub = gsap.to(playhead, {
      offset: 0,
      onUpdate: () => {
        seamlessLoop.time(wrapTime(playhead.offset));
      },
      duration: dr,
      ease: "power4.out",
      paused: true,
    });
    var math = {
      lerp: function lerp(a, b, n) {
        return (1 - n) * a + n * b;
      },
      norm: function norm(value, min, max) {
        return (value - min) / (max - min);
      },
    };

    // Define progressToScroll correctly
    const progressToScroll = (progress) => {
      // Example of how you might calculate scroll progress:
      return gsap.utils.clamp(
        1,
        seamlessLoop.duration() - 1,
        gsap.utils.wrap(0, seamlessLoop.duration(), progress) *
          seamlessLoop.duration()
      );
    };

    function smoothLerpRender() {
      lerpedOffset.value = math.lerp(lerpedOffset.value, playhead.offset, 0.05);
      seamlessLoop.time(wrapTime(lerpedOffset.value));
      // Determine which card is centered
      let centerIndex = Math.round(lerpedOffset.value / spacing) % cards.length;
      // Normalize negative index
      if (centerIndex < 0) centerIndex += cards.length;
      cards.forEach((card, index) => {
        if (index === centerIndex) {
          card.classList.add("in-center");
        } else {
          card.classList.remove("in-center");
        }
      });
      requestAnimationFrame(smoothLerpRender);
    }
    requestAnimationFrame(smoothLerpRender);

    // 👇 Fix: Better drag handling
    Draggable.create(".drag-proxy", {
      type: "x",
      trigger: ".cards",
      onPress() {
        this.startOffset = playhead.offset;
        this.startX = this.x;
      },
      onDrag() {
        const sensitivity = window.innerWidth > 1024 ? 0.0015 : 0.003;
        const deltaX = this.x - this.startX;
        const offsetChange = -deltaX * sensitivity;

        playhead.offset = this.startOffset + offsetChange;
      },
      onRelease() {
        const finalOffset = playhead.offset;
        // Delay snap until after some time (e.g., 300ms)
        setTimeout(() => {
          playhead.offset = snapTime(finalOffset);
        }, 300);
      },
    });
  }, []);

  return (
    <>
      <div className="project__carousel">
        <input type="hidden" id="nTitle" />
        <section className="projects__gallery bw">
          <ul className="cards__container cards">
            {projects.map((project) => (
              <li key={project.id} className="element">
                <div className="thumbnail-scroll">
                  <a
                    className="ajax-link"
                    href={project.href}
                    data-href={project.href}
                    data-type="project__post"
                    data-from="projects"
                  >
                    <div className="inner__name">
                      <span className="pr-name">
                        <span className="pr-name-big">{project.name}</span>
                      </span>
                    </div>
                    <div className="card__img is-portrait">
                      <div className="overlayer tt-ab" />
                      <img src={project.img} alt={`${project.name}-Index`} />
                    </div>
                  </a>
                  <div className="outer__name">
                    <span className="pr-name cb">
                      <span className="pr-name-big">{project.name}</span>
                    </span>
                  </div>
                </div>
                <div className="props">
                  <input
                    type="hidden"
                    name="school"
                    defaultValue={project.school}
                    data-val={project.school}
                  />
                  {project.tags.map((tag, idx) => (
                    <input
                      key={idx}
                      type="hidden"
                      name="tag"
                      defaultValue={tag}
                      data-val={tag}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <div
          className="drag-proxy"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000,
            cursor: "grab",
          }}
        />
      </div>
    </>
  );
};

export default TransmissionSlider;
