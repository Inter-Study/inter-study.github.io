import { lazy } from "react";

const Routes = [
    {
        index: true,
        timer: 1000,
        tag: "首页",
        component: "./app/index",
        path: "/",
    },
    {
        timer: 1000,
        tag: "用户入口",
        component: "./app/v1/userPortal",
        path: "/v1",
    },
    {
        timer: 1000,
        tag: "设备检查",
        component: "./app/v1/deviceTest",
        path: "/v1/device",
    },
    {
        timer: 1000,
        tag: "环境检查",
        component: "./app/v1/envTest",
        path: "/v1/env",
    },
    {
        timer: 1000,
        tag: "用户偏好",
        component: "./app/v1/userPref",
        path: "/v1/preference",
    },
    {
        timer: 1000,
        tag: "单人模式",
        component: "./app/v1/singleMode",
        path: "/v1/single",
    },
    {
        timer: 1000,
        tag: "多人模式",
        component: "./app/v1/multiMode",
        path: "/v1/multi",
    },
];

const routerConfig = new Array(Routes.length);
Routes.forEach((item, index) => {
    routerConfig[index] = lazy(async () => {
        const [moduleExports] = await Promise.all([
            import(`${item.component}`),
            new Promise((resolve) => setTimeout(resolve, item.timer)),
        ]);
        return moduleExports;
    });
});

export default routerConfig;
export { Routes };
