import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MegaMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            logo: this.props.logo,
            list: this.props.list,
        };
    }

    render() {
        return (
            <nav className="bg-indigo-800 bg-gradient-to-br from-indigo-600 via-indigo-800 to-indigo-900">
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            {this.state.logo ? (
                                <img
                                    className="ml-4 h-10"
                                    src={this.state.logo}
                                    alt={this.state.title}
                                />
                            ) : (
                                <button
                                    type="button"
                                    className="text-gray-400 hover:text-gray-200"
                                    onClick={() => {
                                        window.history.back();
                                    }}
                                >
                                    <svg
                                        className="w-6 h-6 "
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        fill="currentColor"
                                    >
                                        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                                    </svg>
                                </button>
                            )}

                            <div className="lg:hidden">
                                <button
                                    type="button"
                                    className="text-gray-400 hover:text-gray-200"
                                    onClick={() =>
                                        this.setState({
                                            isOpen: !this.state.isOpen,
                                        })
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d={`${
                                                this.state.isOpen
                                                    ? "M6 18L18 6M6 6l12 12"
                                                    : "M4 8h16M4 16h16"
                                            }`}
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div
                            className={`bg-indigo-800 absolute inset-x-0 z-20 w-full px-6 mr-10 py-4 transition-all duration-300 ease-in-out shadow-md lg:bg-transparent lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 ${
                                this.state.isOpen
                                    ? ""
                                    : "opacity-0 -translate-x-full"
                            }`}
                        >
                            <div className="-mx-4 lg:flex lg:items-center text-gray-200">
                                {this.state.list.map((item, index) => (
                                    <Link
                                        className={`${
                                            item.type === "link"
                                                ? "block mx-4 mt-4 capitalize lg:mt-0 hover:text-blue-600"
                                                : "block w-full btn-primary px-4 py-2 mt-4 text-sm "
                                        }`}
                                        to={item.path}
                                        key={index}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
