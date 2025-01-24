import styles from './app.module.css';
import { useState } from 'react';
import { getDateFormat } from './MyComponent.jsx';

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueVaild, setIsValueVaild] = useState(false);
	// const newDate = new Date();
	// const time =
	// 	newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds();
	// const date = new Date().toISOString().slice(0, 10) + '' + time;

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение:');
		console.log(promptValue);
		if (promptValue && promptValue.length >= 3) {
			setValue(promptValue);
			setError('');
			setIsValueVaild(true);
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
			setIsValueVaild(false);
		}
	};
	const onAddButtonClick = () => {
		if (value && isValueVaild) {
			const updatedList = [
				...list,
				{ id: Date.now(), value, date: getDateFormat() },
			];
			setList(updatedList);
			setValue('');
			setError('');
			setIsValueVaild(false);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<div className={styles.app}>
					<h1 className={styles['page-heading']}>Ввод значения</h1>
					<p className={styles['no-margin-text']}>
						Текущее значение <code>value</code>: "{value}"
						<output className={styles['current-value']}></output>"
					</p>
					{error && <div className={styles.error}>{error}</div>}
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={onInputButtonClick}>
							Ввести новое
						</button>
						<button
							className={styles.button}
							onClick={onAddButtonClick}
							disabled={!isValueVaild}
						>
							Добавить в список
						</button>
					</div>
					<div className={styles['list-container']}>
						<h2 className={styles['list-heading']}>Список:</h2>
						{list.length === 0 ? (
							<p className={styles['no-margin-text']}>
								Нет добавленных элементов
							</p>
						) : (
							<ul className={styles.list}>
								{list.map((item) => (
									<li key={item.id} className={styles['list-item']}>
										{item.value} {item.date}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</header>
		</div>
	);
}
export default App;
