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

let caseCitation = document.getElementById('case-citation').value()
//let inputCase = new Case(caseCitation)

$('#btn-submit').click(function(){
    alert(caseCitation)
})
