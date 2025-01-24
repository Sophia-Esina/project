export const getDateFormat = (props) => {
    const newDate = new Date();
	const time = newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds();
	const date = new Date().toISOString().slice(0, 10) + '' + time;

    return date
}
