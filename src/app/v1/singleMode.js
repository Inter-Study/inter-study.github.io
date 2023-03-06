import React, { Component } from "react";
import { connect } from "react-redux";
import Webcam from "react-webcam";
import MegaMenu from "../../components/MegaMenu";
import Forbidden from "../../components/Forbidden";
import AppConfig, { EntryConfig } from "../../config";
import { toastAlert } from "../../helpers/alerts/sweetAlert";
import Countdown from "react-countdown";

class singleMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnd: false,
            isPulse: false,
            pulseCount: 0,
            pulseTimer: 10,
            eventTrigger: [
                "blur", // 失焦事件
                "visibilitychange", // 可见性变更事件
                "foucus",
            ],
        };
    }

    componentDidMount() {
        this.props.bluethDevice &&
            this.state.eventTrigger.map((item) =>
                document.addEventListener(item, (_) => this.setPulse(1))
            );
    }

    setPulse = (state) => {
        if (state && this.props.bluethDevice && !this.state.isPulse) {
            this.setState({
                isPulse: true,
                pulseCount: this.state.pulseCount + 1,
            });
            toastAlert("警告", "你未在专注状态，电击开始", "warning", 2000);
            this.props.bluethDevice.characteristic.writeValueWithoutResponse(
                new TextEncoder("utf-8").encode("1")
            );
            setTimeout(() => {
                this.setState({
                    isPulse: false,
                });
                toastAlert("通知", "本轮电击结束，请提高专注力", "info", 2000);
                this.props.bluethDevice.characteristic.writeValueWithoutResponse(
                    new TextEncoder("utf-8").encode("0")
                );
            }, this.state.pulseTimer * 1000);
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
                                Date.now() +
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
                                        isEnd: true,
                                    });
                                    return "恭喜，目标达成！";
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
                                            {`请勿刷新页面！`}
                                        </span>
                                    );
                                }
                            }}
                        />
                        {!this.state.isEnd ? (
                            <Webcam
                                width={640}
                                height={480}
                                className="rounded-sm mt-8"
                            />
                        ) : (
                            <span className="text-4xl">{`在这 ${this.props.focusDuration} 分钟里，你被电击提醒了 ${this.state.pulseCount} 次`}</span>
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
