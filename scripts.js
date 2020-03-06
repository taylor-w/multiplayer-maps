// Declaring Collection of Data
const gameDetails = [
  { game: "Halo Reach" },
  { playlist: "Team Hardcore" },
  { mode: ["Team Slayer", "Capture the Flag", "King of the Hill"] },
  { map: ["Countdown", "Zealot", "Forge World"] }
];

// Question 1
// Alert user of limited selections
let gameAlert = alert(
  "The only game available is 'Halo Reach.' Please enter 'Halo Reach'."
);
let gameQuestion = String(prompt("What game are you playing?"));
while (!gameQuestion || gameQuestion !== gameDetails[0].game) {
  gameAlert = alert("Please enter 'Halo Reach'");
  gameQuestion = String(prompt("What game are you playing?"));
}
// Reward Proper Response
let confirmation = alert(`${gameQuestion} was selected!`);

// Question 2
// Alert user of limited selection
let playlistAlert = alert(
  "The only playlist available is 'Team Hardcore'. Please enter 'Team Hardcore'."
);
let playlistQuestion = String(prompt("What playlist are you playing?"));
while (!playlistQuestion || playlistQuestion !== gameDetails[1].playlist) {
  playlistAlert = alert("Please enter 'Team Hardcore'");
  playlistQuestion = String(prompt("What playlist are you playing?"));
}
// Reward Proper Response
confirmation = alert(`${playlistQuestion} was selected!`);

// Question 3
// Alert user of limited selections
let modeAlert = alert(
  "Game modes available include: Team Slayer, Capture the Flag, and King of the Hill."
);
let modeQuestion = String(prompt("Which game mode are you playing?"));
for (let counter = 0; counter <= gameDetails[2].mode.length - 1; counter++) {
  let index = 0;
  while (!modeQuestion || modeQuestion !== gameDetails[2].mode[index]) {
    // modeAlert = alert(
    //   "Please pick one of the following: Team Slayer, Capture the Flag, or King of the Hill"
    // );
    modeQuestion = String(prompt("Which game mode are you playing?"));
    index++;
  }
}
// Reward Proper Response
confirmation = alert(`${modeQuestion} was selected!`);
