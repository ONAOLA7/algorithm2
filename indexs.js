function dot_product(v1, v2) {
  let ps = 0;

  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }

  return ps;
}

function check_orthogonal_pairs(numPairs) {
  for (let i = 0; i < numPairs; i++) {
    const v1 = [];

    const v2 = [];

    for (let j = 0; j < v1.length; j++) {
      v1[j] = parseFloat(prompt(`Enter component ${j + 1} of vector ${i + 1}`));
    }

    for (let j = 0; j < v2.length; j++) {
      v2[j] = parseFloat(prompt(`Enter component ${j + 1} of vector ${i + 1}`));
    }

    const result = dot_product(v1, v2);

    if (result === 0) {
      console.log(`Vectors ${v1} and ${v2} are orthogonal.`);
    } else {
      console.log(`Vectors ${v1} and ${v2} are not orthogonal.`);
    }
  }
}

const numPairs = parseInt(prompt("Enter the number of vector pairs:"));

check_orthogonal_pairs(numPairs);
