import fs from "fs";
import util from "util";

const promisifiedReadFile = util.promisify(fs.readFile);

async function main() {
  const data = await promisifiedReadFile("package.json");
  const fileContent = data.toString();
  console.log(fileContent);
}

main();
