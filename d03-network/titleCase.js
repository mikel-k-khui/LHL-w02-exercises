
const titleCase = (str) => {
  if (str === "") return "";
  let input = str.split(" ");
  for (let check in input) input[check] = input[check][0].toUpperCase() + input[check].substr(1).toLowerCase();
  return input.join(" ");
}

console.log(`${titleCase("this is an example")} should equal "This Is An Example"`);
console.log(`${titleCase("test")} should equal "Test"`);
console.log(`${titleCase("i r cool")} should equal "I R Cool"`);
console.log(`${titleCase("WHAT HAPPENS HERE" )} should equal "What Happens Here"`);
console.log(`${titleCase("" )} should equal ""`);
console.log(`${titleCase("A" )} should equal "A"`);