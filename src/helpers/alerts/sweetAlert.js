import Swal from "sweetalert2";

// 成功提示框
const successAlert = (title, html) => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "success",
        confirmButtonText: "确认",
        allowOutsideClick: false,
    });
};

// 错误提示框
const errorAlert = (title, html) => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "error",
        confirmButtonText: "确认",
        allowOutsideClick: false,
    });
};

// 警告提示框
const warningAlert = (title, html) => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "warning",
        confirmButtonText: "确认",
        allowOutsideClick: false,
    });
};

// 信息提示框
const infoAlert = (title, html) => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "info",
        confirmButtonText: "确认",
        allowOutsideClick: false,
    });
};

// 确认提示框
const confirmAlert = (
    title,
    html,
    confirmButtonText,
    cancelButtonText,
    callback
) => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "warning",
        showCancelButton: cancelButtonText.length > 0 ? true : false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        allowOutsideClick: false,
        cancelButtonText: cancelButtonText,
        confirmButtonText: confirmButtonText,
    }).then((result) => {
        if (result.value) {
            callback();
        }
    });
};

// 定时关闭提示框
const timerAlert = async (title, html, timer, callback) => {
    let timerInterval = null;
    const result = await Swal.fire({
        title: title,
        html: html,
        timer: timer,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
        willClose: () => {
            clearInterval(timerInterval);
        },
    });
    if (result.dismiss === Swal.DismissReason.timer) {
        callback();
    }
};

// 悬浮提示框
const toastAlert = (title, html, icon, timer) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        timer: timer,
        timerProgressBar: true,
        showConfirmButton: false,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    return Toast.fire({
        icon: icon,
        title: title,
        html: html,
    });
};

// 选择提示框
const selectAlert = (title, html, input, inputOptions, callback) => {
    return Swal.fire({
        title: title,
        html: html,
        input: input,
        inputOptions: inputOptions,
        inputPlaceholder: "请选择",
        showCancelButton: false,
        allowOutsideClick: false,
        inputValidator: (value) => {
            if (!value) {
                return "请选择";
            }
        },
    }).then((result) => {
        if (result.value) {
            callback(result.value);
        }
    });
};

// 输入提示框
const inputAlert = (title, html, input, callback) => {
    return Swal.fire({
        title: title,
        html: html,
        input: input,
        inputAttributes: {
            autocapitalize: "off",
        },
        confirmButtonText: "确认",
        showCancelButton: false,
        allowOutsideClick: false,
        inputValidator: (value) => {
            if (!value) {
                return "请输入有效的值";
            }
        },
    }).then((result) => {
        if (result.value) {
            callback(result.value);
        }
    });
};

export {
    successAlert,
    errorAlert,
    warningAlert,
    infoAlert,
    confirmAlert,
    timerAlert,
    toastAlert,
    selectAlert,
    inputAlert,
};
