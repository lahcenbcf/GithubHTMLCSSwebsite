console.log('hello world');
const person=new Array('ahmed','Ali' ,'Dooaa' ,'moha');
console.log(person);
console.log(person[1])
for(let i=0 ;i<=person.length ;i++){
    console.log(person[i])
}
person.push('taQwa');
console.log(person);
person.pop();
console.log(person)
person.unshift('Hocine')
console.log(person)

const table=[
    {
        Note1:12,
        city:'chlef',
    },
   {
        Note1:17,
        city:'constantine',
    },
     {
        Note1:15,
        city:'Adrar',
    }
]
let i=0;
while(i<=table.length){
    console.log(table[i]);
    i++;
}
console.log(table[2].city)
let bool=true
while(bool){
    console.log(table[i]);
    i++;
}
table.forEach(function()){
    console.log(table)
};


