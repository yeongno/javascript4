"use strict";
console.log(Symbol('foo') === Symbol("foo"));
const sym = Symbol();
const obj = {
    [sym]: "value",
};
obj[sym];
