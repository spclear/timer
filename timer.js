function configureTimer(timerSelector, deadline) {
  const timerNode = document.querySelector(timerSelector);
  const timerInterval = setInterval(() => {
    updateTimer(timerNode, deadline, timerInterval);
  }, 1000);

  updateTimer(timerNode, deadline, timerInterval);

  // only functions below

  function calcTimeRemaining(deadline) {
    const timeRemaining = Date.parse(deadline) - Date.parse(new Date());

    return {
      total: timeRemaining,
      days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor(timeRemaining / (1000 * 60 * 60) % 24),
      minutes: Math.floor(timeRemaining / (1000 * 60) % 60),
      seconds: Math.floor(timeRemaining / 1000 % 60)
    }
  }

  function displayTimer(node, days = 0, hours = 0, minutes = 0, seconds = 0) {
    setTextContent(node, '#days', withZero(days));
    setTextContent(node, '#hours', withZero(hours));
    setTextContent(node, '#minutes', withZero(minutes));
    setTextContent(node, '#seconds', withZero(seconds));
  }

  function updateTimer(node, deadline, timerInterval) {
    const timeRemaining = calcTimeRemaining(deadline);
    const { days, hours, minutes, seconds } = timeRemaining;

    if (timeRemaining.total <= 0) {
      displayTimer(node);
      clearInterval(timerInterval);
      return;
    }

    displayTimer(node, days, hours, minutes, seconds);
  }

  function withZero(number) {
    if (number >= 0 && number < 10) {
      return '0' + number;
    }
    return number;
  }

  // additional function in case there is no node for days/minutes/hours/seconds

  function setTextContent(node, selector, value) {
    const pageNode = node.querySelector(selector);
    if (pageNode) {
      pageNode.textContent = value;
    }
  }
}

export default configureTimer;