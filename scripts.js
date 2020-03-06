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
alert("Halo Reach was selected!");

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
alert("Team Hardcore was selected!");
