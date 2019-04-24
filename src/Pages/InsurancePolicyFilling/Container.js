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
            isMale: 1,
            age: 0,
            healthState: '',
            publicKey: '',

            hasGotData: true,
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

    onIsMaleRadioChange = e =>
    {
        this.setState({
            isMale: e.target.value,
        });
    };

    onAgeInputChange = e =>
    {
        this.setState({
            age: Number.parseInt(e.target.value, 10),
        });
    };

    onHealthStateInputChange = e =>
    {
        this.setState({
            healthState: e.target.value,
        });
    };

    onPublicKeyInputChange = e =>
    {
        this.setState({
            publicKey: e.target.value,
        });
    };

    onSubmit = async () =>
    {
        const {
            insuranceId,
            insurancePurchaserName,
            isMale,
            age,
            healthState,
            publicKey,
        } = this.state;

        if (!REGEX.NAME.test(insurancePurchaserName))
        {
            message.warning('投保人姓名填写不正确');
        }
        else if (!REGEX.HEALTH_STATE.test(healthState))
        {
            message.warning('健康状况填写不正确');
        }
        else if (!REGEX.PUBLIC_KEY.test(publicKey))
        {
            message.warning('公钥填写不正确');
        }
        else
        {
            const requestIsSuccessful = await Api.sendPostSubmitInsurancePolicyFormRequestAsync(insuranceId,
                insurancePurchaserName,
                isMale,
                age,
                healthState,
                publicKey);
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
            isMale,
            age,
            healthState,
            publicKey,
            hasGotData,
        } = this.state;
        return (
            <InsurancePolicyFilling insuranceName={insuranceName}
                                    publicKey={publicKey}
                                    isMale={isMale}
                                    healthState={healthState}
                                    age={age}
                                    onSubmit={this.onSubmit}
                                    hasGotData={hasGotData}
                                    insurancePurchaserName={insurancePurchaserName}
                                    onAgeInputChange={this.onAgeInputChange}
                                    onHealthStateInputChange={this.onHealthStateInputChange}
                                    onInsuranceNameInputChange={this.onInsuranceNameInputChange}
                                    onInsurancePurchaserNameInputChange={this.onInsurancePurchaserNameInputChange}
                                    onIsMaleRadioChange={this.onIsMaleRadioChange}
                                    onPublicKeyInputChange={this.onPublicKeyInputChange} />
        );
    }
}

export default InsurancePolicyFillingContainer;