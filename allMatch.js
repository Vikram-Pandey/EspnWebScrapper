const request=require("request");
const cheerio=require("cheerio");

const scorecard=require("./scorecard");


function getCompleteMatch(url){
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

    let anchorElem=selecTool('[data-hover="Scorecard"]');

    
    // let fullLink="https://www.espncricinfo.com";
    // let relativeLink=anchorElem.attr("href");

    // console.log(relativeLink);

    // let completeLink=fullLink+relativeLink;

    // console.log(completeLink);
    //selecTool(anchorElem.attr("a")).text()
    console.log(anchorElem.length);

    for(let i=0;i<anchorElem.length;i++){
        let Scorecard=selecTool(anchorElem[i]).attr("href");
       // console.log(Scorecard);

        let fullLink="https://www.espncricinfo.com"+Scorecard;
        console.log(fullLink);
        scorecard.getCompleteScoreInfo(fullLink);
        
    }

}


}

module.exports={
    getCompleteMatch:getCompleteMatch
};

