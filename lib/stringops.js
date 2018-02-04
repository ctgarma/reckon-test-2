const applicant = 'test';

var searchString = (Data, Criteria) => {

  Data=Data.toLowerCase();
  Criteria=Criteria.toLowerCase();

  var lenData = 0;
  var lenCriteria = 0;
  lenData = Data.length;
  lenCriteria = Criteria.length;

  var Positions = [];
  var count = 0,
    sCtr = 0;

  for (var i = 0; lenData > i; i++) {
    if (Data.charAt(i) == Criteria.charAt(sCtr)) {
      if (sCtr == 0) {
        Pos = i + 1; //store the starting position of a possible match add one since base zero
      }
      sCtr++;
      if (sCtr == lenCriteria) // string found
      {
        Positions.push(Pos);
        sCtr = 0;
      }
    } else {
      sCtr = 0;
    }
  }
  return Positions;
};

//find subtext from data
const getMatched = (data, subtext, applicant) => {

  var outResult = {
    candidate: applicant,
    text: data,
    results: []
  };

  for (i = 0; i < subtext.length; i++) {
    sResult = searchString(data, subtext[i]);
    if (sResult.length == 0) {
      sResult[0] = "<No Output>";
    }
    outResult.results.push({
      subtext: subtext[i],
      result: sResult.toString()
    });
  }
  return outResult;
};

module.exports.searchString = searchString;
module.exports.getMatched = getMatched;
