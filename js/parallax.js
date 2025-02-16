document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 50; // Скорость движения по горизонтали
    const y = (e.clientY / window.innerHeight) * 50; // Скорость движения по вертикали
  
    const leftBalls = document.querySelector('.left-balls');
    const rightBalls = document.querySelector('.right-balls');
  
    // Движение шариков слева
    leftBalls.style.transform = `translate(${x}px, ${y}px)`;
  
    // Движение шариков справа (в противоположную сторону)
    rightBalls.style.transform = `translate(${-x}px, ${-y}px)`;
  });
  