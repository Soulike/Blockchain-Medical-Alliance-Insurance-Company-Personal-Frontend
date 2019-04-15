import Function from '../../Function';
import {CONFIRM_INSURANCE_PURCHASING_APPLICATION, GET_INSURANCE_CLAUSE_INFO} from './ROUTE';
import {STATUS_CODE} from '../../Constant';
import message from 'antd/lib/message';
import {Function as AuthProcessorFunction} from '../../Components/AuthProcessor';

export async function sendGetInsuranceClauseInfoRequestAsync(insuranceId)
{
    try
    {
        const {code, data} = await Function.getAsync(GET_INSURANCE_CLAUSE_INFO, false, {insuranceId});

        switch (code)
        {
            case STATUS_CODE.OK:
            {
                return data;
            }
            case STATUS_CODE.BAD_REQUEST:
            {
                message.error('参数错误');
                return null;
            }
            case STATUS_CODE.UNAUTHORIZED:
            {
                message.error('未登录操作');
                AuthProcessorFunction.setLoggedOut();
                return null;
            }
            case STATUS_CODE.FORBIDDEN:
            {
                message.error('获取保险条款操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('保险条款不存在');
                return null;
            }
            case STATUS_CODE.CONFLICT:
            {
                message.error('与服务器资源冲突');
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                message.error('服务器错误');
                return null;
            }
            default:
            {
                message.error('未知原因的获取保险条款失败');
                return null;
            }
        }
    }
    catch (e)
    {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}

export async function sendPostConfirmInsurancePurchasingApplicationRequestAsync(insuranceId)
{
    try
    {
        const {code} = await Function.postAsync(CONFIRM_INSURANCE_PURCHASING_APPLICATION, {insuranceId});
        switch (code)
        {
            case STATUS_CODE.OK:
            {
                message.success('投保申请成功');
                return true;
            }
            case STATUS_CODE.BAD_REQUEST:
            {
                message.error('参数错误');
                return null;
            }
            case STATUS_CODE.UNAUTHORIZED:
            {
                message.error('未登录操作');
                AuthProcessorFunction.setLoggedOut();
                return null;
            }
            case STATUS_CODE.FORBIDDEN:
            {
                message.error('投保申请操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('保险不存在');
                return null;
            }
            case STATUS_CODE.CONFLICT:
            {
                message.error('与服务器资源冲突');
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                message.error('服务器错误');
                return null;
            }
            default:
            {
                message.error('未知原因的投保申请失败');
                return null;
            }
        }
    }
    catch (e)
    {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}