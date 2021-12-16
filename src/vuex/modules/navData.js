/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
export const navData = {
    state: {
        expansion: true,
    },
    mutations: {
        setExpansion: (state, data) => {
            state.expansion = data;
        },
    },
    getters: {
        getExpansion: (state) => state.expansion,
    },
};
