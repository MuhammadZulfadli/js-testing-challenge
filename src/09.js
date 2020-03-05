function symmetrical(simetris){
    simetris = String(simetris)
    for(let i=0; i<simetris.length; i+=1){
        if (simetris[i] !== simetris[simetris.length -1-i]){
            return false;
        }
    }
    return true;
     }
    
module.exports = symmetrical;