window.addEventListener('load', function() {

	let step = 0;// смена хода между игроками
	let values = ['X', '0'];// крестик и нолик
	let finalResult = ['Вы не дали боту выиграть - поражение', 'Ура! Бот Победил', 'Ничья'];
	let hasWinner = false;
	let currentStep = 0;// текущий ход от начала игры
	let maxStep = 9;
	let end = false;
	let cells = document.querySelectorAll('.item__cell');// ячейки игры
	let outResult = document.querySelector('h2');// вывод результата игры

	document.querySelector('.container').addEventListener('click', function(event) {
		// проверка на нажатие самой ячейки
		if(event.target.classList.contains('item__cell')) {
			// проверка на конец игры
			if(end == true) {
				// перезапуск игры
				for(let i = 0; i < cells.length; i++) {
					cells[i].innerHTML = '';
					cells[i].classList.remove('item__cell_selected');
				}

				step = 0;
				hasWinner = false;
				step = 0;
				currentStep = 0;
				end = false;
				outResult.innerHTML = '';
				return false;
			} else {
				//установка значений ячейки и шаг+
				if(!event.target.classList.contains('item__cell_selected')) {
					event.target.classList.add('item__cell_selected');
					event.target.innerHTML = values[step];
					currentStep++;

					if(step == 1) {
						step = 0;
					} else {
						step++;
					}
					// Проверка результата игры
					checkWinner();

					// ход бота
					// нужно проверить, если игра завершилась, то бот не ходит
					if(!end == true) {
						stepBot();
					}
					// ход бота
				}

			}

		}

	});

	function stepBot() {
		// получаем случайное число и после заполняем ячейку свободную, если такая заполнина
		// тогда ещё раз запускаем функцию
		let rand = getRandomInt(0, 8);

		if(cells[rand].classList.contains('item__cell_selected')) {
			stepBot();
		} else {
			cells[rand].classList.add('item__cell_selected');
			cells[rand].innerHTML = values[step];
			currentStep++;

			if(step == 1) {
				step = 0;
			} else {
				step++;
			}
			// Проверка результата игры
			checkWinner();
		}
	}
	// функация получает рандомное число
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function checkWinner() {
		// Проверка по горизонтали
		
		if(cells[0].innerHTML == 'X' && cells[1].innerHTML == 'X' && cells[2].innerHTML == 'X') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[0] + "!";
		}

		if(cells[0].innerHTML == '0' && cells[1].innerHTML == '0' && cells[2].innerHTML == '0') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[1] + "!";
		}

		if(cells[3].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[5].innerHTML == 'X') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[0] + "!";
		}

		if(cells[3].innerHTML == '0' && cells[4].innerHTML == '0' && cells[5].innerHTML == '0') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[1] + "!";
		}

		if(cells[6].innerHTML == 'X' && cells[7].innerHTML == 'X' && cells[8].innerHTML == 'X') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[0] + "!";
		}

		if(cells[6].innerHTML == '0' && cells[7].innerHTML == '0' && cells[8].innerHTML == '0') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[1] + "!";
		}
		// Проверка по горизонтали

		// Проверка по вертикали
		if(cells[0].innerHTML == 'X' && cells[3].innerHTML == 'X' && cells[6].innerHTML == 'X') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[0] + "!";

		}

		if(cells[0].innerHTML == '0' && cells[3].innerHTML == '0' && cells[6].innerHTML == '0') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[1] + "!";
		}

		if(cells[1].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[7].innerHTML == 'X') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[0] + "!";
		}

		if(cells[1].innerHTML == '0' && cells[4].innerHTML == '0' && cells[7].innerHTML == '0') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[1] + "!";

		}

		if(cells[2].innerHTML == 'X' && cells[5].innerHTML == 'X' && cells[8].innerHTML == 'X') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[0] + "!";
		}

		if(cells[2].innerHTML == '0' && cells[5].innerHTML == '0' && cells[8].innerHTML == '0') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[1] + "!";
		}
		// Проверка по вертикали

		// Проверка по диагонали
		if(cells[0].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[8].innerHTML == 'X') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[0] + "!";
		}

		if(cells[0].innerHTML == '0' && cells[4].innerHTML == '0' && cells[8].innerHTML == '0') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[1] + "!";
		}

		if(cells[2].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[6].innerHTML == 'X') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[0] + "!";
		}

		if(cells[2].innerHTML == '0' && cells[4].innerHTML == '0' && cells[6].innerHTML == '0') {
			hasWinner = true;
			end = true;
			outResult.innerHTML = finalResult[1] + "!";
		}

		// Проверка по диагонали

		// Проверка по ничью
		if(currentStep == maxStep && hasWinner == false) {
			end = true;
			outResult.innerHTML = finalResult[2] + "!";
		}
		// Проверка по ничью
	}

});