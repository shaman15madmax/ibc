window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');

  preloader.style.transition = 'opacity 1s';
  preloader.style.opacity = 0;

  setTimeout(() => {
    preloader.style.display = 'none';
    content.style.display = 'block';
  }, 7000);
});







const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('toggle'); // optional: animate hamburger
});






  document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
      threshold: 0.2, // when 20% of the element is visible
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });





  document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll(
      ".fade-objective-item, .fade-accordion-right, .fade-accordion-left"
    );

    const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });






  document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll(".fade-ibc-item");

    const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });













  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { 
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });







// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})


// IBC About Section Accordion
const ibcToggles = document.querySelectorAll('.ibc-toggle')

ibcToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling

    if (content.style.display === 'block') {
      content.style.display = 'none'
    } else {
      document.querySelectorAll('.ibc-content').forEach(c => c.style.display = 'none')
      content.style.display = 'block'
    }
  })
})



  const headers = document.querySelectorAll(".ibc-accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isOpen = content.style.maxHeight;

      // Close all other sections
      document.querySelectorAll(".ibc-accordion-content").forEach(c => {
        c.style.maxHeight = null;
      });

      // Toggle this section
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });



document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.judge-card');
    card.classList.toggle('expanded');
    button.textContent = card.classList.contains('expanded') ? 'READ LESS' : 'READ MORE';
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  const contents = document.querySelectorAll(".step-content");
  const stepsContainer = document.querySelector(".steps-nav");

  steps.forEach(step => {
    step.addEventListener("click", () => {
      const target = step.getAttribute("data-step");
      const content = document.querySelector(`.step-content[data-step="${target}"]`);

      if (window.innerWidth <= 768) {
        // MOBILE ACCORDION: show content under clicked step
        const isActive = content.classList.contains("active");

        // Close all
        contents.forEach(c => {
          c.classList.remove("active");
          c.style.maxHeight = null;
          // Move content back to main container
          if (!stepsContainer.contains(c)) {
            document.querySelector(".steps-content").appendChild(c);
          }
        });
        steps.forEach(s => s.classList.remove("active"));

        if (!isActive) {
          // Move content right below clicked step
          step.after(content);
          content.classList.add("active");
          step.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      } else {
        // DESKTOP: original behavior
        steps.forEach(s => s.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));
        step.classList.add("active");
        content.classList.add("active");
      }
    });
  });

  // Adjust max-height on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      contents.forEach(c => {
        c.style.maxHeight = null;
        // Move content back to main container if it was moved
        if (!document.querySelector(".steps-content").contains(c)) {
          document.querySelector(".steps-content").appendChild(c);
        }
      });
    } else {
      contents.forEach(c => {
        if (c.classList.contains("active")) {
          c.style.maxHeight = c.scrollHeight + "px";
        }
      });
    }
  });
});
