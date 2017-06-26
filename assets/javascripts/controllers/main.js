/**
 * @ngdoc function
 * @name fmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fmsApp
 */
app.controller("MainCtrl", ['$scope', 'sessionService', '$state', '$rootScope', function($scope, sessionService, $state, $rootScope) {
    //    $scope.menuItems = ['Home', 'Calculators', 'Goal Based Advice', 'Contact Us'];
	
	console.log("In Main Controller");
	
    //to get token
    $rootScope.isLoggedIn = false;
    $rootScope.loginName = '';
    $scope.showColor = false;
    $scope.showUser = false;
	$rootScope.previousState;
	$rootScope.currentState;

    /*$rootScope.latestObj = {
        CONTACT_FIELD_1: "Excellent",
        CONTACT_FIELD_2: "No", //false
        CONTACT_FIELD_3: "Yes",
        CONTACT_FIELD_4: "Full Cover",
        CONTACT_FIELD_5: "No",
        CONTACT_FIELD_6: "Rachel",
        CONTACT_FIELD_7: "Payne",
        CONTACT_FIELD_8: "No", //false
        CONTACT_FIELD_9: "Sun Jan 01 1984 04: 09: 09 GMT + 0530(IST)",
        CONTACT_FIELD_10: "4123333333",
        CONTACT_FIELD_11: "2016",
        CONTACT_FIELD_12: "$260,000",
        CONTACT_FIELD_13: "$120,000",
        CONTACT_FIELD_14: "$100,000",
        CONTACT_FIELD_15: "$20,000",
        CONTACT_FIELD_16: "$10,384",
        CONTACT_FIELD_17: "$10,000",
        CONTACT_FIELD_18: "15.00%",
        CONTACT_FIELD_19: "$45,000",
        CONTACT_FIELD_20: "$0",
        CONTACT_FIELD_21: "$5,000",
        CONTACT_FIELD_22: "1.11%",
        CONTACT_FIELD_23: "$300",
        CONTACT_FIELD_24: "9.50%",
        CONTACT_FIELD_25: "2%",
        CONTACT_FIELD_26: "4.00%",
        CONTACT_FIELD_27: "5%",
        CONTACT_FIELD_28: "65",
        CONTACT_FIELD_29: "57",
        CONTACT_FIELD_30: "Select Your Own Value",
        CONTACT_FIELD_31: "$40,000",
        CONTACT_FIELD_32: "$40,000",
        CONTACT_FIELD_33: "$90,000",
        CONTACT_FIELD_34: "$200,000",
        CONTACT_FIELD_35: "$5,000",
        CONTACT_FIELD_36: "$0",
        CONTACT_FIELD_37: "5.30%",
        CONTACT_FIELD_38: "1.11%",
        CONTACT_FIELD_39: "$300",
        CONTACT_FIELD_40: "9.50%",
        CONTACT_FIELD_41: "3.50%",
        CONTACT_FIELD_42: "4.00%",
        CONTACT_FIELD_43: "70",
        CONTACT_FIELD_44: "65",
        CONTACT_FIELD_45: "Minimum Pension Only",
        CONTACT_FIELD_46: "$30,000",
        CONTACT_FIELD_47: "MySuper Fund",
        CONTACT_FIELD_48: "MySuper Fund",
        CONTACT_FIELD_49: "Asgard Infinity Ewrap Super",
        CONTACT_FIELD_50: "ING Direct Living Super",
        CONTACT_FIELD_51: "2.9",
        CONTACT_FIELD_52: "Fund A",
        CONTACT_FIELD_53: "1.50%",
        CONTACT_FIELD_54: "$100",
        CONTACT_FIELD_55: "1.50%",
        CONTACT_FIELD_56: "Fund B",
        CONTACT_FIELD_57: "1.50%",
        CONTACT_FIELD_58: "$100",
        CONTACT_FIELD_59: "1.50%",
        CONTACT_FIELD_60: "$500,000",
        CONTACT_FIELD_61: "$0",
        CONTACT_FIELD_62: "$2,000",
        CONTACT_FIELD_63: "$20,000",
        CONTACT_FIELD_64: "$0",
        CONTACT_FIELD_65: "$0",
        CONTACT_FIELD_66: "2",
        CONTACT_FIELD_67: "3",
        CONTACT_FIELD_68: "5",
        CONTACT_FIELD_69: "10",
        CONTACT_FIELD_70: "10",
        CONTACT_FIELD_71: "10",
        CONTACT_FIELD_72: "$20,000",
        CONTACT_FIELD_73: "$5,000",
        CONTACT_FIELD_74: "$90,000",
        CONTACT_FIELD_75: "$250,000",
        CONTACT_FIELD_76: "$0",
        CONTACT_FIELD_77: "$0",
        CONTACT_FIELD_78: "$0",
        CONTACT_FIELD_79: "10",
        CONTACT_FIELD_80: "$800,000",
        CONTACT_FIELD_81: "$50,000",
        CONTACT_FIELD_82: "$0",
        CONTACT_FIELD_83: "$2,000",
        CONTACT_FIELD_84: "$20,000",
        CONTACT_FIELD_85: "$0",
        CONTACT_FIELD_86: "$0",
        CONTACT_FIELD_87: "$60,000",
        CONTACT_FIELD_88: "$20,000",
        CONTACT_FIELD_89: "$0",
        CONTACT_FIELD_90: "$0",
        CONTACT_FIELD_91: "$0",
        CONTACT_FIELD_92: "6%",
        CONTACT_FIELD_93: "2%",
        CONTACT_FIELD_94: "7%",
        CONTACT_FIELD_95: "$50,000",
        CONTACT_FIELD_96: "$50,000",
        CONTACT_FIELD_97: "10%",
        CONTACT_FIELD_98: "10%",
        CONTACT_FIELD_99: "10%",
        CONTACT_FIELD_100: "10%",
        CONTACT_FIELD_101: "10%",
        CONTACT_FIELD_102: "10%",
        CONTACT_FIELD_103: "10%",
        CONTACT_FIELD_104: "10%",
        CONTACT_FIELD_105: "20%",
        CONTACT_FIELD_106: "100%",
        CONTACT_FIELD_107: "No",
        CONTACT_FIELD_108: "5",
        CONTACT_FIELD_109: "10%",
        CONTACT_FIELD_110: "10%",
        CONTACT_FIELD_111: "10%",
        CONTACT_FIELD_112: "10%",
        CONTACT_FIELD_113: "10%",
        CONTACT_FIELD_114: "10%",
        CONTACT_FIELD_115: "10%",
        CONTACT_FIELD_116: "10%",
        CONTACT_FIELD_117: "20%",
        CONTACT_FIELD_118: "100%",
        CONTACT_FIELD_119: "2017",
        CONTACT_FIELD_120: "2017",
        CONTACT_FIELD_121: "Conservative Cautious",
        CONTACT_FIELD_122: "Max",
        CONTACT_FIELD_123: "Yes",
        CONTACT_FIELD_124: "2017",
        CONTACT_FIELD_125: "6",
        CONTACT_FIELD_126: "Major in Commerce",
        CONTACT_FIELD_127: "Monica",
        CONTACT_FIELD_128: "Yes",
        CONTACT_FIELD_129: "2017",
        CONTACT_FIELD_130: "6",
        CONTACT_FIELD_131: "Sydney Grammar School Darlinghurst",
        CONTACT_FIELD_132: "Adele",
        CONTACT_FIELD_133: "Yes",
        CONTACT_FIELD_134: "2017",
        CONTACT_FIELD_135: "6",
        CONTACT_FIELD_136: "Sydney Grammar School Darlinghurst",
        CONTACT_FIELD_137: "Major in Commerce",
        CONTACT_FIELD_138: "Rita",
        CONTACT_FIELD_139: "Yes",
        CONTACT_FIELD_140: "2017",
        CONTACT_FIELD_141: "6",
        CONTACT_FIELD_142: "Sydney Grammar School Darlinghurst",
        CONTACT_FIELD_143: "Major in Commerce",
        CONTACT_FIELD_144: "Tom",
        CONTACT_FIELD_145: "Yes",
        CONTACT_FIELD_146: "2017",
        CONTACT_FIELD_147: "6",
        CONTACT_FIELD_148: "Sydney Grammar School Darlinghurst",
        CONTACT_FIELD_149: "Major in Commerce",
        CONTACT_FIELD_166: "Select from the list of high schools in the living state.",
        CONTACT_FIELD_167: "NSW",
        CONTACT_FIELD_168: "Private School",
        CONTACT_FIELD_169: "Sydney Grammar School Darlinghurst",
        CONTACT_FIELD_170: "Yes",
        CONTACT_FIELD_171: "$500,000",
        CONTACT_FIELD_172: "$400,000",
        CONTACT_FIELD_173: "Sydney Grammar School Darlinghurst",
        CONTACT_FIELD_174: "Major in Commerce",
        CONTACT_FIELD_175: "Yes",
        CONTACT_FIELD_176: "$3000",
        CONTACT_FIELD_177: "$20,000",
        CONTACT_FIELD_154: "false",
        CONTACT_FIELD_155: "Low",
        CONTACT_FIELD_156: "false",
        CONTACT_FIELD_157: "false",
        CONTACT_FIELD_158: "false",
        CONTACT_FIELD_159: "Medium",
        CONTACT_FIELD_160: "High",
        CONTACT_FIELD_161: "false",
        CONTACT_FIELD_162: "false",
        CONTACT_FIELD_163: "false",
        CONTACT_FIELD_164: "false",
        CONTACT_FIELD_165: "false",
        CONTACT_FIELD_178: "Yes",
        CONTACT_FIELD_179: "No",
        CONTACT_FIELD_180: "Male",
        CONTACT_FIELD_181: "1234",
        CONTACT_FIELD_182: "Yes",
        CONTACT_FIELD_183: "10",
        CONTACT_FIELD_184: "10",
        CONTACT_FIELD_185: "1985",
        CONTACT_FIELD_186: "02",
        CONTACT_FIELD_187: "05",
        CONTACT_FIELD_188: "1987",
    };*/


    function init() {
        var token = sessionService.get('token');
        if (token && token !== '' && token !== null && token !== 'null') {
            $rootScope.isLoggedIn = true;
        }
        var name = sessionService.get('name');
        if (name && name !== '' && name !== null && name !== 'null') {
            $rootScope.loginName = name;
        }
    }
    init();

    $scope.menuItems = [{
        'path': 'app.welcome',
        'name': 'Home'
    }, {
        'path': 'app.superCalculator',
        'name': 'Calculators'
    }, {
        'path': 'app.goalBasedAdvice',
        'name': 'Goal Based Advice'
    }, {
        'path': 'app.contact',
        'name': 'Contact Us'
    }];
    $scope.selected = 0;

    $scope.select = function(index) {
        $scope.selected = index;
    };

    $scope.logout = function() {
        sessionService.unsetAll();
        $rootScope.isLoggedIn = false;
        $state.go('login');
    }

    $scope.fontchange = function() {

        $scope.showColor = !$scope.showColor;
        $scope.showUser = !$scope.showUser;
    }


}]);