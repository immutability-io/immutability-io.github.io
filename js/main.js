// Don't require jQuery
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

g = {
  value: 70,
  color: '#000'
};

$particles = document.getElementById("particles-js");

ready(function () {
  // Fewer particles on mobiles
  if (Modernizr.mq('only all and (max-width: 480px)')) {
    g.value = 20
  };

  // Particles.js by Vincent Garreau
  // https://github.com/VincentGarreau/particles.js/
  particlesJS("particles-js", {
    particles: {
      number: {
        value: g.value,
        density: {
          enable: !1,
          value_area: 800
        }
      },
      color: {
        value: g.color
      },
      opacity: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 1,
          opacity_min: 0.1,
          sync: !1
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: !1,
          speed: 40,
          size_min: 0.1,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 150,
        color: g.color,
        opacity: 0.4,
        width: 1
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "repulse"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
      }
    },
    retina_detect: true
  });

  // Fade it in after the library loads
  // This should probably be done as a callback
  $particles.classList.add('show');
  $particles.classList.remove('hide');
})
