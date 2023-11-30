// JavaScript
var coll = document.getElementsByClassName("collapsible");
let currentFieldIndex = 0;
let recognition = null;

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

if (currentFieldIndex == 0) {
  speakText("Welcome to the Yoga App");
}

function getTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// function startListening() {
//   const fieldId = fields[currentFieldIndex];
//   const labelElement = document.querySelector(`label[for="${fieldId}"]`);
//   const inputElement = document.getElementById(fieldId);

//   if (recognition) {
//     recognition.stop();
//   }

//   recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//   recognition.lang = "en-US";

//   recognition.onstart = function () {
//     labelElement.textContent = `Listening for ${labelElement.textContent}...`;
//   };

//   recognition.onresult = function (event) {
//     const transcript = event.results[0][0].transcript;
//     inputElement.value = transcript;
//   };

//   recognition.onend = function () {
//     labelElement.textContent = `Spoken ${labelElement.textContent}`;
//     currentFieldIndex++;

//     if (currentFieldIndex < fields.length) {
//       startListening();
//     } else {
//       currentFieldIndex = 0;
//     }
//   };
//   speakText(fieldId);
//   setTimeout(() => {
//     recognition.start();
//   }, 2000);
// }

function firstBotMessage() {

  speakText("Hello, what is your name");
  let firstMessage = "Hello, what is your name ?";
  
  document.getElementById("chatbox").innerHTML =
    '<p class="botText"><span>' +
    firstMessage +
    "</span></p>";
  
  let time = getTime();
  let chatTimestamp = document.createElement("div");
  chatTimestamp.setAttribute("id", "chat-timestamp");
  chatTimestamp.innerText = time;
  document.getElementById("chatbox").appendChild(chatTimestamp);
  document.getElementById("textInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  const delimiter = "_";
  const parts = botResponse.split(delimiter);

  for (let i = 0; i < parts.length; i++) {
    let botHtml = '<p class="botText"><span>' + parts[i] + "</span></p>";
    document.getElementById("chatbox").insertAdjacentHTML("beforeend", botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }
  if (userText.toLowerCase().includes("")) {
    // Trigger the hand wave animation
    playWaveAnimation();
  }
}

function getResponse() {
  let userText = document.getElementById("textInput").value;
  if (userText == "") {
    userText = "";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  document.getElementById("textInput").value = "";
  document.getElementById("chatbox").insertAdjacentHTML("beforeend", userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

function buttonSendText(sampleText) {
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("Heart clicked!");
}

document.getElementById("textInput").addEventListener("keypress", function (e) {
  if (e.which == 13) {
    getResponse();
  }
});










