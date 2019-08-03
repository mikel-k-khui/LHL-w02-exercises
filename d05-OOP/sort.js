/*
* Write a sorting function (sometimes called a custom comparator), that sorts the above array first 
* by the name ascending alphabetically, and in cases where the names are equal sort by descending age.
*/
const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

const sortFunction = function(studentsArray) {
  let sortedNameOlder = [];
  sortedNameOlder = studentsArray
    .sort(function(item1, item2){
      if (item1.name > item2.name) {
        return 1;
      }
      if (item1.name < item2.name) {
        return -1;
      }
    })
    .sort(function(item1, item2) {
      if (item1.name === item2.name) {
        return item2.age - item1.age;
      }
    });
  return sortedNameOlder;
};

console.log(sortFunction(students));