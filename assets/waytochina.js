/* ============================================================
   WayToChina — site behavior (V1)
   Renders repeating content from data/site-data.js (window.WTC)
   and wires interactions: sticky header, mobile menu, program
   toggle + carousel, counters, testimonials slider, marquee,
   FAQ accordion, reveal-on-scroll.
   ============================================================ */

(function () {
  "use strict";

  var WTC = window.WTC || {};
  var SITE = WTC.site || {};
  // Pages set <body data-root="."> (root) or data-root=".." (e.g. /services/*)
  var ROOT = (document.body && document.body.getAttribute("data-root")) || ".";

  function asset(path) {
    return ROOT + "/" + path;
  }

  /* ---------- Inline SVG icon set ---------- */
  var ICONS = {
    compass:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    document:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    medal:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/></svg>',
    passport:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3.2"/><line x1="8" y1="17" x2="16" y2="17"/></svg>',
    plane:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.42 9.42 0 0 1-1.45-5.03c0-5.21 4.24-9.45 9.46-9.45a9.4 9.4 0 0 1 6.68 2.77 9.4 9.4 0 0 1 2.77 6.7c0 5.2-4.25 9.42-9.48 9.42zm8.05-17.47A11.3 11.3 0 0 0 12.03.6C5.75.6.64 5.71.64 12.02c0 2.01.52 3.97 1.52 5.7L.55 23.6l6.03-1.58a11.38 11.38 0 0 0 5.45 1.39h.01c6.28 0 11.39-5.11 11.39-11.42 0-3.05-1.19-5.92-3.34-8.07z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    pin:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    search:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    chevronLeft:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
    chevronRight:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
    chevronDown:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    play:
      '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>',
    quote:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.6 4C6 6 3.5 9.2 3.5 13.7c0 3.3 2 6.3 5.3 6.3 2.6 0 4.6-2 4.6-4.5 0-2.4-1.7-4.2-4-4.2-.4 0-1 .1-1.1.2.3-2.2 2.3-4.7 4.3-5.8L9.6 4zm10.4 0c-3.6 2-6.1 5.2-6.1 9.7 0 3.3 2 6.3 5.3 6.3 2.6 0 4.6-2 4.6-4.5 0-2.4-1.7-4.2-4-4.2-.4 0-1 .1-1.1.2.3-2.2 2.3-4.7 4.3-5.8L20 4z"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    globe:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6V13h2.7v8h3.2z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/></svg>',
    tiktok:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.4 2.2 1.8 3.7 4 3.9v3c-1.5 0-2.9-.5-4-1.3v6.3c0 3.4-2.4 5.9-5.7 5.9A5.62 5.62 0 0 1 5.2 15c0-3.2 2.6-5.7 5.9-5.6v3.1c-.2 0-.5-.1-.8-.1-1.5 0-2.6 1.2-2.6 2.7 0 1.6 1.2 2.7 2.7 2.7 1.6 0 2.7-1.2 2.7-3V3h3.5z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8.8H3.2V21h3.3V8.8zM4.9 7.3a2 2 0 1 0 0-3.9 2 2 0 0 0 0 3.9zM21 14.2c0-3.2-1.7-4.7-4-4.7-1.8 0-2.7 1-3.1 1.7V8.8h-3.3V21h3.3v-6.5c0-1.5.7-2.4 2-2.4s1.8.9 1.8 2.4V21H21v-6.8z"/></svg>',
    youtube:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 12c0-2.4-.2-4-.6-4.8-.3-.8-1-1.3-1.8-1.4C18.4 5.5 12 5.5 12 5.5s-6.4 0-8.1.3c-.8.1-1.5.6-1.8 1.4-.4.8-.6 2.4-.6 4.8s.2 4 .6 4.8c.3.8 1 1.2 1.8 1.4 1.7.3 8.1.3 8.1.3s6.4 0 8.1-.3c.8-.2 1.5-.6 1.8-1.4.4-.8.6-2.4.6-4.8zM10 15.2V8.8l5.5 3.2L10 15.2z"/></svg>',
  };

  function icon(name) {
    return ICONS[name] || ICONS.compass;
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function whatsappHref() {
    return "https://wa.me/" + String(SITE.whatsapp || "").replace(/\D/g, "");
  }

  /* ==========================================================
     1. Contact hydration (top bar, footer, contact page)
     ========================================================== */
  function hydrateContacts() {
    document.querySelectorAll("[data-wtc-phone]").forEach(function (el) {
      el.setAttribute("href", "tel:" + String(SITE.phone || "").replace(/\s/g, ""));
      var t = el.querySelector(".value-slot");
      (t || el).textContent = SITE.phone || "";
    });
    document.querySelectorAll("[data-wtc-whatsapp]").forEach(function (el) {
      el.setAttribute("href", whatsappHref());
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    document.querySelectorAll("[data-wtc-email]").forEach(function (el) {
      el.setAttribute("href", "mailto:" + (SITE.email || ""));
      var t = el.querySelector(".value-slot");
      (t || el).textContent = SITE.email || "";
    });
    document.querySelectorAll("[data-wtc-address]").forEach(function (el) {
      el.textContent = SITE.address || "";
    });
    document.querySelectorAll("[data-wtc-tagline]").forEach(function (el) {
      el.textContent = SITE.tagline || "";
    });
    document.querySelectorAll("[data-wtc-social]").forEach(function (wrap) {
      var social = SITE.social || {};
      wrap.innerHTML = Object.keys(social)
        .map(function (key) {
          return (
            '<a href="' + esc(social[key]) + '" aria-label="' + esc(key) + '">' + icon(key) + "</a>"
          );
        })
        .join("");
    });
    document.querySelectorAll("[data-wtc-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
    // Footer services column — canonical list, same 5 links as homepage grid
    document.querySelectorAll("[data-wtc-footer-services]").forEach(function (ul) {
      ul.innerHTML = (WTC.services || [])
        .map(function (s) {
          return '<li><a href="' + ROOT + "/services/" + s.slug + '.html">' + esc(s.name) + "</a></li>";
        })
        .join("");
    });
  }

  /* ==========================================================
     2. Sticky header + mobile menu
     ========================================================== */
  function initHeader() {
    var header = document.querySelector(".site-header");
    if (header) {
      var onScroll = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
    var burger = document.querySelector(".nav-burger");
    if (burger) {
      burger.addEventListener("click", function () {
        document.body.classList.toggle("menu-open");
        burger.setAttribute(
          "aria-expanded",
          document.body.classList.contains("menu-open") ? "true" : "false"
        );
      });
    }
  }

  /* ==========================================================
     3. Featured programs — Bachelor/Master toggle + carousel
     ========================================================== */
  var programsSwiper = null;

  function programCard(p) {
    return (
      '<div class="swiper-slide"><article class="program-card">' +
      '<div class="program-card-top">' +
      '<span class="uni-badge">' + esc(p.badge) + "</span>" +
      "<div><span class=\"degree\">" + (p.level === "master" ? "Master" : "Bachelor") + "</span>" +
      "<h3>" + esc(p.major) + "</h3></div></div>" +
      '<p class="uni-name">' + esc(p.university) + "</p>" +
      '<ul class="program-specs">' +
      '<li><span class="k">Rank</span><span class="v">' + esc(p.rank) + "</span></li>" +
      '<li><span class="k">Language</span><span class="v">' + esc(p.language) + "</span></li>" +
      '<li><span class="k">Duration</span><span class="v">' + esc(p.duration) + "</span></li>" +
      '<li><span class="k">Annual tuition fee</span><span class="v v--fee">' + esc(p.fee) + "</span></li>" +
      "</ul>" +
      '<a href="' + ROOT + '/contact.html" class="btn btn--outline-red">Apply now</a>' +
      "</article></div>"
    );
  }

  function renderPrograms(level) {
    var wrap = document.getElementById("programs-wrapper");
    if (!wrap) return;
    var items = (WTC.programs || []).filter(function (p) {
      return p.level === level;
    });
    wrap.innerHTML = items.map(programCard).join("");
    if (programsSwiper) {
      programsSwiper.update();
      programsSwiper.slideTo(0, 0);
    }
  }

  function initPrograms() {
    var container = document.querySelector(".programs-swiper");
    if (!container || typeof Swiper === "undefined") return;
    renderPrograms("bachelor");
    programsSwiper = new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: { nextEl: "#programs-next", prevEl: "#programs-prev" },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
    document.querySelectorAll(".toggle [data-level]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".toggle [data-level]").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        renderPrograms(btn.getAttribute("data-level"));
      });
    });
  }

  /* ==========================================================
     4. How it works
     ========================================================== */
  function initSteps() {
    var grid = document.getElementById("steps-grid");
    if (!grid) return;
    grid.innerHTML = (WTC.steps || [])
      .map(function (s, i) {
        return (
          '<article class="step-card reveal" data-reveal-delay="' + (i % 5) + '">' +
          '<div class="step-num">' + (i + 1) + "</div>" +
          "<h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></article>"
        );
      })
      .join("");
  }

  /* ==========================================================
     5. Services grid (homepage)
     ========================================================== */
  function initServices() {
    var grid = document.getElementById("services-grid");
    if (!grid) return;
    grid.innerHTML = (WTC.services || [])
      .map(function (s, i) {
        return (
          '<article class="service-card reveal" data-reveal-delay="' + (i % 3) + '">' +
          '<div class="service-icon">' + icon(s.icon) + "</div>" +
          "<h3>" + esc(s.name) + "</h3><p>" + esc(s.short) + "</p>" +
          '<a class="link-more" href="' + ROOT + "/services/" + s.slug + '.html">Find out more ' +
          icon("arrow") + "</a></article>"
        );
      })
      .join("");
  }

  /* ==========================================================
     6. Track record counters
     ========================================================== */
  function initStats() {
    var grid = document.getElementById("stats-grid");
    if (!grid) return;
    grid.innerHTML = (WTC.stats || [])
      .map(function (s) {
        return (
          '<div class="stat"><div class="value">' + esc(s.prefix) +
          '<span class="count" data-target="' + s.value + '">0</span>' + esc(s.suffix) +
          '</div><div class="label">' + esc(s.label) + "</div></div>"
        );
      })
      .join("");

    var animated = false;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || animated) return;
          animated = true;
          var reduced =
            window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          grid.querySelectorAll(".count").forEach(function (el) {
            var target = parseInt(el.getAttribute("data-target"), 10) || 0;
            if (reduced) {
              el.textContent = target.toLocaleString("en-US");
              return;
            }
            var start = null;
            var dur = 1800;
            function tick(ts) {
              if (!start) start = ts;
              var p = Math.min((ts - start) / dur, 1);
              var eased = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.round(target * eased).toLocaleString("en-US");
              if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
          });
          io.disconnect();
        });
      },
      { threshold: 0.4 }
    );
    io.observe(grid);
  }

  /* ==========================================================
     7. Team grid
     ========================================================== */
  function initTeam() {
    var grid = document.getElementById("team-grid");
    if (!grid) return;
    grid.innerHTML = (WTC.team || [])
      .map(function (m, i) {
        return (
          '<article class="team-card reveal" data-reveal-delay="' + (i % 5) + '">' +
          "<figure><img src=\"" + asset(m.photo) + '" alt="' + esc(m.name) + " — " + esc(m.role) + '" loading="lazy"/></figure>' +
          "<h3>" + esc(m.name) + '</h3><p class="role">' + esc(m.role) + "</p></article>"
        );
      })
      .join("");
  }

  /* ==========================================================
     8. Testimonials slider
     ========================================================== */
  function initTestimonials() {
    var wrap = document.getElementById("testimonials-wrapper");
    if (!wrap) return;
    wrap.innerHTML = (WTC.testimonials || [])
      .map(function (t) {
        return (
          '<div class="swiper-slide"><article class="testimonial-card">' +
          '<div class="quote-mark">' + icon("quote") + "</div>" +
          "<blockquote>" + esc(t.quote) + "</blockquote>" +
          '<div class="testimonial-person">' +
          '<img src="' + asset(t.photo) + '" alt="' + esc(t.name) + '" loading="lazy"/>' +
          '<div><div class="name">' + esc(t.name) + '</div><div class="program">' + esc(t.program) + "</div></div>" +
          "</div></article></div>"
        );
      })
      .join("");
    if (typeof Swiper === "undefined") return;
    new Swiper(".testimonials-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      autoHeight: false,
      pagination: { el: "#testimonials-pagination", clickable: true },
      navigation: { nextEl: "#testimonials-next", prevEl: "#testimonials-prev" },
      breakpoints: {
        700: { slidesPerView: 2 },
        1080: { slidesPerView: 3 },
      },
    });
  }

  /* ==========================================================
     9. Partner universities marquee
     ========================================================== */
  function initPartners() {
    var track = document.getElementById("partners-track");
    if (!track) return;
    var chips = (WTC.partners || [])
      .map(function (p) {
        return (
          '<div class="partner-chip"><span class="uni-badge">' + esc(p.badge) + "</span>" +
          '<div><div class="p-name">' + esc(p.name) + '</div><div class="p-city">' + esc(p.city) + "</div></div></div>"
        );
      })
      .join("");
    // duplicate once so translateX(-50%) loops seamlessly
    track.innerHTML = chips + chips;
  }

  /* ==========================================================
     10. FAQ accordion
     ========================================================== */
  function initFaq() {
    var list = document.getElementById("faq-list");
    if (!list) return;
    list.innerHTML = (WTC.faq || [])
      .map(function (f, i) {
        return (
          '<div class="faq-item' + (i === 0 ? " is-open" : "") + '">' +
          '<button class="faq-q" aria-expanded="' + (i === 0 ? "true" : "false") + '">' +
          "<span>" + esc(f.q) + '</span><span class="chev">' + icon("chevronDown") + "</span></button>" +
          '<div class="faq-a"><div class="faq-a-inner">' + esc(f.a) + "</div></div></div>"
        );
      })
      .join("");

    function setHeight(item) {
      var a = item.querySelector(".faq-a");
      a.style.maxHeight = item.classList.contains("is-open") ? a.scrollHeight + "px" : "0px";
    }
    list.querySelectorAll(".faq-item").forEach(setHeight);
    list.addEventListener("click", function (e) {
      var q = e.target.closest(".faq-q");
      if (!q) return;
      var item = q.parentElement;
      var open = item.classList.toggle("is-open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
      list.querySelectorAll(".faq-item").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("is-open");
          other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        }
        setHeight(other);
      });
    });
    window.addEventListener("resize", function () {
      list.querySelectorAll(".faq-item.is-open").forEach(setHeight);
    });
  }

  /* ==========================================================
     11. Universities page — static curated list
     ========================================================== */
  function initUniversities() {
    var listEl = document.getElementById("uni-list");
    if (!listEl) return;
    listEl.innerHTML = (WTC.universities || [])
      .map(function (u, i) {
        return (
          '<article class="uni-row reveal" data-reveal-delay="' + (i % 2) + '">' +
          '<span class="uni-badge">' + esc(u.badge) + "</span>" +
          "<div><h3>" + esc(u.name) + '</h3><p class="meta">' + esc(u.city) + " · " + esc(u.rank) + "</p></div>" +
          '<div class="tags">' +
          (u.tags || [])
            .map(function (t, j) {
              return '<span class="uni-tag' + (j === 0 ? " uni-tag--red" : "") + '">' + esc(t) + "</span>";
            })
            .join("") +
          "</div></article>"
        );
      })
      .join("");
  }

  /* ==========================================================
     11b. Click-to-play YouTube embeds (.video-frame[data-youtube])
     ========================================================== */
  function initVideoEmbeds() {
    document.querySelectorAll(".video-frame[data-youtube]").forEach(function (frame) {
      var id = frame.getAttribute("data-youtube");
      var btn = frame.querySelector(".play-btn");
      if (!id || !btn) return;
      btn.addEventListener("click", function () {
        var iframe = document.createElement("iframe");
        iframe.src =
          "https://www.youtube-nocookie.com/embed/" +
          encodeURIComponent(id) +
          "?autoplay=1&rel=0&modestbranding=1";
        iframe.title = "Video player";
        iframe.setAttribute("allow", "autoplay; encrypted-media; fullscreen");
        iframe.setAttribute("allowfullscreen", "");
        frame.innerHTML = "";
        frame.appendChild(iframe);
      });
    });
  }

  /* ==========================================================
     11c. Language dropdown — close on outside click
     ========================================================== */
  function initLangDropdown() {
    var dd = document.querySelector(".lang-dd");
    if (!dd) return;
    document.addEventListener("click", function (e) {
      if (dd.hasAttribute("open") && !dd.contains(e.target)) {
        dd.removeAttribute("open");
      }
    });
  }

  /* ==========================================================
     12. Reveal-on-scroll
     ========================================================== */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ==========================================================
     Boot
     ========================================================== */
  document.addEventListener("DOMContentLoaded", function () {
    hydrateContacts();
    initHeader();
    initPrograms();
    initSteps();
    initServices();
    initStats();
    initTeam();
    initTestimonials();
    initPartners();
    initFaq();
    initUniversities();
    initVideoEmbeds();
    initLangDropdown();
    // reveal last so dynamically rendered .reveal nodes are observed
    initReveal();
  });
})();
