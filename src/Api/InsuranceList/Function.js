import Function from '../../Function';

export function insuranceListPrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/insuranceList/${url}`);
}