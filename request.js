const request=require("request");
const cheerio=require("cheerio");

const allMatchObj=require("./allMatch");

let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(url,cb);

function cb(err,res,body){
    if(err){
        console.error(err);
    }
    else{
        console.log(res.statusCode);
        handleHtml(body);
    }
    
    
}


function handleHtml(html){
    let selecTool=cheerio.load(html);

    let anchorElem=selecTool('a[data-hover="View All Results"]');

    
    let fullLink="https://www.espncricinfo.com";
    let relativeLink=anchorElem.attr("href");

    console.log(relativeLink);

    let completeLink=fullLink+relativeLink;

    console.log(completeLink);

    allMatchObj.getCompleteMatch(completeLink);
    

}

