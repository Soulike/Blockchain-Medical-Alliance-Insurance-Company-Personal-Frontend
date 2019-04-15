import React from 'react';
import InsuranceClause from './View';
import {withRouter} from 'react-router';
import Api from '../../Api';

class InsuranceClauseContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            insuranceId: '',
            insuranceName: '',
            insuranceClause: '',
            hasGotData: false,
        };
    }

    componentDidMount()
    {
        const {insuranceId} = this.props.location.query;
        this.setState({
            insuranceId,
        });

        Api.sendGetInsuranceClauseRequestAsync(insuranceId)
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

    onAgreeClick = async () =>
    {

    };

    render()
    {
        const {insuranceName, insuranceClause, hasGotData} = this.state;
        return <InsuranceClause insuranceName={insuranceName}
                                insuranceClause={insuranceClause}
                                onAgreeClick={this.onAgreeClick}
                                hasGotData={hasGotData} />;
    }
}

export default withRouter(InsuranceClauseContainer);