'use strict';

module.exports.sendReminderDaily = (event, context, callback) => {

    const AWS = require('aws-sdk');
    AWS.config.update({region: 'us-east-1'});
    const ses = new AWS.SES();
    const fs = require('fs');

    const emailHtml = fs.readFileSync('./dailyReminder.html', 'utf-8');

    const toAndFromAdress = 'your_email_here'
    const params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Hi there, this is your daily reminder"
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Daily Reminder"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress,
    };

    ses.sendEmail(params, function (err, data) {
        // an error occurred
        if (err) console.log(err, err.stack);
        // successful response
        else callback(null, data);
    });
};

module.exports.sendReminderWeekend = (event, context, callback) => {

    const AWS = require('aws-sdk');
    AWS.config.update({region: 'us-east-1'});
    const ses = new AWS.SES();
    const fs = require('fs');

    const emailHtml = fs.readFileSync('./weekendReminder.html', 'utf-8');

    const toAndFromAdress = 'your_email_here\''
    const params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Hi there, this is your weekend reminder"
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Weekend Reminder"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress,
    };

    ses.sendEmail(params, function (err, data) {
        // an error occurred
        if (err) console.log(err, err.stack);
        // successful response
        else callback(null, data);
    });
};
