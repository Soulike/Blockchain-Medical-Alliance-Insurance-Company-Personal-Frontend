import React from 'react';
import Style from './Style.module.scss';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';

function InsurancePolicyFilling(props)
{
    return (
        <div className={Style.InsurancePolicyFilling}>
            <div className={Style.insurancePolicyFillingContent}>
                <header className={Style.title}>填写电子投保单</header>
                <div className={Style.form}>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>主险：</span>
                        <Input className={Style.input} autoFocus={true} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>投保人姓名：</span>
                        <Input className={Style.input} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>投保人身份证号码：</span>
                        <Input className={Style.input} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>联系邮箱：</span>
                        <Input className={Style.input} type={'email'} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>被保险人姓名：</span>
                        <Input className={Style.input} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>被保险人性别：</span>
                        <Radio.Group className={Style.input} defaultValue={true}>
                            <Radio value={true}>男</Radio>
                            <Radio value={false}>女</Radio>
                        </Radio.Group>
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>被保险人身份证号码：</span>
                        <Input className={Style.input} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>被保险人年龄：</span>
                        <Input className={Style.input} type={'number'} />
                    </label>
                </div>
                <div className={Style.submitButtonWrapper}>
                    <Button type={'primary'} className={Style.submitButton}>确认提交</Button>
                </div>
            </div>
        </div>
    );
}

export default InsurancePolicyFilling;