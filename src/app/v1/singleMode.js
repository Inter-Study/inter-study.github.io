import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import MegaMenu from "../../components/MegaMenu";
import Forbidden from "../../components/Forbidden";
import AppConfig, { EntryConfig } from "../../config";
import { toastAlert } from "../../helpers/alerts/sweetAlert";
import Countdown from "react-countdown";
import loadModel from "../../helpers/camera/loadModel";
import faceDetect from "../../helpers/camera/faceDetect";
import getWebcam from "../../helpers/camera/getWebcam";

class singleMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryTime: Date.now(),
            durationEnd: false,
            isInPulse: false,
            pulseTime: 10000,
            pulseCount: 0,
            eventTrigger: ["blur", "visibilitychange", "focus"],
            webcamWidth: 640,
            webcamHeight: 480,
            webcamRef: createRef(),
            faceApiModels: process.env.PUBLIC_URL + "/models",
            faceApiTimer: null,
            faceApiInterval: 1000,
            faceApiCounter: [0, 0],
            faceApiThreshold: 10,
        };
    }

    componentDidMount() {
        if (this.props.bluethDevice) {
            this.state.eventTrigger.map((item) =>
                document.addEventListener(item, (_) =>
                    this.setPulse("切屏操作")
                )
            );
            loadModel(this.state.faceApiModels).then(() => {
                getWebcam("webcam");
                this.setState({
                    faceApiTimer: setInterval(() => {
                        faceDetect(this.state.webcamRef).then((results) => {
                            this.setState({
                                faceApiCounter: [
                                    this.state.faceApiCounter[0] > 59
                                        ? 0
                                        : this.state.faceApiCounter[0] + 1,
                                    results.length === 0 &&
                                    this.state.faceApiCounter[0] < 59
                                        ? this.state.faceApiCounter[1] + 1
                                        : 0,
                                ],
                            });
                            if (
                                this.state.faceApiCounter[1] >
                                    this.state.faceApiThreshold &&
                                !this.state.isInPulse
                            ) {
                                this.setPulse("人像不在范围内");
                            }
                        });
                    }, this.state.faceApiInterval),
                });
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.faceApiTimer);
    }

    setPulse = (type) => {
        if (this.props.bluethDevice && !this.state.isInPulse) {
            this.setState({
                isInPulse: true,
                pulseCount: this.state.pulseCount + 1,
            });
            toastAlert(
                "提示",
                `监测到${type}，电击开始，持续 ${
                    this.state.pulseTime / 1000
                } 秒`,
                "warning",
                this.state.pulseTime
            );
            this.props.bluethDevice.characteristic.writeValueWithoutResponse(
                new TextEncoder("utf-8").encode(`1\r\n`)
            );
            setTimeout(() => {
                this.setState({
                    isInPulse: false,
                });
                toastAlert(
                    "提示",
                    "电击结束，请提高专注力",
                    "warning",
                    this.state.pulseTime / 2
                );
                this.props.bluethDevice.characteristic.writeValueWithoutResponse(
                    new TextEncoder("utf-8").encode(`0\r\n`)
                );
            }, this.state.pulseTime);
        }
    };

    render() {
        return this.props.bluethDevice ? (
            <div>
                <div className="flex flex-col h-screen bg-gradient-to-br bg-indigo-800 from-indigo-600 via-indigo-800 to-indigo-900">
                    <MegaMenu
                        title={AppConfig.site.title}
                        logo={AppConfig.site.logo}
                        list={EntryConfig.menu}
                    />
                    <div className="overflow-hidden text-center mx-auto max-w-2xl py-16 text-gray-200 lg:text-3xl text-2xl">
                        <Countdown
                            className="m-5"
                            date={
                                this.state.entryTime +
                                1000 * 60 * this.props.focusDuration
                            }
                            renderer={({
                                hours,
                                minutes,
                                seconds,
                                completed,
                            }) => {
                                if (completed) {
                                    this.setState({
                                        durationEnd: true,
                                    });
                                    return "目标达成！";
                                } else {
                                    hours = hours.toString().padStart(2, "0");
                                    minutes = minutes
                                        .toString()
                                        .padStart(2, "0");
                                    seconds = seconds
                                        .toString()
                                        .padStart(2, "0");
                                    return (
                                        <span>
                                            {`剩余 ${hours}:${minutes}:${seconds} 达成目标`}
                                            <br />
                                            请勿刷新页面或中途离开
                                        </span>
                                    );
                                }
                            }}
                        />
                        {!this.state.durationEnd ? (
                            <>
                                <video
                                    id="webcam"
                                    className="rounded-sm mt-8"
                                    autoPlay={true}
                                    playsInline={true}
                                    width={this.state.webcamWidth}
                                    height={this.state.webcamHeight}
                                    ref={this.state.webcamRef}
                                />
                            </>
                        ) : (
                            <span className="text-4xl">
                                {`在这 ${this.props.focusDuration} 分钟里`}
                                <br />
                                {`你被电击提醒了 ${this.state.pulseCount} 次`}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        ) : (
            <Forbidden />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bluethDevice: state.bluethDevice,
        focusDuration: state.focusDuration,
    };
};

export default connect(mapStateToProps)(singleMode);
