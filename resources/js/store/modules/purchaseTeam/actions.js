import axios from "axios";

export default {
    GET_CONFIRMED_ORDER_NOTIFICATIONS({commit}) {
        axios.get('/my/incomming-order/fetch').then((res) => {
            if (res.status) {
                return commit("SET_CONFIRMED_ORDER_NOTIFICATIONS" , res.data.data);
            }
        }).catch(err => {
            return commit("SET_CONFIRMED_ORDER_NOTIFICATIONS" , {error : err});
        })
    }
}
