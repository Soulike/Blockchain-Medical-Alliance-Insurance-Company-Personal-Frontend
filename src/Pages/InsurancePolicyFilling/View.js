import React from 'react';
import Style from './Style.module.scss';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Tooltip from 'antd/lib/tooltip';
import PropTypes from 'prop-types';
import {REGEX_TEXT} from '../../Config';
import Skeleton from 'antd/lib/skeleton';

function InsurancePolicyFilling(props)
{
    const {
        onInsuranceNameInputChange,
        insuranceName,
        onInsurancePurchaserNameInputChange,
        insurancePurchaserName,
        onInsurancePurchaserIdentificationNumberInputChange,
        insurancePurchaserIdentificationNumber,
        onEmailInputChange,
        email,
        onInsuredNameInputChange,
        insuredName,
        onInsuredIsMaleRadioChange,
        insuredIsMale,
        onInsuredIdentificationNumberInputChange,
        insuredIdentificationNumber,
        onInsuredAgeInputChange,
        insuredAge,
        onSubmit,
        hasGotData,
    } = props;
    return (
        <div className={Style.InsurancePolicyFilling}>
            <div className={Style.insurancePolicyFillingContent}>
                <header className={Style.title}>填写电子投保单</header>
                <div className={Style.form}>
                    <Skeleton loading={!hasGotData} active={true} paragraph={{rows: 8}}>
                        <label className={Style.inputWrapper}>
                            <span className={Style.label}>主险：</span>
                            <Input className={Style.input}
                                   onChange={onInsuranceNameInputChange}
                                   value={insuranceName}
                                   disabled={true} />
                        </label>
                        <label className={Style.inputWrapper}>
                            <span className={Style.label}>投保人姓名：</span>
                            <Input className={Style.input}
                                   autoFocus={true}
                                   onChange={onInsurancePurchaserNameInputChange}
                                   value={insurancePurchaserName} />
                        </label>
                        <label className={Style.inputWrapper}>
                            <span className={Style.label}>投保人身份证号码：</span>
                            <Tooltip title={REGEX_TEXT.IDENTIFICATION_NUMBER}>
                                <Input className={Style.input}
                                       onChange={onInsurancePurchaserIdentificationNumberInputChange}
                                       value={insurancePurchaserIdentificationNumber} />
                            </Tooltip>
                        </label>
                        <label className={Style.inputWrapper}>
                            <span className={Style.label}>联系邮箱：</span>
                            <Input className={Style.input}
                                   type={'email'}
                                   onChange={onEmailInputChange}
                                   value={email} />
                        </label>
                        <label className={Style.inputWrapper}>
                            <span className={Style.label}>被保险人姓名：</span>
                            <Input className={Style.input}
                                   onChange={onInsuredNameInputChange}
                                   value={insuredName} />
                        </label>
                        <label className={Style.inputWrapper}>
                            <span className={Style.label}>被保险人性别：</span>
                            <Radio.Group className={Style.input}
                                         onChange={onInsuredIsMaleRadioChange}
                                         value={insuredIsMale}>
                                <Radio value={1}>男</Radio>
                                <Radio value={0}>女</Radio>
                            </Radio.Group>
                        </label>
                        <label className={Style.inputWrapper}>
                            <span className={Style.label}>被保险人身份证号码：</span>
                            <Tooltip title={REGEX_TEXT.IDENTIFICATION_NUMBER}>
                                <Input className={Style.input}
                                       onChange={onInsuredIdentificationNumberInputChange}
                                       value={insuredIdentificationNumber} />
                            </Tooltip>
                        </label>
                        <label className={Style.inputWrapper}>
                            <span className={Style.label}>被保险人年龄：</span>
                            <Tooltip title={'请填写周岁'}>
                                <Input className={Style.input}
                                       type={'number'}
                                       onChange={onInsuredAgeInputChange}
                                       value={insuredAge}
                                       min={0}
                                       max={100}
                                       step={1} />
                            </Tooltip>
                        </label>
                    </Skeleton>
                </div>
                <div className={Style.submitButtonWrapper}>
                    <Button type={'primary'}
                            className={Style.submitButton}
                            onClick={onSubmit}
                            disabled={!hasGotData}>确认提交</Button>
                </div>
            </div>
        </div>
    );
}

InsurancePolicyFilling.propTypes = {
    onInsuranceNameInputChange: PropTypes.func.isRequired,
    insuranceName: PropTypes.string.isRequired,
    onInsurancePurchaserNameInputChange: PropTypes.func.isRequired,
    insurancePurchaserName: PropTypes.string.isRequired,
    onInsurancePurchaserIdentificationNumberInputChange: PropTypes.func.isRequired,
    insurancePurchaserIdentificationNumber: PropTypes.string.isRequired,
    onEmailInputChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    onInsuredNameInputChange: PropTypes.func.isRequired,
    insuredName: PropTypes.string.isRequired,
    onInsuredIsMaleRadioChange: PropTypes.func.isRequired,
    insuredIsMale: PropTypes.oneOf([0, 1]).isRequired,
    onInsuredIdentificationNumberInputChange: PropTypes.func.isRequired,
    insuredIdentificationNumber: PropTypes.string.isRequired,
    onInsuredAgeInputChange: PropTypes.func.isRequired,
    insuredAge: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    hasGotData: PropTypes.bool.isRequired,
};

export default InsurancePolicyFilling;