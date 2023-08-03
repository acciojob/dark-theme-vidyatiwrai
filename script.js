//your code here

function swapTheme() {
  const appDiv = document.getElementById('app');
  const swapButton = document.getElementById('swap');

  if (appDiv.classList.contains('day')) {
    // If current theme is day, switch to night theme
    appDiv.classList.remove('day');
    appDiv.classList.add('night');

    swapButton.classList.remove('button_day');
    swapButton.classList.add('night');
  } else {
    // If current theme is night, switch to day theme
    appDiv.classList.remove('night');
    appDiv.classList.add('day');

    swapButton.classList.remove('night');
    swapButton.classList.add('button_day');
  }
}
