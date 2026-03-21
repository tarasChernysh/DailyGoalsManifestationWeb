/**
 * 10 Goal Writing & Manifest Website — Progressive Enhancement JS
 * Nav toggle, scroll spy, smooth scroll, mobile menu
 */

(function () {
  'use strict';

  // ---- Nav scroll effect ----
  var nav = document.getElementById('nav');
  var scrollThreshold = 40;

  function onScroll() {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    updateScrollSpy();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Mobile menu toggle ----
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('nav__links--open');
    toggle.classList.toggle('nav__hamburger--open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu when a link is clicked
  var links = navLinks.querySelectorAll('.nav__link');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      navLinks.classList.remove('nav__links--open');
      toggle.classList.remove('nav__hamburger--open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  }

  // ---- Scroll spy ----
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = navLinks.querySelectorAll('.nav__link');
  var sectionMap = {};

  for (var j = 0; j < navAnchors.length; j++) {
    var href = navAnchors[j].getAttribute('href');
    if (href && href.charAt(0) === '#') {
      sectionMap[href.substring(1)] = navAnchors[j];
    }
  }

  function updateScrollSpy() {
    var scrollPos = window.scrollY + 120;
    var current = '';

    for (var k = 0; k < sections.length; k++) {
      var section = sections[k];
      if (section.offsetTop <= scrollPos) {
        current = section.id;
      }
    }

    for (var id in sectionMap) {
      if (sectionMap.hasOwnProperty(id)) {
        if (id === current) {
          sectionMap[id].classList.add('nav__link--active');
        } else {
          sectionMap[id].classList.remove('nav__link--active');
        }
      }
    }
  }
})();
