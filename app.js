(function () {
  const MATCHES = [
    {
      id: "m10",
      date: "2026-09-10T20:00:00",
      championship: "Europe, UEFA Champions League",
      teamA: { name: "Bayern Munchen" },
      teamB: { name: "Bodo/Glimt" },
      market: "Bayern Munchen && BTTS Yes",
      odds: "1.85",
      paragraphs: [
        "For FC Bayern München, the factors that seem most important are their recent scoring form and their own goal conversion rates. Their 3.80 goals scored per game is 0.35 higher than the matchup average of 3.45, which is a significant factor given their high shot conversion rate of 39.4%.",
        "Additionally, their goal conversion rates suggest they should score slightly more than their recent form might indicate.",
        "Bodø/Glimt, on the other hand, has a relatively low scoring form of 3.10 goals scored per game, which is 0.35 lower than the matchup average. Their shot conversion rates are also slightly lower than the average, which could be a factor in their recent form not being as high as expected.",
        "The computed results show that FC Bayern München has a slight advantage in terms of total goals, with their expected goals at 2.40 compared to Bodø/Glimt's 2.05. However, the conclusion leans more towards an under total, with the expected distribution favoring fewer than 2.5 goals (82.1% chance of Over 2.5).",
        "This suggests that although FC Bayern München is expected to score more goals, the away team's recent form and lower goal conversion rates could prevent FC Bayern München from exceeding the expected 2.5 goals total. Therefore, the data supports the conclusion that the match is more likely to be an under, with a slight preference for FC Bayern München to score."
      ],
      image: "./assets/september/2026-09-10.png"
    },
    {
      id: "m9",
      date: "2026-09-09T17:45:00",
      championship: "Europe, UEFA Champions League",
      teamA: { name: "Stuttgart" },
      teamB: { name: "Viking" },
      market: "Total Goals Over 3.5",
      odds: "1.77",
      paragraphs: [
        "VfB Stuttgart's recent form (3.40 scored, 1.40 conceded) is above the average (2.70 scored, 1.25 conceded) in both categories, which could favor them.However, their recent scoring (3.40) is slightly higher than the average of 2.70, which might push their expected goals higher.",
        "Viking FK's recent form (2.00 scored, 1.10 conceded) is below the average (2.70 scored, 1.25 conceded) in both categories, which could slightly favor VfB Stuttgart.Their recent scoring (2.00) is below the average of 2.70, which might push their expected goals lower.",
        "Based on the computed results and the isolated effect of raw inputs, VfB Stuttgart seems to be favored slightly. Their higher scoring form (3.40 vs. 2.70 average) and lower conceding form (1.40 vs. 1.25 average) suggest they might score more goals.",
        "The total-goals estimate is slightly over 3.95, leaning over 1.5 goals, favoring VfB Stuttgart. The historical data for both over/under and both teams to score probabilities also support this favoring, indicating VfB Stuttgart has a better chance of scoring more goals than the opponent."
      ],
      image: "./assets/september/2026-09-09.png"
    },
    {
      id: "m8",
      date: "2026-09-08T20:00:00",
      championship: "Europw, UEFA Champions League",
      teamA: { name: "Borussia Dortmund " },
      teamB: { name: "Villareal" },
      market: "Borussia Dortmund or Draw && Total Goals Over 2.5",
      odds: "1.85",
      paragraphs: [
        "The method described uses recent performance data, including goal-scoring and conceding averages, to predict the expected number of goals in a match. Teams' attack and defence figures are adjusted based on recent form and home/away-specific tendencies. The home team's home venue advantage, recent xG (expected goals), and shots on target numbers are considered. Head-to-head results are also taken into account.",
        "For Borussia Dortmund, the key factors influencing the match outcome and goals are their recent performance (average of 0.98 goals scored per match and 2.30 conceded per match), their home venue advantage, and their offensive team style. These elements collectively support a higher expectation of goals scored by Dortmund.",
        "Villarreal, on the other hand, is not expected to score any goals based on their recent performance (average of 0.00 goals scored per match and 3.00 conceded per match) and their away venue disadvantage. Their defensive team style suggests they may struggle to score against a more offensive opponent. The form gap and recent xG and shots on target figures also point towards a favorable outcome for Dortmund.",
        "Given the significant head-to-head advantage and the recent xG and shots on target figures, the model leans heavily towards a positive outcome for Borussia Dortmund. The computed expected goals favor Borussia Dortmund, indicating they are likely to score more than Villarreal, with a total-goals estimate suggesting the match will likely go over the 1.5 goals line.",
        "The model's probability for over/under 1.5 goals, based on historical data and the team's recent form, also supports this conclusion. The overall probability that Borussia Dortmund will win the match is also higher, at 67.8%, which aligns with the expected goals and head-to-head advantage computed."
      ],
      image: "./assets/september/2026-09-08.png"
    },
    {
      id: "m7",
      date: "2026-09-07T18:00:00",
      championship: "Denmark, Superliga",
      teamA: { name: "Midtjylland " },
      teamB: { name: "Nordsjaelland" },
      market: "Nordsjaelland or Draw",
      odds: "1.85",
      paragraphs: [
        "The method used blends recent scoring and conceding averages to predict expected goals for a match. For this matchup, FC Midtjylland is the home team and FC Nordsjælland is the away team. The expected goals are calculated as the average of the home team's scoring rate and the away team's conceding rate.",
        "The root inputs include each team's recent form, goal conversion rates, and the overall form in their own and the opponent's home/away venues. The resulting probabilities are based on historical trends and the isolated effect of each raw input compared to the specific matchup's average.",
        "For FC Midtjylland, the relevant root inputs are their scoring and conceding forms. Their scoring form at home is relatively weak compared to the overall form, while their conceding form is slightly better. Their goal conversion rates are also relatively poor, with a lower goals per shot percentage.",
        "FC Nordsjælland, as the away team, has a strong scoring form but a weaker conceding form. Their goal conversion rates indicate they are efficient in scoring but less so in preventing goals against.",
        "The isolated effect analysis suggests that FC Midtjylland's home form is the most critical factor favoring them. Their scoring form is weaker than expected, but their conceding form is slightly better than expected. FC Nordsjælland, on the other hand, has a stronger scoring form but their conceding form is also better than expected. However, the total-goals estimate leans over, indicating a likely total goals count under 2.5. This conclusion is supported by the historical data showing FC Midtjylland's lower expected over 1.5 goals, while FC Nordsjælland's expected over 1.5 goals are closer to their historical average."
      ],
      image: "./assets/september/2026-09-07.png"
    },
    {
      id: "m6",
      date: "2026-09-06T15:15:00",
      championship: "Spain, La Liga",
      teamA: { name: "Valencia" },
      teamB: { name: "Barcelona" },
      market: "Barcelon Total Goals Over 2.5",
      odds: "1.88",
      paragraphs: [
        "The method used in this prediction involves taking a team's recent performance and form, blending it with their own average form, and incorporating factors like home or away venue, recent xG and shots on target figures, table position gap, head-to-head history, and rest days. These inputs are then used to adjust the expected goals for each team and predict the total number of goals, as well as the match result. The weights for each factor are chosen by the user, ranging from 0% (turning off the adjustment) to 100% (full strength).",
        "For Valencia, the recent performance and form are key inputs. Their 10-match average of 1.00 goals conceded suggests a defensively solid team, which is reinforced by their home venue average of 0.65 goals conceded. FC Barcelona, with a 10-match average of 3.39 goals scored, has a more offensive style, indicated by their 5-match away venue average of 2.85 goals scored.",
        "FC Barcelona's offensive style is further supported by their 5-match away venue average of 5.70 shots on target, indicating they are more likely to be aggressive in attack. Valencia's 10-match average of 5.70 shots on target suggests they are also quite aggressive, but their defensive strength is highlighted by their home venue average of 2.85 goals conceded. The table position gap and head-to-head history are also considered.",
        "The computed expected goals and overall goal distribution models favor FC Barcelona. The isolated effects show that a higher weight on FC Barcelona's offensive style (home team style) and their more aggressive offensive approach through shots on target (away team style) would result in a higher expected goals for them. The total-goals estimate is 3.58, leaning slightly over, which aligns with FC Barcelona's more offensive nature and aggressive play style.",
        "The total-goals estimate of 3.20 is slightly higher than the historical average, favoring a total under outcome, which is also aligned with the historical probabilities of over 1.5 goals. Therefore, based on the specific numbers and the isolation effects, the model slightly favors Inter and predicts a total under outcome."
      ],
      image: "./assets/september/2026-09-06.png"
    },
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
