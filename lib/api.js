const axios = require('axios');

const apiTextToSearch = 'https://join.reckon.com/test2/textToSearch';
const apiSubText = 'https://join.reckon.com/test2/subTexts'; //https://join.reckon.com/test2/subTexts //http://localhost:3000/subTexts
const apiPostResults = 'https://join.reckon.com/test2/submitResults';
//test server for posting; http://localhost:3000/postresults
// apiPostResults
// for apiPostResults https://join.reckon.com/test2/submitResults

//retrieve main text to search
const getData = () => {
  return new Promise((resolve, reject) => {
    axios.get(apiTextToSearch).then((response) => {
      resolve(response.data.text);
    }).catch((e) => {
      console.log('retrying textTosearch API...');
      getData().then((data) => {
        resolve(data);
      });
    });
  });
};


//retrieve subtexts
const getSubTextData = () => {
  return new Promise((resolve, reject) => {
    axios.get(apiSubText).then((response) => {
        resolve(response.data.subTexts);
    }).catch((e) => {
      console.log('retrying subtext api...');
      getSubTextData().then((data) => {
        resolve(data);
      });
    });
  });
};

//post results to the assigned endpoint
const postResults = (results) => {
  return new Promise((resolve, reject) => {
    axios.post(apiPostResults, results).then((response) => {
        //console.log('results posted:',results);
        resolve(response.data);
    }).catch((e) => {
      console.log('retrying posting api...');
      postResults().then((response) => {
        resolve(response.data);
      });
    });
  });
};

module.exports.getData = getData;
module.exports.getSubTextData = getSubTextData;
module.exports.postResults = postResults;
