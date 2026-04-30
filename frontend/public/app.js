const follower = document.getElementById('cursor-follower');
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let followerX = targetX;
let followerY = targetY;
let lastAngle = 0;

window.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function lerp(a, b, n) {
  return a + (b - a) * n;
}

function tick() {
  followerX = lerp(followerX, targetX, 0.2);
  followerY = lerp(followerY, targetY, 0.2);

  const dx = targetX - followerX;
  const dy = targetY - followerY;
  const angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;

  follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%) rotate(${angle}deg)`;

  requestAnimationFrame(tick);
}
tick();
