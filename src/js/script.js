let scoreA = 0;
let scoreB = 0;

const form = document.getElementById("teamForm");
const scoreboard = document.getElementById("scoreboard");
const eventList = document.getElementById("eventList");
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const teamAName = document.getElementById("teamA").value.trim();
  const teamBName = document.getElementById("teamB").value.trim();

  if (!teamAName || !teamBName) return;

  document.getElementById("teamAName").textContent = teamAName;
  document.getElementById("teamBName").textContent = teamBName;

  document.getElementById("config").classList.add("hidden");
  scoreboard.classList.remove("hidden");

  resetScores();
});

function updateScore(team, points) {
  const time = new Date().toLocaleTimeString();

  if (team === "A") {
    scoreA = Math.max(0, scoreA + points);
    document.getElementById("scoreA").textContent = scoreA;
    addEvent(`${document.getElementById("teamAName").textContent} marcou ${points > 0 ? "+" : ""}${points} — Total: ${scoreA} (${time})`);
  } else {
    scoreB = Math.max(0, scoreB + points);
    document.getElementById("scoreB").textContent = scoreB;
    addEvent(`${document.getElementById("teamBName").textContent} marcou ${points > 0 ? "+" : ""}${points} — Total: ${scoreB} (${time})`);
  }
}

function addEvent(text) {
  const li = document.createElement("li");
  li.textContent = text;
  eventList.prepend(li);
}

function resetScores() {
  scoreA = 0;
  scoreB = 0;
  document.getElementById("scoreA").textContent = "0";
  document.getElementById("scoreB").textContent = "0";
  eventList.innerHTML = "";
}

resetBtn.addEventListener("click", resetScores);
