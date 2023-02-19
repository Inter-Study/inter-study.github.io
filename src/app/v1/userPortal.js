import React, { Component } from "react";
import MegaMenu from "../../components/MegaMenu";
import AppConfig, { EntryConfig } from "../../config";
import {
    checkUserPref,
    getUserPref,
    setUserPref,
} from "../../helpers/userPref";
import fakeName from "../../helpers/fakeName";
import browserCheck from "../../helpers/browserCheck";
import { errorAlert, successAlert, timerAlert } from "../../helpers/sweetAlert";

export default class userPortal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstRun: true,
            userPref: {},
            userName: fakeName(),
            wizardList: [
                {
                    id: "welcome",
                    text: [
                        {
                            novice: `Hi~ 很高兴认识你 👋🏻<br />`,
                            common: `Hi~ 欢迎回来 🥰<br />`,
                        },
                        {
                            novice: `👀 你似乎是一位新用户<br />`,
                            common: `❤️ 你似乎已经完成了初始化<br />`,
                        },
                        {
                            novice: `本向导将带你完成一些设定 📋<br />`,
                            common: `那让我们直接开始吧 📝<br />`,
                        },
                    ],
                    button: [
                        {
                            novice: {
                                text: `开始设定`,
                                click: (e) => {
                                    this.setBlock("welcome", false);
                                    this.setBlock("initilize", true);
                                },
                            },
                            common: {
                                text: `进入状态`,
                                click: (e) => {
                                    this.setBlock("welcome", false);
                                    this.setBlock("support", true);
                                },
                            },
                        },
                    ],
                },
                {
                    id: "initilize",
                    text: [
                        {
                            novice: `我为你生成了一个昵称 😈<br />`,
                            common: ``,
                        },
                        {
                            novice: `🙌🏼 名字叫做「${this.setUserName()}」<br />`,
                            common: ``,
                        },
                        {
                            novice: `今后我会这样称呼你 😽<br />`,
                            common: ``,
                        },
                        {
                            novice: `🥀 如果你不喜欢的话<br />`,
                            common: ``,
                        },
                        {
                            novice: `可前往「用户偏好」修改 ⚙️<br />`,
                            common: ``,
                        },
                    ],
                    button: [
                        {
                            novice: {
                                text: `好的，没问题`,
                                click: (e) => {
                                    this.setBlock("initilize", false);
                                    this.setBlock("support", true);
                                },
                            },
                            common: {
                                text: ``,
                                click: (e) => null,
                            },
                        },
                    ],
                },
                {
                    id: "support",
                    text: [
                        {
                            novice: `请你放心 👌🏻<br />`,
                            common: `请你放心 👌🏻<br />`,
                        },
                        {
                            novice: `🎭 你的隐私不会被窃取<br />`,
                            common: `🎭 你的隐私不会被窃取<br />`,
                        },
                        {
                            novice: `所有数据均储存于本地 📲<br />`,
                            common: `所有数据均储存于本地 📲<br />`,
                        },
                        {
                            novice: `🔑 接下来让我们检查兼容性<br />`,
                            common: `🔑 接下来让我们检查兼容性<br />`,
                        },
                    ],
                    button: [
                        {
                            novice: {
                                text: `检查兼容性`,
                                click: (e) => {
                                    timerAlert(
                                        "稍等",
                                        "正在检查浏览器兼容性",
                                        1000,
                                        this.isSupport
                                    );
                                },
                            },
                            common: {
                                text: `检查兼容性`,
                                click: (e) => {
                                    timerAlert(
                                        "稍等",
                                        "正在检查浏览器兼容性",
                                        1000,
                                        this.isSupport
                                    );
                                },
                            },
                        },
                    ],
                },
                {
                    id: "webcam",
                    text: [
                        {
                            novice: `请授予本页面摄像头权限 📸<br />`,
                            common: `请授予本页面摄像头权限 📸<br />`,
                        },
                        {
                            novice: `🙇🏻‍♀️ 摄像头会分析人像动作<br />`,
                            common: `🙇🏻‍♀️ 摄像头会分析人像动作<br />`,
                        },
                        {
                            novice: `以此判断你是否在专注状态 👩‍⚖️<br />`,
                            common: `以此判断你是否在专注状态 👩‍⚖️<br />`,
                        },
                        {
                            novice: `😼 根据情况选择前/后置摄像头<br />`,
                            common: `😼 根据情况选择前/后置摄像头<br />`,
                        },
                    ],
                    button: [
                        {
                            novice: {
                                text: `授予权限`,
                                click: (e) => {
                                    timerAlert(
                                        "稍等",
                                        "正在检查浏览器兼容性，这需要一些时间",
                                        2000,
                                        this.isSupport
                                    );
                                },
                            },
                            common: {
                                text: `授予权限`,
                                click: (e) => {
                                    timerAlert(
                                        "稍等",
                                        "正在检查浏览器兼容性，这需要一些时间",
                                        2000,
                                        this.isSupport
                                    );
                                },
                            },
                        },
                    ],
                },
            ],
        };
    }

    setBlock = (id, display) => {
        this.state.wizardList.forEach((item, index) => {
            if (item.id === id) {
                this.state.wizardList[index].text.forEach((_item, _index) => {
                    if (display) {
                        setTimeout(() => {
                            document
                                .getElementById(`text_${id}_${_index}`)
                                .classList.remove("hidden");
                            document
                                .getElementById(`text_${id}_${_index}`)
                                .classList.add("animate-appear");
                        }, 500);
                    } else {
                        document
                            .getElementById(`text_${id}_${_index}`)
                            .classList.add("animate-disappear");
                        setTimeout(() => {
                            document
                                .getElementById(`text_${id}_${_index}`)
                                .classList.add("hidden");
                        }, 400);
                    }
                });
                this.state.wizardList[index].button.forEach((_item, _index) => {
                    if (display) {
                        setTimeout(() => {
                            document
                                .getElementById(`button_${id}_${_index}`)
                                .classList.remove("hidden");
                            document
                                .getElementById(`button_${id}_${_index}`)
                                .classList.add("animate-appear");
                        }, 1000);
                    } else {
                        document
                            .getElementById(`button_${id}_${_index}`)
                            .classList.add("animate-disappear");
                        setTimeout(() => {
                            document
                                .getElementById(`button_${id}_${_index}`)
                                .classList.add("hidden");
                        }, 100);
                    }
                });
            }
        });
    };

    setUserName = () => {
        const name = fakeName();
        if (!checkUserPref()) {
            setTimeout(
                () =>
                    setUserPref({
                        name: name,
                    }),
                1000
            );
        }

        return name;
    };

    setUserData = (data) => {
        this.setState({
            userPref: Object.assign(this.state.userPref, data),
        });

        setUserPref(data);
    };

    isSupport = () => {
        browserCheck()
            ? successAlert(
                  `成功`,
                  `通过兼容性测试<br />
                  即将转入下一步`
              ).then(() => {
                  this.setBlock("support", false);
                  this.setBlock("webcam", true);
              })
            : errorAlert(
                  `失败`,
                  `很遗憾，此浏览器不受支持<br />
                  推荐最新版本 Chrome 浏览器<br />
                  可在 Google Play 中取得`
              );
    };

    componentDidMount() {
        if (checkUserPref()) {
            this.setState({
                firstRun: false,
                userPref: getUserPref(),
            });
        }

        this.setBlock(this.state.wizardList[0].id, true);
    }

    render() {
        return (
            <div>
                <div className="flex flex-col h-screen bg-gradient-to-br bg-indigo-800 from-indigo-600 via-indigo-800 to-indigo-900">
                    <MegaMenu
                        title={AppConfig.site.title}
                        logo={AppConfig.site.logo}
                        list={EntryConfig.menu}
                    />
                    <div className="overflow-hidden text-center mx-auto max-w-2xl py-32 lg:py-48 text-gray-200 lg:text-3xl text-2xl">
                        {this.state.wizardList.map((item, index) => (
                            <div className="flex flex-col gap-4" key={index}>
                                {item.text.map((_item, _index) => (
                                    <span
                                        key={`text_${item.id}_${_index}`}
                                        id={`text_${item.id}_${_index}`}
                                        dangerouslySetInnerHTML={{
                                            __html: this.state.firstRun
                                                ? _item.novice
                                                : _item.common,
                                        }}
                                        className="hidden"
                                    />
                                ))}
                                {item.button.map((_item, _index) => (
                                    <button
                                        key={`button_${item.id}_${_index}`}
                                        id={`button_${item.id}_${_index}`}
                                        className="hidden btn-primary px-4 py-2 text-lg"
                                        onClick={(e) =>
                                            this.state.firstRun
                                                ? _item.novice.click(e)
                                                : _item.common.click(e)
                                        }
                                    >
                                        {this.state.firstRun
                                            ? _item.novice.text
                                            : _item.common.text}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
