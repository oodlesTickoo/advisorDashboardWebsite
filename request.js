///SFC

var dataSFC = {
    "age" : 47,
    "retirementAge" : 67,
    "annualSalary" : 60000,
    "superBalance" : 100000,
    "cc" : 10000,
    "ncc" : 10000,
    "ecLevel" : 9.5,
    "inflation" : 2.5,
    "wageIncrease" : 3.5,
    "insurancePremiumPerYear" : 200,
    "netReturn":2.90,
    "fundASelectedId":0,
    "fundNameA":"Special fund 1",
    "contributionFeeA":1.50,
    "adminFeeA":100,
    "indirectCostRationA":1.50,
    "fundBSelectedId":1,
    "fundNameB":"Special fund 2",
    "contributionFeeB":1.50,
    "adminFeeB":100,
    "indirectCostRationB":1.50,

};

////ttr/////////

var ageWs = req.query.age;
    var csesWs = req.query.cses;
    var nraWs = req.query.nra;
    var nrpWs = req.query.nrp;
    var tfpWs = req.query.tfp;
    var balanceWs = req.query.balance;
    var fyWs = req.query.fy;
    var thpWs = req.query.thp;


///retirement

var dataRetirement = {
        "spouseOption": false,
        "houseOption": true,
        "targetIncome": 10000,
        "userDetails": {
            "gender": "male",
            "age": 56,
            "retirementAge": 65,
            "annualSalary": 260000,
            "superBalance": 500000,
            "salarySacrifice": 15384,
            "pensionStartAge": 57
        },
        "userAssumptions": {
            "insurancePremium": 0,
            "investmentReturn": 5.30,
            "variableFee": 1.11,
            "fixedFee": 300,
            "employerContributionLevel": 9.50,
            "inflation": 3.50,
            "wageIncrease": 4.00,
            "pensionDrawdown": 1,
            "pensionDrawdownBase": 40000
        },
        "spouseDetails": {
            "gender": "female",
            "age": 50,
            "retirementAge": 70,
            "annualSalary": 90000,
            "superBalance": 200000,
            "salarySacrifice": 5000,
            "pensionStartAge": 65
        },
        "spouseAssumptions": {
            "insurancePremium": 0,
            "investmentReturn": 5.30,
            "variableFee": 1.11,
            "fixedFee": 300,
            "employerContributionLevel": 9.50,
            "inflation": 3.50,
            "wageIncrease": 4.00,
            "pensionDrawdown": 1,
            "pensionDrawdownBase": 30000
        },
        "otherAssets": {
            "homeContents": 50000,
            "vehicleCost": 0,
            "investmentProperty": 2000,
            "bankAssets": 20000,
            "listedInvestments": 0,
            "marginLoans": 0,
            "otherInvestment": 20000,
            "netRentalIncome": 0,
            "otherIncome": 0,
            "pensionIncome": 0,
            "allocatedPension": 60000
        }
    };    


////asset

var dataAsset = {
        "initialInvestmentAmount": 50000,
        "alterOption": true,        
        "alterYear": 1,
        "birthYear": 1997 ,
        "birthMonth": 1,
        "birthDay": 1,
        "initial": {
            "australianShares1": 10,
            "internationalShares1": 10,
            "internationalSharesHedged1": 10,
            "usShares1": 10,
            "australianBonds1": 10,
            "internationalBondsHedged1": 10,
            "cash1": 10,
            "australianListedProperty1": 10,
            "internationalListedProperty1": 20
        },
        "altered": {
            "australianShares2": 10,
            "internationalShares2": 10,
            "internationalSharesHedged2": 10,
            "usShares2": 10,
            "australianBonds2": 10,
            "internationalBondsHedged2": 10,
            "cash2": 30,
            "australianListedProperty2": 10,
            "internationalListedProperty2": 0
        }
    }    


////income tax


 dataIncome = {
        "annualSalary": 60000,
        "paymentFrequency": 1
    };

///private

var dataPSF = {
        "begnYearInvestment": 2017,
        "numChildren": 2,
        "contStartYear": 2017,
        "spState": 0,
        "spPort": 0,
        "firstChild": {
            "c1Name": "Max",
            "schoolId1": true,
            "schoolYear1": 2017,
            "schoolDuration1": 6,
            "major1": 0,
            "studyingOption1": 0
        },
        "secondChild": {
            "c2Name": "Monica",
            "schoolId2": true,
            "schoolYear2": 2017,
            "schoolDuration2": 6,
            "major2": 0,
            "studyingOption2": 0
        },
        "thirdChild": {
            "c3Name": "john",
            "schoolId3": true,
            "schoolYear3": 2017,
            "schoolDuration3": 6,
            "major3": 0,
            "studyingOption3": 0
        },
        "fourthChild": {
            "c4Name": "Rita",
            "schoolId4": true,
            "schoolYear4": 2017,
            "schoolDuration4": 6,
            "major4": 0,
            "studyingOption4": 0
        },
        "fifthChild": {
            "c5Name": "Tom",
            "schoolId5": true,
            "schoolYear5": 2017,
            "schoolDuration5": 6,
            "major5": 0,
            "studyingOption5": 0
        },
        "sixthChild": {
            "c6Name": "Mike",
            "schoolId6": true,
            "schoolYear6": 2017,
            "schoolDuration6": 6,
            "major6": 0,
            "studyingOption6": 0
        }
    };

////insurance


var dataInsurance={
    "age":50,
    "grossAnnualIncome":120000,
    "funeralCost":20000,
    "familyLivingCostPerYear":90000,
    "hasSpouse":true,
    "hasChildren":true,
    "sickLeaves" : 20,
    "assets" : {
        "homeValue" : 800000,
        "cashAtBank" : 20000,
        "otherInvestment" :20000,
        "superBalance" : 100000
    },
    "existingCovers":{
        "life" : 20000,
        "TPD" : 0,
        "IP" : 0,
        "trauma" : 0
    },
    "assumptions":{
        "inflation" : 2,
        "rateOfReturn" : 5
    },
    "liabilities":{
        "homeMortgage" : 20000,
        "investmentPropertyMortgage" : 10000,
        "creditCardDebt" : 3000,
        "carLoan" : 20000,
        "personalLoan" : 10000,
        "otherLoan" : 0
    },
    "spouseDetails":{
        "age":47,
        "isWorking":true,
        "salary":50000,
        "moveToSmallerProperty":true,
        "valueOfNewProperty" : 500000,
        "moneyToBeBorrowed":400000
    },
    "childrenDetails":{
        "numChildren":0,
        "ages":[3,7],
        "educationExpensePerYearPerChild":2000
    }
}

/// SSO

var age = req.query.age;
    var cses = req.query.cses;
    var thp = req.query.thp;
    var fy = req.query.fy;