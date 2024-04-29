
tsParticles.load("tsparticles", {
    fullScreen: {
      enable: false,
    },
    particles: {
      number: {
        value: 60,
      },
      color: { value: ["#def2f1", "#25dbd2", "#095350", "#16f8ed"] },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      size: {
        value: 4,
        random: !1,
        anim: { enable: !0, speed: 3, size_min: 1, sync: !1 },
      },
      links: {
        enable: true,
        distance: 80,
        opacity: 0.6,
      },
      move: {
        enable: true,
        speed: { min: 1, max: 3 },
        direction: "none",
        random: !0,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: !0, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 80, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    fpsLimit: 120,
  });
  