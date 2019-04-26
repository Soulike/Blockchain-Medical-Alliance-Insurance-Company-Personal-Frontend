import React from 'react';
import Style from './Style.module.scss';
import CarouselContainer from '../../Components/Carousel';
import InsuranceSelector from './Components/InsuranceSelector';
import {Link} from 'react-router';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config/ROUTE';
import Insurance from '../../Components/Insurance';
import Function from '../../Function';
import PropTypes from 'prop-types';
import Skeleton from 'antd/lib/skeleton';

function InsuranceList(props)
{
    const {insuranceList, hasGotData} = props;
    return (
        <div className={Style.InsuranceList}>
            <CarouselContainer shouldShowInsurancePublicationButton={false} className={Style.carousel} />
            <div className={Style.contentWrapper}>
                <InsuranceSelector />
                <div className={Style.listWrapper}>
                    <Skeleton loading={!hasGotData} active={true}>
                        {
                            insuranceList.map((insurance, i) =>
                            {
                                const {insuranceId, insuranceSource, insuranceDuration, insurancePrice} = insurance;
                                return (
                                    <div className={Style.insuranceWrapper} key={i}>
                                        <Link onlyActiveOnIndex={false}
                                              to={`${PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_DETAIL]}?insuranceId=${insuranceId}`}>
                                            <Insurance {...{
                                                insuranceSource,
                                                insuranceDuration,
                                                insurancePrice,
                                            }} />
                                        </Link>
                                    </div>);
                            })
                        }
                        {
                            Function.repeatNode(<div className={Style.insuranceWrapper} />, 6)
                        }
                    </Skeleton>
                </div>
            </div>
        </div>
    );
}

InsuranceList.propTypes = {
    insuranceList: PropTypes.arrayOf(
        PropTypes.shape({
            insuranceSource: PropTypes.string,
            insuranceDuration: PropTypes.string,
            insurancePrice: PropTypes.number,
        }),
    ).isRequired,
    hasGotData: PropTypes.bool,
};

InsuranceList.defaultProps = {
    hasGotData: true,
};

export default InsuranceList;