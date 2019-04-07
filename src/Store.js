import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {INSURANCE_PURCHASING_STAGE_ID} from './Constant';
// import 所有 Reducer
import {Reducer as AuthProcessorReducer} from './Components/AuthProcessor';
import {Reducer as ModalReducer} from './ComponentContainers/Modal';
import {Reducer as InsurancePurchasingProcessReducer} from './Pages/InsurancePurchasingProcess';
import {Reducer as InsurancePurchasingDetailReducer} from './Pages/InsurancePurchasingDetail';

// Store 中的初始值，根据开发需要进行改变
const initValues = {
    AuthProcessor: {
        hasLoggedIn: false,
    },
    InsurancePurchasingProcess: {
        ageRange: [Number.MIN_VALUE, Number.MAX_VALUE],     // 筛选器年龄范围
        stageId: INSURANCE_PURCHASING_STAGE_ID.DEVELOPMENT.ALL_STAGES,  // 筛选器阶段
    },
    InsurancePurchasingDetail: {
        /*insurancePurchasingInfo: {
            insurancePurchasingInfoId: 'aaaa',      // 这条信息的唯一识别 ID
            name: '啊啊啊',                           // 投保人姓名
            age: 1,                            // 投保人年龄
            isMale: 1,                         // 投保人是不是男性，0为女，1为男
            healthState: 'aaa',                    // 投保人健康状况
            publicKey: 'String',                      // 投保人公钥
            insuranceType: 'String',                  // 保险类型
            insurancePurchasingTime: 'String',        // 投保时间
            insurancePeriod: 'String',                // 保险时长
            insurancePrice: 'Number',                 // 保金，单位人民币元
            insurancePurchasingStage: INSURANCE_PURCHASING_STAGE_ID.DECLINE.INSURANCE_COMPANY_VERIFY_DECLINED,  // 投保阶段，枚举值
            responsiblePersonId: 1,            // 负责人 ID，用于获取负责人信息
            responsiblePersonName: 'String',          // 负责人姓名
        },*/
    },
    Modal: {
        currentVisibleModalIdSet: new Set(),
    },
};

// 所有中间件放在此处
const middleWares = [thunk];

const storeEnhancers = compose(
    applyMiddleware(...middleWares),
);

// 所有 Reducer 放在此处
const Reducer = combineReducers({
    InsurancePurchasingProcess: InsurancePurchasingProcessReducer,
    InsurancePurchasingDetail: InsurancePurchasingDetailReducer,
    AuthProcessor: AuthProcessorReducer,
    Modal: ModalReducer,
});

export default createStore(Reducer, initValues, storeEnhancers);