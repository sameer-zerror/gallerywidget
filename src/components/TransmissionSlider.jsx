import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Draggable from "gsap/dist/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);
const projects = [
  {
    id: "pr0",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://external-preview.redd.it/jhanvi-kapoor-v0-MHBmY2gwZXFhc2pmMWIFEPF7PqrrqwqX-jVRl9S8Nvq_G2BUROzUHlil2yJ0.png?format=pjpg&auto=webp&s=61198fe9867db7f4e1cf3502e167e8c71dbb7370",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Material", "Craftsmanship"],
  },
  {
    id: "pr1",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://assets.vogue.in/photos/673716e30a2036fd96e330ba/3:4/w_2560%2Cc_limit/Snapinsta.app_451261813_857474046262585_4398910345187875289_n_1080.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr2",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://i.ytimg.com/vi/vHkD7zOHFwQ/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLAmXH905cgChy75JPtN80Iu3nv_WQ",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: [],
  },
  {
    id: "pr3",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://pbs.twimg.com/media/FCbirxKVIAwx2SM.jpg:large",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr4",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://static.toiimg.com/thumb/114775982/114775982.jpg?height=746&width=420&resizemode=76&imgsize=185266",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr5",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://cdn.pixelbin.io/v2/black-bread-289bfa/t.resize(w:2500)/Manish_1/Diwali_Part_Part_1_(19_styles)/MM-MMS-SR-63547-AC-BL-PTT_C-ENQ/MM-MMS-SR-63547-AC-BL-PTT_C-ENQ-4.jpg",
    school: "Osaka_Institute_of_Fashion",
    tags: ["Shape", "Sustainability"],
  },
  {
    id: "pr8",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://blog.falgunishanepeacock.in/wp-content/uploads/2024/10/janhvi-kapoor-short-dresses-819x1024.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: [],
  },
  {
    id: "pr6",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://i.pinimg.com/736x/a0/c4/1c/a0c41c780d444886e004cc14cd3dad9d.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Material", "Craftsmanship"],
  },
  {
    id: "pr7",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://images.news18.com/webstories/uploads/2025/05/1-2025-05-d92b3a30a33526d05c8e01dec30c39f2.png",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr9",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://blog.falgunishanepeacock.in/wp-content/uploads/2024/10/janhvi-kapoor-short-dresses-819x1024.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr10",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://www.kalkifashion.com/blogs/wp-content/uploads/2023/03/312103515_192384926683419_8076604048580483338_n-819x1024.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
   {
    id: "pr7",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://images.news18.com/webstories/uploads/2025/05/1-2025-05-d92b3a30a33526d05c8e01dec30c39f2.png",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
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
