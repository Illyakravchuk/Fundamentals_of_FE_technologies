const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

const getContrastingTextColor = (hexColor) => {
  const cleanedHex = hexColor.replace('#', '');
  const [red, green, blue] = cleanedHex.match(/.{2}/g).map(channel => parseInt(channel, 16));
  const yiq = (red * 299 + green * 587 + blue * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};

const handleColorChange = (element) => {
  const newBackgroundColor = generateRandomColor();
  element.style.backgroundColor = newBackgroundColor;
  element.style.color = getContrastingTextColor(newBackgroundColor);
};

document.addEventListener('DOMContentLoaded', () => {
  const firstElement = document.getElementById('university');
  const secondElement = document.querySelector('#hobby');

  firstElement.addEventListener('click', () => handleColorChange(firstElement));
  secondElement.addEventListener('click', () => handleColorChange(secondElement));
});
