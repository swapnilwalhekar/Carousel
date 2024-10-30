const track = document.querySelector(".carousel-track");

// Pause animation on hover
track.addEventListener("mouseover", () => {
  track.style.animationPlayState = "paused";
});

// Resume animation on mouseout
track.addEventListener("mouseout", () => {
  track.style.animationPlayState = "running";
});
