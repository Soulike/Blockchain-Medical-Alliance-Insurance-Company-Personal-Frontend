import React from 'react';
import Style from './Style.module.scss';
import Icon from 'antd/lib/icon';

function CompleteView()
{
    return (
        <div className={Style.CompleteView}>
            <Icon type="check-circle" theme="twoTone" className={Style.icon} />
            <span className={Style.text}>电子保单已发送至投保人邮箱</span>
        </div>
    );
}

export default CompleteView;