(function() {
    'use strict';

    app.factory("GoalBasedAdviceService", function($rootScope, $state, sessionService) {

        var customFieldObj = {};
		var goalBasedAdvices = [{
            image: "/assets/images/goal1.jpg",
            goalimg: "/assets/images/cal-goal1.png",
            heading: " Protect my income",
            text: "When something happens, like getting sick or injured, you still need to cover the important things like your household expenses and loan repayments",
            listOne: "How much insurance do I need?",
            listTwo: "What might I be covered?",
            listThree: "How do I get insurance?"
        }, {
            image: "/assets/images/goal2.jpg",
            goalimg: "/assets/images/cal-goal2.png",
            heading: " Simplify my finances",
            text: "Simplifying and streamlining your financial life could make it easier to keep track of and grow your money",
            listOne: "Have I got direct debits set up so my bills are paid on time?",
            listTwo: "Do I have a budget and savings plan in place?",
            listThree: "Would consolidating my debits make things easier?"
        }, {
            image: "/assets/images/goal3.jpg",
            goalimg: "/assets/images/cal-goal3.png",
            heading: " Retire right",
            text: "As Australia's cost of living continues to rise, it's important to make sure your money goes the distance in retirement to give you the lifestyle you want.",
            listOne: "Will I have enough super?",
            listTwo: "Will I be eligible for the Age Pension?",
            listThree: "Will I work less, stop working or do something different?"
        }, {
            image: "/assets/images/goal4.jpg",
            goalimg: "/assets/images/cal-goal4.png",
            heading: "Be debt free",
            text: "Whether it's good debt, bad debt or both'how and when you make payments could make a big difference in the total cost of your loans. That means more money in your pocket to invest in your priority goals.",
            listOne: "What debts do I have and what do they total?",
            listTwo: "How much interest am I paying?",
            listThree: "Should I roll my debts into one?"
        }, {
            image: "/assets/images/goal5.jpg",
            goalimg: "/assets/images/cal-goal5.png",
            heading: "Invest in property",
            text: "Whether you're planning to be a first-time landlord or have been in the market for a while, research and planning could play a big part in the returns you generate from an investment property.",
            listOne: "How much can I borrow?",
            listTwo: "Will I be eligible for any tax deductions?",
            listThree: "Can I invest in property through my super?"
        }, {
            image: "/assets/images/goal6.jpg",
            goalimg: "/assets/images/cal-goal6.png",
            heading: "Save for something big",
            text: "It could be a car, holiday, home, wedding or your child's education'whatever you're saving for, organisation and a realistic timeframe could go a long way in helping you to achieve your goal.",
            listOne: "What am I saving for and how much do I need?",
            listTwo: "Do I have a budget and savings plan in place?",
            listThree: "Are my debts under control?"
        }, {
            image: "/assets/images/goal7.jpg",
            goalimg: "/assets/images/cal-goal7.png",
            heading: "Pursue a passion",
            text: "If a new hobby, interest or trade comes with a sizable price tag, you'll need to think about what you can do to make it a reality.",
            listOne: "What is my passion and what will it cost me?",
            listTwo: "Do I have a budget and savings plan in place?",
            listThree: "Am I taking steps to minimise other debts?"
        }, {
            image: "/assets/images/goal8.jpg",
            goalimg: "/assets/images/cal-goal8.png",
            heading: "Buy a home",
            text: "Buying a home is exciting and also a big financial commitment, which is why preparation and readiness could be the difference between make or break.",
            listOne: "How much can I borrow?",
            listTwo: "Am I across the upfront and ongoing costs?",
            listThree: "Am I aware of the government entitlements available?"
        }, {
            image: "/assets/images/goal9.jpg",
            goalimg: "/assets/images/cal-goal9.png",
            heading: "We're married, now what?",
            text: "You may already have shared financial commitments and joint accounts, and maybe even some sneaky spending habits. However, honesty is the best policy for the road ahead.",
            listOne: "Do we have a household budget and savings plan?",
            listTwo: "What are our goals - travel, kids, property?",
            listThree: "What is our contingency plan if something goes wrong?"
        }, {
            image: "/assets/images/goal10.jpg",
            goalimg: "/assets/images/cal-goal10.png",
            heading: "Retirement living options",
            text: "Once retired there's more to consider than just where you'll live, it's about living in your retirement and enjoying all the things you said you would when you stopped working.",
            listOne: "Where will my cash flow come from?",
            listTwo: "Will I be able to afford recreational activities?",
            listThree: "What happens if I need aged care?"
        }, {
            image: "/assets/images/goal11.jpg",
            goalimg: "/assets/images/cal-goal11.png",
            heading: "Start accessing my super",
            text: "Your age and personal circumstances will determine at what point you can start accessing your super. And, depending on when you do, there could be various implications to think about.",
            listOne: "What age can I access my super?",
            listTwo: "What age can I access my super?",
            listThree: "Can I continue working and access super?"
        }, {
            image: "/assets/images/goal12.jpg",
            goalimg: "/assets/images/cal-goal12.png",
            heading: "Give them the best chance",
            text: "For many parents, the idea of giving their kids a good start in life will often come down to things such as schooling, tertiary education and extra-curricular activities.",
            listOne: "Do I have a family budget in place?",
            listTwo: "Do I have savings or an emergency fund?",
            listThree: "Have I explored payment options?"
        }];

        var setGoalBasedAdviceData = function(goalBasedAdviceData) {
            customFieldObj["goalBasedAdvice_0_severity"] = goalBasedAdviceData.goalBasedAdvice_0_severity;
            customFieldObj["goalBasedAdvice_1_severity"] = goalBasedAdviceData.goalBasedAdvice_1_severity;
            customFieldObj["goalBasedAdvice_2_severity"] = goalBasedAdviceData.goalBasedAdvice_2_severity;
            customFieldObj["goalBasedAdvice_3_severity"] = goalBasedAdviceData.goalBasedAdvice_3_severity;
            customFieldObj["goalBasedAdvice_4_severity"] = goalBasedAdviceData.goalBasedAdvice_4_severity;
            customFieldObj["goalBasedAdvice_5_severity"] = goalBasedAdviceData.goalBasedAdvice_5_severity;
            customFieldObj["goalBasedAdvice_6_severity"] = goalBasedAdviceData.goalBasedAdvice_6_severity;
            customFieldObj["goalBasedAdvice_7_severity"] = goalBasedAdviceData.goalBasedAdvice_7_severity;
            customFieldObj["goalBasedAdvice_8_severity"] = goalBasedAdviceData.goalBasedAdvice_8_severity;
            customFieldObj["goalBasedAdvice_9_severity"] = goalBasedAdviceData.goalBasedAdvice_9_severity;
            customFieldObj["goalBasedAdvice_10_severity"] = goalBasedAdviceData.goalBasedAdvice_10_severity;
            customFieldObj["goalBasedAdvice_11_severity"] = goalBasedAdviceData.goalBasedAdvice_11_severity;
            goalBasedAdvices[0]["severity"] = customFieldObj.goalBasedAdvice_0_severity;
            goalBasedAdvices[1]["severity"] = customFieldObj.goalBasedAdvice_1_severity;
            goalBasedAdvices[2]["severity"] = customFieldObj.goalBasedAdvice_2_severity;
            goalBasedAdvices[3]["severity"] = customFieldObj.goalBasedAdvice_3_severity;
            goalBasedAdvices[4]["severity"] = customFieldObj.goalBasedAdvice_4_severity;
            goalBasedAdvices[5]["severity"] = customFieldObj.goalBasedAdvice_5_severity;
            goalBasedAdvices[6]["severity"] = customFieldObj.goalBasedAdvice_6_severity;
            goalBasedAdvices[7]["severity"] = customFieldObj.goalBasedAdvice_7_severity;
            goalBasedAdvices[8]["severity"] = customFieldObj.goalBasedAdvice_8_severity;
            goalBasedAdvices[9]["severity"] = customFieldObj.goalBasedAdvice_9_severity;
            goalBasedAdvices[10]["severity"] = customFieldObj.goalBasedAdvice_10_severity;
            goalBasedAdvices[11]["severity"] = customFieldObj.goalBasedAdvice_11_severity;


        };

        var getCustomFieldObj = function() {
            return customFieldObj;
        };
		
		var getGoalBasedAdvices = function() {
            return goalBasedAdvices;
        };

        

        return {
            /*goalBasedAdvice: function() {
                //Do something here
                return goalBasedAdvices;
            },
            custom_field: {
                customFieldObj
            }*/
			getCustomFieldObj,
			getGoalBasedAdvices,
			setGoalBasedAdviceData
        };

    });

})();