export default {
    setCity(state, payload) {
        state.city = payload
        console.log(state.city)
    },
    setCountry(state, payload) {
        state.country = payload
        console.log(state.country)
    }
}