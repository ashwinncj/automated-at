$(document).on('click', '#at-download', function() {
    let data = '';
    data += extractAts();
    console.log( data );
});

function extractAts() {
    let data = '';
    $('.at-single').each( function() {
        data += extractAtGroups( this );
        data += extractAtSectionName( this );
        data += extractAtsFromDropBay( this );
        data += getSectionEnding();
    });
    return data;
}

function extractAtSectionName( el ) {
    let sectionName = $(el).children('.single-at-desc').children('input').val();
    sectionName = '\tpublic function test' + removeSpaces( convertToPascalCase( sectionName ) ) + '( AcceptanceTester $I ) {\n';
    return sectionName;
}

function getSectionEnding() {
    return '\t}\n\n';
}

function extractAtGroups( el ) {
    let group = $(el).children('.single-at-group').children('input').val();
    let output = '\t/**\n';
    output += '\t* @group ' + group + '\n';
    output += '\t*/\n';
    return output;
}