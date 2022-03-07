# Emaily

It's currently running on https://thawing-mountain-65623.herokuapp.com/ （当前正在heroku上部署并运行）

This is a web application built in React and Node.js.

This project allows startup owners to collect feedback via email responses and get a tabulation of results. User flow: 
1. User signs in with Google OAuth (用户通过Google OAuth登陆)
2. Pays for credits using Stripe（点击右上角的ADD CREDITS进行支付，可用测试卡信息填写测试 4242424242424242 10/23 123)
3. Creates survey （创建问卷）
4. Fill in the information of survey and the recipients list (emails split by a comma ',') （填写问卷相关信息，注意邮箱应该用,分隔开）
5. Emails sent to list （确认发送问卷）
6. Recipients click link in email to give feedback （收件人可以在邮箱中点击Yes或No，会被重定向到感谢投票的链接并将答案记录在数据库内）
7. Users can see the collected feedback on their Dashboard （用户可以在面板查看已发出的问卷和结果）

![show1](/show1.png)

# Build in Local Environment


> git clone https://github.com/shawPLUSroot/Emaily.git

Make sure you are currently inside the directory where the project you just cloned.
Now you need to create a new file inside the config folder named dev.js and it should be like this:

module.exports = {
    googleClientID : 'XXX',
    googleClientSecert: 'XXX',
    mongoURI: 'XXX',
    stripePublishableKey: 'XXXX',
    stripeSecretKey: 'XXX',
    sendGridKey:'XXX',
    redirectDomain: "http:localhost:3000"
};

You should fill in the secert and key of your own.

> npm run dev
