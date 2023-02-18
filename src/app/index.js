import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MegaMenu from "../components/MegaMenu";
import AppConfig, { LandingConfig } from "../config";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            sloganList: [
                "预习",
                "复习",
                "备考",
                "阅读",
                "写作",
                "记忆",
                "思考",
            ],
            sloganIndex: 0,
            sloganInterval: 2000,
            sloganTimer: null,
        };
    }

    componentDidMount() {
        this.setState({
            sloganTimer: setInterval(() => {
                this.setState({
                    sloganIndex:
                        this.state.sloganIndex ===
                        this.state.sloganList.length - 1
                            ? 0
                            : this.state.sloganIndex + 1,
                });
            }, this.state.sloganInterval),
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.sloganTimer);
    }

    render() {
        return (
            <div className="page-primary bg-gradient-to-br bg-indigo-800 from-indigo-600 via-indigo-800 to-indigo-900">
                <MegaMenu
                    title={AppConfig.site.title}
                    logo={AppConfig.site.logo}
                    list={LandingConfig.menu}
                />

                <div className="w-full h-full bg-book bg-center bg-cover">
                    <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
                        <div className="relative px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                                <div className="text-center">
                                    <h1 className="text-xl font-bold tracking-tight sm:text-3xl text-gray-200">
                                        想要专注
                                        <span className="text-2xl sm:text-4xl p-2 animate-pulse underline decoration-double">
                                            {
                                                this.state.sloganList[
                                                    this.state.sloganIndex
                                                ]
                                            }
                                        </span>
                                        其实并不难
                                    </h1>
                                    <p className="mt-6 leading-8 text-gray-400">
                                        透过 Inter Study
                                        专注力系统，配合专用智慧手环
                                        <br />
                                        高效学习、备考、阅读、写作......
                                        通通不是问题
                                    </p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <Link
                                            to={LandingConfig.entrypoint}
                                            className="btn-primary inline px-6 py-2 text-lg"
                                        >
                                            开启专注之旅
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative rounded-xl overflow-auto p-14">
                                <div className="flex justify-center">
                                    <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-indigo-500"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="p-12">
                    {LandingConfig.sections.map((item, index) => (
                        <div className="px-4 sm:px-6 md:px-8 mb-16" key={index}>
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center from-purple-500 to-indigo-500 mb-8"></div>
                            <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-indigo-600 mb-3">
                                {item.subtitle}
                            </h2>
                            <p className="text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
                                {item.title}
                            </p>
                            <p className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-900">
                                {item.description}
                            </p>
                            <Link
                                to={item.link}
                                className="inline-flex text-lg sm:text-2xl font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-violet-600 hover:text-violet-800"
                            >
                                了解更多 &gt;
                            </Link>
                            <img
                                className="w-full mt-8"
                                src={item.image}
                                alt={item.subtitle}
                            />
                        </div>
                    ))}
                </section>

                <Footer text={AppConfig.site.copyright} />
            </div>
        );
    }
}
