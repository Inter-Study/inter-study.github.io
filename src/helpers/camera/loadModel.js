import * as faceapi from "face-api.js";

// 从指定路径加载模型
const loadModel = async (path) => {
    return Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri(path)]);
};

export default loadModel;
