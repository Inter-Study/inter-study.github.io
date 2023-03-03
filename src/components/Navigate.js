import { Component } from "react";
import AppConfig from "../config";
import redirectRouter from "../helpers/router/redirectRouter";

// 重新实现 Navigate 组件
export default class Navigate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to: this.props.to || AppConfig.site.home,
            replace: this.props.replace || false,
        };
    }

    // 挂载组件时执行跳转
    componentDidMount() {
        redirectRouter(this.state.to, this.state.replace);
    }

    render() {
        return null;
    }
}
