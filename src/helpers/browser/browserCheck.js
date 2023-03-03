import AppConfig from "../../config";

// 对浏览器进行检测
const browserCheck = () => {
    if ("mediaDevices" in navigator && "bluetooth" in navigator) {
        return true;
    }
    return AppConfig.environment === "development" ? true : false;
};

export default browserCheck;
