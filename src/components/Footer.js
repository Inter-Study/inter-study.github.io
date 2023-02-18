import React, { Component } from "react";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
        };
    }

    render() {
        return (
            <footer className="p-4 sm:p-6">
                <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
                <span className="text-sm text-gray-400 sm:text-center">
                    {this.state.text}
                </span>
            </footer>
        );
    }
}
