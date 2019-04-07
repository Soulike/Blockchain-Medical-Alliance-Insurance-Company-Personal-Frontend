import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import Selector, {Object as SelectorObject} from '../../../../Components/Selector';
import {INSURANCE_PURCHASING_STAGE_ID, INSURANCE_PURCHASING_STAGE_ID_TO_TEXT} from '../../../../Constant';

function InsurancePurchasingProcessSelector(props)
{
    const {ageRange: [minAge, maxAge], currentActiveStageId, changeFilterAgeRange, changeFilterInsurancePurchasingStage} = props;
    const {Series, Item} = SelectorObject;
    const seriesArray = [
        new Series('年龄', [
            new Item('全部', () =>
            {
                changeFilterAgeRange();
            }, minAge === Number.MIN_VALUE && maxAge === Number.MAX_VALUE),
            new Item('1-20 岁', () =>
            {
                changeFilterAgeRange(1, 20);
            }, minAge === 1 && maxAge === 20),
            new Item('21-50 岁', () =>
            {
                changeFilterAgeRange(21, 50);
            }, minAge === 21 && maxAge === 50),
            new Item('51-80 岁', () =>
            {
                changeFilterAgeRange(51, 80);
            }, minAge === 51 && maxAge === 80),
            new Item('81 岁及以上', () =>
            {
                changeFilterAgeRange(81);
            }, minAge === 81 && maxAge === Number.MAX_VALUE),
        ]),
        new Series('状态',
            Object.values({...INSURANCE_PURCHASING_STAGE_ID.DEVELOPMENT, ...INSURANCE_PURCHASING_STAGE_ID.NORMAL}).map(stageId => new Item(INSURANCE_PURCHASING_STAGE_ID_TO_TEXT[stageId],
                () =>
                {
                    changeFilterInsurancePurchasingStage(stageId);
                }, currentActiveStageId === stageId),
            )),
    ];
    return <Selector className={Style.InsurancePurchasingProcessSelector} seriesArray={seriesArray} />;
}

InsurancePurchasingProcessSelector.propTypes = {
    ageRange: PropTypes.array.isRequired,
    currentActiveStageId: PropTypes.oneOf([...Object.values(INSURANCE_PURCHASING_STAGE_ID.NORMAL), ...Object.values(INSURANCE_PURCHASING_STAGE_ID.DECLINE), ...Object.values(INSURANCE_PURCHASING_STAGE_ID.DEVELOPMENT)]).isRequired,
    changeFilterAgeRange: PropTypes.func.isRequired,
    changeFilterInsurancePurchasingStage: PropTypes.func.isRequired,
};

export default InsurancePurchasingProcessSelector;