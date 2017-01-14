var users = [{
	uname: '1',
	pwds: '2'
}];
var now; //登录账号传递到个人中心
var toPay; //详情页里的价格传递到支付页面
var count = 1;
angular.module('starter.controllers', [])
	//引导页
	.controller('startCtrl', function($scope) {
		$scope.onSwipeLeft = function() {
			location.href = '#/tab/dash'
		}
	})
//个人中心
.controller('PersonCtrl', function($scope, Persons) {
		var now1 = now;
		console.log(now1)
		if(!now1) {
			location.href = '#/tab/login'

		} else {
			$scope.ava = now1;
		}

		$scope.persons = Persons.all();
		$scope.remove = function(person) {
			Persons.remove(person);
		};
	})
	//订单
	.controller('PersonOrderCtrl', function($scope, Orders) {
		$scope.orders = Orders.all();
	})
	//地址
	.controller('PersonAddressCtrl', function($scope, Addresss) {
		$scope.addresss = Addresss.all();
		$scope.selectAll = false;
		$scope.remove = function(i) {
				$scope.addresss.splice(i, 1)
			}
			// 隐藏表单
		$scope.isShow = false;
		$scope.curStudent = null;
		var curIndex; //保存正在编辑的索引
		$scope.update = function(address, i) {
			$scope.isShow = true;
			$scope.curStudent = angular.copy(address);
			curIndex = i;
		}
		$scope.save = function() {
			$scope.addresss[curIndex] =
				$scope.curStudent;
			console.log($scope.curStudent);
			$scope.isShow = false;
			//			$scope.curStudent = null;
			// $scope.isShow = false;
		}
		$scope.cancel = function() {
				$scope.isShow = false;
				$scope.curStudent = null;
			}
			// 添加
		$scope.add = function() {
			$scope.curStudent = {};
			$scope.isShow = true;
			curIndex = $scope.addresss.length;

		}
	})
	//购物车
	.controller('PersonCartCtrl', function($scope, Carts) {
		$scope.carts = Carts.all();
		$scope.settle = function() {
			var allPrice = 0;
			for(var i = 0; i < Carts.all().length; i++) {
				allPrice += Number(Carts.all()[i].price.substr(1))
			}
			console.log(allPrice)
		}
	})
	//个人中心－相关设置
	.controller('PersonSetCtrl', function($scope, Sets) {
		$scope.sets = Sets.all();
	})
	//设置－个人信息
	.controller('PersonSetMeansCtrl', function($scope, Meanss) {
		$scope.meanss = Meanss.all();
	})
	//设置－安全
	.controller('PersonSetSafeCtrl', function($scope, Safes) {
		$scope.safes = Safes.all();
	})
	//设置－新消息通知
	.controller('PersonSetNewstCtrl', function($scope, Newsts) {
		$scope.newsts = Newsts.all();
	})
	//设置－隐私条例
	.controller('PersonSetPrivacyCtrl', function($scope, Privacys) {
		$scope.privacys = Privacys.all();
	})
	//设置－关于
	.controller('PersonSetAboutCtrl', function($scope, Abouts) {
		$scope.abouts = Abouts.all();
	})
	//信息控制器
	.controller('AccountCtrl', function($scope, $state, Accounts, Account1s) {
		$scope.accounts = Accounts.all();
		$scope.account1s = Account1s.all();
		$('#accoutList2').hide();
		$('#bt1').click(function() {
			$('#accoutList2').hide();
			$('#accoutList1').show();
			$('#bt1 i,#bt1 p').css('color', '#FE625F');
			$('#bt2 i,#bt2 p').css('color', '#000000')
		})
		$('#bt2').click(function() {
			$('#accoutList1').hide();
			$('#accoutList2').show();
			$('#bt2 i,#bt2 p').css('color', '#FE625F');
			$('#bt1 i,#bt1 p').css('color', '#000000')
		})

		$scope.showDetail = function(account) {
			Accounts.selectAccount(account);
		}
	})
	//通知
	.controller('NotifyCtrl', function($scope, Accounts, Notifys, Notifys1) {
		$scope.account = Accounts.getAccount();
		if($scope.account.id == '2') {
			$scope.notifys = Notifys.all();
		} else {
			$scope.notifys1 = Notifys1.all();
		}
	})

//主页控制器
.controller('DashCtrl', function($scope, $http, $ionicSlideBoxDelegate, $ionicScrollDelegate, index) {
		$scope.imgs = index.img();
		//banner轮播
		$ionicSlideBoxDelegate.update();
		$ionicSlideBoxDelegate.$getByHandle('slideimgs').loop(true);
		//跳转分类页面
		$scope.toClassify = function() {
				location.href = 'index.html#/tab/chats'
			}
			//跳转购物车页面
		$scope.toCar = function() {
				location.href = 'index.html#/tab/cart'
			}
			//头部滚动动画
		$scope.onScroll = function() {
				//			console.log($ionicScrollDelegate.getScrollPosition().top)
				if($ionicScrollDelegate.getScrollPosition().top > 40) {
					$('#scrollInp').css({
						'transition': 'all 0.5s',
						'margin-left': '0',
					})
					$('#header').css({
						'transition': 'all 0.5s',
						'background': 'white'
					})
					$('#logoBox').css({
						'transition': 'all 0.5s',
						'margin-left': '100%'
					})
					$('#searchIcon').css({
						'transition': 'all 0.5s',
						'margin-top': '-5rem'
					})
				} else {
					$('#scrollInp').css({
						'margin-left': '-95%'
					})
					$('#header').css({
						'background': 'transparent'
					})
					$('#logoBox').css({
						'margin-left': '-15%'
					})
					$('#searchIcon').css({
						'margin-top': '0rem'
					})
				}
			}
			//首页物品信息
		$scope.goods = index.goods();

	})
	//首页文章模块
	.controller('index01Ctrl', function($scope, $ionicActionSheet, $ionicPopup, Info) {
		// 点击按钮触发，或一些其他的触发条件
		$scope.show = function() {
			// 显示操作表
			$ionicActionSheet.show({
				destructiveText: '回复',
				cancelText: '取消',
				buttonClicked: function(index) {
					return true;
				},
				destructiveButtonClicked: function() {
					//弹出输入框
					$ionicPopup.prompt({
						title: '请输入回复内容',
						inputType: 'text',
						okText: '确认',
						cancelText: '取消',
					}).then(function(res) {
						$scope.answerContent = res;
						if($scope.answerContent != undefined) {
							$('#answerOther').css({
								'display': 'block'
							})
						}
					});
					return true;
				}
			});

		};
		$scope.thumb = 35;
		var thumb = $scope.thumb + 1;
		$scope.addThumb = function() {
			if($scope.thumb + 1 == thumb) {
				$scope.thumb = $scope.thumb + 1;
				return $scope.thumb;
			}
		}
		$('#answer').css({
			'display': 'none'
		})

		$scope.showPopup = function() {
			$scope.data = {}
				// 一个精心制作的自定义弹窗
			var myPopup = $ionicPopup.show({
				template: '<input type="text" ng-model="data.wifi">',
				title: '请在下面输入您想要评论的内容',
				//					subTitle: 'Please use normal things',
				scope: $scope,
				buttons: [{
					text: '取消'
				}, {
					text: '<b>确认</b>',
					type: 'button-positive',
					onTap: function(e) {
						if(!$scope.data.wifi) {
							//不允许用户关闭，除非他键入wifi密码
							e.preventDefault();
						} else {
							if($scope.data.wifi != undefined) {
								$('#answer').css({
									'display': 'block'
								})
								return $scope.data.wifi;
							}
						}
					}
				}, ]
			});
		}

		$scope.user = {
			img: 'img/indexImages/indexImg016.jpg',
			uname: 'David'
		}

		//到达底部触发的事件
		$scope.items = [];
		$scope.loadMore = function() {
			$http.get('/index01').success(function(items) {
				useItems(items);
				console.log(items)
				$scope.$broadcast('scroll.infiniteScrollComplete');
			});
		};

		$scope.$on('stateChangeSuccess', function() {
			$scope.loadMore();
		});
		$scope.onSwipeRight1 = function() {
			location.href = '#/tab/dash'
		}

	})
	//底部tabs隐藏 指令
	.directive('hideTabs', function($rootScope) {
		return {
			restrict: 'A',
			link: function(scope, element, attributes) {

				scope.$on('$ionicView.beforeEnter', function() {

					scope.$watch(attributes.hideTabs, function(value) {
						$rootScope.hideTabs = 'tabs-item-hide';
					});
				});

				scope.$on('$ionicView.beforeLeave', function() {
					scope.$watch(attributes.hideTabs, function(value) {
						$rootScope.hideTabs = 'tabs-item-hide';
					});
					scope.$watch('$destroy', function() {
						$rootScope.hideTabs = false;
					})

				});
			}
		};

	})
	//支付页面
	.controller('payCtrl', function($scope, $ionicPopup, $ionicActionSheet) {
		$scope.price = toPay;
		$scope.data = {}
		$scope.submit = function() {
			var confirmPopup = $ionicPopup.confirm({
				title: '付款详情',
				template: '<ul class="list"><li class = "item" >支付宝账号：34567890</li> <li class = "item" >付款方式：账户余额</li> <li class = "item" >需付款：' + toPay + ' </li> </ul>',
				cancelText: '取消',
				okText: '确认',
				okType: 'button-assertive',
			});
			confirmPopup.then(function(res) {
				if(res) {
					var suc = $ionicPopup.alert({
						title: '支付成功！', // String. 弹窗的标题。
						okText: '确认',
						okType: 'button-assertive', // String (默认: 'button-positive')。OK按钮的类型。
					})
				} else {
					var def = $ionicPopup.alert({
						title: '支付失败！', // String. 弹窗的标题。
						okText: '确认',
						okType: 'button-assertive', // String (默认: 'button-positive')。OK按钮的类型。
					})
				}
			});
		};

	})

//详情页
.controller('detailCtrl', function($scope, $stateParams, Info) {
		$scope.info = Info.get($stateParams.infoId);
		$scope.onSwipeRight = function() {
			history.go(-1)
		}
		$scope.toNext = function(info) {
			toPay = info.info7;
		}
		$scope.like = function() {
			console.log($('#likeBtn  i').className)
			console.log(count)
			if(count % 2 != 0) {
				$('#likeBtn  i').css({
					'color': '#fd6363'
				})
			} else {
				$('#likeBtn i').css({
					'color': '#333'
				})
			}
			count++;
		}
	})
	//登陆
	.controller('LoginCtrl', function($scope, $state, $ionicPopup) {
		$scope.back = function() {
			$state.go('');
		}

		function Alert(msg) {
			var alertPopup = $ionicPopup.alert({
				title: msg,
				okType: 'button-assertive'
			});
		}
		//登录验证
		var j;
		$scope.login = function() {
			for(var i = 0; i < users.length; i++) {
				if($("#username").val() == users[i].uname && $("#password").val() == users[i].pwds) {
					Alert('登录成功!');
					now = $("#username").val();
					j = '1';
					location.href = '#/tab/person'
				}
			}
			if(j != '1') {
				Alert('登录失败')
			}

		}

	})
	//注册
	.controller('RegisterCtrl', function($scope, $state, $ionicPopup) {
		$scope.back = function() {
			$state.go('');
		}

		function Alert(msg) {
			var alertPopup = $ionicPopup.alert({
				title: msg,
			});
		}
		$scope.repeat = false;
		$scope.reg = function() {
			console.log($("#password").val())
			for(var i = 0; i < users.length; i++) {
				if($('#uname').val() == users[i].uname) {
					$scope.repeat = true;
					return
				}
			}
			if($("#password").val() == '') {
				$scope.pwd1 = true;
				return
			} else if($("#password").val() != $("#pwd").val()) {
				$scope.pwd2 = true;
				return
			} else {
				users.push({
					uname: $('#uname').val(),
					pwds: $("#password").val()
				})
				Alert('注册成功')
				location.href = '#/tab/login';
			}
		}
	})
	//分类
	.controller('ChatsCtrl', function($scope, Info, $ionicScrollDelegate) {

		$scope.items = Info.all();

		$('#scrollleft a').click(function() {
			$('#scrollleft a').removeClass('fg')
			$(this).addClass('fg')
		})
		$scope.change = function(msg) {
			//		$ionicScrollDelegate.getScrollPosition().top=0;
			if(msg == undefined) {
				$('.lists').show();
			} else {
				$('.lists').hide();
				$('div[title="' + msg + '"]').show();
			}
		};
		var i = 0;
		$scope.aa = function(msg) {
			if(i % 2 != 1) {
				$('a.' + msg).addClass('assertive');
				i++;
			} else {
				$('a.' + msg).removeClass('assertive');
				i++
			}
		};
		$scope.toDetail = function(url1) {
			location.href = '#/tab/detail/' + url1;
		}
	})
	//聊天室
	.controller('newsCtrl', function($scope,$ionicScrollDelegate,$stateParams,Account1s) {
		$scope.news = Account1s.get($stateParams.newsId);
		$scope.sett = function() {
			if($('#wen').val() == '') {
				return
			} else {
				var t = $('<div class="clearfloat bb"><div class="att"><img src="img/pensonImage/a1.jpg"/></div><div class="text">' + $('#wen').val() + '</div></div>');
				t.appendTo('article');
				$('#wen').val('')
				$ionicScrollDelegate.scrollBottom(true)
			}
		}
	})