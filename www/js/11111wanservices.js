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
			nearID: 'near1',
			price: '198元/2位',
			lateprice: '￥356',
			yishop: '137',
			url: 'img/nearImages/near_11.jpg',
			url2: 'img/nearImages/near_31.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
			p4: '高新区1862m'
		}, {
			nearID: 'near2',
			price: '408元/2位',
			lateprice: '￥688',
			yishop: '45',
			url: 'img/nearImages/near_21.jpg',
			url2: 'img/nearImages/near_41.jpg',
			url3: 'img/nearImages/near_101.jpg',
			p1: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '高新区1738m'
		}, {
			nearID: 'near3',
			price: '368元/1位',
			lateprice: '￥572',
			yishop: '77',

			url: 'img/nearImages/near_31.jpg',
			url2: 'img/nearImages/near_51.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '中原区977m'
		}, {
			nearID: 'near4',
			price: '49元/1位',

			lateprice: '￥69',
			yishop: '253',
			url: 'img/nearImages/near_41.jpg',
			url2: 'img/nearImages/near_61.jpg',
			url3: 'img/nearImages/near_81.jpg',
			p1: 'Tiger Pancake House',
			p2: '可享的丰盛单人早餐',
			p3: '',
			tcxq: '纽约芝士 香浓巧克力 蓝莓...',
			p4: '高新区3032m'
		}, {
			nearID: 'near5',
			price: '379元/1位',

			lateprice: '￥479',
			yishop: '67',
			url: 'img/nearImages/near_51.jpg',
			url2: 'img/nearImages/near_71.jpg',
			url3: 'img/nearImages/near_81.jpg',
			p1: ' BLT 美式休闲西餐厅',
			p2: '享受正宗的美式风味',
			p3: '',
			tcxq: '戛纳顶级鱼子酱海鲜拼盘 北欧海鲜浓汤...',
			p4: '二七区2132m'
		}, {
			nearID: 'near6',
			price: '76元/2位',

			lateprice: '￥89',
			yishop: '329',
			url: 'img/nearImages/near_61.jpg',
			url2: 'img/nearImages/near_81.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: ' Let is Fries 乐薯',
			p2: '品味酥脆鲜香的英式味道',
			p3: '',
			tcxq: '体验装薯条 热狗 炸鱼 三藩薯...',
			p4: '高新区1132m'
		}, {
			nearID: 'near7',
			price: '68元/1位',

			lateprice: '￥88',
			yishop: '264',
			url: 'img/nearImages/near_71.jpg',
			url2: 'img/nearImages/near_91.jpg',
			url3: 'img/nearImages/near_131.jpg',
			p1: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '中原区512m'
		}, {
			nearID: 'near8',
			price: '149元/2位',

			lateprice: '￥179',
			yishop: '455',
			url: 'img/nearImages/near_81.jpg',
			url2: 'img/nearImages/near_101.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: ' Pizza RAMO 餐吧',
			p2: '可一次尝到4种口味的拼盘 双人菜单',
			p3: '',
			tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
			p4: '高新区3772m'
		}, {
			nearID: 'near9',
			price: '198元/2位',
			lateprice: '￥239',
			yishop: '95',
			url: 'img/nearImages/near_91.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_171.jpg',
			p1: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '高新区1132m'
		}, {
			nearID: 'near10',
			price: '58元/1位',

			lateprice: '￥69',
			yishop: '527',
			url: 'img/nearImages/near_101.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_41.jpg',
			p1: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '金水区1132m'
		}, {
			nearID: 'near11',
			price: '36元/2位',

			lateprice: '￥42',
			yishop: '783',
			url: 'img/nearImages/near_111.jpg',
			url2: 'img/nearImages/near_121.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '二七区532m'
		}, {
			nearID: 'near12',
			price: '99元/1位',

			lateprice: '￥119',
			yishop: '278',
			url: 'img/nearImages/near_121.jpg',
			url2: 'img/nearImages/near_131.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '东瀛扶桑之味',
			p2: '凤寿司全新单人午餐',
			p3: '',
			tcxq: '简单寿司 鸡蛋寿司 反转寿司 花样寿司 紫菜包饭...',
			p4: '高新区4132m'
		}, {
			nearID: 'near13',
			price: '78元/1位',

			lateprice: '￥90',
			yishop: '883',
			url: 'img/nearImages/near_131.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_31.jpg',
			p1: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '高新区1673m'
		}, {
			nearID: 'near14',
			price: '429元/2位',

			lateprice: '￥508',
			yishop: '75',
			url: 'img/nearImages/near_141.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '芝士龙虾仔（伊面底）海白虾两吃 姜葱炒蟹...',
			p4: '中原区5132m'
		}, {
			nearID: 'near15',
			price: '258元/2位',

			lateprice: '￥309',
			yishop: '79',
			url: 'img/nearImages/near_151.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '丰盛烤肉料理',
			p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
			p3: '',
			tcxq: '海鲜烧烤 秘制牛肉 风味烤肉...',
			p4: '高新区3232m'
		}, {
			nearID: 'near16',
			price: '168元/2位',

			lateprice: '￥199',
			yishop: '52',
			url: 'img/nearImages/near_161.jpg',
			url2: 'img/nearImages/near_181.jpg',
			url3: 'img/nearImages/near_21.jpg',
			p1: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '惠济区1132m'
		}, {
			nearID: 'near17',
			price: '588元/2位',

			lateprice: '￥709',
			yishop: '26',
			url: 'img/nearImages/near_171.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_161.jpg',
			p1: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '高新区2532m'
		}, {
			nearID: 'near18',
			price: '69元/2位',

			lateprice: '￥108',
			yishop: '666',
			url: 'img/nearImages/near_181.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '健康搭配',
			p2: '麦食沙拉单人能量餐',
			p3: '适合轻食爱好者的健康搭配',
			tcxq: '酸奶水果沙拉 水果沙拉 健康考伯色拉...',
			p4: '中原区1832m'
		}];

		//、、、、、、、、、、、、

		var contentOne = [{
			nearID: 'near2',
			price: '408元/2位',
			lateprice: '￥688',
			yishop: '45',
			url: 'img/nearImages/near_21.jpg',
			url2: 'img/nearImages/near_41.jpg',
			url3: 'img/nearImages/near_101.jpg',
			p1: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '高新区1738m'
		}, {
			nearID: 'near4',
			price: '49元/1位',

			lateprice: '￥69',
			yishop: '253',
			url: 'img/nearImages/near_41.jpg',
			url2: 'img/nearImages/near_61.jpg',
			url3: 'img/nearImages/near_81.jpg',
			p1: 'Tiger Pancake House',
			p2: '可享的丰盛单人早餐',
			p3: '',
			tcxq: '纽约芝士 香浓巧克力 蓝莓...',
			p4: '高新区3032m'
		}, {
			nearID: 'near6',
			price: '76元/2位',

			lateprice: '￥89',
			yishop: '329',
			url: 'img/nearImages/near_61.jpg',
			url2: 'img/nearImages/near_81.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: ' Let is Fries 乐薯',
			p2: '品味酥脆鲜香的英式味道',
			p3: '',
			tcxq: '体验装薯条 热狗 炸鱼 三藩薯...',
			p4: '高新区1132m'
		}, {
			nearID: 'near12',
			price: '99元/1位',

			lateprice: '￥119',
			yishop: '278',
			url: 'img/nearImages/near_121.jpg',
			url2: 'img/nearImages/near_131.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '东瀛扶桑之味',
			p2: '凤寿司全新单人午餐',
			p3: '',
			tcxq: '简单寿司 鸡蛋寿司 反转寿司 花样寿司 紫菜包饭...',
			p4: '高新区4132m'
		}, {
			nearID: 'near5',
			price: '379元/1位',

			lateprice: '￥479',
			yishop: '67',
			url: 'img/nearImages/near_51.jpg',
			url2: 'img/nearImages/near_71.jpg',
			url3: 'img/nearImages/near_81.jpg',
			p1: ' BLT 美式休闲西餐厅',
			p2: '享受正宗的美式风味',
			p3: '',
			tcxq: '戛纳顶级鱼子酱海鲜拼盘 北欧海鲜浓汤...',
			p4: '二七区2132m'
		}];
		var contentTwo = [{
			nearID: 'near7',
			price: '68元/1位',

			lateprice: '￥88',
			yishop: '264',
			url: 'img/nearImages/near_71.jpg',
			url2: 'img/nearImages/near_91.jpg',
			url3: 'img/nearImages/near_131.jpg',
			p1: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '中原区512m'
		}, {
			nearID: 'near8',
			price: '149元/2位',

			lateprice: '￥179',
			yishop: '455',
			url: 'img/nearImages/near_81.jpg',
			url2: 'img/nearImages/near_101.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: ' Pizza RAMO 餐吧',
			p2: '可一次尝到4种口味的拼盘 双人菜单',
			p3: '',
			tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
			p4: '高新区3772m'
		}, {
			nearID: 'near9',
			price: '198元/2位',
			lateprice: '￥239',
			yishop: '95',
			url: 'img/nearImages/near_91.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_171.jpg',
			p1: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '高新区1132m'
		}, {
			nearID: 'near10',
			price: '58元/1位',

			lateprice: '￥69',
			yishop: '527',
			url: 'img/nearImages/near_101.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_41.jpg',
			p1: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '金水区1132m'
		}, {
			nearID: 'near11',
			price: '36元/2位',

			lateprice: '￥42',
			yishop: '783',
			url: 'img/nearImages/near_111.jpg',
			url2: 'img/nearImages/near_121.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '二七区532m'
		}, {
			nearID: 'near12',
			price: '99元/1位',

			lateprice: '￥119',
			yishop: '278',
			url: 'img/nearImages/near_121.jpg',
			url2: 'img/nearImages/near_131.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '东瀛扶桑之味',
			p2: '凤寿司全新单人午餐',
			p3: '',
			tcxq: '简单寿司 鸡蛋寿司 反转寿司 花样寿司 紫菜包饭...',
			p4: '高新区4132m'
		}, {
			nearID: 'near13',
			price: '78元/1位',

			lateprice: '￥90',
			yishop: '883',
			url: 'img/nearImages/near_131.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_31.jpg',
			p1: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '高新区1673m'
		}, {
			nearID: 'near14',
			price: '429元/2位',

			lateprice: '￥508',
			yishop: '75',
			url: 'img/nearImages/near_141.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '芝士龙虾仔（伊面底）海白虾两吃 姜葱炒蟹...',
			p4: '中原区5132m'
		}]
		var contentThree = [{
			nearID: 'near13',
			price: '78元/1位',

			lateprice: '￥90',
			yishop: '883',
			url: 'img/nearImages/near_131.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_31.jpg',
			p1: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '高新区1673m'
		}, {
			nearID: 'near14',
			price: '429元/2位',

			lateprice: '￥508',
			yishop: '75',
			url: 'img/nearImages/near_141.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '芝士龙虾仔（伊面底）海白虾两吃 姜葱炒蟹...',
			p4: '中原区5132m'
		}, {
			nearID: 'near15',
			price: '258元/2位',

			lateprice: '￥309',
			yishop: '79',
			url: 'img/nearImages/near_151.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '丰盛烤肉料理',
			p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
			p3: '',
			tcxq: '海鲜烧烤 秘制牛肉 风味烤肉...',
			p4: '高新区3232m'
		}, {
			nearID: 'near16',
			price: '168元/2位',

			lateprice: '￥199',
			yishop: '52',
			url: 'img/nearImages/near_161.jpg',
			url2: 'img/nearImages/near_181.jpg',
			url3: 'img/nearImages/near_21.jpg',
			p1: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '惠济区1132m'
		}, {
			nearID: 'near17',
			price: '588元/2位',

			lateprice: '￥709',
			yishop: '26',
			url: 'img/nearImages/near_171.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_161.jpg',
			p1: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '高新区2532m'
		}, {
			nearID: 'near3',
			price: '368元/1位',
			lateprice: '￥572',
			yishop: '77',

			url: 'img/nearImages/near_31.jpg',
			url2: 'img/nearImages/near_51.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '中原区977m'
		}, {
			nearID: 'near1',
			price: '198元/2位',
			lateprice: '￥356',
			yishop: '137',
			url: 'img/nearImages/near_11.jpg',
			url2: 'img/nearImages/near_31.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
			p4: '高新区1862m'
		}]

		var contentFour = [{
			nearID: 'near3',
			price: '368元/1位',
			lateprice: '￥572',
			yishop: '77',

			url: 'img/nearImages/near_31.jpg',
			url2: 'img/nearImages/near_51.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '中原区977m'
		}, {
			nearID: 'near7',
			price: '68元/1位',

			lateprice: '￥88',
			yishop: '264',
			url: 'img/nearImages/near_71.jpg',
			url2: 'img/nearImages/near_91.jpg',
			url3: 'img/nearImages/near_131.jpg',
			p1: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '中原区512m'
		}, {
			nearID: 'near11',
			price: '36元/2位',

			lateprice: '￥42',
			yishop: '783',
			url: 'img/nearImages/near_111.jpg',
			url2: 'img/nearImages/near_121.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '二七区532m'
		}]
		var contentFive = [{
			nearID: 'near3',
			price: '368元/1位',
			lateprice: '￥572',
			yishop: '77',

			url: 'img/nearImages/near_31.jpg',
			url2: 'img/nearImages/near_51.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '中原区977m'
		}, {
			nearID: 'near7',
			price: '68元/1位',

			lateprice: '￥88',
			yishop: '264',
			url: 'img/nearImages/near_71.jpg',
			url2: 'img/nearImages/near_91.jpg',
			url3: 'img/nearImages/near_131.jpg',
			p1: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '中原区512m'
		}, {
			nearID: 'near11',
			price: '36元/2位',

			lateprice: '￥42',
			yishop: '783',
			url: 'img/nearImages/near_111.jpg',
			url2: 'img/nearImages/near_121.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '二七区532m'
		}, {
			nearID: 'near2',
			price: '408元/2位',
			lateprice: '￥688',
			yishop: '45',
			url: 'img/nearImages/near_21.jpg',
			url2: 'img/nearImages/near_41.jpg',
			url3: 'img/nearImages/near_101.jpg',
			p1: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '高新区1738m'
		}, {
			nearID: 'near5',
			price: '379元/1位',

			lateprice: '￥479',
			yishop: '67',
			url: 'img/nearImages/near_51.jpg',
			url2: 'img/nearImages/near_71.jpg',
			url3: 'img/nearImages/near_81.jpg',
			p1: ' BLT 美式休闲西餐厅',
			p2: '享受正宗的美式风味',
			p3: '',
			tcxq: '戛纳顶级鱼子酱海鲜拼盘 北欧海鲜浓汤...',
			p4: '二七区2132m'
		}, {
			nearID: 'near6',
			price: '76元/2位',

			lateprice: '￥89',
			yishop: '329',
			url: 'img/nearImages/near_61.jpg',
			url2: 'img/nearImages/near_81.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: ' Let is Fries 乐薯',
			p2: '品味酥脆鲜香的英式味道',
			p3: '',
			tcxq: '体验装薯条 热狗 炸鱼 三藩薯...',
			p4: '高新区1132m'
		}, {
			nearID: 'near9',
			price: '198元/2位',
			lateprice: '￥239',
			yishop: '95',
			url: 'img/nearImages/near_91.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_171.jpg',
			p1: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '高新区1132m'
		}, {
			nearID: 'near10',
			price: '58元/1位',

			lateprice: '￥69',
			yishop: '527',
			url: 'img/nearImages/near_101.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_41.jpg',
			p1: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '金水区1132m'
		}, {
			nearID: 'near13',
			price: '78元/1位',

			lateprice: '￥90',
			yishop: '883',
			url: 'img/nearImages/near_131.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_31.jpg',
			p1: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '高新区1673m'
		}, {
			nearID: 'near16',
			price: '168元/2位',

			lateprice: '￥199',
			yishop: '52',
			url: 'img/nearImages/near_161.jpg',
			url2: 'img/nearImages/near_181.jpg',
			url3: 'img/nearImages/near_21.jpg',
			p1: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '惠济区1132m'
		}, {
			nearID: 'near17',
			price: '588元/2位',

			lateprice: '￥709',
			yishop: '26',
			url: 'img/nearImages/near_171.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_161.jpg',
			p1: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '高新区2532m'
		}, {
			nearID: 'near18',
			price: '69元/2位',

			lateprice: '￥108',
			yishop: '666',
			url: 'img/nearImages/near_181.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '健康搭配',
			p2: '麦食沙拉单人能量餐',
			p3: '适合轻食爱好者的健康搭配',
			tcxq: '酸奶水果沙拉 水果沙拉 健康考伯色拉...',
			p4: '中原区1832m'
		}]
		var contentSix = [{
			nearID: 'near3',
			price: '368元/1位',
			lateprice: '￥572',
			yishop: '77',

			url: 'img/nearImages/near_31.jpg',
			url2: 'img/nearImages/near_51.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '中原区977m'
		}, {
			nearID: 'near7',
			price: '68元/1位',

			lateprice: '￥88',
			yishop: '264',
			url: 'img/nearImages/near_71.jpg',
			url2: 'img/nearImages/near_91.jpg',
			url3: 'img/nearImages/near_131.jpg',
			p1: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '中原区512m'
		}, {
			nearID: 'near11',
			price: '36元/2位',

			lateprice: '￥42',
			yishop: '783',
			url: 'img/nearImages/near_111.jpg',
			url2: 'img/nearImages/near_121.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '二七区532m'
		}, {
			nearID: 'near2',
			price: '408元/2位',
			lateprice: '￥688',
			yishop: '45',
			url: 'img/nearImages/near_21.jpg',
			url2: 'img/nearImages/near_41.jpg',
			url3: 'img/nearImages/near_101.jpg',
			p1: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '高新区1738m'
		}, {
			nearID: 'near5',
			price: '379元/1位',

			lateprice: '￥479',
			yishop: '67',
			url: 'img/nearImages/near_51.jpg',
			url2: 'img/nearImages/near_71.jpg',
			url3: 'img/nearImages/near_81.jpg',
			p1: ' BLT 美式休闲西餐厅',
			p2: '享受正宗的美式风味',
			p3: '',
			tcxq: '戛纳顶级鱼子酱海鲜拼盘 北欧海鲜浓汤...',
			p4: '二七区2132m'
		}, {
			nearID: 'near6',
			price: '76元/2位',

			lateprice: '￥89',
			yishop: '329',
			url: 'img/nearImages/near_61.jpg',
			url2: 'img/nearImages/near_81.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: ' Let is Fries 乐薯',
			p2: '品味酥脆鲜香的英式味道',
			p3: '',
			tcxq: '体验装薯条 热狗 炸鱼 三藩薯...',
			p4: '高新区1132m'
		}, {
			nearID: 'near9',
			price: '198元/2位',
			lateprice: '￥239',
			yishop: '95',
			url: 'img/nearImages/near_91.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_171.jpg',
			p1: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '高新区1132m'
		}, {
			nearID: 'near10',
			price: '58元/1位',

			lateprice: '￥69',
			yishop: '527',
			url: 'img/nearImages/near_101.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_41.jpg',
			p1: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '金水区1132m'
		}, {
			nearID: 'near13',
			price: '78元/1位',

			lateprice: '￥90',
			yishop: '883',
			url: 'img/nearImages/near_131.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_31.jpg',
			p1: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '高新区1673m'
		}, {
			nearID: 'near16',
			price: '168元/2位',

			lateprice: '￥199',
			yishop: '52',
			url: 'img/nearImages/near_161.jpg',
			url2: 'img/nearImages/near_181.jpg',
			url3: 'img/nearImages/near_21.jpg',
			p1: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '惠济区1132m'
		}, {
			nearID: 'near17',
			price: '588元/2位',

			lateprice: '￥709',
			yishop: '26',
			url: 'img/nearImages/near_171.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_161.jpg',
			p1: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '高新区2532m'
		}, {
			nearID: 'near18',
			price: '69元/2位',

			lateprice: '￥108',
			yishop: '666',
			url: 'img/nearImages/near_181.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '健康搭配',
			p2: '麦食沙拉单人能量餐',
			p3: '适合轻食爱好者的健康搭配',
			tcxq: '酸奶水果沙拉 水果沙拉 健康考伯色拉...',
			p4: '中原区1832m'
		}, {
			nearID: 'near1',
			price: '198元/2位',
			lateprice: '￥356',
			yishop: '137',
			url: 'img/nearImages/near_11.jpg',
			url2: 'img/nearImages/near_31.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
			p4: '高新区1862m'
		}, {
			nearID: 'near4',
			price: '49元/1位',

			lateprice: '￥69',
			yishop: '253',
			url: 'img/nearImages/near_41.jpg',
			url2: 'img/nearImages/near_61.jpg',
			url3: 'img/nearImages/near_81.jpg',
			p1: 'Tiger Pancake House',
			p2: '可享的丰盛单人早餐',
			p3: '',
			tcxq: '纽约芝士 香浓巧克力 蓝莓...',
			p4: '高新区3032m'
		}, {
			nearID: 'near8',
			price: '149元/2位',

			lateprice: '￥179',
			yishop: '455',
			url: 'img/nearImages/near_81.jpg',
			url2: 'img/nearImages/near_101.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: ' Pizza RAMO 餐吧',
			p2: '可一次尝到4种口味的拼盘 双人菜单',
			p3: '',
			tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
			p4: '高新区3772m'
		}, {
			nearID: 'near12',
			price: '99元/1位',

			lateprice: '￥119',
			yishop: '278',
			url: 'img/nearImages/near_121.jpg',
			url2: 'img/nearImages/near_131.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '东瀛扶桑之味',
			p2: '凤寿司全新单人午餐',
			p3: '',
			tcxq: '简单寿司 鸡蛋寿司 反转寿司 花样寿司 紫菜包饭...',
			p4: '高新区4132m'
		}]
		var contentSeven = [{
			nearID: 'near1',
			price: '198元/2位',
			lateprice: '￥356',
			yishop: '137',
			url: 'img/nearImages/near_11.jpg',
			url2: 'img/nearImages/near_31.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
			p4: '高新区1862m'
		}, {
			nearID: 'near2',
			price: '408元/2位',
			lateprice: '￥688',
			yishop: '45',
			url: 'img/nearImages/near_21.jpg',
			url2: 'img/nearImages/near_41.jpg',
			url3: 'img/nearImages/near_101.jpg',
			p1: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '高新区1738m'
		}, {
			nearID: 'near3',
			price: '368元/1位',
			lateprice: '￥572',
			yishop: '77',

			url: 'img/nearImages/near_31.jpg',
			url2: 'img/nearImages/near_51.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '中原区977m'
		}, {
			nearID: 'near4',
			price: '49元/1位',

			lateprice: '￥69',
			yishop: '253',
			url: 'img/nearImages/near_41.jpg',
			url2: 'img/nearImages/near_61.jpg',
			url3: 'img/nearImages/near_81.jpg',
			p1: 'Tiger Pancake House',
			p2: '可享的丰盛单人早餐',
			p3: '',
			tcxq: '纽约芝士 香浓巧克力 蓝莓...',
			p4: '高新区3032m'
		}, {
			nearID: 'near5',
			price: '379元/1位',

			lateprice: '￥479',
			yishop: '67',
			url: 'img/nearImages/near_51.jpg',
			url2: 'img/nearImages/near_71.jpg',
			url3: 'img/nearImages/near_81.jpg',
			p1: ' BLT 美式休闲西餐厅',
			p2: '享受正宗的美式风味',
			p3: '',
			tcxq: '戛纳顶级鱼子酱海鲜拼盘 北欧海鲜浓汤...',
			p4: '二七区2132m'
		}, {
			nearID: 'near6',
			price: '76元/2位',

			lateprice: '￥89',
			yishop: '329',
			url: 'img/nearImages/near_61.jpg',
			url2: 'img/nearImages/near_81.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: ' Let is Fries 乐薯',
			p2: '品味酥脆鲜香的英式味道',
			p3: '',
			tcxq: '体验装薯条 热狗 炸鱼 三藩薯...',
			p4: '高新区1132m'
		}, {
			nearID: 'near7',
			price: '68元/1位',

			lateprice: '￥88',
			yishop: '264',
			url: 'img/nearImages/near_71.jpg',
			url2: 'img/nearImages/near_91.jpg',
			url3: 'img/nearImages/near_131.jpg',
			p1: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '中原区512m'
		}, {
			nearID: 'near8',
			price: '149元/2位',

			lateprice: '￥179',
			yishop: '455',
			url: 'img/nearImages/near_81.jpg',
			url2: 'img/nearImages/near_101.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: ' Pizza RAMO 餐吧',
			p2: '可一次尝到4种口味的拼盘 双人菜单',
			p3: '',
			tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
			p4: '高新区3772m'
		}, {
			nearID: 'near9',
			price: '198元/2位',
			lateprice: '￥239',
			yishop: '95',
			url: 'img/nearImages/near_91.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_171.jpg',
			p1: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '高新区1132m'
		}, {
			nearID: 'near10',
			price: '58元/1位',

			lateprice: '￥69',
			yishop: '527',
			url: 'img/nearImages/near_101.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_41.jpg',
			p1: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '金水区1132m'
		}, {
			nearID: 'near11',
			price: '36元/2位',

			lateprice: '￥42',
			yishop: '783',
			url: 'img/nearImages/near_111.jpg',
			url2: 'img/nearImages/near_121.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '二七区532m'
		}, {
			nearID: 'near12',
			price: '99元/1位',

			lateprice: '￥119',
			yishop: '278',
			url: 'img/nearImages/near_121.jpg',
			url2: 'img/nearImages/near_131.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '东瀛扶桑之味',
			p2: '凤寿司全新单人午餐',
			p3: '',
			tcxq: '简单寿司 鸡蛋寿司 反转寿司 花样寿司 紫菜包饭...',
			p4: '高新区4132m'
		}, {
			nearID: 'near13',
			price: '78元/1位',

			lateprice: '￥90',
			yishop: '883',
			url: 'img/nearImages/near_131.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_31.jpg',
			p1: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '高新区1673m'
		}, {
			nearID: 'near14',
			price: '429元/2位',

			lateprice: '￥508',
			yishop: '75',
			url: 'img/nearImages/near_141.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '芝士龙虾仔（伊面底）海白虾两吃 姜葱炒蟹...',
			p4: '中原区5132m'
		}, {
			nearID: 'near15',
			price: '258元/2位',

			lateprice: '￥309',
			yishop: '79',
			url: 'img/nearImages/near_151.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '丰盛烤肉料理',
			p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
			p3: '',
			tcxq: '海鲜烧烤 秘制牛肉 风味烤肉...',
			p4: '高新区3232m'
		}, {
			nearID: 'near16',
			price: '168元/2位',

			lateprice: '￥199',
			yishop: '52',
			url: 'img/nearImages/near_161.jpg',
			url2: 'img/nearImages/near_181.jpg',
			url3: 'img/nearImages/near_21.jpg',
			p1: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '惠济区1132m'
		}, {
			nearID: 'near17',
			price: '588元/2位',

			lateprice: '￥709',
			yishop: '26',
			url: 'img/nearImages/near_171.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_161.jpg',
			p1: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '高新区2532m'
		}, {
			url: 'img/nearImages/near_181.jpg',
			p1: '健康搭配',
			p2: '麦食沙拉单人能量餐',
			p3: '适合轻食爱好者的健康搭配',
			p4: '中原区1832m'
		}]

		var contentEight = [{
			nearID: 'near2',
			price: '408元/2位',
			lateprice: '￥688',
			yishop: '45',
			url: 'img/nearImages/near_21.jpg',
			url2: 'img/nearImages/near_41.jpg',
			url3: 'img/nearImages/near_101.jpg',
			p1: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '高新区1738m'
		}, {
			nearID: 'near3',
			price: '368元/1位',
			lateprice: '￥572',
			yishop: '77',

			url: 'img/nearImages/near_31.jpg',
			url2: 'img/nearImages/near_51.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '中原区977m'
		}, {
			nearID: 'near4',
			price: '49元/1位',

			lateprice: '￥69',
			yishop: '253',
			url: 'img/nearImages/near_41.jpg',
			url2: 'img/nearImages/near_61.jpg',
			url3: 'img/nearImages/near_81.jpg',
			p1: 'Tiger Pancake House',
			p2: '可享的丰盛单人早餐',
			p3: '',
			tcxq: '纽约芝士 香浓巧克力 蓝莓...',
			p4: '高新区3032m'
		}, {
			nearID: 'near18',
			price: '69元/2位',

			lateprice: '￥108',
			yishop: '666',
			url: 'img/nearImages/near_181.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '健康搭配',
			p2: '麦食沙拉单人能量餐',
			p3: '适合轻食爱好者的健康搭配',
			tcxq: '酸奶水果沙拉 水果沙拉 健康考伯色拉...',
			p4: '中原区1832m'
		}, {
			nearID: 'near16',
			price: '168元/2位',

			lateprice: '￥199',
			yishop: '52',
			url: 'img/nearImages/near_161.jpg',
			url2: 'img/nearImages/near_181.jpg',
			url3: 'img/nearImages/near_21.jpg',
			p1: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '惠济区1132m'
		}]
		var contentNine = [{
			nearID: 'near14',
			price: '429元/2位',

			lateprice: '￥508',
			yishop: '75',
			url: 'img/nearImages/near_141.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '芝士龙虾仔（伊面底）海白虾两吃 姜葱炒蟹...',
			p4: '中原区5132m'
		}, {
			nearID: 'near17',
			price: '588元/2位',

			lateprice: '￥709',
			yishop: '26',
			url: 'img/nearImages/near_171.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_161.jpg',
			p1: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '高新区2532m'
		}, {
			nearID: 'near15',
			price: '258元/2位',

			lateprice: '￥309',
			yishop: '79',
			url: 'img/nearImages/near_151.jpg',
			url2: 'img/nearImages/near_161.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: '丰盛烤肉料理',
			p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
			p3: '',
			tcxq: '海鲜烧烤 秘制牛肉 风味烤肉...',
			p4: '高新区3232m'
		}, {
			nearID: 'near8',
			price: '149元/2位',

			lateprice: '￥179',
			yishop: '455',
			url: 'img/nearImages/near_81.jpg',
			url2: 'img/nearImages/near_101.jpg',
			url3: 'img/nearImages/near_91.jpg',
			p1: ' Pizza RAMO 餐吧',
			p2: '可一次尝到4种口味的拼盘 双人菜单',
			p3: '',
			tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
			p4: '高新区3772m'
		}, {
			nearID: 'near9',
			price: '198元/2位',
			lateprice: '￥239',
			yishop: '95',
			url: 'img/nearImages/near_91.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_171.jpg',
			p1: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '高新区1132m'
		}, {
			nearID: 'near1',
			price: '198元/2位',
			lateprice: '￥356',
			yishop: '137',
			url: 'img/nearImages/near_11.jpg',
			url2: 'img/nearImages/near_31.jpg',
			url3: 'img/nearImages/near_61.jpg',
			p1: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
			p4: '高新区1862m'
		}, ]
		var contentTen = [{
			nearID: 'near17',
			price: '588元/2位',

			lateprice: '￥709',
			yishop: '26',
			url: 'img/nearImages/near_171.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_161.jpg',
			p1: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '高新区2532m'
		}, {
			nearID: 'near13',
			price: '78元/1位',

			lateprice: '￥90',
			yishop: '883',
			url: 'img/nearImages/near_131.jpg',
			url2: 'img/nearImages/near_151.jpg',
			url3: 'img/nearImages/near_31.jpg',
			p1: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '高新区1673m'
		}, {
			nearID: 'near10',
			price: '58元/1位',

			lateprice: '￥69',
			yishop: '527',
			url: 'img/nearImages/near_101.jpg',
			url2: 'img/nearImages/near_111.jpg',
			url3: 'img/nearImages/near_41.jpg',
			p1: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '金水区1132m'
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
			get: function(shopID) {
				for(var i = 0; i < contents.length; i++) {
					if(contents[i].nearID == shopID) {
						return contents[i];
					}
				}
				return null;
			}

		}
	})