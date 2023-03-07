import * as faceapi from "@vladmandic/face-api";

// 从指定路径加载模型
const loadModel = async (path) => {
    return Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri(path)]);
};

export default loadModel;
