import Account from './Account';
import InsuranceList from './InsuranceList';
import InsurancePurchasingProcess from './InsurancePurchasingProcess';
import InsurancePurchasingDetail from './InsurancePurchasingDetail';

export default {
    ...Account,
    ...InsuranceList,
    ...InsurancePurchasingProcess,
    ...InsurancePurchasingDetail,
};