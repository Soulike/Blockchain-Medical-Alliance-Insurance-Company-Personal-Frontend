import React from 'react';
import Style from './Style.module.scss';
import Selector, {Object as SelectorObject} from '../../../../Components/Selector';

function InsuranceSelector()
{
    const {Series, Item} = SelectorObject;
    const seriesArray = [
        new Series('分类', [
            new Item('全部', () => null, true),
            new Item('少年', () => null),
            new Item('中年', () => null),
            new Item('老年', () => null),
        ]),
    ];

    return <Selector seriesArray={seriesArray} className={Style.InsuranceSelector} />;
}

export default InsuranceSelector;