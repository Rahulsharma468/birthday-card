"use client";
import { useEffect, useRef, useState } from "react";

export default function BirthdayPage() {
  const [currentAudio, setCurrentAudio] = useState(null);
  const musicUrlRef = useRef(null);
  const volumeRef = useRef(50);

  // Glitter/Floating Sparkle Creation Functions
  useEffect(() => {
    // playMusic()
    const glitterTypes = [
      {
        symbol: "✨",
        class: "star",
        colors: ["#ffd700", "#ffff00", "#fff700"],
      },
      {
        symbol: "💖",
        class: "heart",
        colors: ["#ff69b4", "#ff1493", "#ff91a4"],
      },
      {
        symbol: "💎",
        class: "diamond",
        colors: ["#fff", "#e6e6fa", "#f0f8ff"],
      },
      { symbol: "🌟", class: "star", colors: ["#ffd700", "#ffdf00", "#fff"] },
      {
        symbol: "💫",
        class: "sparkle",
        colors: ["#ff69b4", "#ffd700", "#fff"],
      },
      {
        symbol: "🎀",
        class: "heart",
        colors: ["#ff69b4", "#ff1493", "#ffc0cb"],
      },
    ];

    function createGlitter() {
      const glitter = document.createElement("div");
      glitter.classList.add("glitter");

      const type =
        glitterTypes[Math.floor(Math.random() * glitterTypes.length)];
      glitter.classList.add(type.class);
      glitter.innerHTML = type.symbol;
      glitter.style.left = Math.random() * 100 + "vw";
      glitter.style.animationDuration = Math.random() * 4 + 3 + "s";
      const color = type.colors[Math.floor(Math.random() * type.colors.length)];
      glitter.style.color = color;
      glitter.style.animationDelay = Math.random() * 2 + "s";
      document.body.appendChild(glitter);
      setTimeout(() => glitter.remove(), 7000);
    }

    function createFloatingElement() {
      const element = document.createElement("div");
      element.classList.add("floating-elements");
      const symbols = ["🌸", "🦋", "🌺", "💐", "🌷", "🎀", "👸", "✨"];
      element.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
      element.style.left = Math.random() * 90 + "vw";
      element.style.animationDuration = Math.random() * 6 + 4 + "s";
      document.body.appendChild(element);
      setTimeout(() => element.remove(), 10000);
    }

    function createUltraSparkle() {
      const sparkle = document.createElement("div");
      sparkle.classList.add("glitter", "sparkle");
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.animationDuration = Math.random() * 2 + 1 + "s";
      const sparkleColors = [
        "#fff",
        "#ffd700",
        "#ff69b4",
        "#ff1493",
        "#e6e6fa",
      ];
      const color =
        sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
      sparkle.style.background = `radial-gradient(circle, ${color}, transparent)`;
      sparkle.style.boxShadow = `0 0 15px ${color}`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 3000);
    }

    const glitterInterval = setInterval(createGlitter, 150);
    const floatInterval = setInterval(createFloatingElement, 800);
    const sparkleInterval = setInterval(createUltraSparkle, 100);

    for (let i = 0; i < 50; i++) {
      setTimeout(createGlitter, i * 50);
      setTimeout(createUltraSparkle, i * 30);
    }

    const burst = setInterval(() => {
      for (let i = 0; i < 10; i++) setTimeout(createUltraSparkle, i * 50);
    }, 3000);

    return () => {
      clearInterval(glitterInterval);
      clearInterval(floatInterval);
      clearInterval(sparkleInterval);
      clearInterval(burst);
    };
  }, []);

  function playMusic() {
    const url =
      "https://www.youtube.com/watch?v=IpFX2vq8HKw&list=RDIpFX2vq8HKw&start_radio=1";
    if (!url) {
      alert("🎵 Please enter a music URL first!");
      return;
    }
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
    }
    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = 1;
    audio
      .play()
      .then(() => setCurrentAudio(audio))
      .catch(() => alert("❌ Could not play this audio."));
  }

  function pauseMusic() {
    if (currentAudio && !currentAudio.paused) currentAudio.pause();
  }

  function stopMusic() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
  }

  function changeVolume(e) {
    if (currentAudio) currentAudio.volume = e.target.value / 100;
  }

  return (
    <div>
      <div className="sparkle-overlay"></div>
      <div className="crown">👑</div>

      <div className="container">
        <div className="birthday-content">
          <p className="subtitle">✨ HAPPY 22nd BIRTHDAY ✨</p>
          <h1 className="birthday-text"> 💖 Preeti Sharma 💖</h1>
          <p className="princess-text">🌟 Most Amazing Girl In my Life. 🌟</p>
          <p className="princess-text">
            You make my world brighter, my days happier, and my heart fuller.
          </p>
          <p className="princess-text">
            I’m so grateful for you, and I can’t wait to make countless more
            memories together.{" "}
          </p>
        </div>
      </div>

      <div className="bottom-decorations">
        <div className="decoration-item">🎂</div>
        <div className="decoration-item">🌸</div>
        <div className="decoration-item">🦄</div>
        <div className="decoration-item">💎</div>
        <div className="decoration-item">🎀</div>
      </div>

      {/* <div className="music-controls" style={{ position: "fixed", top: 20, right: 20 }}>
        <input ref={musicUrlRef} placeholder="Enter music URL..." />
        <button onClick={playMusic}>Play</button>
        <button onClick={pauseMusic}>Pause</button>
        <button onClick={stopMusic}>Stop</button>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          ref={volumeRef}
          onChange={changeVolume}
        />
      </div> */}
    </div>
  );
}
