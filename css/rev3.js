async function getGeneralNews(cat) {
    var res = await fetch (`                     ${cat}   `)
    var finalResult = await res.json() 
    console.log(cat , finalResult.artic);
}

(async function (){
    await getGeneralNews('general');
    await getGeneralNews('health');
    await getGeneralNews('sports');
    
})();