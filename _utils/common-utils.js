function slugify(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === " ") {
      result += "-";
    } else {
      result += char.toLowerCase();
    }
  }
  return result;
}

export { slugify };
