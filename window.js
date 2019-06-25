window.$ = window.jQuery = require('./node_modules/jquery/dist/jquery.slim');
let ipcRenderer = require('electron').ipcRenderer;

class Case {
    constructor(caseCitation){
        this.citation = this.validate(caseCitation)
       
    }

    validate(citation){
        var trimmed = citation.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "")
        return trimmed

    }
        
    caseData(){

        return this.citation
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
    usrCase = new Case(usrInputCitation)
    console.log(usrCase.caseData())
})
        


