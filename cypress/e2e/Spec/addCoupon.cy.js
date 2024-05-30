import { LoginPageFeatures } from "../../features/Auth/login";
import { couponFeatures } from "../../features/Coupons/coupons_features";
describe('Create coupon', () => {
    it ('add coupon', () =>{
        LoginPageFeatures.login()
        couponFeatures.addCoupon()
})

})