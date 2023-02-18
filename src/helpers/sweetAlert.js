import Swal from "sweetalert2";

// 成功提示框
const successAlert = (title, html) => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "success",
        confirmButtonText: "确定",
    });
};

// 错误提示框
const errorAlert = (title, html) => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "error",
        confirmButtonText: "确定",
    });
};

// 警告提示框
const warningAlert = (title, html) => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "warning",
        confirmButtonText: "确定",
    });
};

// 信息提示框
const infoAlert = (title, html) => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "info",
        confirmButtonText: "确定",
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
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText,
        cancelButtonText,
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
        showConfirmButton: false,
        timer,
        timerProgressBar: true,
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

export {
    successAlert,
    errorAlert,
    warningAlert,
    infoAlert,
    confirmAlert,
    timerAlert,
    toastAlert,
};
