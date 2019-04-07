import Function from '../../Function';

export function insurancePurchasingDetailPrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/insurancePurchasingDetail/${url}`);
}