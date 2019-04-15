import React from 'react';
import Style from './Style.module.scss';
import Modal from '../../../../ComponentContainers/Modal/Container';
import {MODAL_ID} from '../../../../Constant';
import PropTypes from 'prop-types';
import Skeleton from 'antd/lib/skeleton';

function InsuranceNoticeModal(props)
{
    const {insuranceNotice, hasGotData, onAccept} = props;
    return (
        <Modal modalId={MODAL_ID.INSURANCE_NOTICE_MODAL}
               width={800}
               okText={'我已阅读并接受'}
               cancelText={'拒绝'}
               title={'保险须知'}
               onOk={onAccept}>
            <div className={Style.InsuranceNoticeModal}>
                {
                    hasGotData ?
                        <pre className={Style.insuranceNotice}>
                            {insuranceNotice}
                        </pre> :
                        <Skeleton active={true} />
                }
            </div>
        </Modal>
    );
}

InsuranceNoticeModal.propTypes = {
    insuranceNotice: PropTypes.string.isRequired,
    hasGotData: PropTypes.bool.isRequired,
    onAccept: PropTypes.func.isRequired,
};

export default InsuranceNoticeModal;