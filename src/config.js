const AppConfig = {
    site: {
        title: `Inter Study`,
        name: `Inter Study`,
        logo: require("./assets/image/inter-study.png"),
        home: "/",
        subtitle: `| 提升专注力`,
        copyright: `© ${new Date().getFullYear()} Seunghun Lee. All rights reserved.`,
    },
    animation: {
        transition: 1000,
        notification: 800,
    },
    router: "hash",
    environment: "development",
    // environment: "production",
};

const LandingConfig = {
    background: require("./assets/image/background.jpg"),
    entrypoint: "/v1",
    menu: [
        {
            name: "产品首页",
            path: "/",
            type: "link",
        },
        {
            name: "产品功能",
            path: "/features",
            type: "link",
        },
        {
            name: "购买手环",
            path: "/purchase",
            type: "button",
        },
        {
            name: "开启专注",
            path: "/v1",
            type: "button",
        },
    ],
    sections: [
        {
            icon: "",
            title: "111",
            subtitle: "aaa",
            description: "aaaaaaaaaaaaa",
            banner: "",
            link: "/",
        },
        {
            icon: "",
            title: "222",
            subtitle: "bbb",
            description: "bbbbbbbbbbbbb",
            banner: "",
            link: "/",
        },
        {
            icon: "",
            title: "333",
            subtitle: "ccc",
            description: "ccccccccccccc",
            banner: "",
            link: "/",
        },
    ],
};

const EntryConfig = {
    menu: [
        {
            name: "环境检查",
            path: "/v1/env",
            type: "link",
        },
        {
            name: "设备测试",
            path: "/v1/device",
            type: "link",
        },
        {
            name: "用户偏好",
            path: "/v1/preference",
            type: "link",
        },
        {
            name: "用户活动",
            path: "/v1/activity",
            type: "link",
        },
        {
            name: "进入向导",
            path: "/v1",
            type: "button",
        },
    ],
};

// 蓝牙透传 UUID
const BluetoothConfig = {
    filters: [{ namePrefix: "BT" }, { namePrefix: "JDY" }],
    service: "0000ffe0-0000-1000-8000-00805f9b34fb",
    characteristic: "0000ffe1-0000-1000-8000-00805f9b34fb",
};

export default AppConfig;
export { LandingConfig, EntryConfig, BluetoothConfig };
