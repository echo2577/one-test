async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP 请求错误：${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`无法获取产品列表：${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
