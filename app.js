(function () {
  const MATCHES = [
    {
      id: "m5",
      date: "2026-09-05T17:00:00",
      championship: "Italy, Serie A",
      teamA: { name: "Inter Milan" },
      teamB: { name: "Napoli" },
      market: "Inter Milan && Total Goals Under 4.5",
      odds: "1.88",
      paragraphs: [
        "The method for generating expected goals and other match metrics involves averaging the recent scoring and conceding rates of the home team and the away team, respectively. These averages are then used to calculate the expected number of goals and probabilities for over/under goals, both-team-to-score, and match result outcomes. The method also isolates the influence of individual team attributes such as attacking and defensive performance to determine their impact on the match's outcome.",
        "For Inter, the key root inputs are their recent form (Avg scored 2.10, Avg conceded 1.00) and their goal conversion (Avg shots 16.3, Shots on target % 33.1%, Goals per shot % 12.9%). The home team's conceding rate (1.00) is notably lower than the matchup average (1.10), suggesting Inter might be a tougher opponent to score against, which could lead to fewer goals overall.",
        "Napoli's root inputs include their recent form (Avg scored 2.10, Avg conceded 1.20), which is consistent with the matchup average, and their goal conversion (Avg shots 12.8, Shots on target % 34.4%, Goals per shot % 14.1%). The away team's attacking form (1.20) is slightly higher than the matchup average, which could indicate they might score more goals, though the overall game outcome probabilities suggest Inter may still be favored.",
        "Inter's defensive performance stands out as a key factor in the matchup, as evidenced by their conceding form being significantly below the average, which aligns with the model's prediction of fewer total goals. This suggests Inter's defense might be more effective against Napoli, which could tilt the balance slightly in their favor.",
        "The total-goals estimate of 3.20 is slightly higher than the historical average, favoring a total under outcome, which is also aligned with the historical probabilities of over 1.5 goals. Therefore, based on the specific numbers and the isolation effects, the model slightly favors Inter and predicts a total under outcome."
      ],
      image: "./assets/september/2026-09-05.png"
    },
    {
      id: "m4",
      date: "2026-09-04T19:45:00",
      championship: "Italy, Serie A",
      teamA: { name: "Genoa" },
      teamB: { name: "Como" },
      market: "Como",
      odds: "1.84",
      paragraphs: [
        "Como have the much stronger start: 4 points from 2 Serie A matches, including an impressive 2 to 1 away win at Napoli, while Genoa have 0 points and 0 goals after defeats to Napoli and Lazio.",
        "The key for me is the underlying matchup. Genoa have failed to score in both league games, whereas Como have already scored 3 goals, including twice against Napoli.",
        "A statistical model gives Como a 49% win probability, equivalent to fair odds around 2.04, while the available market is around 1.85.",
        "That means the value isn't enormous, but the price is still playable given the contrasting form.",
      ],
      image: "./assets/september/2026-09-04.png"
    },
    {
      id: "m3",
      date: "2026-09-03T19:30:00",
      championship: "Belgium Pro League",
      teamA: { name: "Anderlecht" },
      teamB: { name: "Kortrijk" },
      market: "Anderlecht && Total Goals Over 1.5",
      odds: "1.68",
      paragraphs: [
        "Anderlecht have had a mixed start to the season, but their attacking numbers are encouraging averaging 15.5 shots and 6.5 shots on target per game, showing they are creating enough opportunities.",
        "Kortrijk have struggled early in the season, scoring just 1 goal in 3 games, making them the weaker attacking side and increasing the likelihood of an Anderlecht-controlled match.",
        "With Anderlecht conceding 5 goals in their first 3 games and Kortrijk struggling defensively, a 2-0/2-1 or 3-0 result is realistic.",
      ],
      image: "./assets/september/2026-09-03.png"
    },
    {
      id: "m2",
      date: "2026-09-02T23:30:00",
      championship: "Brasileirão, Serie A",
      teamA: { name: "Flamengo" },
      teamB: { name: "Mirassol" },
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
      id: "m1",
      date: "2026-09-01T18:30:00",
      championship: "Austrian Bundesliga",
      teamA: { name: "Wolfsberger AC" },
      teamB: { name: "LASK Linz" },
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
