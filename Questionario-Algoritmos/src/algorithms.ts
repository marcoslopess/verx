//ALGORITMO 1
export function checkNumber(): string[] {
  const results: string[] = [];

  for (let i = 0; i <= 16; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("baz");
    } else if (i % 3 === 0) {
      results.push("foo");
    } else if (i % 5 === 0) {
      results.push("bar");
    } else {
      results.push(i.toString());
    }
  }

  results.forEach((result) => console.log(result));

  return results;
}

checkNumber();

//ALGORITMO 2
export function countStrings(strings: string[]): Record<string, number> {
  const map: Map<string, number> = new Map();

  strings.forEach((str) => {
    const lowerCaseStr = str.toLowerCase();
    map.set(lowerCaseStr, (map.get(lowerCaseStr) || 0) + 1);
  });

  const result: Record<string, number> = {};
  strings.forEach((str) => {
    const lowerCaseStr = str.toLowerCase();
    if (result[lowerCaseStr] === undefined) {
      result[lowerCaseStr] = map.get(lowerCaseStr) || 0;
    }
  });

  for (const [key, value] of Object.entries(result)) {
    console.log(`${key}=${value}`);
  }
  return result;
}

countStrings(["PaTiNeTe", "SKATE", "Patinete", "BicicletA"]);
