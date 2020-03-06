// Declaring Collection of Data
const gameDetails = [
  { game: "Halo Reach" },
  { playlist: "Team Hardcore" },
  { mode: ["Team Slayer", "Capture the Flag", "King of the Hill"] },
  { map: ["Countdown", "Zealot", "Forge World"] }
];

// Question 1
// Alert user of limited selections
alert("The only game available is 'Halo Reach.' Please enter 'Halo Reach'.");

let gameQuestion = String(prompt("What game are you playing?"));

while (!gameQuestion || gameQuestion !== gameDetails[0].game) {
  alert("Please enter 'Halo Reach'");
  gameQuestion = String(prompt("What game are you playing?"));
}

// Reward Proper Response
alert(`${gameQuestion} was selected!`);

// Question 2
// Alert user of limited selection
alert(
  "The only playlist available is 'Team Hardcore'. Please enter 'Team Hardcore'."
);

let playlistQuestion = String(prompt("What playlist are you playing?"));

while (!playlistQuestion || playlistQuestion !== gameDetails[1].playlist) {
  alert("Please enter 'Team Hardcore'");
  playlistQuestion = String(prompt("What playlist are you playing?"));
}

// Reward Proper Response
alert(`${playlistQuestion} was selected!`);

// Question 3
// Alert user of limited selections
alert(
  "Game modes available include: Team Slayer, Capture the Flag, and King of the Hill."
);

let modeQuestion = String(prompt("Which game mode are you playing?"));

// Assume the worst.
let badModeQuestionValue = true;

let i = 0;
while (!modeQuestion || badModeQuestionValue) {
  for (i = 0; i <= gameDetails[2].mode.length - 1; i++) {
    if (modeQuestion === gameDetails[2].mode[i]) {
      badModeQuestionValue = false;
      break;
    } else {
      badModeQuestionValue = true;
    }
  }
  if (i >= gameDetails[2].mode.length) {
    alert(
      "Please enter one of the following: Team Slayer, Capture the Flag, or King of the Hill."
    );
    modeQuestion = String(prompt("Which game mode are you playing?"));
    i = 0;
    badModeQuestionValue = true;
  }
}

// Reward Proper Response
alert(`${modeQuestion} was selected!`);

// Question 4
// Alert user of limited selections
alert("Game maps available include: Countdown, Zealot, and Forge World.");

let mapQuestion = String(prompt("Which game map are you playing?"));

// Assume the worst.
let badMapQuestionValue = true;

let x = 0;
while (!mapQuestion || badMapQuestionValue) {
  for (x = 0; x <= gameDetails[3].map.length - 1; x++) {
    if (mapQuestion === gameDetails[3].map[x]) {
      badMapQuestionValue = false;
      break;
    } else {
      badMapQuestionValue = true;
    }
  }
  if (x >= gameDetails[3].map.length) {
    alert("Game maps available include: Countdown, Zealot, and Forge World.");
    mapQuestion = String(prompt("Which game map are you playing?"));
    x = 0;
    badMapQuestionValue = true;
  }
}

// Reward Proper Response
alert(`${mapQuestion} was selected!`);
