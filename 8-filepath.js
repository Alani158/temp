const Path = require("path");
console.log(Path.sep);

const filepath = Path.join("/content", "subfolder", "test.txt");
console.log(filepath);
const base = Path.basename(filepath);
console.log(base);
