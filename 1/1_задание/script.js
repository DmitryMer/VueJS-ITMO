let webStore = new Vue({
	el:'#app',
	data:{
		sitename: 'PC/City - Интернет-магазин компьютерной техники',
		product:{
			url:'https://ttt.ru/components/com_virtuemart/shop_image/product/_______________H_5b277152a00db.jpg',
			id: '1153661',
			title: 'Ноутбук Hewlet Packard',
			description: 'Наши специалисты помогут купить ноутбук HP по выгодным ценам. Сделать заказ товара можно онлайн, или позвонив по телефону указанному на сайте.',
			model: 'ProBook 430 G6',
			color: 'Черный',
			price: 755
		}
	},
	filters: {
		formatPrice: function(value){
			return value + ' ' + String.fromCharCode(8381);
		}		
	}
	
});