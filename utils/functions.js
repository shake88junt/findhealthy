import confetti from "canvas-confetti";

export const shootFireworks = () => {
  const duration = 15 * 300;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.2, 0.4), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};

export const capitalize = (string) => {
  let stringRes = string.split('');
  stringRes[0] = stringRes[0].toUpperCase();
  return stringRes.join('');
}

export const getHours = (hours) => {
  let timezone;
  let [hoursSplit, minutes] = hours.split(':');
  hoursSplit = Number(hoursSplit);
  if (Number(hoursSplit) < 12) {
    timezone = 'AM';
  } else {
    timezone = 'PM';
    if (hoursSplit == 12) {
    } else if (hoursSplit == 24) {
      hoursSplit = 12;
      timezone = 'AM';
    } else {
      hoursSplit = hoursSplit - 12;
    }
  }

  return `${hoursSplit}:${minutes} ${timezone}`;
}