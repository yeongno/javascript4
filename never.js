"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) { }
}
if (typeof a !== 'string') {
    a;
}
// type ObjectIndexable = Indexable<{}>;
const b = '';
