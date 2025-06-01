const text = "second betta milk Milka vendetta leptop pinacolada think phillips sofa barbaris";
const pattern = /\b[^Aa\s]{6,}\b/g; 
// \b - для пошуку саме окремого слова, [^Aa\s] - будь-який символ крім великої А та малої літери а, та крім пробілу, {6,} - шімть або більше символів, g - глобальний пошук по всім словам

const result = text.match(pattern);
console.log(result); // виведе такі значення:'second', 'leptop', 'phillips']