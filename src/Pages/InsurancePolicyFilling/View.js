import React from 'react';
import Style from './Style.module.scss';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Tooltip from 'antd/lib/tooltip';
import PropTypes from 'prop-types';
import Skeleton from 'antd/lib/skeleton';

function InsurancePolicyFilling(props)
{
    const {
        onInsuranceNameInputChange,
        insuranceName,
        onInsurancePurchaserNameInputChange,
        insurancePurchaserName,
        onIsMaleRadioChange,
        isMale,
        onAgeInputChange,
        age,
        onHealthStateInputChange,
        healthState,
        onPublicKeyInputChange,
        publicKey,
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
                            <span className={Style.label}>保险名：</span>
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
                            <span className={Style.label}>投保人年龄：</span>
                            <Tooltip title={'请填写周岁'}>
                                <Input className={Style.input}
                                       type={'number'}
                                       onChange={onAgeInputChange}
                                       value={age}
                                       min={0}
                                       max={100}
                                       step={1} />
                            </Tooltip>
                        </label>
                        <label className={Style.inputWrapper}>
                            <span className={Style.label}>投保人性别：</span>
                            <Radio.Group className={Style.input}
                                         onChange={onIsMaleRadioChange}
                                         value={isMale}>
                                <Radio value={1}>男</Radio>
                                <Radio value={0}>女</Radio>
                            </Radio.Group>
                        </label>
                        <label className={Style.inputWrapper}>
                            <span className={Style.label}>投保人健康状况：</span>
                            <Input className={Style.input} onChange={onHealthStateInputChange} value={healthState} />
                        </label>
                        <label className={Style.inputWrapper}>
                            <span className={Style.label}>投保人公钥：</span>
                            <Input className={Style.input} onChange={onPublicKeyInputChange} value={publicKey} />
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
    onIsMaleRadioChange: PropTypes.func.isRequired,
    isMale: PropTypes.oneOf([0, 1]).isRequired,
    onAgeInputChange: PropTypes.func.isRequired,
    age: PropTypes.number.isRequired,
    onHealthStateInputChange: PropTypes.func.isRequired,
    healthState: PropTypes.string.isRequired,
    onPublicKeyInputChange: PropTypes.func.isRequired,
    publicKey: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    hasGotData: PropTypes.bool.isRequired,
};

export default InsurancePolicyFilling;