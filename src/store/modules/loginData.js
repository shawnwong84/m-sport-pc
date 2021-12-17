/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
export const loginData = {
    state: {
        permissionModal: 0, //登录弹框：1，注册弹框是2,关闭：0
    },
    mutations: {
        setPermissionModal: (state, data) => {
            state.permissionModal = data;
        },
    },
    getters: {
        getPermissionModal: (state) => state.permissionModal,
    },
};
