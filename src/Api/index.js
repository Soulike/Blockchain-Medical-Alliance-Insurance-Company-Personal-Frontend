import Account from './Account';
import InsuranceList from './InsuranceList';
import InsurancePurchasingProcess from './InsurancePurchasingProcess';
import InsurancePurchasingDetail from './InsurancePurchasingDetail';
import InsurancePolicyFilling from './InsurancePolicyFilling';
import InsuranceDetail from './InsuranceDetail';
import InsuranceClause from './InsuranceClause';

export default {
    ...Account,
    ...InsuranceList,
    ...InsurancePurchasingProcess,
    ...InsurancePurchasingDetail,
    ...InsurancePolicyFilling,
    ...InsuranceDetail,
    ...InsuranceClause,
};