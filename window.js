let ipcRenderer = require('electron').ipcRenderer;

class Case {
    constructor(caseCitation){
        this.citation = caseCitation
    }

    getValidCase(){
        return true

    }
    
    
    
    caseData(){
    
    
    }

    getCourt(){
        return this.caseData()[1]
    }

    getTitle(){
        return this.caseData()[0]
    }
    
}

let caseCitation = document.getElementById('case-citation').value()
let inputCase = new Case(caseCitation)