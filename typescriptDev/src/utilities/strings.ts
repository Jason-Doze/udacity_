// const concat = (str1, str2) => {
//   return str1 + str2;
// };

const concat = (str1: string, str2: string): string => {
  return str1 + str2;
};

// const capitalize = (str) => {
//   const newStr = str
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.substr(1))
//     .join(" ");
//   return newStr;
// };

const capitalize = (str: string): string => {
  const newStr = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
  return newStr;
};

// const upperCase = (str) => {
//   return str.toUpperCase();
// };

const upperCase = (str: string): string => {
    return str.toUpperCase();
};


// const lowerCase = (str) => {
//   return str.toLowerCase();
// };

const lowerCase = (str: string): string => {
  return str.toLowerCase();
};

export default {
  concat,
  capitalize,
  upperCase,
  lowerCase,
};
