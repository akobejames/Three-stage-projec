/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 09:46:31
 * @LastEditTime: 2019-07-22 17:45:43
 * @LastEditors: 陈佳
 */
var mutations = {
    loginm(state, val) {
        state.userid=val.id;
        state.sname = val.name;
    },
    tynr(state,val){
        // console.log(val)
         state.tiyanneir=val
     },
     msg1(state,val){
        // console.log(val)
         state.idcard=val
     },
     msg2(state,val){
        // console.log(val)
         state.email=val
     },
     msg3(state,val){
        // console.log(val)
         state.pnumber=val
     },
     msg4(state,val){
        // console.log(val)
         state.imgstr=val
     }
};
export default mutations
