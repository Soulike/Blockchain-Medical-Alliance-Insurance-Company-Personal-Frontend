import React from 'react';
import InsuranceNoticeModal from './View';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../../../Config';
import {Actions as ModalActions} from '../../../../ComponentContainers/Modal';
import {connect} from 'react-redux';
import {MODAL_ID} from '../../../../Constant';

class InsuranceNoticeModalContainer extends React.Component
{
    onAccept = () =>
    {
        const {hideModal, insuranceId} = this.props;
        hideModal(MODAL_ID.INSURANCE_NOTICE_MODAL);
        browserHistory.push(`${PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_POLICY_FILLING]}?insuranceId=${insuranceId}`);
    };

    render()
    {
        const {insuranceNotice, hasGotData} = this.props;
        return <InsuranceNoticeModal insuranceNotice={insuranceNotice}
                                     hasGotData={hasGotData}
                                     onAccept={this.onAccept} />;
    }
}

InsuranceNoticeModalContainer.propTypes = {
    insuranceId: PropTypes.string.isRequired,
    insuranceNotice: PropTypes.string.isRequired,
    hasGotData: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
    hideModal: ModalActions.hideModalAction,
};

export default connect(null, mapDispatchToProps)(InsuranceNoticeModalContainer);