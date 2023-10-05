let generatedCaptcha = '';  // 保存生成的验证码
// 生成一个四位数的随机验证码
function generateCaptcha() {
  const characters = '0123456789';
  let captcha = '';
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    captcha += characters[randomIndex];
  }
  return captcha;
}

// 在页面上显示验证码
function displayCaptcha() {
  const captchaText = document.getElementById('captchaText');
  generatedCaptcha = generateCaptcha();
  captchaText.innerText = generatedCaptcha;

  // 设置验证码文本的随机颜色
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  captchaText.style.color = randomColor;
  return generatedCaptcha;
}

// 刷新验证码
function refreshCaptcha() {
  displayCaptcha();
}

// 验证用户输入的验证码是否正确
function validateCaptcha() {
  const userInput = document.getElementById('captchaInput').value;
  if (userInput === generatedCaptcha) {


    // 添加验证码正确时的提示信息
    const captchaStatus = document.getElementById('captchaStatus');
    captchaStatus.innerText = '验证码正确';
    captchaStatus.style.color = 'green';
  } else {
    displayCaptcha(); // 刷新验证码
    // 添加验证码错误时的提示信息
    const captchaStatus = document.getElementById('captchaStatus');
    captchaStatus.innerText = '验证码错误，请重试';
    captchaStatus.style.color = 'red';
  }
}


// 页面加载时生成并显示验证码

document.addEventListener('DOMContentLoaded', function() {
  displayCaptcha();
  disableRegisterButton(); // 初始禁用注册按钮
});
function updateCaptchaValidation() {
    const captchaInput = document.getElementById('captchaInput').value;
    isCaptchaValid = captchaInput === generatedCaptcha;
    updateSubmitButtonState();  // 更新提交按钮状态
  }
  
  function updateSubmitButtonState() {
    const registerButton = document.getElementById('registerButton');
    registerButton.disabled = !(isCaptchaValid && isAccountPasswordValid());  // 只有在验证码和账号密码都合法时才启用提交按钮
  }