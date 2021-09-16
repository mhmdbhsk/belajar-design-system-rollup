const enum EnumTest {
  VALUE_1 = 1,
  VALUE_2 = 2,
}

const test = (): string => {
  const abc = [EnumTest.VALUE_1, EnumTest.VALUE_2];
  if (abc[0] === EnumTest.VALUE_1) {
    return "test1";
  } else {
    return "test2";
  }
};

console.log(test);

export * from "./components";
export * from "./hooks";
