let username = document.getElementById('username');
let password = document.getElementById('password');
let errMsg = document.querySelector('p.err-msg');
let loginMsg = document.querySelector('p.login-msg');

function isEmpty() {
  if (username.value != '' && password.value != '') {
    return false;
  } else {
    showErr('empty');
    isLoginSuccess(false);
    return true;
  }
}

function checkLogin() {
  clearErrMsg();
  if (!isEmpty()) {
    if (username.value === '123' && password.value === '123') {
      isLoginSuccess(true);
    } else {
      clearPassword();
      showErr('error');
      isLoginSuccess(false);
    }
  }
}

function clearErrMsg() {
  errMsg.innerText = '';
  loginMsg.innerText = '';
}

function showErr(err) {
  switch (err) {
    case 'error':
      errMsg.innerText = '用户名或密码错误';
      break;
    case 'empty':
      errMsg.innerText = '用户名或密码不能为空';
      break;
    default:
      clearErrMsg();
  }
}

function isLoginSuccess(state) {
  if (state) {
    loginMsg.innerText = '登录成功';
  } else {
    loginMsg.innerText = '登录失败';
  }
}

function clearPassword() {
  password.value = '';
}