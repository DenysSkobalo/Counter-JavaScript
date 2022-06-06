const counter = document.querySelector('#counter');
const btns = document.querySelectorAll('.btn');
let count = 0;

// Метод forEach() виконує зазначену функцію один раз для кожного елемента в масиві
btns.forEach((btn) => {
	btn.addEventListener('click', (i) => {
		// event.currentTarget используется, когда один и тот же обработчик события присваивается нескольким элементам
		// classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
		const styles = i.currentTarget.classList;

		if (styles.contains('increase')) {
			count++;
		} else if (styles.contains('decrease')) {
			count--;
		} else {
			count = 0;
		}

		if (count > 0) {
			counter.style.color = 'green'
		}
		if (count < 0) {
			counter.style.color = 'red'
		}
		if (count === 0) {
			counter.style.color = 'grey'
		}

		counter.textContent = count;
	});
});