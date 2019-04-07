# 接口文档

## 返回格式约定

所有后台返回的数据格式均为 JSON，JSON 对应对象格式如下

```js
{
    code: Number,
    data: Object
}
```

`code` 指定这次请求的状态，前端可以根据这个编码来决定做什么。目前需要的代码如下

- 200 请求成功
- 400 请求参数不正确，比如提交的对象需要提供键 a 但提交上来的对象没有
- 401 当前请求 Session 无效
- 403 请求被拒绝，用于处理不合理的请求，例如登录密码错误或删除别人的东西
- 404 请求的内容不存在
- 409 请求存在冲突，例如注册已存在的用户名
- 500 服务器发生错误

`data` 的具体格式根据情况决定。

---

## 名词解释

- 请求体：在 GET 请求中指查询字符串内容，在 POST 请求中指请求体中内容。项目不会出现其他请求方式
- 响应体：指返回 JSON 中 data 键对应对象的内容

---

## 各个请求的详细信息 (所有请求前缀均为 `/server`)

### 帐号相关部分（请求前缀为 `/account`）

#### `/login`

- 功能说明：登录
- 请求方法：POST
- 请求体：
```js
{
    username: String,
    password: String,
}
```
- 响应体：无
- 其他说明：
  - 如果登录成功，返回 200
  - 如果密码错误，返回 403
  - 如果帐号不存在，返回 404
  - 格式限制：
```js
{
    USERNAME: /^\w{5,20}$/,
    PASSWORD: /^\w{10,}$/,
};
```

#### `/getVerificationCode`

- 功能说明：获取验证码
- 请求方法：GET
- 请求体：
```js
{
    email: String,  // 接收验证码的邮箱
}
```
- 响应体：无
- 其他说明：无

#### `/signUp`

- 功能说明：注册
- 请求方法：POST
- 请求体：
```js
{
    username: String,           // 用户名
    password: String,           // 密码
    name: String,               // 姓名
    age: Number,                // 年龄
    address: String,            // 家庭住址
    email: String,              // 邮箱
    verificationCode: String    // 验证码
}
```
- 响应体：无
- 其他说明：验证码错误返回 403，用户名重复返回 409

---

### 保险列表部分（请求前缀为 `/insuranceList`)

#### `/getInsuranceList`

- 功能说明：获取投保人已购买的保险列表
- 请求方法：GET
- 请求体：无
- 响应体：
```js
{
    insuranceList: [                    // 数组，内含多个保险
        {
            insuranceId: String,        // 保险唯一标识 ID
            insuranceSource: String,    // 保险来源，如 "人寿保险"
            insuranceDuration: String,  // 保期，如 "2 年"
            insurancePrice: Number,     // 保金，单位是人民币元
        },
    ]
}
```
- 其他说明：无