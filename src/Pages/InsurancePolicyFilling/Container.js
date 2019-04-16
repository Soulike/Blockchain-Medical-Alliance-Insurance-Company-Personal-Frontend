import React from 'react';
import InsurancePolicyFilling from './View';
import {PAGE_ID_TO_ROUTE, REGEX, REQUIRE_LOGIN_PAGE_ID} from '../../Config';
import message from 'antd/lib/message';
import Api from '../../Api';
import {browserHistory} from 'react-router';

class InsurancePolicyFillingContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            insuranceId: '',
            insuranceName: '',
            insurancePurchaserName: '',
            insurancePurchaserIdentificationNumber: '',
            email: '',
            insuredName: '',
            insuredIsMale: 1,
            insuredIdentificationNumber: '',
            insuredAge: 0,

            hasGotData: false,
        };
    }

    componentDidMount()
    {
        const {insuranceId} = this.props.location.query;
        if (insuranceId === undefined)
        {
            browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_LIST]);
        }
        else
        {
            Api.sendGetInsuranceDetailRequestAsync(insuranceId)
                .then(insuranceDetail =>
                {
                    if (insuranceDetail)
                    {
                        this.setState({
                            ...insuranceDetail,
                            hasGotData: true,
                        });
                    }
                });
        }
    }

    onInsuranceNameInputChange = () =>
    {
        return false;
    };

    onInsurancePurchaserNameInputChange = e =>
    {
        this.setState({
            insurancePurchaserName: e.target.value,
        });
    };

    onInsurancePurchaserIdentificationNumberInputChange = e =>
    {
        this.setState({
            insurancePurchaserIdentificationNumber: e.target.value,
        });
    };

    onEmailInputChange = e =>
    {
        this.setState({
            email: e.target.value,
        });
    };

    onInsuredNameInputChange = e =>
    {
        this.setState({
            insuredName: e.target.value,
        });
    };

    onInsuredIsMaleRadioChange = e =>
    {
        this.setState({
            insuredIsMale: e.target.value,
        });
    };

    onInsuredIdentificationNumberInputChange = e =>
    {
        this.setState({
            insuredIdentificationNumber: e.target.value,
        });
    };

    onInsuredAgeInputChange = e =>
    {
        this.setState({
            insuredAge: Number.parseInt(e.target.value, 10),
        });
    };

    onSubmit = async () =>
    {
        const {
            insuranceId,
            insurancePurchaserName,
            insurancePurchaserIdentificationNumber,
            email,
            insuredName,
            insuredIsMale,
            insuredIdentificationNumber,
            insuredAge,
        } = this.state;

        if (!REGEX.NAME.test(insurancePurchaserName))
        {
            message.warning('投保人姓名填写不正确');
        }
        else if (!REGEX.IDENTIFICATION_NUMBER.test(insurancePurchaserIdentificationNumber))
        {
            message.warning('投保人身份证号码填写不正确');
        }
        else if (!REGEX.EMAIL.test(email))
        {
            message.warning('联系邮箱填写不正确');
        }
        else if (!REGEX.NAME.test(insuredName))
        {
            message.warning('被保险人姓名填写不正确');
        }
        else if (!REGEX.IDENTIFICATION_NUMBER.test(insuredIdentificationNumber))
        {
            message.warning('被保险人身份证号码填写不正确');
        }
        else if (!REGEX.AGE.test(insuredAge.toString()) || insuredAge < 0 || insuredAge > 120)
        {
            message.warning('被保险人年龄填写不正确');
        }
        else
        {
            const requestIsSuccessful = await Api.sendPostSubmitInsurancePolicyFormRequestAsync(insuranceId, insurancePurchaserName, insurancePurchaserIdentificationNumber, email,
                insuredName, insuredIsMale, insuredIdentificationNumber, insuredAge);
            if (requestIsSuccessful)
            {
                browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_PURCHASING_PROCESS]);
            }
        }
    };

    render()
    {
        const {
            insuranceName,
            insurancePurchaserName,
            insurancePurchaserIdentificationNumber,
            email,
            insuredName,
            insuredIsMale,
            insuredIdentificationNumber,
            insuredAge,
            hasGotData,
        } = this.state;
        return (
            <InsurancePolicyFilling onInsuranceNameInputChange={this.onInsuranceNameInputChange}
                                    insuranceName={insuranceName}
                                    onInsurancePurchaserNameInputChange={this.onInsurancePurchaserNameInputChange}
                                    insurancePurchaserName={insurancePurchaserName}
                                    onInsurancePurchaserIdentificationNumberInputChange={this.onInsurancePurchaserIdentificationNumberInputChange}
                                    insurancePurchaserIdentificationNumber={insurancePurchaserIdentificationNumber}
                                    onEmailInputChange={this.onEmailInputChange}
                                    email={email}
                                    onInsuredNameInputChange={this.onInsuredNameInputChange}
                                    insuredName={insuredName}
                                    onInsuredIsMaleRadioChange={this.onInsuredIsMaleRadioChange}
                                    insuredIsMale={insuredIsMale}
                                    onInsuredIdentificationNumberInputChange={this.onInsuredIdentificationNumberInputChange}
                                    insuredIdentificationNumber={insuredIdentificationNumber}
                                    onInsuredAgeInputChange={this.onInsuredAgeInputChange}
                                    insuredAge={insuredAge}
                                    hasGotData={hasGotData}
                                    onSubmit={this.onSubmit} />
        );
    }
}

export default InsurancePolicyFillingContainer;