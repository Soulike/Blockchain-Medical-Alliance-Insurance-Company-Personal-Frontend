import React from 'react';
import Api from '../../Api';
import InsuranceList from './View';

class InsuranceListContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            insuranceList: [],
            hasGotData: false,
        };
    }

    componentDidMount()
    {
        Api.sendGetInsuranceListRequestAsync()
            .then(insuranceListWrapper =>
            {
                if (insuranceListWrapper)
                {
                    const {insuranceList} = insuranceListWrapper;
                    this.setState({
                        insuranceList,
                        hasGotData: true,
                    });
                }
            });
    }

    render()
    {
        const {insuranceList, hasGotData} = this.state;
        return <InsuranceList insuranceList={insuranceList} hasGotData={hasGotData} />;
    }
}

export default InsuranceListContainer;