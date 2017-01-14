angular.module('starter.services', [])
	//个人中心数据
	.factory('Persons', function() {
		var persons = [{
			icon: 'ion-clipboard ',
			id: 'order',
			name: '我的订单'
		}, {
			icon: 'ion-location',
			id: 'address',
			name: '我的地址'
		}, {
			icon: 'ion-ios-pricetags-outline',
			id: 'sales',
			name: '我的销售'
		}, {
			icon: 'ion-ios-cart ',
			id: 'cart',
			name: '购物车'
		}, {
			icon: 'ion-star ',
			id: 'set',
			name: '我的设置'
		}];
		return {
			all: function() {
				return persons;
			},
			remove: function(person) {
				chats.splice(persons.indexOf(person), 1);
			},
			get: function(personId) {
				for(var i = 0; i < person.length; i++) {
					if(persons[i].id === parseInt(personId)) {
						return persons[i];
					}
				}
				return null;
			}
		};
	})
	//订单
	.factory('Orders', function() {
		return {
			all: function() {
				return [{
					id: '月小332',
					product: '二手篮球',
					state: '已发货',
					simg: 'img/pensonImage/t7.jpg'
				}, {
					id: '大网123',
					product: '精品服饰',
					state: '待付款',
					simg: 'img/pensonImage/t4.jpg'
				}, {
					id: 'WebGry234',
					product: '吉他',
					state: '待评论',
					simg: 'img/pensonImage/3.jpg'
				}]
			}
		}
	})
	//购物车
	.factory('Carts', function() {
		return {
			all: function() {
				return [{
					id: '月小332',
					product: '二手篮球',
					price: '￥84',
					simg: 'img/pensonImage/t7.jpg'
				}, { 
					id: '大网123',
					product: '精品服饰',
					price: '￥65',
					simg: 'img/pensonImage/t4.jpg'
				}, {
					id: 'WebGry234',
					product: '吉他',
					price: '￥128',
					simg: 'img/pensonImage/3.jpg'
				}]
			}
		}
	})
	//地址
	.factory('Addresss', function() {
		return {
			all: function() {
				return [{
					uname: '张全蛋',
					tel: '13593022314',
					address: '河南省洛阳市洛龙区李村镇洛阳师范学院伊滨校区'
				}, {
					uname: '李小花',
					tel: '13893122314',
					address: '河南省洛阳市洛龙区李村镇洛阳师范学院伊滨校区'
				}, {
					uname: '赵铁柱',
					tel: '15673242343',
					address: '河南省洛阳市洛龙区李村镇洛阳师范学院伊滨校区'
				}]
			}
		}
	})

//首页数据
.factory('index', function() {
		return {
			img: function() {
				return [{
					img: 'img/indexImages/banner04.jpeg'
				}, {
					img: 'img/indexImages/banner05.jpeg'
				}, {
					img: 'img/indexImages/banner06.jpeg'
				}, {
					img: 'img/indexImages/banner07.jpeg'
				}, ]
			},
			goods: function() {
				return [{
					title: '果粉的颜色之旅-银白与鲜红的美妙碰撞',
					src: 'img/indexImages/indeximg01.jpeg',
					pname: 'Tom',
					quality: '全新',
					url: 'index01',
				}, {
					title: '十多年学生党的学习用品使用报告',
					src: 'img/indexImages/indeximg02.jpeg',
					pname: 'Jerry',
					quality: '全新',
					url: 'index02',
				}, {
					title: '超实用的旅行小物，帮你分分钟摆脱尴尬！',
					src: 'img/indexImages/indeximg03.jpeg',
					pname: 'Tom',
					quality: '九成新',
					url: 'index03',
				}, {
					title: '关于索尼，不只有产品，还有情怀',
					src: 'img/indexImages/indeximg04.jpeg',
					pname: 'Jerry',
					quality: '八成新',
					url: 'index04',
				}, ]
			}

		}
	})
	//详情页数据
	.factory('Info', function() {
		var infos = [{
			id: 'detail01',
			info1: 'indexImg012.jpeg',
			info2: '苹果 iPhone 7 Plus',
			info3: '274人喜欢',
			info4: '拥有金色、银色、玫瑰金色、黑色、亮黑色五种颜色。Home键全新设计，添加了振动反馈。支持IP67防溅防水防尘功能，双摄像头，防抖功能，新增了速度更快的A10 Fusion处理器。推出新耳机Apple AirPods，采用W1芯片，有传感器，电池，都放在小小的耳机机身中。',
			info5: 'detail01.jpg',
			info6: '全新',
			info7: '6388.0',
			info8: 'phone'
		}, {
			id: 'detail02',
			info1: 'indexImg014.jpeg',
			info2: '苹果 iPad mini4',
			info3: '200人喜欢',
			info4: '抛去性能以及续航能力这些偏参数的数据之外，本款iPad mini 4针对消费者最为直观上的提升便是屏幕素质的增强。经过Spyder4Elite测试之后，iPad mini 4 sRGB的覆盖率99%，与iPad Air 2的98%不相上下。除此之外，iPad mini 4的屏幕工艺也升级为全贴合，从而可以让屏幕看起来更加通透，增强屏幕的显示效果。不过，iPad mini 4的屏幕维修成本也提升了不少。 除了屏幕的大幅度升级之外，像是CPU、GPU、内存等也有一定的提升，内存提升至2GB，处理器也升级到1.5GHz的A8，从具体的跑分软件上也可直观看出，跟前作相比提升明显，当然与iPad Air 2还是有着不小的差距。不过，iPad mini 4电池容量由上一代的6471mAh缩水至如今的5124mAh，但在实际测试中发现小电池的续航能力也与之前的mini系列相差不大，甚至还要更为优秀些。或许，新的处理器制程起到了一定的作用，当然这只是测试结果，实际展现还是要看使用习惯。',
			info5: 'detail01.jpg',
			info6: '全新',
			info7: '2668.0',
			info8: 'phone'
		}, {
			id: 'detail03',
			info1: 'indexImg017.jpg',
			info2: '普乐士 双面胶胶带',
			info3: '267人喜欢',
			info4: '最爱的修正带系列啊 颜色很多的 我比较喜欢这个紫色的上面有可以转动的支架。移到最上面方便手握 移到最下面帮助涂改平整 还有小滑轮可以把纸张划平哦 而且带芯的材料大部分是天然的 很健康的',
			info5: 'detail02.jpeg',
			info6: '全新',
			info7: '8.5',
			info8: 'learn'
		}, {
			id: 'detail04',
			info1: 'indexImg018.jpeg',
			info2: '施德楼525橡皮',
			info3: '160人喜欢',
			info4: '超净，超人气的一款橡皮！不含对人体的有害物质，不含PVC、合成乳胶及邻苯二甲酸盐，环保健康。擦拭效果出众，不用费力就可擦拭到没有痕迹。橡皮屑少，保障桌面清洁干净。橡皮纸套让您在使用时更加方便。',
			info5: 'detail03.jpg',
			info6: '全新',
			info7: '2.8',
			info8: 'learn'
		}, {
			id: 'detail05',
			info1: 'indexImg019.jpg',
			info2: 'ES-512A钢笔橡皮',
			info3: '126人喜欢',
			info4: '可以清除用圆珠笔写的文字和被印刷的字。用天然橡胶和使用硅长石粉的非氯乙烯制成的橡皮，因此可以使纸张上的墨水消去。',
			info5: 'detail04.jpg',
			info6: '全新',
			info7: '2.8',
			info8: 'learn'
		}, {
			id: 'detail06',
			info1: 'indexImg020.jpg',
			info2: 'Epc充气U形枕',
			info3: '226人喜欢',
			info4: '专利设计，立体造型护颈，双卡口设计正反可用，方便携带。选用植绒pvc材质，亲肤柔软。',
			info5: 'detail05.jpg',
			info6: '九成新',
			info7: '29.0',
			info8: 'hostel'
		}, {
			id: 'detail07',
			info1: 'indexImg026.jpg',
			info2: '分装瓶混装八件套',
			info3: '166人喜欢',
			info4: '化繁为简，一套八件方便携带，使用优质环保PP食品级塑料制造，同时防滲透耐弱酸。',
			info5: 'detail06.jpg',
			info6: '九成新',
			info7: '19.0',
			info8: 'day'
		}, {
			id: 'detail08',
			info1: 'indexImg027.jpg',
			info2: '索尼 MDR-1A耳机',
			info3: '386人喜欢',
			info4: '索尼MDR-1A头戴式耳机采用40mm的动圈单元，单元振膜采用了镀铝液晶高分子振膜，在全频段减少声音的失真，加上CCAW音圈使得整体可传递出雄浑、强劲的低音和优秀的高音。阻抗24欧姆、灵敏度105dB使得耳机很容易推动。',
			info5: 'detail07.jpg',
			info6: '八成新',
			info7: '1349.0',
			info8: 'phone'
		}, {
			id: 'detail09',
			info1: 'indexImg028.jpg',
			info2: '索尼 MDR-1000X耳机',
			info3: '288人喜欢',
			info4: '索尼MDR-1000X无线降噪立体声耳机，采用包覆式结构，专为耳型设计的释压垫，质地柔软，采用声学密封结构，实现全包裹式舒适佩戴，同时减少漏音，因而能提供强劲的低音；采用内倾斜轴结构设计，使耳机外罩的旋转轴面向内侧，以贴合耳朵，提高佩戴稳定性；静音接头装置可减少滑动时发出的机械噪音，在顺畅的滑动同时实现沉浸式音乐聆听体验；旋转折叠设计便于出行携带。',
			info5: 'detail08.jpg ',
			info6: '八成新',
			info7: '2899.0',
			info8: 'phone'

		}, {
			id: 'detail10',
			info1: 't2.jpg',
			info2: 'HTC M8 WP',
			info3: '120人喜欢',
			info4: '升级win10运行流畅，ATT版支持联通4G骁龙801运行内存2g机身内存32g带套贴膜使用无划痕成色新。',
			info5: 'detail08.jpg ',
			info6: '九成新',
			info7: '480.0',
			info8: 'phone'

		}, {
			id: 'detail11',
			info1: 't9.jpg',
			info2: '可爱毛绒玩具',
			info3: '256人喜欢',
			info4: '结婚时朋友送的，因为家里毛绒玩具挺多的',
			info5: 'detail08.jpg ',
			info6: '八成新',
			info7: '15.0',
			info8: 'play'
		}, {
			id: 'detail12',
			info1: 't3.jpg',
			info2: '正品篮球鞋',
			info3: '326人喜欢',
			info4: '昨天到货的，因为鞋子不合脚，只试穿了一下，完全干净，因为吊牌拆了，天猫不让退货，所以想转卖，绝对正品！',
			info5: 'detail08.jpg ',
			info6: '全新',
			info7: '300.0',
			info8: 'sport'
		}, {
			id: 'detail13',
			info1: 't4.jpg',
			info2: '二手项坠',
			info3: '132人喜欢',
			info4: '2012年款现在已经买不到了很特别的款但是有点氧化了姐妹儿自己去洗呢就便宜点如果要我洗就贵点发票都很清楚原价3400',
			info5: 'detail08.jpg ',
			info6: '八成新',
			info7: '1500.0',
			info8: 'dress'
		}, {
			id: 'detail14',
			info1: 't5.jpg',
			info2: '潮流服饰',
			info3: '280人喜欢',
			info4: '超爱的一件，材质起来超舒服，很显白显瘦，喜欢的私聊',
			info5: 'detail08.jpg ',
			info6: '九成新',
			info7: '60.0',
			info8: 'dress'
		}, {
			id: 'detail15',
			info1: 't7.jpg',
			info2: '运动, lets go',
			info3: '200人喜欢',
			info4: '标准篮球，适合各种场地',
			info5: 'detail08.jpg ',
			info6: '九成新',
			info7: '80.0',
			info8: 'sport'
		}, {
			id: 'detail16',
			info1: 'ss01.jpg',
			info2: '宿舍吊椅',
			info3: '380人喜欢',
			info4: '用了半学期。想要的来吧。不总在寝室了，所以卖了。寝室神器',
			info5: 'detail08.jpg ',
			info6: '八成新',
			info7: '35.0',
			info8: 'hostel'
		}, {
			id: 'detail17',
			info1: 'ss02.jpg',
			info2: '床围',
			info3: '270人喜欢',
			info4: '铁架较重，不方便邮寄，最好是同城自提',
			info5: 'detail08.jpg ',
			info6: '七成新',
			info7: '80.0',
			info8: 'hostel'
		}, {
			id: 'detail18',
			info1: 'ss03.jpg',
			info2: '懒人支架',
			info3: '480人喜欢',
			info4: 'EK正品手机懒人支架创意加长手机通用多功能夹子桌面床',
			info5: 'detail08.jpg ',
			info6: '八成新',
			info7: '15.0',
			info8: 'hostel'
		}, {
			id: 'detail19',
			info1: 'ss05.jpg',
			info2: '多功能晾衣架',
			info3: '380人喜欢',
			info4: '基本全新买回来就用过一次，可以整体拆卸，收纳不占空间，没有味道质量很好，同城自提。',
			info5: 'detail08.jpg ',
			info6: '全新',
			info7: '60.0',
			info8: 'hostel'
		}, {
			id: 'detail20',
			info1: 'ss06.jpg',
			info2: '多功能充电器',
			info3: '180人喜欢',
			info4: '索浪 车载充电器 一拖二点烟器头双USB汽车用多功能',
			info5: 'detail08.jpg ',
			info6: '八成新',
			info7: '40.0',
			info8: 'hostel'
		}, {
			id: 'detail21',
			info1: 'ss04.jpg',
			info2: '床上书桌',
			info3: '130人喜欢',
			info4: '破损补寄售后无忧送安装螺丝刀',
			info5: 'detail08.jpg ',
			info6: '九成新',
			info7: '79.0',
			info8: 'hostel'
		}, {
			id: 'detail22',
			info1: 'ss07.jpg',
			info2: '床篓',
			info3: '230人喜欢',
			info4: '开学的时候成东西用的，后来买了很少用，便宜出了，小西门卖15～20，我这个10块钱，9.9成新哦',
			info5: 'detail08.jpg ',
			info6: '九成新',
			info7: '10.0',
			info8: 'hostel'
		}];

		return {
			all: function() {
				return infos;
			},
			remove: function(info) {
				infos.splice(infos.indexOf(info), 1);
			},
			get: function(infoId) {
				for(var i = 0; i < infos.length; i++) {
					if(infos[i].id === infoId) {
						return infos[i];
					}
				}
				return null;
			}
		};
	})
	//分类页面数据
	.factory('introducts', function() {
		var items = [{
			img: "t2.jpg",
			title: "phone",
			introduct: "正品htc手机",
			state: "九五新",
			url: "#",
			price: '￥399.00'
		}, {
			img: "t9.jpg",
			title: "hostel",
			introduct: "可爱毛绒玩具",
			state: "九成新",
			url: "#",
			price: '￥29.00'
		}, {
			img: "t3.jpg",
			title: "sport",
			introduct: "潮流男鞋",
			state: "九成新",
			url: "#",
			price: '￥66.00'
		}, {
			img: "t4.jpg",
			title: "dress",
			introduct: "二手项坠，99纯金",
			state: "九二新",
			url: "#",
			price: '￥199.00'
		}, {
			img: "t5.jpg",
			title: "dress",
			introduct: "潮流服饰",
			state: "九成新",
			url: "#",
			price: '￥79.00'
		}, {
			img: "t7.jpg",
			title: "sport",
			introduct: "运动，let's go",
			state: "八五新",
			url: "#",
			price: '￥69.00'
		}, {
			img: "ss01.jpg",
			title: "hostel",
			introduct: "宿舍吊椅",
			state: "九成新",
			url: "#",
			price: '￥29.00'
		}, {
			img: "ss02.jpg",
			title: "hostel",
			introduct: "床围",
			state: "九成新",
			url: "#",
			price: '￥19.00'
		}, {
			img: "ss03.jpg",
			title: "hostel",
			introduct: "懒人支架",
			state: "九成新",
			url: "#",
			price: '￥6.90'
		}, {
			img: "ss04.jpg",
			title: "learn",
			introduct: "多功能挂钩",
			state: "九五新",
			url: "#",
			price: '￥9.90'
		}, {
			img: "ss05.jpg",
			title: "play",
			introduct: "可爱毛绒玩具",
			state: "九成新",
			url: "#",
			price: '￥29.00'
		}, {
			img: "ss06.jpg",
			title: "hostel",
			introduct: "多功能充电器",
			state: "九成新",
			url: "#",
			price: '￥29.00'
		}, {
			img: "ss07.jpg",
			title: "book",
			introduct: "宿舍神器",
			state: "九成新",
			url: "#",
			price: '￥29.00'
		}];
		return {
			states: function() {
				return items
			}
		}
	})
	//消息数据
	.factory('Accounts', function() {
		var selectedAccount;
		return {
			all: function() {
				return [{
					uname: '交易物流消息',
					news: '订单已发货!您购买的[双11全球狂欢节]...',
					time: '16/11/12',
					simg: 'img/pensonImage/a2.jpg',
					id: '2'
				}, {
					uname: '通知消息',
					news: '亲，您已经被选中啦！最高奖励88元',
					time: '16/11/11',
					simg: 'img/pensonImage/a3.jpg',
					id: '3'
				}]
			},
			selectAccount: function(item) {
				selectedAccount = item;
			},
			getAccount: function() {
				return selectedAccount;
			}
		}
	})
	.factory('Notifys', function() {
		return {
			all: function() {
				return [{
					uname: '订单派送中...',
					news: '(百世快递)',
					time: '2016/11/12',
					simg: 'img/account/t2.jpg',
					id: 'htc智能手机，全新包邮',
					num: '运单编号：70919707235556'
				}, {
					uname: '订单已签收',
					news: '(韵达快递)',
					time: '2016/11/12',
					simg: 'img/account/t3.jpg',
					id: '【乔丹运动篮球鞋】',
					num: '运单编号：3241934525246'
				}, {
					uname: '订单已发货',
					news: '(申通快递)',
					time: '2016/11/11',
					simg: 'img/account/t9.jpg',
					id: '毛绒玩具，女生最爱',
					num: '运单编号：1234170723432'
				}]
			}
		}
	})
	.factory('Notifys1',function () {
	return {
		all:function () {
			return [{uname:'恭喜您，获得免费的10元代金券！',news:'每周末有抽奖哦',time:'2016/11/11',
					},
					{uname:'新品服饰快去看看吧！',news:'女装',time:'2016/11/11',
					},
					{uname:'系统推送，总有你意想不到的！',news:'快点来晒网',time:'2016/11/12',
				
					}]
		}
	}
})
	.factory('Account1s', function() {
		var news = [{
					uname: '韩都衣舍',
					news: '好的',
					time: '16/11/12',
					simg: 'img/pensonImage/a4.jpg',
					id: '4'
				}, {
					uname: '傲丝淑女旗舰店',
					news: '订单已发货，记得好评哦亲',
					time: '16/11/12',
					simg: 'img/pensonImage/a5.jpg',
					id: '5'
				}, {
					uname: '月小',
					news: '你推荐了一个宝贝',
					time: '16/11/11',
					simg: 'img/pensonImage/a6.jpg',
					id: '6'
				}]
		return {
			all: function() {
				return news;
			},
			get: function(newsId) {
				for(var i = 0; i < news.length; i++) {
					if(news[i].id === newsId) {
						return news[i];
					}
				}
				return null;
			}
		}
	})

//个人中心－设置
.factory('Sets', function() {
		return {
			all: function() {
				return [{
					id: 'means',
					name: '个人资料',
					news: 'img/indexImages/appLogo.png'
				}, {
					id: 'safe',
					name: '账户与安全',
					news: 'img/indexImages/appLogo.png'
				}, {
					id: 'newst',
					name: '新消息通知',
					news: 'img/indexImages/appLogo.png'
				}, {
					id: 'privacy',
					name: '隐私',
					news: 'img/indexImages/appLogo.png'
				}, {
					id: 'about',
					name: '关于晒网',
					news: 'img/indexImages/appLogo.png'
				}]
			}
		}
	})
	.factory('Meanss', function() {
		return {
			all: function() {
				return [{
					id: 'avatar',
					name: '晒网头像'
				}, {
					id: 'name',
					name: '会员名'
				}, {
					id: 'uname',
					name: '晒网昵称'
				}, {
					id: 'sex',
					name: '性别'
				}, {
					id: 'card',
					name: '我的二维码名片'
				}]
			}
		}
	})
	.factory('Safes', function() {
		return {
			all: function() {
				return [{
					id: 'uanme',
					name: '会员名',
				}, {
					id: 'tel',
					name: '修改手机号码'
				}, {
					id: 'pwd',
					name: '修改登录密码'
				}, {
					id: 'protect',
					name: '隐私保障险'
				}, {
					id: 'centre',
					name: '安全中心'
				}]
			}
		}
	})
	.factory('Newsts', function() {
		return {
			all: function() {
				return [{
					name: '新消息提醒',
				}, {
					name: '铃声'
				}, {
					name: '振动'
				}]
			}
		}
	})
	.factory('Privacys', function() {
		return {
			all: function() {
				return [{
					name: '通过手机号码找到我',
					p: '关闭后，其他用户将不能通过手机号搜索到你，你也不会出现在其他人的手机'
				}, {
					name: '通过会员名搜索到我',
					p: '关闭后，其他用户将不能通过会员名搜索到你'
				}]
			}
		}
	})
	.factory('Abouts', function() {
		return {
			all: function() {
				return [{
					id: 'new',
					name: '新版本检测'
				}, {
					id: 'copy',
					name: '版权信息'
				}, {
					id: 'allow',
					name: '软件许可使用协议'
				}, {
					id: 'help',
					name: '帮助中心'
				}]
			}
		}
	})