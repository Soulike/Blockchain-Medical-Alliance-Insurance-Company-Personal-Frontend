import React from 'react';
import InsuranceClause from './View';
import {browserHistory, withRouter} from 'react-router';
import {Actions as ModalActions} from '../../ComponentContainers/Modal';
import Api from '../../Api';
import {connect} from 'react-redux';
import {MODAL_ID} from '../../Constant';
import InsuranceNoticeModal from './Components/InsuranceNoticeModal';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config/ROUTE';


class InsuranceClauseContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            insuranceId: '',
            insuranceName: '',
            insuranceClause: '',
            insuranceNotice: '',
            hasGotData: false,
        };
    }

    componentDidMount()
    {
        const {insuranceId} = this.props.location.query;
        if (insuranceId === undefined)
        {
            browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_PURCHASING_PROCESS]);
        }
        else
        {
            this.setState({
                insuranceId,
            });

            Api.sendGetInsuranceClauseInfoRequestAsync(insuranceId)
                .then(insuranceClauseWrapper =>
                {
                    if (insuranceClauseWrapper)
                    {
                        this.setState({
                            ...insuranceClauseWrapper,
                            hasGotData: true,
                        });
                    }
                });
        }
    }

    onAgreeClick = () =>
    {
        const {showModal} = this.props;
        showModal(MODAL_ID.INSURANCE_NOTICE_MODAL);
    };

    render()
    {
        const {insuranceId, insuranceName, insuranceClause, hasGotData, insuranceNotice} = this.state;
        return [
            <InsuranceClause key={insuranceId}
                             insuranceName={insuranceName}
                             insuranceClause={insuranceClause}
                             onAgreeClick={this.onAgreeClick}
                             hasGotData={hasGotData} />,
            <InsuranceNoticeModal key={MODAL_ID.INSURANCE_NOTICE_MODAL}
                                  hasGotData={hasGotData}
                                  insuranceNotice={insuranceNotice} />,
        ];
    }
}

const mapDispatchToProps = {
    showModal: ModalActions.showModalAction,
};

export default connect(null, mapDispatchToProps)(withRouter(InsuranceClauseContainer));