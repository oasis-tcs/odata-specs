module.exports = { compareSectionNumbers };

function compareSectionNumbers(a, b) {
  // Split section numbers into parts
  const partsA = a.split(" ")[0].split(".");
  const partsB = b.split(" ")[0].split(".");

  // Compare each part of the section numbers
  for (let i = 0; i < Math.min(partsA.length, partsB.length); i++) {
    const partA = parseInt(partsA[i]);
    const partB = parseInt(partsB[i]);

    //TODO: if both partA and partB are NaN, compare lexicographically

    if (partA < partB) {
      return -1;
    } else if (partA > partB) {
      return 1;
    } else if (isNaN(partA) || isNaN(partB)) {
      if (partsA[i] < partsB[i]) return -1;
      else if (partsA[i] > partsB[i]) return 1;
    }
  }

  // If all parts are equal, compare the lengths of the section numbers
  return partsA.length - partsB.length;
}
