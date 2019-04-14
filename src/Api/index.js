import Account from './Account';
import InsuranceList from './InsuranceList';
import InsurancePurchasingProcess from './InsurancePurchasingProcess';
import InsurancePurchasingDetail from './InsurancePurchasingDetail';
import InsurancePolicyFilling from './InsurancePolicyFilling';

export default {
    ...Account,
    ...InsuranceList,
    ...InsurancePurchasingProcess,
    ...InsurancePurchasingDetail,
    ...InsurancePolicyFilling,
};