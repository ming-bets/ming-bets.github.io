(function () {
  const MATCHES = [
    {
      id: "m19",
      date: "2026-09-19T12:30:00",
      championship: "England, Premier League",
      teamA: { name: "Tottenham" },
      teamB: { name: "Aston Villa" },
      market: "BTTS Yes or Total Goals Over 2.5",
      odds: "1.98",
      paragraphs: [
        "For Tottenham Hotspur, the key factors likely impacting their expected xG are their recent form (both scored and conceded), home venue advantage, recent xG performance, and the head-to-head record. Tottenham's home advantage is significant given their recent form and their team's tendency to play more defensively.",
        "Aston Villa's recent form suggests they are a better counter-attacking team and could take advantage of Tottenham's defensive style. Their away form is strong, and their recent xG suggests they are a prolific attacking team. The head-to-head record also points towards Aston Villa having a better chance of scoring more goals.",
        "Based on the computed results and the isolated effect of each non-default weight, Tottenham Hotspur's expected xG is slightly lower than Aston Villa's, favoring Aston Villa in terms of both team goals and total goals. The head-to-head blend weight of 100% further tilts the odds in Aston Villa's favor, making them the favored team in this match. The model predicts a slightly under total-goals estimate, tipping towards the under 2.5 goals, which aligns with the historical data and the isolated effect of the head-to-head blend weight."
      ],
      image: "./assets/september/2026-09-19.png"
    },
    {
      id: "m18",
      date: "2026-09-18T20:00:00",
      championship: "England, Premier League",
      teamA: { name: "Brentford" },
      teamB: { name: "Chelsea" },
      market: "Chelsea",
      odds: "2.48",
      paragraphs: [
        "For Brentford, the recent form indicates a balanced team that has scored and conceded around the league average in home matches. The xG and shots on target are relatively low compared to Chelsea, suggesting a more defensive style of play. The weight settings focus heavily on the home team style setting, which is set to balanced. The rest days for Brentford are less than for Chelsea, which slightly favors them.",
        "Chelsea is an attacking team with a recent record of scoring more goals and conceding fewer goals away from home. Their xG and shots on target are notably higher than Brentford's, suggesting they might impose their style on the game. The weight settings place more emphasis on xG and shots on target, which favor Chelsea. The head-to-head history has a neutral impact on the total expected goals.",
        "The computed results show that the model predicts a slight tilt towards Chelsea, resulting in a total of 3.13 expected goals, with Brentford expected to score more goals due to their home advantage and the balanced style setting. The head-to-head history is the most significant factor favoring Brentford, as it suggests a more balanced expectation. However, the home advantage and the fact that Chelsea has a higher xG and shots on target have a combined negative effect on the total expected goals, slightly lowering them. Therefore, I conclude that the numbers favor Chelsea slightly, with the total expected goals leaning under the 2.5 goal mark, suggesting an 'Under 2.5' outcome."
      ],
      image: "./assets/september/2026-09-18.png"
    },
    {
      id: "m17",
      date: "2026-09-17T17:45:00",
      championship: "UEFA, Europe League",
      teamA: { name: "OFI Crete" },
      teamB: { name: "Hoffenheim" },
      market: "Hoffenheim && Total Goals Over 2.5",
      odds: "1.88",
      paragraphs: [
        "For the home team, OFI Crete, the relevant factors are their recent form, which includes both scoring and conceding averages, and their defensive strength, indicated by the away venue averages. The recent scoring average (1.63) is lower than the away venue scoring (2.59), suggesting they might be a stronger defensive force at home. Their conceding average (0.20) is notably higher than the away venue conceding (0.00), indicating they may concede more goals at home.",
        "For the away team, TSG Hoffenheim, the relevant factors are their recent form, which includes both scoring and conceding averages, and their offensive strength, indicated by the home venue averages. The away team's recent scoring (2.22) is higher than the home venue scoring (2.59), suggesting they may score more goals at home. Their conceding (1.86) is slightly higher than the home venue conceding (1.94), indicating they may concede goals more frequently at home.",
        "Given the significant disparity in the away team's scoring and conceding averages, which favor TSG Hoffenheim, and the slight disparity in the home team's scoring and conceding averages, which favor OFI Crete, the isolated effect of these factors is predominantly in favor of TSG Hoffenheim. The total-goals estimate of 3.80 suggests a balanced match, with TSG Hoffenheim likely to score more goals, but the overall model suggests a slight favor towards OFI Crete. Therefore, I conclude that the numbers favor TSG Hoffenheim, and the total-goals estimate leans over, indicating a match where TSG Hoffenheim is likely to score more than 1.5 goals."
      ],
      image: "./assets/september/2026-09-17.png"
    },
    {
      id: "m16",
      date: "2026-09-16T20:00:00",
      championship: "UEFA, Europe League",
      teamA: { name: "Anderlecht" },
      teamB: { name: "Lyon" },
      market: "Lyon/Draw && Total Goals Under 3.5",
      odds: "2.08",
      paragraphs: [
        "For the home team, RSC Anderlecht, the form window includes recent matches with an average of 0.79 goals scored and 0.36 conceded. Their home venue averages 0.82 goals scored and 0.00 conceded over 3 home matches, indicating they tend to perform well at home. Their xG and shots-on-target figures of 1.15 and 4.40 respectively, combined with their balanced home style, suggest they could have a strong expected goals output.",
        "For the away team, Olympique Lyonnais, the form window includes recent matches with an average of 1.22 goals scored and 0.67 conceded. Their away venue averages 0.36 goals scored and 0.00 conceded over 2 away matches, indicating they struggle more away from home. Their xG and shots-on-target figures of 1.45 and 4.40 respectively, combined with their balanced away style, suggest they could have a strong expected goals output.",
        "The computed expected goals for the match favor RSC Anderlecht. The model predicts a home advantage of about 0.4 goals (0.027 expected goals converted into 0.4 goals based on the average conversion rate of expected goals to actual goals) due to the league table position gap of -6 (RSC Anderlecht is ranked 6 positions higher than Olympique Lyonnais).",
        "Despite this, the model's output suggests RSC Anderlecht should win or draw comfortably, with the total goals expected to be around 1.08. Given this, the total-goals estimate leans under the expected 3.5 goals, favoring a match that could result in both teams scoring or under 2.5 goals. This conclusion is supported by the model's predictions and historical data, which both lean towards a lower total goal count."
      ],
      image: "./assets/september/2026-09-16.png"
    },
    {
      id: "m15",
      date: "2026-09-15T20:30:00",
      championship: "Spain, La Liga",
      teamA: { name: "Elche" },
      teamB: { name: "Real Madrid" },
      market: "Total Goals Over 3.5",
      odds: "1.83",
      paragraphs: [
        "For the home team, Elche, the form window of the last 5 matches is particularly crucial. They have been scoring 1.30 goals per game and conceding 2.40, showing they are capable of scoring but also have a decent defense. Their offensive style is also set, adding to their expected goals.Elche's recent xG is 1.23, which aligns with their form, suggesting they are performing as expected.",
        "For the away team, Real Madrid, the recent form window is also 5 matches, and they have been scoring 2.81 goals per game and conceding 0.82. Their defensive strength is highlighted by their average conceding, but their offensive style being offensive could indicate their ability to score against weaker teams. Real Madrid's xG is 2.92, which is above their recent performance, suggesting they may be overperforming in this match. Their shots on target per match is 9.20, suggesting they are a strong attacking team, but their current situation might not be translating into actual goals.",
        "The total-goals estimate leans over, with Elche's expected goals of 1.32 at home and Real Madrid's of 3.36 on the road making the total 4.68 expected goals."
      ],
      image: "./assets/september/2026-09-15.png"
    },
    {
      id: "m14",
      date: "2026-09-14T17:30:00",
      championship: "Italy, Serie A",
      teamA: { name: "Como" },
      teamB: { name: "Parma" },
      market: "Como && BTTS No",
      odds: "1.75",
      paragraphs: [
        "The home team's recent form shows they are scoring more goals (2.66) and conceding fewer (0.90) compared to their average, which suggests they are in an offensive position. However, the Parma team, which is playing away, shows a more defensive stance, with them scoring less and conceding more. Additionally, the home team has a larger gap in league position compared to the away team, indicating they might have a slight advantage.",
        "The away team's form is more defensive, as they only scored 0.47 goals and conceded 1.11 in their recent matches. They play at an away venue where they have scored almost no goals and conceded many. This defensive stance might make it harder for them to score goals. Furthermore, the home team's larger league position gap also favors them.",
        "Considering the home team's offensive form and the away team's more defensive stance, the overall expected goals model suggests a slight bias towards the home team (Como). The isolated effect of the home advantage (65%) and the gap in league positions (80%) both point towards a higher probability of Como scoring more goals.",
        "The total expected goals of 1.92 favor the home team, but the over/under goal line (1.5) leans under, indicating that more than one goal might be unlikely. Thus, the numbers favor the home team, with the match likely to be a lower-scoring affair, tipping the total goal count slightly over the 1.5 goal line in favor of the home team."
      ],
      image: "./assets/september/2026-09-14.png"
    },
    {
      id: "m13",
      date: "2026-09-13T20:30:00",
      championship: "Portugal, Liga Betclic",
      teamA: { name: "Famalicao" },
      teamB: { name: "Sporting" },
      market: "Sporting && Total Goals Over 1.5",
      odds: "1.8",
      paragraphs: [
        "For the home team (Famalicão), recent scoring and conceding averages are key inputs, with their home venue-specific averages also playing a significant role. The recent xG and shots-on-target figures are blended in, along with the team style setting and historical rates. The home advantage, league table position gap, and rest days advantage are also applied.",
        "For the away team (Sporting CP), recent scoring and conceding averages are important, especially considering their away venue-specific averages. The recent xG and shots-on-target figures are blended in, along with the team style setting and historical rates. The home advantage, league table position gap, and rest days advantage are also applied.",
        "Given the computed results, the home team (Famalicão) is favored slightly over the away team (Sporting CP). The total-goals estimate is around 1.72, leaning slightly over the 1.5 goal line. The isolated effect of each non-default weight supports this conclusion.",
      ],
      image: "./assets/september/2026-09-13.png"
    },
    {
      id: "m12",
      date: "2026-09-12T18:00:00",
      championship: "Portugal, Liga Betclic",
      teamA: { name: "Casa Pia" },
      teamB: { name: "Porto" },
      market: "Porto && Total Goals Over 2.5",
      odds: "1.9",
      paragraphs: [
        "For the home team, Casa Pia, the recent form is a key factor. They have scored 0 goals and conceded 1.42 in their last 5 matches, playing at home. Their defensive style might reduce their scoring opportunities, which is plausible given the high average conceded in their form. The regression towards recent xG and shots-on-target numbers is also likely to be relevant since they have conceded more goals than they have scored in their recent form. The home advantage is another strong factor, given they are the home team and have a win rate of 80% in their home matches.",
        "For the away team, FC Porto, their form is equally strong with a 2.26 goal-scoring rate and a 0.40 conceded rate in their last 5 away matches. Their offense is dominant, evidenced by their high goal-scoring rate and low conceded rate. Their offensive style might increase the chances of scoring against a more defensive home team. The regression towards their recent xG and shots-on-target numbers could also be significant for FC Porto, as they have had higher xG and shots-on-target numbers in their recent matches compared to their conceded numbers. The venue-specific form is positive for them, as they have scored more goals on their away venues compared to their home venues. Their recent league position gap of -17 indicates that they are in a higher position in the league than their opponent, which could be factored in as a positive home advantage for them.",
        "Given the home team's defensive style and the away team's offensive style, the regression towards recent xG and shots-on-target numbers appears to be the most influential factor in the context of this match. Casa Pia's defensive approach might limit their scoring opportunities, which is reinforced by their recent conceding rate. On the other hand, FC Porto's offensive performance, evidenced by their scoring rate and fewer goals conceded, suggests they are more likely to score against a more defensively oriented home team. The xG and shots-on-target regression, combined with the defensive nature of Casa Pia and the offensive nature of FC Porto, suggests that the expected goals and total goals should lean over. The model predicts a total of 3.03 goals, which aligns with the historical data showing a preference for fewer goals, as over 1.5 and under 1.5 probabilities suggest a preference for the latter, and the over 2.5 and under 2.5 probabilities align with historical data, which leans over."
      ],
      image: "./assets/september/2026-09-12.png"
    },
    {
      id: "m11",
      date: "2026-09-11T19:45:00",
      championship: "Belgium, Pro League",
      teamA: { name: "Mechelen" },
      teamB: { name: "Anderlecht" },
      market: "Anderlecht && Total Goals Over 1.5",
      odds: "2.22",
      paragraphs: [
        "For the home team, KV Mechelen, the recent scoring and conceding averages are quite different from those of the away team (RSC Anderlecht). KV Mechelen has a better recent scoring record and a higher xG and shots on target per match than RSC Anderlecht. The home advantage and venue-specific form are also weighted heavily, suggesting that playing at home might give KV Mechelen an advantage.",
        "RSC Anderlecht, as the away team, has a lower scoring record and a higher conceding record. However, they have a strong recent performance, indicated by their recent xG and shots on target per match, which could be advantageous in an away game. The table position gap between the two teams is also significant, with Anderlecht being ranked 4 places higher, giving them a slight home advantage.",
        "Based on the computed results, the isolated effect of home advantage and venue-specific form seems to slightly favor KV Mechelen, as it increases the probability of winning and the total goals over the neutral comparison model. However, the isolated effect of the head-to-head blend is very close to zero, suggesting that the head-to-head history between the teams does not significantly shift the probabilities.",
        "The expected total goals for the match are slightly above the neutral case, leaning slightly over (2.85 vs 3.05), which can be interpreted as favoring the away team in terms of goal count. Therefore, the numbers favor RSC Anderlecht in terms of the match result, although the goal count is slightly in favor of the home team."
      ],
      image: "./assets/september/2026-09-11.png"
    },
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
