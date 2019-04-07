import REQUIRE_LOGIN_PAGE_ID from '../Config/ROUTE/REQUIRE_LOGIN_PAGE_ID';
import NOT_REQUIRE_LOGIN_PAGE_ID from '../Config/ROUTE/NOT_REQUIRE_LOGIN_PAGE_ID';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import InsuranceList from '../Pages/InsuranceList';
import PersonalCenter from '../Pages/PersonalCenter';
import InsurancePurchasingProcess from '../Pages/InsurancePurchasingProcess';
import InsurancePurchasingDetail from '../Pages/InsurancePurchasingDetail';
// 页面 View 从此导入

// 页面对应的组件
export default {
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_LIST]: InsuranceList,
    /*[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_DIRECT_PAYMENT_PROCESS]: null,
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_DIRECT_PAYMENT_DETAIL]: null,*/
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_PURCHASING_PROCESS]: InsurancePurchasingProcess,
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_PURCHASING_DETAIL]: InsurancePurchasingDetail,
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_PERSONAL_CENTER]: PersonalCenter,
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_DETAIL]: null,
    [NOT_REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_LOGIN]: Login,
    [NOT_REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_SIGN_UP]: SignUp,
};