# CodeCamp #9
## Chanakan Punyo 
โจทย์
2. การทำงานของ code ดังกล่าวจะได้อะไรออกมา
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?

