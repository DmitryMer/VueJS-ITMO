let webStore = new Vue({
	el:'#app',
	data:{
		sitename: 'Оставьте комментарии',
		comment:{
			url: 'https://mir-avatarok.3dn.ru/_si/0/42881144.jpg',
			title: 'Новые комментарии :',
			name: 'Инна', 
			surname: 'Петрова',
			email: 'inna-petrova@yandex.ru',
			time: '25 минут назад',
			age: 25
		}
	},

	filters: {
		ages: function(value){
			return value + ' лет';
		}		
	}
	
});