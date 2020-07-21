import axios from 'axios';
import ElementUI from "element-ui";
import store from '../vuex/store'
axios.defaults.withCredentials = true;


function ESTAxios(config) {
  if (!config["url"]) {
    return;
  }
  const reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;

  const defaults = {
    url: "",
    type: "GET",
    headers: { 'Content-type': 'application/json' },
    data: {},
    success: () => { },
    error: () => { }
  }
  let axiosConfig = {};
  //需要特别处理的配置项
  const configItem = ["url", "type", "data"]
  for (let key in defaults) {
    //无值给予默认值
    if (!config[key]) config[key] = defaults[key];
    //对齐axios参数
    if (configItem.indexOf(key) >= 0) {
      switch (key) {
        case "url":
          for (let datakey in config["data"]) {
            if (config[key].indexOf("{" + datakey + "}") > 0) {
              config[key] = config[key].replace("{" + datakey + "}", config["data"][datakey]);
              delete config["data"][datakey];
            }
          }
          const url = config[key];
          axiosConfig[key] = reg.test(url) ? url : (store.getters.path + url);
          break;
        case "type":
          axiosConfig["method"] = config[key];
          break;
        case "data":
          axiosConfig[(config["type"] == "GET" ? "params" : "data")] = config[key];
          break;
      }
    } else {
      axiosConfig[key] = config[key];
    }
  }
  console.log(axiosConfig)
  //请求
  axios(axiosConfig).then(function (res) {
    if (res.data.errcode == 0) {
      axiosConfig.success(res.data);
    } else {
      ElementUI.Message({
        type: 'error',
        message: res.data.errmessage
      });
      axiosConfig.error(res.data);
    }
  }).catch((error) => {
    console.log(error);
    axiosConfig.error();
    ElementUI.Message({
      type: 'error',
      message: "网络异常！请重新请求"
    });
  });
}

export {
  ESTAxios
}