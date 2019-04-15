import Function from '../../Function';

export function insurancePolicyFillingPrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/insurancePolicyFilling/${url}`);
}