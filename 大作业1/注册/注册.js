function submitForm(event) {
    event.preventDefault(); // 阻止表单默认提交行为
  
    // 获取表单数据
    const form = document.getElementById('registrationForm');
    const formData = new FormData(form);
  
    // 构建后端URL
    const backendURL = 'https://zhuce.com';  // 将此替换为实际的后端URL
  
    // 发送POST请求到后台
    fetch(backendURL, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())  // 假设后端返回JSON数据
    .then(data => {
      console.log('注册成功！服务器返回的数据：', data);
      // 这里可以根据后端返回的数据执行适当的操作
    })
    .catch(error => {
      console.error('注册失败：', error);
      // 处理错误情况
    });
  }
  