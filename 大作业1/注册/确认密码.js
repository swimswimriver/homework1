let isCaptchaValid = false;  // 初始状态为 false

// 验证输入字符是否符合要求
function validateInput(input) {
  const pattern = /^[A-Za-z0-9@. ]+$/;
 
  return pattern.test(input);
}

function isAccountPasswordValid() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // 添加账号和密码的验证逻辑
    const isUsernameValid = validateInput(username) && username.length >= 6 && username.length <= 17;
    const isPasswordValid = validateInput(password) && password.length >= 6 && password.length <= 17;
    const isConfirmPasswordValid = password == confirmPassword;
  
    return isUsernameValid && isPasswordValid && isConfirmPasswordValid;
  }
// 更新注册状态
function updateRegisterState() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // 添加账号和密码的验证逻辑
    const isUsernameValid = validateInput(username) && username.length >= 6 && username.length <= 17;
    const isPasswordValid = validateInput(password) && password.length >= 6 && password.length <= 17;
    const isConfirmPasswordValid = password == confirmPassword;
  // 更新错误提示信息
  updateErrorMessage('usernameError', !isUsernameValid, '6-17位字符，数字、字母、@、.和空格');
  updateErrorMessage('passwordError', !isPasswordValid, '6-17位字符，数字、字母、@、.和空格');
  updateErrorMessage('confirmPasswordError', !isConfirmPasswordValid, '密码不一致');
  // 更新提交按钮状态
  updateSubmitButtonState();
}


function updateErrorMessage(elementId, isError, message) {
  const element = document.getElementById(elementId);
  if(isError==1){
  element.innerText = message;
  }
  else{
    element.innerText = '';
  }
}

function enableRegisterButton() {
  const registerButton = document.getElementById('registerButton');
  registerButton.disabled = !isCaptchaValid && document.getElementById('usernameError').innerText === '' && document.getElementById('passwordError').innerText === '' && document.getElementById('confirmPasswordError').innerText === '';
}

function disableRegisterButton() {
  const registerButton = document.getElementById('registerButton');
  registerButton.disabled = true;
}

// 更新账号密码验证状态


// 监听输入框内容变化
document.getElementById('username').addEventListener('input', updateRegisterState);
document.getElementById('password').addEventListener('input', updateRegisterState);
document.getElementById('confirmPassword').addEventListener('input', updateRegisterState);

