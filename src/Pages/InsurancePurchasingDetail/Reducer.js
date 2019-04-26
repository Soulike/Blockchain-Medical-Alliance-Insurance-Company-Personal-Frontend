import * as ACTION_TYPE from './Actions/ACTION_TYPE';

export default (state = {}, action) =>
{
    const {type} = action;
    switch (type)
    {
        case ACTION_TYPE.GET_INSURANCE_PURCHASING_INFO_SUCCESSFUL:
        {
            const {insurancePurchasingInfo} = action;
            return {
                ...state,
                insurancePurchasingInfo,
            };
        }
        case ACTION_TYPE.CLEAR_INSURANCE_PURCHASING_INFO:
        {
            return {
                ...state,
                insurancePurchasingInfo: {},
            };
        }
        case ACTION_TYPE.GET_INSURANCE_PURCHASING_INFO_FAILED:
        default:
        {
            return state;
        }
    }
}