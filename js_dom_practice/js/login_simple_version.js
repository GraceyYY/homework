let username = document.getElementById('username');
let password = document.getElementById('password');

function isNotEmpty() {
  return username.value && password.value;
}

function checkLogin() {
  let notEmpty = isNotEmpty();
  if (!notEmpty) {
    showMessage('empty');
    clearPassword();
    return;
  }
  if (username.value === '123' && password.value === '123') {
    showMessage('success');
  } else {
    showMessage('error');
    clearPassword();
  }
}

function showMessage(msg) {
  let errMsg = document.getElementById('err_msg');
  let loginMsg = document.getElementById('login_msg');
  switch (msg) {
    case 'success':
      loginMsg.innerText = '登录成功';
      break;
    case 'error':
      errMsg.innerText = '用户名或密码错误';
      loginMsg.innerText = '登录失败';
      break;
    case 'empty':
      errMsg.innerText = '用户名或密码不能为空';
      loginMsg.innerText = '登录失败';
      break;
    default:
  }
}

function clearPassword() {
  password.value = '';
}