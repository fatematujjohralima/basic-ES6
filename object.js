const king = { name: 'Mufasa', age: 55, kingdom: 'Pride Lands' };
const keys = Object.keys(king);
const values = Object.values(king)
const entries = Object.entries(king);
console.log(entries);


// Object.freeze(king);   value push update konotai kora jabe na, delete o kora jabe na, add o kora jabe na
// Object.seal(king);   value update kora jabe kintu push kora jabe na

Object.seal(king);
delete king.age;
delete king.kingdom;
king.queen = 'Sarabi';
king.name = 'King Simba';
console.log(king);