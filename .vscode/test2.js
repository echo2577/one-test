const promise = new Promise((resolve, reject) => {
  // 执行异步操作（如网络请求、定时器等）
  setTimeout(() => {
    const success = true; // 模拟操作结果
    if (success) {
      resolve("操作成功！"); // 状态变为 fulfilled，结果为 "操作成功！"
    } else {
      reject(new Error("操作失败")); // 状态变为 rejected，错误为 Error 对象
    }
  }, 1000);
});

// 处理 Promise 结果
promise
  .then((value) => {
    console.log(value); // 打印 "操作成功！"
  })
  .catch((error) => {
    console.error(error); // 打印 Error 对象
  });
