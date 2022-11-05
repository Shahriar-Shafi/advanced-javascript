const students = [
    {id:21, name:"Shahzad"},
    {id:42,name:"Hassan Banna"},
    {id:45,name:"Hassan Mehedi"},
    {id:71,name:"Dip jol"}
]

const names = students.map(s => s.name );
const ids = students.map(s => s.id );
const bigger = students.filter(s=> s.id>40);
const biggerOne = students.find(s=> s.id>40);
console.log(biggerOne);

