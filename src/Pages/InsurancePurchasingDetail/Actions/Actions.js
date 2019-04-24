import * as ACTION_TYPE from './ACTION_TYPE';
import Api from '../../../Api';

export function getInsurancePurchasingInfoAction(insurancePurchasingInfoId)
{
    return async dispatch =>
    {
        const insurancePurchasingInfo = await Api.sendGetInsurancePurchasingInfoRequestAsync(insurancePurchasingInfoId);
        if (insurancePurchasingInfo)
        {
            dispatch(getInsurancePurchasingInfoSuccessfulAction(insurancePurchasingInfo));
        }
        else
        {
            dispatch(getInsurancePurchasingInfoFailedAction());
        }
    };
}

function getInsurancePurchasingInfoSuccessfulAction(insurancePurchasingInfo)
{
    return {
        type: ACTION_TYPE.GET_INSURANCE_PURCHASING_INFO_SUCCESSFUL,
        insurancePurchasingInfo,
    };
}

function getInsurancePurchasingInfoFailedAction()
{
    return {
        type: ACTION_TYPE.GET_INSURANCE_PURCHASING_INFO_FAILED,
    };
}