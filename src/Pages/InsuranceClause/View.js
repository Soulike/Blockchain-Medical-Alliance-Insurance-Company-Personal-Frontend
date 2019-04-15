import React from 'react';
import Style from './Style.module.scss';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';
import Skeleton from 'antd/lib/skeleton';

function InsuranceClause(props)
{
    const {insuranceName, insuranceClause, onAgreeClick, hasGotData} = props;
    return (
        <div className={Style.InsuranceClause}>
            <div className={Style.content}>
                <header className={Style.header}>{insuranceName}保险条款</header>
                <div className={Style.clauseWrapper}>
                    {
                        hasGotData ?
                            <pre className={Style.clause}>
                                {insuranceClause}
                            </pre> :
                            <Skeleton active={true} />
                    }
                    <div className={Style.buttonWrapper}>
                        <Button type={'primary'}
                                size={'large'}
                                className={Style.purchaseButton}
                                disabled={!hasGotData}
                                onClick={onAgreeClick}>
                            <Icon type="plus-circle" theme="filled" />
                            立即购买
                        </Button>
                    </div>
                </div>
            </div>
        </div>);
}

InsuranceClause.propTypes = {
    insuranceName: PropTypes.string.isRequired,
    insuranceClause: PropTypes.string.isRequired,
    onAgreeClick: PropTypes.func.isRequired,
    hasGotData: PropTypes.bool.isRequired,
};

export default InsuranceClause;