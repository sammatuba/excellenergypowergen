export const state = () => ({
    navMenuActive: false
})

export const getters = {
    isNavMenuActive: state => state.navMenuActive
}

export const mutations = {
    toggleNavMenu(state) {
        state.navMenuActive = !state.navMenuActive
    },

    closeNavMenu(state) {
        state.navMenuActive = false
    }
}
