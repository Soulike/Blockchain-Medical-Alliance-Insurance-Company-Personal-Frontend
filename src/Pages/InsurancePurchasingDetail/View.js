import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {INSURANCE_PURCHASING_STAGE_ID, INSURANCE_PURCHASING_STAGE_ID_TO_TEXT} from '../../Constant';
import HorizontalStageProgressIndicator from '../../Components/HorizontalStageProgressIndicator';
import StageTextIndicator from '../../Components/StageTextIndicator';
import InsuranceCompanyVerificationDeclinedView from './Components/InsuranceCompanyVerificationDeclinedView';
import CompleteView from './Components/CompleteView';
import Spin from 'antd/lib/spin';

function InsurancePurchasingDetail(props)
{
    const stageTextArray = [...INSURANCE_PURCHASING_STAGE_ID_TO_TEXT];
    const {insurancePurchasingInfo} = props;
    const {
        // insurancePurchasingInfoId,
        name,
        insurancePurchasingStage,
    } = insurancePurchasingInfo;
    return (
        <div className={Style.InsurancePurchasingDetail}>
            <Spin spinning={Object.keys(insurancePurchasingInfo).length === 0}>
                <div className={Style.stageProgressIndicatorWrapper}>
                    <HorizontalStageProgressIndicator currentStageNumber={Math.abs(insurancePurchasingStage)}
                                                      maxStageNumber={stageTextArray.length - 1} />
                </div>
                <div className={Style.title}><span className={Style.name}>{name}</span>投保进度详情</div>
                <div className={Style.stageTextIndicatorWrapper}>
                    <StageTextIndicator currentStageNumber={Math.abs(insurancePurchasingStage)}
                                        stageTextArray={stageTextArray} />
                </div>
                <div className={Style.stageProcessorWrapper}>
                    {
                        (() =>
                        {
                            switch (insurancePurchasingStage)
                            {
                                case INSURANCE_PURCHASING_STAGE_ID.DECLINE.INSURANCE_COMPANY_VERIFY_DECLINED:
                                {
                                    return <InsuranceCompanyVerificationDeclinedView />;
                                }
                                case INSURANCE_PURCHASING_STAGE_ID.NORMAL.COMPLETE:
                                {
                                    return <CompleteView />;
                                }
                                default:
                                {
                                    return null;
                                }
                            }
                        })()
                    }
                </div>
            </Spin>
        </div>
    );
}

InsurancePurchasingDetail.propTypes = {
    insurancePurchasingInfo: PropTypes.object.isRequired,
};

export default InsurancePurchasingDetail;