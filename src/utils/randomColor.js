const randomColor = () => {
  const randomHue = Math.round(360 * Math.random());
  return `hsl(${randomHue}, 75%, 45%)`;
};

export default randomColor;
