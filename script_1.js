document.getElementById('start-game').addEventListener('click', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.display = 'block';
  
    let score = 0;
  
    function drawSquare() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const x = Math.random() * (canvas.width - 50);
      const y = Math.random() * (canvas.height - 50);
      ctx.fillStyle = 'red';
      ctx.fillRect(x, y, 50, 50);
  
      canvas.onclick = (e) => {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
  
        if (
          clickX >= x &&
          clickX <= x + 50 &&
          clickY >= y &&
          clickY <= y + 50
        ) {
          score++;
          drawSquare();
        }
      };
    }
  
    drawSquare();
  });

  
  document.getElementById('start-game').addEventListener('click', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.display = 'block';
  
    let score = 0;
    let level = 1;
    let timeLeft = 30; // Timer in seconds
  
    // Timer
    const timer = setInterval(() => {
      timeLeft--;
      document.getElementById('game-area').innerHTML = `Time Left: ${timeLeft}s - Score: ${score} - Level: ${level}`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        alert(`Game Over! Your final score is ${score}`);
        canvas.style.display = 'none';
      }
    }, 1000);
  
    // Draw squares
    function drawSquare() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const size = Math.max(50 - level * 5, 20); // Reduce size as level increases
      const x = Math.random() * (canvas.width - size);
      const y = Math.random() * (canvas.height - size);
  
      ctx.fillStyle = 'red';
      ctx.fillRect(x, y, size, size);
  
      // Detect clicks
      canvas.onclick = (e) => {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
  
        if (
          clickX >= x &&
          clickX <= x + size &&
          clickY >= y &&
          clickY <= y + size
        ) {
          score++;
          if (score % 5 === 0) level++; // Increase level every 5 points
          drawSquare();
        }
      };
    }
  
    drawSquare();
  });
  