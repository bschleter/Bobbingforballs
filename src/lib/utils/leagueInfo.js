/*   STEP 1   */
export const leagueID = "916883370397880320"; // your league ID
export const leagueName = "Through Your Tubes and Out Your Bob"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>
  <p>In our league, winning is like buying a donut. Sometimes you end up with the one with sprinkles, and other times, Ryan wins. </p>
  <p>Ryan is the group's alarm clock. Necessary, but you really don't want to hear him win.</p>
  <p>Hustle Champ" is not just a shirt; it's a way of life. Except it's only 3/65 days of the year, so more like a vacation.</p>
  <p></p>
  <p>Which is why they say a fantasy league is like a family. Our family reunions involve a lot of questioning each other's life choices. Especially Schleter's.</p>
  <p>Like Schlete pretending to be deaf at a strip club, it was like playing charades where everyone loses.</p>
  <p>Dave and Schleter in our fantasy league are like coins in a fountain. They make a splash, but they never come back out on top.</p>
  <p>Bob says Bob things when he's drunk, even his beer is like, 'Man, I need a drink.'</p>
  <p>Schleter's card game 'Aces' has rules so bizarre, it's like the game was invented by someone on a three-day bender. Oh wait, it was</p>
  <p></p>
  <p></p>
  <p></p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "roster": 1, 
    "managerID": "736059696083021824", // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Terry3outof6524outof7",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "In your girl's DMs!", // (optional)
    "bio": "Schleter talks like outer space. You know it’s out there, but it doesn’t make any sense.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nos", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild'
    "rival": {
      "name": "Rival", // Can be anything (usually your rival's name)
      "link": 6, // manager array number within this array, or null to link back to all managers page
      "image": "/managers/rival.jpg" // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4807, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "FavoritePosition": "FA", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets'
    "philosophy": "No Half Stepping 24/7 3/65",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text" // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon'
  },
  {
    "roster": 2,
    "managerID": "734561861273567232",
    "name": "Mixon It Up",
    "location": "up Bob's ass", // (optional)
    "bio": "Meet Jeremy: The League's Unofficial Referee. If our fantasy football league had a mascot, it would be Jeremy - mainly because we can't afford a real mascot, and Jeremy's always here, arguing about something. Known for his unique ability to turn a casual chat about football into a passionate debate on the aerodynamics of a pigskin, Jeremy is the heartbeat of our league's banter. As a brother-in-law to Bob (which we suspect is the universe's idea of a practical joke), Jeremy brings a special flavor to the group. He's the kind of guy who insists his fantasy team is based on complex algorithms, but we all know he picks players based on their hairstyles. On game day, you'll find Jeremy shouting at the TV like he's the one making the calls - and let's be honest, if shouting were a fantasy point, he'd win the league hands down. Off the field, he's an amateur... In short, Jeremy is our league's spark plug - always firing, occasionally misfiring, but definitely indispensable.", 
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "tbb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild'
    "rival": {
      "name": "Rival", // Can be anything (usually your rival's name)
      "link": 3, // manager array number within this array, or null to link back to all managers page
      "image": "/managers/rival.jpg" // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1741, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text" // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon'
  },
  {
    "roster": 3,
    "managerID": "734580107951374336",
    "name": "ProtoBob",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Global Warming Hell", // (optional)
    "bio": "Because, in our league drafting is like being in a drafty room. It's cold, slightly uncomfortable, and Bob's usually asleep somewhere in the corner.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "tbb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild'
    "rival": {
      "name": "Rival", // Can be anything (usually your rival's name)
      "link": 2, // manager array number within this array, or null to link back to all managers page
      "image": "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 8557, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Discord" // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon'
  }
];
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
