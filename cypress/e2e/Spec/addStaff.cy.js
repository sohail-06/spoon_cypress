import { LoginPageFeatures } from "../../features/Auth/login";
import { staffFeatures } from "../../features/Staff/staff_features";

describe('Staff features', () => {
  it('add staff', () => {
    LoginPageFeatures.login();
    staffFeatures.staffadd();
    staffFeatures.staffedit();
  });
});