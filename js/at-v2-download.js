$(document).on('click', '#at-download', function() {
    let data = '';
    data += getAtHeader();
    data += extractAts();
    data += getAtFooter();
    var c = document.createElement("a");
    c.download = removeSpaces( convertToPascalCase( $('#at-class-name').val() ) ) + 'Cest.php';
    var t = new Blob([data], {
        type: "text/plain"
    });

    c.href = window.URL.createObjectURL(t);
    c.click();
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

function getAtHeader() {
    let output = '<?php\n';
    output += '/**\n';
    output += '* Automated AT Generated Class\n';
    output += '*/\n';
    output += 'class ' + removeSpaces( convertToPascalCase( $('#at-class-name').val() ) ) + 'Cest {\n\n';
    return output;
}

function getAtFooter() {
    let output = '}\n';
    return output;
}