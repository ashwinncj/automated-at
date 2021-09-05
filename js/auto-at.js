$(document).ready(function() {
    // Start the scripts here.
    console.log(' Automated AT loaded.');
    $('#at-name').val('at-' + +new Date());

    $(document).on('click', '.remove-test', function() {
        $(this).parent().parent().remove();
    });

    $('#i-want-to-see').click(function() {
        let atGroup = $('#at-group').val();
        let targetUrl = $('#target-url').val();
        let testContent =  '<div class="i-see-test">' +
            '<div  class="target-url"><span>Target URL : </span><input type="text"  value="'+ targetUrl +'"></div>' +
            '<div class="at-group"><span>AT Group : </span><input type="text"  value="'+ atGroup +'"><br></div>' +
            '<div class="expect"><span>I am expecting : </span><input type="text"></div>' +
            '<div class="see"><span>What to look? :</span><input type="text"></div>' +
            '<div><button class="remove-test">Remove this test !</button></div>' +
            '</div>';
        add_the_test(testContent);
    });

});

function add_the_test(testContent) {
    $('#at-generator-container').append(testContent);
}

function save() {
    var outputData = getFileHeader();
    outputData += readExpectToSeeTests();
    outputData += getFileFooter();
    
    var c = document.createElement("a");
    c.download = $('#at-name').val() + '.php';
    var t = new Blob([outputData], {
        type: "text/plain"
    });

    c.href = window.URL.createObjectURL(t);
    c.click();
    presentUrl = '';
}

var temp = '';
function readExpectToSeeTests() {
    let testData ='\n';
    $('.i-see-test').each(function() {
        let targetUrl = $( this.querySelector('.target-url input') ).val().trim();
        console.log('Stage2' + targetUrl );
        let atGroup = $( this.querySelector('.at-group input') ).val().trim();
        let expect = $( this.querySelector('.expect input') ).val().trim();
        let see = $( this.querySelector('.see input') ).val().trim();

        if( expect == '' ) {
            alert( 'Expectation not provided!' );
            throw new Error( 'Expectation not provided!' );
        }

        if( see == '' ) {
            alert( 'Element to look not provided!' );
            throw new Error( 'Element to look not provided!' );
        }

        testData += ''+
        '/**\n' +
        '* ' + expect +'\n' +
        '*\n' +
        '* @group ' + atGroup +'\n' +
        '*/\n' +
        'function test'+ removeSpaces( expect ) + '( AcceptanceTester $I ) {\n' +
        getUrlRedirectSyntax( targetUrl ) +
        '   $I->see( \'' + see + '\' );\n' +
        '}\n' +
        '\n';
    });

    return testData;
}

function getFileHeader() {
    let data = ''+
    '<?php\n' +
    '/**\n' +
    '* Automated Generated Class\n' +
    '*/\n\n' +
   generateClassName() +
    '';
    return data;
}

function getFileFooter() {
    let data = '' +
    '}' +
    '';
    return data;
}

function generateClassName() {
    let fileName = $('#at-name').val();
    let generateClass = fileName.replace(/[^a-z0-9]/gi,'');
    return 'class ' + toTitleCase( generateClass ) + '{\n';
}
function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  function removeSpaces( data ) {
      return data.replace(/ /g, "");
  }

  var presentUrl = '';
  function calculateTargetUrl( inputTarget ) {
      let calculatedtarget = getUrlPath( inputTarget );
      if( calculatedtarget !== presentUrl ) {
          presentUrl = calculatedtarget;
          return calculatedtarget;
      }
      return '';
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

  function getUrlRedirectSyntax( targetUrl ) {
      let redirect = calculateTargetUrl( targetUrl );
      if( redirect !== '' ) {
        return '   $I->amOnPage( \''+ redirect +'\' );\n';
      }
      return '';
  }