const map = new Map();
console.log(map);

map.set(1, "satu");
map.set(true, "boolean");
map.set({}, "object");
map.set("nama", "ucup");

console.log(map);

console.log(map.get(1));
console.log(map.get("nama"));
console.log(map.get(true));

console.log(map.has(true));

map.clear();
console.log(map);
