function getAtMarkup( markup = '' ) {
    switch( markup ) {
        case 'seeAtMarkup':
            return seeAtMarkup();break;      
        case 'clickAtMarkup':
            return clickAtMarkup();break;
        case 'onPageAtMarkup':
            return onPageAtMarkup();break;
        case 'seeElementAtMarkup':
            return seeElementAtMarkup();break;
        case 'loginAtMarkup':
            return loginAtMarkup();break;
    }
}

function seeAtMarkup() {
    let seeAtSection = document.createElement('div');
    seeAtSection.className = 'at-see';
    seeAtSection.setAttribute( 'data-at-type', 'see' );
    seeAtSection.innerHTML = '<div class="see">What to look for? <input type="text"></div><span class="at-remove-btn x-btn">&#x2715</span>';
    return seeAtSection;
}

function clickAtMarkup() {
    let clickAtSection = document.createElement('div');
    clickAtSection.className = 'at-click';
    clickAtSection.setAttribute( 'data-at-type', 'click' );
    clickAtSection.innerHTML = '<div class="click"><span>Where to click? </span><input type="text"></div><span class="at-remove-btn x-btn">&#x2715</span>';
    return clickAtSection;
}

function onPageAtMarkup() {
    let onPageAtMarkup = document.createElement('div');
    onPageAtMarkup.className = 'at-page';
    onPageAtMarkup.setAttribute( 'data-at-type', 'page' );
    onPageAtMarkup.innerHTML = '<div class="page"><span>Target URL? </span><input type="text"></div><span class="at-remove-btn x-btn">&#x2715</span>';
    return onPageAtMarkup;
}

function seeElementAtMarkup() {
    let seeAtElementSection = document.createElement('div');
    seeAtElementSection.className = 'at-see-element';
    seeAtElementSection.setAttribute( 'data-at-type', 'see-element' );
    seeAtElementSection.innerHTML = '<div class="see-element">Element selector: <input type="text"></div><span class="at-remove-btn x-btn">&#x2715</span>';
    return seeAtElementSection;
}

function loginAtMarkup() {
    let loginAtSection = document.createElement('div');
    loginAtSection.className = 'at-login';
    loginAtSection.setAttribute( 'data-at-type', 'login' );
    loginAtSection.innerHTML = '<div class="see">Logging in as Admin</div><span class="at-remove-btn x-btn">&#x2715</span>';
    return loginAtSection;
}