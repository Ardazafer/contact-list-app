const getInitials = (textString) => {
  if (!textString) return '';
  const textArray = textString.trim().split(' ');
  return textArray.length <= 1
    ? textArray[0].charAt(0)
    : textArray[0].charAt(0) + textArray[textArray.length - 1].charAt(0);
};

export default getInitials;
