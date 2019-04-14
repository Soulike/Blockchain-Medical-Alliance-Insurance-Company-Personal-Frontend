import React from 'react';
import InsurancePolicyFilling from './View';

class InsurancePolicyFillingContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            insuranceName: '',
            insurancePurchaserName: '',
            insurancePurchaserIdentificationNumber: '',
            email: '',
            insuredName: '',
            insuredIsMale: 1,
            insuredIdentificationNumber: '',
            insuredAge: 0,
        };
    }

    onInsuranceNameInputChange = e =>
    {
        this.setState({
            insuranceName: e.target.value,
        });
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
                                    onSubmit={this.onSubmit} />
        );
    }
}

export default InsurancePolicyFillingContainer;