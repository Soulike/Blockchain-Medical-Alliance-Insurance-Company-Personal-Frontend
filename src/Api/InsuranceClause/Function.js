import Function from '../../Function';

export function insuranceClausePrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/insuranceClause/${url}`);
}