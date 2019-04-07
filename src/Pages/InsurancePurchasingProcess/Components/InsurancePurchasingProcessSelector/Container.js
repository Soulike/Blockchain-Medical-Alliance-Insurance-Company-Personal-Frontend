import React from 'react';
import {connect} from 'react-redux';
import {changeFilterAgeRangeAction, changeFilterInsurancePurchasingStageAction} from '../../Actions/Actions';
import InsurancePurchasingProcessSelector from './View';

class InsurancePurchasingProcessSelectorContainer extends React.Component
{
    render()
    {
        const {ageRange, stageId: currentActiveStageId, changeFilterAgeRange, changeFilterInsurancePurchasingStage} = this.props;
        return <InsurancePurchasingProcessSelector ageRange={ageRange}
                                                   currentActiveStageId={currentActiveStageId}
                                                   changeFilterAgeRange={changeFilterAgeRange}
                                                   changeFilterInsurancePurchasingStage={changeFilterInsurancePurchasingStage} />;
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

const mapDispatchToProps = {
    changeFilterAgeRange: changeFilterAgeRangeAction,
    changeFilterInsurancePurchasingStage: changeFilterInsurancePurchasingStageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(InsurancePurchasingProcessSelectorContainer);