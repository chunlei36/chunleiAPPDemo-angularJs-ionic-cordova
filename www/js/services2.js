angular.module('starter.services', [])

.factory('Me', function() {
		// Might use a resource here that returns a JSON array

		// Some fake testing data
		var chats = [{
			id: 0,
			name: 'Ben Sparrow',
			lastText: 'You on your way?',
			face: 'img/ben.png'
		}, {
			id: 1,
			name: 'Max Lynx',
			lastText: 'Hey, it\'s me',
			face: 'img/max.png'
		}, {
			id: 2,
			name: 'Adam Bradleyson',
			lastText: 'I should buy a boat',
			face: 'img/adam.jpg'
		}, {
			id: 3,
			name: 'Perry Governor',
			lastText: 'Look at my mukluks!',
			face: 'img/perry.png'
		}, {
			id: 4,
			name: 'Mike Harrington',
			lastText: 'This is wicked good ice cream.',
			face: 'img/mike.png'
		}];

		return {
			all: function() {
				return chats;
			},
			remove: function(me) {
				chats.splice(chats.indexOf(me), 1);
			},
			get: function(meId) {
				for(var i = 0; i < chats.length; i++) {
					if(chats[i].id === parseInt(meId)) {
						return chats[i];
					}
				}
				return null;
			}
		};
	})
	.factory('goods', function() {
		//推荐
		var goods00 = [{
			pid1: 'shop1',
			img: 'img/homeimg/shop1.jpg',
			h2: '桥餐厅精致双人餐',
			span: '168元/2位',
			s: '￥283'
		}, {
			pid1: 'shop2',
			img: 'img/homeimg/shop2.jpg',
			h2: 'Urban Thai 妈咪料理',
			span: '188元/2位',
			s: '￥265'
		}, {
			pid1: 'shop3',
			img: 'img/homeimg/shop1.jpg',
			h2: '桥餐厅精致双人餐',
			span: '168元/2位',
			s: '￥283'
		}, {
			pid1: 'shop4',
			img: 'img/homeimg/shop2.jpg',
			h2: 'Urban Thai 妈咪料理',
			span: '188元/2位',
			s: '￥265'
		}]

		//	今日推荐
		var goods1 = [{
				pid1: 'shop1',
				img: 'img/homeimg/shop1.jpg',
				h2: '桥餐厅精致双人餐',
				span: '168元/2位',
				s: '￥283'
			}, {
				pid1: 'shop2',
				img: 'img/homeimg/shop2.jpg',
				h2: 'Urban Thai 妈咪料理',
				span: '188元/2位',
				s: '￥265'
			}, {
				pid1: 'shop3',
				img: 'img/homeimg/shop1.jpg',
				h2: '桥餐厅精致双人餐',
				span: '168元/2位',
				s: '￥283'
			}, {
				pid1: 'shop4',
				img: 'img/homeimg/shop2.jpg',
				h2: 'Urban Thai 妈咪料理',
				span: '188元/2位',
				s: '￥265'
			}, {
				pid1: 'shop5',
				img: 'img/homeimg/shop1.jpg',
				h2: '桥餐厅精致双人餐',
				span: '168元/2位',
				s: '￥283'
			}, {
				pid1: 'shop6',
				img: 'img/homeimg/shop2.jpg',
				h2: 'Urban Thai 妈咪料理',
				span: '188元/2位',
				s: '￥265'
			}

		]

		//			<!--口碑推荐-->

		var goods2 = [{
				pid1: 'shop7',
				img: 'img/homeimg/shop1.jpg',
				h2: '桥餐厅精致双人餐',
				span: '168元/2位',
				s: '￥283'
			}, {
				pid1: 'shop8',
				img: 'img/homeimg/shop2.jpg',
				h2: 'Urban Thai 妈咪料理',
				span: '188元/2位',
				s: '￥265'
			}, {
				pid1: 'shop9',
				img: 'img/homeimg/shop1.jpg',
				h2: '桥餐厅精致双人餐',
				span: '168元/2位',
				s: '￥283',
			}, {
				pid1: 'shop10',
				img: 'img/homeimg/shop2.jpg',
				h2: 'Urban Thai 妈咪料理',
				span: '188元/2位',
				s: '￥265'
			}, {
				pid1: 'shop11',
				img: 'img/homeimg/shop1.jpg',
				h2: '桥餐厅精致双人餐',
				span: '168元/2位',
				s: '￥283'
			}, {
				pid1: 'shop12',
				img: 'img/homeimg/shop2.jpg',
				h2: 'Urban Thai 妈咪料理',
				span: '188元/2位',
				s: '￥265'
			}

		]

		return {
			goods00: function() {
				return goods00;
			},
			goods1: function() {
				return goods1;
			},
			goods2: function() {
				return goods2;
			},
			get: function(shopID) {
				for(var i = 0; i < goods1.length; i++) {
					if(goods1[i].pid1 == shopID) {
						return goods1[i];
					} else if(goods2[i].pid1 == shopID) {
						return goods2[i];
					}
				}
				return null;
			}

		};
	})
//、、、、、、、、、、、
.factory('Content', function() {
	// Might use a resource here that returns a JSON array

	// Some fake testing data
	var contents = [{
		price: '188元/2位',
		lateprice: '￥283',
		yishop: '￥125',
		nearID: 'near1',
		url: 'img/nearImages/near_11.jpg',
		url2: 'img/nearImages/near_31.jpg',
		
		p1: 'Q Mex Bar & Grill 双人餐',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '',
		p4: '郑州市二七区德化街（铂郡北区8号院5号楼底商）...'
	}, {
		nearID: 'near2',
		price: '188元/2位',
		lateprice: '￥285',
		url: 'img/nearImages/near_21.jpg',
		url2: 'img/nearImages/near_41.jpg',
		p1: '瑞吉酒店天宝阁周六早午餐',
		p2: '世界名厨协会荣誉会长担任主厨',
		p3: '整本菜单的精品无限吃，酒水无限享',
		p4: '高新区1732m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥287',
		url: 'img/nearImages/near_31.jpg',
		url2: 'img/nearImages/near_51.jpg',
		p1: 'MANDRILL 单人套餐',
		p2: '机车主题餐厅 地道小酒馆',
		p3: '',
		p4: '中原区977m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥290',
		url: 'img/nearImages/near_41.jpg',
		url2: 'img/nearImages/near_61.jpg',
		p1: 'Tiger Pancake House',
		p2: '可享的丰盛单人早餐',
		p3: '',
		p4: '高新区3032m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥270',
		url: 'img/nearImages/near_51.jpg',
		url2: 'img/nearImages/near_71.jpg',
		p1: ' BLT 美式休闲西餐厅',
		p2: '享受正宗的美式风味',
		p3: '',
		p4: '二七区2132m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥247',
		url: 'img/nearImages/near_61.jpg',
		url2: 'img/nearImages/near_81.jpg',
		p1: ' Let is Fries 乐薯',
		p2: '品味酥脆鲜香的英式味道',
		p3: '',
		p4: '高新区1132m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥269',
		url: 'img/nearImages/near_71.jpg',
		url2: 'img/nearImages/near_91.jpg',
		p1: '童年de味道 ',
		p2: '炙热童年经典荟萃双人餐',
		p3: '',
		p4: '中原区512m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥289',
		url: 'img/nearImages/near_81.jpg',
		url2: 'img/nearImages/near_101.jpg',
		p1: ' Pizza RAMO 餐吧',
		p2: '可一次尝到4种口味的拼盘 双人菜单',
		p3: '',
		p4: '高新区3772m'
	}, {
		price: '188元/2位',
		nearID: 'near1',
		lateprice: '￥230',
		url: 'img/nearImages/near_91.jpg',
		url2: 'img/nearImages/near_111.jpg',
		p1: 'LA YUN 经典',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '双人餐',
		p4: '高新区1132m'
	}, {
		price: '188元/2位',
		nearID: 'near1',
		lateprice: '￥256',
		url: 'img/nearImages/near_101.jpg',
		url2: 'img/nearImages/near_111.jpg',
		p1: '格调火锅店',
		p2: '体验纯正「shabushabu」滋味',
		p3: '',
		p4: '金水区1132m'
	}, {
		price: '188元/2位',
		nearID: 'near1',
		lateprice: '￥276',
		url: 'img/nearImages/near_111.jpg',
		url2: 'img/nearImages/near_121.jpg',
		p1: '「高丽参鸡面」两款任选',
		p2: '特别加特色滋补海鲜面',
		p3: '',
		p4: '二七区532m'
	}, {
		price: '188元/2位',
		nearID: 'near1',
		lateprice: '￥289',
		url: 'img/nearImages/near_121.jpg',
		url2: 'img/nearImages/near_131.jpg',
		p1: '东瀛扶桑之味',
		p2: '凤寿司全新单人午餐',
		p3: '',
		p4: '高新区4132m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥300',
		url: 'img/nearImages/near_131.jpg',
		url2: 'img/nearImages/near_151.jpg',
		p1: '在静谧小院里吃私家秘方的传统风味',
		p2: '聚恩园春饼宴多人/素食餐',
		p3: '',
		p4: '高新区1673m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥264',
		url: 'img/nearImages/near_141.jpg',
		url2: 'img/nearImages/near_161.jpg',
		p1: 'Q Mex Bar & Grill 双人餐',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '',
		p4: '中原区5132m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥230',
		url: 'img/nearImages/near_151.jpg',
		url2: 'img/nearImages/near_161.jpg',
		p1: '丰盛烤肉料理',
		p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
		p3: '',
		p4: '高新区3232m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥265',
		url: 'img/nearImages/near_161.jpg',
		url2: 'img/nearImages/near_181.jpg',
		p1: '享用雪龙和牛等多种顶级食材',
		p2: '尚水长廊全天尊享单人餐',
		p3: '',
		p4: '惠济区1132m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥224',
		url: 'img/nearImages/near_171.jpg',
		url2: 'img/nearImages/near_151.jpg',
		p1: '多明哥餐厅双人/四人套餐',
		p2: '酸辣爽口的浓郁墨西哥风味',
		p3: '',
		p4: '高新区2532m'
	}, {
		nearID: 'near1',
		price: '188元/2位',
		lateprice: '￥244',
		url: 'img/nearImages/near_181.jpg',
		url2: 'img/nearImages/near_161.jpg',
		p1: '健康搭配',
		p2: '麦食沙拉单人能量餐',
		p3: '适合轻食爱好者的健康搭配',
		p4: '中原区1832m'
	} ];

//、、、、、、、、、、、、


	var contentOne = [{
		url: 'img/nearImages/near_21.jpg',
		p1: '瑞吉酒店天宝阁周六早午餐',
		p2: '世界名厨协会荣誉会长担任主厨',
		p3: '整本菜单的精品无限吃，酒水无限享',
		p4: '高新区1732m'
	}, {
		url: 'img/nearImages/near_41.jpg',
		p1: 'Tiger Pancake House',
		p2: '可享的丰盛单人早餐',
		p3: '',
		p4: '高新区3032m'
	}, {
		url: 'img/nearImages/near_61.jpg',
		p1: ' Let is Fries 乐薯',
		p2: '品味酥脆鲜香的英式味道',
		p3: '',
		p4: '高新区1132m'
	}, {
		url: 'img/nearImages/near_121.jpg',
		p1: '东瀛扶桑之味',
		p2: '凤寿司全新单人午餐',
		p3: '',
		p4: '高新区4132m'
	}, {
		url: 'img/nearImages/near_51.jpg',
		p1: ' BLT 美式休闲西餐厅',
		p2: '享受正宗的美式风味',
		p3: '',
		p4: '二七区2132m'
	}];
	var contentTwo = [{
		url: 'img/nearImages/near_71.jpg',
		p1: '童年de味道 ',
		p2: '炙热童年经典荟萃双人餐',
		p3: '',
		p4: '中原区5132m'
	}, {
		url: 'img/nearImages/near_81.jpg',
		p1: ' Pizza RAMO 餐吧',
		p2: '可一次尝到4种口味的拼盘 双人菜单',
		p3: '',
		p4: '高新区3772m'
	}, {
		url: 'img/nearImages/near_91.jpg',
		p1: 'LA YUN 经典',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '双人餐',
		p4: '高新区1132m'
	}, {
		url: 'img/nearImages/near_101.jpg',
		p1: '格调火锅店',
		p2: '体验纯正「shabushabu」滋味',
		p3: '',
		p4: '金水区1132m'
	}, {
		url: 'img/nearImages/near_111.jpg',
		p1: '「高丽参鸡面」两款任选',
		p2: '特别加特色滋补海鲜面',
		p3: '',
		p4: '二七区1132m'
	}, {
		url: 'img/nearImages/near_121.jpg',
		p1: '东瀛扶桑之味',
		p2: '凤寿司全新单人午餐',
		p3: '',
		p4: '高新区4132m'
	}, {
		url: 'img/nearImages/near_131.jpg',
		p1: '在静谧小院里吃私家秘方的传统风味',
		p2: '聚恩园春饼宴多人/素食餐',
		p3: '',
		p4: '高新区1673m'
	}, {
		url: 'img/nearImages/near_141.jpg',
		p1: 'Q Mex Bar & Grill 双人餐',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '',
		p4: '中原区5132m'
	}]
	var contentThree = [{
		url: 'img/nearImages/near_131.jpg',
		p1: '在静谧小院里吃私家秘方的传统风味',
		p2: '聚恩园春饼宴多人/素食餐',
		p3: '',
		p4: '高新区1673m'
	}, {
		url: 'img/nearImages/near_141.jpg',
		p1: 'Q Mex Bar & Grill 双人餐',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '',
		p4: '中原区5132m'
	}, {
		url: 'img/nearImages/near_151.jpg',
		p1: '丰盛烤肉料理',
		p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
		p3: '',
		p4: '高新区3232m'
	}, {
		url: 'img/nearImages/near_161.jpg',
		p1: '享用雪龙和牛等多种顶级食材',
		p2: '尚水长廊全天尊享单人餐',
		p3: '',
		p4: '惠济区1132m'
	}, {
		url: 'img/nearImages/near_171.jpg',
		p1: '多明哥餐厅双人/四人套餐',
		p2: '酸辣爽口的浓郁墨西哥风味',
		p3: '',
		p4: '高新区2532m'
	}, {
		url: 'img/nearImages/near_31.jpg',
		p1: 'MANDRILL 单人套餐',
		p2: '机车主题餐厅 地道小酒馆',
		p3: '',
		p4: '中原区977m'
	}, {
		url: 'img/nearImages/near_11.jpg',
		p1: 'Q Mex Bar & Grill 双人餐',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '',
		p4: '高新区3132m'
	}]

	var contentFour = [{
		url: 'img/nearImages/near_31.jpg',
		p1: 'MANDRILL 单人套餐',
		p2: '机车主题餐厅 地道小酒馆',
		p3: '',
		p4: '中原区977m'
	}, {
		url: 'img/nearImages/near_71.jpg',
		p1: '童年de味道 ',
		p2: '炙热童年经典荟萃双人餐',
		p3: '',
		p4: '中原区512m'
	}, {
		url: 'img/nearImages/near_111.jpg',
		p1: '「高丽参鸡面」两款任选',
		p2: '特别加特色滋补海鲜面',
		p3: '',
		p4: '二七区532m'
	}]
	var contentFive = [{
		url: 'img/nearImages/near_31.jpg',
		p1: 'MANDRILL 单人套餐',
		p2: '机车主题餐厅 地道小酒馆',
		p3: '',
		p4: '中原区977m'
	}, {
		url: 'img/nearImages/near_71.jpg',
		p1: '童年de味道 ',
		p2: '炙热童年经典荟萃双人餐',
		p3: '',
		p4: '中原区512m'
	}, {
		url: 'img/nearImages/near_111.jpg',
		p1: '「高丽参鸡面」两款任选',
		p2: '特别加特色滋补海鲜面',
		p3: '',
		p4: '二七区532m'
	}, {
		url: 'img/nearImages/near_21.jpg',
		p1: '瑞吉酒店天宝阁周六早午餐',
		p2: '世界名厨协会荣誉会长担任主厨',
		p3: '整本菜单的精品无限吃，酒水无限享',
		p4: '高新区1732m'
	}, {
		url: 'img/nearImages/near_51.jpg',
		p1: ' BLT 美式休闲西餐厅',
		p2: '享受正宗的美式风味',
		p3: '',
		p4: '二七区2132m'
	}, {
		url: 'img/nearImages/near_61.jpg',
		p1: ' Let is Fries 乐薯',
		p2: '品味酥脆鲜香的英式味道',
		p3: '',
		p4: '高新区1132m'
	}, {
		url: 'img/nearImages/near_91.jpg',
		p1: 'LA YUN 经典',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '双人餐',
		p4: '高新区1132m'
	}, {
		url: 'img/nearImages/near_101.jpg',
		p1: '格调火锅店',
		p2: '体验纯正「shabushabu」滋味',
		p3: '',
		p4: '金水区1132m'
	}, {
		url: 'img/nearImages/near_131.jpg',
		p1: '在静谧小院里吃私家秘方的传统风味',
		p2: '聚恩园春饼宴多人/素食餐',
		p3: '',
		p4: '高新区1673m'
	}, {
		url: 'img/nearImages/near_161.jpg',
		p1: '享用雪龙和牛等多种顶级食材',
		p2: '尚水长廊全天尊享单人餐',
		p3: '',
		p4: '惠济区1132m'
	}, {
		url: 'img/nearImages/near_171.jpg',
		p1: '多明哥餐厅双人/四人套餐',
		p2: '酸辣爽口的浓郁墨西哥风味',
		p3: '',
		p4: '高新区2532m'
	}, {
		url: 'img/nearImages/near_181.jpg',
		p1: '健康搭配',
		p2: '麦食沙拉单人能量餐',
		p3: '适合轻食爱好者的健康搭配',
		p4: '中原区1832m'
	}]
	var contentSix = [{
		url: 'img/nearImages/near_31.jpg',
		p1: 'MANDRILL 单人套餐',
		p2: '机车主题餐厅 地道小酒馆',
		p3: '',
		p4: '中原区977m'
	}, {
		url: 'img/nearImages/near_71.jpg',
		p1: '童年de味道 ',
		p2: '炙热童年经典荟萃双人餐',
		p3: '',
		p4: '中原区512m'
	}, {
		url: 'img/nearImages/near_111.jpg',
		p1: '「高丽参鸡面」两款任选',
		p2: '特别加特色滋补海鲜面',
		p3: '',
		p4: '二七区532m'
	}, {
		url: 'img/nearImages/near_21.jpg',
		p1: '瑞吉酒店天宝阁周六早午餐',
		p2: '世界名厨协会荣誉会长担任主厨',
		p3: '整本菜单的精品无限吃，酒水无限享',
		p4: '高新区1732m'
	}, {
		url: 'img/nearImages/near_51.jpg',
		p1: ' BLT 美式休闲西餐厅',
		p2: '享受正宗的美式风味',
		p3: '',
		p4: '二七区2132m'
	}, {
		url: 'img/nearImages/near_61.jpg',
		p1: ' Let is Fries 乐薯',
		p2: '品味酥脆鲜香的英式味道',
		p3: '',
		p4: '高新区1132m'
	}, {
		url: 'img/nearImages/near_91.jpg',
		p1: 'LA YUN 经典',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '双人餐',
		p4: '高新区1132m'
	}, {
		url: 'img/nearImages/near_101.jpg',
		p1: '格调火锅店',
		p2: '体验纯正「shabushabu」滋味',
		p3: '',
		p4: '金水区1132m'
	}, {
		url: 'img/nearImages/near_131.jpg',
		p1: '在静谧小院里吃私家秘方的传统风味',
		p2: '聚恩园春饼宴多人/素食餐',
		p3: '',
		p4: '高新区1673m'
	}, {
		url: 'img/nearImages/near_161.jpg',
		p1: '享用雪龙和牛等多种顶级食材',
		p2: '尚水长廊全天尊享单人餐',
		p3: '',
		p4: '惠济区1132m'
	}, {
		url: 'img/nearImages/near_171.jpg',
		p1: '多明哥餐厅双人/四人套餐',
		p2: '酸辣爽口的浓郁墨西哥风味',
		p3: '',
		p4: '高新区2532m'
	}, {
		url: 'img/nearImages/near_181.jpg',
		p1: '健康搭配',
		p2: '麦食沙拉单人能量餐',
		p3: '适合轻食爱好者的健康搭配',
		p4: '中原区1832m'
	}, {
		url: 'img/nearImages/near_11.jpg',
		p1: 'Q Mex Bar & Grill 双人餐',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '',
		p4: '高新区3132m'
	}, {
		url: 'img/nearImages/near_41.jpg',
		p1: 'Tiger Pancake House',
		p2: '可享的丰盛单人早餐',
		p3: '',
		p4: '高新区3032m'
	}, {
		url: 'img/nearImages/near_81.jpg',
		p1: ' Pizza RAMO 餐吧',
		p2: '可一次尝到4种口味的拼盘 双人菜单',
		p3: '',
		p4: '高新区3772m'
	}, {
		url: 'img/nearImages/near_121.jpg',
		p1: '东瀛扶桑之味',
		p2: '凤寿司全新单人午餐',
		p3: '',
		p4: '高新区4132m'
	}]
	var contentSeven = [{
		url: 'img/nearImages/near_11.jpg',
		p1: 'Q Mex Bar & Grill 双人餐',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '',
		p4: '高新区3132m'
	}, {
		url: 'img/nearImages/near_21.jpg',
		p1: '瑞吉酒店天宝阁周六早午餐',
		p2: '世界名厨协会荣誉会长担任主厨',
		p3: '整本菜单的精品无限吃，酒水无限享',
		p4: '高新区1732m'
	}, {
		url: 'img/nearImages/near_31.jpg',
		p1: 'MANDRILL 单人套餐',
		p2: '机车主题餐厅 地道小酒馆',
		p3: '',
		p4: '中原区977m'
	}, {
		url: 'img/nearImages/near_41.jpg',
		p1: 'Tiger Pancake House',
		p2: '可享的丰盛单人早餐',
		p3: '',
		p4: '高新区3032m'
	}, {
		url: 'img/nearImages/near_51.jpg',
		p1: ' BLT 美式休闲西餐厅',
		p2: '享受正宗的美式风味',
		p3: '',
		p4: '二七区2132m'
	}, {
		url: 'img/nearImages/near_61.jpg',
		p1: ' Let is Fries 乐薯',
		p2: '品味酥脆鲜香的英式味道',
		p3: '',
		p4: '高新区1132m'
	}, {
		url: 'img/nearImages/near_71.jpg',
		p1: '童年de味道 ',
		p2: '炙热童年经典荟萃双人餐',
		p3: '',
		p4: '中原区512m'
	}, {
		url: 'img/nearImages/near_81.jpg',
		p1: ' Pizza RAMO 餐吧',
		p2: '可一次尝到4种口味的拼盘 双人菜单',
		p3: '',
		p4: '高新区3772m'
	}, {
		url: 'img/nearImages/near_91.jpg',
		p1: 'LA YUN 经典',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '双人餐',
		p4: '高新区1132m'
	}, {
		url: 'img/nearImages/near_101.jpg',
		p1: '格调火锅店',
		p2: '体验纯正「shabushabu」滋味',
		p3: '',
		p4: '金水区1132m'
	}, {
		url: 'img/nearImages/near_111.jpg',
		p1: '「高丽参鸡面」两款任选',
		p2: '特别加特色滋补海鲜面',
		p3: '',
		p4: '二七区532m'
	}, {
		url: 'img/nearImages/near_121.jpg',
		p1: '东瀛扶桑之味',
		p2: '凤寿司全新单人午餐',
		p3: '',
		p4: '高新区4132m'
	}, {
		url: 'img/nearImages/near_131.jpg',
		p1: '在静谧小院里吃私家秘方的传统风味',
		p2: '聚恩园春饼宴多人/素食餐',
		p3: '',
		p4: '高新区1673m'
	}, {
		url: 'img/nearImages/near_141.jpg',
		p1: 'Q Mex Bar & Grill 双人餐',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '',
		p4: '中原区5132m'
	}, {
		url: 'img/nearImages/near_151.jpg',
		p1: '丰盛烤肉料理',
		p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
		p3: '',
		p4: '高新区3232m'
	}, {
		url: 'img/nearImages/near_161.jpg',
		p1: '享用雪龙和牛等多种顶级食材',
		p2: '尚水长廊全天尊享单人餐',
		p3: '',
		p4: '惠济区1132m'
	}, {
		url: 'img/nearImages/near_171.jpg',
		p1: '多明哥餐厅双人/四人套餐',
		p2: '酸辣爽口的浓郁墨西哥风味',
		p3: '',
		p4: '高新区2532m'
	}, {
		url: 'img/nearImages/near_181.jpg',
		p1: '健康搭配',
		p2: '麦食沙拉单人能量餐',
		p3: '适合轻食爱好者的健康搭配',
		p4: '中原区1832m'
	}]

	var contentEight = [{
		url: 'img/nearImages/near_21.jpg',
		p1: '瑞吉酒店天宝阁周六早午餐',
		p2: '世界名厨协会荣誉会长担任主厨',
		p3: '整本菜单的精品无限吃，酒水无限享',
		p4: '高新区1732m'
	}, {
		url: 'img/nearImages/near_31.jpg',
		p1: 'MANDRILL 单人套餐',
		p2: '机车主题餐厅 地道小酒馆',
		p3: '',
		p4: '中原区977m'
	}, {
		url: 'img/nearImages/near_41.jpg',
		p1: 'Tiger Pancake House',
		p2: '可享的丰盛单人早餐',
		p3: '',
		p4: '高新区3032m'
	}, {
		url: 'img/nearImages/near_181.jpg',
		p1: '健康搭配',
		p2: '麦食沙拉单人能量餐',
		p3: '适合轻食爱好者的健康搭配',
		p4: '中原区1832m'
	}, {
		url: 'img/nearImages/near_161.jpg',
		p1: '享用雪龙和牛等多种顶级食材',
		p2: '尚水长廊全天尊享单人餐',
		p3: '',
		p4: '惠济区1132m'
	}]
	var contentNine = [{
		url: 'img/nearImages/near_141.jpg',
		p1: 'Q Mex Bar & Grill 双人餐',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '',
		p4: '中原区5132m'
	}, {
		url: 'img/nearImages/near_171.jpg',
		p1: '多明哥餐厅双人/四人套餐',
		p2: '酸辣爽口的浓郁墨西哥风味',
		p3: '',
		p4: '高新区2532m'
	}, {
		url: 'img/nearImages/near_151.jpg',
		p1: '丰盛烤肉料理',
		p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
		p3: '',
		p4: '高新区3232m'
	}, {
		url: 'img/nearImages/near_81.jpg',
		p1: ' Pizza RAMO 餐吧',
		p2: '可一次尝到4种口味的拼盘 双人菜单',
		p3: '',
		p4: '高新区3772m'
	}, {
		url: 'img/nearImages/near_91.jpg',
		p1: 'LA YUN 经典',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '双人餐',
		p4: '高新区1132m'
	}, {
		url: 'img/nearImages/near_11.jpg',
		p1: 'Q Mex Bar & Grill 双人餐',
		p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
		p3: '',
		p4: '高新区3132m'
	}, ]
	var contentTen = [{
		url: 'img/nearImages/near_171.jpg',
		p1: '多明哥餐厅双人/四人套餐',
		p2: '酸辣爽口的浓郁墨西哥风味',
		p3: '',
		p4: '高新区2532m'
	}, {
		url: 'img/nearImages/near_131.jpg',
		p1: '在静谧小院里吃私家秘方的传统风味',
		p2: '聚恩园春饼宴多人/素食餐',
		p3: '',
		p4: '高新区1673m'
	}, {
		url: 'img/nearImages/near_101.jpg',
		p1: '格调火锅店',
		p2: '体验纯正「shabushabu」滋味',
		p3: '',
		p4: '金水区1132m'
	}, {
		url: 'img/nearImages/near_131.jpg',
		p1: '在静谧小院里吃私家秘方的传统风味',
		p2: '聚恩园春饼宴多人/素食餐',
		p3: '',
		p4: '高新区1673m'
	}]
	return {
		all: function() {
			return contents;
		},
		allOne: function() {
			return contentOne
		},
		allTwo: function() {
			return contentTwo
		},
		allThree: function() {
			return contentThree
		},
		allFour: function() {
			return contentFour
		},
		allFive: function() {
			return contentFive
		},
		allSix: function() {
			return contentSix
		},
		allSeven: function() {
			return contentSeven
		},
		allEight: function() {
			return contentEight
		},
		allNine: function() {
			return contentNine
		},
		allTen: function() {
			return contentTen
		},

	}
})