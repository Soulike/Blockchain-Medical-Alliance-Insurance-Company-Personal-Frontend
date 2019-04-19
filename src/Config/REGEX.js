export const REGEX = {
    USERNAME: /^\w{5,20}$/,
    PASSWORD: /^\w{10,}$/,
    NAME: /^.+$/,
    AGE: /^\d+$/,
    ADDRESS: /^.+$/,
    EMAIL: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    VERIFICATION_CODE: /^[A-z0-9]+$/,


    INSURANCE_NAME: /^.+$/,
    IDENTIFICATION_NUMBER: /^[0-9]{17}[0-9|X]$/,

    PUBLIC_KEY: /^[0-9a-z]{130}$/,
    HEALTH_STATE: /^.+$/,
};

export const REGEX_TEXT = {
    USERNAME: '5~20位的字母、数字或下划线',
    PASSWORD: '10位以上的字母、数字或下划线',
    IDENTIFICATION_NUMBER: '18 位身份证号，末位字母请大写',
};