let myArray = [
    {
        name: 'Jose',
        type: 'male'
    },
    {
        name: 'Manuela',
        type: 'female'
    }
];

let males = myArray.filter(item => item.type === 'male');
console.log(males);
