window.$ = window.jQuery = require('./node_modules/jquery/dist/jquery');
const shell = require('electron').shell
let bailiiSearch = 'https://www.bailii.org/cgi-bin/find_by_citation.cgi';
let bailiiEndpoint = 'https://www.bailii.org'


class Case {
    constructor(caseCitation){
        this.citation = this.trim(caseCitation)
        this.passable = 0
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
            success: function(data, textStatus, xhr){
               if ($(data).find('TITLE').text == 'BAILII - Find by citation') {
                   return false
               } else {
                   return true
               }

            }
        })

    }

        
}



$('#btn-submit').click(function(){
    usrInputCitation = $('#case-citation').val()
    usrCase = new Case(usrInputCitation)
    console.log(usrCase.makeRequest())
})
        


