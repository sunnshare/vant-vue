import axios from "axios";

class HttpRequest {
  constructor() {
    this.baseURL =
      process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000";
    this.timeout = 3000;
    this.queue = {}; // 维护请求队列
  }
  setInterceptor(instance, url) {
    instance.interceptors.request.use((config) => {
      if (Object.keys(this.queue).length === 0) {
        // 开启 loading
      }

      // 将取消函数绑定在 config 上
      let CancelToken = axios.CancelToken;
      config.cancelToken = new CancelToken((c) => {});
      // 存入当前请求
      this.queue[url] = true;
      console.log(config);
      return config;
    });

    instance.interceptors.response.use(
      (res) => {
        // 从队列里删除该请求
        delete this.queue[url];

        if (Object.keys(this.queue).length === 0) {
          // close loading
        }
        if (res.status === 200) {
          return res.data.data;
        } else {
          return Promise.reject(res.data);
        }
      },
      (err) => {
        delete this.queue[url];
        return Promise.reject(err);
      }
    );
  }
  request(options) {
    let instance = axios.create();
    let config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      ...options,
    };
    this.setInterceptor(instance, config.url);
    return instance(config);
  }
  get(url, data = {}) {
    return this.request({
      url,
      method: "get",
      ...data,
    });
  }
  post(url, data = {}) {
    return this.request({
      url,
      method: "post",
      data,
    });
  }
}

export default new HttpRequest();
