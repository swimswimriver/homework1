function displayImage(event) {
    const file = event.target.files[0];  // 获取用户选择的文件
    if (file && file.type.startsWith('image')) {
      const reader = new FileReader();

      reader.onload = function(e) {
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = '';  // 清空容器

        const img = document.createElement('img');  // 创建 img 元素
        img.src = e.target.result;  // 设置图片 src
        img.alt = 'Uploaded Image';  // 设置替代文本
        imageContainer.appendChild(img);  // 将图片添加到容器
      }

      reader.readAsDataURL(file);  // 读取文件内容并将其作为 Data URL 返回
    } else {
      alert('Please select a valid image file.');
    }
  }

