/**
 * Add the type of test.
 * Define the markup.
 * Add a check for the markup in the extractAtFromBay
 * 
 */
$(document).ready(function() {
    console.log( 'Automated AT V2 loaded.' );

});

function allowDrop(ev) {
    ev.preventDefault();
}

function atDrop( ev, el ) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    el.appendChild( getAtMarkup( data ) );
}

function addATToList() {
    let atId = 'single-test-' + new Date().getTime();
    
    // AT Single section.
    let atSection = document.createElement('div');
    atSection.className = 'at-single';
    atSection.id = atId;

    // AT Url related inputs
    let atUrlSection = document.createElement('div');
    let atUrl = document.createElement('input');
    atUrlSection.className = 'single-at-url';
    atUrl.value = $('#at-url').val();
    let atUrlLabel = document.createElement('span');
    atUrlLabel.innerHTML = 'Target URL: ';
    atUrlSection.append( atUrlLabel, atUrl );
    
    // AT Group related inputs
    let atGroupSection = document.createElement('div');
    let atGroup = document.createElement('input');
    atGroupSection.className = 'single-at-group';
    atGroup.value = $('#at-group').val();
    let atGroupLabel = document.createElement('span');
    atGroupLabel.innerHTML = 'Target Group: ';
    atGroupSection.append( atGroupLabel, atGroup );

    // AT Description related inputs
    let atDescSection = document.createElement('div');
    let atDesc = document.createElement('input');
    atDescSection.className = 'single-at-desc';
    atDesc.value = $('#at-desc').val();
    let atDescLabel = document.createElement('span');
    atDescLabel.innerHTML = 'AT Description: ';
    atDescSection.append( atDescLabel, atDesc );
    
    // Add remove test button to the single test
    let atRemoveSection = document.createElement( 'div' );
    let atRemoveBtn = document.createElement( 'button' );
    atRemoveBtn.innerHTML = 'Remove this test!';
    atRemoveBtn.className = 'at-remove-btn';
    atRemoveSection.append( atRemoveBtn );

    // Drop bay section.
    let dropBaySection = document.createElement( 'div' );
    dropBaySection.id = atId + '-drop-bay';
    dropBaySection.className = 'at-drop-bay';

    // Break <br> element
    let br = document.createElement('br');

    // Append to the list.
    atSection.append( atDescSection, atGroupSection, atRemoveBtn, dropBaySection );
    $('#at-tests-container').append(atSection);

    // Apped drop controls to drop-bay.
    $( '#' + atId + '-drop-bay' ).attr( 'ondrop', 'atDrop( event, this )' );
    $( '#' + atId + '-drop-bay' ).attr( 'ondragover', 'allowDrop( event, this )' );
}   

function drag( ev ) {
    ev.dataTransfer.setData("text", ev.target.id );
}

$(document).on('click', '.at-remove-btn', function() {
    $(this).parent().remove();
});

