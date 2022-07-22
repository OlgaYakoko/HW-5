//             // task#1
const obj = {};
obj.name = "John";
obj.surname = "Smith";
obj.name = "Pete";
delete obj.name;
console.log(obj);

            // task#2
const user = {name: 'John'};
user.name = 'Pete';  
console.log(user);

// user хранит ссылку на обьект, а содержимое можно менять

//             // task#3
const salarieses = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sum(){
    let result = 0;
    for(let selary in salarieses){
        let itemSalarieses = salarieses[selary];
        result += itemSalarieses;
    }
    return result;
}

console.log(sum());
