// Function to change the language
export const isPinComplex = (text: string): boolean => {
  if (/(\d)\1{2,}/.test(text)) return false;
  for (let i = 0; i < text.length - 2; i++) {
    if (
      Number(text[i]) === Number(text[i + 1]) - 1 &&
      Number(text[i + 1]) === Number(text[i + 2]) - 1
    ) {
      return false;
    }
    if (
      Number(text[i]) === Number(text[i + 1]) + 1 &&
      Number(text[i + 1]) === Number(text[i + 2]) + 1
    ) {
      return false;
    }
  }
  return true;
};

// Utility function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
