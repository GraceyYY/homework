function check() {
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let usernameErr = document.querySelector('p.username-err');
  let passwordErr = document.querySelector('p.password-err');
  let loginMsg = document.querySelector('p.login-msg');

  clearErrMsg();

  let isUsernameValid = checkUsername();
  let isPasswordValid = checkPassword();

  if (isUsernameValid && isPasswordValid) {
    isLoginSuccess(true);
  } else {
    clearPassword();
    isLoginSuccess(false);
  }

  function clearErrMsg() {
    usernameErr.innerText = '';
    passwordErr.innerText = '';
    loginMsg.innerText = '';
  }

  function checkUsername() {
    if (username.value === '123') {
      return true;
    } else {
      if (username.value === '') {
        showErr('username-null');
      } else {
        showErr('username-err');
      }
      return false
    }
  }

  function checkPassword() {
    if (password.value === '123') {
      return true;
    } else {
      if (password.value === '') {
        showErr('password-null');
      } else {
        showErr('password-err');
      }
      return false
    }
  }

  function showErr(err) {
    switch (err) {
      case 'username-err':
        usernameErr.innerText = '用户名错误';
        break;
      case 'username-null':
        usernameErr.innerText = '用户名不能为空';
        break;
      case 'password-err':
        passwordErr.innerText = '密码错误';
        break;
      case 'password-null':
        passwordErr.innerText = '密码不能为空';
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
}