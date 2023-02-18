// 从 localStorage 中取得用户偏好
const getUserPref = () => {
    const localPref = localStorage.getItem("preference");
    if (localPref) {
        return JSON.parse(localPref);
    }
    return {
        name: "",
        avatar: "https://gravatar.kuibu.net/avatar?s=200&d=robohash&r=x",
        i18n: "zh-CN",
        theme: "light",
        collector: {
            punish_mode: false,
            last_use: "1900-01-01 00:00:00",
            last_duration: 0,
        },
    };
};

// 将用户偏好写进 localStorage
const setUserPref = (data) => {
    const defaultPref = getUserPref();
    const newPref = Object.assign(defaultPref, data);
    Promise.resolve(newPref)
        .then((data) => {
            localStorage.setItem("preference", JSON.stringify(data));
        })
        .catch((err) => {
            return new Error(err);
        });
};

// 检查用户偏好是否存在
const checkUserPref = () => {
    const localPref = JSON.parse(localStorage.getItem("preference"));
    if (localPref && localPref.name.length > 0) {
        return true;
    }
    return false;
};

export { getUserPref, setUserPref, checkUserPref };
