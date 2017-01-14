var user;
if(localStorage.getItem('user') == null) {
	var users = [{
		name: 'aaa',
		pwd: 123456789,
		state: 1, //是否冻结  1  -1
		count: 0 //新增登录次数    每次登录失败  +1  连续登录3次  冻结账户

	}, {
		name: 'bbb',
		pwd: 123456789,
		state: 1,
		count: 0
	}, {
		name: 'ccc',
		pwd: 123456789,
		state: 1,
		count: 0

	}, ]

	var str = JSON.stringify(users)
	localStorage.setItem('user', str)
	var value = localStorage.getItem('user')
	user = JSON.parse(value)
} else {
	var value = localStorage.getItem('user')
	user = JSON.parse(value)
}

function login() {
	$('.invalid').hide();

	var logstate = false;
	var logpwd;

	var uname = $('#uname').val();

	for(var i = 0; i < user.length; i++) {
		if(user[i].name == uname) {
			logstate = true;
			logpwd = user[i].pwd
		}
	}
	if(logstate) {
		var pwd = $('#pwd').val();
		if(logpwd == pwd) {
			localStorage.setItem('userstate', 'state')
			open('peoindex.html')

		} else {
			$('.invalid').hide();

			$('.pwd_error').show();
		}

	} else {
		$('.invalid').hide();

		$('.no_existent').show();
	}

}