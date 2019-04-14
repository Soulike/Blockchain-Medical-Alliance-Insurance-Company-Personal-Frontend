import Function from '../../Function';
import {STATUS_CODE} from '../../Constant';
import message from 'antd/lib/message';
import {INSURANCE_POLICY_FILLING} from './ROUTE';
import {Function as AuthProcessorFunction} from '../../Components/AuthProcessor';

export async function sendGetInsurancePurchasingInfoListRequest(insuranceName, insurancePurchaserName, insurancePurchaserIdentificationNumber, email,
                                                                insuredName, insuredIsMale, insuredIdentificationNumber, insuredAge)
{
    try
    {
        const {code} = await Function.postAsync(INSURANCE_POLICY_FILLING, {
            insuranceName,
            insurancePurchaserName,
            insurancePurchaserIdentificationNumber,
            email,
            insuredName,
            insuredIsMale,
            insuredIdentificationNumber,
            insuredAge,
        });
        switch (code)
        {
            case STATUS_CODE.OK:
            {
                message.success('投保成功');
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
                message.error('投保操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('投保信息不存在');
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
                message.error('未知原因的投保失败');
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