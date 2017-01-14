angular.module('starter.controllers', ['ionic'])

.controller('TabsCtrl', function($scope, $state) {
	$scope.preProcess = function() {
		location.href = '#/tab/me';
	}
})

.controller('HomeCtrl', function($scope, goods, $timeout, $ionicLoading) {
		// Setup the loader
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

		// Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
		$timeout(function() {
			$ionicLoading.hide();
			$('#nearallpa3').show()
		}, 300);

		//	今日推荐
		$scope.goods1 = goods.goods1()
		$scope.goods2 = goods.goods2()
	})
.controller('flashall', function($scope, goods, $timeout, $ionicLoading) {
		var height=screen.height
		
		var width=screen.width
		console.log(height)
		console.log(width)
		
		$('.flash img').css('height',height)
		$('.scroll').css('height',height)
		$('.slider').css('height',height)
		$('.flash img').css('width',width)
		
		
		
		
		
		
		
		
	})
	.controller('ClassifyCtrl', function($scope, $timeout, $ionicLoading) {
		// Setup the loader
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

		// Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
		$timeout(function() {
			$ionicLoading.hide();
			$('#nearallpa2').show()
		}, 300);

	})
	.controller('NearCtrl', function($scope, Content, $timeout, $ionicLoading) {

		// Setup the loader
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

		// Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
		$timeout(function() {
			$ionicLoading.hide();
			$('#nearallpa').show()
		}, 300);

		$scope.doRefresh = function() {
			window.location = '#/tab/near';
			$scope.$broadcast('scroll.refreshComplete');
		};

		$scope.contents = Content.all();

		$scope.change = function() {
			$scope.contents = Content.all();
		}
		$scope.changeOne = function() {
			$scope.contents = Content.allOne();
		}
		$scope.changeTwo = function() {
			$scope.contents = Content.allTwo();
		}
		$scope.changeThree = function() {
			$scope.contents = Content.allThree();
		}
		$scope.changeFour = function() {
			$scope.contents = Content.allFour();
		}
		$scope.changeFive = function() {
			$scope.contents = Content.allFive();
		}
		$scope.changeSix = function() {
			$scope.contents = Content.allSix();
		}
		$scope.changeSeven = function() {
			$scope.contents = Content.allSeven();
		}
		$scope.changeEight = function() {
			$scope.contents = Content.allEight();
		}
		$scope.changeNine = function() {
			$scope.contents = Content.allNine();
		}
		$scope.changeTen = function() {
				$scope.contents = Content.allTen();
			}
			//	$scope.toggleLeft = function() {
			//  		$ionicSideMenuDelegate.toggleLeft();
			//	};
			//	$scope.settings = {
			//	//把按钮定为被选择状态
			//  enableFriends: true
			//};

	})
	.controller('homeDetail', function($scope, $ionicPopup, $stateParams, goods, allgoodShop, $timeout, $ionicLoading, $ionicHistory) {

		$scope.latepages = function() {
			history.go(-1)
			$ionicHistory.clearHistory();
		}

		$scope.goods1 = goods.goods00()
		$scope.goodsdetail = allgoodShop.get($stateParams.shopID)
		localStorage.setItem('userpage', $stateParams.shopID)

		$scope.shouBigImage = function(imageName) { //传递一个参数（图片的URl）
			$scope.Url = imageName; //$scope定义一个变量Url，这里会在大图出现后再次点击隐藏大图使用
			$scope.bigImage = true; //显示大图
		};
		$scope.bigImage = false; //初始默认大图是隐藏的
		$scope.hideBigImage = function() {
			$scope.bigImage = false;
		};
		$scope.addcarall = function() {

			if(localStorage.getItem('userstate') == 'state') {
				location.href = ('#/tab/detailcar')
			} else {
				var myHuancun = $ionicPopup.show({
					templateUrl: 'templates/mepages/set/logints.html',
					scope: $scope,
					buttons: [{
						text: '确定'
					}, ]
				});
			}
		}
		$scope.addcarall2 = function() {

			if(localStorage.getItem('userstate') == 'state') {
				location.href = ('#/tab/shopqg/' + $scope.goodsdetail.pid1)
			} else {
				var myHuancun = $ionicPopup.show({
					templateUrl: 'templates/mepages/set/logints.html',
					scope: $scope,
					buttons: [{
						text: '确定'
					}, ]
				});
			}
		}

	})
	.controller('homepjall', function($scope, $stateParams, goods) {
		$scope.userpage = localStorage.getItem('userpage')

		$scope.doRefresh = function() {
			window.location = '#/tab/pjall';
			$scope.$broadcast('scroll.refreshComplete');
		};

	})
	.controller('Homekbpages', function($scope, $stateParams, goods) {
		var like = parseInt($('#lunch #like>p>span').text());
		var count = 1;
		var i = 0;
		var arr = [
			['0', '2rem', 9, '100%'],
			['3%', '2.9rem', 6, '94%'],
			['7%', '4.1rem', 3, '86%'],
		];
		$scope.lunch = function() {
			$('#lunch').fadeIn(500);
			$('#dinner').fadeOut(200);
			$('.lunch').children().addClass('bottom_border');
			$('.lunch').siblings().children().removeClass('bottom_border')
		}
		$scope.dinner = function() {
			$('#dinner').fadeIn(500);
			$('#lunch').fadeOut(200);
			$('.dinner').children().addClass('bottom_border');
			$('.dinner').siblings().children().removeClass('bottom_border')
		}
		$scope.prew = function() {
			$('#approve>ul>li:nth-child(2) img').attr('src', 'img/publicImages/sun_3.png')
			if(count == 1) {
				like += 1;
				count += 1;
				$('#like>p>span').text(like)
			}
		}
		$scope.approve = function() {
			$('#approve>ul>li:nth-child(2) img').attr('src', 'img/publicImages/sun_2.png')
			count = 1;
			arr.unshift(arr[arr.length - 1]);
			arr.pop();
			$('.naozhewan1').css('z-index', arr[i + 2][2])
			$('.naozhewan1').animate({
				//			zIndex:arr[i + 2][2],
				left: arr[i + 2][0],
				top: arr[i + 2][1],
				width: arr[i + 2][3],
			}, 400);
			$('.naozhewan2').css('z-index', arr[i][2])
			$('.naozhewan2').animate({
				//			zIndex:arr[i ][2],
				left: arr[i][0],
				top: arr[i][1],
				width: arr[i][3],
			}, 400);
			$('.naozhewan3').css('z-index', arr[i + 1][2])
			$('.naozhewan3').animate({
				//			zIndex:arr[i + 1][2],
				left: arr[i + 1][0],
				top: arr[i + 1][1],
				width: arr[i + 1][3],
			}, 400);
		}
	})
	.controller('Homelimited', function($scope, $stateParams, goods) {
		$scope.userpage = localStorage.getItem('userpage')

		$scope.doRefresh = function() {
			window.location = '#/tab/limited';
			$scope.$broadcast('scroll.refreshComplete');
		};

	})
	.controller('Homehalloween', function($scope, $stateParams, goods) {
		$scope.userpage = localStorage.getItem('userpage')

		$scope.doRefresh = function() {
			window.location = '#/tab/halloween';
			$scope.$broadcast('scroll.refreshComplete');
		};

	})

.controller('NearDetailCtrl', function($scope, $stateParams, Content, goods) {
		//		$scope.me = get($stateParams.nearID);
		localStorage.setItem('userpage', $stateParams.nearID)

		$scope.contents = Content.get($stateParams.nearID);

		$scope.goods1 = goods.goods00()

	})
	.controller('homeshopqg', function($scope, $stateParams, Content, goods, allgoodShop) {

		$scope.latepages = function() {
			history.go(-1)
		}

		$scope.userpage = localStorage.getItem('userpage')
		$scope.paygoods = allgoodShop.get($stateParams.price2)
		$scope.payprice = parseInt($scope.paygoods.span)
		$scope.paytil = $scope.paygoods.h2
		$scope.paytilnew = $scope.payprice
		var aanum = 1;
		$scope.btn_add = function() {
			aanum++
			$('.tj_btn_num').text(aanum)
			$scope.paytilnew = $scope.payprice * aanum
			if(aanum >= 99) {
				aanum = 99
				$('.tj_btn_num').text(99)
				$scope.paytilnew = $scope.payprice * 99
			}
		}
		$scope.btn_jian = function() {
			aanum--
			$('.tj_btn_num').text(aanum)
			$scope.paytilnew = $scope.payprice * aanum
			if(aanum <= 1) {
				aanum = 1
				$('.tj_btn_num').text(1)
				$scope.paytilnew = $scope.payprice
			}

		}

	})
	.controller('homeshoptj', function($scope, $stateParams, Content, goods, allgoodShop) {
		$scope.userpage = localStorage.getItem('userpage')

		$scope.priceall = $stateParams.price3
		$scope.paygoods2 = allgoodShop.get(localStorage.getItem('userpage'))
		$scope.span2 = parseInt($scope.paygoods2.span)

		$scope.latepages = function() {
			history.go(-1)
		}

	})
	.controller('a404pages', function($scope, $stateParams, Content, goods) {

		$scope.latepages = function() {
			history.go(-1)
		}
	})
	.controller('Homefindpages', function($scope, $stateParams, Content, goods) {

		$scope.latepages = function() {
			history.go(-1)
		}
	})
	.controller('MyAccount', function($scope, $http, host) {
		$scope.latepages = function() {
			history.go(-1)
		}

		$scope.login = function() {

			$http.jsonp(host + '/deliuser/ploginall?callback=JSON_CALLBACK').success(function(data) {
				var users = data

				$('.invalid').hide();

				var logstate = false;
				var logpwd;

				var uname = $('#uname').val();
				if(uname == '') {
					$('.BT').show();
				} else {
					for(var i = 0; i < users.length; i++) {
						if(users[i].us == uname) {
							logstate = true;
							logpwd = users[i].pwd
						}
					}
					if(logstate) {
						var pwd = hex_sha1($('#pwd').val());
						if(logpwd == pwd) {
							localStorage.setItem('userstate', 'state')
							window.location.href = "#/tab/me"
							uname = '';
							pwd = '';

							$('#user_avar').show()
							$('#user_login ').hide()

							//							history.go(0)

						} else {
							$('.invalid').hide();

							$('.pwd_error').show();
						}

					} else {
						$('.invalid').hide();

						$('.no_existent').show();
					}
				}

			}).error(function(err) {
				console.log(err)
				alert('登录超时！')
				
					//			alert('网络错误，请求超时，请重新操作！')
					//			history.go(0)

			})

		}
		$scope.register = function() {

			$http.jsonp(host + '/deliuser/ploginall?callback=JSON_CALLBACK').success(function(data) {
				var users = data

				$('.invalid').hide();
				var logstate = false;
				var reg_user = $('#reg_user').val();
				var pwd_us1 = $('#pwd_us1').val();
				var pwd_us2 = $('#pwd_us2').val();
				for(var i = 0; i < users.length; i++) {
					if(users[i].us == reg_user) {
						logstate = true;
					}
				}
				if(logstate) {
					$('.invalid').hide();
					$('.existent').show();
				} else {
					if(reg_user.length != 11) {
						$('.invalid').hide();
						$('.num_length').show();
					} else {
						if(pwd_us1.length >= 6) {
							if(pwd_us1 == pwd_us2) {
								var usermsg = {
									name: reg_user,
									pwd: pwd_us1
								}
								$http.jsonp(host + '/deliuser/preg?callback=JSON_CALLBACK', {
									params: usermsg
								}).success(function(data) {
									if(data.istrue) {
										$('#register').hide();
										$('#success').show();

									}
								}).error(function(err) {
									console.log(err)

									//									alert('网络错误，请求超时，请重新操作！')
									//									history.go(0)

								})

							} else {
								$('.invalid').hide();
								$('.pwd_us2').show();
							}
						} else {

							$('.invalid').hide();
							$('.pwd_us1').show();
						}

					}
				}

			}).error(function(err) {
				console.log(err)
				alert('登录超时！')
					//			alert('网络错误，请求超时，请重新操作！')
					//			history.go(0)

			})

		}
		$scope.islog = function() {
			window.location.href = "#/tab/login"
//			history.go(0)
		}

	})
	.controller('homecar', function($scope, $stateParams, Content, goods) {

	})

.controller('MeCtrl', function($scope, $ionicPopup, $timeout) {
	//设置

	// 触发一个按钮点击，或一些其他目标
	$scope.showHuancun = function() {
		$scope.data = {}
			// 一个精心制作的自定义弹窗
		var myHuancun = $ionicPopup.show({
			templateUrl: 'templates/mepages/set/clear.html',
			scope: $scope,
			buttons: [{
				text: '完成'
			}, ]
		});

	};

	$scope.quituser = function() {

		$scope.data = {}
			// 一个精心制作的自定义弹窗
		var myHuancun = $ionicPopup.show({
			templateUrl: 'templates/mepages/set/quit.html',
			scope: $scope,
			buttons: [{
				text: 'OK'
			}, ]

		});
		localStorage.setItem('userstate', 'false');
		//			$state.go('tab.me')
		$timeout(function() {
			myHuancun.close(); // 1秒后关闭弹窗
		}, 1000);
		$('#user_avar').hide()
		$('#user_login').show()

		location.href = "#/tab/me"
	};

	////////////

	if(localStorage.getItem('userstate') == 'state') {
		$('#user_avar').show()
		$('#user_login ').hide()
	} else {
		$('#user_avar').hide()
		$('#user_login').show()

	}

	$scope.setuser2 = function() {
		if(localStorage.getItem('userstate') == 'state') {
			location.href = ('#/tab/set')

		} else {
			var myHuancun = $ionicPopup.show({
				templateUrl: 'templates/mepages/set/logints.html',
				scope: $scope,
				buttons: [{
					text: '确定'
				}, ]
			});
		}
	}
	$scope.setuser01 = function() {
		if(localStorage.getItem('userstate') == 'state') {
			location.href = ('#/tab/coupon')

		} else {
			var myHuancun = $ionicPopup.show({
				templateUrl: 'templates/mepages/set/logints.html',
				scope: $scope,
				buttons: [{
					text: '确定'
				}, ]
			});
		}
	}

	$scope.setuser02 = function() {
		if(localStorage.getItem('userstate') == 'state') {
			location.href = ('#/tab/collect')
		} else {
			var myHuancun = $ionicPopup.show({
				templateUrl: 'templates/mepages/set/logints.html',
				scope: $scope,
				buttons: [{
					text: '确定'
				}, ]
			});
		}
	}
	$scope.setuser03 = function() {
		if(localStorage.getItem('userstate') == 'state') {
			location.href = ('#/tab/all')

		} else {
			var myHuancun = $ionicPopup.show({
				templateUrl: 'templates/mepages/set/logints.html',
				scope: $scope,
				buttons: [{
					text: '确定'
				}, ]
			});
		}
	}

	$scope.setuser04 = function() {
		if(localStorage.getItem('userstate') == 'state') {
			location.href = ('#/tab/wait')

		} else {
			var myHuancun = $ionicPopup.show({
				templateUrl: 'templates/mepages/set/logints.html',
				scope: $scope,
				buttons: [{
					text: '确定'
				}, ]
			});
		}
	}

	$scope.setuser05 = function() {
		if(localStorage.getItem('userstate') == 'state') {
			location.href = ('#/tab/use')

		} else {
			var myHuancun = $ionicPopup.show({
				templateUrl: 'templates/mepages/set/logints.html',
				scope: $scope,
				buttons: [{
					text: '确定'
				}, ]
			});
		}
	}

	$scope.setuser06 = function() {
		if(localStorage.getItem('userstate') == 'state') {
			location.href = ('#/tab/evaluate')

		} else {
			var myHuancun = $ionicPopup.show({
				templateUrl: 'templates/mepages/set/logints.html',
				scope: $scope,
				buttons: [{
					text: '确定'
				}, ]
			});
		}
	}

	$scope.setuser07 = function() {
		if(localStorage.getItem('userstate') == 'state') {
			location.href = ('#/tab/refund')

		} else {
			var myHuancun = $ionicPopup.show({
				templateUrl: 'templates/mepages/set/logints.html',
				scope: $scope,
				buttons: [{
					text: '确定'
				}, ]
			});
		}
	}

	// 触发一个按钮点击，或一些其他目标
	$scope.showPopup = function() {
		$scope.data = {}

		// 一个精心制作的自定义弹窗
		var myPopup = $ionicPopup.show({
			templateUrl: 'templates/tk.html',
			scope: $scope,
			buttons: [{
				text: '取消'
			}, ]
		});
		$timeout(function() {
			myPopup.close(); // 1秒后关闭弹窗
		}, 3000);

		//聊天框
		//		$scope.showChat = function() {
		//			var myChat = $ionicPopup.show({
		//				templateUrl: 'templates/lt.html',
		//				scope: $scope,
		//			});
		//		};
		// 一个确认对话框
		$scope.showConfirm = function() {
			location.href = "#/tab/chat/5"
		};

	};

})

.controller('MeOrderCtrl', function($scope) {

	})
	//设置
	.controller('MeSetCtrl', function($scope, $state, $ionicPopup) {})

.controller('SuggestionCtrl', function($scope, $ionicPopup) {
		// 触发一个按钮点击，或一些其他目标
		$scope.showSuggestion = function() {

		};

	})
	.controller('RegoodsCtrl', function($scope, $ionicPopup) {
		// 触发一个按钮点击，或一些其他目标
		$scope.tktj = function() {
			$scope.data = {}				
			var tkTj = $ionicPopup.show({
				template: '<div style="text-align:center"><img src="img/meImages/set_clear.png" /></div>',
				scope: $scope,
				buttons: [{
					text: '提交成功!'
				}, ]
			});
		};

	})
	//设置里面的修改密码

.controller('RepwdCtrl', function($scope, $ionicPopup) {
	$scope.tj = function() {

			//输入手机号
			var yzm = document.getElementById('yzm');
			var phoneNum = /^1[34578]\d{9}/;
			var phone_number = $('.phone_number').val();
			if(!phoneNum.test(phone_number)) {
				$('.set_article .num_err').show();
				console.log(12345678);
				return false;
			}
			var sy_yzm = $('.sy_yzm').val();
			if(yzm.innerHTML != sy_yzm) {
				$('.set_article .yzm_err').show();
				return false;
			}
			var newPwd = /^[\da-zA-Z]+$/;
			var new_pwd = $('.new_pwd').val();
			if(!newPwd.test(new_pwd)) {
				$('.set_article .pwd_err').show();
				return false;
			}
			if(new_pwd.length < 6) {
				$('.set_article .pwd_err').show();
				return false;
			} else {
				alert('修改成功');
				return true;
			}
		}
		//验证码开始
	$scope.yzm = function() {
		sjs = parseInt(Math.random() * (9999 - 1000 + 1) + 1000);
		var yzm = document.getElementById('yzm');
		yzm.innerHTML = sjs;
	};

	//点击眼睛可以看见密码
	$scope.eye = function() {
		console.log('你是我的眼')
		if($(".new_pwd").attr("type") == "password") {
			$(".new_pwd").attr("type", "text")
		} else {
			$(".new_pwd").attr("type", "password")
		}

	};
})

//设置里面的修改手机号

.controller('RenumCtrl', function($scope, $ionicPopup) {
		// 确定提交数据
		$scope.qd = function() {
			//输入当前手机号
			var yzm1 = document.getElementById('yzm1');
			var phoneNum1 = /^1[34578]\d{9}/;
			var phone_number1 = $('.phone_number1').val();
			if(!phoneNum1.test(phone_number1)) {
				$('.renum_article .num_err1').show();
				console.log(12345678)
			}
			//输入验证码
			var sy_yzm1 = $('.sy_yzm1').val();
			if(yzm1.innerHTML != sy_yzm1) {
				$('.renum_article .yzm_err1').show();
			}
			//输入新手机号
			var new_pwd1 = $('.new_pwd1').val();
			if(!phoneNum1.test(new_pwd1)) {
				$('.renum_article .pwd_err1').show();
				return false;
			}
			if(new_pwd1 == phone_number1) {
				console.log(phone_number1)
				console.log(new_pwd1)
				$('.renum_article .pwd_err2').show();
				return false;

			} else {
				alert('手机号修改成功');
				return true;
			}
		};

		//验证码开始
		$scope.yzmm = function() {
			sjs1 = parseInt(Math.random() * (9999 - 1000 + 1) + 1000);
			var yzm1 = document.getElementById('yzm1');
			yzm1.innerHTML = sjs1;
		};

	})
	.controller('MeProtocalCtrl', function($scope) {

	})
	//聊天室
	.controller('Mychat', function($scope, $ionicScrollDelegate, $stateParams, Account1s) {
		$scope.news = Account1s.get($stateParams.newsId);
		$scope.sendMsg = function() {
			if($('#wen').val() == '') {
				return
			} else {
				var t = $('<div class="clearfloat bb"><div class="att"><img src="img/meImages/chi2.gif"/></div><div class="text">' + $('#wen').val() + '</div></div>');
				t.appendTo('article');
				$('#wen').val('')
				$ionicScrollDelegate.scrollBottom(true)
			}
		}
	})