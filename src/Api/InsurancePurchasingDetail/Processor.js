import Function from '../../Function';
import {GET_INSURANCE_PURCHASING_INFO} from './ROUTE';
import {STATUS_CODE} from '../../Constant';
import {Function as AuthProcessorFunction} from '../../Components/AuthProcessor';
import message from 'antd/lib/message/index';

export async function sendGetInsurancePurchasingInfoRequestAsync(insurancePurchasingInfoId)
{
    try
    {
        const {code, data} = await Function.getAsync(GET_INSURANCE_PURCHASING_INFO, false, {
            insurancePurchasingInfoId,
        });

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
                message.error('获取投保信息操作被拒绝');
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
                message.error('未知原因的获取投保信息失败');
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