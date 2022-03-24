const request=require("request");
const cheerio=require("cheerio");


function getCompleteScoreInfo(url){
// console.log("UU"+url);
request(url,cb);


function cb(err,res,body){
    if(err){
        console.error(err);
    }
    else{
        //console.log(res.statusCode);
        handleHtml(body);
    }
    
    
}


function handleHtml(html){
    let selecTool=cheerio.load(html);

    let anchorElem=selecTool(".match-header-info.match-info-MATCH");

    let anchorElemTeam=selecTool(".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text");

    let anchorTeam=selecTool(".match-info.match-info-MATCH.match-info-MATCH-half-width>.teams>.name-details>.name");

    
    // let fullLink="https://www.espncricinfo.com";
    // let relativeLink=anchorElem.attr("href");

    // console.log(relativeLink);

    // let completeLink=fullLink+relativeLink;

    // console.log(completeLink);
    //selecTool(anchorElem.attr("a")).text()
      console.log("eeee"+anchorTeam.text());

    for(let i=0;i<anchorElem.length;i++){
        let matchDate=anchorElem.text().split(",")[2];
        let venue=anchorElem.text().split(",")[1];
         console.log(matchDate);

        // let fullLink="https://www.espncricinfo.com"+Scorecard;
        console.log(venue);

        let teamDescription=anchorElemTeam.text().replace(new RegExp("[^a-zA-Z]", "g"),"#");
        let teamDescriptionArr=teamDescription.replace(/#+/g, ' ').split("ov")[0];
        let teamDescriptionArr1=teamDescriptionArr.trim().split("#");

        console.log(teamDescriptionArr);
        console.log("Team 1"+teamDescriptionArr[0]);
        console.log("Team 2"+teamDescriptionArr[1]);
        break;
        
    }

}


}

module.exports={
    getCompleteScoreInfo:getCompleteScoreInfo
};

