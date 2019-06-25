window.$ = window.jQuery = require('./node_modules/jquery/dist/jquery.slim');
let ipcRenderer = require('electron').ipcRenderer;

class Case {
    constructor(caseCitation){
        this.citation = caseCitation
        validateCitation(this.citation)
    }

    validateCitation(citation){
        return true

    }


        
        
    caseData(){
        
        return true
    }

    getValidCase(){
        return true

    }


    getCourt(){
        return this.caseData()[1]
    }

    getTitle(){
        return this.caseData()[0]
    }
        
}



$('#btn-submit').click(function(){
     usrInputCitation = $('#case-citation').val()
    console.log(usrInputCitation)
})
        


