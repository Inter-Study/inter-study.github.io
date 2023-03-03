import Webcam from "webcam-easy";

// 取得摄像头权限
const getWebcam = (videoEl) => {
    const webcam = new Webcam(document.getElementById(videoEl), "user");
    return webcam.start();
};

export default getWebcam;
