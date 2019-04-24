import Function from '../../Function';

export function insuranceDetailPrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/insuranceDetail/${url}`);
}