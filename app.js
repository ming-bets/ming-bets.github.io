(function () {
  const MATCHES = [
    {
      id: "m1",
      date: "2026-09-02T23:30:00",
      championship: "Brasileirão, Serie A",
      teamA: { name: "Flamengo", logo: "https://img.sofascore.com/api/v1/team/40/image" },
      teamB: { name: "Mirassol", logo: "https://img.sofascore.com/api/v1/team/42/image" },
      market: "Flamengo && Total Goals Under 3.5",
      odds: "1.81",
      paragraphs: [
        "Flamengo have the clear advantage: they are strong at home, have won 7 of 11 home matches, and have never lost to Mirassol in their last 3 meetings.",
        "The recent H2H also favours Flamengo heavily — they won the latest meeting 5 to 1 and have scored 10 goals in the last 3 H2Hs.",
        "However, Flamengo's defensive strength and Mirassol's lower scoring output make a controlled Flamengo victory more likely than another goal-fest.",
        "The model gives Flamengo 63% to win and expects roughly 1.74 to 0.67 goals.",
      ],
      image: "./assets/september/2026-09-02.png"
    },
    {
      id: "m2",
      date: "2026-09-01T18:30:00",
      championship: "Austrian Bundesliga",
      teamA: { name: "Wolfsberger AC", logo: "https://img.sofascore.com/api/v1/team/40/image" },
      teamB: { name: "LASK Linz", logo: "https://img.sofascore.com/api/v1/team/42/image" },
      market: "Total Goals Away Over 1.5",
      odds: "1.65",
      paragraphs: [
        "LASK are 2nd with 9 points from 3 matches, while Wolfsberger are around 5th/6th with 5. LASK have also scored 9 and conceded only 1 in their opening three league matches.",
        "Wolfsberger have demonstrated that they can cause LASK serious problems meaning that if LASK Linz want's to win is very likely they will have to score more then one goal.",
      ],
      image: "./assets/september/2026-09-01.png"
    },
  ];

  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const template = document.getElementById("cardTemplate");

  const OFFSET_RATIO = 1.05;
  const SIDE_SCALE = 0.82;

  let matches = [];
  let cardEls = [];
  let activeIndex = 0;

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      weekday: "short",
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function buildCard(match) {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector(".card-championship").textContent = match.championship;
    node.querySelector(".card-date").textContent = formatDate(match.date);

    node.querySelector(".card-team--a").textContent = match.teamA.name.toUpperCase();
    node.querySelector(".card-team--b").textContent = match.teamB.name.toUpperCase();
    node.querySelector(".card-market").textContent = match.market;
    node.querySelector(".card-odds").textContent = match.odds;

    const body = node.querySelector(".card-body");
    match.paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      body.appendChild(p);
    });

    if (match.image) {
      const img = document.createElement("img");
      img.className = "card-image";
      img.src = match.image;
      img.alt = "";
      body.appendChild(img);
    }

    node.dataset.id = match.id;
    return node;
  }

  function render() {
    track.innerHTML = "";
    cardEls = matches.map((m) => buildCard(m));
    cardEls.forEach((el) => track.appendChild(el));

    update();
  }

  function update() {
    const total = matches.length;
    const offsetX = (cardEls[activeIndex]?.offsetWidth || 0) * OFFSET_RATIO;

    cardEls.forEach((el, i) => {
      const diff = mod(i - activeIndex + Math.floor(total / 2), total) - Math.floor(total / 2);

      el.classList.remove("is-active", "is-prev", "is-next", "is-hidden");

      if (diff === 0) {
        el.style.setProperty("--x", "0px");
        el.style.setProperty("--scale", "1");
        el.classList.add("is-active");
      } else if (diff === -1) {
        el.style.setProperty("--x", -offsetX + "px");
        el.style.setProperty("--scale", String(SIDE_SCALE));
        el.classList.add("is-prev");
      } else if (diff === 1) {
        el.style.setProperty("--x", offsetX + "px");
        el.style.setProperty("--scale", String(SIDE_SCALE));
        el.classList.add("is-next");
      } else {
        const dir = diff < 0 ? -1 : 1;
        el.style.setProperty("--x", dir * offsetX * 1.4 + "px");
        el.style.setProperty("--scale", String(SIDE_SCALE * 0.85));
        el.classList.add("is-hidden");
      }
    });
  }

  function goTo(index) {
    activeIndex = mod(index, matches.length);
    update();
  }

  function next() {
    goTo(activeIndex + 1);
  }

  function prev() {
    goTo(activeIndex - 1);
  }

  function attachEvents() {
    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    });

    let touchStartX = null;
    track.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    });
    track.addEventListener("touchend", (e) => {
      if (touchStartX === null) return;
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) > 40) {
        deltaX > 0 ? prev() : next();
      }
      touchStartX = null;
    });

    track.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      if (!card) return;
      const idx = cardEls.indexOf(card);
      if (idx !== -1 && idx !== activeIndex) goTo(idx);
    });

    window.addEventListener("resize", update);
  }

  function init() {
    matches = MATCHES;
    render();
    attachEvents();
  }

  init();
})();
