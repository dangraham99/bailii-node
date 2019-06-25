window.$ = window.jQuery = require('./node_modules/jquery/dist/jquery');
const shell = require('electron').shell
let bailiiSearch = 'https://www.bailii.org/cgi-bin/find_by_citation.cgi';
let bailiiEndpoint = 'https://www.bailii.org'


function displaySuccess(){
    $('#case-status').removeClass()
    $('#case-status').addClass('green-text')
    $('#case-citation').addClass('valid')
    $('#case-status').text('Case found, opening...')
}

function displayFail(){
    $('#case-status').removeClass()
    $('#case-status').addClass('red-text darken-4')
    $('#case-citation').addClass('invalid')
    $('#case-status').text('Could not find case, try another citation.')
}

function resetDisplay(){
    $('#case-status').removeClass('')
    $('#case-status').addClass('validation')
    $('#case-citation').removeClass()
    $('#case-status').text('')
}

class Case {
    constructor(caseCitation){
        this.citation = this.trim(caseCitation)
        this.valid = false
        this.url = ''
       
    }

    trim(citation){
        var trimmed = citation.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "")
        return trimmed

    }

    makeRequest(){

        $.ajax({
            method: 'GET',
            url: bailiiSearch,
            data: {citation: this.citation},
            success: function(res, status, xhr){
               if (xhr.getResponseHeader('X-robots-tag') != null){
                   usrCase.valid = true;
                   usrCase.url = this.url
                   displaySuccess()
                   shell.openExternal(usrCase.url)
                   $('#case-status').text('Case opened')
               }
               else {
                   usrCase.valid = false;
                   usrCase.url = "No valid URL"
                   displayFail()
               }
            }
        })

    }

        
}

$('#case-citation').keyup(function(event) {
    if (event.keyCode == 13) {
        event.preventDefault(
            $('#btn-submit').click()
        )
    }
})



$('#btn-submit').click(function(){
    resetDisplay()
    usrInputCitation = $('#case-citation').val()
    usrCase = new Case(usrInputCitation)
    $('#case-status').text('Searching...')
    usrCase.makeRequest()
})
        


