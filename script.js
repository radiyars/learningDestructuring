//?_1_У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = {
	name: "John",
	years: 30
};

let { name, years: age, isAdmin: isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);
console.log('------------------------------');


//? У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};


function topSalary(salaries) {
	let nameRich = null;
	let salaryRich = 0;
	for (let value of Object.entries(salaries)) { //*Вариат: for(const [name, salary] of Object.entries(salaries)) {
		let [name, salary] = value;
		if (salary > salaryRich) {
			nameRich = name;
			salaryRich = salary;
		}
	}
	return nameRich;
}



console.log(topSalary(salaries));