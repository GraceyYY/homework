function check() {
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let usernameErr = document.querySelector('p.username-err');
  let passwordErr = document.querySelector('p.password-err');
  let loginMsg = document.querySelector('p.login-msg');


  function showErr(err) {
    switch (err) {
      case 'username-err':
        usernameErr.innerText = '用户名错误';
        break;
      case 'username-null':
        usernameErr.innerText = '用户名为空';
        break;
      case 'password-err':
        passwordErr.innerText = '密码错误';
        break;
      case 'password-null':
        passwordErr.innerText = '密码为空';
        break;
      default:
        usernameErr.innerText = '';
        passwordErr.innerText = '';
    }
  }

  function isLoginSuccess(state) {
    if (state) {
      loginMsg.innerText = '登录成功';
    } else {
      loginMsg.innerText = '登录失败';
    }
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

  function clearPassword() {
    password.value = '';
  }
}