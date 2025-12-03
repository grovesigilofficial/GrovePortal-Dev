// GrovePortal-Dev — Headphone Alarm Module

let audio;

// Preload soft loop sound
async function loadSound() {
  if (!audio) {
    audio = new Audio("public/alarm.mp3");
    audio.loop = true;
  }
  return audio;
}

export async function playAlarm() {
  const sound = await loadSound();
  try {
    await sound.play();
    console.log("Alarm started — GrovePortal-Dev");
  } catch (e) {
    console.log("Playback blocked, waiting for user gesture — GrovePortal-Dev");
  }
}

export function stopAlarm() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    console.log("Alarm stopped — GrovePortal-Dev");
  }
}
