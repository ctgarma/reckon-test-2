const axios = require('axios');

const applicant = 'camilo';
const s = require('./lib/stringops');
const api = require('./lib/api');

const main = () => {

  return new Promise((resolve, reject) => {
    var strData;
    var arrSubText = [];
    var res = 0;

    api.getData().then((data) => {
      strData = data;
      return api.getSubTextData();
    }).then((data) => {
        arrSubText = data;
        return api.postResults(s.getMatched(strData, arrSubText, applicant));
      }).then((data) => {
        console.log('results:', data);
        resolve(data);
      });
    });
  };

module.exports.main = main;
