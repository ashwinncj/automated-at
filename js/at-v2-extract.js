function extractAtsFromDropBay( dropBay ) {
    let droppedElements = $(dropBay).children('.at-drop-bay').children('div');
    let ats = '';
    $(droppedElements).each( function() {
        let atType = $(this).data('at-type');
        switch( atType ) {
            case 'click':
                ats += extractClickAt( this );break;
            case 'page':
                ats += extractPageAt( this );break;
            case 'see':
                ats += extractSeeAt( this );break;
            case 'see-element':
                ats += extractSeeElementAt( this );break;
            case 'login':
                ats += extractLoginAt( this );break;
        }
    });
    return ats;
}

function extractClickAt( el ) {
    let data = $(el).children('.click').children('input').val();
    if ( '' == data ) {
        return '';
    }
    let at = '\t\t$I->click( \''+ data +'\' );\n';
    return at;
}

function extractPageAt( el ) {
    let data = $(el).children('.page').children('input').val();
    if ( '' == data ) {
        return '';
    }
    let at = '\t\t$I->amOnPage( \''+ getUrlPath( data ) +'\' );\n';
    return at;
}

function extractSeeAt( el ) {
    let data = $(el).children('.see').children('input').val();
    if ( '' == data ) {
        return '';
    }
    let at = '\t\t$I->see( \''+ data +'\' );\n';
    return at;
}

function extractSeeElementAt( el ) {
    let data = $(el).children('.see-element').children('input').val();
    if ( '' == data ) {
        return '';
    }
    let at = '\t\t$I->seeElement( \''+ data +'\' );\n';
    return at;
}

function extractLoginAt( el ) {
    let at = '\t\t$I->loginAsAdmin();\n';
    return at;
}