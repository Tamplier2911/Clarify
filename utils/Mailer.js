// const nodemailer = require("nodemailer");
// const htmlToText = require("html-to-text");
// const pug = require("pug");

const sendgrid = require("sendgrid");
const helper = sendgrid.mail;

module.exports = class Mailer extends helper.Mail {
  constructor(surveyObj, surveyTemplate) {
    super();
    this.sgApi = sendgrid(process.env.SENDGRID_PASSWORD);

    this.from_email = new helper.Email(process.env.EMAIL_FROM);
    this.to = this.formatAddresses(surveyObj.participants);
    this.subject = "You have been chosen!";
    this.body = new helper.Content("text/html", surveyTemplate);

    /*
    // USING PUG TO RENDER EMAIL TEMPLATE
    // 1. ensure that mailer gets template name AS A STRING e.g - "survey"
    // 2. comment out body on top

    this.html = pug.renderFile(
      `${__dirname}/../templates/${surveyTemplate}.pug`,
      {
        url: "https://clarify-s.herokuapp.com/",
        data: surveyObj,
        subject: this.subject
      }
    );

    // this will be new body
    this.body = new helper.Content("text/html", this.html);

    */

    this.addContent(this.body);
    this.addClickTracking();
    this.addParticipants();
  }

  formatAddresses(participants) {
    // return participants.reduce((acc, obj) => (acc.push(obj.email), acc), []);
    return participants.map(({ email }) => new helper.Email(email));
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addParticipants() {
    const personalize = new helper.Personalization();
    this.to.forEach(participant => {
      personalize.addTo(participant);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    try {
      const request = this.sgApi.emptyRequest({
        method: "POST",
        path: "/v3/mail/send",
        body: this.toJSON()
      });
      const response = await this.sgApi.API(request);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
