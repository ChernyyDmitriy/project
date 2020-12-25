function start(cells) {
	let i = 0;	// Счётчик ходов
	for (let cell of cells) {
		cell.addEventListener('click', function step() { // Вешается функция step() на клик
			this.innerHTML = ['X', 'O'][i % 2]; //  Вывод X/O в зависимости от хода. Нечётные - X, Чётные - О
			this.removeEventListener('click', step); // Убирает событие у заполненной ячейки
			if (isVictory(cells)) { // Условие выигрыша.  isVictory(cells) == true
				alert("Победили"+this.innerHTML); // выводим имя победителя
			} else if (i == 8) { // Условие ничьи. Если все ячейки заполнены и нет победной комбинации.
                alert('Ничья')
            }
			i++; 
		});
    }
}
	function isVictory(cells) { 
	let combs = [ // комбинации выигрыша
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let comb of combs) {
		if (    // Проверка строк/столбиков и диагоналей на наличие выигрышной комбинации
			cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
			cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
			cells[comb[0]].innerHTML != ''
		) {
			return true;
		}
	}
	return false;
	
	}
	let cells = document.querySelectorAll('#field td') // Выбор ячеек таблицы #field
	start(cells)