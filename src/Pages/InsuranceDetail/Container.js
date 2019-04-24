import React from 'react';
import InsuranceDetail from './View';
import leftImage from '../../Static/InsuranceDetail/leftImage.png';
import {browserHistory, withRouter} from 'react-router';
import Api from '../../Api';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config';

class InsuranceDetailContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            insuranceId: 0,
            insuranceImageSrc: leftImage,
            insuranceName: '',
            isSpecialMedicalCare: 0,
            hasSocialSecurity: 0,
            insuranceAmount: 0,
            insurancePeriod: '',
            insuranceDiseaseType: '',
            coveringAge: '',
            salesArea: '',
            insurancePrice: 0,

            hasGotInfo: true,
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
            this.setState({
                insuranceId,
            });
            Api.sendGetInsuranceDetailRequestAsync(insuranceId)
                .then(insuranceDetail =>
                {
                    if (insuranceDetail)
                    {
                        this.setState({
                            hasGotInfo: true,
                            ...insuranceDetail,
                        });
                    }
                });
        }
    }

    onApplyButtonClick = () =>
    {
        const {insuranceId} = this.state;
        browserHistory.push(`${PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_CLAUSE]}?insuranceId=${insuranceId}`);
    };

    render()
    {
        const {
            hasGotInfo,
            insuranceImageSrc,
            insuranceName,
            isSpecialMedicalCare,
            hasSocialSecurity,
            insuranceAmount,
            insurancePeriod,
            insuranceDiseaseType,
            coveringAge,
            salesArea,
            insurancePrice,
        } = this.state;
        return (
            <InsuranceDetail hasGotInfo={hasGotInfo}
                             insuranceImageSrc={insuranceImageSrc}
                             insuranceName={insuranceName}
                             isSpecialMedicalCare={isSpecialMedicalCare}
                             hasSocialSecurity={hasSocialSecurity}
                             insuranceAmount={insuranceAmount}
                             insurancePeriod={insurancePeriod}
                             insuranceDiseaseType={insuranceDiseaseType}
                             coveringAge={coveringAge}
                             salesArea={salesArea}
                             insurancePrice={insurancePrice}
                             onApplyButtonClick={this.onApplyButtonClick} />
        );
    }
}

export default withRouter(InsuranceDetailContainer);