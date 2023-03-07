import * as faceapi from "@vladmandic/face-api";

// 人脸辨识
const faceDetect = async (webcamRef) => {
    if (webcamRef && webcamRef.current) {
        return await faceapi.detectAllFaces(
            webcamRef.current,
            new faceapi.TinyFaceDetectorOptions()
        );
    }
};

export default faceDetect;
