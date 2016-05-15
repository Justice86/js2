var arr = [];
for (var i = 0; i < 5; i++) {
    arr[i] = prompt('Введите имя');
}

console.log(arr);

var name = prompt('Введите Ваше имя');

console.log('Вас зовут ' + name);

for (var i = 0; i < 5; i++) {
    if (arr[i] == name) {
        alert('Вы успешно вошли ' + name);
        break;
    }
}

if ( i>=5 ){
    alert('Такого имени не существует, извините');
};