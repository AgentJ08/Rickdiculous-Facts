/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = '<Skill ID>';

const SKILL_NAME = 'Rickdiculous Facts';
const GET_FACT_MESSAGE = "Here's your rickdiculous fact: ";
const HELP_MESSAGE = 'You can say tell me a rickdiculous fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'Rick and Morty is based on The Real Adventures of Doc & Mharty, a series of shorts that parodied the two protagonists from Back to the Future. It was crated by Justin Roiland who adapted the characters to create Rick and Morty.',
    'The first draft of the pilot was completed in six hours in Dan Harmon’s unfurnished Community office. Dan Harmon is allegedly a procrastinator, so Justin Roiland forced him to stay inside until the first draft was completed.',
    'In “Close Rick-counters of the Rick Kind,” one of the Mortys looks like Eric Stoltz. Eric Stoltz was originally cast as Marty in Back to the Future, but was replaced with Michael J. Fox during production.',
    'Although Mr. Poopybutthole made his first appearance in the episode “Total Rickall”, the producers wanted to make it look like he was a part of the series all along by editing him in the opening credits.',
    'The original color for Mr. Meeseeks was a neon taupe. However, the concept did not go over well with viewers, so the producers changed him to blue. Neon taupe? What is neon taupe anyways…',
    'Justin Roiland can’t burp on command and has to drink beer or water during the recording sessions to perform the voice of Rick. After filming the pilot episode, where Rick burps in almost every line, he had such a bad stomach ache he considered going to the hospital.',
    'In episode 3 of season 2, the show that Unity created for Rick is an alien version of Community, a show which Dan Harmon created, with all the main characters from that show making an appearance in this show: Jeff, Annie, Shirley, Pierce, Troy, Abed, and Britta.',
    'Dan Harmon stated that his inspiration behind much of the concept and humor for the series comes from British television series, such as Doctor Who and The Hitchhiker’s Guide to the Galaxy.',
    'Rick joined the family only one month before the timeline set in the pilot after being absent from of his daughters’ life for twenty years. This explains the rocky relationship with the rest of the family.',
    'Creator Justin Roiland voices both Rick and Morty.',
    'The show is largely intended as a parody on the main themes from Doctor Who and Tintin.',
    'Rick never wears a seatbelt in vehicles, while all other characters do.',
    'Rick and Morty were featured in The Simpsons couch gag for the last episode of season 26. The couch gag is a mini story and can be seen on youtube.',
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
