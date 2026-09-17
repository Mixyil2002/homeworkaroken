// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

let person = {
  // name: "Mikhail",
  // age: 24,
  // isProgrammer: true,
  // value: 0,
};
console.log(person);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если  объект пуст - верните true, в противном случае false.

function isEmpty(object) {
  for (const productKey in object) {
    return false;
  }
  return true;
}

console.log(isEmpty(person));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

let task = {
  title: "Купить продукты",
  description: "Купить молоко,хлеб и яйца",
  isCompleted: false,
};

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}

const updatedTask = cloneAndModify(task, {
  title: "Купить продукты и приготовить завтрак",
  isCompleted: true,
});

for (let key in updatedTask) {
  if (Object.prototype.hasOwnProperty.call(updatedTask, key)) {
    console.log(`${key}: ${updatedTask[key]}`);
  }
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const callAllMethods = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
};

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};
callAllMethods(myObject);
