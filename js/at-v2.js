/**
 * Add the type of test.
 * Define the markup.
 * Add a check for the markup in the extractAtFromBay
 * 
 */
$(document).ready(function() {
    console.log( 'Automated AT V2 loaded.' );
    let atClass = 'at' + new Date().getTime();
    $('#at-class-name').val( atClass );
});

function allowDrop(ev) {
    ev.preventDefault();
    ev.target.classList.add('dragged-over');
}

function atDrop( ev, el ) {
    ev.target.classList.remove('dragged-over');
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    el.appendChild( getAtMarkup( data ) );
}

function drag( ev ) {
    ev.dataTransfer.setData("text", ev.target.id );
}

function dragLeave( ev ) {
    ev.target.classList.remove('dragged-over');
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
    atDesc.value = getAtDescription();
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
    $( '#' + atId + '-drop-bay' ).attr( 'ondragleave', 'dragLeave( event, this )' );

    // Remove AT desc and group.
    $('#at-desc').val('');
    $('#at-group').val('');
}

$(document).on('click', '.at-remove-btn', function() {
    $(this).parent().remove();
});

function getAtDescription() {
    let atDesc = $('#at-desc').val();
    if( '' == atDesc ) {
        alert( 'AT Test Descritpion NOT Provided!\nPlease provide a description about test.' );
        throw new Error(); 
    }
    return atDesc;
}


