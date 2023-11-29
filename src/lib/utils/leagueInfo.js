/*   STEP 1   */
export const leagueID = "916883370397880320"; // your league ID
export const leagueName = "Through Your Tubes and Out Your Bob"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Well hi. You've found your way to our digital huddle – a place where friends and football cum together like the high school fieldhouse. This isn't just any fantasy league; it's our fantasy league, where the inside jokes are as plentiful as Schleter’s Facebook burner accounts.</p>

  <h2>A Roster of Reliably Unpredictable Characters</h2>
  <p>Meet our league members: a unique blend of personalities, each bringing their own brand of lumbersome charm to the arena.</p>
  <p>We have Jeremy and Bob, brothers-in-law locked in a never-ending debate about, well, everything.</p>
  <p>You got Bob who "goes big or goes home," except he often does both at the same time. Bob's fantasy strategy is grab whatever's closest and hope for the best. He's as likely to draft Adrian Peterson as Schleter, if he doesn’t fall asleep mid-pick first.</p>
  <p>Then there's Jeremy, the yin to Bob's yang. His debates with Bob are legendary – they're like watching two Bobs fight over a nut. Jeremy treats his fantasy team like it's a matter of national security, and will ensure luck grants him good fortune, as he is the commish after all. Damned to be all. But no one else wants to be it. Hell no.</p>
  <p>There's Schleter, who’s as unpredictable as a Wi-Fi signal. You never know if he's going to show up, vanish, or do both. With him it’s either collusion or confusion, he doesn't know the difference. Have him pick 7th.</p>
  <p>In our league, winning is like buying a donut. Sometimes you end up with the one with sprinkles, and other times you get Ryan. Ryan is the group's alarm clock. Necessary, but you really don't want to hear him win.</p>
  <p>You have our lovely Dave. He's the only person we know who can pick a full roster of players and still end up with a team that's on a bye week. But here’s the thing about Dave – he's the heart of our league. He takes every loss with a grin and every joke at his expense like a Hustle Champ. His unwavering good spirits in the face of constant defeat is the stuff of legend. He might never win the trophy, but he's definitely clinched the title of 'Hustle Champ’.</p>
  <p>Don’t forget Josh, the one who is still wondering himself how he got roped into this. He's like the guy who walks into the wrong classroom and just decides to stay for the lecture. It’s ok, he’s the hot one in class we all like looking at.</p>
  <p>Brian, our engineer by day and party legend by night, reminds us that life’s about balance – or at least about balancing a good margarita. I don’t want to say anything bad about Brian. Plus you can’t. Besides that one time he ran over a young child.</p>
  <p>Brothers Austin and Young Brandon are our die-hard Bears fans. Their optimism is a beacon of hope...until Brandon calls in the ESPN to complain about Jay Cutler. “We don’t want you to go outside and scream Brandon.”</p>
  <p>And, of course, Anne. She’s the quiet storm of the league, her victories speaking louder than her words. That’s not loud. Her play and jokes are quality, precise, and consistent, like a BMW. However she’s competing against Geo Trackers and Bob.</p>

  <h2>Where Every Draft Pick is a Wild Guess</h2>
  <p>In our league, drafting a player is less about strategy and more about hoping your pick doesn’t end up on the injured list five minutes later. We navigate our fantasy app with the grace of a toddler using a smartphone – enthusiastically, but mostly confused.</p>

  <h2>End Zone or Friend Zone?</h2>
  <p>So, here we are, ready to embark on another season of fantasy football mayhem. Will Schleter show up this week? Will Bob stay awake for the entire draft? Can Jeremy and Bob go an entire meeting without bickering? Spoiler alert: probably not.</p>
  <p>But that’s what makes our league special. It’s not just about football; it’s about friendship, fun, and finding new and creative ways to tease each other. Here’s to another season of laughs, gaffes, and the eternal question: “Wait, which Brandon was that again?”</p>
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
    
