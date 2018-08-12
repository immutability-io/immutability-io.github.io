g = {
  particles: 70,
  color: '#000'
};

$particles = document.getElementById("particles-js");

ready(function () {
  // Tone down the particles on mobiles
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (w < 480) {
    g.particles = 20
  }

  // Particles.js by Vincent Garreau
  // https://github.com/VincentGarreau/particles.js/
  particlesConf = {
    particles: {
      number: {
        value: g.particles,
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
        random: !0,
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
    retina_detect: !0
  }

  particlesJS("particles-js", particlesConf)

  // Fade it in after the library loads
  // This should probably be done as a callback
  $particles.classList.add('show');
  $particles.classList.remove('hide');
})
