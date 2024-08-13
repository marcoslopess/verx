import { checkNumber, countStrings } from "../src/algorithms";

describe("checkNumber", () => {
  it("deve retornar o array correto de resultados", () => {
    const expected = [
      "baz",
      "1",
      "2",
      "foo",
      "4",
      "bar",
      "foo",
      "7",
      "8",
      "foo",
      "bar",
      "11",
      "foo",
      "13",
      "14",
      "baz",
      "16",
    ];
    expect(checkNumber()).toEqual(expected);
  });
});

describe("countStrings", () => {
  it("deve contar corretamente as strings ignorando capitalização", () => {
    const strings = ["PaTiNeTe", "SKATE", "Patinete", "BicicletA"];
    const expected = {
      skate: 1,
      patinete: 2,
      bicicleta: 1,
    };
    expect(countStrings(strings)).toEqual(expected);
  });
});
