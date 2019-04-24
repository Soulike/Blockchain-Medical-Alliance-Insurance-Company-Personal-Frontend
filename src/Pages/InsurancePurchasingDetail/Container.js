import React from 'react';
import {browserHistory, withRouter} from 'react-router';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config';
import {getInsurancePurchasingInfoAction} from './Actions/Actions';
import {connect} from 'react-redux';
import InsurancePurchasingDetail from './View';

class InsurancePurchasingDetailContainer extends React.Component
{
    componentDidMount()
    {
        const {insurancePurchasingInfoId} = this.props.location.query;
        if (insurancePurchasingInfoId === undefined)
        {
            browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_PURCHASING_PROCESS]);
        }
        else
        {
            const {getInsurancePurchasingInfo} = this.props;
            getInsurancePurchasingInfo(insurancePurchasingInfoId);
        }
    }


    render()
    {
        const {insurancePurchasingInfo} = this.props;
        return <InsurancePurchasingDetail insurancePurchasingInfo={insurancePurchasingInfo} />;
    }
}

const mapStateToProps = state =>
{
    const {InsurancePurchasingDetail: {insurancePurchasingInfo}} = state;
    return {
        insurancePurchasingInfo,
    };
};

const mapDispatchToProps = {
    getInsurancePurchasingInfo: getInsurancePurchasingInfoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InsurancePurchasingDetailContainer));