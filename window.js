window.$ = window.jQuery = require('./node_modules/jquery/dist/jquery.slim');
let ipcRenderer = require('electron').ipcRenderer;

let courts = {
    CJEU: {name: 'Court of Justice of the EU', url: 'https://www.bailii.org/eu/cases/EUECJ/', citations: ['']},
    ECtHR: {name: 'European Court of Human Rights', url: 'https://www.bailii.org/eu/cases/ECHR/', citations: ['']},
    UKHoL: {name: 'House of Lords', url: 'https://www.bailii.org/uk/cases/UKHL/', citations: ['']},
    PrivCouncil: {name: 'Privy Council', url: 'https://www.bailii.org/uk/cases/UKPC/', citations: ['']},
    UKSC: {name: 'UK Supreme Court', url: 'https://www.bailii.org/uk/cases/UKSC/', citations: ['']},
    EWCACiv: {name: 'Court of Appeal (Civ)', url: 'https://www.bailii.org/ew/cases/EWCA/Civ/', citations: ['']},
    EWCACrim: {name: 'Court of Appeal (Crim)', url: 'https://www.bailii.org/ew/cases/EWCA/Crim/', citations: ['']},
    EWHCAdmin: {name: 'High Court of England and Wales (Admin)', url: 'https://www.bailii.org/ew/cases/EWHC/Admin/', citations: ['']},
    EWHCAdmiralty: {name: 'High Court of England and Wales (Admiralty)', url: 'https://www.bailii.org/ew/cases/EWHC/Admlty/', citations: ['']},
    EWHCCh: {name: 'High Court of England and Wales (Chancery)', url: 'https://www.bailii.org/ew/cases/EWHC/Ch/', citations: ['']},
    EWHCCom: {name: 'High Court of England and Wales (Commerical)', url: 'https://www.bailii.org/ew/cases/EWHC/Comm/', citations: ['']},
    EWHCCosts: {name: 'High Court of England and Wales (Costs Office)', url: 'https://www.bailii.org/ew/cases/EWHC/Costs/', citations: ['']},
    EWHCExch: {name: 'High Court of England and Wales (Exchequer)', url: 'https://www.bailii.org/ew/cases/EWHC/Exch/', citations: ['']},
    EWHCFam: {name: 'High Court of England and Wales (Family)', url: 'https://www.bailii.org/ew/cases/EWHC/Fam/', citations: ['']},
    EWHCKB: {name: "High Court of England and Wales (King's Bench)", url: 'https://www.bailii.org/ew/cases/EWHC/KB/', citations: ['']},
    EWHCMerc: {name: "High Court of England and Wales (Mercantile)", url: 'https://www.bailii.org/ew/cases/EWHC/Mercantile/', citations: ['']},
    EWHCPatents: {name: "High Court of England and Wales (Patents)", url: 'https://www.bailii.org/ew/cases/EWHC/Patents/', citations: ['']},
    EWHCQB: {name: "High Court of England and Wales (Queen's Bench)", url: 'https://www.bailii.org/ew/cases/EWHC/QB/', citations: ['']},
    EWHCTCC: {name: "High Court of England and Wales (TCC)", url: 'https://www.bailii.org/ew/cases/EWHC/TCC/', citations: ['']},
    EWPCC: {name: "England and Wales Patents County Court", url: 'https://www.bailii.org/ew/cases/EWPCC/'}, citations: [''],
    EWIPEC: {name: "England and Wales Property and Enterprise Court", url: "https://www.bailii.org/ew/cases/EWHC/IPEC/", citations: ['']},
    EWCoP: {name: "England and Wales Court of Protection", url: "https://www.bailii.org/ew/cases/EWCOP", citations: ['']},
    EWMagsFam: {name: "England and Wales Magistrates' Court (Family)", url: 'https://www.bailii.org/ew/cases/EWMC/FPC/', citations: ['']},
    EWCountyFam: {name: "England and Wales County Court (Family)", url: "https://www.bailii.org/ew/cases/EWCC/Fam/", citations: ['']},
    CoS: {name: "Court of Session", url: "https://www.bailii.org/scot/cases/ScotCS/", citations: ['']},
    HCJ: {name: "High Court of Justiciary", url: "https://www.bailii.org/scot/cases/ScotHC/", citations: ['']},
    SheriffCourt: {name: "Sheriff Court", url: 'https://www.bailii.org/scot/cases/ScotSC/', citations: ['']},
    SheriffAppealCiv: {name: "Sheriff Court of Appeal (Civil)", url: 'https://www.bailii.org/scot/cases/ScotSAC/Civ/', citations: ['']},
    SheriffAppealCrim: {name: "Sheriff Court of Appeal (Crim)", url: 'https://www.bailii.org/scot/cases/ScotSAC/Crim/', citations: ['']}

}

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
        


