import React from 'react';
// import Function from '../../Function';
import {connect} from 'react-redux';
import Api from '../../Api';
import InsurancePurchasingProcess from './View';
import {browserHistory} from 'react-router';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config';

class InsurancePurchasingProcessContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            insurancePurchasingInfoList: [],
            insurancePurchasingInfoId: null,    // 如果这个 state 存在，那么只显示这一条信息且隐藏选择器
            hasGotData: false,
        };
    }

    componentDidMount()
    {
        /*const insurancePurchasingInfoList = [];
        for (let i = 0; i < 30; i++)
        {
            insurancePurchasingInfoList.push({
                insurancePurchasingInfoId: i + 1,
                name: '罗小黑',
                age: Math.round(Math.random() * 80 + 1),
                isMale: Math.round(Math.random()),
                healthState: '健康',
                publicKey: Function.randomString(52),
                insuranceType: '少年英才保险',
                insurancePurchasingTime: '2019年03月17日',
                insurancePeriod: `${Math.round(Math.random() * 10 + 1)} 年`,
                insurancePrice: Math.round(Math.random() * 20000 + 1000),
                insurancePurchasingStage: Math.round(Math.random() * 3),
            });
        }

        this.setState({
            insurancePurchasingInfoList,
        });*/

        const {insurancePurchasingInfoId} = this.props.location.query;
        if (insurancePurchasingInfoId)
        {
            this.setState({
                insurancePurchasingInfoId,
            });
        }

        Api.sendGetInsurancePurchasingInfoListRequest()
            .then(insurancePurchasingInfoListWrapper =>
            {
                if (insurancePurchasingInfoListWrapper)
                {
                    const {insurancePurchasingInfoList} = insurancePurchasingInfoListWrapper;
                    this.setState({
                        insurancePurchasingInfoList,
                        hasGotData: true,
                    });
                }
            });
    }

    onRowClick = (insurancePurchasingInfoId) =>
    {
        browserHistory.push(`${PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_INSURANCE_PURCHASING_DETAIL]}?insurancePurchasingInfoId=${insurancePurchasingInfoId}`);
    };

    render()
    {
        const {insurancePurchasingInfoList, insurancePurchasingInfoId, hasGotData} = this.state;
        const {ageRange, stageId} = this.props;
        return <InsurancePurchasingProcess insurancePurchasingInfoList={insurancePurchasingInfoList}
                                           ageRange={ageRange}
                                           stageId={stageId}
                                           onRowClick={this.onRowClick}
                                           insurancePurchasingInfoId={insurancePurchasingInfoId}
                                           hasGotData={hasGotData} />;
    }
}

const mapStateToProps = state =>
{
    const {InsurancePurchasingProcess: {ageRange, stageId}} = state;
    return {
        ageRange,
        stageId,
    };
};

export default connect(mapStateToProps)(InsurancePurchasingProcessContainer);