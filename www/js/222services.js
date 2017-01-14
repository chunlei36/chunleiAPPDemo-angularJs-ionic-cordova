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
				yishop: '545',

				pid1: 'shop1',
				img: 'img/homeimg/shop1.jpg',
				img2: 'img/nearImages/near_31.jpg',
				img3: 'img/nearImages/near_61.jpg',
				h2: '桥餐厅精致双人餐',
				p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
				p3: '',
				tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283'
			}, {
				yishop: '344',
				pid1: 'shop2',
				img: 'img/homeimg/shop2.jpg',
				img2: 'img/nearImages/near_151.jpg',
				img3: 'img/nearImages/near_161.jpg',
				h2: 'Urban Thai 妈咪料理',
				p2: '炙热童年经典荟萃 童年De味道',
				p3: '',
				tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
				p4: '郑州市高新区1862m',
				span: '188元/2位',
				s: '￥265'
			}, {
				yishop: '34',

				pid1: 'shop3',
				img: 'img/homeimg/shop1.jpg',
				img2: 'img/nearImages/near_31.jpg',
				img3: 'img/nearImages/near_91.jpg',
				h2: '桥餐厅精致双人餐',
				p2: '可一次尝到4种口味的拼盘 双人菜单',
				p3: '',
				tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283'
			}, {
				yishop: '123',

				pid1: 'shop4',
				img: 'img/homeimg/shop2.jpg',
				img2: 'img/nearImages/near_21.jpg',
				img3: 'img/nearImages/near_91.jpg',
				h2: 'Urban Thai 妈咪料理',
				p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
				p3: '',
				tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
				p4: '郑州市高新区1862m',
				span: '188元/2位',
				s: '￥265'
			}, {
				yishop: '98',

				pid1: 'shop5',
				img: 'img/homeimg/shop1.jpg',
				img2: 'img/nearImages/near_51.jpg',
				img3: 'img/nearImages/near_11.jpg',
				h2: '「高丽参鸡面」两款任选',
				p2: '特别加特色滋补海鲜面',
				p3: '',
				tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283'
			}, {
				yishop: '213',

				pid1: 'shop6',
				img: 'img/homeimg/shop2.jpg',
				img2: 'img/nearImages/near_101.jpg',
				img3: 'img/nearImages/near_131.jpg',
				h2: '东瀛扶桑之味',
				p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
				p3: '',
				tcxq: '阿巴内罗烤嫩鸡 鱼肉塔克  百吉果 或者 焦...',
				p4: '郑州市高新区1862m',
				span: '188元/2位',
				s: '￥265'
			}

		]

		//			<!--口碑推荐-->

		var goods2 = [{
				yishop: '78',

				pid1: 'shop7',
				img: 'img/homeimg/shop1.jpg',
				img2: 'img/nearImages/near_91.jpg',
				img3: 'img/nearImages/near_31.jpg',
				h2: '在静谧小院里吃私家秘方的传统风味',
				p2: '聚恩园春饼宴多人餐',
				p3: '',
				tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283'
			}, {
				yishop: '43',

				pid1: 'shop8',
				img: 'img/homeimg/shop2.jpg',
				img2: 'img/nearImages/near_41.jpg',
				img3: 'img/nearImages/near_21.jpg',
				h2: '童年De味道',
				p2: '炙热童年经典荟萃双人餐',
				p3: '',
				tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
				p4: '郑州市高新区1862m',
				span: '188元/2位',
				s: '￥265'
			}, {
				yishop: '233',

				pid1: 'shop9',
				img: 'img/homeimg/shop1.jpg',
				img2: 'img/nearImages/near_21.jpg',
				img3: 'img/nearImages/near_31.jpg',
				h2: ' Pizza RAMO 餐吧',
				p2: '可一次尝到4种口味的拼盘 双人菜单',
				p3: '',
				tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283',
			}, {
				yishop: '878',

				pid1: 'shop10',
				img: 'img/homeimg/shop2.jpg',
				img2: 'img/nearImages/near_31.jpg',
				img3: 'img/nearImages/near_181.jpg',
				h2: 'LA YUN 经典',
				p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
				p3: '',
				tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
				p4: '郑州市高新区1862m',
				span: '188元/2位',
				s: '￥265'
			}, {
				yishop: '4354',

				pid1: 'shop11',
				img: 'img/homeimg/shop1.jpg',
				img2: 'img/nearImages/near_171.jpg',
				img3: 'img/nearImages/near_21.jpg',
				h2: '「高丽参鸡面」两款任选',
				p2: '特别加特色滋补海鲜面',
				p3: '',
				tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283'
			}, {
				yishop: '56',

				pid1: 'shop12',
				img: 'img/homeimg/shop2.jpg',
				img2: 'img/nearImages/near_71.jpg',
				img3: 'img/nearImages/near_41.jpg',
				h2: 'Urban Thai 妈咪料理',
				p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
				p3: '',
				tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
				p4: '郑州市高新区1862m',
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
			pid1: 'near1',
			span: '198元/2位',
			s: '￥356',
			yishop: '137',
			img: 'img/nearImages/near_11.jpg',
			img2: 'img/nearImages/near_31.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
			p4: '郑州市高新区1862m'
		}, {
			pid1: 'near2',
			span: '408元/2位',
			s: '￥688',
			yishop: '45',
			img: 'img/nearImages/near_21.jpg',
			img2: 'img/nearImages/near_41.jpg',
			img3: 'img/nearImages/near_101.jpg',
			h2: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '郑州市高新区1738m'
		}, {
			pid1: 'near3',
			span: '368元/1位',
			s: '￥572',
			yishop: '77',

			img: 'img/nearImages/near_31.jpg',
			img2: 'img/nearImages/near_51.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '郑州市中原区977m'
		}, {
			pid1: 'near4',
			span: '49元/1位',

			s: '￥69',
			yishop: '253',
			img: 'img/nearImages/near_41.jpg',
			img2: 'img/nearImages/near_61.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: 'Tiger Pancake House',
			p2: '可享的丰盛单人早餐',
			p3: '',
			tcxq: '纽约芝士 香浓巧克力 蓝莓...',
			p4: '郑州市高新区3032m'
		}, {
			pid1: 'near5',
			span: '379元/1位',

			s: '￥479',
			yishop: '67',
			img: 'img/nearImages/near_51.jpg',
			img2: 'img/nearImages/near_71.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: ' BLT 美式休闲西餐厅',
			p2: '享受正宗的美式风味',
			p3: '',
			tcxq: '戛纳顶级鱼子酱海鲜拼盘 北欧海鲜浓汤...',
			p4: '郑州市二七区2132m'
		}, {
			pid1: 'near6',
			span: '76元/2位',

			s: '￥89',
			yishop: '329',
			img: 'img/nearImages/near_61.jpg',
			img2: 'img/nearImages/near_81.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Let is Fries 乐薯',
			p2: '品味酥脆鲜香的英式味道',
			p3: '',
			tcxq: '体验装薯条 热狗 炸鱼 三藩薯...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near7',
			span: '68元/1位',

			s: '￥88',
			yishop: '264',
			img: 'img/nearImages/near_71.jpg',
			img2: 'img/nearImages/near_91.jpg',
			img3: 'img/nearImages/near_131.jpg',
			h2: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '郑州市中原区512m'
		}, {
			pid1: 'near8',
			span: '149元/2位',

			s: '￥179',
			yishop: '455',
			img: 'img/nearImages/near_81.jpg',
			img2: 'img/nearImages/near_101.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Pizza RAMO 餐吧',
			p2: '可一次尝到4种口味的拼盘 双人菜单',
			p3: '',
			tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
			p4: '郑州市高新区3772m'
		}, {
			pid1: 'near9',
			span: '198元/2位',
			s: '￥239',
			yishop: '95',
			img: 'img/nearImages/near_91.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_171.jpg',
			h2: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near10',
			span: '58元/1位',

			s: '￥69',
			yishop: '527',
			img: 'img/nearImages/near_101.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_41.jpg',
			h2: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '郑州市金水区1132m'
		}, {
			pid1: 'near11',
			span: '36元/2位',

			s: '￥42',
			yishop: '783',
			img: 'img/nearImages/near_111.jpg',
			img2: 'img/nearImages/near_121.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '郑州市二七区532m'
		}, {
			pid1: 'near12',
			span: '99元/1位',

			s: '￥119',
			yishop: '278',
			img: 'img/nearImages/near_121.jpg',
			img2: 'img/nearImages/near_131.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '东瀛扶桑之味',
			p2: '凤寿司全新单人午餐',
			p3: '',
			tcxq: '简单寿司 鸡蛋寿司 反转寿司 花样寿司 紫菜包饭...',
			p4: '郑州市高新区4132m'
		}, {
			pid1: 'near13',
			span: '78元/1位',

			s: '￥90',
			yishop: '883',
			img: 'img/nearImages/near_131.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_31.jpg',
			h2: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '郑州市高新区1673m'
		}, {
			pid1: 'near14',
			span: '429元/2位',

			s: '￥508',
			yishop: '75',
			img: 'img/nearImages/near_141.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '芝士龙虾仔（伊面底）海白虾两吃 姜葱炒蟹...',
			p4: '郑州市中原区5132m'
		}, {
			pid1: 'near15',
			span: '258元/2位',

			s: '￥309',
			yishop: '79',
			img: 'img/nearImages/near_151.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '丰盛烤肉料理',
			p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
			p3: '',
			tcxq: '海鲜烧烤 秘制牛肉 风味烤肉...',
			p4: '郑州市高新区3232m'
		}, {
			pid1: 'near16',
			span: '168元/2位',

			s: '￥199',
			yishop: '52',
			img: 'img/nearImages/near_161.jpg',
			img2: 'img/nearImages/near_181.jpg',
			img3: 'img/nearImages/near_21.jpg',
			h2: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '郑州市惠济区1132m'
		}, {
			pid1: 'near17',
			span: '588元/2位',

			s: '￥709',
			yishop: '26',
			img: 'img/nearImages/near_171.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_161.jpg',
			h2: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '郑州市高新区2532m'
		}, {
			pid1: 'near18',
			span: '69元/2位',

			s: '￥108',
			yishop: '666',
			img: 'img/nearImages/near_181.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '健康搭配',
			p2: '麦食沙拉单人能量餐',
			p3: '适合轻食爱好者的健康搭配',
			tcxq: '酸奶水果沙拉 水果沙拉 健康考伯色拉...',
			p4: '郑州市中原区1832m'
		}];

		//、、、、、、、、、、、、

		var contentOne = [{
			pid1: 'near2',
			span: '408元/2位',
			s: '￥688',
			yishop: '45',
			img: 'img/nearImages/near_21.jpg',
			img2: 'img/nearImages/near_41.jpg',
			img3: 'img/nearImages/near_101.jpg',
			h2: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '郑州市高新区1738m'
		}, {
			pid1: 'near4',
			span: '49元/1位',

			s: '￥69',
			yishop: '253',
			img: 'img/nearImages/near_41.jpg',
			img2: 'img/nearImages/near_61.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: 'Tiger Pancake House',
			p2: '可享的丰盛单人早餐',
			p3: '',
			tcxq: '纽约芝士 香浓巧克力 蓝莓...',
			p4: '郑州市高新区3032m'
		}, {
			pid1: 'near6',
			span: '76元/2位',

			s: '￥89',
			yishop: '329',
			img: 'img/nearImages/near_61.jpg',
			img2: 'img/nearImages/near_81.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Let is Fries 乐薯',
			p2: '品味酥脆鲜香的英式味道',
			p3: '',
			tcxq: '体验装薯条 热狗 炸鱼 三藩薯...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near12',
			span: '99元/1位',

			s: '￥119',
			yishop: '278',
			img: 'img/nearImages/near_121.jpg',
			img2: 'img/nearImages/near_131.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '东瀛扶桑之味',
			p2: '凤寿司全新单人午餐',
			p3: '',
			tcxq: '简单寿司 鸡蛋寿司 反转寿司 花样寿司 紫菜包饭...',
			p4: '郑州市高新区4132m'
		}, {
			pid1: 'near5',
			span: '379元/1位',

			s: '￥479',
			yishop: '67',
			img: 'img/nearImages/near_51.jpg',
			img2: 'img/nearImages/near_71.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: ' BLT 美式休闲西餐厅',
			p2: '享受正宗的美式风味',
			p3: '',
			tcxq: '戛纳顶级鱼子酱海鲜拼盘 北欧海鲜浓汤...',
			p4: '郑州市二七区2132m'
		}];
		var contentTwo = [{
			pid1: 'near7',
			span: '68元/1位',

			s: '￥88',
			yishop: '264',
			img: 'img/nearImages/near_71.jpg',
			img2: 'img/nearImages/near_91.jpg',
			img3: 'img/nearImages/near_131.jpg',
			h2: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '郑州市中原区512m'
		}, {
			pid1: 'near8',
			span: '149元/2位',

			s: '￥179',
			yishop: '455',
			img: 'img/nearImages/near_81.jpg',
			img2: 'img/nearImages/near_101.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Pizza RAMO 餐吧',
			p2: '可一次尝到4种口味的拼盘 双人菜单',
			p3: '',
			tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
			p4: '郑州市高新区3772m'
		}, {
			pid1: 'near9',
			span: '198元/2位',
			s: '￥239',
			yishop: '95',
			img: 'img/nearImages/near_91.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_171.jpg',
			h2: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near10',
			span: '58元/1位',

			s: '￥69',
			yishop: '527',
			img: 'img/nearImages/near_101.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_41.jpg',
			h2: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '郑州市金水区1132m'
		}, {
			pid1: 'near11',
			span: '36元/2位',

			s: '￥42',
			yishop: '783',
			img: 'img/nearImages/near_111.jpg',
			img2: 'img/nearImages/near_121.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '郑州市二七区532m'
		}, {
			pid1: 'near12',
			span: '99元/1位',

			s: '￥119',
			yishop: '278',
			img: 'img/nearImages/near_121.jpg',
			img2: 'img/nearImages/near_131.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '东瀛扶桑之味',
			p2: '凤寿司全新单人午餐',
			p3: '',
			tcxq: '简单寿司 鸡蛋寿司 反转寿司 花样寿司 紫菜包饭...',
			p4: '郑州市高新区4132m'
		}, {
			pid1: 'near13',
			span: '78元/1位',

			s: '￥90',
			yishop: '883',
			img: 'img/nearImages/near_131.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_31.jpg',
			h2: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '郑州市高新区1673m'
		}, {
			pid1: 'near14',
			span: '429元/2位',

			s: '￥508',
			yishop: '75',
			img: 'img/nearImages/near_141.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '芝士龙虾仔（伊面底）海白虾两吃 姜葱炒蟹...',
			p4: '郑州市中原区5132m'
		}]
		var contentThree = [{
			pid1: 'near13',
			span: '78元/1位',

			s: '￥90',
			yishop: '883',
			img: 'img/nearImages/near_131.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_31.jpg',
			h2: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '郑州市高新区1673m'
		}, {
			pid1: 'near14',
			span: '429元/2位',

			s: '￥508',
			yishop: '75',
			img: 'img/nearImages/near_141.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '芝士龙虾仔（伊面底）海白虾两吃 姜葱炒蟹...',
			p4: '郑州市中原区5132m'
		}, {
			pid1: 'near15',
			span: '258元/2位',

			s: '￥309',
			yishop: '79',
			img: 'img/nearImages/near_151.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '丰盛烤肉料理',
			p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
			p3: '',
			tcxq: '海鲜烧烤 秘制牛肉 风味烤肉...',
			p4: '郑州市高新区3232m'
		}, {
			pid1: 'near16',
			span: '168元/2位',

			s: '￥199',
			yishop: '52',
			img: 'img/nearImages/near_161.jpg',
			img2: 'img/nearImages/near_181.jpg',
			img3: 'img/nearImages/near_21.jpg',
			h2: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '郑州市惠济区1132m'
		}, {
			pid1: 'near17',
			span: '588元/2位',

			s: '￥709',
			yishop: '26',
			img: 'img/nearImages/near_171.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_161.jpg',
			h2: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '郑州市高新区2532m'
		}, {
			pid1: 'near3',
			span: '368元/1位',
			s: '￥572',
			yishop: '77',

			img: 'img/nearImages/near_31.jpg',
			img2: 'img/nearImages/near_51.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '郑州市中原区977m'
		}, {
			pid1: 'near1',
			span: '198元/2位',
			s: '￥356',
			yishop: '137',
			img: 'img/nearImages/near_11.jpg',
			img2: 'img/nearImages/near_31.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
			p4: '郑州市高新区1862m'
		}]

		var contentFour = [{
			pid1: 'near3',
			span: '368元/1位',
			s: '￥572',
			yishop: '77',

			img: 'img/nearImages/near_31.jpg',
			img2: 'img/nearImages/near_51.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '郑州市中原区977m'
		}, {
			pid1: 'near7',
			span: '68元/1位',

			s: '￥88',
			yishop: '264',
			img: 'img/nearImages/near_71.jpg',
			img2: 'img/nearImages/near_91.jpg',
			img3: 'img/nearImages/near_131.jpg',
			h2: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '郑州市中原区512m'
		}, {
			pid1: 'near11',
			span: '36元/2位',

			s: '￥42',
			yishop: '783',
			img: 'img/nearImages/near_111.jpg',
			img2: 'img/nearImages/near_121.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '郑州市二七区532m'
		}]
		var contentFive = [{
			pid1: 'near3',
			span: '368元/1位',
			s: '￥572',
			yishop: '77',

			img: 'img/nearImages/near_31.jpg',
			img2: 'img/nearImages/near_51.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '郑州市中原区977m'
		}, {
			pid1: 'near7',
			span: '68元/1位',

			s: '￥88',
			yishop: '264',
			img: 'img/nearImages/near_71.jpg',
			img2: 'img/nearImages/near_91.jpg',
			img3: 'img/nearImages/near_131.jpg',
			h2: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '郑州市中原区512m'
		}, {
			pid1: 'near11',
			span: '36元/2位',

			s: '￥42',
			yishop: '783',
			img: 'img/nearImages/near_111.jpg',
			img2: 'img/nearImages/near_121.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '郑州市二七区532m'
		}, {
			pid1: 'near2',
			span: '408元/2位',
			s: '￥688',
			yishop: '45',
			img: 'img/nearImages/near_21.jpg',
			img2: 'img/nearImages/near_41.jpg',
			img3: 'img/nearImages/near_101.jpg',
			h2: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '郑州市高新区1738m'
		}, {
			pid1: 'near5',
			span: '379元/1位',

			s: '￥479',
			yishop: '67',
			img: 'img/nearImages/near_51.jpg',
			img2: 'img/nearImages/near_71.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: ' BLT 美式休闲西餐厅',
			p2: '享受正宗的美式风味',
			p3: '',
			tcxq: '戛纳顶级鱼子酱海鲜拼盘 北欧海鲜浓汤...',
			p4: '郑州市二七区2132m'
		}, {
			pid1: 'near6',
			span: '76元/2位',

			s: '￥89',
			yishop: '329',
			img: 'img/nearImages/near_61.jpg',
			img2: 'img/nearImages/near_81.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Let is Fries 乐薯',
			p2: '品味酥脆鲜香的英式味道',
			p3: '',
			tcxq: '体验装薯条 热狗 炸鱼 三藩薯...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near9',
			span: '198元/2位',
			s: '￥239',
			yishop: '95',
			img: 'img/nearImages/near_91.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_171.jpg',
			h2: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near10',
			span: '58元/1位',

			s: '￥69',
			yishop: '527',
			img: 'img/nearImages/near_101.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_41.jpg',
			h2: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '郑州市金水区1132m'
		}, {
			pid1: 'near13',
			span: '78元/1位',

			s: '￥90',
			yishop: '883',
			img: 'img/nearImages/near_131.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_31.jpg',
			h2: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '郑州市高新区1673m'
		}, {
			pid1: 'near16',
			span: '168元/2位',

			s: '￥199',
			yishop: '52',
			img: 'img/nearImages/near_161.jpg',
			img2: 'img/nearImages/near_181.jpg',
			img3: 'img/nearImages/near_21.jpg',
			h2: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '郑州市惠济区1132m'
		}, {
			pid1: 'near17',
			span: '588元/2位',

			s: '￥709',
			yishop: '26',
			img: 'img/nearImages/near_171.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_161.jpg',
			h2: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '郑州市高新区2532m'
		}, {
			pid1: 'near18',
			span: '69元/2位',

			s: '￥108',
			yishop: '666',
			img: 'img/nearImages/near_181.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '健康搭配',
			p2: '麦食沙拉单人能量餐',
			p3: '适合轻食爱好者的健康搭配',
			tcxq: '酸奶水果沙拉 水果沙拉 健康考伯色拉...',
			p4: '郑州市中原区1832m'
		}]
		var contentSix = [{
			pid1: 'near3',
			span: '368元/1位',
			s: '￥572',
			yishop: '77',

			img: 'img/nearImages/near_31.jpg',
			img2: 'img/nearImages/near_51.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '郑州市中原区977m'
		}, {
			pid1: 'near7',
			span: '68元/1位',

			s: '￥88',
			yishop: '264',
			img: 'img/nearImages/near_71.jpg',
			img2: 'img/nearImages/near_91.jpg',
			img3: 'img/nearImages/near_131.jpg',
			h2: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '郑州市中原区512m'
		}, {
			pid1: 'near11',
			span: '36元/2位',

			s: '￥42',
			yishop: '783',
			img: 'img/nearImages/near_111.jpg',
			img2: 'img/nearImages/near_121.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '郑州市二七区532m'
		}, {
			pid1: 'near2',
			span: '408元/2位',
			s: '￥688',
			yishop: '45',
			img: 'img/nearImages/near_21.jpg',
			img2: 'img/nearImages/near_41.jpg',
			img3: 'img/nearImages/near_101.jpg',
			h2: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '郑州市高新区1738m'
		}, {
			pid1: 'near5',
			span: '379元/1位',

			s: '￥479',
			yishop: '67',
			img: 'img/nearImages/near_51.jpg',
			img2: 'img/nearImages/near_71.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: ' BLT 美式休闲西餐厅',
			p2: '享受正宗的美式风味',
			p3: '',
			tcxq: '戛纳顶级鱼子酱海鲜拼盘 北欧海鲜浓汤...',
			p4: '郑州市二七区2132m'
		}, {
			pid1: 'near6',
			span: '76元/2位',

			s: '￥89',
			yishop: '329',
			img: 'img/nearImages/near_61.jpg',
			img2: 'img/nearImages/near_81.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Let is Fries 乐薯',
			p2: '品味酥脆鲜香的英式味道',
			p3: '',
			tcxq: '体验装薯条 热狗 炸鱼 三藩薯...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near9',
			span: '198元/2位',
			s: '￥239',
			yishop: '95',
			img: 'img/nearImages/near_91.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_171.jpg',
			h2: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near10',
			span: '58元/1位',

			s: '￥69',
			yishop: '527',
			img: 'img/nearImages/near_101.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_41.jpg',
			h2: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '郑州市金水区1132m'
		}, {
			pid1: 'near13',
			span: '78元/1位',

			s: '￥90',
			yishop: '883',
			img: 'img/nearImages/near_131.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_31.jpg',
			h2: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '郑州市高新区1673m'
		}, {
			pid1: 'near16',
			span: '168元/2位',

			s: '￥199',
			yishop: '52',
			img: 'img/nearImages/near_161.jpg',
			img2: 'img/nearImages/near_181.jpg',
			img3: 'img/nearImages/near_21.jpg',
			h2: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '郑州市惠济区1132m'
		}, {
			pid1: 'near17',
			span: '588元/2位',

			s: '￥709',
			yishop: '26',
			img: 'img/nearImages/near_171.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_161.jpg',
			h2: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '郑州市高新区2532m'
		}, {
			pid1: 'near18',
			span: '69元/2位',

			s: '￥108',
			yishop: '666',
			img: 'img/nearImages/near_181.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '健康搭配',
			p2: '麦食沙拉单人能量餐',
			p3: '适合轻食爱好者的健康搭配',
			tcxq: '酸奶水果沙拉 水果沙拉 健康考伯色拉...',
			p4: '郑州市中原区1832m'
		}, {
			pid1: 'near1',
			span: '198元/2位',
			s: '￥356',
			yishop: '137',
			img: 'img/nearImages/near_11.jpg',
			img2: 'img/nearImages/near_31.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
			p4: '郑州市高新区1862m'
		}, {
			pid1: 'near4',
			span: '49元/1位',

			s: '￥69',
			yishop: '253',
			img: 'img/nearImages/near_41.jpg',
			img2: 'img/nearImages/near_61.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: 'Tiger Pancake House',
			p2: '可享的丰盛单人早餐',
			p3: '',
			tcxq: '纽约芝士 香浓巧克力 蓝莓...',
			p4: '郑州市高新区3032m'
		}, {
			pid1: 'near8',
			span: '149元/2位',

			s: '￥179',
			yishop: '455',
			img: 'img/nearImages/near_81.jpg',
			img2: 'img/nearImages/near_101.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Pizza RAMO 餐吧',
			p2: '可一次尝到4种口味的拼盘 双人菜单',
			p3: '',
			tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
			p4: '郑州市高新区3772m'
		}, {
			pid1: 'near12',
			span: '99元/1位',

			s: '￥119',
			yishop: '278',
			img: 'img/nearImages/near_121.jpg',
			img2: 'img/nearImages/near_131.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '东瀛扶桑之味',
			p2: '凤寿司全新单人午餐',
			p3: '',
			tcxq: '简单寿司 鸡蛋寿司 反转寿司 花样寿司 紫菜包饭...',
			p4: '郑州市高新区4132m'
		}]
		var contentSeven = [{
			pid1: 'near1',
			span: '198元/2位',
			s: '￥356',
			yishop: '137',
			img: 'img/nearImages/near_11.jpg',
			img2: 'img/nearImages/near_31.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
			p4: '郑州市高新区1862m'
		}, {
			pid1: 'near2',
			span: '408元/2位',
			s: '￥688',
			yishop: '45',
			img: 'img/nearImages/near_21.jpg',
			img2: 'img/nearImages/near_41.jpg',
			img3: 'img/nearImages/near_101.jpg',
			h2: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '郑州市高新区1738m'
		}, {
			pid1: 'near3',
			span: '368元/1位',
			s: '￥572',
			yishop: '77',

			img: 'img/nearImages/near_31.jpg',
			img2: 'img/nearImages/near_51.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '郑州市中原区977m'
		}, {
			pid1: 'near4',
			span: '49元/1位',

			s: '￥69',
			yishop: '253',
			img: 'img/nearImages/near_41.jpg',
			img2: 'img/nearImages/near_61.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: 'Tiger Pancake House',
			p2: '可享的丰盛单人早餐',
			p3: '',
			tcxq: '纽约芝士 香浓巧克力 蓝莓...',
			p4: '郑州市高新区3032m'
		}, {
			pid1: 'near5',
			span: '379元/1位',

			s: '￥479',
			yishop: '67',
			img: 'img/nearImages/near_51.jpg',
			img2: 'img/nearImages/near_71.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: ' BLT 美式休闲西餐厅',
			p2: '享受正宗的美式风味',
			p3: '',
			tcxq: '戛纳顶级鱼子酱海鲜拼盘 北欧海鲜浓汤...',
			p4: '郑州市二七区2132m'
		}, {
			pid1: 'near6',
			span: '76元/2位',

			s: '￥89',
			yishop: '329',
			img: 'img/nearImages/near_61.jpg',
			img2: 'img/nearImages/near_81.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Let is Fries 乐薯',
			p2: '品味酥脆鲜香的英式味道',
			p3: '',
			tcxq: '体验装薯条 热狗 炸鱼 三藩薯...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near7',
			span: '68元/1位',

			s: '￥88',
			yishop: '264',
			img: 'img/nearImages/near_71.jpg',
			img2: 'img/nearImages/near_91.jpg',
			img3: 'img/nearImages/near_131.jpg',
			h2: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '郑州市中原区512m'
		}, {
			pid1: 'near8',
			span: '149元/2位',

			s: '￥179',
			yishop: '455',
			img: 'img/nearImages/near_81.jpg',
			img2: 'img/nearImages/near_101.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Pizza RAMO 餐吧',
			p2: '可一次尝到4种口味的拼盘 双人菜单',
			p3: '',
			tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
			p4: '郑州市高新区3772m'
		}, {
			pid1: 'near9',
			span: '198元/2位',
			s: '￥239',
			yishop: '95',
			img: 'img/nearImages/near_91.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_171.jpg',
			h2: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near10',
			span: '58元/1位',

			s: '￥69',
			yishop: '527',
			img: 'img/nearImages/near_101.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_41.jpg',
			h2: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '郑州市金水区1132m'
		}, {
			pid1: 'near11',
			span: '36元/2位',

			s: '￥42',
			yishop: '783',
			img: 'img/nearImages/near_111.jpg',
			img2: 'img/nearImages/near_121.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '郑州市二七区532m'
		}, {
			pid1: 'near12',
			span: '99元/1位',

			s: '￥119',
			yishop: '278',
			img: 'img/nearImages/near_121.jpg',
			img2: 'img/nearImages/near_131.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '东瀛扶桑之味',
			p2: '凤寿司全新单人午餐',
			p3: '',
			tcxq: '简单寿司 鸡蛋寿司 反转寿司 花样寿司 紫菜包饭...',
			p4: '郑州市高新区4132m'
		}, {
			pid1: 'near13',
			span: '78元/1位',

			s: '￥90',
			yishop: '883',
			img: 'img/nearImages/near_131.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_31.jpg',
			h2: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '郑州市高新区1673m'
		}, {
			pid1: 'near14',
			span: '429元/2位',

			s: '￥508',
			yishop: '75',
			img: 'img/nearImages/near_141.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '芝士龙虾仔（伊面底）海白虾两吃 姜葱炒蟹...',
			p4: '郑州市中原区5132m'
		}, {
			pid1: 'near15',
			span: '258元/2位',

			s: '￥309',
			yishop: '79',
			img: 'img/nearImages/near_151.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '丰盛烤肉料理',
			p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
			p3: '',
			tcxq: '海鲜烧烤 秘制牛肉 风味烤肉...',
			p4: '郑州市高新区3232m'
		}, {
			pid1: 'near16',
			span: '168元/2位',

			s: '￥199',
			yishop: '52',
			img: 'img/nearImages/near_161.jpg',
			img2: 'img/nearImages/near_181.jpg',
			img3: 'img/nearImages/near_21.jpg',
			h2: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '郑州市惠济区1132m'
		}, {
			pid1: 'near17',
			span: '588元/2位',

			s: '￥709',
			yishop: '26',
			img: 'img/nearImages/near_171.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_161.jpg',
			h2: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '郑州市高新区2532m'
		}, {
			img: 'img/nearImages/near_181.jpg',
			h2: '健康搭配',
			p2: '麦食沙拉单人能量餐',
			p3: '适合轻食爱好者的健康搭配',
			p4: '郑州市中原区1832m'
		}]

		var contentEight = [{
			pid1: 'near2',
			span: '408元/2位',
			s: '￥688',
			yishop: '45',
			img: 'img/nearImages/near_21.jpg',
			img2: 'img/nearImages/near_41.jpg',
			img3: 'img/nearImages/near_101.jpg',
			h2: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '郑州市高新区1738m'
		}, {
			pid1: 'near3',
			span: '368元/1位',
			s: '￥572',
			yishop: '77',

			img: 'img/nearImages/near_31.jpg',
			img2: 'img/nearImages/near_51.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '郑州市中原区977m'
		}, {
			pid1: 'near4',
			span: '49元/1位',

			s: '￥69',
			yishop: '253',
			img: 'img/nearImages/near_41.jpg',
			img2: 'img/nearImages/near_61.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: 'Tiger Pancake House',
			p2: '可享的丰盛单人早餐',
			p3: '',
			tcxq: '纽约芝士 香浓巧克力 蓝莓...',
			p4: '郑州市高新区3032m'
		}, {
			pid1: 'near18',
			span: '69元/2位',

			s: '￥108',
			yishop: '666',
			img: 'img/nearImages/near_181.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '健康搭配',
			p2: '麦食沙拉单人能量餐',
			p3: '适合轻食爱好者的健康搭配',
			tcxq: '酸奶水果沙拉 水果沙拉 健康考伯色拉...',
			p4: '郑州市中原区1832m'
		}, {
			pid1: 'near16',
			span: '168元/2位',

			s: '￥199',
			yishop: '52',
			img: 'img/nearImages/near_161.jpg',
			img2: 'img/nearImages/near_181.jpg',
			img3: 'img/nearImages/near_21.jpg',
			h2: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '郑州市惠济区1132m'
		}]
		var contentNine = [{
			pid1: 'near14',
			span: '429元/2位',

			s: '￥508',
			yishop: '75',
			img: 'img/nearImages/near_141.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '芝士龙虾仔（伊面底）海白虾两吃 姜葱炒蟹...',
			p4: '郑州市中原区5132m'
		}, {
			pid1: 'near17',
			span: '588元/2位',

			s: '￥709',
			yishop: '26',
			img: 'img/nearImages/near_171.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_161.jpg',
			h2: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '郑州市高新区2532m'
		}, {
			pid1: 'near15',
			span: '258元/2位',

			s: '￥309',
			yishop: '79',
			img: 'img/nearImages/near_151.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '丰盛烤肉料理',
			p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
			p3: '',
			tcxq: '海鲜烧烤 秘制牛肉 风味烤肉...',
			p4: '郑州市高新区3232m'
		}, {
			pid1: 'near8',
			span: '149元/2位',

			s: '￥179',
			yishop: '455',
			img: 'img/nearImages/near_81.jpg',
			img2: 'img/nearImages/near_101.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Pizza RAMO 餐吧',
			p2: '可一次尝到4种口味的拼盘 双人菜单',
			p3: '',
			tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
			p4: '郑州市高新区3772m'
		}, {
			pid1: 'near9',
			span: '198元/2位',
			s: '￥239',
			yishop: '95',
			img: 'img/nearImages/near_91.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_171.jpg',
			h2: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near1',
			span: '198元/2位',
			s: '￥356',
			yishop: '137',
			img: 'img/nearImages/near_11.jpg',
			img2: 'img/nearImages/near_31.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
			p4: '郑州市高新区1862m'
		}, ]
		var contentTen = [{
			pid1: 'near17',
			span: '588元/2位',

			s: '￥709',
			yishop: '26',
			img: 'img/nearImages/near_171.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_161.jpg',
			h2: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '郑州市高新区2532m'
		}, {
			pid1: 'near13',
			span: '78元/1位',

			s: '￥90',
			yishop: '883',
			img: 'img/nearImages/near_131.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_31.jpg',
			h2: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '郑州市高新区1673m'
		}, {
			pid1: 'near10',
			span: '58元/1位',

			s: '￥69',
			yishop: '527',
			img: 'img/nearImages/near_101.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_41.jpg',
			h2: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '郑州市金水区1132m'
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
	.factory('allgoodShop', function() {

		var allgoodShop = [{
				yishop: '545',

				pid1: 'shop1',
				img: 'img/homeimg/pic_1.jpg',
				img2: 'img/homeimg/pic_2.jpg',
				img3: 'img/homeimg/pic_3.jpg',
				h2: '桥餐厅精致双人餐',
				p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
				p3: '',
				tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283'
			}, {
				yishop: '344',
				pid1: 'shop2',
				img: 'img/homeimg/pic_3.jpg',
				img2: 'img/homeimg/pic_4.jpg',
				img3: 'img/homeimg/pic_5.jpg',
				h2: 'Urban Thai 妈咪料理',
				p2: '炙热童年经典荟萃 童年De味道',
				p3: '',
				tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
				p4: '郑州市高新区1862m',
				span: '188元/2位',
				s: '￥265'
			}, {
				yishop: '34',

				pid1: 'shop3',
				img: 'img/homeimg/pic_6.jpg',
				img2: 'img/homeimg/pic_7.jpg',
				img3: 'img/homeimg/pic_8.jpg',
				h2: '桥餐厅精致双人餐',
				p2: '可一次尝到4种口味的拼盘 双人菜单',
				p3: '',
				tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283'
			}, {
				yishop: '123',

				pid1: 'shop4',
				img: 'img/homeimg/pic_9.jpg',
				img2: 'img/homeimg/pic_10.jpg',
				img3: 'img/homeimg/pic_11.jpg',
				h2: 'Urban Thai 妈咪料理',
				p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
				p3: '',
				tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
				p4: '郑州市高新区1862m',
				span: '188元/2位',
				s: '￥265'
			}, {
				yishop: '98',

				pid1: 'shop5',
				img: 'img/homeimg/pic_12.jpg',
				img2: 'img/homeimg/pic_13.jpg',
				img3: 'img/homeimg/pic_14.jpg',
				h2: '「高丽参鸡面」两款任选',
				p2: '特别加特色滋补海鲜面',
				p3: '',
				tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283'
			}, {
				yishop: '213',

				pid1: 'shop6',
				img: 'img/homeimg/pic_15.jpg',
				img2: 'img/homeimg/pic_16.jpg',
				img3: 'img/homeimg/pic_17.jpg',
				h2: '东瀛扶桑之味',
				p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
				p3: '',
				tcxq: '阿巴内罗烤嫩鸡 鱼肉塔克  百吉果 或者 焦...',
				p4: '郑州市高新区1862m',
				span: '188元/2位',
				s: '￥265'
			}, {
				yishop: '78',

				pid1: 'shop7',
				img: 'img/homeimg/pic_18.jpg',
				img2: 'img/homeimg/pic_19.jpg',
				img3: 'img/homeimg/pic_20.jpg',
				h2: '在静谧小院里吃私家秘方的传统风味',
				p2: '聚恩园春饼宴多人餐',
				p3: '',
				tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283'
			}, {
				yishop: '43',

				pid1: 'shop8',
				img: 'img/homeimg/pic_2.jpg',
				img2: 'img/homeimg/pic_13.jpg',
				img3: 'img/homeimg/pic_16.jpg',
				h2: '童年De味道',
				p2: '炙热童年经典荟萃双人餐',
				p3: '',
				tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
				p4: '郑州市高新区1862m',
				span: '188元/2位',
				s: '￥265'
			}, {
				yishop: '233',

				pid1: 'shop9',
				img: 'img/homeimg/pic_5.jpg',
				img2: 'img/homeimg/pic_8.jpg',
				img3: 'img/homeimg/pic_16.jpg',
				h2: ' Pizza RAMO 餐吧',
				p2: '可一次尝到4种口味的拼盘 双人菜单',
				p3: '',
				tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283',
			}, {
				yishop: '878',

				pid1: 'shop10',
				img: 'img/homeimg/pic_11.jpg',
				img2: 'img/homeimg/pic_13.jpg',
				img3: 'img/homeimg/pic_19.jpg',
				h2: 'LA YUN 经典',
				p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
				p3: '',
				tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
				p4: '郑州市高新区1862m',
				span: '188元/2位',
				s: '￥265'
			}, {
				yishop: '4354',

				pid1: 'shop11',
				img: 'img/homeimg/pic_9.jpg',
				img2: 'img/homeimg/pic_2.jpg',
				img3: 'img/homeimg/pic_12.jpg',
				h2: '「高丽参鸡面」两款任选',
				p2: '特别加特色滋补海鲜面',
				p3: '',
				tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
				p4: '郑州市高新区1862m',
				span: '168元/2位',
				s: '￥283'
			}, {
				yishop: '56',

				pid1: 'shop12',
				img: 'img/homeimg/pic_17.jpg',
				img2: 'img/homeimg/pic_7.jpg',
				img3: 'img/homeimg/pic_17.jpg',
				h2: 'Urban Thai 妈咪料理',
				p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
				p3: '',
				tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
				p4: '郑州市高新区1862m',
				span: '188元/2位',
				s: '￥265'
			}, {
			pid1: 'near1',
			span: '198元/2位',
			s: '￥356',
			yishop: '137',
			img: 'img/nearImages/near_11.jpg',
			img2: 'img/nearImages/near_31.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '阿巴内罗烤嫩鸡 或者 鱼肉塔克  百吉果 或者 焦...',
			p4: '郑州市高新区1862m'
		}, {
			pid1: 'near2',
			span: '408元/2位',
			s: '￥688',
			yishop: '45',
			img: 'img/nearImages/near_21.jpg',
			img2: 'img/nearImages/near_41.jpg',
			img3: 'img/nearImages/near_101.jpg',
			h2: '瑞吉酒店天宝阁周六早午餐',
			p2: '世界名厨协会荣誉会长担任主厨',
			p3: '整本菜单的精品无限吃，酒水无限享',
			tcxq: '蘑菇蔬菜沙拉，中华海藻，韩式辣白菜，味增汤...',
			p4: '郑州市高新区1738m'
		}, {
			pid1: 'near3',
			span: '368元/1位',
			s: '￥572',
			yishop: '77',

			img: 'img/nearImages/near_31.jpg',
			img2: 'img/nearImages/near_51.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: 'MANDRILL 单人套餐',
			p2: '机车主题餐厅 地道小酒馆',
			p3: '',
			tcxq: '慕尼黑香肠沙拉 牛排 鹅肝 鲈鱼 红酒...',
			p4: '郑州市中原区977m'
		}, {
			pid1: 'near4',
			span: '49元/1位',

			s: '￥69',
			yishop: '253',
			img: 'img/nearImages/near_41.jpg',
			img2: 'img/nearImages/near_61.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: 'Tiger Pancake House',
			p2: '可享的丰盛单人早餐',
			p3: '',
			tcxq: '纽约芝士 香浓巧克力 蓝莓...',
			p4: '郑州市高新区3032m'
		}, {
			pid1: 'near5',
			span: '379元/1位',

			s: '￥479',
			yishop: '67',
			img: 'img/nearImages/near_51.jpg',
			img2: 'img/nearImages/near_71.jpg',
			img3: 'img/nearImages/near_81.jpg',
			h2: ' BLT 美式休闲西餐厅',
			p2: '享受正宗的美式风味',
			p3: '',
			tcxq: '戛纳顶级鱼子酱海鲜拼盘 北欧海鲜浓汤...',
			p4: '郑州市二七区2132m'
		}, {
			pid1: 'near6',
			span: '76元/2位',

			s: '￥89',
			yishop: '329',
			img: 'img/nearImages/near_61.jpg',
			img2: 'img/nearImages/near_81.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Let is Fries 乐薯',
			p2: '品味酥脆鲜香的英式味道',
			p3: '',
			tcxq: '体验装薯条 热狗 炸鱼 三藩薯...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near7',
			span: '68元/1位',

			s: '￥88',
			yishop: '264',
			img: 'img/nearImages/near_71.jpg',
			img2: 'img/nearImages/near_91.jpg',
			img3: 'img/nearImages/near_131.jpg',
			h2: '童年De味道',
			p2: '炙热童年经典荟萃双人餐',
			p3: '',
			tcxq: '糕点拼盘 秘拌豆皮黄瓜 酸菜粉丝 酱肉拼盘1份...',
			p4: '郑州市中原区512m'
		}, {
			pid1: 'near8',
			span: '149元/2位',

			s: '￥179',
			yishop: '455',
			img: 'img/nearImages/near_81.jpg',
			img2: 'img/nearImages/near_101.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: ' Pizza RAMO 餐吧',
			p2: '可一次尝到4种口味的拼盘 双人菜单',
			p3: '',
			tcxq: '金枪鱼洋葱橄榄 意大利辣肠 酸辣鸡肉 香肠蘑...',
			p4: '郑州市高新区3772m'
		}, {
			pid1: 'near9',
			span: '198元/2位',
			s: '￥239',
			yishop: '95',
			img: 'img/nearImages/near_91.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_171.jpg',
			h2: 'LA YUN 经典',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '双人餐',
			tcxq: '炭烤鸡排加奶油蘑菇汁 谷饲猪肋排 芝士吐司...',
			p4: '郑州市高新区1132m'
		}, {
			pid1: 'near10',
			span: '58元/1位',

			s: '￥69',
			yishop: '527',
			img: 'img/nearImages/near_101.jpg',
			img2: 'img/nearImages/near_111.jpg',
			img3: 'img/nearImages/near_41.jpg',
			h2: '格调火锅店',
			p2: '体验纯正「shabushabu」滋味',
			p3: '',
			tcxq: '前菜，配菜盘，甜品不定期更换，以店内菜品为主...',
			p4: '郑州市金水区1132m'
		}, {
			pid1: 'near11',
			span: '36元/2位',

			s: '￥42',
			yishop: '783',
			img: 'img/nearImages/near_111.jpg',
			img2: 'img/nearImages/near_121.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '「高丽参鸡面」两款任选',
			p2: '特别加特色滋补海鲜面',
			p3: '',
			tcxq: '招牌海鲜面 宽面，鲜虾，鱿鱼条，蚬子，蔬菜...',
			p4: '郑州市二七区532m'
		}, {
			pid1: 'near12',
			span: '99元/1位',

			s: '￥119',
			yishop: '278',
			img: 'img/nearImages/near_121.jpg',
			img2: 'img/nearImages/near_131.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '东瀛扶桑之味',
			p2: '凤寿司全新单人午餐',
			p3: '',
			tcxq: '简单寿司 鸡蛋寿司 反转寿司 花样寿司 紫菜包饭...',
			p4: '郑州市高新区4132m'
		}, {
			pid1: 'near13',
			span: '78元/1位',

			s: '￥90',
			yishop: '883',
			img: 'img/nearImages/near_131.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_31.jpg',
			h2: '在静谧小院里吃私家秘方的传统风味',
			p2: '聚恩园春饼宴多人餐',
			p3: '',
			tcxq: '精炖牛腩 红烧肉 肉丸汤 招牌痛快大肘子...',
			p4: '郑州市高新区1673m'
		}, {
			pid1: 'near14',
			span: '429元/2位',

			s: '￥508',
			yishop: '75',
			img: 'img/nearImages/near_141.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_91.jpg',
			h2: 'Q Mex Bar & Grill 双人餐',
			p2: '每一口都是浓郁滋味 「百吉果」与「焦糖布丁」',
			p3: '',
			tcxq: '芝士龙虾仔（伊面底）海白虾两吃 姜葱炒蟹...',
			p4: '郑州市中原区5132m'
		}, {
			pid1: 'near15',
			span: '258元/2位',

			s: '￥309',
			yishop: '79',
			img: 'img/nearImages/near_151.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '丰盛烤肉料理',
			p2: '牛匠牛上牛韩国烤肉俱乐部双人餐',
			p3: '',
			tcxq: '海鲜烧烤 秘制牛肉 风味烤肉...',
			p4: '郑州市高新区3232m'
		}, {
			pid1: 'near16',
			span: '168元/2位',

			s: '￥199',
			yishop: '52',
			img: 'img/nearImages/near_161.jpg',
			img2: 'img/nearImages/near_181.jpg',
			img3: 'img/nearImages/near_21.jpg',
			h2: '享用雪龙和牛等多种顶级食材',
			p2: '尚水长廊全天尊享单人餐',
			p3: '',
			tcxq: '咖喱牛腩 咸鱼蒸肉饼 炸牛排 芝士三文鱼...',
			p4: '郑州市惠济区1132m'
		}, {
			pid1: 'near17',
			span: '588元/2位',

			s: '￥709',
			yishop: '26',
			img: 'img/nearImages/near_171.jpg',
			img2: 'img/nearImages/near_151.jpg',
			img3: 'img/nearImages/near_161.jpg',
			h2: '多明哥餐厅双人/四人套餐',
			p2: '酸辣爽口的浓郁墨西哥风味',
			p3: '',
			tcxq: '墨西哥烤玉米 烧鸡肉沙拉 牛肉卷 牛肉派...',
			p4: '郑州市高新区2532m'
		}, {
			pid1: 'near18',
			span: '69元/2位',

			s: '￥108',
			yishop: '666',
			img: 'img/nearImages/near_181.jpg',
			img2: 'img/nearImages/near_161.jpg',
			img3: 'img/nearImages/near_61.jpg',
			h2: '健康搭配',
			p2: '麦食沙拉单人能量餐',
			p3: '适合轻食爱好者的健康搭配',
			tcxq: '酸奶水果沙拉 水果沙拉 健康考伯色拉...',
			p4: '郑州市中原区1832m'
		}]
		return {
			all: function() {
				return allgoodShop;
			},

			get: function(meId) {
				for(var i = 0; i < allgoodShop.length; i++) {
					if(allgoodShop[i].pid1 == meId) {
						return allgoodShop[i];
					}
				}
				return null;
			}
		};
	})