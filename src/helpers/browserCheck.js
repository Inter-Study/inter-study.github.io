// 对浏览器进行检测
const browserCheck = () => {
    if ("mediaDevices" in navigator && "bluetooth" in navigator) {
        return true;
    }
    return false;
};

export default browserCheck;
