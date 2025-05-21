const tasks = [
  "🧹 Clean your table – Just remove clutter or wipe it down.",
  "🛏 Make your bed – Neatly arrange your pillow and blanket.",
  "🚶‍♀️ Walk 50 steps – Around your room or balcony.",
  "🧍‍♀️ Stand up and stretch – For just 30 seconds.",
  "📦 Organize one drawer or shelf – Just one!",
  "🪞 Look in the mirror and smile – Say, “Let’s go!”",
  "📚 Pick up a book and read one page out loud.",
  "🧴 Wash your face – Cold water works wonders.",
  "💧 Drink a glass of water while standing – Then take a deep breath.",
  "🧘‍♀️ Sit still for 1 minute – Eyes closed, focus on breathing."
];

const motivationalQuotes = [
  "Small steps lead to big changes. Keep going!",
  "Believe in yourself and all that you are.",
  "Every effort counts towards your success.",
  "Progress, not perfection, is the goal.",
  "Your dedication is your superpower.",
  "You are stronger than you think!",
  "One step at a time is still forward.",
  "Great things take time, stay patient.",
  "Keep pushing — you're doing amazing!",
  "Success is a journey, not a destination."
];

let userName = "";

function startMotivation() {
  const nameInput = document.getElementById("nameInput");
  userName = nameInput.value.trim();

  if (userName === "") {
    alert("Please enter your name!");
    return;
  }

  document.getElementById("nameSection").style.display = "none";
  document.getElementById("brainIcon").classList.remove("show");

  const message = document.getElementById("message");
  const task = document.getElementById("task");
  const stepSection = document.getElementById("stepSection");

  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
  message.innerText = `${userName}, hi! 👋 Try this:`;
  message.style.display = "block";
  task.innerText = randomTask;
  task.style.display = "block";

  stepSection.style.display = "block";
}

function completeTask() {
  const brainHappy = document.getElementById("brainHappy");
  const motivationalMessage = document.getElementById("motivationalMessage");
  const stepSection = document.getElementById("stepSection");
  const task = document.getElementById("task");
  const message = document.getElementById("message");

  task.style.display = "none";
  message.style.display = "none";
  stepSection.style.display = "none";

  
  brainHappy.classList.add("show");

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  motivationalMessage.innerHTML = `
    <p>${userName}, I’m proud of you! 💪</p>
    <p>"${randomQuote}"</p>
    <p>Thank you for listening to me 🧠</p>
  `;

  launchConfetti();
}

function launchConfetti() {
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.backgroundColor = getRandomColor();

    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

function getRandomColor() {
  const colors = ["#A2194F", "#F4B4CE", "#F5D9E4", "#EA3E9A", "#E10180", "#EE78B5"];
  return colors[Math.floor(Math.random() * colors.length)];
}
