const users = [{
    id: 1,
    name: "Älex"
}, {
    id: 2,
    name: "Sam"
}];

const userNamesArray = users.map(user => user.name);
console.log (userNamesArray);

// const csv = userNamesArray.join(", ");
// console.log (csv);

// const csv = users.map (user => user.name).join(", ");
// console.log (csv);

