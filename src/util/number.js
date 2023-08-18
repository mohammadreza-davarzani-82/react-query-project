const persianNumbers = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
];
const arabicNumbers = [
  /٠/g,
  /١/g,
  /٢/g,
  /٣/g,
  /٤/g,
  /٥/g,
  /٦/g,
  /٧/g,
  /٨/g,
  /٩/g,
];
const englishNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export function fixNumbers(str) {
  if (typeof str === "string") {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
}

export function isNumber(chr) {
  if (
    persianNumbers.indexOf(chr) >= 0 ||
    arabicNumbers.indexOf(chr) >= 0 ||
    englishNumber.indexOf(chr) >= 0
  ) {
    return true;
  }
  return false;
}
