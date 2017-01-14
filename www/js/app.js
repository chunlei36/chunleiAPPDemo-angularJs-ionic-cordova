// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngAnimate'])
	.constant('host', 'http://hist.ac.cn:3000')
	.run(function($ionicPlatform) {
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
			templateUrl: 'templates/tabs.html',
			controller: 'TabsCtrl'
		})
		.state('tab.flashall', {
			url: '/flashall',
			views: {
				'tab-home': {
					templateUrl: 'templates/flash-page.html',
					controller: 'flashall'
					
				}
			}
		})
		// Each tab has its own nav history stack:

	.state('tab.home', {
			url: '/home',
			views: {
				'tab-home': {
					templateUrl: 'templates/tab-home.html',
					controller: 'HomeCtrl'
				}
			}
		})
		.state('tab.halloween', {
			url: '/halloween',
			views: {
				'tab-home': {
					templateUrl: 'templates/homepages/halloween.html',
					controller: 'Homehalloween'
				}
			}
		})
		.state('tab.limited', {
			url: '/limited',
			views: {
				'tab-home': {
					templateUrl: 'templates/homepages/limited.html',
					controller: 'Homelimited'
				}
			}
		})
		.state('tab.findpages', {
			url: '/findpages',
			views: {
				'tab-home': {
					templateUrl: 'templates/homepages/findpages.html',
					controller: 'Homefindpages'
				}
			}
		})
		.state('tab.kbpages', {
			url: '/kbpages',
			views: {
				'tab-home': {
					templateUrl: 'templates/homepages/kbpages.html',
					controller: 'Homekbpages'
				}
			}
		})

	.state('tab.classify', {
			url: '/classify',
			views: {
				'tab-classify': {
					templateUrl: 'templates/tab-classify.html',
					controller: 'ClassifyCtrl'
				}
			}
		})
		.state('tab.classify-detail', {
			url: '/classify/:classifyId',
			views: {
				'tab-classify': {
					templateUrl: 'templates/classifypages/classify-detail.html',
					controller: 'ClassifyDetailCtrl'
				}
			}
		})
		.state('tab.near', {
			url: '/near',
			views: {
				'tab-near': {
					templateUrl: 'templates/tab-near.html',
					controller: 'NearCtrl'
				}
			}
		})
		.state('tab.near-detail', {
			url: '/near/:nearID',
			views: {
				'tab-near': {
					templateUrl: 'templates/nearpages/near-detail.html',
					controller: 'NearDetailCtrl'
				}
			}
		})
		//		.state('tab.me', {
		//			url: '/me',
		//			views: {
		//				'tab-me': {
		//					templateUrl: 'templates/tab-me.html',
		//					controller: 'MeCtrl'
		//				}
		//			}
		//		})
		.state('tab.login', {
			url: '/login',
			views: {
				'tab-me': {
					templateUrl: 'templates/login.html',
					controller: 'MyAccount'
				}
			}
		})
		.state('tab.register', {
			url: '/register',
			views: {
				'tab-me': {
					templateUrl: 'templates/register.html',
					controller: 'MyAccount'
				}
			}
		})
		.state('tab.chat', {
			url: '/chat/:newsId',
			views: {
				'tab-me': {
					templateUrl: 'templates/chat.html',
					controller: 'Mychat'
				}
			}
		})
		//		.state('tab.me-detail', {
		//			url: '/me/:meId',
		//			views: {
		//				'tab-me': {
		//					templateUrl: 'templates/mepages/me-detail.html',
		//					controller: 'MeDetailCtrl'
		//				}
		//			}
		//		})
		// Each tab has its own nav history stack
		.state('tab.detail', {
			url: '/homedetail/:shopID',
			views: {
				'tab-home': {
					templateUrl: 'templates/homepages/home-detail.html',
					controller: 'homeDetail'
				}
			}
		})
		.state('tab.shopqg', {
			url: '/shopqg/:price2',
			views: {
				'tab-home': {
					templateUrl: 'templates/shopqg.html',
					controller: 'homeshopqg'
				}
			}
		})
		.state('tab.shoptj', {
			url: '/shoptj/:price3',
			views: {
				'tab-home': {
					templateUrl: 'templates/shoptj.html',
					controller: 'homeshoptj'
				}
			}
		})
		.state('tab.pjall', {
			url: '/pjall',
			views: {
				'tab-home': {
					templateUrl: 'templates/homepages/pjall.html',
					controller: 'homepjall'
				}
			}
		})
		.state('tab.xqpage', {
			url: '/xqpage',
			views: {
				'tab-home': {
					templateUrl: 'templates/homepages/xqpage.html',
					controller: 'homepjall'
				}
			}
		})
		.state('tab.car', {
			url: '/detailcar',
			views: {
				'tab-home': {
					templateUrl: 'templates/homepages/car.html',
					controller: 'homeshoptj'

				}
			}
		})
		.state('tab.404pages', {
			url: '/404pages',
			views: {
				'tab-home': {
					templateUrl: 'templates/404pages.html',
					controller: 'a404pages'

				}
			}
		})

	//我的主页面
	.state('tab.me', {
			url: '/me',
			views: {
				'tab-me': {
					templateUrl: 'templates/tab-me.html',
					controller: 'MeCtrl'
				}
			}
		})
		//美味券
		.state('tab.me-coupon', {
			url: '/coupon',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/me-coupon.html'
				}
			}
		})
		//我的收藏
		.state('tab.me-collect', {
			url: '/collect',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/me-collect.html'
				}
			}
		})
		//全部订单
		.state('tab.me-order', {
			url: '/order',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/me-order.html',
					controller: 'MeOrderCtrl'
				}
			}
		})
		//设置
		.state('tab.me-set', {
			url: '/set',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/me-set.html',
					controller: 'MeCtrl'
				}
			}
		})
		//用户协议
		.state('tab.me-protocal', {
			url: '/protocal',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/me-protocal.html',
					controller: 'MeProtocalCtrl'
				}
			}
		})

	//订单 的各个页面

	.state('tab.all', {
			url: '/all',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/tpl/all.html'
				}
			}
		})
		.state('tab.wait', {
			url: '/wait',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/tpl/wait.html'
				}
			}
		})
		.state('tab.use', {
			url: '/use',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/tpl/use.html'
				}
			}
		})
		.state('tab.evaluate', {
			url: '/evaluate',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/tpl/evaluate.html'
				}
			}
		})
		.state('tab.refund', {
			url: '/refund',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/tpl/refund.html'
				}
			}
		})
		.state('tab.regoods', {
			url: '/regoods',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/tpl/regoods.html',
					controller: 'RegoodsCtrl'
				}
			}
		})
		//设置开始

	.state('tab.about', {
			url: '/about',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/set/about.html'
				}
			}
		})
		.state('tab.suggestion', {
			url: '/suggestion',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/set/suggestion.html',
					controller: 'SuggestionCtrl'
				}
			}
		})
		.state('tab.question', {
			url: '/question',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/set/question.html'
				}
			}
		})
		.state('tab.repwd', {
			url: '/repwd',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/set/repwd.html',
					controller: 'RepwdCtrl'
				}
			}
		})
		.state('tab.renum', {
			url: '/renum',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/set/renum.html',
					controller: 'RenumCtrl'
				}
			}
		})
		.state('tab.common', {
			url: '/common',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/set/common.html'
				}
			}
		})
		.state('tab.secret', {
			url: '/secret',
			views: {
				'tab-me': {
					templateUrl: 'templates/mepages/set/secret.html'
				}
			}
		})

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/flashall');

}).directive('hideTabs', function($rootScope) {
	return {
		restrict: 'A',
		link: function(scope, element, attributes) {
			scope.$on('$ionicView.beforeEnter', function() {
				scope.$watch(attributes.hideTabs, function(value) {
					$rootScope.hideTabs = value;
				});
			});

			scope.$on('$ionicView.beforeLeave', function() {
				$rootScope.hideTabs = false;
			});
		}
	};
});