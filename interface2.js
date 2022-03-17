"use strict";
function hello2(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
hello2({ name: "Mark, age: 39" });
hello2({ name: "Mark" });
const p = {
    name: "snake",
};
hello2(p);
