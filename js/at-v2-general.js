function convertToPascalCase( data ) {
    data = data.replace(/(\w)(\w*)/g,
    function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
    return data;
}

function getUrlPath( target ) {
    try {
    let parsedUrl = new URL( target );
    return parsedUrl.pathname;
    }
    catch( err ) {
        alert( err );
        throw new Error( err );
    }
}

function removeSpaces( data ) {
    return data.replace(/ /g, "");
}