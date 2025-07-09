function speak() {
  const text = document.getElementById("text").value;

  if (text.trim() === "") {
    alert("Please enter some text.");
    return;
  }

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-IN";
  speech.pitch = 1;
  speech.rate = 1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
}
