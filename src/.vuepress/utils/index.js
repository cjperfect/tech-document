const path = require("path");
const file = require("fs");

/**
 *
 * @param {*} dirName 文件夹地址
 * @param {*} subCatalog 子文件夹地址
 * @returns
 */
function readFile(dirName, subCatalog) {
  const dir = path.resolve(__dirname, `../../${dirName}`);

  const files = file.readdirSync(dir);

  const filenameList = [];

  files.forEach((name) => {
    const n = name.split(".");
    if (n[1] !== "md") return;
    if (n[0] === "README") {
      filenameList.unshift(subCatalog ? subCatalog : "");
    } else {
      filenameList.push(subCatalog ? subCatalog + n[0] : n[0]);
    }
  });

  return filenameList;
}

module.exports = {
  readFile,
};
