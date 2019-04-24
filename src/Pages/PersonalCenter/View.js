import React from 'react';
import Style from './Style.module.scss';
import Card from '../../Components/Card';
import cardFront from '../../Static/PersonalCenter/cardFront.png';
import cardNegative from '../../Static/PersonalCenter/cardNegative.png';
import Button from 'antd/lib/button';

function PersonalCenter()
{
    return (
        <div className={Style.PersonalCenter}>
            <div className={Style.contentWrapper}>
                <div className={Style.leftPart}>
                    <div className={Style.idCardWrapper}>
                        <div className={Style.idCard} style={{background: `url('${cardFront}')`}} />
                        <div className={Style.idCard} style={{background: `url('${cardNegative}')`}} />
                    </div>
                </div>
                <div className={Style.rightPart}>
                    <div className={Style.title}>个人信息</div>
                    <div className={Style.personalInfoWrapper}>
                        <Card className={Style.infoWrapper}>
                            <div className={Style.label}>姓名：</div>
                            <div className={Style.info}>张三</div>
                        </Card>
                        <Card className={Style.infoWrapper}>
                            <div className={Style.label}>年龄：</div>
                            <div className={Style.info}>20</div>
                        </Card>
                        <Card className={Style.infoWrapper}>
                            <div className={Style.label}>家庭住址：</div>
                            <div className={Style.info}>辽宁省大连市金州区</div>
                        </Card>
                        <Card className={Style.infoWrapper}>
                            <div className={Style.label}>联系方式：</div>
                            <div className={Style.info}>18888888888</div>
                        </Card>
                    </div>
                    <div className={Style.modifyButtonWrapper}>
                        <Button htmlType={'button'} type={'primary'} className={Style.modifyButton}>编辑</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalCenter;