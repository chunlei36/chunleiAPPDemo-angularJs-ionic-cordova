// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) { //	初始化代码
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if(window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
		$ionicConfigProvider.platform.ios.tabs.style('standard');
		$ionicConfigProvider.platform.ios.tabs.position('bottom');
		$ionicConfigProvider.platform.android.tabs.style('standard');
		$ionicConfigProvider.platform.android.tabs.position('bottom');

		$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
		$ionicConfigProvider.platform.android.navBar.alignTitle('center');

		$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
		$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

		$ionicConfigProvider.platform.ios.views.transition('ios');
		$ionicConfigProvider.platform.android.views.transition('android');

		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.js
		$stateProvider

		// setup an abstract state for the tabs directive
			.state('tab', {
			url: '/tab',
			abstract: true,
			templateUrl: 'templates/tabs.html'
		})

		//首页
		.state('tab.dash', {
			url: '/dash', // ->  /tab/dash
			views: {
				'tab-dash': {
					templateUrl: 'templates/tab-dash.html',
					controller: 'DashCtrl'
				}
			}
		})
		//分类
		.state('tab.chats', {
				url: '/chats',
				views: {
					'tab-chats': {
						templateUrl: 'templates/tab-chats.html',
						controller: 'ChatsCtrl'
					}
				}
			})
		//信息
		.state('tab.account', {
				url: '/account',
				views: {
					'tab-account': {
						templateUrl: 'templates/tab-account.html',
						controller: 'AccountCtrl'
					}
				}
			})
		//信息－通知
			.state('tab.notify', {
				url: '/notify',
				views: {
					'tab-account': {
						templateUrl: 'templates/account/notify.html',
						controller: 'NotifyCtrl'
					}
				}
			})
			//个人中心
			.state('tab.person', {
				url: '/person',
				views: {
					'tab-person': {
						templateUrl: 'templates/tab-person.html',
						controller: 'PersonCtrl'
					}
				}
			})
			//个人中心－订单
			.state('tab.order', {
				url: '/order',
				views: {
					'tab-person': {
						templateUrl: 'templates/person/orders.html',
						controller: 'PersonOrderCtrl'
					}
				}
			})
			//个人中心－地址
			.state('tab.address', {
				url: '/address',
				views: {
					'tab-person': {
						templateUrl: 'templates/person/address.html',
						controller: 'PersonAddressCtrl'
					}
				}
			})
			//个人中心－销售
			.state('tab.sales', {
				url: '/sales',
				views: {
					'tab-person': {
						templateUrl: 'templates/person/sales.html',

					}
				}
			})
			//个人中心－购物车
			.state('tab.cart', {
				url: '/cart',
				views: {
					'tab-person': {
						templateUrl: 'templates/person/cart.html',
						controller: 'PersonCartCtrl'
					}
				}
			})
			//设置
			.state('tab.set', {
				url: '/set',
				views: {
					'tab-person': {
						templateUrl: 'templates/person/set.html',
						controller: 'PersonSetCtrl'
					}
				}
			})
			//设置－个人信息
			.state('tab.means', {
				url: '/means',
				views: {
					'tab-person': {
						templateUrl: 'templates/person/set/means.html',
						controller: 'PersonSetMeansCtrl'
					}
				}
			})
			//设置－新消息通知
			.state('tab.newst', {
				url: '/newst',
				views: {
					'tab-person': {
						templateUrl: 'templates/person/set/newst.html',
						controller: 'PersonSetNewstCtrl'
					}
				}
			})
			//设置－安全中心
			.state('tab.safe', {
				url: '/safe',
				views: {
					'tab-person': {
						templateUrl: 'templates/person/set/safe.html',
						controller: 'PersonSetSafeCtrl'
					}
				}
			})
			//信息－通知
			.state('tab.news', {
				url: '/news/:newsId',
				views: {
					'tab-account': {
						templateUrl: 'templates/account/news.html',
						controller: 'newsCtrl'
					}
				}
			})
			//个人中心－隐私条例
			.state('tab.privacy', {
				url: '/privacy',
				views: {
					'tab-person': {
						templateUrl: 'templates/person/set/privacy.html',
						controller: 'PersonSetPrivacyCtrl'
					}
				}
			})
			//个人中心－关于
			.state('tab.about', {
				url: '/about',
				views: {
					'tab-person': {
						templateUrl: 'templates/person/set/about.html',
						controller: 'PersonSetAboutCtrl'
					}
				}
			})
			//首页－文章
			.state('tab.index01', {
				url: '/index01',
				views: {
					'tab-dash': {
						templateUrl: 'templates/index/index01.html'
					}
				}
			}).state('tab.index02', {
				url: '/index02',
				views: {
					'tab-dash': {
						templateUrl: 'templates/index/index02.html'
					}
				}
			}).state('tab.index03', {
				url: '/index03',
				views: {
					'tab-dash': {
						templateUrl: 'templates/index/index03.html'
					}
				}
			}).state('tab.index04', {
				url: '/index04',
				views: {
					'tab-dash': {
						templateUrl: 'templates/index/index04.html'
					}
				}
			})
			//详情页
			.state('tab.detail01', {
				url: '/detail/:infoId',
				views: {
					'tab-dash': {
						templateUrl: 'templates/detail/detail01.html',
						controller: 'detailCtrl'
					}
				}
			})
			//支付页
			.state('tab.pay', {
				url: '/pay',
				views: {
					'tab-dash': {
						templateUrl: 'templates/detail/pay.html',
						controller: 'payCtrl'
					}
				}
			})
			//登录页
			.state('tab.login', {
				url: '/login',
				views: {
					'tab-person': {
						templateUrl: 'templates/login.html',
						controller: 'LoginCtrl'
					}
				}
			})
			//注册页
			.state('tab.register', {
				url: '/register',
				views: {
					'tab-person': {
						templateUrl: 'templates/register.html',
						controller: 'RegisterCtrl'
					}
				}
			})

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/tab/dash');

	})
	.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
		$ionicConfigProvider.platform.ios.tabs.style('standard');
		$ionicConfigProvider.platform.ios.tabs.position('bottom');
		$ionicConfigProvider.platform.android.tabs.style('standard');
		$ionicConfigProvider.platform.android.tabs.position('bottom');

		$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
		$ionicConfigProvider.platform.android.navBar.alignTitle('center');

		$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
		$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

		$ionicConfigProvider.platform.ios.views.transition('ios');
		$ionicConfigProvider.platform.android.views.transition('android');

		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.js
		$stateProvider

		// setup an abstract state for the tabs directive
			.state('tab2', {
				url: '/tab2',
				abstract: true,
				templateUrl: 'templates/tab2.html'
			})
			//引导页
			.state('tab2.start', {
				url: '/start',
				views: {
					'tab2-start': {
						templateUrl: 'templates/start.html'
					}
				}
			})
		$urlRouterProvider.otherwise('/tab2/start');
			
	})