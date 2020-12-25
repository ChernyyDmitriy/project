let userSize = prompt("Choice field size", 3);
let table = document.getElementById('field');
let colors = ['red', 'green', 'blue'];
let stepCount = 0;

function getRandomInt(max) {
	return Math.floor(Math.random() * (max + 1)); // Возвращает рандомное числовое значение
}

function random(arr) {
	return arr[getRandomInt(arr.length - 1)];	// Возвращает рандомное числовое значение
}

function createField(size){	// Функция создания клеток
	for (let tblRow = 0; tblRow < size; tblRow++){ // Строки
		let tr = document.createElement('tr'); // Строки
		for (let tblColl = 0; tblColl < size; tblColl++){	// Столбики
			let td = document.createElement('td'); // Столбики
			td.classList.add(random(colors)) // Добавляется рандомный класс из массива colors
			td.addEventListener("click", step) // Добавляется собтыие функции по клику
			tr.appendChild(td); // К строкам добавляются столбики
		}
	table.appendChild(tr); // К табице добавляются строки со столбиками
	}
}

function step() { // Функция смены цвета
	stepCount += 1;
	let color = colors.indexOf(this.classList.item(0))
	if (color == colors.length-1) this.classList.add(colors[0]) // Условие для многократного переглючения цвета
	else this.classList.add(colors[color+1]) // Смена цвета
	this.classList.remove(colors[color])	// Сброс цвета
	if (isVictory(cells)) { // Условие победы
		alert("Победа, количество шагов: "+ stepCount);
	}
}

function isVictory(cells) { // Функция проверки победы 
	let cellsColor = [];
	for (let cell of cells) cellsColor.push(cell.classList.item(0)); // Каждый элемент массива cells добавляется в массив cellsColor
	for (let i = 0; i < cellsColor.length; i++) {
        while(cellsColor[i] != cellsColor[0]) return false;
    }
	return true; // Возвращает true в случае всех ячеек с одним цветом
}
createField(userSize)
let cells = document.querySelectorAll('td');