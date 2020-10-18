export default {
    hideHeader: Boolean,
    title: String,
    transparent: Boolean,
    siderConfig:{
        type: Object,
        default(){
            return {
                style: {
                    background: '#fff'
                }
            }
        }
    },
    noPad: Boolean
}