app.controller("SuperCalculatorController", ['$scope', '$rootScope', '$timeout', 'AgeCalculator', 'ChartServiceHc', 'DonutChartServiceHc', 'PdfMaker', function($scope, $rootScope, $timeout, AgeCalculator, ChartServiceHc, DonutChartServiceHc, PdfMaker) {

	$scope.fundTypeA = [
        { id: 0, name: 'MySuper Fund' },
        { id: 1, name: 'Lifestage Fund' },
        { id: 2, name: 'Other Fund' }
    ];

    $scope.fundTypeB = [
        { id: 0, name: 'MySuper Fund' },
        { id: 1, name: 'Lifestage Fund' },
        { id: 2, name: 'Other Fund' }
    ];

    $scope.investOptions = [
        { id: 0, name: 'Cash', netReturn: 2.90 },
        { id: 1, name: 'Conservative', netReturn: 4.20 },
        { id: 2, name: 'Moderate', netReturn: 5.00 },
        { id: 3, name: 'Balanced', netReturn: 5.70 },
        { id: 4, name: 'Growth', netReturn: 6.20 },
        { id: 5, name: 'High Growth', netReturn: 6.60 }
    ];


    $scope.fundsOb = [{ id: 0, name: "AMG Super ", annualPercentageFee: 0.01134 },
        { id: 1, name: "AMP No.1 Retirement Trust ", annualPercentageFee: 0.0085696 },
        { id: 2, name: "Brookfield Australia AMP super Savings Trust ", annualPercentageFee: 0.0053 },
        { id: 3, name: "Macquarie Group AMP super Savings Trust ", annualPercentageFee: 0.0079 },
        { id: 4, name: "Woolworths Group AMP super Savings Trust ", annualPercentageFee: 0.00611 },
        { id: 5, name: "ANZ Staff Australian super Scheme ", annualPercentageFee: 0.0053 },
        { id: 6, name: "Balanced Australian Catholic super and Retirement Fund ", annualPercentageFee: 0.00956 },
        { id: 7, name: "ADF Australian Defence Force super Scheme ", annualPercentageFee: 0.0093 },
        { id: 8, name: "Balanced accumulation Australian Ethical Retail super Fund ", annualPercentageFee: 0.01404 },
        { id: 9, name: "AMIST Australian Meat Industry super Trust ", annualPercentageFee: 0.00758 },
        { id: 10, name: "AustralianSuper ", annualPercentageFee: 0.00796 },
        { id: 11, name: "IBM Super Plan AustralianSuper ", annualPercentageFee: 0.00952 },
        { id: 12, name: "Komatsu Super Plan AustralianSuper ", annualPercentageFee: 0.01086 },
        { id: 13, name: "Balanced Austsafe super Fund ", annualPercentageFee: 0.00892 },
        { id: 14, name: "AvSuper Growth Fund ", annualPercentageFee: 0.0112 },
        { id: 15, name: "Betros Bros super Fund No 2 ", annualPercentageFee: 0.0108 },
        { id: 16, name: "BOC Gases super Fund ", annualPercentageFee: 0.01268 },
        { id: 17, name: "BUSSQ Building Unions super Scheme Queensland ", annualPercentageFee: 0.00896 },
        { id: 18, name: "CareSuper ", annualPercentageFee: 0.01136 },
        { id: 19, name: "My Ethical Super Christian ", annualPercentageFee: 0.01268 },
        { id: 20, name: "Club Plus Super Scheme ", annualPercentageFee: 0.007472 },
        { id: 21, name: "Club Super ", annualPercentageFee: 0.01272 },
        { id: 22, name: "Combined Fund Super ", annualPercentageFee: 0.01052 },
        { id: 23, name: "Accumulate Plus Balanced Commonwealth Bank Group Super ", annualPercentageFee: 0.006973 },
        { id: 24, name: "Balanced Concept One The Industry super Fund ", annualPercentageFee: 0.01152 },
        { id: 25, name: "Growth Cbus Construction & Building Unions super ", annualPercentageFee: 0.00996 },
        { id: 26, name: "Active Balanced DuluxGroup Employees super Fund ", annualPercentageFee: 0.01222 },
        { id: 27, name: "Balanced Elphinstone Group super Fund ", annualPercentageFee: 0.0157 },
        { id: 28, name: "EmPlus super Fund ", annualPercentageFee: 0.010456 },
        { id: 29, name: "Balanced Energy Industries super SchemePool A ", annualPercentageFee: 0.0063 },
        { id: 30, name: "Energy Super ", annualPercentageFee: 0.00944 },
        { id: 31, name: "Equipsuper ", annualPercentageFee: 0.00926 },
        { id: 32, name: "First Super ", annualPercentageFee: 0.00886 },
        { id: 33, name: "Goldman Sachs & JBWere super Fund Product ", annualPercentageFee: 0.016 },
        { id: 34, name: "Core Pool Health Employees super Trust Australia ", annualPercentageFee: 0.0096 },
        { id: 35, name: "Balanced option HOSTPLUS super Fund ", annualPercentageFee: 0.01356 },
        { id: 36, name: "IAG & NRMA super Plan ", annualPercentageFee: 0.0104 },
        { id: 37, name: "Active Balanced Incitec Pivot Employees super Fund ", annualPercentageFee: 0.01276 },
        { id: 38, name: "Intrust Super Fund ", annualPercentageFee: 0.01046 },
        { id: 39, name: "IOOF Portfolio Service super Fund ", annualPercentageFee: 0.01084 },
        { id: 40, name: "Kinetic Super Growth super Fund ", annualPercentageFee: 0.008612 },
        { id: 41, name: "Balanced Labour Union CoOperative Retirement Fund ", annualPercentageFee: 0.00846 },
        { id: 42, name: "Balanced legalsuper ", annualPercentageFee: 0.011152 },
        { id: 43, name: "LESF Super ", annualPercentageFee: 0.012932 },
        { id: 44, name: "Vision Local Authorities super Fund ", annualPercentageFee: 0.00946 },
        { id: 45, name: "Balanced Option Compliant Lutheran Super ", annualPercentageFee: 0.00902 },
        { id: 46, name: "Moderate investment option Maritime Super ", annualPercentageFee: 0.01246 },
        { id: 47, name: "Max Super Fund ", annualPercentageFee: 0.01126 },
        { id: 48, name: "MIESF Meat Industry Employees super Fund ", annualPercentageFee: 0.0069 },
        { id: 49, name: "Balanced investment option accumulation Media Super ", annualPercentageFee: 0.00864 },
        { id: 50, name: "Mercer Santos Super Trust ", annualPercentageFee: 0.0091336 },
        { id: 51, name: "Mercy Super ", annualPercentageFee: 0.010644 },
        { id: 52, name: "MLC Super Fund ", annualPercentageFee: 0.01206 },
        { id: 53, name: "NAB Staff MLC Super Fund ", annualPercentageFee: 0.01036 },
        { id: 54, name: "My AutoSuper MTAA super Fund ", annualPercentageFee: 0.00996 },
        { id: 55, name: "MyCatholicSuper MyLifeMyMoney super Fund ", annualPercentageFee: 0.01126 },
        { id: 56, name: "NSF Nationwide super Fund ", annualPercentageFee: 0.0121 },
        { id: 57, name: "NESS Super ", annualPercentageFee: 0.00984 },
        { id: 58, name: "Diversified NGS Super ", annualPercentageFee: 0.0077 },
        { id: 59, name: "Perpetual Perpetual's Select super Fund ", annualPercentageFee: 0.0137 },
        { id: 60, name: "Pitcher Retirement Plan ", annualPercentageFee: 0.02072 },
        { id: 61, name: "Prime Super ", annualPercentageFee: 0.01416 },
        { id: 62, name: "PSSap Balanced Public Sector super Accumulation Plan ", annualPercentageFee: 0.0093 },
        { id: 63, name: "QIEC Queensland Independent Education & Care super Trust ", annualPercentageFee: 0.01092 },
        { id: 64, name: "Trustee Super Balanced Rei ", annualPercentageFee: 0.008516 },
        { id: 65, name: "REST Super Retail Employees super Trust ", annualPercentageFee: 0.008144 },
        { id: 66, name: "Rio Tinto Fund Growth Option Product Staff super ", annualPercentageFee: 0.00902 },
        { id: 67, name: "General Division Russell Investments Master Trust ", annualPercentageFee: 0.01314 },
        { id: 68, name: "SmartSave Balanced Smartsave 'Member's Choice' super Master Plan ", annualPercentageFee: 0.01272 },
        { id: 69, name: "Statewide super Trust ", annualPercentageFee: 0.00936 },
        { id: 70, name: "MyLife The Executive super Fund ", annualPercentageFee: 0.0133452 },
        { id: 71, name: "VISSF Balanced Option Product The Victorian Independent Schools super Fund ", annualPercentageFee: 0.00914 },
        { id: 72, name: "Growth Toyota Super ", annualPercentageFee: 0.00984 },
        { id: 73, name: "Balanced TWU super Fund ", annualPercentageFee: 0.01236 },
        { id: 74, name: "UniSuper Balanced Unisuper ", annualPercentageFee: 0.00692 },
        { id: 75, name: "Balanced United Technologies Corporation Retirement Plan ", annualPercentageFee: 0.0098 },
        { id: 76, name: "Growth Victorian super Fund ", annualPercentageFee: 0.00986 },
        { id: 77, name: "My WA Super Local Government super Plan ", annualPercentageFee: 0.01246 },
        { id: 78, name: "Growth Water Corporation super Plan ", annualPercentageFee: 0.01144 },
        { id: 79, name: "AFLPA & AFL. Industry 1950s ", annualPercentageFee: 0.011808 },
        { id: 80, name: "AFLPA & AFL. Industry 1960s ", annualPercentageFee: 0.011908 },
        { id: 81, name: "AFLPA & AFL. Industry 1970s ", annualPercentageFee: 0.010908 },
        { id: 82, name: "AFLPA & AFL. Industry 1980s ", annualPercentageFee: 0.010408 },
        { id: 83, name: "AFLPA & AFL. Industry 1990s ", annualPercentageFee: 0.009908 },
        { id: 84, name: "AFLPA & AFL. Industry Capital Stable ", annualPercentageFee: 0.009708 },
        { id: 85, name: "AMP No.2 1950s ", annualPercentageFee: 0.0136472 },
        { id: 86, name: "AMP No.2 1960s ", annualPercentageFee: 0.0141472 },
        { id: 87, name: "AMP No.2 1970s ", annualPercentageFee: 0.0146472 },
        { id: 88, name: "AMP No.2 1980s ", annualPercentageFee: 0.0155472 },
        { id: 89, name: "AMP No.2 1990s ", annualPercentageFee: 0.0155472 },
        { id: 90, name: "AMP No.2 Capital Stable ", annualPercentageFee: 0.0134472 },
        { id: 91, name: "Anglican National ANS RIL Balanced ", annualPercentageFee: 0.0099662 },
        { id: 92, name: "Anglican National ANS RIL Conservative ", annualPercentageFee: 0.008948 },
        { id: 93, name: "Anglican National ANS RIL Growth ", annualPercentageFee: 0.010948 },
        { id: 94, name: "Anglican National ANS RIL High Growth ", annualPercentageFee: 0.011948 },
        { id: 95, name: "Australia Post 1950s ", annualPercentageFee: 0.010436 },
        { id: 96, name: "Australia Post 1960s ", annualPercentageFee: 0.009536 },
        { id: 97, name: "Australia Post 1970s ", annualPercentageFee: 0.008536 },
        { id: 98, name: "Australia Post 1980s ", annualPercentageFee: 0.009036 },
        { id: 99, name: "Australia Post 1990s ", annualPercentageFee: 0.010536 },
        { id: 100, name: "Australia Post Capital Stable ", annualPercentageFee: 0.008336 },
        { id: 101, name: "CCA Future Directions Balanced ", annualPercentageFee: 0.0065616 },
        { id: 102, name: "CCA Future Directions Conservative ", annualPercentageFee: 0.0052744 },
        { id: 103, name: "CCA Future Directions Growth ", annualPercentageFee: 0.0071618 },
        { id: 104, name: "CCA Future Directions High Growth ", annualPercentageFee: 0.0072642 },
        { id: 105, name: "CCA Future Directions Moderately Cons ", annualPercentageFee: 0.0058672 },
        { id: 106, name: "Aon Defensive ", annualPercentageFee: 0.00942 },
        { id: 107, name: "Aon High Growth ", annualPercentageFee: 0.00942 },
        { id: 108, name: "Aon 43 ", annualPercentageFee: 0.00942 },
        { id: 109, name: "Aon 44 ", annualPercentageFee: 0.00942 },
        { id: 110, name: "Aon 45 ", annualPercentageFee: 0.00942 },
        { id: 111, name: "Aon 46 ", annualPercentageFee: 0.00942 },
        { id: 112, name: "Aon 47 ", annualPercentageFee: 0.00942 },
        { id: 113, name: "Aon 48 ", annualPercentageFee: 0.00942 },
        { id: 114, name: "Aon 49 ", annualPercentageFee: 0.00942 },
        { id: 115, name: "Aon 50 ", annualPercentageFee: 0.00942 },
        { id: 116, name: "Aon 51 ", annualPercentageFee: 0.00942 },
        { id: 117, name: "Aon 52 ", annualPercentageFee: 0.00942 },
        { id: 118, name: "Aon 53 ", annualPercentageFee: 0.00942 },
        { id: 119, name: "Aon 54 ", annualPercentageFee: 0.00942 },
        { id: 120, name: "Aon 55 ", annualPercentageFee: 0.00942 },
        { id: 121, name: "Aon 56 ", annualPercentageFee: 0.00942 },
        { id: 122, name: "Aon 57 ", annualPercentageFee: 0.00942 },
        { id: 123, name: "Aon 58 ", annualPercentageFee: 0.00942 },
        { id: 124, name: "Aon 59 ", annualPercentageFee: 0.00942 },
        { id: 125, name: "Aon 60 ", annualPercentageFee: 0.00942 },
        { id: 126, name: "Aon 61 ", annualPercentageFee: 0.00942 },
        { id: 127, name: "Aon 62 ", annualPercentageFee: 0.00942 },
        { id: 128, name: "Aon 63 ", annualPercentageFee: 0.00942 },
        { id: 129, name: "Aon 64 ", annualPercentageFee: 0.00942 },
        { id: 130, name: "Aon 65 ", annualPercentageFee: 0.00942 },
        { id: 131, name: "Aon 66 ", annualPercentageFee: 0.00942 },
        { id: 132, name: "Asgard Employee 1940s LifeStage ", annualPercentageFee: 0.01354 },
        { id: 133, name: "Asgard Employee 1950s LifeStage ", annualPercentageFee: 0.01344 },
        { id: 134, name: "Asgard Employee 1960s LifeStage ", annualPercentageFee: 0.01334 },
        { id: 135, name: "Asgard Employee 1970s LifeStage ", annualPercentageFee: 0.01334 },
        { id: 136, name: "Asgard Employee 1980s LifeStage ", annualPercentageFee: 0.01334 },
        { id: 137, name: "Asgard Employee 1990s LifeStage ", annualPercentageFee: 0.01334 },
        { id: 138, name: "Asgard Employee 2000s Lifestage ", annualPercentageFee: 0.01334 },
        { id: 139, name: "Colonial First State FirstChoice super Lifestage 1945 49 ", annualPercentageFee: 0.0112 },
        { id: 140, name: "Colonial First State FirstChoice super Lifestage 1950 54 ", annualPercentageFee: 0.0112 },
        { id: 141, name: "Colonial First State FirstChoice super Lifestage 1955 59 ", annualPercentageFee: 0.0112 },
        { id: 142, name: "Colonial First State FirstChoice super Lifestage 1960 64 ", annualPercentageFee: 0.0112 },
        { id: 143, name: "Colonial First State FirstChoice super Lifestage 1965 69 ", annualPercentageFee: 0.0112 },
        { id: 144, name: "Colonial First State FirstChoice super  Lifestage 1970 74 ", annualPercentageFee: 0.0112 },
        { id: 145, name: "Colonial First State FirstChoice super  Lifestage 1975 79 ", annualPercentageFee: 0.0112 },
        { id: 146, name: "Colonial First State FirstChoice super  Lifestage 1980 84 ", annualPercentageFee: 0.0112 },
        { id: 147, name: "Colonial First State FirstChoice super  Lifestage 1985 89 ", annualPercentageFee: 0.0112 },
        { id: 148, name: "Colonial First State FirstChoice super  Lifestage 1990 94 ", annualPercentageFee: 0.0112 },
        { id: 149, name: "Colonial First State FirstChoice super  Lifestage 1995 ", annualPercentageFee: 0.0112 },
        { id: 150, name: "Colonial First State FirstChoice super  Lifestage 2000 04 ", annualPercentageFee: 0.0112 },
        { id: 151, name: "Commonwealth Essential Super Essential Lifestage 1940's option ", annualPercentageFee: 0.0094112 },
        { id: 152, name: "Commonwealth Essential Super Essential Lifestage 1950's option ", annualPercentageFee: 0.0094112 },
        { id: 153, name: "Commonwealth Essential Super Essential Lifestage 1960's option ", annualPercentageFee: 0.0094112 },
        { id: 154, name: "Commonwealth Essential Super Essential Lifestage 1970's option ", annualPercentageFee: 0.0094112 },
        { id: 155, name: "Commonwealth Essential Super Essential Lifestage 1980's option ", annualPercentageFee: 0.0094112 },
        { id: 156, name: "Commonwealth Essential Super Essential Lifestage 1990's option ", annualPercentageFee: 0.0094112 },
        { id: 157, name: "First State Super LifecycleBalanced ", annualPercentageFee: 0.00754 },
        { id: 158, name: "First State Super LifecycleDiversified ", annualPercentageFee: 0.00794 },
        { id: 159, name: "Guild Retirement Fund Building ", annualPercentageFee: 0.0112 },
        { id: 160, name: "Guild Retirement Fund Consolidating ", annualPercentageFee: 0.0094 },
        { id: 161, name: "Guild Retirement Fund Growing ", annualPercentageFee: 0.0103 },
        { id: 162, name: "Age Based Investment Strategy Balanced ", annualPercentageFee: 0.00626 },
        { id: 163, name: "Age Based Investment Strategy Balanced Growth ", annualPercentageFee: 0.00666 },
        { id: 164, name: "Age Based Investment Strategy Conservative ", annualPercentageFee: 0.00576 },
        { id: 165, name: "Age Based Investment Strategy High Growth ", annualPercentageFee: 0.00706 },
        { id: 166, name: "LGIASuper Lifecycle75 Plus ", annualPercentageFee: 0.0064 },
        { id: 167, name: "LGIASuper LifecycleUnder 75 ", annualPercentageFee: 0.0072 },
        { id: 168, name: "Mercer SmartPath1929 to 1933 ", annualPercentageFee: 0.0121696 },
        { id: 169, name: "Mercer SmartPath1934 to 1938 ", annualPercentageFee: 0.0121696 },
        { id: 170, name: "Mercer SmartPath1939 to 1943 ", annualPercentageFee: 0.0121696 },
        { id: 171, name: "Mercer SmartPath1944 to 1948 ", annualPercentageFee: 0.0123696 },
        { id: 172, name: "Mercer SmartPath1949 to 1953 ", annualPercentageFee: 0.0122696 },
        { id: 173, name: "Mercer SmartPath1954 to 1958 ", annualPercentageFee: 0.0123696 },
        { id: 174, name: "Mercer SmartPath1959 to 1963 ", annualPercentageFee: 0.0132696 },
        { id: 175, name: "Mercer SmartPath1964 to 1968 ", annualPercentageFee: 0.0135696 },
        { id: 176, name: "Mercer SmartPath1969 to 1973 ", annualPercentageFee: 0.0135696 },
        { id: 177, name: "Mercer SmartPath1974 to 1978 ", annualPercentageFee: 0.0135696 },
        { id: 178, name: "Mercer SmartPath1979 to 1983 ", annualPercentageFee: 0.0135696 },
        { id: 179, name: "Mercer SmartPath1984 to 1988 ", annualPercentageFee: 0.0135696 },
        { id: 180, name: "Mercer SmartPath1989 to 1993 ", annualPercentageFee: 0.0135696 },
        { id: 181, name: "Mercer SmartPath1994 to 1998 ", annualPercentageFee: 0.0135696 },
        { id: 182, name: "Mercer SmartPath1999 to 2003 ", annualPercentageFee: 0.0135696 },
        { id: 183, name: "Mercer SmartPathBorn prior to 1929 ", annualPercentageFee: 0.0121696 },
        { id: 184, name: "Mercer WGSP 1929 to 1933 ", annualPercentageFee: 0.0080696 },
        { id: 185, name: "Mercer WGSP 1934 to 1938 ", annualPercentageFee: 0.0080696 },
        { id: 186, name: "Mercer WGSP 1939 to 1943 ", annualPercentageFee: 0.0080696 },
        { id: 187, name: "Mercer WGSP 1944 to 1948 ", annualPercentageFee: 0.0082696 },
        { id: 188, name: "Mercer WGSP 1949 to 1953 ", annualPercentageFee: 0.0081696 },
        { id: 189, name: "Mercer WGSP 1954 to 1958 ", annualPercentageFee: 0.0082696 },
        { id: 190, name: "Mercer WGSP 1959 to 1963 ", annualPercentageFee: 0.0091696 },
        { id: 191, name: "Mercer WGSP 1964 to 1968 ", annualPercentageFee: 0.0094696 },
        { id: 192, name: "Mercer WGSP 1969 to 1973 ", annualPercentageFee: 0.0094696 },
        { id: 193, name: "Mercer WGSP 1974 to 1978 ", annualPercentageFee: 0.0094696 },
        { id: 194, name: "Mercer WGSP 1979 to 1983 ", annualPercentageFee: 0.0094696 },
        { id: 195, name: "Mercer WGSP 1984 to 1988 ", annualPercentageFee: 0.0094696 },
        { id: 196, name: "Mercer WGSP 1989 to 1993 ", annualPercentageFee: 0.0094696 },
        { id: 197, name: "Mercer WGSP 1994 to 1998 ", annualPercentageFee: 0.0094696 },
        { id: 198, name: "Mercer WGSP 1999 to 2003 ", annualPercentageFee: 0.0094696 },
        { id: 199, name: "Mercer WGSP Born prior to 1929 ", annualPercentageFee: 0.0080696 },
        { id: 200, name: "Virgin Money 1949 to 1953 ", annualPercentageFee: 0.00656 },
        { id: 201, name: "Virgin Money 1954 to 1958 ", annualPercentageFee: 0.00646 },
        { id: 202, name: "Virgin Money 1959 to 1963 ", annualPercentageFee: 0.00656 },
        { id: 203, name: "Virgin Money 1964 to 1968 ", annualPercentageFee: 0.00656 },
        { id: 204, name: "Virgin Money 1969 to 1973 ", annualPercentageFee: 0.00656 },
        { id: 205, name: "Virgin Money 1974 to 1978 ", annualPercentageFee: 0.00656 },
        { id: 206, name: "Virgin Money 1979 to 1983 ", annualPercentageFee: 0.00656 },
        { id: 207, name: "Virgin Money 1984 to 1988 ", annualPercentageFee: 0.00656 },
        { id: 208, name: "Virgin Money 1989 to 1993 ", annualPercentageFee: 0.00656 },
        { id: 209, name: "Virgin Money 1994 to 1998 ", annualPercentageFee: 0.00656 },
        { id: 210, name: "Virgin Money 1999 to 2003 ", annualPercentageFee: 0.00656 },
        { id: 211, name: "Virgin Money 2004 to 2008 ", annualPercentageFee: 0.00656 },
        { id: 212, name: "Virgin Money 2009 to 2013 ", annualPercentageFee: 0.00656 },
        { id: 213, name: "Virgin Money 2014 to 2018 ", annualPercentageFee: 0.00656 },
        { id: 214, name: "Virgin Money BORN PRIOR to 1949 ", annualPercentageFee: 0.00656 },
        { id: 215, name: "Default Lifecycle Aggressive ", annualPercentageFee: 0.01068 },
        { id: 216, name: "Default Lifecycle Balanced ", annualPercentageFee: 0.00938 },
        { id: 217, name: "Default Lifecycle Growth ", annualPercentageFee: 0.01028 },
        { id: 218, name: "Default Lifecycle Stable ", annualPercentageFee: 0.00828 },
        { id: 219, name: "ANZ Smart Choice Super 1940s ", annualPercentageFee: 0.006 },
        { id: 220, name: "ANZ Smart Choice Super 1950s ", annualPercentageFee: 0.006 },
        { id: 221, name: "ANZ Smart Choice Super 1960s ", annualPercentageFee: 0.006 },
        { id: 222, name: "ANZ Smart Choice Super 1970s ", annualPercentageFee: 0.006 },
        { id: 223, name: "ANZ Smart Choice Super 1980s ", annualPercentageFee: 0.006 },
        { id: 224, name: "ANZ Smart Choice Super 1990s ", annualPercentageFee: 0.006 },
        { id: 225, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1940s ", annualPercentageFee: 0.0054 },
        { id: 226, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1950s ", annualPercentageFee: 0.0054 },
        { id: 227, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1960s ", annualPercentageFee: 0.0054 },
        { id: 228, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1970s ", annualPercentageFee: 0.0054 },
        { id: 229, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1980s ", annualPercentageFee: 0.0054 },
        { id: 230, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1990s ", annualPercentageFee: 0.0054 },
        { id: 231, name: "GlidepathAltitude ", annualPercentageFee: 0.01108 },
        { id: 232, name: "GlidepathCruising ", annualPercentageFee: 0.01088 },
        { id: 233, name: "GlidepathDestination ", annualPercentageFee: 0.01058 },
        { id: 234, name: "GlidepathTake Off ", annualPercentageFee: 0.01138 },
        { id: 235, name: "BT Super for Life  Lifetime Employer 1940s LifeStage ", annualPercentageFee: 0.012 },
        { id: 236, name: "BT Super for Life  Lifetime Employer 1950s LifeStage ", annualPercentageFee: 0.0119 },
        { id: 237, name: "BT Super for Life  Lifetime Employer 1960s LifeStage ", annualPercentageFee: 0.0118 },
        { id: 238, name: "BT Super for Life  Lifetime Employer 1970s LifeStage ", annualPercentageFee: 0.0118 },
        { id: 239, name: "BT Super for Life  Lifetime Employer 1980s LifeStage ", annualPercentageFee: 0.0118 },
        { id: 240, name: "BT Super for Life  Lifetime Employer 1990s LifeStage ", annualPercentageFee: 0.0118 },
        { id: 241, name: "BT Super for Life  Lifetime Employer 2000s Lifestage ", annualPercentageFee: 0.0118 },
        { id: 242, name: "Westpac Group Plan 1940s LifeStage ", annualPercentageFee: 0.0075 },
        { id: 243, name: "Westpac Group Plan 1950s LifeStage ", annualPercentageFee: 0.0074 },
        { id: 244, name: "Westpac Group Plan 1960s LifeStage ", annualPercentageFee: 0.0073 },
        { id: 245, name: "Westpac Group Plan 1970s LifeStage ", annualPercentageFee: 0.0073 },
        { id: 246, name: "Westpac Group Plan 1980s LifeStage ", annualPercentageFee: 0.0073 },
        { id: 247, name: "Westpac Group Plan 1990s LifeStage ", annualPercentageFee: 0.0073 },
        { id: 248, name: "Westpac Group Plan 2000s LifeStage ", annualPercentageFee: 0.0073 },
        { id: 249, name: "QSuper LifetimeAspire 1 Group ", annualPercentageFee: 0.007 },
        { id: 250, name: "QSuper LifetimeAspire 2 Group ", annualPercentageFee: 0.007 },
        { id: 251, name: "QSuper LifetimeFocus 1 Group ", annualPercentageFee: 0.0063 },
        { id: 252, name: "QSuper LifetimeFocus 2 Group ", annualPercentageFee: 0.0063 },
        { id: 253, name: "QSuper LifetimeFocus 3 Group ", annualPercentageFee: 0.0063 },
        { id: 254, name: "QSuper LifetimeOutlook ", annualPercentageFee: 0.0079 },
        { id: 255, name: "QSuper LifetimeSustain Group 1 ", annualPercentageFee: 0.0049 },
        { id: 256, name: "QSuper LifetimeSustain Group 2 ", annualPercentageFee: 0.0049 },
        { id: 257, name: "Suncorp Lifestage FundsSuncorp 1934 Prior ", annualPercentageFee: 0.01006 },
        { id: 258, name: "Suncorp Lifestage FundsSuncorp 1935 1939 ", annualPercentageFee: 0.01006 },
        { id: 259, name: "Suncorp Lifestage FundsSuncorp 1940 1944 ", annualPercentageFee: 0.01006 },
        { id: 260, name: "Suncorp Lifestage FundsSuncorp 1945 1949 ", annualPercentageFee: 0.01006 },
        { id: 261, name: "Suncorp Lifestage FundsSuncorp 1950 1954 ", annualPercentageFee: 0.01006 },
        { id: 262, name: "Suncorp Lifestage FundsSuncorp 1955 1959 ", annualPercentageFee: 0.01006 },
        { id: 263, name: "Suncorp Lifestage FundsSuncorp 1960 1964 ", annualPercentageFee: 0.01006 },
        { id: 264, name: "Suncorp Lifestage FundsSuncorp 1965 1969 ", annualPercentageFee: 0.01006 },
        { id: 265, name: "Suncorp Lifestage FundsSuncorp 1970 1974 ", annualPercentageFee: 0.01006 },
        { id: 266, name: "Suncorp Lifestage FundsSuncorp 1975 1979 ", annualPercentageFee: 0.01006 },
        { id: 267, name: "Suncorp Lifestage FundsSuncorp 1980 1984 ", annualPercentageFee: 0.01006 },
        { id: 268, name: "Suncorp Lifestage FundsSuncorp 1985 1989 ", annualPercentageFee: 0.01006 },
        { id: 269, name: "Suncorp Lifestage FundsSuncorp 1990 1994 ", annualPercentageFee: 0.01006 },
        { id: 270, name: "Suncorp Lifestage FundsSuncorp 1995 1999 ", annualPercentageFee: 0.01006 },
        { id: 271, name: "Suncorp Lifestage FundsSuncorp 2000 2004 ", annualPercentageFee: 0.01006 },
        { id: 272, name: "Sunsuper for LifeAge 54 and under ", annualPercentageFee: 0.00736 },
        { id: 273, name: "Sunsuper for LifeAge 55 ", annualPercentageFee: 0.00736 },
        { id: 274, name: "Sunsuper for LifeAge 56 ", annualPercentageFee: 0.00736 },
        { id: 275, name: "Sunsuper for LifeAge 57 ", annualPercentageFee: 0.00736 },
        { id: 276, name: "Sunsuper for LifeAge 58 ", annualPercentageFee: 0.00736 },
        { id: 277, name: "Sunsuper for LifeAge 59 ", annualPercentageFee: 0.00736 },
        { id: 278, name: "Sunsuper for LifeAge 60 ", annualPercentageFee: 0.00736 },
        { id: 279, name: "Sunsuper for LifeAge 61 ", annualPercentageFee: 0.00736 },
        { id: 280, name: "Sunsuper for LifeAge 62 ", annualPercentageFee: 0.00736 },
        { id: 281, name: "Sunsuper for LifeAge 63 ", annualPercentageFee: 0.00736 },
        { id: 282, name: "Sunsuper for LifeAge 64 ", annualPercentageFee: 0.00736 },
        { id: 283, name: "Sunsuper for LifeAge 65 and over ", annualPercentageFee: 0.00736 },
        { id: 284, name: "AMP No.3AMP SDF 1950s ", annualPercentageFee: 0.0145472 },
        { id: 285, name: "AMP No.3AMP SDF 1960s ", annualPercentageFee: 0.0150472 },
        { id: 286, name: "AMP No.3AMP SDF 1970s ", annualPercentageFee: 0.0155472 },
        { id: 287, name: "AMP No.3AMP SDF 1980s ", annualPercentageFee: 0.0164472 },
        { id: 288, name: "AMP No.3AMP SDF 1990s ", annualPercentageFee: 0.0164472 },
        { id: 289, name: "AMP No.3AMP SDF Capital Stable ", annualPercentageFee: 0.0143472 },
        { id: 290, name: "Tasplan Ontrack Build ", annualPercentageFee: 0.00926 },
        { id: 291, name: "Tasplan Ontrack Control ", annualPercentageFee: 0.00856 },
        { id: 292, name: "Tasplan Ontrack Maintain ", annualPercentageFee: 0.00786 },
        { id: 293, name: "Tasplan Ontrack Sustain ", annualPercentageFee: 0.00896 },
        { id: 294, name: "Telstra Super Balanced ", annualPercentageFee: 0.01076 },
        { id: 295, name: "Telstra Super Conservative ", annualPercentageFee: 0.00816 },
        { id: 296, name: "Telstra Super Growth ", annualPercentageFee: 0.01096 },
        { id: 297, name: "Bendigo Balanced Index Fund ", annualPercentageFee: 0.00626 },
        { id: 298, name: "Bendigo Conservative Index Fund ", annualPercentageFee: 0.00608 },
        { id: 299, name: "Bendigo Growth Index Fund ", annualPercentageFee: 0.00654 },
        { id: 300, name: "BT Business 1940s LifeStage ", annualPercentageFee: 0.0118 },
        { id: 301, name: "BT Business 1950s LifeStage ", annualPercentageFee: 0.0119 },
        { id: 302, name: "BT Business 1960s LifeStage ", annualPercentageFee: 0.0119 },
        { id: 303, name: "BT Business 1970s LifeStage ", annualPercentageFee: 0.012 },
        { id: 304, name: "BT Business 1980s LifeStage ", annualPercentageFee: 0.012 },
        { id: 305, name: "BT Business 1990s LifeStage ", annualPercentageFee: 0.012 },
        { id: 306, name: "BT Business 2000s LifeStage", annualPercentageFee: 0.012 },
        { id: 307, name: "Asgard Infinity Ewrap", contributionFee: 0, adminFee: 0, indirectCostRation: 1.16 },
        { id: 308, name: "SMSI Non Advice", contributionFee: 0, adminFee: 2499, indirectCostRation: 0 },
        { id: 309, name: "SMSI Advice", contributionFee: 0, adminFee: 259, indirectCostRation: 0.53 },
        { id: 310, name: "Australian Super direct share portfolio platform", contributionFee: 0, adminFee: 2673, indirectCostRation: 0 },
        { id: 311, name: "Investor's own", contributionFee: 0.01134, adminFee: 0, indirectCostRation: 0 }
    ];

    $scope.fundsMySuper = [{ id: 0, name: "AMG Super ", annualPercentageFee: 0.01134 },
        { id: 1, name: "AMP No.1 Retirement Trust ", annualPercentageFee: 0.0085696 },
        { id: 2, name: "Brookfield Australia AMP super Savings Trust ", annualPercentageFee: 0.0053 },
        { id: 3, name: "Macquarie Group AMP super Savings Trust ", annualPercentageFee: 0.0079 },
        { id: 4, name: "Woolworths Group AMP super Savings Trust ", annualPercentageFee: 0.00611 },
        { id: 5, name: "ANZ Staff Australian super Scheme ", annualPercentageFee: 0.0053 },
        { id: 6, name: "Balanced Australian Catholic super and Retirement Fund ", annualPercentageFee: 0.00956 },
        { id: 7, name: "ADF Australian Defence Force super Scheme ", annualPercentageFee: 0.0093 },
        { id: 8, name: "Balanced accumulation Australian Ethical Retail super Fund ", annualPercentageFee: 0.01404 },
        { id: 9, name: "AMIST Australian Meat Industry super Trust ", annualPercentageFee: 0.00758 },
        { id: 10, name: "AustralianSuper ", annualPercentageFee: 0.00796 },
        { id: 11, name: "IBM Super Plan AustralianSuper ", annualPercentageFee: 0.00952 },
        { id: 12, name: "Komatsu Super Plan AustralianSuper ", annualPercentageFee: 0.01086 },
        { id: 13, name: "Balanced Austsafe super Fund ", annualPercentageFee: 0.00892 },
        { id: 14, name: "AvSuper Growth Fund ", annualPercentageFee: 0.0112 },
        { id: 15, name: "Betros Bros super Fund No 2 ", annualPercentageFee: 0.0108 },
        { id: 16, name: "BOC Gases super Fund ", annualPercentageFee: 0.01268 },
        { id: 17, name: "BUSSQ Building Unions super Scheme Queensland ", annualPercentageFee: 0.00896 },
        { id: 18, name: "CareSuper ", annualPercentageFee: 0.01136 },
        { id: 19, name: "My Ethical Super Christian ", annualPercentageFee: 0.01268 },
        { id: 20, name: "Club Plus Super Scheme ", annualPercentageFee: 0.007472 },
        { id: 21, name: "Club Super ", annualPercentageFee: 0.01272 },
        { id: 22, name: "Combined Fund Super ", annualPercentageFee: 0.01052 },
        { id: 23, name: "Accumulate Plus Balanced Commonwealth Bank Group Super ", annualPercentageFee: 0.006973 },
        { id: 24, name: "Balanced Concept One The Industry super Fund ", annualPercentageFee: 0.01152 },
        { id: 25, name: "Growth Cbus Construction & Building Unions super ", annualPercentageFee: 0.00996 },
        { id: 26, name: "Active Balanced DuluxGroup Employees super Fund ", annualPercentageFee: 0.01222 },
        { id: 27, name: "Balanced Elphinstone Group super Fund ", annualPercentageFee: 0.0157 },
        { id: 28, name: "EmPlus super Fund ", annualPercentageFee: 0.010456 },
        { id: 29, name: "Balanced Energy Industries super SchemePool A ", annualPercentageFee: 0.0063 },
        { id: 30, name: "Energy Super ", annualPercentageFee: 0.00944 },
        { id: 31, name: "Equipsuper ", annualPercentageFee: 0.00926 },
        { id: 32, name: "First Super ", annualPercentageFee: 0.00886 },
        { id: 33, name: "Goldman Sachs & JBWere super Fund Product ", annualPercentageFee: 0.016 },
        { id: 34, name: "Core Pool Health Employees super Trust Australia ", annualPercentageFee: 0.0096 },
        { id: 35, name: "Balanced option HOSTPLUS super Fund ", annualPercentageFee: 0.01356 },
        { id: 36, name: "IAG & NRMA super Plan ", annualPercentageFee: 0.0104 },
        { id: 37, name: "Active Balanced Incitec Pivot Employees super Fund ", annualPercentageFee: 0.01276 },
        { id: 38, name: "Intrust Super Fund ", annualPercentageFee: 0.01046 },
        { id: 39, name: "IOOF Portfolio Service super Fund ", annualPercentageFee: 0.01084 },
        { id: 40, name: "Kinetic Super Growth super Fund ", annualPercentageFee: 0.008612 },
        { id: 41, name: "Balanced Labour Union CoOperative Retirement Fund ", annualPercentageFee: 0.00846 },
        { id: 42, name: "Balanced legalsuper ", annualPercentageFee: 0.011152 },
        { id: 43, name: "LESF Super ", annualPercentageFee: 0.012932 },
        { id: 44, name: "Vision Local Authorities super Fund ", annualPercentageFee: 0.00946 },
        { id: 45, name: "Balanced Option Compliant Lutheran Super ", annualPercentageFee: 0.00902 },
        { id: 46, name: "Moderate investment option Maritime Super ", annualPercentageFee: 0.01246 },
        { id: 47, name: "Max Super Fund ", annualPercentageFee: 0.01126 },
        { id: 48, name: "MIESF Meat Industry Employees super Fund ", annualPercentageFee: 0.0069 },
        { id: 49, name: "Balanced investment option accumulation Media Super ", annualPercentageFee: 0.00864 },
        { id: 50, name: "Mercer Santos Super Trust ", annualPercentageFee: 0.0091336 },
        { id: 51, name: "Mercy Super ", annualPercentageFee: 0.010644 },
        { id: 52, name: "MLC Super Fund ", annualPercentageFee: 0.01206 },
        { id: 53, name: "NAB Staff MLC Super Fund ", annualPercentageFee: 0.01036 },
        { id: 54, name: "My AutoSuper MTAA super Fund ", annualPercentageFee: 0.00996 },
        { id: 55, name: "MyCatholicSuper MyLifeMyMoney super Fund ", annualPercentageFee: 0.01126 },
        { id: 56, name: "NSF Nationwide super Fund ", annualPercentageFee: 0.0121 },
        { id: 57, name: "NESS Super ", annualPercentageFee: 0.00984 },
        { id: 58, name: "Diversified NGS Super ", annualPercentageFee: 0.0077 },
        { id: 59, name: "Perpetual Perpetual's Select super Fund ", annualPercentageFee: 0.0137 },
        { id: 60, name: "Pitcher Retirement Plan ", annualPercentageFee: 0.02072 },
        { id: 61, name: "Prime Super ", annualPercentageFee: 0.01416 },
        { id: 62, name: "PSSap Balanced Public Sector super Accumulation Plan ", annualPercentageFee: 0.0093 },
        { id: 63, name: "QIEC Queensland Independent Education & Care super Trust ", annualPercentageFee: 0.01092 },
        { id: 64, name: "Trustee Super Balanced Rei ", annualPercentageFee: 0.008516 },
        { id: 65, name: "REST Super Retail Employees super Trust ", annualPercentageFee: 0.008144 },
        { id: 66, name: "Rio Tinto Fund Growth Option Product Staff super ", annualPercentageFee: 0.00902 },
        { id: 67, name: "General Division Russell Investments Master Trust ", annualPercentageFee: 0.01314 },
        { id: 68, name: "SmartSave Balanced Smartsave 'Member's Choice' super Master Plan ", annualPercentageFee: 0.01272 },
        { id: 69, name: "Statewide super Trust ", annualPercentageFee: 0.00936 },
        { id: 70, name: "MyLife The Executive super Fund ", annualPercentageFee: 0.0133452 },
        { id: 71, name: "VISSF Balanced Option Product The Victorian Independent Schools super Fund ", annualPercentageFee: 0.00914 },
        { id: 72, name: "Growth Toyota Super ", annualPercentageFee: 0.00984 },
        { id: 73, name: "Balanced TWU super Fund ", annualPercentageFee: 0.01236 },
        { id: 74, name: "UniSuper Balanced Unisuper ", annualPercentageFee: 0.00692 },
        { id: 75, name: "Balanced United Technologies Corporation Retirement Plan ", annualPercentageFee: 0.0098 },
        { id: 76, name: "Growth Victorian super Fund ", annualPercentageFee: 0.00986 },
        { id: 77, name: "My WA Super Local Government super Plan ", annualPercentageFee: 0.01246 },
        { id: 78, name: "Growth Water Corporation super Plan ", annualPercentageFee: 0.01144 }
    ];

    $scope.fundsLifestage = [{ id: 79, name: "AFLPA & AFL. Industry 1950s ", annualPercentageFee: 0.011808 },
        { id: 80, name: "AFLPA & AFL. Industry 1960s ", annualPercentageFee: 0.011908 },
        { id: 81, name: "AFLPA & AFL. Industry 1970s ", annualPercentageFee: 0.010908 },
        { id: 82, name: "AFLPA & AFL. Industry 1980s ", annualPercentageFee: 0.010408 },
        { id: 83, name: "AFLPA & AFL. Industry 1990s ", annualPercentageFee: 0.009908 },
        { id: 84, name: "AFLPA & AFL. Industry Capital Stable ", annualPercentageFee: 0.009708 },
        { id: 85, name: "AMP No.2 1950s ", annualPercentageFee: 0.0136472 },
        { id: 86, name: "AMP No.2 1960s ", annualPercentageFee: 0.0141472 },
        { id: 87, name: "AMP No.2 1970s ", annualPercentageFee: 0.0146472 },
        { id: 88, name: "AMP No.2 1980s ", annualPercentageFee: 0.0155472 },
        { id: 89, name: "AMP No.2 1990s ", annualPercentageFee: 0.0155472 },
        { id: 90, name: "AMP No.2 Capital Stable ", annualPercentageFee: 0.0134472 },
        { id: 91, name: "Anglican National ANS RIL Balanced ", annualPercentageFee: 0.0099662 },
        { id: 92, name: "Anglican National ANS RIL Conservative ", annualPercentageFee: 0.008948 },
        { id: 93, name: "Anglican National ANS RIL Growth ", annualPercentageFee: 0.010948 },
        { id: 94, name: "Anglican National ANS RIL High Growth ", annualPercentageFee: 0.011948 },
        { id: 95, name: "Australia Post 1950s ", annualPercentageFee: 0.010436 },
        { id: 96, name: "Australia Post 1960s ", annualPercentageFee: 0.009536 },
        { id: 97, name: "Australia Post 1970s ", annualPercentageFee: 0.008536 },
        { id: 98, name: "Australia Post 1980s ", annualPercentageFee: 0.009036 },
        { id: 99, name: "Australia Post 1990s ", annualPercentageFee: 0.010536 },
        { id: 100, name: "Australia Post Capital Stable ", annualPercentageFee: 0.008336 },
        { id: 101, name: "CCA Future Directions Balanced ", annualPercentageFee: 0.0065616 },
        { id: 102, name: "CCA Future Directions Conservative ", annualPercentageFee: 0.0052744 },
        { id: 103, name: "CCA Future Directions Growth ", annualPercentageFee: 0.0071618 },
        { id: 104, name: "CCA Future Directions High Growth ", annualPercentageFee: 0.0072642 },
        { id: 105, name: "CCA Future Directions Moderately Cons ", annualPercentageFee: 0.0058672 },
        { id: 106, name: "Aon Defensive ", annualPercentageFee: 0.00942 },
        { id: 107, name: "Aon High Growth ", annualPercentageFee: 0.00942 },
        { id: 108, name: "Aon 43 ", annualPercentageFee: 0.00942 },
        { id: 109, name: "Aon 44 ", annualPercentageFee: 0.00942 },
        { id: 110, name: "Aon 45 ", annualPercentageFee: 0.00942 },
        { id: 111, name: "Aon 46 ", annualPercentageFee: 0.00942 },
        { id: 112, name: "Aon 47 ", annualPercentageFee: 0.00942 },
        { id: 113, name: "Aon 48 ", annualPercentageFee: 0.00942 },
        { id: 114, name: "Aon 49 ", annualPercentageFee: 0.00942 },
        { id: 115, name: "Aon 50 ", annualPercentageFee: 0.00942 },
        { id: 116, name: "Aon 51 ", annualPercentageFee: 0.00942 },
        { id: 117, name: "Aon 52 ", annualPercentageFee: 0.00942 },
        { id: 118, name: "Aon 53 ", annualPercentageFee: 0.00942 },
        { id: 119, name: "Aon 54 ", annualPercentageFee: 0.00942 },
        { id: 120, name: "Aon 55 ", annualPercentageFee: 0.00942 },
        { id: 121, name: "Aon 56 ", annualPercentageFee: 0.00942 },
        { id: 122, name: "Aon 57 ", annualPercentageFee: 0.00942 },
        { id: 123, name: "Aon 58 ", annualPercentageFee: 0.00942 },
        { id: 124, name: "Aon 59 ", annualPercentageFee: 0.00942 },
        { id: 125, name: "Aon 60 ", annualPercentageFee: 0.00942 },
        { id: 126, name: "Aon 61 ", annualPercentageFee: 0.00942 },
        { id: 127, name: "Aon 62 ", annualPercentageFee: 0.00942 },
        { id: 128, name: "Aon 63 ", annualPercentageFee: 0.00942 },
        { id: 129, name: "Aon 64 ", annualPercentageFee: 0.00942 },
        { id: 130, name: "Aon 65 ", annualPercentageFee: 0.00942 },
        { id: 131, name: "Aon 66 ", annualPercentageFee: 0.00942 },
        { id: 132, name: "Asgard Employee 1940s LifeStage ", annualPercentageFee: 0.01354 },
        { id: 133, name: "Asgard Employee 1950s LifeStage ", annualPercentageFee: 0.01344 },
        { id: 134, name: "Asgard Employee 1960s LifeStage ", annualPercentageFee: 0.01334 },
        { id: 135, name: "Asgard Employee 1970s LifeStage ", annualPercentageFee: 0.01334 },
        { id: 136, name: "Asgard Employee 1980s LifeStage ", annualPercentageFee: 0.01334 },
        { id: 137, name: "Asgard Employee 1990s LifeStage ", annualPercentageFee: 0.01334 },
        { id: 138, name: "Asgard Employee 2000s Lifestage ", annualPercentageFee: 0.01334 },
        { id: 139, name: "Colonial First State FirstChoice super Lifestage 1945 49 ", annualPercentageFee: 0.0112 },
        { id: 140, name: "Colonial First State FirstChoice super Lifestage 1950 54 ", annualPercentageFee: 0.0112 },
        { id: 141, name: "Colonial First State FirstChoice super Lifestage 1955 59 ", annualPercentageFee: 0.0112 },
        { id: 142, name: "Colonial First State FirstChoice super Lifestage 1960 64 ", annualPercentageFee: 0.0112 },
        { id: 143, name: "Colonial First State FirstChoice super Lifestage 1965 69 ", annualPercentageFee: 0.0112 },
        { id: 144, name: "Colonial First State FirstChoice super  Lifestage 1970 74 ", annualPercentageFee: 0.0112 },
        { id: 145, name: "Colonial First State FirstChoice super  Lifestage 1975 79 ", annualPercentageFee: 0.0112 },
        { id: 146, name: "Colonial First State FirstChoice super  Lifestage 1980 84 ", annualPercentageFee: 0.0112 },
        { id: 147, name: "Colonial First State FirstChoice super  Lifestage 1985 89 ", annualPercentageFee: 0.0112 },
        { id: 148, name: "Colonial First State FirstChoice super  Lifestage 1990 94 ", annualPercentageFee: 0.0112 },
        { id: 149, name: "Colonial First State FirstChoice super  Lifestage 1995 ", annualPercentageFee: 0.0112 },
        { id: 150, name: "Colonial First State FirstChoice super  Lifestage 2000 04 ", annualPercentageFee: 0.0112 },
        { id: 151, name: "Commonwealth Essential Super Essential Lifestage 1940's option ", annualPercentageFee: 0.0094112 },
        { id: 152, name: "Commonwealth Essential Super Essential Lifestage 1950's option ", annualPercentageFee: 0.0094112 },
        { id: 153, name: "Commonwealth Essential Super Essential Lifestage 1960's option ", annualPercentageFee: 0.0094112 },
        { id: 154, name: "Commonwealth Essential Super Essential Lifestage 1970's option ", annualPercentageFee: 0.0094112 },
        { id: 155, name: "Commonwealth Essential Super Essential Lifestage 1980's option ", annualPercentageFee: 0.0094112 },
        { id: 156, name: "Commonwealth Essential Super Essential Lifestage 1990's option ", annualPercentageFee: 0.0094112 },
        { id: 157, name: "First State Super LifecycleBalanced ", annualPercentageFee: 0.00754 },
        { id: 158, name: "First State Super LifecycleDiversified ", annualPercentageFee: 0.00794 },
        { id: 159, name: "Guild Retirement Fund Building ", annualPercentageFee: 0.0112 },
        { id: 160, name: "Guild Retirement Fund Consolidating ", annualPercentageFee: 0.0094 },
        { id: 161, name: "Guild Retirement Fund Growing ", annualPercentageFee: 0.0103 },
        { id: 162, name: "Age Based Investment Strategy Balanced ", annualPercentageFee: 0.00626 },
        { id: 163, name: "Age Based Investment Strategy Balanced Growth ", annualPercentageFee: 0.00666 },
        { id: 164, name: "Age Based Investment Strategy Conservative ", annualPercentageFee: 0.00576 },
        { id: 165, name: "Age Based Investment Strategy High Growth ", annualPercentageFee: 0.00706 },
        { id: 166, name: "LGIASuper Lifecycle75 Plus ", annualPercentageFee: 0.0064 },
        { id: 167, name: "LGIASuper LifecycleUnder 75 ", annualPercentageFee: 0.0072 },
        { id: 168, name: "Mercer SmartPath1929 to 1933 ", annualPercentageFee: 0.0121696 },
        { id: 169, name: "Mercer SmartPath1934 to 1938 ", annualPercentageFee: 0.0121696 },
        { id: 170, name: "Mercer SmartPath1939 to 1943 ", annualPercentageFee: 0.0121696 },
        { id: 171, name: "Mercer SmartPath1944 to 1948 ", annualPercentageFee: 0.0123696 },
        { id: 172, name: "Mercer SmartPath1949 to 1953 ", annualPercentageFee: 0.0122696 },
        { id: 173, name: "Mercer SmartPath1954 to 1958 ", annualPercentageFee: 0.0123696 },
        { id: 174, name: "Mercer SmartPath1959 to 1963 ", annualPercentageFee: 0.0132696 },
        { id: 175, name: "Mercer SmartPath1964 to 1968 ", annualPercentageFee: 0.0135696 },
        { id: 176, name: "Mercer SmartPath1969 to 1973 ", annualPercentageFee: 0.0135696 },
        { id: 177, name: "Mercer SmartPath1974 to 1978 ", annualPercentageFee: 0.0135696 },
        { id: 178, name: "Mercer SmartPath1979 to 1983 ", annualPercentageFee: 0.0135696 },
        { id: 179, name: "Mercer SmartPath1984 to 1988 ", annualPercentageFee: 0.0135696 },
        { id: 180, name: "Mercer SmartPath1989 to 1993 ", annualPercentageFee: 0.0135696 },
        { id: 181, name: "Mercer SmartPath1994 to 1998 ", annualPercentageFee: 0.0135696 },
        { id: 182, name: "Mercer SmartPath1999 to 2003 ", annualPercentageFee: 0.0135696 },
        { id: 183, name: "Mercer SmartPathBorn prior to 1929 ", annualPercentageFee: 0.0121696 },
        { id: 184, name: "Mercer WGSP 1929 to 1933 ", annualPercentageFee: 0.0080696 },
        { id: 185, name: "Mercer WGSP 1934 to 1938 ", annualPercentageFee: 0.0080696 },
        { id: 186, name: "Mercer WGSP 1939 to 1943 ", annualPercentageFee: 0.0080696 },
        { id: 187, name: "Mercer WGSP 1944 to 1948 ", annualPercentageFee: 0.0082696 },
        { id: 188, name: "Mercer WGSP 1949 to 1953 ", annualPercentageFee: 0.0081696 },
        { id: 189, name: "Mercer WGSP 1954 to 1958 ", annualPercentageFee: 0.0082696 },
        { id: 190, name: "Mercer WGSP 1959 to 1963 ", annualPercentageFee: 0.0091696 },
        { id: 191, name: "Mercer WGSP 1964 to 1968 ", annualPercentageFee: 0.0094696 },
        { id: 192, name: "Mercer WGSP 1969 to 1973 ", annualPercentageFee: 0.0094696 },
        { id: 193, name: "Mercer WGSP 1974 to 1978 ", annualPercentageFee: 0.0094696 },
        { id: 194, name: "Mercer WGSP 1979 to 1983 ", annualPercentageFee: 0.0094696 },
        { id: 195, name: "Mercer WGSP 1984 to 1988 ", annualPercentageFee: 0.0094696 },
        { id: 196, name: "Mercer WGSP 1989 to 1993 ", annualPercentageFee: 0.0094696 },
        { id: 197, name: "Mercer WGSP 1994 to 1998 ", annualPercentageFee: 0.0094696 },
        { id: 198, name: "Mercer WGSP 1999 to 2003 ", annualPercentageFee: 0.0094696 },
        { id: 199, name: "Mercer WGSP Born prior to 1929 ", annualPercentageFee: 0.0080696 },
        { id: 200, name: "Virgin Money 1949 to 1953 ", annualPercentageFee: 0.00656 },
        { id: 201, name: "Virgin Money 1954 to 1958 ", annualPercentageFee: 0.00646 },
        { id: 202, name: "Virgin Money 1959 to 1963 ", annualPercentageFee: 0.00656 },
        { id: 203, name: "Virgin Money 1964 to 1968 ", annualPercentageFee: 0.00656 },
        { id: 204, name: "Virgin Money 1969 to 1973 ", annualPercentageFee: 0.00656 },
        { id: 205, name: "Virgin Money 1974 to 1978 ", annualPercentageFee: 0.00656 },
        { id: 206, name: "Virgin Money 1979 to 1983 ", annualPercentageFee: 0.00656 },
        { id: 207, name: "Virgin Money 1984 to 1988 ", annualPercentageFee: 0.00656 },
        { id: 208, name: "Virgin Money 1989 to 1993 ", annualPercentageFee: 0.00656 },
        { id: 209, name: "Virgin Money 1994 to 1998 ", annualPercentageFee: 0.00656 },
        { id: 210, name: "Virgin Money 1999 to 2003 ", annualPercentageFee: 0.00656 },
        { id: 211, name: "Virgin Money 2004 to 2008 ", annualPercentageFee: 0.00656 },
        { id: 212, name: "Virgin Money 2009 to 2013 ", annualPercentageFee: 0.00656 },
        { id: 213, name: "Virgin Money 2014 to 2018 ", annualPercentageFee: 0.00656 },
        { id: 214, name: "Virgin Money BORN PRIOR to 1949 ", annualPercentageFee: 0.00656 },
        { id: 215, name: "Default Lifecycle Aggressive ", annualPercentageFee: 0.01068 },
        { id: 216, name: "Default Lifecycle Balanced ", annualPercentageFee: 0.00938 },
        { id: 217, name: "Default Lifecycle Growth ", annualPercentageFee: 0.01028 },
        { id: 218, name: "Default Lifecycle Stable ", annualPercentageFee: 0.00828 },
        { id: 219, name: "ANZ Smart Choice Super 1940s ", annualPercentageFee: 0.006 },
        { id: 220, name: "ANZ Smart Choice Super 1950s ", annualPercentageFee: 0.006 },
        { id: 221, name: "ANZ Smart Choice Super 1960s ", annualPercentageFee: 0.006 },
        { id: 222, name: "ANZ Smart Choice Super 1970s ", annualPercentageFee: 0.006 },
        { id: 223, name: "ANZ Smart Choice Super 1980s ", annualPercentageFee: 0.006 },
        { id: 224, name: "ANZ Smart Choice Super 1990s ", annualPercentageFee: 0.006 },
        { id: 225, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1940s ", annualPercentageFee: 0.0054 },
        { id: 226, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1950s ", annualPercentageFee: 0.0054 },
        { id: 227, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1960s ", annualPercentageFee: 0.0054 },
        { id: 228, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1970s ", annualPercentageFee: 0.0054 },
        { id: 229, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1980s ", annualPercentageFee: 0.0054 },
        { id: 230, name: "ANZ Smart Choice Super For QBE Management Services PTY LTD and their employees 1990s ", annualPercentageFee: 0.0054 },
        { id: 231, name: "GlidepathAltitude ", annualPercentageFee: 0.01108 },
        { id: 232, name: "GlidepathCruising ", annualPercentageFee: 0.01088 },
        { id: 233, name: "GlidepathDestination ", annualPercentageFee: 0.01058 },
        { id: 234, name: "GlidepathTake Off ", annualPercentageFee: 0.01138 },
        { id: 235, name: "BT Super for Life  Lifetime Employer 1940s LifeStage ", annualPercentageFee: 0.012 },
        { id: 236, name: "BT Super for Life  Lifetime Employer 1950s LifeStage ", annualPercentageFee: 0.0119 },
        { id: 237, name: "BT Super for Life  Lifetime Employer 1960s LifeStage ", annualPercentageFee: 0.0118 },
        { id: 238, name: "BT Super for Life  Lifetime Employer 1970s LifeStage ", annualPercentageFee: 0.0118 },
        { id: 239, name: "BT Super for Life  Lifetime Employer 1980s LifeStage ", annualPercentageFee: 0.0118 },
        { id: 240, name: "BT Super for Life  Lifetime Employer 1990s LifeStage ", annualPercentageFee: 0.0118 },
        { id: 241, name: "BT Super for Life  Lifetime Employer 2000s Lifestage ", annualPercentageFee: 0.0118 },
        { id: 242, name: "Westpac Group Plan 1940s LifeStage ", annualPercentageFee: 0.0075 },
        { id: 243, name: "Westpac Group Plan 1950s LifeStage ", annualPercentageFee: 0.0074 },
        { id: 244, name: "Westpac Group Plan 1960s LifeStage ", annualPercentageFee: 0.0073 },
        { id: 245, name: "Westpac Group Plan 1970s LifeStage ", annualPercentageFee: 0.0073 },
        { id: 246, name: "Westpac Group Plan 1980s LifeStage ", annualPercentageFee: 0.0073 },
        { id: 247, name: "Westpac Group Plan 1990s LifeStage ", annualPercentageFee: 0.0073 },
        { id: 248, name: "Westpac Group Plan 2000s LifeStage ", annualPercentageFee: 0.0073 },
        { id: 249, name: "QSuper LifetimeAspire 1 Group ", annualPercentageFee: 0.007 },
        { id: 250, name: "QSuper LifetimeAspire 2 Group ", annualPercentageFee: 0.007 },
        { id: 251, name: "QSuper LifetimeFocus 1 Group ", annualPercentageFee: 0.0063 },
        { id: 252, name: "QSuper LifetimeFocus 2 Group ", annualPercentageFee: 0.0063 },
        { id: 253, name: "QSuper LifetimeFocus 3 Group ", annualPercentageFee: 0.0063 },
        { id: 254, name: "QSuper LifetimeOutlook ", annualPercentageFee: 0.0079 },
        { id: 255, name: "QSuper LifetimeSustain Group 1 ", annualPercentageFee: 0.0049 },
        { id: 256, name: "QSuper LifetimeSustain Group 2 ", annualPercentageFee: 0.0049 },
        { id: 257, name: "Suncorp Lifestage FundsSuncorp 1934 Prior ", annualPercentageFee: 0.01006 },
        { id: 258, name: "Suncorp Lifestage FundsSuncorp 1935 1939 ", annualPercentageFee: 0.01006 },
        { id: 259, name: "Suncorp Lifestage FundsSuncorp 1940 1944 ", annualPercentageFee: 0.01006 },
        { id: 260, name: "Suncorp Lifestage FundsSuncorp 1945 1949 ", annualPercentageFee: 0.01006 },
        { id: 261, name: "Suncorp Lifestage FundsSuncorp 1950 1954 ", annualPercentageFee: 0.01006 },
        { id: 262, name: "Suncorp Lifestage FundsSuncorp 1955 1959 ", annualPercentageFee: 0.01006 },
        { id: 263, name: "Suncorp Lifestage FundsSuncorp 1960 1964 ", annualPercentageFee: 0.01006 },
        { id: 264, name: "Suncorp Lifestage FundsSuncorp 1965 1969 ", annualPercentageFee: 0.01006 },
        { id: 265, name: "Suncorp Lifestage FundsSuncorp 1970 1974 ", annualPercentageFee: 0.01006 },
        { id: 266, name: "Suncorp Lifestage FundsSuncorp 1975 1979 ", annualPercentageFee: 0.01006 },
        { id: 267, name: "Suncorp Lifestage FundsSuncorp 1980 1984 ", annualPercentageFee: 0.01006 },
        { id: 268, name: "Suncorp Lifestage FundsSuncorp 1985 1989 ", annualPercentageFee: 0.01006 },
        { id: 269, name: "Suncorp Lifestage FundsSuncorp 1990 1994 ", annualPercentageFee: 0.01006 },
        { id: 270, name: "Suncorp Lifestage FundsSuncorp 1995 1999 ", annualPercentageFee: 0.01006 },
        { id: 271, name: "Suncorp Lifestage FundsSuncorp 2000 2004 ", annualPercentageFee: 0.01006 },
        { id: 272, name: "Sunsuper for LifeAge 54 and under ", annualPercentageFee: 0.00736 },
        { id: 273, name: "Sunsuper for LifeAge 55 ", annualPercentageFee: 0.00736 },
        { id: 274, name: "Sunsuper for LifeAge 56 ", annualPercentageFee: 0.00736 },
        { id: 275, name: "Sunsuper for LifeAge 57 ", annualPercentageFee: 0.00736 },
        { id: 276, name: "Sunsuper for LifeAge 58 ", annualPercentageFee: 0.00736 },
        { id: 277, name: "Sunsuper for LifeAge 59 ", annualPercentageFee: 0.00736 },
        { id: 278, name: "Sunsuper for LifeAge 60 ", annualPercentageFee: 0.00736 },
        { id: 279, name: "Sunsuper for LifeAge 61 ", annualPercentageFee: 0.00736 },
        { id: 280, name: "Sunsuper for LifeAge 62 ", annualPercentageFee: 0.00736 },
        { id: 281, name: "Sunsuper for LifeAge 63 ", annualPercentageFee: 0.00736 },
        { id: 282, name: "Sunsuper for LifeAge 64 ", annualPercentageFee: 0.00736 },
        { id: 283, name: "Sunsuper for LifeAge 65 and over ", annualPercentageFee: 0.00736 },
        { id: 284, name: "AMP No.3AMP SDF 1950s ", annualPercentageFee: 0.0145472 },
        { id: 285, name: "AMP No.3AMP SDF 1960s ", annualPercentageFee: 0.0150472 },
        { id: 286, name: "AMP No.3AMP SDF 1970s ", annualPercentageFee: 0.0155472 },
        { id: 287, name: "AMP No.3AMP SDF 1980s ", annualPercentageFee: 0.0164472 },
        { id: 288, name: "AMP No.3AMP SDF 1990s ", annualPercentageFee: 0.0164472 },
        { id: 289, name: "AMP No.3AMP SDF Capital Stable ", annualPercentageFee: 0.0143472 },
        { id: 290, name: "Tasplan Ontrack Build ", annualPercentageFee: 0.00926 },
        { id: 291, name: "Tasplan Ontrack Control ", annualPercentageFee: 0.00856 },
        { id: 292, name: "Tasplan Ontrack Maintain ", annualPercentageFee: 0.00786 },
        { id: 293, name: "Tasplan Ontrack Sustain ", annualPercentageFee: 0.00896 },
        { id: 294, name: "Telstra Super Balanced ", annualPercentageFee: 0.01076 },
        { id: 295, name: "Telstra Super Conservative ", annualPercentageFee: 0.00816 },
        { id: 296, name: "Telstra Super Growth ", annualPercentageFee: 0.01096 },
        { id: 297, name: "Bendigo Balanced Index Fund ", annualPercentageFee: 0.00626 },
        { id: 298, name: "Bendigo Conservative Index Fund ", annualPercentageFee: 0.00608 },
        { id: 299, name: "Bendigo Growth Index Fund ", annualPercentageFee: 0.00654 },
        { id: 300, name: "BT Business 1940s LifeStage ", annualPercentageFee: 0.0118 },
        { id: 301, name: "BT Business 1950s LifeStage ", annualPercentageFee: 0.0119 },
        { id: 302, name: "BT Business 1960s LifeStage ", annualPercentageFee: 0.0119 },
        { id: 303, name: "BT Business 1970s LifeStage ", annualPercentageFee: 0.012 },
        { id: 304, name: "BT Business 1980s LifeStage ", annualPercentageFee: 0.012 },
        { id: 305, name: "BT Business 1990s LifeStage ", annualPercentageFee: 0.012 },
        { id: 306, name: "BT Business 2000s LifeStage", annualPercentageFee: 0.012 }
    ];

    $scope.fundsOther = [{ id: 307, name: "Asgard Infinity Ewrap", contributionFee: 0, adminFee: 0, indirectCostRation: 1.16 },
        { id: 308, name: "SMSI Non Advice", contributionFee: 0, adminFee: 2499, indirectCostRation: 0 },
        { id: 309, name: "SMSI Advice", contributionFee: 0, adminFee: 259, indirectCostRation: 0.53 },
        { id: 310, name: "Australian Super direct share portfolio platform", contributionFee: 0, adminFee: 2673, indirectCostRation: 0 },
        { id: 311, name: "Investor's own", contributionFee: 0.01134, adminFee: 0, indirectCostRation: 0 }
    ];

    $scope.fundsObArray=[$scope.fundsMySuper,$scope.fundsLifestage,$scope.fundsOther];

    $scope.fundsOb1 = $scope.fundsMySuper;
    $scope.fundsOb2 = $scope.fundsMySuper;
	
   	$scope.fundA = $scope.fundsOb[0];
    $scope.fundB = $scope.fundsOb[1];
    $scope.netReturn = $scope.investOptions[0].netReturn;
    var tempFundA = $scope.fundsOb[0];
    var tempFundB = $scope.fundsOb[1];
    $scope.fundNotFoundA = false;
    $scope.fundNotFoundB = false;
    $scope.fundNameA = "Fund A";
    $scope.fundNameB = "Fund B";
	
	$scope.privateSchoolObjects = [{ id: 0, name: "Sydney Grammar School Darlinghurst", address: "College St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 5489, annualFee: 32644 },
        { id: 1, name: "PLC Sydney", address: "Boundary St- Croydon NSW 2132", state: "NSW", upfrontFee: 3415, annualFee: 24411 },
        { id: 2, name: "SCEGGS Darlinghurst", address: "215 Forbes St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 4950, annualFee: 28348 },
        { id: 3, name: "The Scotts College Sydney", address: "Victoria Rd- Bellevue Hill NSW 2023", state: "NSW", upfrontFee: 5500, annualFee: 33925 },
        { id: 4, name: "Pymble Ladies College", address: "Avon Rd- Pymble NSW 2073", state: "NSW", upfrontFee: 3430, annualFee: 24002 },
        { id: 5, name: "Ascham School", address: "188 New South Head Rd- Edgecliff- NSW 2027", state: "NSW", upfrontFee: 6300, annualFee: 32000 },
        { id: 6, name: "Abbotsleigh", address: "1666 Pacific Highway- Wahroonga- NSW 2076", state: "NSW", upfrontFee: 1970, annualFee: 28640 },
        { id: 7, name: "St Aloysius College", address: "47 Upper Pitt Street- Milsons Point 2061 NSW Australia", state: "NSW", upfrontFee: 2650, annualFee: 16278 },
        { id: 8, name: "Meridan School", address: "10-12 Redmyre Road- Strathfield NSW 2135", state: "NSW", upfrontFee: 1825, annualFee: 28340 },
        { id: 9, name: "Sydney Church of England Grammar School (SHORE)", address: "Blue Street- North Sydney- NSW- 2060- Australia", state: "NSW", upfrontFee: 2400, annualFee: 24126 },
        { id: 10, name: "Cranbrook School", address: "5 Victoria Road- Bellevue Hill NSW 2023 Australia", state: "NSW", upfrontFee: 7300, annualFee: 28325 },
        { id: 11, name: "Knox Grammar School", address: "7 Woodville Ave- Wahroonga 2076 NSW Australia", state: "NSW", upfrontFee: 3000, annualFee: 29430 },
        { id: 12, name: "The Kings School", address: "87-129 PENNANT HILLS ROAD- NORTH PARRAMATTA- NSW 2151- AUSTRALIA", state: "NSW", upfrontFee: 3850, annualFee: 25345 },
        { id: 13, name: "ST Ignatius' College", address: "1 Tambourine Bay Road- NSW Lane Cove", state: "NSW", upfrontFee: 4530, annualFee: 23880 },
        { id: 14, name: "St Joseph's College", address: "Mark Street- Hunters Hill- NSW 2110", state: "NSW", upfrontFee: 3300, annualFee: 29040 },
        { id: 15, name: "Loreto Normanhurst", address: "91-93 Pennant Hills Road- Normanhurst- Sydney- NSW 2076", state: "NSW", upfrontFee: 3330, annualFee: 19179 },
        { id: 16, name: "Loreto Kirribilli", address: "85 Carabella Street- Kirribilli NSW 2061- Australia", state: "NSW", upfrontFee: 3220, annualFee: 15645 },
        { id: 17, name: "Queenswood School for Girls", address: "47 Mandolong Rd- Mosman NSW 2088", state: "NSW", upfrontFee: 4220, annualFee: 25171 },
        { id: 18, name: "Roseville College", address: "27 Bancroft Avenue Roseville NSW 2069 Australia", state: "NSW", upfrontFee: 1220, annualFee: 20735 },
        { id: 19, name: "Parramatta Marist High School", address: "2 DARCY ROAD- WESTMEAD NSW AUSTRALIA 2145", state: "NSW", upfrontFee: 1220, annualFee: 4473 },
        { id: 20, name: "Barker College", address: "91 Pacific Highway Hornsby NSW 2077", state: "NSW", upfrontFee: 3800, annualFee: 25140 },
        { id: 21, name: "Ruyton Girls' School, Kew.", address: "12 Selbourne Rd- Kew VIC 3101", state: "VIC", upfrontFee: 1610, annualFee: 22360 },
        { id: 22, name: "Shelford Girls' Grammar, Caulfield.", address: "3 Hood Cres- Caulfield VIC 3161", state: "VIC", upfrontFee: 1100, annualFee: 25518 },
        { id: 23, name: "Fintona Girls' School, Balwyn.", address: "79 Balwyn Rd- Balwyn VIC 3103", state: "VIC", upfrontFee: 1150, annualFee: 20399 },
        { id: 24, name: "Lauriston Girls' School, Aramadale.", address: "38 Huntingtower Rd- Armadale VIC 3143", state: "VIC", upfrontFee: 1100, annualFee: 27160 },
        { id: 25, name: "Loreto Mandeville Hall, Toorak.", address: "10 Mandeville Cres- Toorak VIC 3142", state: "VIC", upfrontFee: 1900, annualFee: 22398 },
        { id: 26, name: "Prebyterian Ladies' College, Burwood.", address: "141 Burwood Hwy- Burwood VIC 3125", state: "VIC", upfrontFee: 1300, annualFee: 23479 },
        { id: 27, name: "Camberwell Girls' Grammar School, Canterbury.", address: " 2 Torrington St- Canterbury VIC 3126", state: "VIC", upfrontFee: 1100, annualFee: 19051 },
        { id: 28, name: "Melbourne Girls Grammar School, South Yarra.", address: "86 Anderson St- South Yarra VIC 3141", state: "VIC", upfrontFee: 1650, annualFee: 27746 },
        { id: 29, name: "Mentone Girls' Grammar School, Mentone.", address: "11 Mentone Parade- Mentone VIC 3194", state: "VIC", upfrontFee: 1100, annualFee: 22354 },
        { id: 30, name: "Korowa Anglican Girls' School Glen Iris.", address: "10-16 Ranfurlie Cres- Glen Iris VIC 3146", state: "VIC", upfrontFee: 900, annualFee: 27138 },
        { id: 31, name: "Camberwell Grammar School, Canterbury.", address: "55 Mont Albert Rd- Canterbury VIC 3126", state: "VIC", upfrontFee: 1330, annualFee: 25600 },
        { id: 32, name: "Scotch College, Hawthorn. ", address: "1 Morrison St- Hawthorn VIC 3122", state: "VIC", upfrontFee: 1600, annualFee: 29912 },
        { id: 33, name: "Melbourne Grammar School, South Yarra.", address: "355 St Kilda Rd- Melbourne VIC 3004", state: "VIC", upfrontFee: 3900, annualFee: 24885 },
        { id: 34, name: "Caulfield Grammar School, St Kilda", address: "217 Glen Eira Road- East St. Kilda- Melbourne- Victoria 3183", state: "VIC", upfrontFee: 2100, annualFee: 23789 },
        { id: 35, name: "Haileybury College, Keysborough.", address: "855 Springvale Road Keysborough VIC 3173", state: "VIC", upfrontFee: 2500, annualFee: 24702 },
        { id: 36, name: "Xavier College, Kew.", address: "135 Barkers Road- Melbourne- Kew- Victoria", state: "VIC", upfrontFee: 945, annualFee: 21957 },
        { id: 37, name: "Trinity Grammar School, Kew.", address: "40 Charles St- Kew- Melbourne Victoria 3101", state: "VIC", upfrontFee: 2360, annualFee: 26349 },
        { id: 38, name: "St Kevin's College, Toorak.", address: "31 Moonga Rd- Toorak VIC 3142", state: "VIC", upfrontFee: 3000, annualFee: 16290 },
        { id: 39, name: "Brighton Grammar School, Brighton", address: "90 Outer Cres- Brighton VIC 3186", state: "VIC", upfrontFee: 2200, annualFee: 25247 },
        { id: 40, name: "Firbank Grammar School, Brighton", address: "51 Outer Crescent- Brighton VIC 3186", state: "VIC", upfrontFee: 1100, annualFee: 24769 },
        { id: 41, name: "St Leonard's College, Brighton East.", address: "163 South Road- Brighton East VIC 3187", state: "VIC", upfrontFee: 1800, annualFee: 23415 },
        { id: 42, name: "Brisbane Grammar School", address: "24 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2550, annualFee: 23000 },
        { id: 43, name: "Brisbane Girls Grammer School", address: "70 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2040, annualFee: 22520 },
        { id: 44, name: "Ormiston College", address: "97 Dundas St W- Ormiston QLD 4160", state: "QLD", upfrontFee: 795, annualFee: 2527 },
        { id: 45, name: "Somerville House", address: "17 Graham St- South Brisbane QLD 4101", state: "QLD", upfrontFee: 1530, annualFee: 18292 },
        { id: 46, name: "Brisbane Boys College", address: "Kensington Terrace- Toowong QLD 4066", state: "QLD", upfrontFee: 1960, annualFee: 18434 },
        { id: 47, name: "St Aidan's Anglican Girls School", address: "11 Ruthven St- Corinda QLD 4075", state: "QLD", upfrontFee: 1300, annualFee: 17272 },
        { id: 48, name: "Anglican Church Grammar School", address: "Oaklands Parade- East Brisbane QLD 4169", state: "QLD", upfrontFee: 1930, annualFee: 18813 },
        { id: 49, name: "Clayfield College", address: "23 Gregory Street- Clayfield QLD 4011", state: "QLD", upfrontFee: 1135, annualFee: 17031 },
        { id: 50, name: "Cannon Hill Anglican College", address: "Junction Rd- Cannon Hill QLD 4170", state: "QLD", upfrontFee: 1250, annualFee: 10386 },
        { id: 51, name: "Sheldon College", address: "Taylor Road- Sheldon- QLD 4157", state: "QLD", upfrontFee: 660, annualFee: 11479 },
        { id: 52, name: "St Margarets Anglican Girls School", address: "11 Petrie St- Ascot QLD 4007", state: "QLD", upfrontFee: 1220, annualFee: 17762 },
        { id: 53, name: "Hillbrook Anglican School", address: "45 Hurdcotte Street Enoggera QLD 4051", state: "QLD", upfrontFee: 1610, annualFee: 11092 },
        { id: 54, name: "st peters lutheran college", address: "66 Harts Rd- Indooroopilly QLD 4068", state: "QLD", upfrontFee: 1100, annualFee: 15806 },
        { id: 55, name: "Moreton Bay College", address: "450 Wondall Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 12532 },
        { id: 56, name: "St Rita's College, Clayfield", address: "41 Enderley Rd- Clayfield QLD 4011", state: "QLD", upfrontFee: 1100, annualFee: 7120 },
        { id: 57, name: "The Southport School", address: "2 Winchester St- Southport QLD 4215", state: "QLD", upfrontFee: 1500, annualFee: 15030 },
        { id: 58, name: "St Joseph's College Gregory Terrace", address: "Gregory Terrace- Brisbane- QLD 4000- Australia", state: "QLD", upfrontFee: 2420, annualFee: 8215 },
        { id: 59, name: "The Lakes College", address: "2 College St- North Lakes QLD 4509", state: "QLD", upfrontFee: 500, annualFee: 8415 },
        { id: 60, name: "Redeemer Lutheran College", address: "745 Rochedale Rd- Rochedale QLD 4123", state: "QLD", upfrontFee: 700, annualFee: 8979 },
        { id: 61, name: "Moreton Bay Boys College", address: "302 Manly Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 11023 },
        { id: 62, name: "Wilderness School, Medindie.", address: "30 Hawkers Rd- Medindie SA 5081", state: "SA", upfrontFee: 1050, annualFee: 18888 },
        { id: 63, name: "St Peter's College ", address: "57 Hackney Rd- Hackney SA 5069", state: "SA", upfrontFee: 2600, annualFee: 20520 },
        { id: 64, name: "St Peter's Girls Collegiate Girls' School", address: "Stonyfell Rd- Stonyfell SA 5066", state: "SA", upfrontFee: 970, annualFee: 17285 },
        { id: 65, name: "Walford Anglican School for Girls", address: "316 Unley Rd- Hyde Park SA 5061", state: "SA", upfrontFee: 1095, annualFee: 19301 },
        { id: 66, name: "Prince Alfred College", address: "23 Dequetteville Terrace- Kent Town SA 5067", state: "SA", upfrontFee: 1100, annualFee: 17319 },
        { id: 67, name: "Seymour College", address: "546 Portrush Rd- Glen Osmond SA 5064", state: "SA", upfrontFee: 1050, annualFee: 19679 },
        { id: 68, name: "Pulteney Grammar School", address: "190 South Terrace ADELAIDE SA 5000", state: "SA", upfrontFee: 850, annualFee: 18946 },
        { id: 69, name: "St Aloysius College, Adelaide", address: "53 Wakefield St- Adelaide SA 5000", state: "SA", upfrontFee: 600, annualFee: 7636 },
        { id: 70, name: "St Dominics Priory College", address: "119/139 Molesworth St- North Adelaide SA 5006", state: "SA", upfrontFee: 0, annualFee: 6674 },
        { id: 71, name: "St John's Grammar School", address: "29 Gloucester Ave- Belair SA 5052", state: "SA", upfrontFee: 688, annualFee: 11811 },
        { id: 72, name: "Woodcroft College", address: "143-173 Bains Rd- Morphett Vale SA 5162", state: "SA", upfrontFee: 755, annualFee: 6297 },
        { id: 73, name: "St Ignatious College, Adelaide", address: "2 Manresa Ct- Athelstone SA 5076", state: "SA", upfrontFee: 975, annualFee: 14013 },
        { id: 74, name: "Pedare Christian College", address: "2-30 Surrey Farm Dr- Golden Grove SA 5125", state: "SA", upfrontFee: 150, annualFee: 7502 },
        { id: 75, name: "Westminster School", address: "1-27 Alison Avenue- Marion- South Australia ", state: "SA", upfrontFee: 800, annualFee: 17932 },
        { id: 76, name: "Kings Baptist Grammar School", address: "no address", state: "SA", upfrontFee: 175, annualFee: 0 },
        { id: 77, name: "Scotch College Adelaide", address: "Carruth Road- Torrens Park South Australia 5062", state: "SA", upfrontFee: 1150, annualFee: 19668 },
        { id: 78, name: "Concordia College", address: "45 Cheltenham St- Highgate SA 5063", state: "SA", upfrontFee: 75, annualFee: 8820 },
        { id: 79, name: "Pembroke School", address: "342 The Parade- Kensington Park SA 5068", state: "SA", upfrontFee: 860, annualFee: 19690 },
        { id: 80, name: "Loreto College, Marryatville", address: "316 Portrush Rd- Marryatville SA 5068", state: "SA", upfrontFee: 745, annualFee: 14664 },
        { id: 81, name: "Trinity College, Gawler", address: "Alexander Ave- Evanston South SA 5116", state: "SA", upfrontFee: 540, annualFee: 4622 },
        { id: 82, name: "Hale School", address: "160 Hale Rd- Wembley Downs WA 6019", state: "WA", upfrontFee: 8250, annualFee: 21450 },
        { id: 83, name: "Christ Church Grammar School", address: "Queenslea Dr- Claremont WA 6010", state: "WA", upfrontFee: 6700, annualFee: 23088 },
        { id: 84, name: "All Saints College", address: "Ewing Ave.- Bull Creek WA 6149", state: "WA", upfrontFee: 5423, annualFee: 16534 },
        { id: 85, name: "St Mary's Anglican Girls School", address: "75 Elliott Rd- Karrinyup WA 6018", state: "WA", upfrontFee: 5545, annualFee: 18394 },
        { id: 86, name: "St Hilda's Anglican Girls School", address: "26 Bay View Terrace- Mosman Park WA 6012", state: "WA", upfrontFee: 4959, annualFee: 20284 },
        { id: 87, name: "Presbyterian Ladies' College, Perth", address: "14 McNeil St- Peppermint Grove WA 6011", state: "WA", upfrontFee: 4950, annualFee: 20982 },
        { id: 88, name: "Perth College", address: "31 Lawley Crescent- Mount Lawley WA 6050", state: "WA", upfrontFee: 5742, annualFee: 18701 },
        { id: 89, name: "Guildford Grammar School ", address: "11 Terrace Rd- Guildford WA 6055", state: "WA", upfrontFee: 2925, annualFee: 18073 },
        { id: 90, name: "Penrhos College", address: "6 Morrison Street- Como WA 6152", state: "WA", upfrontFee: 5489, annualFee: 19442 },
        { id: 91, name: "Scotch College, Perth", address: "76 Shenton Rd- Swanbourne WA 6010", state: "WA", upfrontFee: 6687, annualFee: 23499 },
        { id: 92, name: "John XXIII College, Perth", address: "Mooro Dr- Mount Claremont WA 6010", state: "WA", upfrontFee: 2110, annualFee: 7710 },
        { id: 93, name: "Santa Maria College", address: "18 Stoneham Rd- Attadale WA 6156", state: "WA", upfrontFee: 1020, annualFee: 10521 },
        { id: 94, name: "Wesley College, Perth", address: "40 Coode St- South Perth WA 6151", state: "WA", upfrontFee: 7276, annualFee: 20001 },
        { id: 95, name: "Methodist Ladies College, Perth", address: "356 Stirling Hwy- Claremont WA 6010", state: "WA", upfrontFee: 5320, annualFee: 21203 },
        { id: 96, name: "St Marks Anglican Community School", address: "St Marks Dr- Hillarys WA 6025", state: "WA", upfrontFee: 2030, annualFee: 7251 },
        { id: 97, name: "Aquinas College, Perth", address: "58 Mount Henry Rd- Salter Point WA 6152", state: "WA", upfrontFee: 2832, annualFee: 14013 },
        { id: 98, name: "Trinity College, Perth", address: "2 Trinity Ave- East Perth WA 6004", state: "WA", upfrontFee: 2243, annualFee: 13602 },
        { id: 99, name: "Sacred Heart College", address: "Hocking Parade- Sorrento WA 6020", state: "WA", upfrontFee: 805, annualFee: 8220 },
        { id: 100, name: "Newman College Perth", address: "216 Empire Ave- Churchlands WA 6018", state: "WA", upfrontFee: 1110, annualFee: 5715 },
        { id: 101, name: "Kingsway Christian College", address: "157 Kingsway- Darch WA 6065", state: "WA", upfrontFee: 1320, annualFee: 7288 },
        { id: 102, name: "Canberra Grammar School", address: "40 Monaro Cres- Red Hill ACT 2603", state: "ACT", upfrontFee: 2975, annualFee: 18753 },
        { id: 103, name: "Radford College", address: "1 College St- Bruce ACT 2617", state: "ACT", upfrontFee: 950, annualFee: 12307 },
        { id: 104, name: "Canberra Girls Grammar School", address: "Melbourne Ave- Deakin ACT 2600", state: "ACT", upfrontFee: 150, annualFee: 16942 },
        { id: 105, name: "Burgmann Anglican School", address: "Gungahlin Dr & The Valley Avenue- Gungahlin ACT 291", state: "ACT", upfrontFee: 875, annualFee: 8413 },
        { id: 106, name: "Brindabella Christian College", address: "136 Brigalow St- Lyneham ACT 2602", state: "ACT", upfrontFee: 700, annualFee: 5874 },
        { id: 107, name: "Marist College", address: "27 Marr St- Pearce ACT 2607", state: "ACT", upfrontFee: 400, annualFee: 8644 },
        { id: 108, name: "Orana Steiner School", address: "Unwin Place- ACT 2611", state: "ACT", upfrontFee: 550, annualFee: 6467 },
        { id: 109, name: "Merici College", address: "Wise St- Braddon ACT 2612", state: "ACT", upfrontFee: 50, annualFee: 6277 },
        { id: 110, name: "Emmaus Christian School", address: "73 Davenport St- Dickson ACT 2602", state: "ACT", upfrontFee: 300, annualFee: 6292 },
        { id: 111, name: "The Friends School, Hobart", address: "23 Commercial Rd- North Hobart TAS 7000", state: "TAS", upfrontFee: 1200, annualFee: 14254 },
        { id: 112, name: "Fahan School", address: "Fisher Avenue- Lower Sandy Bay TAS 7005", state: "TAS", upfrontFee: 2100, annualFee: 12412 },
        { id: 113, name: "St Michael's Collegiate School", address: "218 Macquarie St- Hobart TAS 7000", state: "TAS", upfrontFee: 1110, annualFee: 12908 },
        { id: 114, name: "The Hutchins School", address: "71 Nelson Rd- Sandy Bay TAS 7005", state: "TAS", upfrontFee: 1610, annualFee: 13400 },
        { id: 115, name: "St Mary's College, Hobart", address: "164 Harrington St- Hobart TAS 7000", state: "TAS", upfrontFee: 0, annualFee: 3958 },
        { id: 116, name: "Launceston Chruch Grammar School", address: "36 Button St- Mowbray TAS 7248", state: "TAS", upfrontFee: 100, annualFee: 12900 },
        { id: 117, name: "Launceston Christian School", address: " 452A W Tamar Hwy- Riverside TAS 7250", state: "TAS", upfrontFee: 1300, annualFee: 4802 }
    ];

    $scope.privateSchoolObjects_NSW = [{ id: 0, name: "Sydney Grammar School Darlinghurst", address: "College St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 5489, annualFee: 32644 },
        { id: 1, name: "PLC Sydney", address: "Boundary St- Croydon NSW 2132", state: "NSW", upfrontFee: 3415, annualFee: 24411 },
        { id: 2, name: "SCEGGS Darlinghurst", address: "215 Forbes St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 4950, annualFee: 28348 },
        { id: 3, name: "The Scotts College Sydney", address: "Victoria Rd- Bellevue Hill NSW 2023", state: "NSW", upfrontFee: 5500, annualFee: 33925 },
        { id: 4, name: "Pymble Ladies College", address: "Avon Rd- Pymble NSW 2073", state: "NSW", upfrontFee: 3430, annualFee: 24002 },
        { id: 5, name: "Ascham School", address: "188 New South Head Rd- Edgecliff- NSW 2027", state: "NSW", upfrontFee: 6300, annualFee: 32000 },
        { id: 6, name: "Abbotsleigh", address: "1666 Pacific Highway- Wahroonga- NSW 2076", state: "NSW", upfrontFee: 1970, annualFee: 28640 },
        { id: 7, name: "St Aloysius College", address: "47 Upper Pitt Street- Milsons Point 2061 NSW Australia", state: "NSW", upfrontFee: 2650, annualFee: 16278 },
        { id: 8, name: "Meridan School", address: "10-12 Redmyre Road- Strathfield NSW 2135", state: "NSW", upfrontFee: 1825, annualFee: 28340 },
        { id: 9, name: "Sydney Church of England Grammar School (SHORE)", address: "Blue Street- North Sydney- NSW- 2060- Australia", state: "NSW", upfrontFee: 2400, annualFee: 24126 },
        { id: 10, name: "Cranbrook School", address: "5 Victoria Road- Bellevue Hill NSW 2023 Australia", state: "NSW", upfrontFee: 7300, annualFee: 28325 },
        { id: 11, name: "Knox Grammar School", address: "7 Woodville Ave- Wahroonga 2076 NSW Australia", state: "NSW", upfrontFee: 3000, annualFee: 29430 },
        { id: 12, name: "The Kings School", address: "87-129 PENNANT HILLS ROAD- NORTH PARRAMATTA- NSW 2151- AUSTRALIA", state: "NSW", upfrontFee: 3850, annualFee: 25345 },
        { id: 13, name: "ST Ignatius' College", address: "1 Tambourine Bay Road- NSW Lane Cove", state: "NSW", upfrontFee: 4530, annualFee: 23880 },
        { id: 14, name: "St Joseph's College", address: "Mark Street- Hunters Hill- NSW 2110", state: "NSW", upfrontFee: 3300, annualFee: 29040 },
        { id: 15, name: "Loreto Normanhurst", address: "91-93 Pennant Hills Road- Normanhurst- Sydney- NSW 2076", state: "NSW", upfrontFee: 3330, annualFee: 19179 },
        { id: 16, name: "Loreto Kirribilli", address: "85 Carabella Street- Kirribilli NSW 2061- Australia", state: "NSW", upfrontFee: 3220, annualFee: 15645 },
        { id: 17, name: "Queenswood School for Girls", address: "47 Mandolong Rd- Mosman NSW 2088", state: "NSW", upfrontFee: 4220, annualFee: 25171 },
        { id: 18, name: "Roseville College", address: "27 Bancroft Avenue Roseville NSW 2069 Australia", state: "NSW", upfrontFee: 1220, annualFee: 20735 },
        { id: 19, name: "Parramatta Marist High School", address: "2 DARCY ROAD- WESTMEAD NSW AUSTRALIA 2145", state: "NSW", upfrontFee: 1220, annualFee: 4473 },
        { id: 20, name: "Barker College", address: "91 Pacific Highway Hornsby NSW 2077", state: "NSW", upfrontFee: 3800, annualFee: 25140 }
    ];
    $scope.privateSchoolObjects_VIC = [{ id: 21, name: "Ruyton Girls' School, Kew.", address: "12 Selbourne Rd- Kew VIC 3101", state: "VIC", upfrontFee: 1610, annualFee: 22360 },
        { id: 22, name: "Shelford Girls' Grammar, Caulfield.", address: "3 Hood Cres- Caulfield VIC 3161", state: "VIC", upfrontFee: 1100, annualFee: 25518 },
        { id: 23, name: "Fintona Girls' School, Balwyn.", address: "79 Balwyn Rd- Balwyn VIC 3103", state: "VIC", upfrontFee: 1150, annualFee: 20399 },
        { id: 24, name: "Lauriston Girls' School, Aramadale.", address: "38 Huntingtower Rd- Armadale VIC 3143", state: "VIC", upfrontFee: 1100, annualFee: 27160 },
        { id: 25, name: "Loreto Mandeville Hall, Toorak.", address: "10 Mandeville Cres- Toorak VIC 3142", state: "VIC", upfrontFee: 1900, annualFee: 22398 },
        { id: 26, name: "Prebyterian Ladies' College, Burwood.", address: "141 Burwood Hwy- Burwood VIC 3125", state: "VIC", upfrontFee: 1300, annualFee: 23479 },
        { id: 27, name: "Camberwell Girls' Grammar School, Canterbury.", address: " 2 Torrington St- Canterbury VIC 3126", state: "VIC", upfrontFee: 1100, annualFee: 19051 },
        { id: 28, name: "Melbourne Girls Grammar School, South Yarra.", address: "86 Anderson St- South Yarra VIC 3141", state: "VIC", upfrontFee: 1650, annualFee: 27746 },
        { id: 29, name: "Mentone Girls' Grammar School, Mentone.", address: "11 Mentone Parade- Mentone VIC 3194", state: "VIC", upfrontFee: 1100, annualFee: 22354 },
        { id: 30, name: "Korowa Anglican Girls' School Glen Iris.", address: "10-16 Ranfurlie Cres- Glen Iris VIC 3146", state: "VIC", upfrontFee: 900, annualFee: 27138 },
        { id: 31, name: "Camberwell Grammar School, Canterbury.", address: "55 Mont Albert Rd- Canterbury VIC 3126", state: "VIC", upfrontFee: 1330, annualFee: 25600 },
        { id: 32, name: "Scotch College, Hawthorn. ", address: "1 Morrison St- Hawthorn VIC 3122", state: "VIC", upfrontFee: 1600, annualFee: 29912 },
        { id: 33, name: "Melbourne Grammar School, South Yarra.", address: "355 St Kilda Rd- Melbourne VIC 3004", state: "VIC", upfrontFee: 3900, annualFee: 24885 },
        { id: 34, name: "Caulfield Grammar School, St Kilda", address: "217 Glen Eira Road- East St. Kilda- Melbourne- Victoria 3183", state: "VIC", upfrontFee: 2100, annualFee: 23789 },
        { id: 35, name: "Haileybury College, Keysborough.", address: "855 Springvale Road Keysborough VIC 3173", state: "VIC", upfrontFee: 2500, annualFee: 24702 },
        { id: 36, name: "Xavier College, Kew.", address: "135 Barkers Road- Melbourne- Kew- Victoria", state: "VIC", upfrontFee: 945, annualFee: 21957 },
        { id: 37, name: "Trinity Grammar School, Kew.", address: "40 Charles St- Kew- Melbourne Victoria 3101", state: "VIC", upfrontFee: 2360, annualFee: 26349 },
        { id: 38, name: "St Kevin's College, Toorak.", address: "31 Moonga Rd- Toorak VIC 3142", state: "VIC", upfrontFee: 3000, annualFee: 16290 },
        { id: 39, name: "Brighton Grammar School, Brighton", address: "90 Outer Cres- Brighton VIC 3186", state: "VIC", upfrontFee: 2200, annualFee: 25247 },
        { id: 40, name: "Firbank Grammar School, Brighton", address: "51 Outer Crescent- Brighton VIC 3186", state: "VIC", upfrontFee: 1100, annualFee: 24769 },
        { id: 41, name: "St Leonard's College, Brighton East.", address: "163 South Road- Brighton East VIC 3187", state: "VIC", upfrontFee: 1800, annualFee: 23415 }
    ];
    $scope.privateSchoolObjects_QLD = [{ id: 42, name: "Brisbane Grammar School", address: "24 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2550, annualFee: 23000 },
        { id: 43, name: "Brisbane Girls Grammer School", address: "70 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2040, annualFee: 22520 },
        { id: 44, name: "Ormiston College", address: "97 Dundas St W- Ormiston QLD 4160", state: "QLD", upfrontFee: 795, annualFee: 2527 },
        { id: 45, name: "Somerville House", address: "17 Graham St- South Brisbane QLD 4101", state: "QLD", upfrontFee: 1530, annualFee: 18292 },
        { id: 46, name: "Brisbane Boys College", address: "Kensington Terrace- Toowong QLD 4066", state: "QLD", upfrontFee: 1960, annualFee: 18434 },
        { id: 47, name: "St Aidan's Anglican Girls School", address: "11 Ruthven St- Corinda QLD 4075", state: "QLD", upfrontFee: 1300, annualFee: 17272 },
        { id: 48, name: "Anglican Church Grammar School", address: "Oaklands Parade- East Brisbane QLD 4169", state: "QLD", upfrontFee: 1930, annualFee: 18813 },
        { id: 49, name: "Clayfield College", address: "23 Gregory Street- Clayfield QLD 4011", state: "QLD", upfrontFee: 1135, annualFee: 17031 },
        { id: 50, name: "Cannon Hill Anglican College", address: "Junction Rd- Cannon Hill QLD 4170", state: "QLD", upfrontFee: 1250, annualFee: 10386 },
        { id: 51, name: "Sheldon College", address: "Taylor Road- Sheldon- QLD 4157", state: "QLD", upfrontFee: 660, annualFee: 11479 },
        { id: 52, name: "St Margarets Anglican Girls School", address: "11 Petrie St- Ascot QLD 4007", state: "QLD", upfrontFee: 1220, annualFee: 17762 },
        { id: 53, name: "Hillbrook Anglican School", address: "45 Hurdcotte Street Enoggera QLD 4051", state: "QLD", upfrontFee: 1610, annualFee: 11092 },
        { id: 54, name: "st peters lutheran college", address: "66 Harts Rd- Indooroopilly QLD 4068", state: "QLD", upfrontFee: 1100, annualFee: 15806 },
        { id: 55, name: "Moreton Bay College", address: "450 Wondall Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 12532 },
        { id: 56, name: "St Rita's College, Clayfield", address: "41 Enderley Rd- Clayfield QLD 4011", state: "QLD", upfrontFee: 1100, annualFee: 7120 },
        { id: 57, name: "The Southport School", address: "2 Winchester St- Southport QLD 4215", state: "QLD", upfrontFee: 1500, annualFee: 15030 },
        { id: 58, name: "St Joseph's College Gregory Terrace", address: "Gregory Terrace- Brisbane- QLD 4000- Australia", state: "QLD", upfrontFee: 2420, annualFee: 8215 },
        { id: 59, name: "The Lakes College", address: "2 College St- North Lakes QLD 4509", state: "QLD", upfrontFee: 500, annualFee: 8415 },
        { id: 60, name: "Redeemer Lutheran College", address: "745 Rochedale Rd- Rochedale QLD 4123", state: "QLD", upfrontFee: 700, annualFee: 8979 },
        { id: 61, name: "Moreton Bay Boys College", address: "302 Manly Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 11023 }
    ];
    $scope.privateSchoolObjects_SA = [{ id: 62, name: "Wilderness School, Medindie.", address: "30 Hawkers Rd- Medindie SA 5081", state: "SA", upfrontFee: 1050, annualFee: 18888 },
        { id: 63, name: "St Peter's College ", address: "57 Hackney Rd- Hackney SA 5069", state: "SA", upfrontFee: 2600, annualFee: 20520 },
        { id: 64, name: "St Peter's Girls Collegiate Girls' School", address: "Stonyfell Rd- Stonyfell SA 5066", state: "SA", upfrontFee: 970, annualFee: 17285 },
        { id: 65, name: "Walford Anglican School for Girls", address: "316 Unley Rd- Hyde Park SA 5061", state: "SA", upfrontFee: 1095, annualFee: 19301 },
        { id: 66, name: "Prince Alfred College", address: "23 Dequetteville Terrace- Kent Town SA 5067", state: "SA", upfrontFee: 1100, annualFee: 17319 },
        { id: 67, name: "Seymour College", address: "546 Portrush Rd- Glen Osmond SA 5064", state: "SA", upfrontFee: 1050, annualFee: 19679 },
        { id: 68, name: "Pulteney Grammar School", address: "190 South Terrace ADELAIDE SA 5000", state: "SA", upfrontFee: 850, annualFee: 18946 },
        { id: 69, name: "St Aloysius College, Adelaide", address: "53 Wakefield St- Adelaide SA 5000", state: "SA", upfrontFee: 600, annualFee: 7636 },
        { id: 70, name: "St Dominics Priory College", address: "119/139 Molesworth St- North Adelaide SA 5006", state: "SA", upfrontFee: 0, annualFee: 6674 },
        { id: 71, name: "St John's Grammar School", address: "29 Gloucester Ave- Belair SA 5052", state: "SA", upfrontFee: 688, annualFee: 11811 },
        { id: 72, name: "Woodcroft College", address: "143-173 Bains Rd- Morphett Vale SA 5162", state: "SA", upfrontFee: 755, annualFee: 6297 },
        { id: 73, name: "St Ignatious College, Adelaide", address: "2 Manresa Ct- Athelstone SA 5076", state: "SA", upfrontFee: 975, annualFee: 14013 },
        { id: 74, name: "Pedare Christian College", address: "2-30 Surrey Farm Dr- Golden Grove SA 5125", state: "SA", upfrontFee: 150, annualFee: 7502 },
        { id: 75, name: "Westminster School", address: "1-27 Alison Avenue- Marion- South Australia ", state: "SA", upfrontFee: 800, annualFee: 17932 },
        { id: 76, name: "Kings Baptist Grammar School", address: "no address", state: "SA", upfrontFee: 175, annualFee: 0 },
        { id: 77, name: "Scotch College Adelaide", address: "Carruth Road- Torrens Park South Australia 5062", state: "SA", upfrontFee: 1150, annualFee: 19668 },
        { id: 78, name: "Concordia College", address: "45 Cheltenham St- Highgate SA 5063", state: "SA", upfrontFee: 75, annualFee: 8820 },
        { id: 79, name: "Pembroke School", address: "342 The Parade- Kensington Park SA 5068", state: "SA", upfrontFee: 860, annualFee: 19690 },
        { id: 80, name: "Loreto College, Marryatville", address: "316 Portrush Rd- Marryatville SA 5068", state: "SA", upfrontFee: 745, annualFee: 14664 },
        { id: 81, name: "Trinity College, Gawler", address: "Alexander Ave- Evanston South SA 5116", state: "SA", upfrontFee: 540, annualFee: 4622 }
    ];
    $scope.privateSchoolObjects_WA = [{ id: 82, name: "Hale School", address: "160 Hale Rd- Wembley Downs WA 6019", state: "WA", upfrontFee: 8250, annualFee: 21450 },
        { id: 83, name: "Christ Church Grammar School", address: "Queenslea Dr- Claremont WA 6010", state: "WA", upfrontFee: 6700, annualFee: 23088 },
        { id: 84, name: "All Saints College", address: "Ewing Ave.- Bull Creek WA 6149", state: "WA", upfrontFee: 5423, annualFee: 16534 },
        { id: 85, name: "St Mary's Anglican Girls School", address: "75 Elliott Rd- Karrinyup WA 6018", state: "WA", upfrontFee: 5545, annualFee: 18394 },
        { id: 86, name: "St Hilda's Anglican Girls School", address: "26 Bay View Terrace- Mosman Park WA 6012", state: "WA", upfrontFee: 4959, annualFee: 20284 },
        { id: 87, name: "Presbyterian Ladies' College, Perth", address: "14 McNeil St- Peppermint Grove WA 6011", state: "WA", upfrontFee: 4950, annualFee: 20982 },
        { id: 88, name: "Perth College", address: "31 Lawley Crescent- Mount Lawley WA 6050", state: "WA", upfrontFee: 5742, annualFee: 18701 },
        { id: 89, name: "Guildford Grammar School ", address: "11 Terrace Rd- Guildford WA 6055", state: "WA", upfrontFee: 2925, annualFee: 18073 },
        { id: 90, name: "Penrhos College", address: "6 Morrison Street- Como WA 6152", state: "WA", upfrontFee: 5489, annualFee: 19442 },
        { id: 91, name: "Scotch College, Perth", address: "76 Shenton Rd- Swanbourne WA 6010", state: "WA", upfrontFee: 6687, annualFee: 23499 },
        { id: 92, name: "John XXIII College, Perth", address: "Mooro Dr- Mount Claremont WA 6010", state: "WA", upfrontFee: 2110, annualFee: 7710 },
        { id: 93, name: "Santa Maria College", address: "18 Stoneham Rd- Attadale WA 6156", state: "WA", upfrontFee: 1020, annualFee: 10521 },
        { id: 94, name: "Wesley College, Perth", address: "40 Coode St- South Perth WA 6151", state: "WA", upfrontFee: 7276, annualFee: 20001 },
        { id: 95, name: "Methodist Ladies College, Perth", address: "356 Stirling Hwy- Claremont WA 6010", state: "WA", upfrontFee: 5320, annualFee: 21203 },
        { id: 96, name: "St Marks Anglican Community School", address: "St Marks Dr- Hillarys WA 6025", state: "WA", upfrontFee: 2030, annualFee: 7251 },
        { id: 97, name: "Aquinas College, Perth", address: "58 Mount Henry Rd- Salter Point WA 6152", state: "WA", upfrontFee: 2832, annualFee: 14013 },
        { id: 98, name: "Trinity College, Perth", address: "2 Trinity Ave- East Perth WA 6004", state: "WA", upfrontFee: 2243, annualFee: 13602 },
        { id: 99, name: "Sacred Heart College", address: "Hocking Parade- Sorrento WA 6020", state: "WA", upfrontFee: 805, annualFee: 8220 },
        { id: 100, name: "Newman College Perth", address: "216 Empire Ave- Churchlands WA 6018", state: "WA", upfrontFee: 1110, annualFee: 5715 },
        { id: 101, name: "Kingsway Christian College", address: "157 Kingsway- Darch WA 6065", state: "WA", upfrontFee: 1320, annualFee: 7288 }
    ];
    $scope.privateSchoolObjects_ACT = [{ id: 102, name: "Canberra Grammar School", address: "40 Monaro Cres- Red Hill ACT 2603", state: "ACT", upfrontFee: 2975, annualFee: 18753 },
        { id: 103, name: "Radford College", address: "1 College St- Bruce ACT 2617", state: "ACT", upfrontFee: 950, annualFee: 12307 },
        { id: 104, name: "Canberra Girls Grammar School", address: "Melbourne Ave- Deakin ACT 2600", state: "ACT", upfrontFee: 150, annualFee: 16942 },
        { id: 105, name: "Burgmann Anglican School", address: "Gungahlin Dr & The Valley Avenue- Gungahlin ACT 291", state: "ACT", upfrontFee: 875, annualFee: 8413 },
        { id: 106, name: "Brindabella Christian College", address: "136 Brigalow St- Lyneham ACT 2602", state: "ACT", upfrontFee: 700, annualFee: 5874 },
        { id: 107, name: "Marist College", address: "27 Marr St- Pearce ACT 2607", state: "ACT", upfrontFee: 400, annualFee: 8644 },
        { id: 108, name: "Orana Steiner School", address: "Unwin Place- ACT 2611", state: "ACT", upfrontFee: 550, annualFee: 6467 },
        { id: 109, name: "Merici College", address: "Wise St- Braddon ACT 2612", state: "ACT", upfrontFee: 50, annualFee: 6277 },
        { id: 110, name: "Emmaus Christian School", address: "73 Davenport St- Dickson ACT 2602", state: "ACT", upfrontFee: 300, annualFee: 6292 }
    ];
    $scope.privateSchoolObjects_TAS = [{ id: 111, name: "The Friends School, Hobart", address: "23 Commercial Rd- North Hobart TAS 7000", state: "TAS", upfrontFee: 1200, annualFee: 14254 },
        { id: 112, name: "Fahan School", address: "Fisher Avenue- Lower Sandy Bay TAS 7005", state: "TAS", upfrontFee: 2100, annualFee: 12412 },
        { id: 113, name: "St Michael's Collegiate School", address: "218 Macquarie St- Hobart TAS 7000", state: "TAS", upfrontFee: 1110, annualFee: 12908 },
        { id: 114, name: "The Hutchins School", address: "71 Nelson Rd- Sandy Bay TAS 7005", state: "TAS", upfrontFee: 1610, annualFee: 13400 },
        { id: 115, name: "St Mary's College, Hobart", address: "164 Harrington St- Hobart TAS 7000", state: "TAS", upfrontFee: 0, annualFee: 3958 },
        { id: 116, name: "Launceston Chruch Grammar School", address: "36 Button St- Mowbray TAS 7248", state: "TAS", upfrontFee: 100, annualFee: 12900 },
        { id: 117, name: "Launceston Christian School", address: " 452A W Tamar Hwy- Riverside TAS 7250", state: "TAS", upfrontFee: 1300, annualFee: 4802 }
    ];


    $scope.publicSchoolObjects = [{ id: 0, name: 'James Ruse Agricultural High School', annualFee: 2150 },
        { id: 1, name: ' North Sydney Girls High School', annualFee: 1600 },
        { id: 2, name: ' North Sydney Boys High School', annualFee: 1820 },
        { id: 3, name: ' Sydney Girls High School', annualFee: 2100 },
        { id: 4, name: ' Sydney Boys High School', annualFee: 2368 },
        { id: 5, name: ' Baulkham Hills High School', annualFee: 1000 },
        { id: 6, name: ' Hornsby Girls High School', annualFee: 1100 },
        { id: 7, name: ' Northern Beaches Secondary College(Manly Selective)', annualFee: 1400 },
        { id: 8, name: ' Normanhurst Boys High School', annualFee: 1000 },
        { id: 9, name: ' Melbourne High School(Selective)', annualFee: 2900 },
        { id: 10, name: ' Mac.Robertson Girls’ High School(Selective)', annualFee: 1600 },
        { id: 11, name: ' Nossal High School(Selective)', annualFee: 2000 },
        { id: 12, name: ' Suzanne Cory High School(Selective)', annualFee: 1600 },
        { id: 13, name: ' Box Hill High School', annualFee: 625 },
        { id: 14, name: ' The University High School', annualFee: 520 },
        { id: 15, name: ' Balwyn High School', annualFee: 520 },
        { id: 16, name: ' Mansfield State High School', annualFee: 500 },
        { id: 17, name: ' Indooroopilly State High School', annualFee: 400 },
        { id: 18, name: ' Kelvin Grove State College', annualFee: 350 },
        { id: 19, name: ' The Gap State High School', annualFee: 600 },
        { id: 20, name: ' Cavendish Road State High School', annualFee: 500 },
        { id: 21, name: ' Kenmore State High School', annualFee: 500 },
        { id: 22, name: ' Mount Gravatt State High School', annualFee: 500 },
        { id: 23, name: ' Brisbane State High School', annualFee: 573 },
        { id: 24, name: ' Centenary State High School', annualFee: 400 },
        { id: 25, name: ' Stretton State College', annualFee: 390 },
        { id: 26, name: ' Perth Modern School', annualFee: 1200 },
        { id: 27, name: ' Shenton College', annualFee: 1000 },
        { id: 28, name: ' Rossmoyne Senior High School', annualFee: 850 },
        { id: 29, name: ' Willetton Senior High School', annualFee: 900 },
        { id: 30, name: ' John Curtin College of the Arts', annualFee: 1150 },
        { id: 31, name: ' Churchlands Senior High School', annualFee: 1000 },
        { id: 32, name: ' Applecross Senior High School', annualFee: 800 },
        { id: 33, name: ' Mount Lawley Senior High School', annualFee: 900 },
        { id: 34, name: ' Carine Senior High School', annualFee: 800 },
        { id: 35, name: ' Duncraig Senior High School', annualFee: 900 },
        { id: 36, name: ' Glenunga International High School', annualFee: 805 },
        { id: 37, name: ' Marryatville High School', annualFee: 820 },
        { id: 38, name: ' Adelaide High School', annualFee: 890 },
        { id: 39, name: ' Mitcham Girls High School', annualFee: 700 },
        { id: 40, name: ' Norwood Morialta High School', annualFee: 800 },
        { id: 41, name: ' Open Access College', annualFee: 560 },
        { id: 42, name: ' Narrabundah College', annualFee: 500 },
        { id: 43, name: ' Gungahlin College', annualFee: 300 },
        { id: 44, name: ' Canberra College', annualFee: 350 },
        { id: 45, name: ' Hawker College', annualFee: 310 },
        { id: 46, name: ' Lake Tuggeranong College', annualFee: 330 },
        { id: 47, name: ' Erindale College', annualFee: 300 },
        { id: 48, name: ' UC Senior Secondary College Lake Ginninderra', annualFee: 410 },
        { id: 49, name: ' Hellyer College', annualFee: 390 },
        { id: 50, name: ' Elizabeth College', annualFee: 390 },
        { id: 51, name: ' The Don College', annualFee: 390 },
        { id: 52, name: ' Launceston College', annualFee: 390 },
        { id: 53, name: ' Rosny College', annualFee: 390 },
        { id: 54, name: ' Newstead College', annualFee: 390 }
    ];
    $scope.publicSchoolObjects_NSW = [{ id: 0, name: 'James Ruse Agricultural High School', annualFee: 2150 },
        { id: 1, name: ' North Sydney Girls High School', annualFee: 1600 },
        { id: 2, name: ' North Sydney Boys High School', annualFee: 1820 },
        { id: 3, name: ' Sydney Girls High School', annualFee: 2100 },
        { id: 4, name: ' Sydney Boys High School', annualFee: 2368 },
        { id: 5, name: ' Baulkham Hills High School', annualFee: 1000 },
        { id: 6, name: ' Hornsby Girls High School', annualFee: 1100 },
        { id: 7, name: ' Northern Beaches Secondary College(Manly Selective)', annualFee: 1400 },
        { id: 8, name: ' Normanhurst Boys High School', annualFee: 1000 },
        { id: 9, name: ' Melbourne High School(Selective)', annualFee: 2900 }
    ];
    $scope.publicSchoolObjects_VIC = [{ id: 9, name: ' Melbourne High School(Selective)', annualFee: 2900 },
        { id: 10, name: ' Mac.Robertson Girls’ High School(Selective)', annualFee: 1600 },
        { id: 11, name: ' Nossal High School(Selective)', annualFee: 2000 },
        { id: 12, name: ' Suzanne Cory High School(Selective)', annualFee: 1600 },
        { id: 13, name: ' Box Hill High School', annualFee: 625 },
        { id: 14, name: ' The University High School', annualFee: 520 },
        { id: 15, name: ' Balwyn High School', annualFee: 520 }
    ];
    $scope.publicSchoolObjects_QLD = [{ id: 16, name: ' Mansfield State High School', annualFee: 500 },
        { id: 17, name: ' Indooroopilly State High School', annualFee: 400 },
        { id: 18, name: ' Kelvin Grove State College', annualFee: 350 },
        { id: 19, name: ' The Gap State High School', annualFee: 600 },
        { id: 20, name: ' Cavendish Road State High School', annualFee: 500 },
        { id: 21, name: ' Kenmore State High School', annualFee: 500 },
        { id: 22, name: ' Mount Gravatt State High School', annualFee: 500 },
        { id: 23, name: ' Brisbane State High School', annualFee: 573 },
        { id: 24, name: ' Centenary State High School', annualFee: 400 },
        { id: 25, name: ' Stretton State College', annualFee: 390 }
    ];
    $scope.publicSchoolObjects_SA = [{ id: 36, name: ' Glenunga International High School', annualFee: 805 },
        { id: 37, name: ' Marryatville High School', annualFee: 820 },
        { id: 38, name: ' Adelaide High School', annualFee: 890 },
        { id: 39, name: ' Mitcham Girls High School', annualFee: 700 },
        { id: 40, name: ' Norwood Morialta High School', annualFee: 800 },
        { id: 41, name: ' Open Access College', annualFee: 560 }
    ];
    $scope.publicSchoolObjects_WA = [{ id: 26, name: ' Perth Modern School', annualFee: 1200 },
        { id: 27, name: ' Shenton College', annualFee: 1000 },
        { id: 28, name: ' Rossmoyne Senior High School', annualFee: 850 },
        { id: 29, name: ' Willetton Senior High School', annualFee: 900 },
        { id: 30, name: ' John Curtin College of the Arts', annualFee: 1150 },
        { id: 31, name: ' Churchlands Senior High School', annualFee: 1000 },
        { id: 32, name: ' Applecross Senior High School', annualFee: 800 },
        { id: 33, name: ' Mount Lawley Senior High School', annualFee: 900 },
        { id: 34, name: ' Carine Senior High School', annualFee: 800 },
        { id: 35, name: ' Duncraig Senior High School', annualFee: 900 }
    ];
    $scope.publicSchoolObjects_ACT = [{ id: 42, name: ' Narrabundah College', annualFee: 500 },
        { id: 43, name: ' Gungahlin College', annualFee: 300 },
        { id: 44, name: ' Canberra College', annualFee: 350 },
        { id: 45, name: ' Hawker College', annualFee: 310 },
        { id: 46, name: ' Lake Tuggeranong College', annualFee: 330 },
        { id: 47, name: ' Erindale College', annualFee: 300 },
        { id: 48, name: ' UC Senior Secondary College Lake Ginninderra', annualFee: 410 }
    ];
    $scope.publicSchoolObjects_TAS = [{ id: 49, name: ' Hellyer College', annualFee: 390 },
        { id: 50, name: ' Elizabeth College', annualFee: 390 },
        { id: 51, name: ' The Don College', annualFee: 390 },
        { id: 52, name: ' Launceston College', annualFee: 390 },
        { id: 53, name: ' Rosny College', annualFee: 390 },
        { id: 54, name: ' Newstead College', annualFee: 390 }
    ];

    $scope.stateListOb = [{ id: 0, name: "NSW" },
        { id: 1, name: "VIC" },
        { id: 2, name: "QLD" },
        { id: 3, name: "SA" },
        { id: 4, name: "WA" },
        { id: 5, name: "ACT" },
        { id: 6, name: "TAS" }
    ];


    $scope.diffSchoolOption = false;

    $scope.eductionOptionOb = [{ id: 0, name: "Select from the list of high schools in the living state." },
        { id: 1, name: "If you cannot find a matching high school in the list,please estimate the annual school fee here." }
    ];

    $scope.schoolTypeOb = [{ id: 0, name: "Private School" },
        { id: 1, name: "Public School" }
    ];

    $scope.schoolObjectsShow = $scope.privateSchoolObjects_NSW;
    $scope.stateListOb = [{ id: 0, name: "NSW" },
        { id: 1, name: "VIC" },
        { id: 2, name: "QLD" },
        { id: 3, name: "SA" },
        { id: 4, name: "WA" },
        { id: 5, name: "ACT" },
        { id: 6, name: "TAS" }
    ];


    $('.spEducationOption').on('change', function() {
        var spEducationOption = $('.spEducationOption option:selected').val();
        if (Number(spEducationOption) == 0) {
            $scope.diffSchoolOption = false;
        } else {
            $scope.diffSchoolOption = true;
        }
        // console.log(" $scope.diffSchoolOption", $scope.diffSchoolOption);
        $timeout(0);
    });

    $('.spState').on('change', function() {
        schoolOperation();
    });
    $('.spSchoolType').on('change', function() {
        schoolOperation();
    });

    $('.spSchool').on('change', function() {
        var spSchool = $('.spSchool option:selected').val();
        if (Number($('.spSchoolType option:selected').val()) == 0) {
            $scope.educationExpensePerYearPerChild = $scope.privateSchoolObjects[spSchool].annualFee;
        } else {
            $scope.educationExpensePerYearPerChild = $scope.publicSchoolObjects[spSchool].annualFee;
        }
        // console.log("educationExpensePerYearPerChildSchool", $scope.privateSchoolObjects[spSchool].name);
    });

    function schoolOperation() {
        spState = $('.spState option:selected').val();
        spSchoolType = $('.spSchoolType option:selected').val()

        if (Number(spSchoolType) == 0) {
            switch (Number(spState)) {
                case 0:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_NSW;
                    });
                    break;
                case 1:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_VIC;
                    });
                    break;
                case 2:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_QLD;
                    });
                    break;
                case 3:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_SA;
                    });
                    break;
                case 4:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_WA;
                    });
                    break;
                case 5:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_ACT;
                    });
                    break;
                case 6:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_TAS;
                    });
                    break;
            };
        } else {
            switch (Number(spState)) {
                case 0:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_NSW;
                    });
                    break;
                case 1:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_VIC;
                    });
                    break;
                case 2:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_QLD;
                    });
                    break;
                case 3:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_SA;
                    });
                    break;
                case 4:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_WA;
                    });
                    break;
                case 5:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_ACT;
                    });
                    break;
                case 6:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_TAS;
                    });
                    break;
            };
        }
        // console.log("sel", $scope.schoolObjectsShow);
        $('.spSchool').selectpicker('refresh');
        $timeout(0);
    }

    function updatedSchoolValue() {
        var spEducationOption = $('.spEducationOption option:selected').val();
        if (Number(spEducationOption) == 0) {
            var spSchool = $('.spSchool option:selected').val();
            if (Number($('.spSchoolType option:selected').val()) == 0) {
                $scope.educationExpensePerYearPerChild = $scope.privateSchoolObjects[spSchool].annualFee;
            } else {
                $scope.educationExpensePerYearPerChild = $scope.publicSchoolObjects[spSchool].annualFee;
            }
        } else {
        }
    }
	
	 $scope.lifeOptions = [
        { id: 0, name: 'personal' },
        { id: 1, name: 'super' }
    ];


    $scope.fundsOb = [{
        id: 0,
        name: 'Asgard Infinity Ewrap Super',
        annualPercentageFee: 1.25
    }, {
        id: 1,
        name: 'ING Direct Living Super',
        annualPercentageFee: 0
    }, {
        id: 2,
        name: 'ING Direct Living Super (Balanced) with benefits',
        annualPercentageFee: 260
    }, {
        id: 3,
        name: 'SMSF (Non advice service)',
        annualPercentageFee: 2240
    }, {
        id: 4,
        name: 'SMSF (Advice Service)',
        annualPercentageFee: 0.95
    }, {
        id: 5,
        name: 'Building Unions Super Scheme Queensland BUSSQ',
        annualPercentageFee: 1.31
    }, {
        id: 6,
        name: 'First Super',
        annualPercentageFee: 0.89
    }, {
        id: 7,
        name: 'QSuper Lifetime Aspire 1 Group',
        annualPercentageFee: 0.61
    }, {
        id: 8,
        name: 'QSuper Lifetime Outlook',
        annualPercentageFee: 0.66
    }, {
        id: 9,
        name: 'QSuper Lifetime Sustain Group 1',
        annualPercentageFee: 0.45
    }, {
        id: 10,
        name: 'Local Government Strategy AgeBased Investment Conservative',
        annualPercentageFee: 0.58
    }, {
        id: 11,
        name: 'QSuper Lifetime Focus 1 Group',
        annualPercentageFee: 0.56
    }, {
        id: 12,
        name: 'QSuper Lifetime Sustain Group 2',
        annualPercentageFee: 0.45
    }, {
        id: 13,
        name: 'Construction & Building Unions Super Growth Cbus',
        annualPercentageFee: 1
    }, {
        id: 14,
        name: 'Meat Industry Employees Super MIESF',
        annualPercentageFee: 0.63
    }, {
        id: 15,
        name: 'QSuper Lifetime Focus 2 Group',
        annualPercentageFee: 0.56
    }, {
        id: 16,
        name: 'Suncorp Funds 1934 Prior',
        annualPercentageFee: 1.01
    }, {
        id: 17,
        name: 'QSuper Lifetime Aspire 2 Group',
        annualPercentageFee: 0.61
    }, {
        id: 18,
        name: 'Aon Defensive',
        annualPercentageFee: 0.92
    }, {
        id: 19,
        name: 'Suncorp Funds 1935 to 1939',
        annualPercentageFee: 1.01
    }, {
        id: 20,
        name: 'Statewide Super',
        annualPercentageFee: 0.91
    }, {
        id: 21,
        name: 'Suncorp Funds 1950 to 1954',
        annualPercentageFee: 1.01
    }, {
        id: 22,
        name: 'Suncorp Funds 1945 to 1949',
        annualPercentageFee: 1.01
    }, {
        id: 23,
        name: 'QSuper Lifetime Focus 3 Group',
        annualPercentageFee: 0.56
    }, {
        id: 24,
        name: 'Suncorp Funds 1955 to 1959',
        annualPercentageFee: 1.01
    }, {
        id: 25,
        name: 'Suncorp Funds 1940 to 1944',
        annualPercentageFee: 1.01
    }, {
        id: 26,
        name: 'Local Government Strategy AgeBased Investment Balanced',
        annualPercentageFee: 0.63
    }, {
        id: 27,
        name: 'Suncorp Funds 1960 to 1964',
        annualPercentageFee: 1.01
    }, {
        id: 28,
        name: 'Aon 66',
        annualPercentageFee: 0.92
    }, {
        id: 29,
        name: 'Suncorp Funds 1965 to 1969',
        annualPercentageFee: 1.01
    }, {
        id: 30,
        name: 'MTAA Super My AutoSuper',
        annualPercentageFee: 0.84
    }, {
        id: 31,
        name: 'Suncorp Funds 1970 to 1974',
        annualPercentageFee: 1.01
    }, {
        id: 32,
        name: 'Telstra Super Conservative',
        annualPercentageFee: 0.82
    }, {
        id: 33,
        name: 'Suncorp Funds 1975 to 1979',
        annualPercentageFee: 1.01
    }, {
        id: 34,
        name: 'Aon 65',
        annualPercentageFee: 0.92
    }, {
        id: 35,
        name: 'MyLifeMyMoney Super MyCatholicSuper',
        annualPercentageFee: 1.04
    }, {
        id: 36,
        name: 'AustralianSuper',
        annualPercentageFee: 0.73
    }, {
        id: 37,
        name: 'HOSTPLUS Super Balanced',
        annualPercentageFee: 1.1
    }, {
        id: 38,
        name: 'AustralianSuper Komatsu Plan',
        annualPercentageFee: 0.83
    }, {
        id: 39,
        name: 'Suncorp Funds 1980 to 1984',
        annualPercentageFee: 1.01
    }, {
        id: 40,
        name: 'AustralianSuper IBM Plan',
        annualPercentageFee: 0.84
    }, {
        id: 41,
        name: 'Suncorp Funds 1995 to 1999',
        annualPercentageFee: 1.01
    }, {
        id: 42,
        name: 'Suncorp Funds 1985 to 1989',
        annualPercentageFee: 1.01
    }, {
        id: 43,
        name: 'Energy Super',
        annualPercentageFee: 1.12
    }, {
        id: 44,
        name: 'Suncorp Funds 1990 to 1994',
        annualPercentageFee: 1.01
    }, {
        id: 45,
        name: 'Suncorp Funds 2000 to 2004',
        annualPercentageFee: 1.01
    }, {
        id: 46,
        name: 'Rei Super ee Balanced',
        annualPercentageFee: 0.87
    }, {
        id: 47,
        name: 'Aon 64',
        annualPercentageFee: 0.92
    }, {
        id: 48,
        name: 'LGIASuper Lifecycle 75 Plus',
        annualPercentageFee: 0.64
    }, {
        id: 49,
        name: 'Care Super',
        annualPercentageFee: 1.22
    }, {
        id: 50,
        name: 'Prime Super',
        annualPercentageFee: 1.12
    }, {
        id: 51,
        name: 'Asgard Employee 1950s',
        annualPercentageFee: 1.35
    }, {
        id: 52,
        name: 'Mine Wealth and Wellbeing Stable',
        annualPercentageFee: 0.94
    }, {
        id: 53,
        name: 'CCA Future Directions Conservative',
        annualPercentageFee: 0.53
    }, {
        id: 54,
        name: 'ANZ Smart Choice SuperFor QBE employees 1940s',
        annualPercentageFee: 0.54
    }, {
        id: 55,
        name: 'Maritime Super Moderate investment',
        annualPercentageFee: 1.11
    }, {
        id: 56,
        name: 'Aon 63',
        annualPercentageFee: 0.92
    }, {
        id: 57,
        name: 'ANZ Smart Choice Super 1940s',
        annualPercentageFee: 0.6
    }, {
        id: 58,
        name: 'Asgard Employee 1970s',
        annualPercentageFee: 1.35
    }, {
        id: 59,
        name: 'Asgard Employee 1960s',
        annualPercentageFee: 1.35
    }, {
        id: 60,
        name: 'Bendigo Conservative Index Fund',
        annualPercentageFee: 0.61
    }, {
        id: 61,
        name: 'Aon 62',
        annualPercentageFee: 0.92
    }, {
        id: 62,
        name: 'Asgard Employee 1980s',
        annualPercentageFee: 1.35
    }, {
        id: 63,
        name: 'Local Government Strategy AgeBased Investment Balanced Growth',
        annualPercentageFee: 0.67
    }, {
        id: 64,
        name: 'WA Local Government Super',
        annualPercentageFee: 1.16
    }, {
        id: 65,
        name: 'LGIASuper Lifecycle Under 75',
        annualPercentageFee: 0.72
    }, {
        id: 66,
        name: 'Sunsuper for Life Age 64',
        annualPercentageFee: 0.76
    }, {
        id: 67,
        name: 'BT Business 1940s',
        annualPercentageFee: 1.18
    }, {
        id: 68,
        name: 'Sunsuper for Life Age 61',
        annualPercentageFee: 0.76
    }, {
        id: 69,
        name: 'Sunsuper for Life Age 65 and over',
        annualPercentageFee: 0.76
    }, {
        id: 70,
        name: 'Sunsuper for Life Age 60',
        annualPercentageFee: 0.76
    }, {
        id: 71,
        name: 'Sunsuper for Life Age 62',
        annualPercentageFee: 0.76
    }, {
        id: 72,
        name: 'Sunsuper for Life Age 58',
        annualPercentageFee: 0.76
    }, {
        id: 73,
        name: 'Sunsuper for Life Age 59',
        annualPercentageFee: 0.76
    }, {
        id: 74,
        name: 'Sunsuper for Life Age 63',
        annualPercentageFee: 0.76
    }, {
        id: 75,
        name: 'Sunsuper for Life Age 55',
        annualPercentageFee: 0.76
    }, {
        id: 76,
        name: 'Sunsuper for Life Age 56',
        annualPercentageFee: 0.76
    }, {
        id: 77,
        name: 'AMP Super Savings Woolworths Group',
        annualPercentageFee: 0.61
    }, {
        id: 78,
        name: 'Sunsuper for Life Age 57',
        annualPercentageFee: 0.76
    }, {
        id: 79,
        name: 'Sunsuper for Life Age 54 and under',
        annualPercentageFee: 0.76
    }, {
        id: 80,
        name: 'Mine Wealth and Wellbeing Balanced',
        annualPercentageFee: 1.04
    }, {
        id: 81,
        name: 'Aon 61',
        annualPercentageFee: 0.92
    }, {
        id: 82,
        name: "Commonwealth Essential Super 1940's option",
        annualPercentageFee: 0.94
    }, {
        id: 83,
        name: 'UniSuper UniSuper Balanced',
        annualPercentageFee: 0.77
    }, {
        id: 84,
        name: 'Health Employees Super Australia Core Pool',
        annualPercentageFee: 0.96
    }, {
        id: 85,
        name: 'Pitcher Retirement Plan',
        annualPercentageFee: 2.01
    }, {
        id: 86,
        name: 'Westpac Group Plan 1940s',
        annualPercentageFee: 0.75
    }, {
        id: 87,
        name: 'Virgin Super Essentials Tracker Balanced Over 60S Mix',
        annualPercentageFee: 1.11
    }, {
        id: 88,
        name: "Commonwealth Essential Super 1950's option",
        annualPercentageFee: 0.94
    }, {
        id: 89,
        name: 'Queensland Independent Education & Care Super QIEC',
        annualPercentageFee: 1.13
    }, {
        id: 90,
        name: 'Aon 60',
        annualPercentageFee: 0.92
    }, {
        id: 91,
        name: 'CCA Future Directions Moderately Cons',
        annualPercentageFee: 0.59
    }, {
        id: 92,
        name: 'Asgard Employee 1990s',
        annualPercentageFee: 1.35
    }, {
        id: 93,
        name: 'Australia Post 1960s',
        annualPercentageFee: 0.9
    }, {
        id: 94,
        name: 'First State Super Lifecycle Balanced',
        annualPercentageFee: 0.7
    }, {
        id: 95,
        name: 'Colonial First State FirstChoice Superannuation Trust 194549',
        annualPercentageFee: 1.12
    }, {
        id: 96,
        name: 'Intrust Super',
        annualPercentageFee: 1.04
    }, {
        id: 97,
        name: 'TWU Super Balanced',
        annualPercentageFee: 1.24
    }, {
        id: 98,
        name: 'Mercer WGSP Born prior to 1929',
        annualPercentageFee: 0.81
    }, {
        id: 99,
        name: 'Colonial First State FirstChoice Superannuation Trust 195054',
        annualPercentageFee: 1.12
    }, {
        id: 100,
        name: 'AFLPA & Industry 1960s',
        annualPercentageFee: 1.04
    }, {
        id: 101,
        name: 'Guild Retirement Fund Consolidating',
        annualPercentageFee: 0.94
    }, {
        id: 102,
        name: 'Australia Post Capital Stable',
        annualPercentageFee: 0.83
    }, {
        id: 103,
        name: 'Mercy Super',
        annualPercentageFee: 1.12
    }, {
        id: 104,
        name: 'Media Super Balanced investment accumulation',
        annualPercentageFee: 0.85
    }, {
        id: 105,
        name: 'The Transport Industry Super TIS',
        annualPercentageFee: 1.79
    }, {
        id: 106,
        name: 'Commonwealth Bank Group Super Accumulate Plus Balanced',
        annualPercentageFee: 0.73
    }, {
        id: 107,
        name: 'Club Plus Super Scheme',
        annualPercentageFee: 0.74
    }, {
        id: 108,
        name: 'The Flexible Benefits Super FlexibleSuper Active Balanced',
        annualPercentageFee: 0.94
    }, {
        id: 109,
        name: 'Aon 59',
        annualPercentageFee: 0.92
    }, {
        id: 110,
        name: 'Mine Wealth and Wellbeing Growth',
        annualPercentageFee: 1.13
    }, {
        id: 111,
        name: 'AFLPA & Industry Capital Stable',
        annualPercentageFee: 0.97
    }, {
        id: 112,
        name: 'BT Super for Life Employer Super 1940s',
        annualPercentageFee: 1.2
    }, {
        id: 113,
        name: 'Mercer WGSP 1944 to 1948',
        annualPercentageFee: 0.83
    }, {
        id: 114,
        name: 'ANZ Smart Choice SuperFor QBE employees 1950s',
        annualPercentageFee: 0.54
    }, {
        id: 115,
        name: 'ANZ Smart Choice Super 1950s',
        annualPercentageFee: 0.6
    }, {
        id: 116,
        name: 'Australian Meat Industry Super AMIST',
        annualPercentageFee: 0.77
    }, {
        id: 117,
        name: 'Mercer WGSP 1929 to 1933',
        annualPercentageFee: 0.81
    }, {
        id: 118,
        name: 'Australia Post 1950s',
        annualPercentageFee: 0.85
    }, {
        id: 119,
        name: 'DuluxGroup Employees Super Active Balanced',
        annualPercentageFee: 1.11
    }, {
        id: 120,
        name: 'Bendigo Balanced Index Fund',
        annualPercentageFee: 0.63
    }, {
        id: 121,
        name: 'Incitec Pivot Employees Super Active Balanced',
        annualPercentageFee: 1.11
    }, {
        id: 122,
        name: 'AMP No.2 1960s',
        annualPercentageFee: 1.41
    }, {
        id: 123,
        name: 'Local Authorities Super Vision',
        annualPercentageFee: 1.02
    }, {
        id: 124,
        name: 'Mercer WGSP 1934 to 1938',
        annualPercentageFee: 0.81
    }, {
        id: 125,
        name: 'Mercer WGSP 1939 to 1943',
        annualPercentageFee: 0.81
    }, {
        id: 126,
        name: 'Mercer SmartPath Born prior to 1929',
        annualPercentageFee: 1.22
    }, {
        id: 127,
        name: 'Anglican National ANS RIL Conservative',
        annualPercentageFee: 0.89
    }, {
        id: 128,
        name: 'Christian Super My Ethical',
        annualPercentageFee: 1.25
    }, {
        id: 129,
        name: 'AFLPA & Industry 1950s',
        annualPercentageFee: 0.99
    }, {
        id: 130,
        name: 'NGS Super Diversified',
        annualPercentageFee: 0.9
    }, {
        id: 131,
        name: 'Aon 58',
        annualPercentageFee: 0.92
    }, {
        id: 132,
        name: 'Tasplan Super',
        annualPercentageFee: 1.01
    }, {
        id: 133,
        name: 'National Australia Bank Group Super NABGSF',
        annualPercentageFee: 1.17
    }, {
        id: 134,
        name: 'AMP No.2 Capital Stable',
        annualPercentageFee: 1.34
    }, {
        id: 135,
        name: 'AMP No.3 SDF 1960s',
        annualPercentageFee: 1.5
    }, {
        id: 136,
        name: 'ANZ Australian Staff Super Scheme',
        annualPercentageFee: 0.58
    }, {
        id: 137,
        name: 'AMP No.3 SDF Capital Stable',
        annualPercentageFee: 1.43
    }, {
        id: 138,
        name: 'Australian Ethical Retail Super Balanced accumulation',
        annualPercentageFee: 1.72
    }, {
        id: 139,
        name: 'CCA Future Directions Balanced',
        annualPercentageFee: 0.66
    }, {
        id: 140,
        name: 'Mercer SmartPath 1944 to 1948',
        annualPercentageFee: 1.24
    }, {
        id: 141,
        name: 'legalSuper Balanced',
        annualPercentageFee: 0.95
    }, {
        id: 142,
        name: 'Mercer SmartPath 1929 to 1933',
        annualPercentageFee: 1.22
    }, {
        id: 143,
        name: 'Mercer WGSP 1949 to 1953',
        annualPercentageFee: 0.82
    }, {
        id: 144,
        name: 'equipSuper EquipSuper',
        annualPercentageFee: 1.09
    }, {
        id: 145,
        name: 'Quadrant Super Scheme MyChoices_ Investment',
        annualPercentageFee: 1.31
    }, {
        id: 146,
        name: 'Retail Employees Super REST',
        annualPercentageFee: 0.88
    }, {
        id: 147,
        name: 'Austsafe Super Balanced',
        annualPercentageFee: 0.9
    }, {
        id: 148,
        name: 'Aon 57',
        annualPercentageFee: 0.92
    }, {
        id: 149,
        name: 'AMP No.2 1950s',
        annualPercentageFee: 1.36
    }, {
        id: 150,
        name: 'Virgin Super Essentials Tracker Balanced 50S Mix',
        annualPercentageFee: 1.11
    }, {
        id: 151,
        name: 'Rio Tinto Staff Super Growth Product',
        annualPercentageFee: 0.95
    }, {
        id: 152,
        name: 'Boc Gases Super BOC',
        annualPercentageFee: 1.18
    }, {
        id: 153,
        name: 'Mercer SmartPath 1934 to 1938',
        annualPercentageFee: 1.22
    }, {
        id: 154,
        name: 'Mercer SmartPath 1939 to 1943',
        annualPercentageFee: 1.22
    }, {
        id: 155,
        name: 'Asgard Employee 1940s',
        annualPercentageFee: 1.36
    }, {
        id: 156,
        name: 'Glidepath Altitude',
        annualPercentageFee: 1.15
    }, {
        id: 157,
        name: 'AMP No.3 SDF 1950s',
        annualPercentageFee: 1.45
    }, {
        id: 158,
        name: 'Colonial First State FirstChoice Superannuation Trust 195559',
        annualPercentageFee: 1.12
    }, {
        id: 159,
        name: 'AvSuper Growth',
        annualPercentageFee: 1.12
    }, {
        id: 160,
        name: 'Local Government Strategy AgeBased Investment High Growth',
        annualPercentageFee: 0.71
    }, {
        id: 161,
        name: 'Australia Post 1970s',
        annualPercentageFee: 0.95
    }, {
        id: 162,
        name: "Perpetual's Select Super",
        annualPercentageFee: 1.38
    }, {
        id: 163,
        name: 'Glidepath Destination',
        annualPercentageFee: 1.09
    }, {
        id: 164,
        name: "Smartsave 'Member's Choice' Super Master Plan SmartSave Balanced",
        annualPercentageFee: 1.25
    }, {
        id: 165,
        name: 'Public Sector Super Accumulation Plan PSSap Balanced',
        annualPercentageFee: 0.86
    }, {
        id: 166,
        name: 'AFLPA & Industry 1970s',
        annualPercentageFee: 1.09
    }, {
        id: 167,
        name: 'Aon 56',
        annualPercentageFee: 0.92
    }, {
        id: 168,
        name: 'Toyota Australia Super Plan Growth',
        annualPercentageFee: 0.98
    }, {
        id: 169,
        name: 'Toyota Employees Super Growth',
        annualPercentageFee: 0.98
    }, {
        id: 170,
        name: 'Mercer SmartPath 1949 to 1953',
        annualPercentageFee: 1.23
    }, {
        id: 171,
        name: 'Westpac Group Plan 1950s',
        annualPercentageFee: 0.74
    }, {
        id: 172,
        name: 'Kinetic Super Growth',
        annualPercentageFee: 0.97
    }, {
        id: 173,
        name: 'Mercer WGSP 1954 to 1958',
        annualPercentageFee: 0.83
    }, {
        id: 174,
        name: 'Mine Wealth and Wellbeing Aggressive',
        annualPercentageFee: 1.19
    }, {
        id: 175,
        name: 'NESS Super',
        annualPercentageFee: 1
    }, {
        id: 176,
        name: 'Glidepath Cruising',
        annualPercentageFee: 1.12
    }, {
        id: 177,
        name: 'Australia Post 1980s',
        annualPercentageFee: 1.05
    }, {
        id: 178,
        name: 'Australia Post 1990s',
        annualPercentageFee: 1.04
    }, {
        id: 179,
        name: 'Combined Super',
        annualPercentageFee: 1.17
    }, {
        id: 180,
        name: 'Russell Supersolution Master General Division',
        annualPercentageFee: 1.33
    }, {
        id: 181,
        name: 'Club Super',
        annualPercentageFee: 1.26
    }, {
        id: 182,
        name: 'Mercer Super Santos',
        annualPercentageFee: 0.91
    }, {
        id: 183,
        name: 'Aon 55',
        annualPercentageFee: 0.92
    }, {
        id: 184,
        name: 'AMP No.2 1970s',
        annualPercentageFee: 1.46
    }, {
        id: 185,
        name: 'AFLPA & Industry 1980s',
        annualPercentageFee: 1.19
    }, {
        id: 186,
        name: "Commonwealth Essential Super 1960's option",
        annualPercentageFee: 0.94
    }, {
        id: 187,
        name: 'AFLPA & Industry 1990s',
        annualPercentageFee: 1.18
    }, {
        id: 188,
        name: 'Telstra Super Balanced',
        annualPercentageFee: 1.06
    }, {
        id: 189,
        name: 'Worsley Alumina Super WASF Default',
        annualPercentageFee: 0.68
    }, {
        id: 190,
        name: 'AMG Super',
        annualPercentageFee: 1.13
    }, {
        id: 191,
        name: 'BT Business 1950s',
        annualPercentageFee: 1.19
    }, {
        id: 192,
        name: 'EmPlus Super',
        annualPercentageFee: 1.04
    }, {
        id: 193,
        name: 'Asgard Employee 2000s',
        annualPercentageFee: 1.35
    }, {
        id: 194,
        name: 'Glidepath Take Off',
        annualPercentageFee: 1.18
    }, {
        id: 195,
        name: 'Bendigo Growth Index Fund',
        annualPercentageFee: 0.65
    }, {
        id: 196,
        name: 'BT Super for Life Employer Super 1950s',
        annualPercentageFee: 1.19
    }, {
        id: 197,
        name: 'Mercer SmartPath 1954 to 1958',
        annualPercentageFee: 1.24
    }, {
        id: 198,
        name: 'First State Super Lifecycle Diversified',
        annualPercentageFee: 0.72
    }, {
        id: 199,
        name: 'AMP No.3 SDF 1970s',
        annualPercentageFee: 1.55
    }, {
        id: 200,
        name: 'Aon 54',
        annualPercentageFee: 0.92
    }, {
        id: 201,
        name: 'BHP Billiton Super Default',
        annualPercentageFee: 1.06
    }, {
        id: 202,
        name: 'AMP No.2 1980s',
        annualPercentageFee: 1.55
    }, {
        id: 203,
        name: 'Energy Industries Super Scheme-Pool A Balanced',
        annualPercentageFee: 0.95
    }, {
        id: 204,
        name: 'AMP No.2 1990s',
        annualPercentageFee: 1.55
    }, {
        id: 205,
        name: 'Guild Retirement Fund Growing',
        annualPercentageFee: 1.04
    }, {
        id: 206,
        name: 'AMP Retirement No.1',
        annualPercentageFee: 0.85
    }, {
        id: 207,
        name: 'Mercer WGSP 1959 to 1963',
        annualPercentageFee: 0.92
    }, {
        id: 208,
        name: 'Victorian Super Growth',
        annualPercentageFee: 0.97
    }, {
        id: 209,
        name: 'IOOF Portfolio Service Super',
        annualPercentageFee: 1.08
    }, {
        id: 210,
        name: 'ANZ Smart Choice SuperFor QBE employees 1960s',
        annualPercentageFee: 0.54
    }, {
        id: 211,
        name: 'ANZ Smart Choice Super 1960s',
        annualPercentageFee: 0.6
    }, {
        id: 212,
        name: 'CCA Future Directions Growth',
        annualPercentageFee: 0.72
    }, {
        id: 213,
        name: "Commonwealth Essential Super 1990's option",
        annualPercentageFee: 0.94
    }, {
        id: 214,
        name: 'The Universal Super Scheme MLC',
        annualPercentageFee: 1.23
    }, {
        id: 215,
        name: 'Plum Super',
        annualPercentageFee: 1.24
    }, {
        id: 216,
        name: 'AMP Super Savings Brookfield Australia',
        annualPercentageFee: 0.53
    }, {
        id: 217,
        name: "Commonwealth Essential Super 1980's option",
        annualPercentageFee: 0.94
    }, {
        id: 218,
        name: 'AMP No.3 SDF 1980s',
        annualPercentageFee: 1.64
    }, {
        id: 219,
        name: 'Nationwide Super NSF',
        annualPercentageFee: 1.31
    }, {
        id: 220,
        name: 'Aon 53',
        annualPercentageFee: 0.92
    }, {
        id: 221,
        name: "Commonwealth Essential Super 1970's option",
        annualPercentageFee: 0.94
    }, {
        id: 222,
        name: 'Concept One The Industry Super Balanced',
        annualPercentageFee: 0.95
    }, {
        id: 223,
        name: 'AMP No.3 SDF 1990s',
        annualPercentageFee: 1.64
    }, {
        id: 224,
        name: 'Mercer SmartPath 1959 to 1963',
        annualPercentageFee: 1.33
    }, {
        id: 225,
        name: 'IAG & NRMA Super Plan',
        annualPercentageFee: 1.12
    }, {
        id: 226,
        name: 'AMP Super Savings Macquarie Group',
        annualPercentageFee: 0.79
    }, {
        id: 227,
        name: 'Max Super',
        annualPercentageFee: 1.09
    }, {
        id: 228,
        name: 'Labour Union Co-Operative Retirement Balanced',
        annualPercentageFee: 0.95
    }, {
        id: 229,
        name: 'Goldman Sachs & JBWere Super Product',
        annualPercentageFee: 1.67
    }, {
        id: 230,
        name: 'Aon 52',
        annualPercentageFee: 0.92
    }, {
        id: 231,
        name: 'Westpac Group Plan 2000s',
        annualPercentageFee: 0.74
    }, {
        id: 232,
        name: 'Westpac Group Plan 1960s',
        annualPercentageFee: 0.74
    }, {
        id: 233,
        name: 'Mercer WGSP 1964 to 1968',
        annualPercentageFee: 0.95
    }, {
        id: 234,
        name: 'Mercer WGSP 1969 to 1973',
        annualPercentageFee: 0.95
    }, {
        id: 235,
        name: 'Guild Retirement Fund Building',
        annualPercentageFee: 1.13
    }, {
        id: 236,
        name: 'CCA Future Directions High Growth',
        annualPercentageFee: 0.73
    }, {
        id: 237,
        name: 'Mercer WGSP 1974 to 1978',
        annualPercentageFee: 0.95
    }, {
        id: 238,
        name: 'Mercer WGSP 1979 to 1983',
        annualPercentageFee: 0.95
    }, {
        id: 239,
        name: 'Mercer WGSP 1984 to 1988',
        annualPercentageFee: 0.95
    }, {
        id: 240,
        name: 'Aon 51',
        annualPercentageFee: 0.92
    }, {
        id: 241,
        name: 'ANZ Smart Choice SuperFor QBE employees 1970s',
        annualPercentageFee: 0.54
    }, {
        id: 242,
        name: 'Telstra Super Growth',
        annualPercentageFee: 1.09
    }, {
        id: 243,
        name: 'Mercer WGSP 1989 to 1993',
        annualPercentageFee: 0.95
    }, {
        id: 244,
        name: 'Mercer WGSP 1994 to 1998',
        annualPercentageFee: 0.95
    }, {
        id: 245,
        name: 'United Technologies Corporation Retirement Plan Balanced',
        annualPercentageFee: 1.21
    }, {
        id: 246,
        name: 'ANZ Smart Choice Super 1970s',
        annualPercentageFee: 0.6
    }, {
        id: 247,
        name: 'BT Super for Life Employer Super 2000s',
        annualPercentageFee: 1.19
    }, {
        id: 248,
        name: 'Water Corporation Super Plan Growth',
        annualPercentageFee: 0.97
    }, {
        id: 249,
        name: 'The Executive Super MyLife',
        annualPercentageFee: 1.08
    }, {
        id: 250,
        name: 'BT Super for Life Employer Super 1960s',
        annualPercentageFee: 1.19
    }, {
        id: 251,
        name: 'Mercer SmartPath 1964 to 1968',
        annualPercentageFee: 1.36
    }, {
        id: 252,
        name: 'Mercer SmartPath 1969 to 1973',
        annualPercentageFee: 1.36
    }, {
        id: 253,
        name: 'Aon 50',
        annualPercentageFee: 0.92
    }, {
        id: 254,
        name: 'Virgin Super Essentials Tracker Balanced 40S Mix',
        annualPercentageFee: 1.11
    }, {
        id: 255,
        name: 'Mercer WGSP 1999 to 2003',
        annualPercentageFee: 0.95
    }, {
        id: 256,
        name: 'Mercer SmartPath 1974 to 1978',
        annualPercentageFee: 1.36
    }, {
        id: 257,
        name: 'Mercer SmartPath 1979 to 1983',
        annualPercentageFee: 1.36
    }, {
        id: 258,
        name: 'Mercer SmartPath 1984 to 1988',
        annualPercentageFee: 1.36
    }, {
        id: 259,
        name: 'Colonial First State FirstChoice Superannuation Trust 196064',
        annualPercentageFee: 1.12
    }, {
        id: 260,
        name: 'Anglican National ANS RIL Balanced',
        annualPercentageFee: 1
    }, {
        id: 261,
        name: 'Mercer SmartPath 1989 to 1993',
        annualPercentageFee: 1.36
    }, {
        id: 262,
        name: 'Mercer SmartPath 1994 to 1998',
        annualPercentageFee: 1.36
    }, {
        id: 263,
        name: 'Betros Bros Super No 2',
        annualPercentageFee: 1.07
    }, {
        id: 264,
        name: 'ANZ Smart Choice SuperFor QBE employees 1980s',
        annualPercentageFee: 0.54
    }, {
        id: 265,
        name: 'Westpac Group Plan 1970s',
        annualPercentageFee: 0.74
    }, {
        id: 266,
        name: 'ANZ Smart Choice Super 1980s',
        annualPercentageFee: 0.6
    }, {
        id: 267,
        name: 'EquitySuper',
        annualPercentageFee: 1.35
    }, {
        id: 268,
        name: 'ANZ Smart Choice SuperFor QBE employees 1990s',
        annualPercentageFee: 0.54
    }, {
        id: 269,
        name: 'Aon 49',
        annualPercentageFee: 0.92
    }, {
        id: 270,
        name: 'ANZ Smart Choice Super 1990s',
        annualPercentageFee: 0.6
    }, {
        id: 271,
        name: 'LESF Super',
        annualPercentageFee: 1.32
    }, {
        id: 272,
        name: 'Lutheran Super Balanced Compliant',
        annualPercentageFee: 0.89
    }, {
        id: 273,
        name: 'Mercer SmartPath 1999 to 2003',
        annualPercentageFee: 1.36
    }, {
        id: 274,
        name: 'BT Business 1960s',
        annualPercentageFee: 1.19
    }, {
        id: 275,
        name: 'Westpac Group Plan 1980s',
        annualPercentageFee: 0.74
    }, {
        id: 276,
        name: 'Aon 48',
        annualPercentageFee: 0.92
    }, {
        id: 277,
        name: 'BT Super for Life Employer Super 1970s',
        annualPercentageFee: 1.19
    }, {
        id: 278,
        name: 'Westpac Group Plan 1990s',
        annualPercentageFee: 0.74
    }, {
        id: 279,
        name: 'Australian Catholic Super and Retirement Balanced',
        annualPercentageFee: 0.95
    }, {
        id: 280,
        name: 'Aon 47',
        annualPercentageFee: 0.92
    }, {
        id: 281,
        name: 'Elphinstone Group Super Balanced',
        annualPercentageFee: 1.21
    }, {
        id: 282,
        name: 'BT Super for Life Employer Super 1980s',
        annualPercentageFee: 1.19
    }, {
        id: 283,
        name: 'BT Super for Life Employer Super 1990s',
        annualPercentageFee: 1.19
    }, {
        id: 284,
        name: 'BT Business 2000s',
        annualPercentageFee: 1.2
    }, {
        id: 285,
        name: 'Colonial First State FirstChoice Superannuation Trust 196569',
        annualPercentageFee: 1.12
    }, {
        id: 286,
        name: 'Aon 46',
        annualPercentageFee: 0.92
    }, {
        id: 287,
        name: 'Virgin Super Essentials Tracker Balanced Under 40S Mix',
        annualPercentageFee: 1.11
    }, {
        id: 288,
        name: 'Colonial First State FirstChoice Superannuation Trust 197074',
        annualPercentageFee: 1.12
    }, {
        id: 289,
        name: 'Colonial First State FirstChoice Superannuation Trust 199599',
        annualPercentageFee: 1.12
    }, {
        id: 290,
        name: 'BT Business 1970s',
        annualPercentageFee: 1.2
    }, {
        id: 291,
        name: 'Colonial First State FirstChoice Superannuation Trust 198589',
        annualPercentageFee: 1.12
    }, {
        id: 292,
        name: 'Colonial First State FirstChoice Superannuation Trust 197579',
        annualPercentageFee: 1.12
    }, {
        id: 293,
        name: 'Colonial First State FirstChoice Superannuation Trust 198084',
        annualPercentageFee: 1.12
    }, {
        id: 294,
        name: 'Aon 45',
        annualPercentageFee: 0.92
    }, {
        id: 295,
        name: 'Colonial First State FirstChoice Superannuation Trust 199094',
        annualPercentageFee: 1.12
    }, {
        id: 296,
        name: 'Aon 44',
        annualPercentageFee: 0.92
    }, {
        id: 297,
        name: 'The Victorian Independent Schools Super VISSF Balanced',
        annualPercentageFee: 0.92
    }, {
        id: 298,
        name: 'BT Business 1990s',
        annualPercentageFee: 1.2
    }, {
        id: 299,
        name: 'BT Business 1980s',
        annualPercentageFee: 1.2
    }, {
        id: 300,
        name: 'Aon 43',
        annualPercentageFee: 0.92
    }, {
        id: 301,
        name: 'Anglican National ANS RIL Growth',
        annualPercentageFee: 1.09
    }, {
        id: 302,
        name: 'Aon High Growth',
        annualPercentageFee: 0.92
    }, {
        id: 303,
        name: 'Anglican National ANS RIL High Growth',
        annualPercentageFee: 1.19
    }];

    $scope.investOptions = [{
        id: 0,
        name: 'Cash',
        netReturn: 2.90
    }, {
        id: 1,
        name: 'Conservative',
        netReturn: 4.20
    }, {
        id: 2,
        name: 'Moderate',
        netReturn: 5.00
    }, {
        id: 3,
        name: 'Balanced',
        netReturn: 5.70
    }, {
        id: 4,
        name: 'Growth',
        netReturn: 6.20
    }, {
        id: 5,
        name: 'High Growth',
        netReturn: 6.60
    }];

    $scope.investOptions = [{
        id: 0,
        name: 'Cash',
        netReturn: 2.90
    }, {
        id: 1,
        name: 'Conservative',
        netReturn: 4.20
    }, {
        id: 2,
        name: 'Moderate',
        netReturn: 5.00
    }, {
        id: 3,
        name: 'Balanced',
        netReturn: 5.70
    }, {
        id: 4,
        name: 'Growth',
        netReturn: 6.20
    }, {
        id: 5,
        name: 'High Growth',
        netReturn: 6.60
    }];

    $scope.schoolObjects = [{
        id: 0,
        name: "Sydney Grammar School Darlinghurst",
        address: "College St- Darlinghurst NSW 2010",
        state: "NSW",
        upfrontFee: 5489,
        annualFee: 32644
    }, {
        id: 1,
        name: "PLC Sydney",
        address: "Boundary St- Croydon NSW 2132",
        state: "NSW",
        upfrontFee: 3415,
        annualFee: 24411
    }, {
        id: 2,
        name: "SCEGGS Darlinghurst",
        address: "215 Forbes St- Darlinghurst NSW 2010",
        state: "NSW",
        upfrontFee: 4950,
        annualFee: 28348
    }, {
        id: 3,
        name: "The Scotts College Sydney",
        address: "Victoria Rd- Bellevue Hill NSW 2023",
        state: "NSW",
        upfrontFee: 5500,
        annualFee: 33925
    }, {
        id: 4,
        name: "Pymble Ladies College",
        address: "Avon Rd- Pymble NSW 2073",
        state: "NSW",
        upfrontFee: 3430,
        annualFee: 24002
    }, {
        id: 5,
        name: "Ascham School",
        address: "188 New South Head Rd- Edgecliff- NSW 2027",
        state: "NSW",
        upfrontFee: 6300,
        annualFee: 32000
    }, {
        id: 6,
        name: "Abbotsleigh",
        address: "1666 Pacific Highway- Wahroonga- NSW 2076",
        state: "NSW",
        upfrontFee: 1970,
        annualFee: 28640
    }, {
        id: 7,
        name: "St Aloysius College",
        address: "47 Upper Pitt Street- Milsons Point 2061 NSW Australia",
        state: "NSW",
        upfrontFee: 2650,
        annualFee: 16278
    }, {
        id: 8,
        name: "Meridan School",
        address: "10-12 Redmyre Road- Strathfield NSW 2135",
        state: "NSW",
        upfrontFee: 1825,
        annualFee: 28340
    }, {
        id: 9,
        name: "Sydney Church of England Grammar School (SHORE)",
        address: "Blue Street- North Sydney- NSW- 2060- Australia",
        state: "NSW",
        upfrontFee: 2400,
        annualFee: 24126
    }, {
        id: 10,
        name: "Cranbrook School",
        address: "5 Victoria Road- Bellevue Hill NSW 2023 Australia",
        state: "NSW",
        upfrontFee: 7300,
        annualFee: 28325
    }, {
        id: 11,
        name: "Knox Grammar School",
        address: "7 Woodville Ave- Wahroonga 2076 NSW Australia",
        state: "NSW",
        upfrontFee: 3000,
        annualFee: 29430
    }, {
        id: 12,
        name: "The Kings School",
        address: "87-129 PENNANT HILLS ROAD- NORTH PARRAMATTA- NSW 2151- AUSTRALIA",
        state: "NSW",
        upfrontFee: 3850,
        annualFee: 25345
    }, {
        id: 13,
        name: "ST Ignatius' College",
        address: "1 Tambourine Bay Road- NSW Lane Cove",
        state: "NSW",
        upfrontFee: 4530,
        annualFee: 23880
    }, {
        id: 14,
        name: "St Joseph's College",
        address: "Mark Street- Hunters Hill- NSW 2110",
        state: "NSW",
        upfrontFee: 3300,
        annualFee: 29040
    }, {
        id: 15,
        name: "Loreto Normanhurst",
        address: "91-93 Pennant Hills Road- Normanhurst- Sydney- NSW 2076",
        state: "NSW",
        upfrontFee: 3330,
        annualFee: 19179
    }, {
        id: 16,
        name: "Loreto Kirribilli",
        address: "85 Carabella Street- Kirribilli NSW 2061- Australia",
        state: "NSW",
        upfrontFee: 3220,
        annualFee: 15645
    }, {
        id: 17,
        name: "Queenswood School for Girls",
        address: "47 Mandolong Rd- Mosman NSW 2088",
        state: "NSW",
        upfrontFee: 4220,
        annualFee: 25171
    }, {
        id: 18,
        name: "Roseville College",
        address: "27 Bancroft Avenue Roseville NSW 2069 Australia",
        state: "NSW",
        upfrontFee: 1220,
        annualFee: 20735
    }, {
        id: 19,
        name: "Parramatta Marist High School",
        address: "2 DARCY ROAD- WESTMEAD NSW AUSTRALIA 2145",
        state: "NSW",
        upfrontFee: 1220,
        annualFee: 4473
    }, {
        id: 20,
        name: "Barker College",
        address: "91 Pacific Highway Hornsby NSW 2077",
        state: "NSW",
        upfrontFee: 3800,
        annualFee: 25140
    }, {
        id: 21,
        name: "Ruyton Girls' School, Kew.",
        address: "12 Selbourne Rd- Kew VIC 3101",
        state: "VIC",
        upfrontFee: 1610,
        annualFee: 22360
    }, {
        id: 22,
        name: "Shelford Girls' Grammar, Caulfield.",
        address: "3 Hood Cres- Caulfield VIC 3161",
        state: "VIC",
        upfrontFee: 1100,
        annualFee: 25518
    }, {
        id: 23,
        name: "Fintona Girls' School, Balwyn.",
        address: "79 Balwyn Rd- Balwyn VIC 3103",
        state: "VIC",
        upfrontFee: 1150,
        annualFee: 20399
    }, {
        id: 24,
        name: "Lauriston Girls' School, Aramadale.",
        address: "38 Huntingtower Rd- Armadale VIC 3143",
        state: "VIC",
        upfrontFee: 1100,
        annualFee: 27160
    }, {
        id: 25,
        name: "Loreto Mandeville Hall, Toorak.",
        address: "10 Mandeville Cres- Toorak VIC 3142",
        state: "VIC",
        upfrontFee: 1900,
        annualFee: 22398
    }, {
        id: 26,
        name: "Prebyterian Ladies' College, Burwood.",
        address: "141 Burwood Hwy- Burwood VIC 3125",
        state: "VIC",
        upfrontFee: 1300,
        annualFee: 23479
    }, {
        id: 27,
        name: "Camberwell Girls' Grammar School, Canterbury.",
        address: " 2 Torrington St- Canterbury VIC 3126",
        state: "VIC",
        upfrontFee: 1100,
        annualFee: 19051
    }, {
        id: 28,
        name: "Melbourne Girls Grammar School, South Yarra.",
        address: "86 Anderson St- South Yarra VIC 3141",
        state: "VIC",
        upfrontFee: 1650,
        annualFee: 27746
    }, {
        id: 29,
        name: "Mentone Girls' Grammar School, Mentone.",
        address: "11 Mentone Parade- Mentone VIC 3194",
        state: "VIC",
        upfrontFee: 1100,
        annualFee: 22354
    }, {
        id: 30,
        name: "Korowa Anglican Girls' School Glen Iris.",
        address: "10-16 Ranfurlie Cres- Glen Iris VIC 3146",
        state: "VIC",
        upfrontFee: 900,
        annualFee: 27138
    }, {
        id: 31,
        name: "Camberwell Grammar School, Canterbury.",
        address: "55 Mont Albert Rd- Canterbury VIC 3126",
        state: "VIC",
        upfrontFee: 1330,
        annualFee: 25600
    }, {
        id: 32,
        name: "Scotch College, Hawthorn. ",
        address: "1 Morrison St- Hawthorn VIC 3122",
        state: "VIC",
        upfrontFee: 1600,
        annualFee: 29912
    }, {
        id: 33,
        name: "Melbourne Grammar School, South Yarra.",
        address: "355 St Kilda Rd- Melbourne VIC 3004",
        state: "VIC",
        upfrontFee: 3900,
        annualFee: 24885
    }, {
        id: 34,
        name: "Caulfield Grammar School, St Kilda",
        address: "217 Glen Eira Road- East St. Kilda- Melbourne- Victoria 3183",
        state: "VIC",
        upfrontFee: 2100,
        annualFee: 23789
    }, {
        id: 35,
        name: "Haileybury College, Keysborough.",
        address: "855 Springvale Road Keysborough VIC 3173",
        state: "VIC",
        upfrontFee: 2500,
        annualFee: 24702
    }, {
        id: 36,
        name: "Xavier College, Kew.",
        address: "135 Barkers Road- Melbourne- Kew- Victoria",
        state: "VIC",
        upfrontFee: 945,
        annualFee: 21957
    }, {
        id: 37,
        name: "Trinity Grammar School, Kew.",
        address: "40 Charles St- Kew- Melbourne Victoria 3101",
        state: "VIC",
        upfrontFee: 2360,
        annualFee: 26349
    }, {
        id: 38,
        name: "St Kevin's College, Toorak.",
        address: "31 Moonga Rd- Toorak VIC 3142",
        state: "VIC",
        upfrontFee: 3000,
        annualFee: 16290
    }, {
        id: 39,
        name: "Brighton Grammar School, Brighton",
        address: "90 Outer Cres- Brighton VIC 3186",
        state: "VIC",
        upfrontFee: 2200,
        annualFee: 25247
    }, {
        id: 40,
        name: "Firbank Grammar School, Brighton",
        address: "51 Outer Crescent- Brighton VIC 3186",
        state: "VIC",
        upfrontFee: 1100,
        annualFee: 24769
    }, {
        id: 41,
        name: "St Leonard's College, Brighton East.",
        address: "163 South Road- Brighton East VIC 3187",
        state: "VIC",
        upfrontFee: 1800,
        annualFee: 23415
    }, {
        id: 42,
        name: "Brisbane Grammar School",
        address: "24 Gregory Terrace- Spring Hill QLD 4000",
        state: "QLD",
        upfrontFee: 2550,
        annualFee: 23000
    }, {
        id: 43,
        name: "Brisbane Girls Grammer School",
        address: "70 Gregory Terrace- Spring Hill QLD 4000",
        state: "QLD",
        upfrontFee: 2040,
        annualFee: 22520
    }, {
        id: 44,
        name: "Ormiston College",
        address: "97 Dundas St W- Ormiston QLD 4160",
        state: "QLD",
        upfrontFee: 795,
        annualFee: 2527
    }, {
        id: 45,
        name: "Somerville House",
        address: "17 Graham St- South Brisbane QLD 4101",
        state: "QLD",
        upfrontFee: 1530,
        annualFee: 18292
    }, {
        id: 46,
        name: "Brisbane Boys College",
        address: "Kensington Terrace- Toowong QLD 4066",
        state: "QLD",
        upfrontFee: 1960,
        annualFee: 18434
    }, {
        id: 47,
        name: "St Aidan's Anglican Girls School",
        address: "11 Ruthven St- Corinda QLD 4075",
        state: "QLD",
        upfrontFee: 1300,
        annualFee: 17272
    }, {
        id: 48,
        name: "Anglican Church Grammar School",
        address: "Oaklands Parade- East Brisbane QLD 4169",
        state: "QLD",
        upfrontFee: 1930,
        annualFee: 18813
    }, {
        id: 49,
        name: "Clayfield College",
        address: "23 Gregory Street- Clayfield QLD 4011",
        state: "QLD",
        upfrontFee: 1135,
        annualFee: 17031
    }, {
        id: 50,
        name: "Cannon Hill Anglican College",
        address: "Junction Rd- Cannon Hill QLD 4170",
        state: "QLD",
        upfrontFee: 1250,
        annualFee: 10386
    }, {
        id: 51,
        name: "Sheldon College",
        address: "Taylor Road- Sheldon- QLD 4157",
        state: "QLD",
        upfrontFee: 660,
        annualFee: 11479
    }, {
        id: 52,
        name: "St Margarets Anglican Girls School",
        address: "11 Petrie St- Ascot QLD 4007",
        state: "QLD",
        upfrontFee: 1220,
        annualFee: 17762
    }, {
        id: 53,
        name: "Hillbrook Anglican School",
        address: "45 Hurdcotte Street Enoggera QLD 4051",
        state: "QLD",
        upfrontFee: 1610,
        annualFee: 11092
    }, {
        id: 54,
        name: "st peters lutheran college",
        address: "66 Harts Rd- Indooroopilly QLD 4068",
        state: "QLD",
        upfrontFee: 1100,
        annualFee: 15806
    }, {
        id: 55,
        name: "Moreton Bay College",
        address: "450 Wondall Rd- Manly West QLD 4179",
        state: "QLD",
        upfrontFee: 1100,
        annualFee: 12532
    }, {
        id: 56,
        name: "St Rita's College, Clayfield",
        address: "41 Enderley Rd- Clayfield QLD 4011",
        state: "QLD",
        upfrontFee: 1100,
        annualFee: 7120
    }, {
        id: 57,
        name: "The Southport School",
        address: "2 Winchester St- Southport QLD 4215",
        state: "QLD",
        upfrontFee: 1500,
        annualFee: 15030
    }, {
        id: 58,
        name: "St Joseph's College Gregory Terrace",
        address: "Gregory Terrace- Brisbane- QLD 4000- Australia",
        state: "QLD",
        upfrontFee: 2420,
        annualFee: 8215
    }, {
        id: 59,
        name: "The Lakes College",
        address: "2 College St- North Lakes QLD 4509",
        state: "QLD",
        upfrontFee: 500,
        annualFee: 8415
    }, {
        id: 60,
        name: "Redeemer Lutheran College",
        address: "745 Rochedale Rd- Rochedale QLD 4123",
        state: "QLD",
        upfrontFee: 700,
        annualFee: 8979
    }, {
        id: 61,
        name: "Moreton Bay Boys College",
        address: "302 Manly Rd- Manly West QLD 4179",
        state: "QLD",
        upfrontFee: 1100,
        annualFee: 11023
    }, {
        id: 62,
        name: "Wilderness School, Medindie.",
        address: "30 Hawkers Rd- Medindie SA 5081",
        state: "SA",
        upfrontFee: 1050,
        annualFee: 18888
    }, {
        id: 63,
        name: "St Peter's College ",
        address: "57 Hackney Rd- Hackney SA 5069",
        state: "SA",
        upfrontFee: 2600,
        annualFee: 20520
    }, {
        id: 64,
        name: "St Peter's Girls Collegiate Girls' School",
        address: "Stonyfell Rd- Stonyfell SA 5066",
        state: "SA",
        upfrontFee: 970,
        annualFee: 17285
    }, {
        id: 65,
        name: "Walford Anglican School for Girls",
        address: "316 Unley Rd- Hyde Park SA 5061",
        state: "SA",
        upfrontFee: 1095,
        annualFee: 19301
    }, {
        id: 66,
        name: "Prince Alfred College",
        address: "23 Dequetteville Terrace- Kent Town SA 5067",
        state: "SA",
        upfrontFee: 1100,
        annualFee: 17319
    }, {
        id: 67,
        name: "Seymour College",
        address: "546 Portrush Rd- Glen Osmond SA 5064",
        state: "SA",
        upfrontFee: 1050,
        annualFee: 19679
    }, {
        id: 68,
        name: "Pulteney Grammar School",
        address: "190 South Terrace ADELAIDE SA 5000",
        state: "SA",
        upfrontFee: 850,
        annualFee: 18946
    }, {
        id: 69,
        name: "St Aloysius College, Adelaide",
        address: "53 Wakefield St- Adelaide SA 5000",
        state: "SA",
        upfrontFee: 600,
        annualFee: 7636
    }, {
        id: 70,
        name: "St Dominics Priory College",
        address: "119/139 Molesworth St- North Adelaide SA 5006",
        state: "SA",
        upfrontFee: 0,
        annualFee: 6674
    }, {
        id: 71,
        name: "St John's Grammar School",
        address: "29 Gloucester Ave- Belair SA 5052",
        state: "SA",
        upfrontFee: 688,
        annualFee: 11811
    }, {
        id: 72,
        name: "Woodcroft College",
        address: "143-173 Bains Rd- Morphett Vale SA 5162",
        state: "SA",
        upfrontFee: 755,
        annualFee: 6297
    }, {
        id: 73,
        name: "St Ignatious College, Adelaide",
        address: "2 Manresa Ct- Athelstone SA 5076",
        state: "SA",
        upfrontFee: 975,
        annualFee: 14013
    }, {
        id: 74,
        name: "Pedare Christian College",
        address: "2-30 Surrey Farm Dr- Golden Grove SA 5125",
        state: "SA",
        upfrontFee: 150,
        annualFee: 7502
    }, {
        id: 75,
        name: "Westminster School",
        address: "1-27 Alison Avenue- Marion- South Australia ",
        state: "SA",
        upfrontFee: 800,
        annualFee: 17932
    }, {
        id: 76,
        name: "Kings Baptist Grammar School",
        address: "no address",
        state: "SA",
        upfrontFee: 175,
        annualFee: 0
    }, {
        id: 77,
        name: "Scotch College Adelaide",
        address: "Carruth Road- Torrens Park South Australia 5062",
        state: "SA",
        upfrontFee: 1150,
        annualFee: 19668
    }, {
        id: 78,
        name: "Concordia College",
        address: "45 Cheltenham St- Highgate SA 5063",
        state: "SA",
        upfrontFee: 75,
        annualFee: 8820
    }, {
        id: 79,
        name: "Pembroke School",
        address: "342 The Parade- Kensington Park SA 5068",
        state: "SA",
        upfrontFee: 860,
        annualFee: 19690
    }, {
        id: 80,
        name: "Loreto College, Marryatville",
        address: "316 Portrush Rd- Marryatville SA 5068",
        state: "SA",
        upfrontFee: 745,
        annualFee: 14664
    }, {
        id: 81,
        name: "Trinity College, Gawler",
        address: "Alexander Ave- Evanston South SA 5116",
        state: "SA",
        upfrontFee: 540,
        annualFee: 4622
    }, {
        id: 82,
        name: "Hale School",
        address: "160 Hale Rd- Wembley Downs WA 6019",
        state: "WA",
        upfrontFee: 8250,
        annualFee: 21450
    }, {
        id: 83,
        name: "Christ Church Grammar School",
        address: "Queenslea Dr- Claremont WA 6010",
        state: "WA",
        upfrontFee: 6700,
        annualFee: 23088
    }, {
        id: 84,
        name: "All Saints College",
        address: "Ewing Ave.- Bull Creek WA 6149",
        state: "WA",
        upfrontFee: 5423,
        annualFee: 16534
    }, {
        id: 85,
        name: "St Mary's Anglican Girls School",
        address: "75 Elliott Rd- Karrinyup WA 6018",
        state: "WA",
        upfrontFee: 5545,
        annualFee: 18394
    }, {
        id: 86,
        name: "St Hilda's Anglican Girls School",
        address: "26 Bay View Terrace- Mosman Park WA 6012",
        state: "WA",
        upfrontFee: 4959,
        annualFee: 20284
    }, {
        id: 87,
        name: "Presbyterian Ladies' College, Perth",
        address: "14 McNeil St- Peppermint Grove WA 6011",
        state: "WA",
        upfrontFee: 4950,
        annualFee: 20982
    }, {
        id: 88,
        name: "Perth College",
        address: "31 Lawley Crescent- Mount Lawley WA 6050",
        state: "WA",
        upfrontFee: 5742,
        annualFee: 18701
    }, {
        id: 89,
        name: "Guildford Grammar School ",
        address: "11 Terrace Rd- Guildford WA 6055",
        state: "WA",
        upfrontFee: 2925,
        annualFee: 18073
    }, {
        id: 90,
        name: "Penrhos College",
        address: "6 Morrison Street- Como WA 6152",
        state: "WA",
        upfrontFee: 5489,
        annualFee: 19442
    }, {
        id: 91,
        name: "Scotch College, Perth",
        address: "76 Shenton Rd- Swanbourne WA 6010",
        state: "WA",
        upfrontFee: 6687,
        annualFee: 23499
    }, {
        id: 92,
        name: "John XXIII College, Perth",
        address: "Mooro Dr- Mount Claremont WA 6010",
        state: "WA",
        upfrontFee: 2110,
        annualFee: 7710
    }, {
        id: 93,
        name: "Santa Maria College",
        address: "18 Stoneham Rd- Attadale WA 6156",
        state: "WA",
        upfrontFee: 1020,
        annualFee: 10521
    }, {
        id: 94,
        name: "Wesley College, Perth",
        address: "40 Coode St- South Perth WA 6151",
        state: "WA",
        upfrontFee: 7276,
        annualFee: 20001
    }, {
        id: 95,
        name: "Methodist Ladies College, Perth",
        address: "356 Stirling Hwy- Claremont WA 6010",
        state: "WA",
        upfrontFee: 5320,
        annualFee: 21203
    }, {
        id: 96,
        name: "St Marks Anglican Community School",
        address: "St Marks Dr- Hillarys WA 6025",
        state: "WA",
        upfrontFee: 2030,
        annualFee: 7251
    }, {
        id: 97,
        name: "Aquinas College, Perth",
        address: "58 Mount Henry Rd- Salter Point WA 6152",
        state: "WA",
        upfrontFee: 2832,
        annualFee: 14013
    }, {
        id: 98,
        name: "Trinity College, Perth",
        address: "2 Trinity Ave- East Perth WA 6004",
        state: "WA",
        upfrontFee: 2243,
        annualFee: 13602
    }, {
        id: 99,
        name: "Sacred Heart College",
        address: "Hocking Parade- Sorrento WA 6020",
        state: "WA",
        upfrontFee: 805,
        annualFee: 8220
    }, {
        id: 100,
        name: "Newman College Perth",
        address: "216 Empire Ave- Churchlands WA 6018",
        state: "WA",
        upfrontFee: 1110,
        annualFee: 5715
    }, {
        id: 101,
        name: "Kingsway Christian College",
        address: "157 Kingsway- Darch WA 6065",
        state: "WA",
        upfrontFee: 1320,
        annualFee: 7288
    }, {
        id: 102,
        name: "Canberra Grammar School",
        address: "40 Monaro Cres- Red Hill ACT 2603",
        state: "ACT",
        upfrontFee: 2975,
        annualFee: 18753
    }, {
        id: 103,
        name: "Radford College",
        address: "1 College St- Bruce ACT 2617",
        state: "ACT",
        upfrontFee: 950,
        annualFee: 12307
    }, {
        id: 104,
        name: "Canberra Girls Grammar School",
        address: "Melbourne Ave- Deakin ACT 2600",
        state: "ACT",
        upfrontFee: 150,
        annualFee: 16942
    }, {
        id: 105,
        name: "Burgmann Anglican School",
        address: "Gungahlin Dr & The Valley Avenue- Gungahlin ACT 291",
        state: "ACT",
        upfrontFee: 875,
        annualFee: 8413
    }, {
        id: 106,
        name: "Brindabella Christian College",
        address: "136 Brigalow St- Lyneham ACT 2602",
        state: "ACT",
        upfrontFee: 700,
        annualFee: 5874
    }, {
        id: 107,
        name: "Marist College",
        address: "27 Marr St- Pearce ACT 2607",
        state: "ACT",
        upfrontFee: 400,
        annualFee: 8644
    }, {
        id: 108,
        name: "Orana Steiner School",
        address: "Unwin Place- ACT 2611",
        state: "ACT",
        upfrontFee: 550,
        annualFee: 6467
    }, {
        id: 109,
        name: "Merici College",
        address: "Wise St- Braddon ACT 2612",
        state: "ACT",
        upfrontFee: 50,
        annualFee: 6277
    }, {
        id: 110,
        name: "Emmaus Christian School",
        address: "73 Davenport St- Dickson ACT 2602",
        state: "ACT",
        upfrontFee: 300,
        annualFee: 6292
    }, {
        id: 111,
        name: "The Friends School, Hobart",
        address: "23 Commercial Rd- North Hobart TAS 7000",
        state: "TAS",
        upfrontFee: 1200,
        annualFee: 14254
    }, {
        id: 112,
        name: "Fahan School",
        address: "Fisher Avenue- Lower Sandy Bay TAS 7005",
        state: "TAS",
        upfrontFee: 2100,
        annualFee: 12412
    }, {
        id: 113,
        name: "St Michael's Collegiate School",
        address: "218 Macquarie St- Hobart TAS 7000",
        state: "TAS",
        upfrontFee: 1110,
        annualFee: 12908
    }, {
        id: 114,
        name: "The Hutchins School",
        address: "71 Nelson Rd- Sandy Bay TAS 7005",
        state: "TAS",
        upfrontFee: 1610,
        annualFee: 13400
    }, {
        id: 115,
        name: "St Mary's College, Hobart",
        address: "164 Harrington St- Hobart TAS 7000",
        state: "TAS",
        upfrontFee: 0,
        annualFee: 3958
    }, {
        id: 116,
        name: "Launceston Chruch Grammar School",
        address: "36 Button St- Mowbray TAS 7248",
        state: "TAS",
        upfrontFee: 100,
        annualFee: 12900
    }, {
        id: 117,
        name: "Launceston Christian School",
        address: " 452A W Tamar Hwy- Riverside TAS 7250",
        state: "TAS",
        upfrontFee: 1300,
        annualFee: 4802
    }];

    $scope.schoolObject_NSW = [{
        id: 0,
        name: "Sydney Grammar School Darlinghurst",
        address: "College St- Darlinghurst NSW 2010",
        state: "NSW",
        upfrontFee: 5489,
        annualFee: 32644
    }, {
        id: 1,
        name: "PLC Sydney",
        address: "Boundary St- Croydon NSW 2132",
        state: "NSW",
        upfrontFee: 3415,
        annualFee: 24411
    }, {
        id: 2,
        name: "SCEGGS Darlinghurst",
        address: "215 Forbes St- Darlinghurst NSW 2010",
        state: "NSW",
        upfrontFee: 4950,
        annualFee: 28348
    }, {
        id: 3,
        name: "The Scotts College Sydney",
        address: "Victoria Rd- Bellevue Hill NSW 2023",
        state: "NSW",
        upfrontFee: 5500,
        annualFee: 33925
    }, {
        id: 4,
        name: "Pymble Ladies College",
        address: "Avon Rd- Pymble NSW 2073",
        state: "NSW",
        upfrontFee: 3430,
        annualFee: 24002
    }, {
        id: 5,
        name: "Ascham School",
        address: "188 New South Head Rd- Edgecliff- NSW 2027",
        state: "NSW",
        upfrontFee: 6300,
        annualFee: 32000
    }, {
        id: 6,
        name: "Abbotsleigh",
        address: "1666 Pacific Highway- Wahroonga- NSW 2076",
        state: "NSW",
        upfrontFee: 1970,
        annualFee: 28640
    }, {
        id: 7,
        name: "St Aloysius College",
        address: "47 Upper Pitt Street- Milsons Point 2061 NSW Australia",
        state: "NSW",
        upfrontFee: 2650,
        annualFee: 16278
    }, {
        id: 8,
        name: "Meridan School",
        address: "10-12 Redmyre Road- Strathfield NSW 2135",
        state: "NSW",
        upfrontFee: 1825,
        annualFee: 28340
    }, {
        id: 9,
        name: "Sydney Church of England Grammar School (SHORE)",
        address: "Blue Street- North Sydney- NSW- 2060- Australia",
        state: "NSW",
        upfrontFee: 2400,
        annualFee: 24126
    }, {
        id: 10,
        name: "Cranbrook School",
        address: "5 Victoria Road- Bellevue Hill NSW 2023 Australia",
        state: "NSW",
        upfrontFee: 7300,
        annualFee: 28325
    }, {
        id: 11,
        name: "Knox Grammar School",
        address: "7 Woodville Ave- Wahroonga 2076 NSW Australia",
        state: "NSW",
        upfrontFee: 3000,
        annualFee: 29430
    }, {
        id: 12,
        name: "The Kings School",
        address: "87-129 PENNANT HILLS ROAD- NORTH PARRAMATTA- NSW 2151- AUSTRALIA",
        state: "NSW",
        upfrontFee: 3850,
        annualFee: 25345
    }, {
        id: 13,
        name: "ST Ignatius' College",
        address: "1 Tambourine Bay Road- NSW Lane Cove",
        state: "NSW",
        upfrontFee: 4530,
        annualFee: 23880
    }, {
        id: 14,
        name: "St Joseph's College",
        address: "Mark Street- Hunters Hill- NSW 2110",
        state: "NSW",
        upfrontFee: 3300,
        annualFee: 29040
    }, {
        id: 15,
        name: "Loreto Normanhurst",
        address: "91-93 Pennant Hills Road- Normanhurst- Sydney- NSW 2076",
        state: "NSW",
        upfrontFee: 3330,
        annualFee: 19179
    }, {
        id: 16,
        name: "Loreto Kirribilli",
        address: "85 Carabella Street- Kirribilli NSW 2061- Australia",
        state: "NSW",
        upfrontFee: 3220,
        annualFee: 15645
    }, {
        id: 17,
        name: "Queenswood School for Girls",
        address: "47 Mandolong Rd- Mosman NSW 2088",
        state: "NSW",
        upfrontFee: 4220,
        annualFee: 25171
    }, {
        id: 18,
        name: "Roseville College",
        address: "27 Bancroft Avenue Roseville NSW 2069 Australia",
        state: "NSW",
        upfrontFee: 1220,
        annualFee: 20735
    }, {
        id: 19,
        name: "Parramatta Marist High School",
        address: "2 DARCY ROAD- WESTMEAD NSW AUSTRALIA 2145",
        state: "NSW",
        upfrontFee: 1220,
        annualFee: 4473
    }, {
        id: 20,
        name: "Barker College",
        address: "91 Pacific Highway Hornsby NSW 2077",
        state: "NSW",
        upfrontFee: 3800,
        annualFee: 25140
    }];
    $scope.schoolObject_VIC = [{
        id: 21,
        name: "Ruyton Girls' School, Kew.",
        address: "12 Selbourne Rd- Kew VIC 3101",
        state: "VIC",
        upfrontFee: 1610,
        annualFee: 22360
    }, {
        id: 22,
        name: "Shelford Girls' Grammar, Caulfield.",
        address: "3 Hood Cres- Caulfield VIC 3161",
        state: "VIC",
        upfrontFee: 1100,
        annualFee: 25518
    }, {
        id: 23,
        name: "Fintona Girls' School, Balwyn.",
        address: "79 Balwyn Rd- Balwyn VIC 3103",
        state: "VIC",
        upfrontFee: 1150,
        annualFee: 20399
    }, {
        id: 24,
        name: "Lauriston Girls' School, Aramadale.",
        address: "38 Huntingtower Rd- Armadale VIC 3143",
        state: "VIC",
        upfrontFee: 1100,
        annualFee: 27160
    }, {
        id: 25,
        name: "Loreto Mandeville Hall, Toorak.",
        address: "10 Mandeville Cres- Toorak VIC 3142",
        state: "VIC",
        upfrontFee: 1900,
        annualFee: 22398
    }, {
        id: 26,
        name: "Prebyterian Ladies' College, Burwood.",
        address: "141 Burwood Hwy- Burwood VIC 3125",
        state: "VIC",
        upfrontFee: 1300,
        annualFee: 23479
    }, {
        id: 27,
        name: "Camberwell Girls' Grammar School, Canterbury.",
        address: " 2 Torrington St- Canterbury VIC 3126",
        state: "VIC",
        upfrontFee: 1100,
        annualFee: 19051
    }, {
        id: 28,
        name: "Melbourne Girls Grammar School, South Yarra.",
        address: "86 Anderson St- South Yarra VIC 3141",
        state: "VIC",
        upfrontFee: 1650,
        annualFee: 27746
    }, {
        id: 29,
        name: "Mentone Girls' Grammar School, Mentone.",
        address: "11 Mentone Parade- Mentone VIC 3194",
        state: "VIC",
        upfrontFee: 1100,
        annualFee: 22354
    }, {
        id: 30,
        name: "Korowa Anglican Girls' School Glen Iris.",
        address: "10-16 Ranfurlie Cres- Glen Iris VIC 3146",
        state: "VIC",
        upfrontFee: 900,
        annualFee: 27138
    }, {
        id: 31,
        name: "Camberwell Grammar School, Canterbury.",
        address: "55 Mont Albert Rd- Canterbury VIC 3126",
        state: "VIC",
        upfrontFee: 1330,
        annualFee: 25600
    }, {
        id: 32,
        name: "Scotch College, Hawthorn. ",
        address: "1 Morrison St- Hawthorn VIC 3122",
        state: "VIC",
        upfrontFee: 1600,
        annualFee: 29912
    }, {
        id: 33,
        name: "Melbourne Grammar School, South Yarra.",
        address: "355 St Kilda Rd- Melbourne VIC 3004",
        state: "VIC",
        upfrontFee: 3900,
        annualFee: 24885
    }, {
        id: 34,
        name: "Caulfield Grammar School, St Kilda",
        address: "217 Glen Eira Road- East St. Kilda- Melbourne- Victoria 3183",
        state: "VIC",
        upfrontFee: 2100,
        annualFee: 23789
    }, {
        id: 35,
        name: "Haileybury College, Keysborough.",
        address: "855 Springvale Road Keysborough VIC 3173",
        state: "VIC",
        upfrontFee: 2500,
        annualFee: 24702
    }, {
        id: 36,
        name: "Xavier College, Kew.",
        address: "135 Barkers Road- Melbourne- Kew- Victoria",
        state: "VIC",
        upfrontFee: 945,
        annualFee: 21957
    }, {
        id: 37,
        name: "Trinity Grammar School, Kew.",
        address: "40 Charles St- Kew- Melbourne Victoria 3101",
        state: "VIC",
        upfrontFee: 2360,
        annualFee: 26349
    }, {
        id: 38,
        name: "St Kevin's College, Toorak.",
        address: "31 Moonga Rd- Toorak VIC 3142",
        state: "VIC",
        upfrontFee: 3000,
        annualFee: 16290
    }, {
        id: 39,
        name: "Brighton Grammar School, Brighton",
        address: "90 Outer Cres- Brighton VIC 3186",
        state: "VIC",
        upfrontFee: 2200,
        annualFee: 25247
    }, {
        id: 40,
        name: "Firbank Grammar School, Brighton",
        address: "51 Outer Crescent- Brighton VIC 3186",
        state: "VIC",
        upfrontFee: 1100,
        annualFee: 24769
    }, {
        id: 41,
        name: "St Leonard's College, Brighton East.",
        address: "163 South Road- Brighton East VIC 3187",
        state: "VIC",
        upfrontFee: 1800,
        annualFee: 23415
    }];
    $scope.schoolObject_QLD = [{
        id: 42,
        name: "Brisbane Grammar School",
        address: "24 Gregory Terrace- Spring Hill QLD 4000",
        state: "QLD",
        upfrontFee: 2550,
        annualFee: 23000
    }, {
        id: 43,
        name: "Brisbane Girls Grammer School",
        address: "70 Gregory Terrace- Spring Hill QLD 4000",
        state: "QLD",
        upfrontFee: 2040,
        annualFee: 22520
    }, {
        id: 44,
        name: "Ormiston College",
        address: "97 Dundas St W- Ormiston QLD 4160",
        state: "QLD",
        upfrontFee: 795,
        annualFee: 2527
    }, {
        id: 45,
        name: "Somerville House",
        address: "17 Graham St- South Brisbane QLD 4101",
        state: "QLD",
        upfrontFee: 1530,
        annualFee: 18292
    }, {
        id: 46,
        name: "Brisbane Boys College",
        address: "Kensington Terrace- Toowong QLD 4066",
        state: "QLD",
        upfrontFee: 1960,
        annualFee: 18434
    }, {
        id: 47,
        name: "St Aidan's Anglican Girls School",
        address: "11 Ruthven St- Corinda QLD 4075",
        state: "QLD",
        upfrontFee: 1300,
        annualFee: 17272
    }, {
        id: 48,
        name: "Anglican Church Grammar School",
        address: "Oaklands Parade- East Brisbane QLD 4169",
        state: "QLD",
        upfrontFee: 1930,
        annualFee: 18813
    }, {
        id: 49,
        name: "Clayfield College",
        address: "23 Gregory Street- Clayfield QLD 4011",
        state: "QLD",
        upfrontFee: 1135,
        annualFee: 17031
    }, {
        id: 50,
        name: "Cannon Hill Anglican College",
        address: "Junction Rd- Cannon Hill QLD 4170",
        state: "QLD",
        upfrontFee: 1250,
        annualFee: 10386
    }, {
        id: 51,
        name: "Sheldon College",
        address: "Taylor Road- Sheldon- QLD 4157",
        state: "QLD",
        upfrontFee: 660,
        annualFee: 11479
    }, {
        id: 52,
        name: "St Margarets Anglican Girls School",
        address: "11 Petrie St- Ascot QLD 4007",
        state: "QLD",
        upfrontFee: 1220,
        annualFee: 17762
    }, {
        id: 53,
        name: "Hillbrook Anglican School",
        address: "45 Hurdcotte Street Enoggera QLD 4051",
        state: "QLD",
        upfrontFee: 1610,
        annualFee: 11092
    }, {
        id: 54,
        name: "st peters lutheran college",
        address: "66 Harts Rd- Indooroopilly QLD 4068",
        state: "QLD",
        upfrontFee: 1100,
        annualFee: 15806
    }, {
        id: 55,
        name: "Moreton Bay College",
        address: "450 Wondall Rd- Manly West QLD 4179",
        state: "QLD",
        upfrontFee: 1100,
        annualFee: 12532
    }, {
        id: 56,
        name: "St Rita's College, Clayfield",
        address: "41 Enderley Rd- Clayfield QLD 4011",
        state: "QLD",
        upfrontFee: 1100,
        annualFee: 7120
    }, {
        id: 57,
        name: "The Southport School",
        address: "2 Winchester St- Southport QLD 4215",
        state: "QLD",
        upfrontFee: 1500,
        annualFee: 15030
    }, {
        id: 58,
        name: "St Joseph's College Gregory Terrace",
        address: "Gregory Terrace- Brisbane- QLD 4000- Australia",
        state: "QLD",
        upfrontFee: 2420,
        annualFee: 8215
    }, {
        id: 59,
        name: "The Lakes College",
        address: "2 College St- North Lakes QLD 4509",
        state: "QLD",
        upfrontFee: 500,
        annualFee: 8415
    }, {
        id: 60,
        name: "Redeemer Lutheran College",
        address: "745 Rochedale Rd- Rochedale QLD 4123",
        state: "QLD",
        upfrontFee: 700,
        annualFee: 8979
    }, {
        id: 61,
        name: "Moreton Bay Boys College",
        address: "302 Manly Rd- Manly West QLD 4179",
        state: "QLD",
        upfrontFee: 1100,
        annualFee: 11023
    }];
    $scope.schoolObject_SA = [{
        id: 62,
        name: "Wilderness School, Medindie.",
        address: "30 Hawkers Rd- Medindie SA 5081",
        state: "SA",
        upfrontFee: 1050,
        annualFee: 18888
    }, {
        id: 63,
        name: "St Peter's College ",
        address: "57 Hackney Rd- Hackney SA 5069",
        state: "SA",
        upfrontFee: 2600,
        annualFee: 20520
    }, {
        id: 64,
        name: "St Peter's Girls Collegiate Girls' School",
        address: "Stonyfell Rd- Stonyfell SA 5066",
        state: "SA",
        upfrontFee: 970,
        annualFee: 17285
    }, {
        id: 65,
        name: "Walford Anglican School for Girls",
        address: "316 Unley Rd- Hyde Park SA 5061",
        state: "SA",
        upfrontFee: 1095,
        annualFee: 19301
    }, {
        id: 66,
        name: "Prince Alfred College",
        address: "23 Dequetteville Terrace- Kent Town SA 5067",
        state: "SA",
        upfrontFee: 1100,
        annualFee: 17319
    }, {
        id: 67,
        name: "Seymour College",
        address: "546 Portrush Rd- Glen Osmond SA 5064",
        state: "SA",
        upfrontFee: 1050,
        annualFee: 19679
    }, {
        id: 68,
        name: "Pulteney Grammar School",
        address: "190 South Terrace ADELAIDE SA 5000",
        state: "SA",
        upfrontFee: 850,
        annualFee: 18946
    }, {
        id: 69,
        name: "St Aloysius College, Adelaide",
        address: "53 Wakefield St- Adelaide SA 5000",
        state: "SA",
        upfrontFee: 600,
        annualFee: 7636
    }, {
        id: 70,
        name: "St Dominics Priory College",
        address: "119/139 Molesworth St- North Adelaide SA 5006",
        state: "SA",
        upfrontFee: 0,
        annualFee: 6674
    }, {
        id: 71,
        name: "St John's Grammar School",
        address: "29 Gloucester Ave- Belair SA 5052",
        state: "SA",
        upfrontFee: 688,
        annualFee: 11811
    }, {
        id: 72,
        name: "Woodcroft College",
        address: "143-173 Bains Rd- Morphett Vale SA 5162",
        state: "SA",
        upfrontFee: 755,
        annualFee: 6297
    }, {
        id: 73,
        name: "St Ignatious College, Adelaide",
        address: "2 Manresa Ct- Athelstone SA 5076",
        state: "SA",
        upfrontFee: 975,
        annualFee: 14013
    }, {
        id: 74,
        name: "Pedare Christian College",
        address: "2-30 Surrey Farm Dr- Golden Grove SA 5125",
        state: "SA",
        upfrontFee: 150,
        annualFee: 7502
    }, {
        id: 75,
        name: "Westminster School",
        address: "1-27 Alison Avenue- Marion- South Australia ",
        state: "SA",
        upfrontFee: 800,
        annualFee: 17932
    }, {
        id: 76,
        name: "Kings Baptist Grammar School",
        address: "no address",
        state: "SA",
        upfrontFee: 175,
        annualFee: 0
    }, {
        id: 77,
        name: "Scotch College Adelaide",
        address: "Carruth Road- Torrens Park South Australia 5062",
        state: "SA",
        upfrontFee: 1150,
        annualFee: 19668
    }, {
        id: 78,
        name: "Concordia College",
        address: "45 Cheltenham St- Highgate SA 5063",
        state: "SA",
        upfrontFee: 75,
        annualFee: 8820
    }, {
        id: 79,
        name: "Pembroke School",
        address: "342 The Parade- Kensington Park SA 5068",
        state: "SA",
        upfrontFee: 860,
        annualFee: 19690
    }, {
        id: 80,
        name: "Loreto College, Marryatville",
        address: "316 Portrush Rd- Marryatville SA 5068",
        state: "SA",
        upfrontFee: 745,
        annualFee: 14664
    }, {
        id: 81,
        name: "Trinity College, Gawler",
        address: "Alexander Ave- Evanston South SA 5116",
        state: "SA",
        upfrontFee: 540,
        annualFee: 4622
    }];
    $scope.schoolObject_WA = [{
        id: 82,
        name: "Hale School",
        address: "160 Hale Rd- Wembley Downs WA 6019",
        state: "WA",
        upfrontFee: 8250,
        annualFee: 21450
    }, {
        id: 83,
        name: "Christ Church Grammar School",
        address: "Queenslea Dr- Claremont WA 6010",
        state: "WA",
        upfrontFee: 6700,
        annualFee: 23088
    }, {
        id: 84,
        name: "All Saints College",
        address: "Ewing Ave.- Bull Creek WA 6149",
        state: "WA",
        upfrontFee: 5423,
        annualFee: 16534
    }, {
        id: 85,
        name: "St Mary's Anglican Girls School",
        address: "75 Elliott Rd- Karrinyup WA 6018",
        state: "WA",
        upfrontFee: 5545,
        annualFee: 18394
    }, {
        id: 86,
        name: "St Hilda's Anglican Girls School",
        address: "26 Bay View Terrace- Mosman Park WA 6012",
        state: "WA",
        upfrontFee: 4959,
        annualFee: 20284
    }, {
        id: 87,
        name: "Presbyterian Ladies' College, Perth",
        address: "14 McNeil St- Peppermint Grove WA 6011",
        state: "WA",
        upfrontFee: 4950,
        annualFee: 20982
    }, {
        id: 88,
        name: "Perth College",
        address: "31 Lawley Crescent- Mount Lawley WA 6050",
        state: "WA",
        upfrontFee: 5742,
        annualFee: 18701
    }, {
        id: 89,
        name: "Guildford Grammar School ",
        address: "11 Terrace Rd- Guildford WA 6055",
        state: "WA",
        upfrontFee: 2925,
        annualFee: 18073
    }, {
        id: 90,
        name: "Penrhos College",
        address: "6 Morrison Street- Como WA 6152",
        state: "WA",
        upfrontFee: 5489,
        annualFee: 19442
    }, {
        id: 91,
        name: "Scotch College, Perth",
        address: "76 Shenton Rd- Swanbourne WA 6010",
        state: "WA",
        upfrontFee: 6687,
        annualFee: 23499
    }, {
        id: 92,
        name: "John XXIII College, Perth",
        address: "Mooro Dr- Mount Claremont WA 6010",
        state: "WA",
        upfrontFee: 2110,
        annualFee: 7710
    }, {
        id: 93,
        name: "Santa Maria College",
        address: "18 Stoneham Rd- Attadale WA 6156",
        state: "WA",
        upfrontFee: 1020,
        annualFee: 10521
    }, {
        id: 94,
        name: "Wesley College, Perth",
        address: "40 Coode St- South Perth WA 6151",
        state: "WA",
        upfrontFee: 7276,
        annualFee: 20001
    }, {
        id: 95,
        name: "Methodist Ladies College, Perth",
        address: "356 Stirling Hwy- Claremont WA 6010",
        state: "WA",
        upfrontFee: 5320,
        annualFee: 21203
    }, {
        id: 96,
        name: "St Marks Anglican Community School",
        address: "St Marks Dr- Hillarys WA 6025",
        state: "WA",
        upfrontFee: 2030,
        annualFee: 7251
    }, {
        id: 97,
        name: "Aquinas College, Perth",
        address: "58 Mount Henry Rd- Salter Point WA 6152",
        state: "WA",
        upfrontFee: 2832,
        annualFee: 14013
    }, {
        id: 98,
        name: "Trinity College, Perth",
        address: "2 Trinity Ave- East Perth WA 6004",
        state: "WA",
        upfrontFee: 2243,
        annualFee: 13602
    }, {
        id: 99,
        name: "Sacred Heart College",
        address: "Hocking Parade- Sorrento WA 6020",
        state: "WA",
        upfrontFee: 805,
        annualFee: 8220
    }, {
        id: 100,
        name: "Newman College Perth",
        address: "216 Empire Ave- Churchlands WA 6018",
        state: "WA",
        upfrontFee: 1110,
        annualFee: 5715
    }, {
        id: 101,
        name: "Kingsway Christian College",
        address: "157 Kingsway- Darch WA 6065",
        state: "WA",
        upfrontFee: 1320,
        annualFee: 7288
    }];
    $scope.schoolObject_ACT = [{
        id: 102,
        name: "Canberra Grammar School",
        address: "40 Monaro Cres- Red Hill ACT 2603",
        state: "ACT",
        upfrontFee: 2975,
        annualFee: 18753
    }, {
        id: 103,
        name: "Radford College",
        address: "1 College St- Bruce ACT 2617",
        state: "ACT",
        upfrontFee: 950,
        annualFee: 12307
    }, {
        id: 104,
        name: "Canberra Girls Grammar School",
        address: "Melbourne Ave- Deakin ACT 2600",
        state: "ACT",
        upfrontFee: 150,
        annualFee: 16942
    }, {
        id: 105,
        name: "Burgmann Anglican School",
        address: "Gungahlin Dr & The Valley Avenue- Gungahlin ACT 291",
        state: "ACT",
        upfrontFee: 875,
        annualFee: 8413
    }, {
        id: 106,
        name: "Brindabella Christian College",
        address: "136 Brigalow St- Lyneham ACT 2602",
        state: "ACT",
        upfrontFee: 700,
        annualFee: 5874
    }, {
        id: 107,
        name: "Marist College",
        address: "27 Marr St- Pearce ACT 2607",
        state: "ACT",
        upfrontFee: 400,
        annualFee: 8644
    }, {
        id: 108,
        name: "Orana Steiner School",
        address: "Unwin Place- ACT 2611",
        state: "ACT",
        upfrontFee: 550,
        annualFee: 6467
    }, {
        id: 109,
        name: "Merici College",
        address: "Wise St- Braddon ACT 2612",
        state: "ACT",
        upfrontFee: 50,
        annualFee: 6277
    }, {
        id: 110,
        name: "Emmaus Christian School",
        address: "73 Davenport St- Dickson ACT 2602",
        state: "ACT",
        upfrontFee: 300,
        annualFee: 6292
    }];
    $scope.schoolObject_TAS = [{
        id: 111,
        name: "The Friends School, Hobart",
        address: "23 Commercial Rd- North Hobart TAS 7000",
        state: "TAS",
        upfrontFee: 1200,
        annualFee: 14254
    }, {
        id: 112,
        name: "Fahan School",
        address: "Fisher Avenue- Lower Sandy Bay TAS 7005",
        state: "TAS",
        upfrontFee: 2100,
        annualFee: 12412
    }, {
        id: 113,
        name: "St Michael's Collegiate School",
        address: "218 Macquarie St- Hobart TAS 7000",
        state: "TAS",
        upfrontFee: 1110,
        annualFee: 12908
    }, {
        id: 114,
        name: "The Hutchins School",
        address: "71 Nelson Rd- Sandy Bay TAS 7005",
        state: "TAS",
        upfrontFee: 1610,
        annualFee: 13400
    }, {
        id: 115,
        name: "St Mary's College, Hobart",
        address: "164 Harrington St- Hobart TAS 7000",
        state: "TAS",
        upfrontFee: 0,
        annualFee: 3958
    }, {
        id: 116,
        name: "Launceston Chruch Grammar School",
        address: "36 Button St- Mowbray TAS 7248",
        state: "TAS",
        upfrontFee: 100,
        annualFee: 12900
    }, {
        id: 117,
        name: "Launceston Christian School",
        address: " 452A W Tamar Hwy- Riverside TAS 7250",
        state: "TAS",
        upfrontFee: 1300,
        annualFee: 4802
    }];

    $scope.schoolObjectsShow = $scope.schoolObject_NSW;
    $scope.stateListOb = [{
        id: 0,
        name: "NSW"
    }, {
        id: 1,
        name: "VIC"
    }, {
        id: 2,
        name: "QLD"
    }, {
        id: 3,
        name: "SA"
    }, {
        id: 4,
        name: "WA"
    }, {
        id: 5,
        name: "ACT"
    }, {
        id: 6,
        name: "TAS"
    }];
    $scope.portfolioListOb = [{
        id: 0,
        name: "Conservative Cautious"
    }, {
        id: 1,
        name: "Balanced Optimistic"
    }, {
        id: 2,
        name: "Growth Ambitious"
    }];

    $scope.c1Name = "Max";
    $scope.c2Name = "Monica";
    $scope.c3Name = "Adele";
    $scope.c4Name = "Rita";
    $scope.c5Name = "Tom";
    $scope.c6Name = "Mike";
    $scope.nameArray = [$scope.c1Name, $scope.c2Name, $scope.c3Name, $scope.c4Name, $scope.c5Name, $scope.c6Name];

    $scope.chartOneOpen = true;
    $scope.alterOption = false;

    $scope.studyingOption1 = false;
    $scope.studyingOption2 = false;
    $scope.studyingOption3 = false;
    $scope.studyingOption4 = false;
    $scope.studyingOption5 = false;
    $scope.studyingOption6 = false;

    $scope.indexlevel = 0.04;

    $scope.portAnnualReturn = [0.0456, 0.0853, 0.1165, 0.06];

    var spState = "0",
        spPort = "0",
        school1 = "0",
        school2 = "0",
        school3 = "0",
        school4 = "0",
        school5 = "0",
        school6 = "0";
    var schoolArray = [school1, school2, school3, school4, school5, school6];
    var publicSchol_avgCostArray = [1615.33, 1395, 471.25, 762.5, 950, 357.14, 390];
    $scope.publicSchoolFees = publicSchol_avgCostArray[Number(spState)];
    $scope.showPortfolioOption = false;

    $('.spState').on('change', function() {

        spState = $('.spState option:selected').val();
        $scope.publicSchoolFees = publicSchol_avgCostArray[Number(spState)];
        switch (Number(spState)) {
            case 0:
                $scope.$apply(function() {
                    $scope.schoolObjectsShow = $scope.schoolObject_NSW;
                });
                break;
            case 1:
                $scope.$apply(function() {
                    $scope.schoolObjectsShow = $scope.schoolObject_VIC;
                });
                // $scope.schoolObjectsShow = $scope.schoolObject_VIC;
                break;

            case 2:
                $scope.$apply(function() {

                    $scope.schoolObjectsShow = $scope.schoolObject_QLD;
                });
                break;
            case 3:
                $scope.$apply(function() {

                    $scope.schoolObjectsShow = $scope.schoolObject_SA;
                });
                break;
            case 4:
                $scope.$apply(function() {

                    $scope.schoolObjectsShow = $scope.schoolObject_WA;
                });
                break;
            case 5:
                $scope.$apply(function() {

                    $scope.schoolObjectsShow = $scope.schoolObject_ACT;
                });
                break;
            case 6:
                $scope.$apply(function() {

                    $scope.schoolObjectsShow = $scope.schoolObject_TAS;
                });
                break;
        }
        console.log("sel", $scope.schoolObjectsShow);
        $('.spSchool1').selectpicker('refresh');
        $('.spSchool2').selectpicker('refresh');
        $('.spSchool3').selectpicker('refresh');
        $('.spSchool4').selectpicker('refresh');
        $('.spSchool5').selectpicker('refresh');
        $('.spSchool6').selectpicker('refresh');
        $timeout(0);

    });

    $('input:radio[name=portfolioRadio]').change(function() {
        if (this.value == '0') {
            $scope.porfolioChange(0);
        } else if (this.value == '1') {
            $scope.porfolioChange(1);
        } else {
            $scope.porfolioChange(2);
        }

        $timeout(0);

    });


    $scope.porfolioChange = function(val) {
        console.log("port", val);
        spPort = val;
        $timeout(0);
    };

    $('.spSchool1').on('change', function() {
        schoolArray[0] = $('.spSchool1 option:selected').val();
        console.log("schoolArray[0]", schoolArray[0])
            //calculateFinal();
    });

    $('.spSchool2').on('change', function() {
        schoolArray[1] = $('.spSchool2 option:selected').val();
        //console.log("schoolArray[1]", schoolArray[1])
        //calculateFinal();
    });

    $('.spSchool3').on('change', function() {
        schoolArray[2] = $('.spSchool3 option:selected').val();
        //console.log("schoolArray[2]", schoolArray[2])
        //calculateFinal();
    });

    $('.spSchool4').on('change', function() {
        schoolArray[3] = $('.spSchool4 option:selected').val();
        //console.log("schoolArray[3]", schoolArray[3])
        //calculateFinal();
    });

    $('.spSchool5').on('change', function() {
        schoolArray[4] = $('.spSchool5 option:selected').val();
        //console.log("schoolArray[4]", schoolArray[4])
        //calculateFinal();
    });

    $('.spSchool6').on('change', function() {
        schoolArray[5] = $('.spSchool6 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });

    var initDate = new Date();
    $scope.begnYearInvestment = initDate.getFullYear();
    $scope.numChildren = 2;
    $scope.investmentReturn = 5000;
    $scope.contStartYear = initDate.getFullYear();
    $scope.schoolYear1 = initDate.getFullYear();
    $scope.schoolDuration1 = 6;
    $scope.schoolYear2 = initDate.getFullYear();
    $scope.schoolDuration2 = 6;
    $scope.schoolYear3 = initDate.getFullYear();
    $scope.schoolDuration3 = 6;
    $scope.schoolYear4 = initDate.getFullYear();
    $scope.schoolDuration4 = 6;
    $scope.schoolYear5 = initDate.getFullYear();
    $scope.schoolDuration5 = 6;
    /* $scope.schoolYear6 = initDate.getFullYear();
     $scope.schoolDuration6 = 6;*/
    $scope.endYearInvestment = Number($scope.schoolYear2) + Number($scope.schoolDuration2);

    var begnYearInvestmentSlider = document.getElementById("begnYearInvestmentSlider"),
        contStartYearSlider = document.getElementById("contStartYearSlider"),
        numChildrenSlider = document.getElementById("numChildrenSlider"),
        investmentReturnSlider = document.getElementById("investmentReturnSlider"),
        schoolYear1Slider = document.getElementById("schoolYear1Slider"),
        schoolDuration1Slider = document.getElementById("schoolDuration1Slider"),
        schoolYear2Slider = document.getElementById("schoolYear2Slider"),
        schoolDuration2Slider = document.getElementById("schoolDuration2Slider"),
        schoolYear3Slider = document.getElementById("schoolYear3Slider"),
        schoolDuration3Slider = document.getElementById("schoolDuration3Slider"),
        schoolYear4Slider = document.getElementById("schoolYear4Slider"),
        schoolDuration4Slider = document.getElementById("schoolDuration4Slider"),
        schoolYear5Slider = document.getElementById("schoolYear5Slider"),
        schoolDuration5Slider = document.getElementById("schoolDuration5Slider");
    // schoolYear6Slider = document.getElementById("schoolYear6Slider"),
    // schoolDuration6Slider = document.getElementById("schoolDuration6Slider");

    var begnYearInvestmentInput = document.getElementById("begnYearInvestmentInput"),
        contStartYearInput = document.getElementById("contStartYearInput"),
        numChildrenInput = document.getElementById("numChildrenInput"),
        investmentReturnInput = document.getElementById("investmentReturnInput"),
        schoolYear1Input = document.getElementById("schoolYear1Input"),
        schoolDuration1Input = document.getElementById("schoolDuration1Input"),
        schoolYear2Input = document.getElementById("schoolYear2Input"),
        schoolDuration2Input = document.getElementById("schoolDuration2Input"),
        schoolYear3Input = document.getElementById("schoolYear3Input"),
        schoolDuration3Input = document.getElementById("schoolDuration3Input"),
        schoolYear4Input = document.getElementById("schoolYear4Input"),
        schoolDuration4Input = document.getElementById("schoolDuration4Input"),
        schoolYear5Input = document.getElementById("schoolYear5Input"),
        schoolDuration5Input = document.getElementById("schoolDuration5Input");
    // schoolYear6Input = document.getElementById("schoolYear6Input"),
    // schoolDuration6Input = document.getElementById("schoolDuration6Input");

    noUiSlider.create(begnYearInvestmentSlider, {
        start: $scope.begnYearInvestment,
        connect: [false, false],
        range: {
            min: [initDate.getFullYear()],
            max: [$scope.endYearInvestment],
        },
        format: wNumb({
            decimals: 0,
        }),
        step: 1
    });

    noUiSlider.create(contStartYearSlider, {
        start: $scope.contStartYear,
        connect: [false, false],
        range: {
            min: [initDate.getFullYear()],
            max: [$scope.endYearInvestment],
        },
        format: wNumb({
            decimals: 0,
        }),
        step: 1
    });

    noUiSlider.create(numChildrenSlider, {
        start: $scope.numChildren,
        connect: [false, false],
        range: {
            min: [1],
            max: [5]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })
    });

    noUiSlider.create(investmentReturnSlider, {
        start: $scope.investmentReturn,
        range: {
            min: [1000],
            max: [10000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(schoolYear1Slider, {
        start: $scope.schoolYear1,
        connect: [false, false],
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolYear2Slider, {
        start: $scope.schoolYear2,
        connect: [false, false],
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolYear3Slider, {
        start: $scope.schoolYear3,
        connect: [false, false],
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolYear4Slider, {
        start: $scope.schoolYear4,
        connect: [false, false],
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolYear5Slider, {
        start: $scope.schoolYear5,
        connect: [false, false],
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    /*noUiSlider.create(schoolYear6Slider, {
        start: $scope.schoolYear6,
        connect: [false, false],
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });*/

    noUiSlider.create(schoolDuration1Slider, {
        start: $scope.schoolDuration1,
        connect: [false, false],
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolDuration2Slider, {
        start: $scope.schoolDuration2,
        connect: [false, false],
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolDuration3Slider, {
        start: $scope.schoolDuration3,
        connect: [false, false],
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolDuration4Slider, {
        start: $scope.schoolDuration4,
        connect: [false, false],
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolDuration5Slider, {
        start: $scope.schoolDuration5,
        connect: [false, false],
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    /*noUiSlider.create(schoolDuration6Slider, {
        start: $scope.schoolDuration6,
        connect: [false, false],
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })
    });*/


    begnYearInvestmentSlider.noUiSlider.on('update', function(values, handle) {
        begnYearInvestmentInput.value = values[handle];
        $scope.begnYearInvestment = values[handle];
    });

    begnYearInvestmentSlider.noUiSlider.on('set', function(values, handle) {
        //calculate();
        $timeout(0);
    });

    begnYearInvestmentInput.addEventListener("change", function() {
        begnYearInvestmentSlider.noUiSlider.set(this.value);
    });

    contStartYearSlider.noUiSlider.on('update', function(values, handle) {
        contStartYearInput.value = values[handle];
        $scope.contStartYear = values[handle];
    });
    contStartYearSlider.noUiSlider.on('set', function(values, handle) {
        //calculate();
        $timeout(0);
    });

    contStartYearInput.addEventListener("change", function() {
        contStartYearSlider.noUiSlider.set(this.value);
    });

    numChildrenSlider.noUiSlider.on('update', function(values, handle) {
        numChildrenInput.value = values[handle];
        $scope.numChildren = values[handle];
        changeChildrenInputs(Number($scope.numChildren));
    });
    numChildrenSlider.noUiSlider.on('set', function(values, handle) {
        //calculate();
        $timeout(0);
    });

    numChildrenInput.addEventListener("change", function() {
        numChildrenSlider.noUiSlider.set(numChildrenInput.value);
    });

    function changeChildrenInputs(num) {
        for (var i = 1; i <= num; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'block';
        }
        for (var i = (num + 1); i <= 5; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'none';
        }
    }

    investmentReturnSlider.noUiSlider.on('update', function(values, handle) {
        investmentReturnInput.value = values[handle];
        $scope.investmentReturn = values[handle];
    });
    investmentReturnSlider.noUiSlider.on('set', function(values, handle) {
        investmentReturnInput.value = values[handle];
        $scope.investmentReturn = (values[handle]);
        //calculate();
        $timeout(0);
    });

    investmentReturnInput.addEventListener("change", function() {
        investmentReturnSlider.noUiSlider.set(investmentReturnInput.value);
    });

    schoolYear1Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear1Input.value = values[handle];
        $scope.schoolYear1 = values[handle];
    });
    schoolYear1Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear1) + Number($scope.schoolDuration1);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear1Input.addEventListener("change", function() {
        schoolYear1Slider.noUiSlider.set(schoolYear1Input.value);
    });

    schoolYear2Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear2Input.value = values[handle];
        $scope.schoolYear2 = values[handle];
    });
    schoolYear2Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear2) + Number($scope.schoolDuration2);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear2Input.addEventListener("change", function() {
        schoolYear2Slider.noUiSlider.set(schoolYear2Input.value);
    });

    schoolYear3Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear3Input.value = values[handle];
        $scope.schoolYear3 = values[handle];
    });
    schoolYear3Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear3) + Number($scope.schoolDuration3);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear3Input.addEventListener("change", function() {
        schoolYear3Slider.noUiSlider.set(schoolYear3Input.value);
    });

    schoolYear4Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear4Input.value = values[handle];
        $scope.schoolYear4 = values[handle];
    });
    schoolYear4Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear4) + Number($scope.schoolDuration4);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear4Input.addEventListener("change", function() {
        schoolYear4Slider.noUiSlider.set(schoolYear4Input.value);
    });

    schoolYear5Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear5Input.value = values[handle];
        $scope.schoolYear5 = values[handle];
    });
    schoolYear5Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear5) + Number($scope.schoolDuration5);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear5Input.addEventListener("change", function() {
        schoolYear5Slider.noUiSlider.set(schoolYear5Input.value);
    });

    /*schoolYear6Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear6Input.value = values[handle];
        $scope.schoolYear6 = values[handle];
    });
    schoolYear6Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear6) + Number($scope.schoolDuration6);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear6Input.addEventListener("change", function() {
        schoolYear6Slider.noUiSlider.set(schoolYear6Input.value);
    });*/

    schoolDuration1Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration1Input.value = values[handle];
        $scope.schoolDuration1 = values[handle];
    });
    schoolDuration1Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear1) + Number($scope.schoolDuration1);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration1Input.addEventListener("change", function() {
        schoolDuration1Slider.noUiSlider.set(schoolDuration1Input.value);
    });

    schoolDuration2Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration2Input.value = values[handle];
        $scope.schoolDuration2 = values[handle];
    });
    schoolDuration2Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear2) + Number($scope.schoolDuration2);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration2Input.addEventListener("change", function() {
        schoolDuration2Slider.noUiSlider.set(schoolDuration2Input.value);
    });

    schoolDuration3Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration3Input.value = values[handle];
        $scope.schoolDuration3 = values[handle];
    });
    schoolDuration3Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear3) + Number($scope.schoolDuration3);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration3Input.addEventListener("change", function() {
        schoolDuration3Slider.noUiSlider.set(schoolDuration3Input.value);
    });

    schoolDuration4Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration4Input.value = values[handle];
        $scope.schoolDuration4 = values[handle];
    });
    schoolDuration4Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear4) + Number($scope.schoolDuration4);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration4Input.addEventListener("change", function() {
        schoolDuration4Slider.noUiSlider.set(schoolDuration4Input.value);
    });

    schoolDuration5Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration5Input.value = values[handle];
        $scope.schoolDuration5 = values[handle];
    });
    schoolDuration5Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear5) + Number($scope.schoolDuration5);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration5Input.addEventListener("change", function() {
        schoolDuration5Slider.noUiSlider.set(schoolDuration5Input.value);
    });

    /*schoolDuration6Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration6Input.value = values[handle];
        $scope.schoolDuration6 = values[handle];
    });
    schoolDuration6Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear6) + Number($scope.schoolDuration6);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration6Input.addEventListener("change", function() {
        schoolDuration6Slider.noUiSlider.set(schoolDuration6Input.value);
    });*/

    $scope.studyingOption1Change = function(studying1) {
        $scope.studyingOption1 = studying1;
        if (studying1) {
            schoolYear1Input.value = $scope.begnYearInvestment;
            schoolYear1Slider.noUiSlider.set(schoolYear1Input.value);
        } else {
            schoolYear1Input.value = Number($scope.begnYearInvestment) + 1;
            schoolYear1Slider.noUiSlider.set(schoolYear1Input.value);
        }
        //calculate();
        $timeout(0);
    }
    $scope.studyingOption2Change = function(studying2) {
        $scope.studyingOption2 = studying2;
        if (studying2) {
            schoolYear2Input.value = $scope.begnYearInvestment;
            schoolYear2Slider.noUiSlider.set(schoolYear2Input.value);
        } else {
            schoolYear2Input.value = Number($scope.begnYearInvestment) + 1;
            schoolYear2Slider.noUiSlider.set(schoolYear2Input.value);
        }
        //calculate();
        $timeout(0);
    }
    $scope.studyingOption3Change = function(studying3) {
        $scope.studyingOption3 = studying3;
        if (studying3) {
            schoolYear3Input.value = $scope.begnYearInvestment;
            schoolYear3Slider.noUiSlider.set(schoolYear3Input.value);
        } else {
            schoolYear3Input.value = Number($scope.begnYearInvestment) + 1;
            schoolYear3Slider.noUiSlider.set(schoolYear3Input.value);
        }
        //calculate();
        $timeout(0);
    }
    $scope.studyingOption4Change = function(studying4) {
        $scope.studyingOption4 = studying4;
        if (studying4) {
            schoolYear4Input.value = $scope.begnYearInvestment;
            schoolYear4Slider.noUiSlider.set(schoolYear4Input.value);
        } else {
            schoolYear4Input.value = Number($scope.begnYearInvestment) + 1;
            schoolYear4Slider.noUiSlider.set(schoolYear4Input.value);
        }
        //calculate();
        $timeout(0);
    }
    $scope.studyingOption5Change = function(studying5) {
            $scope.studyingOption5 = studying5;
            if (studying5) {
                schoolYear5Input.value = $scope.begnYearInvestment;
                schoolYear5Slider.noUiSlider.set(schoolYear5Input.value);
            } else {
                schoolYear5Input.value = Number($scope.begnYearInvestment) + 1;
                schoolYear5Slider.noUiSlider.set(schoolYear5Input.value);
            }
            //calculate();
            $timeout(0);
        }
        /*$scope.studyingOption6Change = function(studying6) {
            $scope.studyingOption6 = studying6;
            if (studying6) {
                schoolYear6Input.value = $scope.begnYearInvestment;
                schoolYear6Slider.noUiSlider.set(schoolYear6Input.value);
            } else {
                schoolYear6Input.value = Number($scope.begnYearInvestment) + 1;
                schoolYear6Slider.noUiSlider.set(schoolYear6Input.value);
            }
            //calculate();
            $timeout(0);
        }*/

    function changeMax(tempEndYear) {
        var numChildren = Number($scope.numChildren);
        var schoolYear1 = Number($scope.schoolYear1);
        var schoolDuration1 = Number($scope.schoolDuration1);
        var schoolYear2 = Number($scope.schoolYear2);
        var schoolDuration2 = Number($scope.schoolDuration2);
        var schoolYear3 = Number($scope.schoolYear3);
        var schoolDuration3 = Number($scope.schoolDuration3);
        var schoolYear4 = Number($scope.schoolYear4);
        var schoolDuration4 = Number($scope.schoolDuration4);
        var schoolYear5 = Number($scope.schoolYear5);
        var schoolDuration5 = Number($scope.schoolDuration5);
        /*var schoolYear6 = Number($scope.schoolYear6);
        var schoolDuration6 = Number($scope.schoolDuration6);
        var childSchoolArray = [schoolYear1, schoolYear2, schoolYear3, schoolYear4, schoolYear5, schoolYear6];
        var childDurationArray = [schoolDuration1, schoolDuration2, schoolDuration3, schoolDuration4, schoolDuration5, schoolDuration6];
        var childGradArray = [$scope.schoolEnd1, $scope.schoolEnd2, $scope.schoolEnd3, $scope.schoolEnd4, $scope.schoolEnd5, $scope.schoolEnd6];*/

        var childSchoolArray = [schoolYear1, schoolYear2, schoolYear3, schoolYear4, schoolYear5];
        var childDurationArray = [schoolDuration1, schoolDuration2, schoolDuration3, schoolDuration4, schoolDuration5];
        var childGradArray = [$scope.schoolEnd1, $scope.schoolEnd2, $scope.schoolEnd3, $scope.schoolEnd4, $scope.schoolEnd5];

        for (i = 0; i < numChildren; i++) {
            childGradArray[i] = childSchoolArray[i] + childDurationArray[i] - 1;
        }
        $scope.endYearInvestment = childGradArray[0];
        for (i = 1; i < numChildren; i++) {
            $scope.endYearInvestment = $scope.endYearInvestment > childGradArray[i] ? $scope.endYearInvestment : childGradArray[i];
        }



        if (Number(initDate.getFullYear()) == Number($scope.endYearInvestment)) {
            $scope.begnYearInvestment = Number($scope.endYearInvestment);
            $scope.contStartYear = Number($scope.endYearInvestment);
            begnYearInvestmentSlider.setAttribute('disabled', true);
            contStartYearSlider.setAttribute('disabled', true);
        } else {
            begnYearInvestmentSlider.removeAttribute('disabled');
            contStartYearSlider.removeAttribute('disabled');
            begnYearInvestmentSlider.noUiSlider.updateOptions({
                range: {
                    'min': initDate.getFullYear(),
                    'max': $scope.endYearInvestment
                }
            });
            contStartYearSlider.noUiSlider.updateOptions({
                range: {
                    'min': initDate.getFullYear(),
                    'max': $scope.endYearInvestment
                }
            });
        }

    }

    function PV(rate, periods, payment, future, type) {
        var type = (typeof type === 'undefined') ? 0 : type;
        rate = eval(rate);
        periods = eval(periods);
        if (rate === 0) {
            return -payment * periods - future;
        } else {
            return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
        }
    }

    function NPV(rate, args) {
        var value = 0;
        for (var j = 0; j < args.length; j++) {
            value += args[j] / Math.pow(1 + rate, j + 1);
        }
        return value;
    }

    function FV(rate, nper, pmt, pv, type) {
        var pow = Math.pow(1 + rate, nper),
            fv;

        pv = pv || 0;
        type = type || 0;

        if (rate) {
            fv = (pmt * (1 + rate * type) * (1 - pow) / rate) - pv * pow;
        } else {
            fv = -1 * (pv + pmt * nper);
        }
        return fv;
    }

    var realRateReturn = 0.0156;
    $scope.majorFeesListObj = [{
        id: 0,
        name: "Major in Commerce"
    }, {
        id: 1,
        name: "Major in Medical Science"
    }, {
        id: 2,
        name: "Major in Art"
    }];

    var majorSelectedArray = [0, 0, 0, 0, 0, 0];
    var publicSchol_avgCostArray = [1615.33, 1395, 471.25, 762.5, 950, 357.14, 390];
    var commerceFeeArray = [10596, 10596, 10597, 10429, 13176, 10596, 10596];
    var medicalScienceFeeArray = [9823, 10596, 9782, 9439.33, 9896, 10596, 10596];
    var artFeeArray = [7511, 6349, 4239.67, 6935.67, 6524, 6349, 6349];
    var majorFeesArray = [commerceFeeArray, medicalScienceFeeArray, artFeeArray];
    var majorSubject;
    var loanValuationRatio = 0.8;
    var avgSchool_AnnualFee;
    var presentValue_PrivateSchoolFeeArray = [];
    var presentValue_PublicSchoolFeeArray = [];
    var savingFeeArray = [];
    var savingAccumulationArray = [];
    var univCostArray = [];
    var projectedUnivFeeArray = [];
    var remainderUnivFeeArray = [];
    var propertyPurchasingPowerArray = [];

    $('.spMajor1').on('change', function() {
        majorSelectedArray[0] = $('.spMajor1 option:selected').val();
        console.log("majorSelectedArray[0]", majorSelectedArray[0]);
        //calculateFinal();
    });
    $('.spMajor2').on('change', function() {
        majorSelectedArray[1] = $('.spMajor2 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
    $('.spMajor3').on('change', function() {
        majorSelectedArray[2] = $('.spMajor3 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
    $('.spMajor4').on('change', function() {
        majorSelectedArray[3] = $('.spMajor4 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
    $('.spMajor5').on('change', function() {
        majorSelectedArray[4] = $('.spMajor5 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
    $('.spMajor6').on('change', function() {
        majorSelectedArray[5] = $('.spMajor6 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });


    /*$scope.fundA = $scope.fundsOb[0];
    $scope.fundB = $scope.fundsOb[1];
    $scope.netReturn = $scope.investOptions[0].netReturn;
    var tempFundA = $scope.fundsOb[0];
    var tempFundB = $scope.fundsOb[1];
    $scope.fundNotFoundA = true;
    $scope.fundNotFoundB = true;
    $scope.fundNameA = "Fund A";
    $scope.fundNameB = "Fund B";*/

    console.log("sadgggggggga");
    var minDrawdown;
    $scope.listOb = [{
        id: 0,
        name: "Minimum Pension Only"
    }, {
        id: 1,
        name: "Choose you own pension"
    }];
    var maleExpectancy = [80.3, 79.6, 78.6, 77.6, 76.6, 75.6, 74.6, 73.6, 72.7, 71.7, 70.7, 69.7, 68.7, 67.7, 66.7, 65.7, 64.7, 63.7, 62.8, 61.8, 60.8, 59.9, 58.9, 57.9, 57, 56, 55, 54.1, 53.1, 52.2, 51.2, 50.2, 49.3, 48.3, 47.3, 46.4, 45.4, 44.5, 43.5, 42.6, 41.6, 40.7, 39.8, 38.8, 37.9, 37, 36, 35.1, 34.2, 33.3, 32.4, 31.4, 30.5, 29.6, 28.8, 27.9, 27, 26.1, 25.3, 24.4, 23.5, 22.7, 21.9, 21, 20.2, 19.4, 18.6, 17.8, 17, 16.3, 15.5, 14.8, 14, 13.3, 12.6, 11.9, 11.2, 10.6, 9.9, 9.3, 8.7, 8.2, 7.6, 7.1, 6.6, 6.1, 5.7, 5.3, 4.9, 4.5, 4.2, 3.9, 3.6, 3.4, 3.2, 3, 2.8, 2.6, 2.5, 2.4, 2.3];

    var femaleExpectancy = [84.4, 83.7, 82.7, 81.7, 80.7, 79.7, 78.7, 77.7, 76.8, 75.8, 74.8, 73.8, 72.8, 71.8, 70.8, 69.8, 68.8, 67.8, 66.8, 65.9, 64.9, 63.9, 62.9, 61.9, 60.9, 60, 59, 58, 57, 56, 55, 54.1, 53.1, 52.1, 51.1, 50.1, 49.2, 48.2, 47.2, 46.3, 45.3, 44.3, 43.4, 42.4, 41.4, 40.5, 39.5, 38.6, 37.6, 36.7, 35.8, 34.8, 33.9, 33, 32, 31.1, 30.2, 29.3, 28.4, 27.5, 26.6, 25.7, 24.8, 23.9, 23, 22.2, 21.3, 20.4, 19.6, 18.8, 17.9, 17.1, 16.3, 15.5, 14.7, 13.9, 13.2, 12.4, 11.7, 11, 10.3, 9.6, 9, 8.3, 7.7, 7.2, 6.6, 6.1, 5.7, 5.2, 4.8, 4.4, 4.1, 3.8, 3.5, 3.3, 3, 2.9, 2.7, 2.5, 2.4];

    // $scope.genderOption = true;
    $scope.genderOptionSpouse = false;
    // $scope.spouseOption = false;
    $scope.houseOption = true;
    $scope.retirementAgeSpouse = 70;
    $scope.retirementAgeSpouseNew = 70;
    $scope.annualSalarySpouse = 90000;
    $scope.annualSalarySpouseNew = 90000;
    $scope.superBalanceSpouse = 200000;
    $scope.superBalanceSpouseNew = 200000;
    $scope.salarySacrificeSpouse = 5000;
    $scope.pensionStartSpouse = 65;
    $scope.insurancePremiumSpouse = 0;
    $scope.investmentReturnSpouse = 5.30;
    $scope.variableFeeSpouse = 1.11;
    $scope.fixedFeeSpouse = 300;
    $scope.pensionDrawdownBase = 40000;
    $scope.pensionDrawdownBaseSpouse = 30000;
    $scope.retirementAge = 65;
    $scope.retirementAgeNew = 65;
    $scope.preservationAge = 55;
    $scope.preservationAgeSpouse = 55;
    $scope.annualSalary = 260000;
    $scope.annualSalaryNew = 260000;
    $scope.employerContributionLevel = 9.50;
    $scope.employerContributionLevelSpouse = 9.50;
    // $scope.inflation = 3.50;
    $scope.inflationSpouse = 3.50;
    // $scope.superBalance = 500000;
    $scope.superBalanceNew = 500000;
    $scope.wageIncrease = 4.00;
    $scope.wageIncreaseSpouse = 4.00;
    $scope.insurancePremium = 0;
    $scope.salarySacrifice = 20000;
    $scope.pensionStart = 57;
    $scope.investmentReturn = 5.30;
    $scope.variableFee = 1.11;
    $scope.fixedFee = 300;
    $scope.homeContents = 50000;
    $scope.vehicleCost = 0;
    $scope.investmentProperty = 2000;
    $scope.bankAssets = 20000;
    $scope.listedInvestment = 0;
    $scope.marginLoans = 0;
    $scope.allocatedPension = 60000;
    // $scope.otherInvestment = 20000;
    $scope.netRentalIncome = 0;
    $scope.otherIncome = 0;
    $scope.pensionIncome = 0;
    $scope.target = 40000;
    $scope.targetNew = 40000;

    $scope.personalDetails = {};
    $scope.spouseDetails = {};
    $scope.forms = {};
    $scope.grossAnnualIncome = 120000;
    $scope.grossAnnualIncomeNew = 120000;
    $scope.homeMortgage = 500000;
    $scope.investmentPropertyMortgage = 0;
    $scope.creditCardDebt = 2000;
    $scope.carLoan = 20000;
    $scope.personalLoan = 0;
    $scope.otherLoan = 0;
    $scope.homeValue = 800000;
    $scope.cashAtBank = 20000;
    $scope.otherInvestment = 20000;
    $scope.superBalance = 100000;
    $scope.ecLife = 250000;
    $scope.ecLifeNew = 250000;
    $scope.ecTPD = 0;
    $scope.ecTPDNew = 0;
    $scope.ecIP = 0;
    $scope.ecIPNew = 0;
    $scope.ecTrauma = 0;
    $scope.ecTraumaNew = 0;
    $scope.numChildren = 2;
    $scope.funeralCost = 20000;
    $scope.educationExpensePerYearPerChild = 5000;
    $scope.familyLivingCostPerYear = 90000;
    $scope.inflation = 2;
    $scope.rateOfReturn = 5;
    $scope.moneyToBeBorrowed = 400000;
    $scope.valueOfNewProperty = 500000;
    $scope.ageSpouse = 47;
    $scope.spouseSalary = 50000;
    $scope.ageChildren1 = 3;
    $scope.ageChildren2 = 5;
    $scope.ageChildren3 = 10;
    $scope.ageChildren4 = 10;
    $scope.ageChildren5 = 10;

    $scope.resultPerc = {};


    $scope.genderOption = true;
    $scope.smokeOption = false;
    $scope.spouseOption = false;
    $scope.spouseWorkOption = true;
    $scope.buyOption = true;
    $scope.sickLeaves = 10;

    $scope.ncc = 10000;
    $scope.superTaxRate = 15;

    $scope.contributionFeeA = 1.50;
    $scope.adminFeeA = 50;
    $scope.indirectCostRationA = 1.50;


    $scope.contributionFeeB = 1.50;
    $scope.adminFeeB = 50;
    $scope.indirectCostRationB = 1.50;

    $scope.nra = 6;
    $scope.nrp = 7;
    $scope.tfp = 2;
    $scope.beforeTTR = 50000;

    $scope.totalPercentageSelected = 100;

    $scope.australianShares1 = 10;
    $scope.internationalShares1 = 10;
    $scope.internationalSharesHedged1 = 10;
    $scope.usShares1 = 10;
    $scope.australianBonds1 = 10;
    $scope.internationalBondsHedged1 = 10;
    $scope.cash1 = 10;
    $scope.australianListedProperty1 = 10;
    $scope.internationalListedProperty1 = 20;

    $scope.asset1Total = $scope.australianShares1 + $scope.internationalShares1 +
        $scope.internationalSharesHedged1 + $scope.usShares1 +
        $scope.australianBonds1 + $scope.internationalBondsHedged1 +
        $scope.cash1 + $scope.australianListedProperty1 +
        $scope.internationalListedProperty1 + "%";

    $scope.australianShares2 = 10;
    $scope.internationalShares2 = 10;
    $scope.internationalSharesHedged2 = 10;
    $scope.usShares2 = 10;
    $scope.australianBonds2 = 10;
    $scope.internationalBondsHedged2 = 10;
    $scope.cash2 = 10;
    $scope.australianListedProperty2 = 10;
    $scope.internationalListedProperty2 = 20;

    $scope.asset2Total = $scope.australianShares2 + $scope.internationalShares2 +
        $scope.internationalSharesHedged2 + $scope.usShares2 +
        $scope.australianBonds2 + $scope.internationalBondsHedged2 +
        $scope.cash2 + $scope.australianListedProperty2 +
        $scope.internationalListedProperty2 + "%";

    $scope.calculateWaitingPeriod = function(leaves) {
        if (leaves <= 30) {
            return 30;
        }
        if (leaves > 30 && leaves <= 60) {
            return 60;
        }
        if (leaves > 60) {
            return 90;
        }
    }

    $scope.waitingPeriod = $scope.calculateWaitingPeriod($scope.sickLeaves);

    String.prototype.replaceAll = function(search, replacement) {
        var targetTemp = this;
        return targetTemp.split(search).join(replacement);
    };

    $scope.forms = {};

    $scope.personalDetails = {
        firstName: "Dexter",
        lastName: "Payne",
        email: "dexter@gmail.com",
        mobile: 412121212,
        postalCode: 1234
    };
    $scope.spouseDetails = {
        firstName: "Rachel",
        lastName: "Payne",
        email: "rachel@gmail.com",
        mobile: 412121212,
    };

    var d = document.getElementsByClassName('title-div');

    $scope.chartOneOpen = true;
    $scope.chartTwoOpen = false;
    $scope.chartThreeOpen = false;
    $scope.chartFourOpen = false;
    $scope.needSS = true;



    var initDate = new Date();
    initDate.setYear(1988);
    initDate.setMonth(0);
    initDate.setDate(1);

    var initDate2 = new Date();
    initDate2.setYear(1984);
    initDate2.setMonth(0);
    initDate2.setDate(1);

    $scope.dob = initDate;
    $scope.dobSpouse = initDate2;

    $scope.infoShow = function(value) {
        if (value) {
            document.getElementsByClassName("information-overlay")[0].style.visibility = "visible";
            document.getElementsByClassName("information-overlay")[0].style.zIndex = "9999";
            document.getElementsByClassName("information-overlay")[0].style.position = "inline-block";
            document.getElementsByClassName("information-overlay")[0].style.height = "" + (document.getElementsByClassName("otrp-calculator")[0].clientHeight - 10) + "px";
        } else {
            document.getElementsByClassName("information-overlay")[0].style.visibility = "hidden";
        }
    }

    $scope.firstDP = function() {
        $scope.dateOptions.maxDate = new Date($scope.fy - 18, 5, 30);
        $scope.dateOptions.minDate = new Date(1950, 0, 1);
    }

    $scope.secondDp = function() {
        delete $scope.dateOptions.maxDate;
    }

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        showWeeks: true
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        showWeeks: false
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
        $scope.firstDP();
    };

    $scope.open2 = function() {
        $scope.secondDp();
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'dd/MM/yyyy', 'd!/M!/yyyy'];
    $scope.format = $scope.formats[5];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
    var dt = new Date();

    $scope.fy = dt.getMonth() > 5 ? dt.getFullYear() : dt.getFullYear() - 1;

    $scope.age = AgeCalculator.getAge($scope.dob, $scope.fy);


    /*$scope.ageChange = function() {
        var dobText = document.getElementById("dobText");
        // console.log("dobText",new Date(dobText.value));
        var dateString = dobText.value;
        var dateArr = dateString.split("/");

        var date_regex = /^([1-9]|0[1-9]|1\d|2\d|3[01])\/(0[1-9]|[1-9]|1[0-2])\/(19[5-9][0-9])$/;
        var correct = date_regex.test(dobText.value);
        var fd = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);

        if (((fd.getMonth() + 1) === Number(dateArr[1]) && fd.getDate() === Number(dateArr[0])) && correct) {
            $scope.dob = fd;
        } else {
            $scope.dob = initDate;
        }
        $scope.age = AgeCalculator.getAge($scope.dob, $scope.fy);
    }*/

    $scope.newChangesApplied = false;

    $scope.enableNewSliders = true;

    $scope.saveWithNew = false;

    $scope.showPensionOption = true;
    $scope.showPensionOptionSpouse = true;

    $('#select-spouse-option').on('changed.bs.select', function(e) {
        $scope.spouseOption = $(this).selectpicker('val') <= 0;
        // console.log("spouse option set to", $scope.spouseOption);
        $timeout(0);
    });

    $('#select-spouseWork-option').on('changed.bs.select', function(e) {
        $scope.spouseWorkOption = $(this).selectpicker('val') <= 0;
        // console.log("house option set to", $scope.houseOption);
        $timeout(0);
    });

    $('#select-buy-option').on('changed.bs.select', function(e) {
        $scope.buyOption = $(this).selectpicker('val') <= 0;
        // console.log("choose pension option set to", $scope.showPensionOption);
        $timeout(0);
    });

    var grossAnnualIncomeSlider = document.getElementById('grossAnnualIncomeSlider'),
        grossAnnualIncomeSliderNew = document.getElementById('grossAnnualIncomeSliderNew'),
        homeMortgageSlider = document.getElementById('homeMortgageSlider'),
        investmentPropertyMortgageSlider = document.getElementById('investmentPropertyMortgageSlider'),
        creditCardDebtSlider = document.getElementById('creditCardDebtSlider'),
        carLoanSlider = document.getElementById('carLoanSlider'),
        personalLoanSlider = document.getElementById('personalLoanSlider'),
        otherLoanSlider = document.getElementById('otherLoanSlider'),
        homeValueSlider = document.getElementById('homeValueSlider'),
        cashAtBankSlider = document.getElementById('cashAtBankSlider'),
        // otherInvestmentSlider = document.getElementById('otherInvestmentSlider'),
        // superBalanceSlider = document.getElementById('superBalanceSlider'),
        ecLifeSlider = document.getElementById('ecLifeSlider'),
        ecLifeSliderNew = document.getElementById('ecLifeSliderNew'),
        ecTPDSlider = document.getElementById('ecTPDSlider'),
        ecTPDSliderNew = document.getElementById('ecTPDSliderNew'),
        ecIPSlider = document.getElementById('ecIPSlider'),
        ecIPSliderNew = document.getElementById('ecIPSliderNew'),
        ecTraumaSlider = document.getElementById('ecTraumaSlider'),
        ecTraumaSliderNew = document.getElementById('ecTraumaSliderNew'),
        numChildrenSlider = document.getElementById('numChildrenSlider'),
        funeralCostSlider = document.getElementById('funeralCostSlider'),
        educationExpensePerYearPerChildSlider = document.getElementById('educationExpensePerYearPerChildSlider'),
        familyLivingCostPerYearSlider = document.getElementById('familyLivingCostPerYearSlider'),
        inflationSlider = document.getElementById('inflationSlider'),
        rateOfReturnSlider = document.getElementById('rateOfReturnSlider'),
        valueOfNewPropertySlider = document.getElementById('valueOfNewPropertySlider'),
        moneyToBeBorrowedSlider = document.getElementById('moneyToBeBorrowedSlider'),
        ageSpouseSlider = document.getElementById('ageSpouseSlider'),
        spouseSalarySlider = document.getElementById('spouseSalarySlider'),
        ageChildren1Slider = document.getElementById('ageChildren1Slider'),
        ageChildren2Slider = document.getElementById('ageChildren2Slider'),
        ageChildren3Slider = document.getElementById('ageChildren3Slider'),
        ageChildren4Slider = document.getElementById('ageChildren4Slider'),
        ageChildren5Slider = document.getElementById('ageChildren5Slider'),
        nccSlider = document.getElementById('nccSlider'),
        superTaxRateSlider = document.getElementById('superTaxRateSlider'),
        contributionFeeASlider = document.getElementById('contributionFeeASlider'),
        adminFeeAASlider = document.getElementById('adminFeeASlider'),
        indirectCostRationASlider = document.getElementById('indirectCostRationASlider'),
        contributionFeeBSlider = document.getElementById('contributionFeeBSlider'),
        adminFeeBSlider = document.getElementById('adminFeeBSlider'),
        indirectCostRationBSlider = document.getElementById('indirectCostRationBSlider'),
        tfpSlider = document.getElementById('tfpSlider'),
        nraSlider = document.getElementById('nraSlider'),
        nrpSlider = document.getElementById('nrpSlider'),
        beforeTTRSlider = document.getElementById('beforeTTRSlider');


    noUiSlider.create(grossAnnualIncomeSlider, {
        start: [$scope.grossAnnualIncome],
        range: {
            'min': [0],
            'max': [600000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(grossAnnualIncomeSliderNew, {
        start: [$scope.grossAnnualIncomeNew],
        range: {
            'min': [0],
            'max': [600000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(homeMortgageSlider, {
        start: [$scope.homeMortgage],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(investmentPropertyMortgageSlider, {
        start: [$scope.investmentPropertyMortgage],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(personalLoanSlider, {
        start: [$scope.personalLoan],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(creditCardDebtSlider, {
        start: [$scope.creditCardDebt],
        range: {
            'min': [0],
            'max': [100000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(carLoanSlider, {
        start: [$scope.carLoan],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(otherLoanSlider, {
        start: [$scope.otherLoan],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });


    noUiSlider.create(homeValueSlider, {
        start: [$scope.homeValue],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(cashAtBankSlider, {
        start: [$scope.cashAtBank],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    /*noUiSlider.create(otherInvestmentSlider, {
        start: [$scope.otherInvestment],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });*/

    /*noUiSlider.create(superBalanceSlider, {
        start: [$scope.superBalance],
        range: {
            'min': [0],
            'max': [3000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });*/

    noUiSlider.create(ecLifeSlider, {
        start: [$scope.ecLife],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ecLifeSliderNew, {
        start: [$scope.ecLifeNew],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(ecTPDSlider, {
        start: [$scope.ecTPD],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ecTPDSliderNew, {
        start: [$scope.ecTPDNew],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(ecIPSlider, {
        start: [$scope.ecIP],
        range: {
            'min': [0],
            'max': [50000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ecIPSliderNew, {
        start: [$scope.ecIPNew],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(ecTraumaSlider, {
        start: [$scope.ecTrauma],
        range: {
            'min': [0],
            'max': [2000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ecTraumaSliderNew, {
        start: [$scope.ecTraumaNew],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

  /*  noUiSlider.create(numChildrenSlider, {
        start: [$scope.numChildren],
        range: {
            'min': [0],
            'max': [5]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: [false, false]
    });
*/
    noUiSlider.create(sickLeavesSlider, {
        start: [$scope.sickLeaves],
        range: {
            'min': [1],
            'max': [365]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: [false, false]
    });

    noUiSlider.create(funeralCostSlider, {
        start: [$scope.funeralCost],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(educationExpensePerYearPerChildSlider, {
        start: [$scope.educationExpensePerYearPerChild],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(familyLivingCostPerYearSlider, {
        start: [$scope.familyLivingCostPerYear],
        range: {
            'min': [0],
            'max': [500000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(inflationSlider, {
        start: [$scope.inflation],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });

    noUiSlider.create(rateOfReturnSlider, {
        start: [$scope.rateOfReturn],
        range: {
            'min': [0],
            'max': [50]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });

    noUiSlider.create(valueOfNewPropertySlider, {
        start: [$scope.valueOfNewProperty],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(moneyToBeBorrowedSlider, {
        start: [$scope.moneyToBeBorrowed],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ageSpouseSlider, {
        start: [$scope.ageSpouse],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });

    noUiSlider.create(spouseSalarySlider, {
        start: [$scope.spouseSalary],
        range: {
            'min': [0],
            'max': [2000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ageChildren1Slider, {
        start: [$scope.ageChildren1],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });
    noUiSlider.create(ageChildren2Slider, {
        start: [$scope.ageChildren2],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });
    noUiSlider.create(ageChildren3Slider, {
        start: [$scope.ageChildren3],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });
    noUiSlider.create(ageChildren4Slider, {
        start: [$scope.ageChildren4],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });
    noUiSlider.create(ageChildren5Slider, {
        start: [$scope.ageChildren5],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });

    noUiSlider.create(nccSlider, {
        start: [$scope.ncc],
        range: {
            'min': [0],
            'max': [180000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(superTaxRateSlider, {
        start: [$scope.superTaxRate],
        range: {
            'min': [0],
            'max': [15]
        },
        step: 0.5,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });

    noUiSlider.create(contributionFeeASlider, {
        start: [$scope.contributionFeeA],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.5,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });
    noUiSlider.create(adminFeeASlider, {
        start: [$scope.adminFeeA],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 100,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });
    noUiSlider.create(indirectCostRationASlider, {
        start: [$scope.indirectCostRationA],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.5,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });

    noUiSlider.create(contributionFeeBSlider, {
        start: [$scope.contributionFeeB],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.5,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });
    noUiSlider.create(adminFeeBSlider, {
        start: [$scope.adminFeeB],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 100,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });
    noUiSlider.create(indirectCostRationBSlider, {
        start: [$scope.indirectCostRationB],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.5,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });

    noUiSlider.create(beforeTTRSlider, {
        start: [$scope.beforeTTR],
        range: {
            'min': [0],
            'max': [3000000]
        },
        step: 1000,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });



    noUiSlider.create(tfpSlider, {
        start: [$scope.tfp],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(nraSlider, {
        start: [$scope.nra],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(nrpSlider, {
        start: [$scope.nrp],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%',
            thousand: ','
        }),
        connect: [false, false]
    });

    superTaxRateSlider.setAttribute('disabled', true);

    var ageInput = document.getElementById('ageInput'),
        grossAnnualIncomeInput = document.getElementById('grossAnnualIncomeInput'),
        grossAnnualIncomeInputNew = document.getElementById('grossAnnualIncomeInputNew'),
        homeMortgageInput = document.getElementById('homeMortgageInput'),
        investmentPropertyMortgageInput = document.getElementById('investmentPropertyMortgageInput'),
        creditCardDebtInput = document.getElementById('creditCardDebtInput'),
        carLoanInput = document.getElementById('carLoanInput'),
        personalLoanInput = document.getElementById('personalLoanInput'),
        otherLoanInput = document.getElementById('otherLoanInput'),
        homeValueInput = document.getElementById('homeValueInput'),
        cashAtBankInput = document.getElementById('cashAtBankInput'),
        // otherInvestmentInput = document.getElementById('otherInvestmentInput'),
        // superBalanceInput = document.getElementById('superBalanceInput'),
        ecLifeInput = document.getElementById('ecLifeInput'),
        ecLifeInputNew = document.getElementById('ecLifeInputNew'),
        ecTPDInput = document.getElementById('ecTPDInput'),
        ecTPDInputNew = document.getElementById('ecTPDInputNew'),
        ecIPInput = document.getElementById('ecIPInput'),
        ecIPInputNew = document.getElementById('ecIPInputNew'),
        ecTraumaInput = document.getElementById('ecTraumaInput'),
        ecTraumaInputNew = document.getElementById('ecTraumaInputNew'),
        numChildrenInput = document.getElementById('numChildrenInput'),
        funeralCostInput = document.getElementById('funeralCostInput'),
        educationExpensePerYearPerChildInput = document.getElementById('educationExpensePerYearPerChildInput'),
        familyLivingCostPerYearInput = document.getElementById('familyLivingCostPerYearInput'),
        inflationInput = document.getElementById('inflationInput'),
        rateOfReturnInput = document.getElementById('rateOfReturnInput'),
        valueOfNewPropertyInput = document.getElementById('valueOfNewPropertyInput'),
        moneyToBeBorrowedInput = document.getElementById('moneyToBeBorrowedInput'),
        ageSpouseInput = document.getElementById('ageSpouseInput'),
        spouseSalaryInput = document.getElementById('spouseSalaryInput'),
        ageChildren1Input = document.getElementById('ageChildren1Input'),
        ageChildren2Input = document.getElementById('ageChildren2Input'),
        ageChildren3Input = document.getElementById('ageChildren3Input'),
        ageChildren4Input = document.getElementById('ageChildren4Input'),
        ageChildren5Input = document.getElementById('ageChildren5Input'),
        ageChildren6Input = document.getElementById('ageChildren6Input'),
        ageChildren7Input = document.getElementById('ageChildren7Input'),
        ageChildren8Input = document.getElementById('ageChildren8Input'),
        sickLeavesInput = document.getElementById('sickLeavesInput'),
        nccInput = document.getElementById('nccInput'),
        contributionFeeAInput = document.getElementById('contributionFeeAInput'),
        adminFeeAInput = document.getElementById('adminFeeAInput'),
        indirectCostRationAInput = document.getElementById('indirectCostRationAInput'),
        contributionFeeBInput = document.getElementById('contributionFeeBInput'),
        adminFeeBInput = document.getElementById('adminFeeBInput'),
        indirectCostRationBInput = document.getElementById('indirectCostRationBInput'),
        beforeTTRInput = document.getElementById('beforeTTRInput'),
        nraInput = document.getElementById('nraInput'),
        nrpInput = document.getElementById('nrpInput'),
        thpInput = document.getElementById('thpInput');

    sickLeavesInput.addEventListener("change", function() {
        sickLeavesSlider.noUiSlider.set($scope.sickLeaves);
    });

    inflationInput.addEventListener("change", function() {
        inflationSlider.noUiSlider.set($scope.inflation);
    });

    rateOfReturnInput.addEventListener("change", function() {
        rateOfReturnSlider.noUiSlider.set($scope.rateOfReturn);
    });

    valueOfNewPropertyInput.addEventListener("change", function() {
        valueOfNewPropertySlider.noUiSlider.set($scope.valueOfNewProperty);
    });

    moneyToBeBorrowedInput.addEventListener("change", function() {
        moneyToBeBorrowedSlider.noUiSlider.set($scope.moneyToBeBorrowed);
    });

    ageSpouseInput.addEventListener("change", function() {
        ageSpouseSlider.noUiSlider.set($scope.ageSpouse);
    });

    spouseSalaryInput.addEventListener("change", function() {
        spouseSalarySlider.noUiSlider.set($scope.spouseSalary);
    });

    ageChildren1Input.addEventListener("change", function() {
        ageChildren1Slider.noUiSlider.set($scope.ageChildren1);
    });

    ageChildren2Input.addEventListener("change", function() {
        ageChildren2Slider.noUiSlider.set($scope.ageChildren2);
    });

    ageChildren3Input.addEventListener("change", function() {
        ageChildren3Slider.noUiSlider.set($scope.ageChildren3);
    });

    ageChildren4Input.addEventListener("change", function() {
        ageChildren4Slider.noUiSlider.set($scope.ageChildren4);
    });

    ageChildren5Input.addEventListener("change", function() {
        ageChildren5Slider.noUiSlider.set($scope.ageChildren5);
    });

    homeMortgageInput.addEventListener("change", function() {
        homeMortgageSlider.noUiSlider.set($scope.homeMortgage);
    });

    investmentPropertyMortgageInput.addEventListener("change", function() {
        investmentPropertyMortgageSlider.noUiSlider.set($scope.investmentPropertyMortgage);
    });

    creditCardDebtInput.addEventListener("change", function() {
        creditCardDebtSlider.noUiSlider.set($scope.creditCardDebt);
    });

    carLoanInput.addEventListener("change", function() {
        carLoanSlider.noUiSlider.set($scope.carLoan);
    });

    personalLoanInput.addEventListener("change", function() {
        personalLoanSlider.noUiSlider.set($scope.personalLoan);
    });

    otherLoanInput.addEventListener("change", function() {
        otherLoanSlider.noUiSlider.set($scope.otherLoan);
    });

    homeValueInput.addEventListener("change", function() {
        homeValueSlider.noUiSlider.set($scope.homeValue);
    });

    cashAtBankInput.addEventListener("change", function() {
        cashAtBankSlider.noUiSlider.set($scope.cashAtBank);
    });

    /*otherInvestmentInput.addEventListener("change", function() {
        otherInvestmentSlider.noUiSlider.set($scope.otherInvestment);
    });*/

    /*superBalanceInput.addEventListener("change", function() {
        superBalanceSlider.noUiSlider.set($scope.superBalance);
    });*/

    ecLifeInput.addEventListener("change", function() {
        ecLifeSlider.noUiSlider.set($scope.ecLife);
    });

    ecLifeInputNew.addEventListener("change", function() {
        ecLifeSliderNew.noUiSlider.set($scope.ecLifeNew);
    });

    ecTPDInput.addEventListener("change", function() {
        ecTPDSlider.noUiSlider.set($scope.ecTPD);
    });

    ecTPDInputNew.addEventListener("change", function() {
        ecTPDSliderNew.noUiSlider.set($scope.ecTPDNew);
    });

    ecIPInput.addEventListener("change", function() {
        ecIPSlider.noUiSlider.set($scope.ecIP);
    });

    ecIPInputNew.addEventListener("change", function() {
        ecIPSliderNew.noUiSlider.set($scope.ecIPNew);
    });

    ecTraumaInput.addEventListener("change", function() {
        ecTraumaSlider.noUiSlider.set($scope.ecTrauma);
    });

    ecTraumaInputNew.addEventListener("change", function() {
        ecTraumaSliderNew.noUiSlider.set($scope.ecTraumaNew);
    });

    funeralCostInput.addEventListener("change", function() {
        funeralCostSlider.noUiSlider.set($scope.funeralCost);
    });

    educationExpensePerYearPerChildInput.addEventListener("change", function() {
        educationExpensePerYearPerChildSlider.noUiSlider.set($scope.educationExpensePerYearPerChild);
    });

    familyLivingCostPerYearInput.addEventListener("change", function() {
        familyLivingCostPerYearSlider.noUiSlider.set($scope.familyLivingCostPerYear);
    });

    grossAnnualIncomeInput.addEventListener("change", function() {
        grossAnnualIncomeSlider.noUiSlider.set($scope.grossAnnualIncome);
    });

    grossAnnualIncomeInputNew.addEventListener("change", function() {
        grossAnnualIncomeSliderNew.noUiSlider.set($scope.grossAnnualIncomeNew);
    });

    nccInput.addEventListener("change", function() {
        nccSlider.noUiSlider.set($scope.ncc);
    });

    contributionFeeAInput.addEventListener("change", function() {
        contributionFeeASlider.noUiSlider.set($scope.contributionFeeA);
    });

    adminFeeAInput.addEventListener("change", function() {
        adminFeeASlider.noUiSlider.set($scope.adminFeeA);
    });

    indirectCostRationAInput.addEventListener("change", function() {
        indirectCostRationASlider.noUiSlider.set($scope.indirectCostRationA);
    });

    contributionFeeBInput.addEventListener("change", function() {
        contributionFeeBSlider.noUiSlider.set($scope.contributionFeeB);
    });

    adminFeeBInput.addEventListener("change", function() {
        adminFeeBSlider.noUiSlider.set($scope.adminFeeB);
    });

    indirectCostRationBInput.addEventListener("change", function() {
        indirectCostRationBSlider.noUiSlider.set($scope.indirectCostRationB);
    });

    beforeTTRInput.addEventListener("change", function() {
        beforeTTRSlider.noUiSlider.set($scope.beforeTTR);
    })

    tfpInput.addEventListener("change", function() {
        tfpSlider.noUiSlider.set($scope.tfp);
    })

    nraInput.addEventListener("change", function() {
        nraSlider.noUiSlider.set($scope.nra);
    })

    nrpInput.addEventListener("change", function() {
        nrpSlider.noUiSlider.set($scope.nrp);
    })

    function noChildren(num) {
        for (var i = 1; i <= num; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'block';
        }
        for (var i = (num + 1); i <= 5; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'none';
        }
    }

    grossAnnualIncomeSlider.noUiSlider.on('update', function(values, handle) {
        grossAnnualIncomeInput.value = values[handle];
        $scope.grossAnnualIncome = (values[handle]);
    });

    grossAnnualIncomeSliderNew.noUiSlider.on('update', function(values, handle) {
        grossAnnualIncomeInputNew.value = values[handle];
        $scope.grossAnnualIncomeNew = (values[handle]);
    });


    sickLeavesSlider.noUiSlider.on('update', function(values, handle) {
        sickLeavesInput.value = values[handle];
        $scope.sickLeaves = (values[handle]);
    });

    homeMortgageSlider.noUiSlider.on('update', function(values, handle) {
        homeMortgageInput.value = values[handle];
        $scope.homeMortgage = (values[handle]);
    });

    investmentPropertyMortgageSlider.noUiSlider.on('update', function(values, handle) {
        investmentPropertyMortgageInput.value = values[handle];
        $scope.investmentPropertyMortgage = (values[handle]);
    });

    creditCardDebtSlider.noUiSlider.on('update', function(values, handle) {
        creditCardDebtInput.value = values[handle];
        $scope.creditCardDebt = (values[handle]);
    });

    carLoanSlider.noUiSlider.on('update', function(values, handle) {
        carLoanInput.value = values[handle];
        $scope.carLoan = (values[handle]);
    });

    personalLoanSlider.noUiSlider.on('update', function(values, handle) {
        personalLoanInput.value = values[handle];
        $scope.personalLoan = (values[handle]);
    });

    otherLoanSlider.noUiSlider.on('update', function(values, handle) {
        otherLoanInput.value = values[handle];
        $scope.otherLoan = (values[handle]);
    });

    homeValueSlider.noUiSlider.on('update', function(values, handle) {
        homeValueInput.value = values[handle];
        $scope.homeValue = (values[handle]);
    });

    cashAtBankSlider.noUiSlider.on('update', function(values, handle) {
        cashAtBankInput.value = values[handle];
        $scope.cashAtBank = (values[handle]);
    });

    /*otherInvestmentSlider.noUiSlider.on('update', function(values, handle) {
        otherInvestmentInput.value = values[handle];
        $scope.otherInvestment = (values[handle]);
    });*/

    /*superBalanceSlider.noUiSlider.on('update', function(values, handle) {
        superBalanceInput.value = values[handle];
        $scope.superBalance = (values[handle]);
    });*/

    ecLifeSlider.noUiSlider.on('update', function(values, handle) {
        ecLifeInput.value = values[handle];
        $scope.ecLife = (values[handle]);
    });

    ecLifeSliderNew.noUiSlider.on('update', function(values, handle) {
        ecLifeInputNew.value = values[handle];
        $scope.ecLifeNew = (values[handle]);
    });

    ecTPDSlider.noUiSlider.on('update', function(values, handle) {
        ecTPDInput.value = values[handle];
        $scope.ecTPD = (values[handle]);
    });

    ecTPDSliderNew.noUiSlider.on('update', function(values, handle) {
        ecTPDInputNew.value = values[handle];
        $scope.ecTPDNew = (values[handle]);
    });

    ecIPSlider.noUiSlider.on('update', function(values, handle) {
        ecIPInput.value = values[handle];
        $scope.ecIP = (values[handle]);
    });

    ecIPSliderNew.noUiSlider.on('update', function(values, handle) {
        ecIPInputNew.value = values[handle];
        $scope.ecIPNew = (values[handle]);
    });

    ecTraumaSlider.noUiSlider.on('update', function(values, handle) {
        ecTraumaInput.value = values[handle];
        $scope.ecTrauma = (values[handle]);
    });

    ecTraumaSliderNew.noUiSlider.on('update', function(values, handle) {
        ecTraumaInputNew.value = values[handle];
        $scope.ecTraumaNew = (values[handle]);
    });

    numChildrenSlider.noUiSlider.on('update', function(values, handle) {
        numChildrenInput.value = values[handle];
        $scope.numChildren = Number(values[handle]);
        noChildren($scope.numChildren);
    });


    funeralCostSlider.noUiSlider.on('update', function(values, handle) {
        funeralCostInput.value = values[handle];
        $scope.funeralCost = (values[handle]);
    });

    educationExpensePerYearPerChildSlider.noUiSlider.on('update', function(values, handle) {
        educationExpensePerYearPerChildInput.value = values[handle];
        $scope.educationExpensePerYearPerChild = (values[handle]);
    });

    familyLivingCostPerYearSlider.noUiSlider.on('update', function(values, handle) {
        familyLivingCostPerYearInput.value = values[handle];
        $scope.familyLivingCostPerYear = (values[handle]);
    });

    inflationSlider.noUiSlider.on('update', function(values, handle) {
        inflationInput.value = values[handle];
        $scope.inflation = (values[handle]);
    });

    rateOfReturnSlider.noUiSlider.on('update', function(values, handle) {
        rateOfReturnInput.value = values[handle];
        $scope.rateOfReturn = (values[handle]);
    });

    valueOfNewPropertySlider.noUiSlider.on('update', function(values, handle) {
        valueOfNewPropertyInput.value = values[handle];
        $scope.valueOfNewProperty = (values[handle]);
    });

    moneyToBeBorrowedSlider.noUiSlider.on('update', function(values, handle) {
        moneyToBeBorrowedInput.value = values[handle];
        $scope.moneyToBeBorrowed = (values[handle]);
    });

    ageSpouseSlider.noUiSlider.on('update', function(values, handle) {
        ageSpouseInput.value = values[handle];
        $scope.ageSpouse = (values[handle]);
    });

    spouseSalarySlider.noUiSlider.on('update', function(values, handle) {
        spouseSalaryInput.value = values[handle];
        $scope.spouseSalary = (values[handle]);
    });

    ageChildren1Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren1Input.value = values[handle];
        $scope.ageChildren1 = Number(values[handle]);
    });
    ageChildren2Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren2Input.value = values[handle];
        $scope.ageChildren2 = Number(values[handle]);
    });
    ageChildren3Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren3Input.value = values[handle];
        $scope.ageChildren3 = Number(values[handle]);
    });
    ageChildren4Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren4Input.value = values[handle];
        $scope.ageChildren4 = Number(values[handle]);
    });
    ageChildren5Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren5Input.value = values[handle];
        $scope.ageChildren5 = Number(values[handle]);
    });

    nccSlider.noUiSlider.on('update', function(values, handle) {
        nccInput.value = values[handle];
        $scope.ncc = (values[handle]);
    });

    contributionFeeASlider.noUiSlider.on('update', function(values, handle) {
        contributionFeeAInput.value = values[handle];
        $scope.contributionFeeA = (values[handle]);
    });

    adminFeeASlider.noUiSlider.on('update', function(values, handle) {
        adminFeeAInput.value = values[handle];
        $scope.adminFeeA = (values[handle]);
    });

    indirectCostRationASlider.noUiSlider.on('update', function(values, handle) {
        indirectCostRationAInput.value = values[handle];
        $scope.indirectCostRationA = (values[handle]);
    });

    contributionFeeBSlider.noUiSlider.on('update', function(values, handle) {
        contributionFeeBInput.value = values[handle];
        $scope.contributionFeeB = (values[handle]);
    });

    adminFeeBSlider.noUiSlider.on('update', function(values, handle) {
        adminFeeBInput.value = values[handle];
        $scope.adminFeeB = (values[handle]);
    });

    indirectCostRationBSlider.noUiSlider.on('update', function(values, handle) {
        indirectCostRationBInput.value = values[handle];
        $scope.indirectCostRationB = (values[handle]);
    });

    beforeTTRSlider.noUiSlider.on('update', function(values, handle) {
        beforeTTRInput.value = values[handle];
        $scope.beforeTTR = (values[handle]);
    });

    tfpSlider.noUiSlider.on('update', function(values, handle) {
        tfpInput.value = values[handle];
        $scope.tfp = (values[handle]);
    });
    nraSlider.noUiSlider.on('update', function(values, handle) {
        nraInput.value = values[handle];
        $scope.nra = (values[handle]);
    });
    nrpSlider.noUiSlider.on('update', function(values, handle) {
        nrpInput.value = values[handle];
        $scope.nrp = (values[handle]);
    });

    numChildrenInput.addEventListener("change", function() {
        numChildrenSlider.noUiSlider.set($scope.numChildren);
        noChildren($scope.numChildren);
    })


    grossAnnualIncomeSlider.noUiSlider.on('set', function(values, handle) {
        grossAnnualIncomeInput.value = values[handle];
        $scope.grossAnnualIncome = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    grossAnnualIncomeSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        grossAnnualIncomeInput.value = values[handle];
        $scope.grossAnnualIncome = (values[handle]);
        grossAnnualIncomeSliderNew.noUiSlider.set($scope.grossAnnualIncome);
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    grossAnnualIncomeSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        grossAnnualIncomeInputNew.value = values[handle];
        $scope.grossAnnualIncomeNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinal(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });


    sickLeavesSlider.noUiSlider.on('set', function(values, handle) {
        sickLeavesInput.value = values[handle];
        $scope.sickLeaves = (values[handle]);
        $scope.waitingPeriod = $scope.calculateWaitingPeriod($scope.sickLeaves);
        //calculateFinal();
        $timeout(0);
    });

    homeMortgageSlider.noUiSlider.on('set', function(values, handle) {
        homeMortgageInput.value = values[handle];
        $scope.homeMortgage = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    investmentPropertyMortgageSlider.noUiSlider.on('set', function(values, handle) {
        investmentPropertyMortgageInput.value = values[handle];
        $scope.investmentPropertyMortgage = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    creditCardDebtSlider.noUiSlider.on('set', function(values, handle) {
        creditCardDebtInput.value = values[handle];
        $scope.creditCardDebt = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    carLoanSlider.noUiSlider.on('set', function(values, handle) {
        carLoanInput.value = values[handle];
        $scope.carLoan = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    personalLoanSlider.noUiSlider.on('set', function(values, handle) {
        personalLoanInput.value = values[handle];
        $scope.personalLoan = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    otherLoanSlider.noUiSlider.on('set', function(values, handle) {
        otherLoanInput.value = values[handle];
        $scope.otherLoan = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    homeValueSlider.noUiSlider.on('set', function(values, handle) {
        homeValueInput.value = values[handle];
        $scope.homeValue = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    cashAtBankSlider.noUiSlider.on('set', function(values, handle) {
        cashAtBankInput.value = values[handle];
        $scope.cashAtBank = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    /*otherInvestmentSlider.noUiSlider.on('set', function(values, handle) {
        otherInvestmentInput.value = values[handle];
        $scope.otherInvestment = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });*/

    /*superBalanceSlider.noUiSlider.on('set', function(values, handle) {
        superBalanceInput.value = values[handle];
        $scope.superBalance = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });*/

    ecLifeSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        ecLifeInput.value = values[handle];
        $scope.ecLife = (values[handle]);
        ecLifeSliderNew.noUiSlider.set($scope.ecLife);
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    ecLifeSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        ecLifeInputNew.value = values[handle];
        $scope.ecLifeNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinal(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });

    ecTPDSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        ecTPDInput.value = values[handle];
        $scope.ecTPD = (values[handle]);
        ecTPDSliderNew.noUiSlider.set($scope.ecTPD);
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    ecTPDSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        ecTPDInputNew.value = values[handle];
        $scope.ecTPDNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinal(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });

    ecIPSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        ecIPInput.value = values[handle];
        $scope.ecIP = (values[handle]);
        ecIPSliderNew.noUiSlider.set($scope.ecIP);
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    ecIPSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        ecIPInputNew.value = values[handle];
        $scope.ecIPNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinal(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });

    ecTraumaSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        ecTraumaInput.value = values[handle];
        $scope.ecTrauma = (values[handle]);
        ecTraumaSliderNew.noUiSlider.set($scope.ecTrauma);
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    ecTraumaSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        ecTraumaInputNew.value = values[handle];
        $scope.ecTraumaNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinal(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });

    numChildrenSlider.noUiSlider.on('set', function(values, handle) {
        numChildrenInput.value = values[handle];
        $scope.numChildren = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });


    funeralCostSlider.noUiSlider.on('set', function(values, handle) {
        funeralCostInput.value = values[handle];
        $scope.funeralCost = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    educationExpensePerYearPerChildSlider.noUiSlider.on('set', function(values, handle) {
        educationExpensePerYearPerChildInput.value = values[handle];
        $scope.educationExpensePerYearPerChild = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    familyLivingCostPerYearSlider.noUiSlider.on('set', function(values, handle) {
        familyLivingCostPerYearInput.value = values[handle];
        $scope.familyLivingCostPerYear = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    inflationSlider.noUiSlider.on('set', function(values, handle) {
        inflationInput.value = values[handle];
        $scope.inflation = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    rateOfReturnSlider.noUiSlider.on('set', function(values, handle) {
        rateOfReturnInput.value = values[handle];
        $scope.rateOfReturn = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    valueOfNewPropertySlider.noUiSlider.on('set', function(values, handle) {
        valueOfNewPropertyInput.value = values[handle];
        $scope.valueOfNewProperty = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    moneyToBeBorrowedSlider.noUiSlider.on('set', function(values, handle) {
        moneyToBeBorrowedInput.value = values[handle];
        $scope.moneyToBeBorrowed = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    ageSpouseSlider.noUiSlider.on('set', function(values, handle) {
        ageSpouseInput.value = values[handle];
        $scope.ageSpouse = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    spouseSalarySlider.noUiSlider.on('set', function(values, handle) {
        spouseSalaryInput.value = values[handle];
        $scope.spouseSalary = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });


    ageChildren1Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren1Input.value = values[handle];
        $scope.ageChildren1 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren2Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren2Input.value = values[handle];
        $scope.ageChildren2 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren3Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren3Input.value = values[handle];
        $scope.ageChildren3 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren4Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren4Input.value = values[handle];
        $scope.ageChildren4 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren5Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren5Input.value = values[handle];
        $scope.ageChildren5 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    nccSlider.noUiSlider.on('set', function(values, handle) {
        nccInput.value = values[handle];
        $scope.ncc = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    contributionFeeASlider.noUiSlider.on('set', function(values, handle) {
        contributionFeeAInput.value = values[handle];
        $scope.contributionFeeA = (values[handle]);
        $scope.fundA.annualPercentageFee = Number($scope.contributionFeeA.replaceAll('%', '')),
            // calculateFinal();
            $timeout(0);
    });

    adminFeeASlider.noUiSlider.on('set', function(values, handle) {
        adminFeeAInput.value = values[handle];
        $scope.adminFeeA = (values[handle]);
        $scope.fundA.adminFee = Number($scope.adminFeeA.replaceAll('$', '').replaceAll(',', ''))
            // calculateFinal();
        $timeout(0);
    });

    indirectCostRationASlider.noUiSlider.on('set', function(values, handle) {
        indirectCostRationAInput.value = values[handle];
        $scope.indirectCostRationA = (values[handle]);
        $scope.fundA.indirectCostRation = Number($scope.indirectCostRationA.replaceAll('%', '')),
            // calculateFinal();
            $timeout(0);
    });

    contributionFeeBSlider.noUiSlider.on('set', function(values, handle) {
        contributionFeeBInput.value = values[handle];
        $scope.contributionFeeB = (values[handle]);
        $scope.fundB.annualPercentageFee = Number($scope.contributionFeeB.replaceAll('%', '')),
            // calculateFinal();
            $timeout(0);
    });

    adminFeeBSlider.noUiSlider.on('set', function(values, handle) {
        adminFeeBInput.value = values[handle];
        $scope.adminFeeB = (values[handle]);
        $scope.fundB.adminFee = Number($scope.adminFeeB.replaceAll('$', '').replaceAll(',', ''))
            // calculateFinal();
        $timeout(0);
    });

    indirectCostRationBSlider.noUiSlider.on('set', function(values, handle) {
        indirectCostRationBInput.value = values[handle];
        $scope.indirectCostRationB = (values[handle]);
        $scope.fundB.indirectCostRation = Number($scope.indirectCostRationB.replaceAll('%', '')),
            // calculateFinal();
            $timeout(0);
    });

    beforeTTRSlider.noUiSlider.on('set', function(values, handle) {
        beforeTTRInput.value = values[handle];
        $scope.beforeTTR = (values[handle]);
        $scope.changeMaxTarget($scope.calculateMaxTHPSS());
        // $scope.submitForm2(true);
    });

    tfpSlider.noUiSlider.on('set', function(values, handle) {
        tfpInput.value = values[handle];
        $scope.tfp = (values[handle]);
        $scope.changeMaxTarget($scope.calculateMaxTHPSS());
        // $scope.submitForm2(true);
    });

    nraSlider.noUiSlider.on('set', function(values, handle) {
        nraInput.value = values[handle];
        $scope.nra = (values[handle]);
        // $scope.submitForm2(true);
    });

    nrpSlider.noUiSlider.on('set', function(values, handle) {
        nrpInput.value = values[handle];
        $scope.nrp = (values[handle]);
        // $scope.submitForm2(true);
    });

    var leMember1 = $scope.genderOption ? maleExpectancy[$scope.age] : femaleExpectancy[$scope.age];

    var leMember2 = $scope.genderOptionSpouse ? maleExpectancy[$scope.ageSpouse] : femaleExpectancy[$scope.ageSpouse];

    $scope.showPensionOption = true;
    $scope.showPensionOptionSpouse = true;

    $('#select-spouse-option').on('changed.bs.select', function(e) {
        $scope.spouseOption = $(this).selectpicker('val') <= 0;
        $timeout(0);
        //colorChange();

    });

    $scope.isMenuDrop1 = false;
	$scope.isMenuDrop2 = true;
    $scope.isMenuDrop3 = true;
    $scope.isMenuDrop4 = true;
    $scope.isMenuDrop5 = true;
    $scope.isMenuDrop6 = true;
    $scope.isMenuDrop7 = true;
    $scope.isMenuDrop8 = true;
//    $scope.isMenuDrop9 = true;
//    $scope.isMenuDrop10 = true;
//    $scope.isMenuDrop11 = true;
    //    $scope.isMenuDrop12 = true;

    $scope.next1 = false;
	$scope.next2 = false;
    $scope.next3 = false;
    $scope.next4 = false;
    $scope.next5 = false;
    $scope.next6 = false;
    $scope.next7 = false;
    $scope.next8 = false;
//    $scope.next9 = false;
//    $scope.next10 = false;
    //    $scope.next12 = false;

    $scope.menuDrop1 = function() {
            $scope.isMenuDrop1 = $scope.isMenuDrop1 ? false : true;
        }
	$scope.menuDrop2 = function() {
		$scope.isMenuDrop2 = $scope.isMenuDrop2 ? false : true;
	}
    $scope.menuDrop3 = function() {
        $scope.isMenuDrop3 = $scope.isMenuDrop3 ? false : true;
    }
    $scope.menuDrop4 = function() {
        $scope.isMenuDrop4 = $scope.isMenuDrop4 ? false : true;
    }
    $scope.menuDrop5 = function() {
        $scope.isMenuDrop5 = $scope.isMenuDrop5 ? false : true;
    }
    $scope.menuDrop6 = function() {
        $scope.isMenuDrop6 = $scope.isMenuDrop6 ? false : true;
    }
    $scope.menuDrop7 = function() {
        $scope.isMenuDrop7 = $scope.isMenuDrop7 ? false : true;
    }
    $scope.menuDrop8 = function() {
        $scope.isMenuDrop8 = $scope.isMenuDrop8 ? false : true;
    }
    $scope.menuDrop9 = function() {
        $scope.isMenuDrop9 = $scope.isMenuDrop9 ? false : true;
    }
   /* $scope.menuDrop10 = function() {
        $scope.isMenuDrop10 = $scope.isMenuDrop10 ? false : true;
    }
    $scope.menuDrop11 = function() {
            $scope.isMenuDrop11 = $scope.isMenuDrop11 ? false : true;
        }*/
        /*$scope.menuDrop12 = function() {
               $scope.isMenuDrop12 = $scope.isMenuDrop12 ? false : true;
           }*/


    $(".form-1").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop1 && $scope.next1) {
            $scope.isMenuDrop2 = false;
            $timeout(0);
            $scope.next1 = false;
        }
        /*if ($scope.spouseOption) {
            if ($scope.isMenuDrop1 && $scope.next1) {
                $scope.isMenuDrop2 = false;
                $timeout(0);
                $scope.next1 = false;
            }
        } else {
            if ($scope.isMenuDrop1 && $scope.next1) {
                $scope.isMenuDrop3 = false;
                $timeout(0);
                $scope.next1 = false;
            }
        }*/
    });
    $(".form-2").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop2 && $scope.next2) {
            $scope.isMenuDrop3 = false;
            $timeout(0);
            $scope.next2 = false;
        }
    });
    $(".form-3").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
		if ($scope.isMenuDrop3 && $scope.next3) {
            $scope.isMenuDrop4 = false;
            $timeout(0);
            $scope.next3 = false;
        }
        /*if ($scope.spouseOption) {
            if ($scope.isMenuDrop3 && $scope.next3) {
                $scope.isMenuDrop4 = false;
                $timeout(0);
                $scope.next3 = false;
            }
        } else {
            if ($scope.isMenuDrop3 && $scope.next3) {
                $scope.isMenuDrop5 = false;
                $timeout(0);
                $scope.next3 = false;
            }
        }*/
    });
    $(".form-4").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop4 && $scope.next4) {
            $scope.isMenuDrop5 = false;
            $timeout(0);
            $scope.next4 = false;
        }
    });
    $(".form-5").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop5 && $scope.next5) {
            $scope.isMenuDrop6 = false;
            $timeout(0);
            $scope.next5 = false;
        }
    });
    $(".form-6").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop6 && $scope.next6) {
            $scope.isMenuDrop7 = false;
            $timeout(0);
            $scope.next6 = false;
        }
    });
    $(".form-7").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop7 && $scope.next7) {
            $scope.isMenuDrop8 = false;
            $timeout(0);
            $scope.next7 = false;
        }
    });
    $(".form-8").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop8 && $scope.next8) {
            $scope.isMenuDrop9 = false;
            $timeout(0);
            $scope.next8 = false;
        }
    });
    /*$(".form-9").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop9 && $scope.next9) {
            $scope.isMenuDrop10 = false;
            $timeout(0);
            $scope.next9 = false;
        }
    });
    $(".form-10").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop10 && $scope.next10) {
            $scope.isMenuDrop11 = false;
            $timeout(0);
            $scope.next10 = false;
        }
    });*/






    $scope.nextDiv = function(div_num) {
        switch (div_num) {
            case 1:
                $scope.isMenuDrop1 = true;
                $scope.next1 = true;
                break;
            case 2:
                $scope.isMenuDrop2 = true;
                $scope.next2 = true;
                break;
            case 3:
                $scope.isMenuDrop3 = true;
                $scope.next3 = true;
                break;
            case 4:
                $scope.isMenuDrop4 = true;
                $scope.next4 = true;
                break;
            case 5:
                $scope.isMenuDrop5 = true;
                $scope.next5 = true;
                break;
            case 6:
                $scope.isMenuDrop6 = true;
                $scope.next6 = true;
                break;
            case 7:
                $scope.isMenuDrop7 = true;
                $scope.next7 = true;
                break;
            case 8:
                $scope.isMenuDrop8 = true;
                /*$scope.next8 = true;
                break;
            case 9:
                $scope.isMenuDrop9 = true;
                $scope.next9 = true;
                break;
            case 10:
                $scope.isMenuDrop10 = true;
                $scope.next10 = true;
                break;
            case 11:
                $scope.isMenuDrop11 = true;*/
        }
    }

    /*if(!$scope.spouseOption){
        colorChange();
    }

    function colorChange(){
        var accountDiv = document.getElementById("account-details-div");
        var assetsDetailsDiv = document.getElementById("assets-details-div");
        var liabilityDiv = document.getElementById("liability-details-div");
        var otherExpenseDiv = document.getElementById("otherExpense-details-div");
        var existingCoverDiv = document.getElementById("existingCover-details-div");
        var otherAssetsDiv = document.getElementById("other-assets-div");
        var optimisationTTRDiv = document.getElementById("optimisationTTR-details-div");
        var assetAllocationDiv = document.getElementById("assetAllocation-details-div");

        accountDiv.classList.toggle("colorChange");
        assetsDetailsDiv.classList.toggle("colorChange1");
        liabilityDiv.classList.toggle("colorChange");
        otherExpenseDiv.classList.toggle("colorChange1");
        existingCoverDiv.classList.toggle("colorChange");
        otherAssetsDiv.classList.toggle("colorChange1");
        optimisationTTRDiv.classList.toggle("colorChange");
        assetAllocationDiv.classList.toggle("colorChange1");


        if ($scope.spouseOption) {
            accountDiv.style.backgroundColor = "#dbebc9";
            liabilityDiv.style.backgroundColor = "#f3f5f4";
            existingCoverDiv.style.backgroundColor = "#f3f5f4";
            optimisationTTRDiv.style.backgroundColor = "#f3f5f4";
            assetsDetailsDiv.style.backgroundColor = "#dbebc9";
            otherExpenseDiv.style.backgroundColor = "#dbebc9";
            otherAssetsDiv.style.backgroundColor = "#dbebc9";
            assetAllocationDiv.style.backgroundColor = "#dbebc9";
        } else {
            assetsDetailsDiv.style.backgroundColor = "#dbebc9";
            otherExpenseDiv.style.backgroundColor = "#dbebc9";
            otherAssetsDiv.style.backgroundColor = "#dbebc9";
            assetAllocationDiv.style.backgroundColor = "#dbebc9";

            accountDiv.style.backgroundColor = "#f3f5f4";
            liabilityDiv.style.backgroundColor = "#f3f5f4";
            existingCoverDiv.style.backgroundColor = "#f3f5f4";
            optimisationTTRDiv.style.backgroundColor = "#f3f5f4";
        }
    }*/

    $('#select-gender-option').on('changed.bs.select', function(e) {
        $scope.genderOption = $(this).selectpicker('val') <= 0;
        // console.log("gender option set to", $scope.genderOption);
        $timeout(0);
        leMember1 = $scope.genderOption ? maleExpectancy[$scope.age] : femaleExpectancy[$scope.age];
    });

    $('#select-gender-option-spouse').on('changed.bs.select', function(e) {
        $scope.genderOptionSpouse = $(this).selectpicker('val') > 0;
        // console.log("spouse gender option set to", $scope.genderOptionSpouse);
        $timeout(0);
        leMember2 = $scope.genderOptionSpouse ? maleExpectancy[$scope.ageSpouse] : femaleExpectancy[$scope.ageSpouse];

    });

    $('#select-house-option').on('changed.bs.select', function(e) {
        $scope.houseOption = $(this).selectpicker('val') <= 0;
        // console.log("house option set to", $scope.houseOption);
        $timeout(0);
    });

    $('#select-pension-drawdown').on('changed.bs.select', function(e) {
        $scope.showPensionOption = $(this).selectpicker('val') <= 0;
        // console.log("choose pension option set to", $scope.showPensionOption);
        $timeout(0);
    });

    $('#select-pension-drawdown-spouse').on('changed.bs.select', function(e) {
        $scope.showPensionOptionSpouse = $(this).selectpicker('val') <= 0;
        // console.log("choose spouse pension option set to", $scope.showPensionOptionSpouse);
        $timeout(0);
    });

    var retirementAgeSlider = document.getElementById('retirementAgeSlider'),
        annualSalarySlider = document.getElementById('annualSalarySlider'),
        annualSalarySliderNew = document.getElementById('annualSalarySliderNew'),
        employerContributionLevelSlider = document.getElementById('employerContributionLevelSlider'),
        employerContributionLevelSpouseSlider = document.getElementById('employerContributionLevelSpouseSlider'),
        superBalanceSlider = document.getElementById('superBalanceSlider'),
        superBalanceSliderNew = document.getElementById('superBalanceSliderNew'),
        // inflationSlider = document.getElementById('inflationSlider'),
        inflationSpouseSlider = document.getElementById('inflationSpouseSlider'),
        wageIncreaseSlider = document.getElementById('wageIncreaseSlider'),
        wageIncreaseSpouseSlider = document.getElementById('wageIncreaseSpouseSlider'),
        insurancePremiumSlider = document.getElementById('insurancePremiumSlider'),
        salarySacrificeSlider = document.getElementById('salarySacrificeSlider'),
        pensionStartSlider = document.getElementById('pensionStartSlider'),
        investmentReturnSlider = document.getElementById('investmentReturnSlider'),
        variableFeeSlider = document.getElementById('variableFeeSlider'),
        fixedFeeSlider = document.getElementById('fixedFeeSlider'),
        annualSalarySpouseSlider = document.getElementById('annualSalarySpouseSlider'),
        annualSalarySpouseSliderNew = document.getElementById('annualSalarySpouseSliderNew'),
        superBalanceSpouseSlider = document.getElementById('superBalanceSpouseSlider'),
        superBalanceSpouseSliderNew = document.getElementById('superBalanceSpouseSliderNew'),
        salarySacrificeSpouseSlider = document.getElementById('salarySacrificeSpouseSlider'),
        pensionStartSpouseSlider = document.getElementById('pensionStartSpouseSlider'),
        insurancePremiumSpouseSlider = document.getElementById('insurancePremiumSpouseSlider'),
        investmentReturnSpouseSlider = document.getElementById('investmentReturnSpouseSlider'),
        variableFeeSpouseSlider = document.getElementById('variableFeeSpouseSlider'),
        fixedFeeSpouseSlider = document.getElementById('fixedFeeSpouseSlider'),
        retirementAgeSpouseSlider = document.getElementById('retirementAgeSpouseSlider'),
        retirementAgeSpouseSliderNew = document.getElementById('retirementAgeSpouseSliderNew'),
        pensionDrawdownBaseSlider = document.getElementById('pensionDrawdownBaseSlider'),
        pensionDrawdownBaseSpouseSlider = document.getElementById('pensionDrawdownBaseSpouseSlider'),
        homeContentsSlider = document.getElementById('homeContentsSlider'),
        vehicleCostSlider = document.getElementById('vehicleCostSlider'),
        investmentPropertySlider = document.getElementById('investmentPropertySlider'),
        bankAssetsSlider = document.getElementById('bankAssetsSlider'),
        listedInvestmentSlider = document.getElementById('listedInvestmentSlider'),
        marginLoansSlider = document.getElementById('marginLoansSlider'),
        allocatedPensionSlider = document.getElementById('allocatedPensionSlider'),
        otherInvestmentSlider = document.getElementById('otherInvestmentSlider'),
        netRentalIncomeSlider = document.getElementById('netRentalIncomeSlider'),
        otherIncomeSlider = document.getElementById('otherIncomeSlider'),
        pensionIncomeSlider = document.getElementById('pensionIncomeSlider'),
        targetSlider = document.getElementById('targetSlider'),
        targetSliderNew = document.getElementById('targetSliderNew');


    noUiSlider.create(targetSlider, {
        start: [$scope.target],
        range: {
            'min': [10000],
            'max': [100000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(targetSliderNew, {
        start: [$scope.targetNew],
        range: {
            'min': [10000],
            'max': [100000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });


    noUiSlider.create(retirementAgeSlider, {
        start: [$scope.retirementAge],
        range: {
            'min': [60],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: [false, false]
    });


    noUiSlider.create(annualSalarySlider, {
        start: [$scope.annualSalary],
        range: {
            'min': [0],
            'max': [600000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(annualSalarySliderNew, {
        start: [$scope.annualSalaryNew],
        range: {
            'min': [0],
            'max': [600000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(employerContributionLevelSlider, {
        start: [$scope.employerContributionLevel],
        range: {
            'min': [9],
            'max': [20]
        },
        step: 0.1,
        format: wNumb({
            decimals: 2,
            postfix: '%',
            // thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(employerContributionLevelSpouseSlider, {
        start: [$scope.employerContributionLevelSpouse],
        range: {
            'min': [9],
            'max': [20]
        },
        step: 0.1,
        format: wNumb({
            decimals: 2,
            postfix: '%',
            // thousand: ','
        }),
        connect: [false, false]
    });

    /*noUiSlider.create(inflationSlider, {
        start: [$scope.inflation],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.1,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });*/

    noUiSlider.create(inflationSpouseSlider, {
        start: [$scope.inflationSpouse],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.1,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });

    noUiSlider.create(superBalanceSlider, {
        start: [$scope.superBalance],
        range: {
            'min': [0],
            'max': [3000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(superBalanceSliderNew, {
        start: [$scope.superBalanceNew],
        range: {
            'min': [0],
            'max': [3000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });


    noUiSlider.create(wageIncreaseSlider, {
        start: [$scope.wageIncrease],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.1,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });

    noUiSlider.create(wageIncreaseSpouseSlider, {
        start: [$scope.wageIncreaseSpouse],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.1,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });


    noUiSlider.create(insurancePremiumSlider, {
        start: [$scope.insurancePremium],
        range: {
            'min': [0],
            'max': [20000]
        },
        step: 100,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(salarySacrificeSlider, {
        start: [$scope.salarySacrifice],
        range: {
            'min': [0],
            'max': [35000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(pensionStartSlider, {
        start: [$scope.pensionStart],
        range: {
            'min': [55],
            'max': [65]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: [false, false]
    });

   /* noUiSlider.create(investmentReturnSlider, {
        start: [$scope.investmentReturn],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.1,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });*/

    noUiSlider.create(variableFeeSlider, {
        start: [$scope.variableFee],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.01,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });

    noUiSlider.create(fixedFeeSlider, {
        start: [$scope.fixedFee],
        range: {
            'min': [0],
            'max': [20000]
        },
        step: 100,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(annualSalarySpouseSlider, {
        start: [$scope.annualSalarySpouse],
        range: {
            'min': [0],
            'max': [600000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(annualSalarySpouseSliderNew, {
        start: [$scope.annualSalarySpouseNew],
        range: {
            'min': [0],
            'max': [600000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(superBalanceSpouseSlider, {
        start: [$scope.superBalanceSpouse],
        range: {
            'min': [0],
            'max': [3000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(superBalanceSpouseSliderNew, {
        start: [$scope.superBalanceSpouseNew],
        range: {
            'min': [0],
            'max': [3000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(insurancePremiumSpouseSlider, {
        start: [$scope.insurancePremiumSpouse],
        range: {
            'min': [0],
            'max': [20000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(salarySacrificeSpouseSlider, {
        start: [$scope.salarySacrificeSpouse],
        range: {
            'min': [0],
            'max': [35000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(pensionStartSpouseSlider, {
        start: [$scope.pensionStartSpouse],
        range: {
            'min': [55],
            'max': [65]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: [false, false]
    });
    noUiSlider.create(investmentReturnSpouseSlider, {
        start: [$scope.investmentReturnSpouse],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.1,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });


    noUiSlider.create(variableFeeSpouseSlider, {
        start: [$scope.variableFeeSpouse],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 0.01,
        format: wNumb({
            decimals: 2,
            postfix: '%',
        }),
        connect: [false, false]
    });

    noUiSlider.create(fixedFeeSpouseSlider, {
        start: [$scope.fixedFeeSpouse],
        range: {
            'min': [0],
            'max': [20000]
        },
        step: 100,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(retirementAgeSpouseSlider, {
        start: [$scope.retirementAgeSpouse],
        range: {
            'min': [60],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            // prefix: '$',
            // thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(retirementAgeSpouseSliderNew, {
        start: [$scope.retirementAgeSpouseNew],
        range: {
            'min': [60],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            // prefix: '$',
            // thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(pensionDrawdownBaseSlider, {
        start: [$scope.pensionDrawdownBase],
        range: {
            'min': [0],
            'max': [60000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(pensionDrawdownBaseSpouseSlider, {
        start: [$scope.pensionDrawdownBaseSpouse],
        range: {
            'min': [0],
            'max': [60000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(homeContentsSlider, {
        start: [$scope.homeContents],
        range: {
            'min': [0],
            'max': [500000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(vehicleCostSlider, {
        start: [$scope.vehicleCost],
        range: {
            'min': [0],
            'max': [500000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(listedInvestmentSlider, {
        start: [$scope.listedInvestment],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(investmentPropertySlider, {
        start: [$scope.investmentProperty],
        range: {
            'min': [0],
            'max': [2000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(bankAssetsSlider, {
        start: [$scope.bankAssets],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(marginLoansSlider, {
        start: [$scope.marginLoans],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });


    noUiSlider.create(allocatedPensionSlider, {
        start: [$scope.allocatedPension],
        range: {
            'min': [0],
            'max': [100000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    // noUiSlider.create(superFundsSlider, {
    //     start: [$scope.superFunds],
    //     range: {
    //         'min': [0],
    //         'max': [10000000]
    //     },
    //     step: 500,
    //     format: wNumb({
    //         decimals: 0,
    //         prefix: '$',
    //         thousand: ','
    //     }),
    //     connect: [false,false]
    // });

    noUiSlider.create(otherInvestmentSlider, {
        start: [$scope.otherInvestment],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    // noUiSlider.create(employmentIncomeSlider, {
    //     start: [$scope.employmentIncome],
    //     range: {
    //         'min': [0],
    //         'max': [10000000]
    //     },
    //     step: 500,
    //     format: wNumb({
    //         decimals: 0,
    //         prefix: '$',
    //         thousand: ','
    //     }),
    //     connect: [false,false]
    // });

    // noUiSlider.create(employmentIncomePartnerSlider, {
    //     start: [$scope.employmentIncomePartner],
    //     range: {
    //         'min': [0],
    //         'max': [10000000]
    //     },
    //     step: 500,
    //     format: wNumb({
    //         decimals: 0,
    //         prefix: '$',
    //         thousand: ','
    //     }),
    //     connect: [false,false]
    // });

    noUiSlider.create(netRentalIncomeSlider, {
        start: [$scope.netRentalIncome],
        range: {
            'min': [0],
            'max': [20000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(otherIncomeSlider, {
        start: [$scope.otherIncome],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });
    noUiSlider.create(pensionIncomeSlider, {
        start: [$scope.pensionIncome],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });




    var ageInput = document.getElementById('ageInput'),
        retirementAgeInput = document.getElementById('retirementAgeInput'),
        retirementAgeInputNew = document.getElementById('retirementAgeInputNew'),
        annualSalaryInput = document.getElementById('annualSalaryInput'),
        annualSalaryInputNew = document.getElementById('annualSalaryInputNew'),
        employerContributionLevelInput = document.getElementById('employerContributionLevelInput'),
        employerContributionLevelSpouseInput = document.getElementById('employerContributionLevelSpouseInput'),
        superBalanceInput = document.getElementById('superBalanceInput'),
        superBalanceInputNew = document.getElementById('superBalanceInputNew'),
        // rateOfReturnInput = document.getElementById('rateOfReturnInput'),
        // inflationInput = document.getElementById('inflationInput'),
        inflationSpouseInput = document.getElementById('inflationSpouseInput'),
        wageIncreaseInput = document.getElementById('wageIncreaseInput'),
        wageIncreaseSpouseInput = document.getElementById('wageIncreaseSpouseInput'),
        insurancePremiumInput = document.getElementById('insurancePremiumInput'),
        superTaxRateInput = document.getElementById('superTaxRateInput'),
        salarySacrificeInput = document.getElementById('salarySacrificeInput'),
        pensionStartInput = document.getElementById('pensionStartInput'),
        investmentReturnInput = document.getElementById('investmentReturnInput'),
        variableFeeInput = document.getElementById('variableFeeInput'),
        fixedFeeInput = document.getElementById('fixedFeeInput'),
        annualSalarySpouseInput = document.getElementById('annualSalarySpouseInput'),
        annualSalarySpouseInputNew = document.getElementById('annualSalarySpouseInputNew'),
        superBalanceSpouseInput = document.getElementById('superBalanceSpouseInput'),
        superBalanceSpouseInputNew = document.getElementById('superBalanceSpouseInputNew'),
        salarySacrificeSpouseInput = document.getElementById('salarySacrificeSpouseInput'),
        pensionStartSpouseInput = document.getElementById('pensionStartSpouseInput'),
        insurancePremiumSpouseInput = document.getElementById('insurancePremiumSpouseInput'),
        investmentReturnSpouseInput = document.getElementById('investmentReturnSpouseInput'),
        variableFeeSpouseInput = document.getElementById('variableFeeSpouseInput'),
        fixedFeeSpouseInput = document.getElementById('fixedFeeSpouseInput'),
        retirementAgeSpouseInput = document.getElementById('retirementAgeSpouseInput'),
        retirementAgeSpouseInputNew = document.getElementById('retirementAgeSpouseInputNew'),
        pensionDrawdownBaseInput = document.getElementById('pensionDrawdownBaseInput'),
        pensionDrawdownBaseSpouseInput = document.getElementById('pensionDrawdownBaseSpouseInput'),
        homeContentsInput = document.getElementById('homeContentsInput'),
        vehicleCostInput = document.getElementById('vehicleCostInput'),
        investmentPropertyInput = document.getElementById('investmentPropertyInput'),
        bankAssetsInput = document.getElementById('bankAssetsInput'),
        listedInvestmentInput = document.getElementById('listedInvestmentInput'),
        marginLoansInput = document.getElementById('marginLoansInput'),
        allocatedPensionInput = document.getElementById('allocatedPensionInput'),
        // superFundsInput = document.getElementById('superFundsInput'),
        otherInvestmentInput = document.getElementById('otherInvestmentInput'),
        // employmentIncomeInput = document.getElementById('employmentIncomeInput'),
        // employmentIncomePartnerInput = document.getElementById('employmentIncomePartnerInput'),
        netRentalIncomeInput = document.getElementById('netRentalIncomeInput'),
        otherIncomeInput = document.getElementById('otherIncomeInput'),
        pensionIncomeInput = document.getElementById('pensionIncomeInput')
    targetInput = document.getElementById('targetInput'),
        targetInputNew = document.getElementById('targetInputNew');

    targetSlider.noUiSlider.on('update', function(values, handle) {
        targetInput.value = values[handle];
        $scope.target = (values[handle]);
    });

    targetSliderNew.noUiSlider.on('update', function(values, handle) {
        targetInputNew.value = values[handle];
        $scope.targetNew = (values[handle]);
    });

    retirementAgeSlider.noUiSlider.on('update', function(values, handle) {
        retirementAgeInput.value = values[handle];
        $scope.retirementAge = (values[handle]);
    });


    annualSalarySlider.noUiSlider.on('update', function(values, handle) {
        // console.log("sli up");
        annualSalaryInput.value = values[handle];
        $scope.annualSalary = (values[handle]);
        $timeout(0);
    });

    annualSalarySliderNew.noUiSlider.on('update', function(values, handle) {
        // console.log("newsli up");
        annualSalaryInputNew.value = values[handle];
        $scope.annualSalaryNew = (values[handle]);
        $timeout(0);
    });

    employerContributionLevelSlider.noUiSlider.on('update', function(values, handle) {
        employerContributionLevelInput.value = values[handle];
        $scope.employerContributionLevel = (values[handle]);
    });

    employerContributionLevelSpouseSlider.noUiSlider.on('update', function(values, handle) {
        employerContributionLevelSpouseInput.value = values[handle];
        $scope.employerContributionLevelSpouse = (values[handle]);
    });

    superBalanceSlider.noUiSlider.on('update', function(values, handle) {
        superBalanceInput.value = values[handle];
        $scope.superBalance = (values[handle]);
    });

    superBalanceSliderNew.noUiSlider.on('update', function(values, handle) {
        superBalanceInputNew.value = values[handle];
        $scope.superBalanceNew = (values[handle]);
    });

    // rateOfReturnSlider.noUiSlider.on('update', function(values, handle) {
    //     rateOfReturnInput.value = values[handle];
    //     $scope.rateOfReturn = (values[handle]);
    // });

    inflationSlider.noUiSlider.on('update', function(values, handle) {
        inflationInput.value = values[handle];
        $scope.inflation = (values[handle]);
    });

    inflationSpouseSlider.noUiSlider.on('update', function(values, handle) {
        inflationSpouseInput.value = values[handle];
        $scope.inflationSpouse = (values[handle]);
    });

    wageIncreaseSlider.noUiSlider.on('update', function(values, handle) {
        wageIncreaseInput.value = values[handle];
        $scope.wageIncrease = (values[handle]);
    });

    wageIncreaseSpouseSlider.noUiSlider.on('update', function(values, handle) {
        wageIncreaseSpouseInput.value = values[handle];
        $scope.wageIncreaseSpouse = (values[handle]);
    });

    insurancePremiumSlider.noUiSlider.on('update', function(values, handle) {
        insurancePremiumInput.value = values[handle];
        $scope.insurancePremium = (values[handle]);
    });

    superTaxRateSlider.noUiSlider.on('update', function(values, handle) {
        superTaxRateInput.value = values[handle];
        $scope.superTaxRate = (values[handle]);
    });

    salarySacrificeSlider.noUiSlider.on('update', function(values, handle) {
        salarySacrificeInput.value = values[handle];
        $scope.salarySacrifice = (values[handle]);
    });

    pensionStartSlider.noUiSlider.on('update', function(values, handle) {
        pensionStartInput.value = values[handle];
        $scope.pensionStart = (values[handle]);
    });

    investmentReturnSlider.noUiSlider.on('update', function(values, handle) {
        investmentReturnInput.value = values[handle];
        $scope.investmentReturn = (values[handle]);
    });

    variableFeeSlider.noUiSlider.on('update', function(values, handle) {
        variableFeeInput.value = values[handle];
        $scope.variableFee = (values[handle]);
    });

    fixedFeeSlider.noUiSlider.on('update', function(values, handle) {
        fixedFeeInput.value = values[handle];
        $scope.fixedFee = (values[handle]);
    });

    annualSalarySpouseSlider.noUiSlider.on('update', function(values, handle) {
        annualSalarySpouseInput.value = values[handle];
        $scope.annualSalarySpouse = (values[handle]);
    });

    annualSalarySpouseSliderNew.noUiSlider.on('update', function(values, handle) {
        annualSalarySpouseInputNew.value = values[handle];
        $scope.annualSalarySpouseNew = (values[handle]);
    });

    superBalanceSpouseSlider.noUiSlider.on('update', function(values, handle) {
        superBalanceSpouseInput.value = values[handle];
        $scope.superBalanceSpouse = (values[handle]);
    });

    superBalanceSpouseSliderNew.noUiSlider.on('update', function(values, handle) {
        superBalanceSpouseInputNew.value = values[handle];
        $scope.superBalanceSpouseNew = (values[handle]);
    });

    salarySacrificeSpouseSlider.noUiSlider.on('update', function(values, handle) {
        salarySacrificeSpouseInput.value = values[handle];
        $scope.salarySacrificeSpouse = (values[handle]);
    });

    pensionStartSpouseSlider.noUiSlider.on('update', function(values, handle) {
        pensionStartSpouseInput.value = values[handle];
        $scope.pensionStartSpouse = (values[handle]);
    });

    insurancePremiumSpouseSlider.noUiSlider.on('update', function(values, handle) {
        insurancePremiumSpouseInput.value = values[handle];
        $scope.insurancePremiumSpouse = (values[handle]);
    });

    investmentReturnSpouseSlider.noUiSlider.on('update', function(values, handle) {
        investmentReturnSpouseInput.value = values[handle];
        $scope.investmentReturnSpouse = (values[handle]);
    });

    variableFeeSpouseSlider.noUiSlider.on('update', function(values, handle) {
        variableFeeSpouseInput.value = values[handle];
        $scope.variableFeeSpouse = (values[handle]);
    });

    fixedFeeSpouseSlider.noUiSlider.on('update', function(values, handle) {
        fixedFeeSpouseInput.value = values[handle];
        $scope.fixedFeeSpouse = (values[handle]);
    });

    retirementAgeSpouseSlider.noUiSlider.on('update', function(values, handle) {
        retirementAgeSpouseInput.value = values[handle];
        $scope.retirementAgeSpouse = (values[handle]);
    });

    retirementAgeSpouseSliderNew.noUiSlider.on('update', function(values, handle) {
        retirementAgeSpouseInputNew.value = values[handle];
        $scope.retirementAgeSpouseNew = (values[handle]);
    });

    pensionDrawdownBaseSlider.noUiSlider.on('update', function(values, handle) {
        pensionDrawdownBaseInput.value = values[handle];
        $scope.pensionDrawdownBase = (values[handle]);
    });

    pensionDrawdownBaseSpouseSlider.noUiSlider.on('update', function(values, handle) {
        pensionDrawdownBaseSpouseInput.value = values[handle];
        $scope.pensionDrawdownBaseSpouse = (values[handle]);
    });

    homeContentsSlider.noUiSlider.on('update', function(values, handle) {
        homeContentsInput.value = values[handle];
        $scope.homeContents = (values[handle]);
    });

    vehicleCostSlider.noUiSlider.on('update', function(values, handle) {
        vehicleCostInput.value = values[handle];
        $scope.vehicleCost = (values[handle]);
    });

    investmentPropertySlider.noUiSlider.on('update', function(values, handle) {
        investmentPropertyInput.value = values[handle];
        $scope.investmentProperty = (values[handle]);
    });

    bankAssetsSlider.noUiSlider.on('update', function(values, handle) {
        bankAssetsInput.value = values[handle];
        $scope.bankAssets = (values[handle]);
    });

    listedInvestmentSlider.noUiSlider.on('update', function(values, handle) {
        listedInvestmentInput.value = values[handle];
        $scope.listedInvestment = (values[handle]);
    });

    marginLoansSlider.noUiSlider.on('update', function(values, handle) {
        marginLoansInput.value = values[handle];
        $scope.marginLoans = (values[handle]);
    });

    allocatedPensionSlider.noUiSlider.on('update', function(values, handle) {
        allocatedPensionInput.value = values[handle];
        $scope.allocatedPension = (values[handle]);
    });

    // superFundsSlider.noUiSlider.on('update', function(values, handle) {
    //     superFundsInput.value = values[handle];
    //     $scope.superFunds = (values[handle]);
    // });

    otherInvestmentSlider.noUiSlider.on('update', function(values, handle) {
        otherInvestmentInput.value = values[handle];
        $scope.otherInvestment = (values[handle]);
    });

    // employmentIncomeSlider.noUiSlider.on('update', function(values, handle) {
    //     employmentIncomeInput.value = values[handle];
    //     $scope.employmentIncome = (values[handle]);
    // });

    // employmentIncomePartnerSlider.noUiSlider.on('update', function(values, handle) {
    //     employmentIncomePartnerInput.value = values[handle];
    //     $scope.employmentIncomePartner = (values[handle]);
    // });

    netRentalIncomeSlider.noUiSlider.on('update', function(values, handle) {
        netRentalIncomeInput.value = values[handle];
        $scope.netRentalIncome = (values[handle]);
    });

    otherIncomeSlider.noUiSlider.on('update', function(values, handle) {
        otherIncomeInput.value = values[handle];
        $scope.otherIncome = (values[handle]);
    });
    pensionIncomeSlider.noUiSlider.on('update', function(values, handle) {
        pensionIncomeInput.value = values[handle];
        $scope.pensionIncome = (values[handle]);
    });

    function preservationTable(ageTemp) {
        var temp;
        switch (ageTemp) {
            case 56:
                temp = 56;
                break;
            case 55:
                temp = 57;
                break;
            case 54:
                temp = 58;
                break;
            case 53:
                temp = 59;
                break;
            default:
                if ($scope.age > 56) {
                    temp = 55
                } else {
                    temp = 60
                }
                break;
        }
        return temp;
    }

    function preservationChange(temp) {
        if (temp) {
            $scope.preservationAge = preservationTable($scope.age);
        } else {
            $scope.preservationAgeSpouse = preservationTable($scope.ageSpouse);
        }

    }

    $scope.ageChange = function() {
        var dobText = document.getElementById("dobText");
        var dateString = dobText.value;
        var dateArr = dateString.split("/");

        var date_regex = /^([1-9]|0[1-9]|1\d|2\d|3[01])\/(0[1-9]|[1-9]|1[0-2])\/(19[5-9][0-9])$/;
        var correct = date_regex.test(dobText.value);
        var fd = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
        if (((fd.getMonth() + 1) === Number(dateArr[1]) && fd.getDate() === Number(dateArr[0])) && correct) {
            $scope.dob = fd;
        } else {
            $scope.dob = initDate;
        }
        $scope.age = AgeCalculator.getAge($scope.dob, $scope.fy);
        leMember1 = $scope.genderOption ? maleExpectancy[$scope.age] : femaleExpectancy[$scope.age];
        if ($scope.age > 59) {
            retirementAgeSlider.noUiSlider.updateOptions({
                range: {
                    'min': ($scope.age + 1),
                    'max': 75
                }
            });
        } else {
            retirementAgeSlider.noUiSlider.updateOptions({
                range: {
                    'min': 60,
                    'max': 75
                }
            });
        }
        preservationChange(true);
        if (Number($scope.preservationAge) == Number($scope.retirementAge)) {
            $scope.pensionStart = Number($scope.preservationAge);
            pensionStartSlider.setAttribute('disabled', true);
        } else {
            pensionStartSlider.removeAttribute('disabled');
            pensionStartSlider.noUiSlider.updateOptions({
                range: {
                    'min': (Number($scope.preservationAge)),
                    'max': (Number($scope.retirementAge))
                }
            });
        }
        $scope.compYear = 2016;
        $scope.begngInvstmntPrd = Math.max(1991, $scope.dob.getFullYear() + 18);
        $scope.invstmntHorzn = $scope.compYear - $scope.begngInvstmntPrd;
        alterYearSlider.noUiSlider.updateOptions({
            range: {
                'min': 0,
                'max': [$scope.invstmntHorzn]
            },
        });

        changeCCLimit();
    }


    $scope.ageChange2 = function() {
        var dobText = document.getElementById("dobTextSpouse");
        var dateString = dobText.value;
        var dateArr = dateString.split("/");

        var date_regex = /^([1-9]|0[1-9]|1\d|2\d|3[01])\/(0[1-9]|[1-9]|1[0-2])\/(19[5-9][0-9])$/;
        var correct = date_regex.test(dobText.value);
        var fd = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
        if (((fd.getMonth() + 1) === Number(dateArr[1]) && fd.getDate() === Number(dateArr[0])) && correct) {
            $scope.dobSpouse = fd;
        } else {
            $scope.dobSpouse = initDate;
        }
        $scope.ageSpouse = AgeCalculator.getAge($scope.dobSpouse, $scope.fy);
        leMember2 = $scope.genderOptionSpouse ? maleExpectancy[$scope.ageSpouse] : femaleExpectancy[$scope.ageSpouse];
        if ($scope.ageSpouse > 59) {
            retirementAgeSpouseSlider.noUiSlider.updateOptions({
                range: {
                    'min': ($scope.ageSpouse + 1),
                    'max': 75
                }
            });
            retirementAgeSpouseSliderNew.noUiSlider.updateOptions({
                range: {
                    'min': ($scope.ageSpouse + 1),
                    'max': 75
                }
            });
        } else {
            retirementAgeSpouseSlider.noUiSlider.updateOptions({
                range: {
                    'min': 60,
                    'max': 75
                }
            });
            retirementAgeSpouseSliderNew.noUiSlider.updateOptions({
                range: {
                    'min': 60,
                    'max': 75
                }
            });
        }
        preservationChange(false);

        if (Number($scope.preservationAgeSpouse) == Number($scope.retirementAgeSpouse)) {
            $scope.pensionStartSpouse = Number($scope.preservationAgeSpouse);
            pensionStartSpouseSlider.setAttribute('disabled', true);
        } else {
            pensionStartSpouseSlider.removeAttribute('disabled');
            pensionStartSpouseSlider.noUiSlider.updateOptions({
                range: {
                    'min': (Number($scope.preservationAgeSpouse)),
                    'max': (Number($scope.retirementAgeSpouse))
                }
            });
        }





        changeCCLimitSpouse();
    }

    retirementAgeInput.addEventListener("change", function() {
        retirementAgeSlider.noUiSlider.set($scope.retirementAge);
    });


    annualSalaryInput.addEventListener("change", function() {
        // console.log("sli ch");
        annualSalarySlider.noUiSlider.set($scope.annualSalary);
    });

    annualSalaryInputNew.addEventListener("change", function() {
        // console.log("newsli change");

        annualSalarySliderNew.noUiSlider.set($scope.annualSalaryNew);
    });

    employerContributionLevelInput.addEventListener("change", function() {
        employerContributionLevelSlider.noUiSlider.set($scope.employerContributionLevel);
    });

    employerContributionLevelSpouseInput.addEventListener("change", function() {
        employerContributionLevelSpouseSlider.noUiSlider.set($scope.employerContributionLevelSpouse);
    });

    superBalanceInput.addEventListener("change", function() {
        superBalanceSlider.noUiSlider.set($scope.superBalance);
    });

    superBalanceInputNew.addEventListener("change", function() {
        superBalanceSliderNew.noUiSlider.set($scope.superBalanceNew);
    });


    /*inflationInput.addEventListener("change", function() {
        inflationSlider.noUiSlider.set($scope.inflation);
    });*/

    inflationSpouseInput.addEventListener("change", function() {
        inflationSpouseSlider.noUiSlider.set($scope.inflationSpouse);
    });

    wageIncreaseInput.addEventListener("change", function() {
        wageIncreaseSlider.noUiSlider.set($scope.wageIncrease);
    });

    wageIncreaseSpouseInput.addEventListener("change", function() {
        wageIncreaseSpouseSlider.noUiSlider.set($scope.wageIncreaseSpouse);
    });

    insurancePremiumInput.addEventListener("change", function() {
        insurancePremiumSlider.noUiSlider.set($scope.insurancePremium);
    });


    salarySacrificeInput.addEventListener("change", function() {
        salarySacrificeSlider.noUiSlider.set($scope.salarySacrifice);
    });

    pensionStartInput.addEventListener("change", function() {
        pensionStartSlider.noUiSlider.set($scope.pensionStart);
    });

    investmentReturnInput.addEventListener("change", function() {
        investmentReturnSlider.noUiSlider.set($scope.investmentReturn);
    });

    variableFeeInput.addEventListener("change", function() {
        variableFeeSlider.noUiSlider.set($scope.variableFee);
    });

    fixedFeeInput.addEventListener("change", function() {
        fixedFeeSlider.noUiSlider.set($scope.fixedFee);
    });

    annualSalarySpouseInput.addEventListener("change", function() {
        annualSalarySpouseSlider.noUiSlider.set($scope.annualSalarySpouse);
    });

    annualSalarySpouseInputNew.addEventListener("change", function() {
        annualSalarySpouseSliderNew.noUiSlider.set($scope.annualSalarySpouseNew);
    });

    superBalanceSpouseInput.addEventListener("change", function() {
        superBalanceSpouseSlider.noUiSlider.set($scope.superBalanceSpouse);
    });

    superBalanceSpouseInputNew.addEventListener("change", function() {
        superBalanceSpouseSliderNew.noUiSlider.set($scope.superBalanceSpouseNew);
    });

    salarySacrificeSpouseInput.addEventListener("change", function() {
        salarySacrificeSpouseSlider.noUiSlider.set($scope.salarySacrificeSpouse);
    });

    pensionStartSpouseInput.addEventListener("change", function() {
        pensionStartSpouseSlider.noUiSlider.set($scope.pensionStartSpouse);
    });

    insurancePremiumSpouseInput.addEventListener("change", function() {
        insurancePremiumSpouseSlider.noUiSlider.set($scope.insurancePremiumSpouse);
    });

    investmentReturnSpouseInput.addEventListener("change", function() {
        investmentReturnSpouseSlider.noUiSlider.set($scope.investmentReturnSpouse);
    });

    variableFeeSpouseInput.addEventListener("change", function() {
        variableFeeSpouseSlider.noUiSlider.set($scope.variableFeeSpouse);
    });

    fixedFeeSpouseInput.addEventListener("change", function() {
        fixedFeeSpouseSlider.noUiSlider.set($scope.fixedFeeSpouse);
    });

    retirementAgeSpouseInput.addEventListener("change", function() {
        retirementAgeSpouseSlider.noUiSlider.set($scope.retirementAgeSpouse);
    });

    retirementAgeSpouseInputNew.addEventListener("change", function() {
        retirementAgeSpouseSliderNew.noUiSlider.set($scope.retirementAgeSpouseNew);
    });

    pensionDrawdownBaseInput.addEventListener("change", function() {
        pensionDrawdownBaseSlider.noUiSlider.set($scope.pensionDrawdownBase);
    });

    pensionDrawdownBaseSpouseInput.addEventListener("change", function() {
        pensionDrawdownBaseSpouseSlider.noUiSlider.set($scope.pensionDrawdownBaseSpouse);
    });

    homeContentsInput.addEventListener("change", function() {
        homeContentsSlider.noUiSlider.set($scope.homeContents);
    });

    vehicleCostInput.addEventListener("change", function() {
        vehicleCostSlider.noUiSlider.set($scope.vehicleCost);
    });

    investmentPropertyInput.addEventListener("change", function() {
        investmentPropertySlider.noUiSlider.set($scope.investmentProperty);
    });

    bankAssetsInput.addEventListener("change", function() {
        bankAssetsSlider.noUiSlider.set($scope.bankAssets);
    });

    listedInvestmentInput.addEventListener("change", function() {
        listedInvestmentSlider.noUiSlider.set($scope.listedInvestment);
    });

    marginLoansInput.addEventListener("change", function() {
        marginLoansSlider.noUiSlider.set($scope.marginLoans);
    });

    allocatedPensionInput.addEventListener("change", function() {
        allocatedPensionSlider.noUiSlider.set($scope.allocatedPension);
    });

    otherInvestmentInput.addEventListener("change", function() {
        otherInvestmentSlider.noUiSlider.set($scope.otherInvestment);
    });


    netRentalIncomeInput.addEventListener("change", function() {
        netRentalIncomeSlider.noUiSlider.set($scope.netRentalIncome);
    });

    otherIncomeInput.addEventListener("change", function() {
        otherIncomeSlider.noUiSlider.set($scope.otherIncome);
    });
    pensionIncomeInput.addEventListener("change", function() {
        pensionIncomeSlider.noUiSlider.set($scope.pensionIncome);
    });

    targetInput.addEventListener("change", function() {
        targetSlider.noUiSlider.set($scope.target);
    });

    targetInputNew.addEventListener("change", function() {
        targetSliderNew.noUiSlider.set($scope.targetNew);
    });

    superTaxRateInput.addEventListener("change", function() {
        superTaxRateSlider.noUiSlider.set($scope.superTaxRate);
    });


    retirementAgeSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        retirementAgeInput.value = values[handle];
        $scope.retirementAge = (values[handle]);
        preservationChange(true);
        if (Number($scope.preservationAge) == Number($scope.retirementAge)) {
            $scope.pensionStart = Number($scope.preservationAge);
            pensionStartSlider.setAttribute('disabled', true);
        } else {
            pensionStartSlider.removeAttribute('disabled');
            pensionStartSlider.noUiSlider.updateOptions({
                range: {
                    'min': (Number($scope.preservationAge)),
                    'max': (Number($scope.retirementAge))
                }
            });
        }
        $scope.enableNewSliders = true;

        // calculateFinal();
        $timeout(0);
    });

    annualSalarySlider.noUiSlider.on('set', function(values, handle) {
        // console.log("sli set");
        $scope.enableNewSliders = false;
        annualSalaryInput.value = values[handle];
        $scope.annualSalary = (values[handle]);
        annualSalarySliderNew.noUiSlider.set($scope.annualSalary);
        changeCCLimit();
        // calculateFinal();
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    annualSalarySliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        annualSalaryInputNew.value = values[handle];
        $scope.annualSalaryNew = (values[handle]);
        changeCCLimit();
        if ($scope.enableNewSliders) {
            $scope.calculateFinalR(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });

    employerContributionLevelSlider.noUiSlider.on('set', function(values, handle) {
        employerContributionLevelInput.value = values[handle];
        $scope.employerContributionLevel = (values[handle]);
        changeCCLimit();
        // calculateFinal();
        $timeout(0);
    });

    employerContributionLevelSpouseSlider.noUiSlider.on('set', function(values, handle) {
        employerContributionLevelSpouseInput.value = values[handle];
        $scope.employerContributionLevelSpouse = (values[handle]);
        changeCCLimitSpouse();
        // calculateFinal();
        $timeout(0);
    });

    superBalanceSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        superBalanceInput.value = values[handle];
        $scope.superBalance = (values[handle]);
        superBalanceSliderNew.noUiSlider.set($scope.superBalance);
        // calculateFinal();
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    superBalanceSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        superBalanceInputNew.value = values[handle];
        $scope.superBalanceNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinalR(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });

    /*inflationSlider.noUiSlider.on('set', function(values, handle) {
        inflationInput.value = values[handle];
        $scope.inflation = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });*/

    wageIncreaseSlider.noUiSlider.on('set', function(values, handle) {
        wageIncreaseInput.value = values[handle];
        $scope.wageIncrease = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    inflationSpouseSlider.noUiSlider.on('set', function(values, handle) {
        inflationSpouseInput.value = values[handle];
        $scope.inflationSpouse = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    wageIncreaseSpouseSlider.noUiSlider.on('set', function(values, handle) {
        wageIncreaseSpouseInput.value = values[handle];
        $scope.wageIncreaseSpouse = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    insurancePremiumSlider.noUiSlider.on('set', function(values, handle) {
        insurancePremiumInput.value = values[handle];
        $scope.insurancePremium = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    salarySacrificeSlider.noUiSlider.on('set', function(values, handle) {
        salarySacrificeInput.value = values[handle];
        $scope.salarySacrifice = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    pensionStartSlider.noUiSlider.on('set', function(values, handle) {
        pensionStartInput.value = values[handle];
        $scope.pensionStart = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    investmentReturnSlider.noUiSlider.on('set', function(values, handle) {
        investmentReturnInput.value = values[handle];
        $scope.investmentReturn = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    variableFeeSlider.noUiSlider.on('set', function(values, handle) {
        variableFeeInput.value = values[handle];
        $scope.variableFee = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    fixedFeeSlider.noUiSlider.on('set', function(values, handle) {
        fixedFeeInput.value = values[handle];
        $scope.fixedFee = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    annualSalarySpouseSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        annualSalarySpouseInput.value = values[handle];
        $scope.annualSalarySpouse = (values[handle]);
        annualSalarySpouseSliderNew.noUiSlider.set($scope.annualSalarySpouse);
        changeCCLimitSpouse();
        // calculateFinal();
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    annualSalarySpouseSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        annualSalarySpouseInputNew.value = values[handle];
        $scope.annualSalarySpouse = (values[handle]);
        changeCCLimitSpouse();
        if ($scope.enableNewSliders) {
            $scope.calculateFinalR(true, false);
        }
        $scope.newChangesApplied = false;
        $timeout(0);
    });

    superBalanceSpouseSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        superBalanceSpouseInput.value = values[handle];
        $scope.superBalanceSpouse = (values[handle]);
        superBalanceSpouseSliderNew.noUiSlider.set($scope.superBalanceSpouse);
        // calculateFinal();
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    superBalanceSpouseSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        superBalanceSpouseInputNew.value = values[handle];
        $scope.superBalanceSpouseNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinalR(true, false);
        }
        $scope.newChangesApplied = false;
        $timeout(0);
    });

    salarySacrificeSpouseSlider.noUiSlider.on('set', function(values, handle) {
        salarySacrificeSpouseInput.value = values[handle];
        $scope.salarySacrificeSpouse = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    pensionStartSpouseSlider.noUiSlider.on('set', function(values, handle) {
        pensionStartSpouseInput.value = values[handle];
        $scope.pensionStartSpouse = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    insurancePremiumSpouseSlider.noUiSlider.on('set', function(values, handle) {
        insurancePremiumSpouseInput.value = values[handle];
        $scope.insurancePremiumSpouse = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    investmentReturnSpouseSlider.noUiSlider.on('set', function(values, handle) {
        investmentReturnSpouseInput.value = values[handle];
        $scope.investmentReturnSpouse = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    variableFeeSpouseSlider.noUiSlider.on('set', function(values, handle) {
        variableFeeSpouseInput.value = values[handle];
        $scope.variableFeeSpouse = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    fixedFeeSpouseSlider.noUiSlider.on('set', function(values, handle) {
        fixedFeeSpouseInput.value = values[handle];
        $scope.fixedFeeSpouse = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    retirementAgeSpouseSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        retirementAgeSpouseInput.value = values[handle];
        $scope.retirementAgeSpouse = (values[handle]);
        retirementAgeSpouseSliderNew.noUiSlider.set($scope.retirementAgeSpouse);
        preservationChange(false);
        if (Number($scope.preservationAgeSpouse) == Number($scope.retirementAgeSpouse)) {
            $scope.pensionStartSpouse = Number($scope.preservationAgeSpouse);
            pensionStartSpouseSlider.setAttribute('disabled', true);
        } else {
            pensionStartSpouseSlider.removeAttribute('disabled');
            pensionStartSpouseSlider.noUiSlider.updateOptions({
                range: {
                    'min': (Number($scope.preservationAgeSpouse)),
                    'max': (Number($scope.retirementAgeSpouse))
                }
            });
        }
        $scope.enableNewSliders = true;

        // calculateFinal();
        $timeout(0);
    });

    retirementAgeSpouseSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        retirementAgeSpouseInputNew.value = values[handle];
        $scope.retirementAgeSpouseNew = (values[handle]);
        preservationChange(false);
        if (Number($scope.preservationAgeSpouse) == Number($scope.retirementAgeSpouseNew)) {
            $scope.pensionStartSpouse = Number($scope.preservationAgeSpouse);
            pensionStartSpouseSlider.setAttribute('disabled', true);
        } else {
            pensionStartSpouseSlider.removeAttribute('disabled');
            pensionStartSpouseSlider.noUiSlider.updateOptions({
                range: {
                    'min': (Number($scope.preservationAgeSpouse)),
                    'max': (Number($scope.retirementAgeSpouseNew))
                }
            });
        }
        if ($scope.enableNewSliders) {
            $scope.calculateFinalR(true, false);
        }
        $scope.newChangesApplied = true;
        $timeout(0);
    });

    pensionDrawdownBaseSlider.noUiSlider.on('set', function(values, handle) {
        pensionDrawdownBaseInput.value = values[handle];
        $scope.pensionDrawdownBase = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    pensionDrawdownBaseSpouseSlider.noUiSlider.on('set', function(values, handle) {
        pensionDrawdownBaseSpouseInput.value = values[handle];
        $scope.pensionDrawdownBaseSpouse = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    homeContentsSlider.noUiSlider.on('set', function(values, handle) {
        homeContentsInput.value = values[handle];
        $scope.homeContents = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    vehicleCostSlider.noUiSlider.on('set', function(values, handle) {
        vehicleCostInput.value = values[handle];
        $scope.vehicleCost = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    investmentPropertySlider.noUiSlider.on('set', function(values, handle) {
        investmentPropertyInput.value = values[handle];
        $scope.investmentProperty = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    bankAssetsSlider.noUiSlider.on('set', function(values, handle) {
        bankAssetsInput.value = values[handle];
        $scope.bankAssets = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    listedInvestmentSlider.noUiSlider.on('set', function(values, handle) {
        listedInvestmentInput.value = values[handle];
        $scope.listedInvestment = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    marginLoansSlider.noUiSlider.on('set', function(values, handle) {
        marginLoansInput.value = values[handle];
        $scope.marginLoans = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    allocatedPensionSlider.noUiSlider.on('set', function(values, handle) {
        allocatedPensionInput.value = values[handle];
        $scope.allocatedPension = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    otherInvestmentSlider.noUiSlider.on('set', function(values, handle) {
        otherInvestmentInput.value = values[handle];
        $scope.otherInvestment = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });


    netRentalIncomeSlider.noUiSlider.on('set', function(values, handle) {
        netRentalIncomeInput.value = values[handle];
        $scope.netRentalIncome = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    otherIncomeSlider.noUiSlider.on('set', function(values, handle) {
        otherIncomeInput.value = values[handle];
        $scope.otherIncome = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });
    pensionIncomeSlider.noUiSlider.on('set', function(values, handle) {
        pensionIncomeInput.value = values[handle];
        $scope.pensionIncome = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });

    targetSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        targetInput.value = values[handle];
        $scope.target = (values[handle]);
        targetSliderNew.noUiSlider.set($scope.target);
        // calculateFinal();
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    targetSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        targetInputNew.value = values[handle];
        $scope.target = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinalR(true, false);
        }
        $scope.newChangesApplied = false;
        $timeout(0);
    });

    superTaxRateSlider.noUiSlider.on('set', function(values, handle) {
        superTaxRateInput.value = values[handle];
        $scope.superTaxRate = (values[handle]);
        // calculateFinal();
        $timeout(0);
    });


    $scope.spouseOptionChange = function(spouse) {
        $scope.spouseOption = spouse;
        // calculateFinal();
        $timeout(0);
    }

    $scope.houseOptionChange = function(ownHouse) {
        $scope.houseOption = ownHouse;
        // calculateFinal();
        $timeout(0);
    }

    document.getElementById('fundNameA').addEventListener("change", function() {
        $scope.fundA.name = document.getElementById('fundNameA').value;
        // calculateFinal();
        $timeout(0);
    });

    document.getElementById('fundNameB').addEventListener("change", function() {
        $scope.fundB.name = document.getElementById('fundNameB').value;
        // calculateFinal();
        $timeout(0);
    });

    $scope.compYear = 2016;
    $scope.begngInvstmntPrd = Math.max(1991, $scope.dob.getFullYear() + 18);
    $scope.invstmntHorzn = $scope.compYear - $scope.begngInvstmntPrd;

    $scope.initialInvestmentAmount = 50000;
    $scope.alterOption = true;



    var initialInvestmentAmountSlider = document.getElementById("initialInvestmentAmountSlider");


    var initialInvestmentAmountInput = document.getElementById("initialInvestmentAmountInput");


    noUiSlider.create(initialInvestmentAmountSlider, {
        start: $scope.initialInvestmentAmount,
        range: {
            min: [1000],
            max: [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });


    initialInvestmentAmountSlider.noUiSlider.on('update', function(values, handle) {
        initialInvestmentAmountInput.value = values[handle];
        $scope.initialInvestmentAmount = values[handle];
    });

    initialInvestmentAmountInput.addEventListener("change", function() {
        initialInvestmentAmountSlider.noUiSlider.set(initialInvestmentAmountInput.value);
    });

    $scope.error1option = false;
    $scope.error2option = false;

    function asset1TotalCalculator() {
        var australianShares1 = Number($scope.australianShares1.replaceAll('%', ''));
        var internationalShares1 = Number($scope.internationalShares1.replaceAll('%', ''));
        var internationalSharesHedged1 = Number($scope.internationalSharesHedged1.replaceAll('%', ''));
        var usShares1 = Number($scope.usShares1.replaceAll('%', ''));
        var australianBonds1 = Number($scope.australianBonds1.replaceAll('%', ''));
        var internationalBondsHedged1 = Number($scope.internationalBondsHedged1.replaceAll('%', ''));
        var cash1 = Number($scope.cash1.replaceAll('%', ''));
        var australianListedProperty1 = Number($scope.australianListedProperty1.replaceAll('%', ''));
        var internationalListedProperty1 = Number($scope.internationalListedProperty1.replaceAll('%', ''));

        var tempp = australianShares1 + internationalShares1 +
            internationalSharesHedged1 + usShares1 +
            australianBonds1 + internationalBondsHedged1 +
            cash1 + australianListedProperty1 +
            internationalListedProperty1;

        $scope.error1option = tempp == 100 ? false : true;
        $scope.asset1Total = tempp + "%";

        $timeout(0);


    }

    function asset2TotalCalculator() {

        var australianShares2 = Number($scope.australianShares2.replaceAll('%', ''));
        var internationalShares2 = Number($scope.internationalShares2.replaceAll('%', ''));
        var internationalSharesHedged2 = Number($scope.internationalSharesHedged2.replaceAll('%', ''));
        var usShares2 = Number($scope.usShares2.replaceAll('%', ''));
        var australianBonds2 = Number($scope.australianBonds2.replaceAll('%', ''));
        var internationalBondsHedged2 = Number($scope.internationalBondsHedged2.replaceAll('%', ''));
        var cash2 = Number($scope.cash2.replaceAll('%', ''));
        var australianListedProperty2 = Number($scope.australianListedProperty2.replaceAll('%', ''));
        var internationalListedProperty2 = Number($scope.internationalListedProperty2.replaceAll('%', ''));


        var tempp = australianShares2 + internationalShares2 +
            internationalSharesHedged2 + usShares2 +
            australianBonds2 + internationalBondsHedged2 +
            cash2 + australianListedProperty2 +
            internationalListedProperty2;

        $scope.error2option = tempp == 100 ? false : true;
        $scope.asset2Total = tempp + "%";

        $timeout(0);
    }

    $scope.alterYear = 5;

    console.log("$scope.alterYear", $scope.alterYear);
    console.log("$scope.invstmntHorzn", $scope.invstmntHorzn);

    var alterYearSlider = document.getElementById('alterYearSlider');
    noUiSlider.create(alterYearSlider, {
        start: [$scope.alterYear],
        range: {
            'min': [0],
            'max': [$scope.invstmntHorzn]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: [false, false]
    });
    alterYearInput = document.getElementById('alterYearInput');

    alterYearInput.addEventListener("change", function() {
        alterYearSlider.noUiSlider.set($scope.alterYear);
        console.log("alterYear", $scope.alterYear);
    });
    alterYearSlider.noUiSlider.on('update', function(values, handle) {
        alterYearInput.value = values[handle];
        $scope.alterYear = Number(values[handle]);
    });
    alterYearSlider.noUiSlider.on('set', function(values, handle) {
        alterYearInput.value = values[handle];
        $scope.alterYear = Number(values[handle]);
    });

    var australianShares1Slider = document.getElementById('australianShares1Slider');
    noUiSlider.create(australianShares1Slider, {
        start: [$scope.australianShares1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var australianShares1Input = document.getElementById('australianShares1Input');
    australianShares1Input.addEventListener("change", function() {
        australianShares1Slider.noUiSlider.set($scope.australianShares1);
        console.log("australianShares1", $scope.australianShares1);
    });
    australianShares1Slider.noUiSlider.on('update', function(values, handle) {
        australianShares1Input.value = values[handle];
        $scope.australianShares1 = (values[handle]);
    });
    australianShares1Slider.noUiSlider.on('set', function(values, handle) {
        australianShares1Input.value = values[handle];
        $scope.australianShares1 = (values[handle]);
        asset1TotalCalculator();
    });

    var internationalShares1Slider = document.getElementById('internationalShares1Slider');
    noUiSlider.create(internationalShares1Slider, {
        start: [$scope.internationalShares1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var internationalShares1Input = document.getElementById('internationalShares1Input');
    internationalShares1Input.addEventListener("change", function() {
        internationalShares1Slider.noUiSlider.set($scope.internationalShares1);
        console.log("internationalShares1", $scope.internationalShares1);
    });
    internationalShares1Slider.noUiSlider.on('update', function(values, handle) {
        internationalShares1Input.value = values[handle];
        $scope.internationalShares1 = (values[handle]);
    });
    internationalShares1Slider.noUiSlider.on('set', function(values, handle) {
        internationalShares1Input.value = values[handle];
        $scope.internationalShares1 = (values[handle]);
        asset1TotalCalculator();
    });

    var internationalSharesHedged1Slider = document.getElementById('internationalSharesHedged1Slider');
    noUiSlider.create(internationalSharesHedged1Slider, {
        start: [$scope.internationalSharesHedged1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var internationalSharesHedged1Input = document.getElementById('internationalSharesHedged1Input');
    internationalSharesHedged1Input.addEventListener("change", function() {
        internationalSharesHedged1Slider.noUiSlider.set($scope.internationalSharesHedged1);
        console.log("internationalSharesHedged1", $scope.internationalSharesHedged1);
    });
    internationalSharesHedged1Slider.noUiSlider.on('update', function(values, handle) {
        internationalSharesHedged1Input.value = values[handle];
        $scope.internationalSharesHedged1 = (values[handle]);
    });
    internationalSharesHedged1Slider.noUiSlider.on('set', function(values, handle) {
        internationalSharesHedged1Input.value = values[handle];
        $scope.internationalSharesHedged1 = (values[handle]);
        asset1TotalCalculator();
    });

    var usShares1Slider = document.getElementById('usShares1Slider');
    noUiSlider.create(usShares1Slider, {
        start: [$scope.usShares1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var usShares1Input = document.getElementById('usShares1Input');
    usShares1Input.addEventListener("change", function() {
        usShares1Slider.noUiSlider.set($scope.usShares1);
        console.log("usShares1", $scope.usShares1);
    });
    usShares1Slider.noUiSlider.on('update', function(values, handle) {
        usShares1Input.value = values[handle];
        $scope.usShares1 = (values[handle]);
    });
    usShares1Slider.noUiSlider.on('set', function(values, handle) {
        usShares1Input.value = values[handle];
        $scope.usShares1 = (values[handle]);
        asset1TotalCalculator();
    });

    var australianBonds1Slider = document.getElementById('australianBonds1Slider');
    noUiSlider.create(australianBonds1Slider, {
        start: [$scope.australianBonds1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var australianBonds1Input = document.getElementById('australianBonds1Input');
    australianBonds1Input.addEventListener("change", function() {
        australianBonds1Slider.noUiSlider.set($scope.australianBonds1);
        console.log("australianBonds1", $scope.australianBonds1);
    });
    australianBonds1Slider.noUiSlider.on('update', function(values, handle) {
        australianBonds1Input.value = values[handle];
        $scope.australianBonds1 = (values[handle]);
    });
    australianBonds1Slider.noUiSlider.on('set', function(values, handle) {
        australianBonds1Input.value = values[handle];
        $scope.australianBonds1 = (values[handle]);
        asset1TotalCalculator();
    });

    var internationalBondsHedged1Slider = document.getElementById('internationalBondsHedged1Slider');
    noUiSlider.create(internationalBondsHedged1Slider, {
        start: [$scope.internationalBondsHedged1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var internationalBondsHedged1Input = document.getElementById('internationalBondsHedged1Input');
    internationalBondsHedged1Input.addEventListener("change", function() {
        internationalBondsHedged1Slider.noUiSlider.set($scope.internationalBondsHedged1);
        console.log("internationalBondsHedged1", $scope.internationalBondsHedged1);
    });
    internationalBondsHedged1Slider.noUiSlider.on('update', function(values, handle) {
        internationalBondsHedged1Input.value = values[handle];
        $scope.internationalBondsHedged1 = (values[handle]);
    });
    internationalBondsHedged1Slider.noUiSlider.on('set', function(values, handle) {
        internationalBondsHedged1Input.value = values[handle];
        $scope.internationalBondsHedged1 = (values[handle]);
        asset1TotalCalculator();
    });

    var cash1Slider = document.getElementById('cash1Slider');
    noUiSlider.create(cash1Slider, {
        start: [$scope.cash1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var cash1Input = document.getElementById('cash1Input');
    cash1Input.addEventListener("change", function() {
        cash1Slider.noUiSlider.set($scope.cash1);
        console.log("cash1", $scope.cash1);
    });
    cash1Slider.noUiSlider.on('update', function(values, handle) {
        cash1Input.value = values[handle];
        $scope.cash1 = (values[handle]);
    });
    cash1Slider.noUiSlider.on('set', function(values, handle) {
        cash1Input.value = values[handle];
        $scope.cash1 = (values[handle]);
        asset1TotalCalculator();
    });

    var australianListedProperty1Slider = document.getElementById('australianListedProperty1Slider');
    noUiSlider.create(australianListedProperty1Slider, {
        start: [$scope.australianListedProperty1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var australianListedProperty1Input = document.getElementById('australianListedProperty1Input');
    australianListedProperty1Input.addEventListener("change", function() {
        australianListedProperty1Slider.noUiSlider.set($scope.australianListedProperty1);
        console.log("australianListedProperty1", $scope.australianListedProperty1);
    });
    australianListedProperty1Slider.noUiSlider.on('update', function(values, handle) {
        australianListedProperty1Input.value = values[handle];
        $scope.australianListedProperty1 = (values[handle]);
    });
    australianListedProperty1Slider.noUiSlider.on('set', function(values, handle) {
        australianListedProperty1Input.value = values[handle];
        $scope.australianListedProperty1 = (values[handle]);
        asset1TotalCalculator();
    });

    var internationalListedProperty1Slider = document.getElementById('internationalListedProperty1Slider');
    noUiSlider.create(internationalListedProperty1Slider, {
        start: [$scope.internationalListedProperty1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var internationalListedProperty1Input = document.getElementById('internationalListedProperty1Input');
    internationalListedProperty1Input.addEventListener("change", function() {
        internationalListedProperty1Slider.noUiSlider.set($scope.internationalListedProperty1);
        console.log("internationalListedProperty1", $scope.internationalListedProperty1);
    });
    internationalListedProperty1Slider.noUiSlider.on('update', function(values, handle) {
        internationalListedProperty1Input.value = values[handle];
        $scope.internationalListedProperty1 = (values[handle]);
    });
    internationalListedProperty1Slider.noUiSlider.on('set', function(values, handle) {
        internationalListedProperty1Input.value = values[handle];
        $scope.internationalListedProperty1 = (values[handle]);
        asset1TotalCalculator();
    });

    var australianShares2Slider = document.getElementById('australianShares2Slider');
    noUiSlider.create(australianShares2Slider, {
        start: [$scope.australianShares2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var australianShares2Input = document.getElementById('australianShares2Input');
    australianShares2Input.addEventListener("change", function() {
        australianShares2Slider.noUiSlider.set($scope.australianShares2);
        console.log("australianShares2", $scope.australianShares2);
    });
    australianShares2Slider.noUiSlider.on('update', function(values, handle) {
        australianShares2Input.value = values[handle];
        $scope.australianShares2 = (values[handle]);
    });
    australianShares2Slider.noUiSlider.on('set', function(values, handle) {
        australianShares2Input.value = values[handle];
        $scope.australianShares2 = (values[handle]);
        asset2TotalCalculator();
    });

    var internationalShares2Slider = document.getElementById('internationalShares2Slider');
    noUiSlider.create(internationalShares2Slider, {
        start: [$scope.internationalShares2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var internationalShares2Input = document.getElementById('internationalShares2Input');
    internationalShares2Input.addEventListener("change", function() {
        internationalShares2Slider.noUiSlider.set($scope.internationalShares2);
        console.log("internationalShares2", $scope.internationalShares2);
    });
    internationalShares2Slider.noUiSlider.on('update', function(values, handle) {
        internationalShares2Input.value = values[handle];
        $scope.internationalShares2 = (values[handle]);
    });
    internationalShares2Slider.noUiSlider.on('set', function(values, handle) {
        internationalShares2Input.value = values[handle];
        $scope.internationalShares2 = (values[handle]);
        asset2TotalCalculator();
    });

    var internationalSharesHedged2Slider = document.getElementById('internationalSharesHedged2Slider');
    noUiSlider.create(internationalSharesHedged2Slider, {
        start: [$scope.internationalSharesHedged2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var internationalSharesHedged2Input = document.getElementById('internationalSharesHedged2Input');
    internationalSharesHedged2Input.addEventListener("change", function() {
        internationalSharesHedged2Slider.noUiSlider.set($scope.internationalSharesHedged2);
        console.log("internationalSharesHedged2", $scope.internationalSharesHedged2);
    });
    internationalSharesHedged2Slider.noUiSlider.on('update', function(values, handle) {
        internationalSharesHedged2Input.value = values[handle];
        $scope.internationalSharesHedged2 = (values[handle]);
    });
    internationalSharesHedged2Slider.noUiSlider.on('set', function(values, handle) {
        internationalSharesHedged2Input.value = values[handle];
        $scope.internationalSharesHedged2 = (values[handle]);
        asset2TotalCalculator();
    });

    var usShares2Slider = document.getElementById('usShares2Slider');
    noUiSlider.create(usShares2Slider, {
        start: [$scope.usShares2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var usShares2Input = document.getElementById('usShares2Input');
    usShares2Input.addEventListener("change", function() {
        usShares2Slider.noUiSlider.set($scope.usShares2);
        console.log("usShares2", $scope.usShares2);
    });
    usShares2Slider.noUiSlider.on('update', function(values, handle) {
        usShares2Input.value = values[handle];
        $scope.usShares2 = (values[handle]);
    });
    usShares2Slider.noUiSlider.on('set', function(values, handle) {
        usShares2Input.value = values[handle];
        $scope.usShares2 = (values[handle]);
        asset2TotalCalculator();
    });

    var australianBonds2Slider = document.getElementById('australianBonds2Slider');
    noUiSlider.create(australianBonds2Slider, {
        start: [$scope.australianBonds2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var australianBonds2Input = document.getElementById('australianBonds2Input');
    australianBonds2Input.addEventListener("change", function() {
        australianBonds2Slider.noUiSlider.set($scope.australianBonds2);
        console.log("australianBonds2", $scope.australianBonds2);
    });
    australianBonds2Slider.noUiSlider.on('update', function(values, handle) {
        australianBonds2Input.value = values[handle];
        $scope.australianBonds2 = (values[handle]);
    });
    australianBonds2Slider.noUiSlider.on('set', function(values, handle) {
        australianBonds2Input.value = values[handle];
        $scope.australianBonds2 = (values[handle]);
        asset2TotalCalculator();
    });

    var internationalBondsHedged2Slider = document.getElementById('internationalBondsHedged2Slider');
    noUiSlider.create(internationalBondsHedged2Slider, {
        start: [$scope.internationalBondsHedged2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var internationalBondsHedged2Input = document.getElementById('internationalBondsHedged2Input');
    internationalBondsHedged2Input.addEventListener("change", function() {
        internationalBondsHedged2Slider.noUiSlider.set($scope.internationalBondsHedged2);
        console.log("internationalBondsHedged2", $scope.internationalBondsHedged2);
    });
    internationalBondsHedged2Slider.noUiSlider.on('update', function(values, handle) {
        internationalBondsHedged2Input.value = values[handle];
        $scope.internationalBondsHedged2 = (values[handle]);
    });
    internationalBondsHedged2Slider.noUiSlider.on('set', function(values, handle) {
        internationalBondsHedged2Input.value = values[handle];
        $scope.internationalBondsHedged2 = (values[handle]);
        asset2TotalCalculator();
    });

    var cash2Slider = document.getElementById('cash2Slider');
    noUiSlider.create(cash2Slider, {
        start: [$scope.cash2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var cash2Input = document.getElementById('cash2Input');
    cash2Input.addEventListener("change", function() {
        cash2Slider.noUiSlider.set($scope.cash2);
        console.log("cash2", $scope.cash2);
    });
    cash2Slider.noUiSlider.on('update', function(values, handle) {
        cash2Input.value = values[handle];
        $scope.cash2 = (values[handle]);
    });
    cash2Slider.noUiSlider.on('set', function(values, handle) {
        cash2Input.value = values[handle];
        $scope.cash2 = (values[handle]);
        asset2TotalCalculator();
    });

    var australianListedProperty2Slider = document.getElementById('australianListedProperty2Slider');
    noUiSlider.create(australianListedProperty2Slider, {
        start: [$scope.australianListedProperty2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var australianListedProperty2Input = document.getElementById('australianListedProperty2Input');
    australianListedProperty2Input.addEventListener("change", function() {
        australianListedProperty2Slider.noUiSlider.set($scope.australianListedProperty2);
        console.log("australianListedProperty2", $scope.australianListedProperty2);
    });
    australianListedProperty2Slider.noUiSlider.on('update', function(values, handle) {
        australianListedProperty2Input.value = values[handle];
        $scope.australianListedProperty2 = (values[handle]);
    });
    australianListedProperty2Slider.noUiSlider.on('set', function(values, handle) {
        australianListedProperty2Input.value = values[handle];
        $scope.australianListedProperty2 = (values[handle]);
        asset2TotalCalculator();
    });

    var internationalListedProperty2Slider = document.getElementById('internationalListedProperty2Slider');
    noUiSlider.create(internationalListedProperty2Slider, {
        start: [$scope.internationalListedProperty2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });
    var internationalListedProperty2Input = document.getElementById('internationalListedProperty2Input');
    internationalListedProperty2Input.addEventListener("change", function() {
        internationalListedProperty2Slider.noUiSlider.set($scope.internationalListedProperty2);
        console.log("internationalListedProperty2", $scope.internationalListedProperty2);
    });
    internationalListedProperty2Slider.noUiSlider.on('update', function(values, handle) {
        internationalListedProperty2Input.value = values[handle];
        $scope.internationalListedProperty2 = (values[handle]);
    });
    internationalListedProperty2Slider.noUiSlider.on('set', function(values, handle) {
        internationalListedProperty2Input.value = values[handle];
        $scope.internationalListedProperty2 = (values[handle]);
        asset2TotalCalculator();
    });

    $scope.fy = dt.getMonth() > 5 ? dt.getFullYear() : dt.getFullYear() - 1;
    $scope.thp = 45000;

    var fySlider = document.getElementById('fySlider'),
        thpSlider = document.getElementById('thpSlider');

    noUiSlider.create(fySlider, {
        start: [$scope.fy],
        range: {
            'min': [2016],
            'max': [2025]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: [false, false]
    });



    noUiSlider.create(thpSlider, {
        start: [$scope.thp],
        range: {
            'min': [1000],
            'max': [61000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    fySlider.noUiSlider.on('update', function(values, handle) {
        fyInput.value = values[handle];
        $scope.fy = Number(values[handle]);
    });



    thpSlider.noUiSlider.on('update', function(values, handle) {
        thpInput.value = values[handle];
        $scope.thp = (values[handle]);
    });

    fySlider.noUiSlider.on('set', function(values, handle) {
        fyInput.value = values[handle];
        $scope.fy = Number(values[handle]);
        $scope.ageChange();
        // $scope.submitForm2(true);
    });

    thpSlider.noUiSlider.on('set', function(values, handle) {
        thpInput.value = values[handle];
        $scope.thp = (values[handle]);
        // $scope.submitForm2(true);
    });

    $('#fyInput').on("change", function() {
        if (this.value < 2016) {
            $scope.fy = 2016;
        }
        fySlider.noUiSlider.set($scope.fy);
    })

    $timeout(function() {
        $('.selectpicker').selectpicker({
            style: 'btn-default',
            size: 10
        });
        $('.spFundB option[value="1"]').attr("selected", true);
        $('.spFundB').selectpicker('refresh');
        $timeout(0);
    });
	
	var selected1 = 0;
    var selected2 = 1;

    $('.spFundA').on('shown.bs.select', function(e) {
        var tempValue=$('.spFundB option:selected').val();
        if(Number(tempValue)!=311){
            $('.spFundA option[value=' + tempValue + ']').attr('disabled', true);        
            $('.spFundA').selectpicker('refresh');
        }
    });

    $('.spFundA').on('hidden.bs.select', function(e) {
        var tempValue=$('.spFundB option:selected').val();
        if(Number(tempValue)!=311){
            $('.spFundA option[value=' + tempValue + ']').attr('disabled', false);        
            $('.spFundA').selectpicker('refresh');
        }
    });

    $('.spFundB').on('shown.bs.select', function(e) {
        var tempValue=$('.spFundA option:selected').val();
        if(Number(tempValue)!=311){
            $('.spFundB option[value=' + tempValue + ']').attr('disabled', true);
            $('.spFundB').selectpicker('refresh');
        }
        
    });
    $('.spFundB').on('hidden.bs.select', function(e) {
        var tempValue=$('.spFundA option:selected').val();
        if(Number(tempValue)!=311){
            $('.spFundB option[value=' + tempValue + ']').attr('disabled', false);
            $('.spFundB').selectpicker('refresh');
        }
    });



    $('.spFundA').on('change', function() {
        spFundAChange();
    });

    $('.spFundB').on('change', function() {
        spFundBChange();
    });

    $('.spInvestOption').on('change', function() {
        spInvestOptionChange();
    });

    $('.spFundAType').on('change', function() {
        spFundATypeChange();
    });

    $('.spFundBType').on('change', function() {
        spFundBTypeChange();
    });
	
	console.log("ddddddddddddddddddddddddddddddddddddddddddddddddddddd", $scope.fundNotFoundA);
    function spFundAChange() {
        selected1 = $('.spFundA option:selected').val();
        if (Number(selected1) >= 307) {
            if (Number(selected1) == 311) {
                $scope.fundNotFoundA = true;
				console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", $scope.fundNotFoundA);
                $scope.fundA = {
                    name: $scope.fundNameA,
                    annualPercentageFee: Number($scope.contributionFeeA.replaceAll('%', '')),
                    adminFee: Number($scope.adminFeeA.replaceAll('$', '').replaceAll(',', '')),
                    indirectCostRation: Number($scope.indirectCostRationA.replaceAll('%', ''))
                };
            } else {
                $scope.fundNotFoundA = false;
                $scope.fundA = {
                    name: $scope.fundsOb[selected1].name,
                    annualPercentageFee: $scope.fundsOb[selected1].contributionFee,
                    adminFee: $scope.fundsOb[selected1].adminFee,
                    indirectCostRation: $scope.fundsOb[selected1].indirectCostRation
                };
            }
        } else {
            $scope.fundNotFoundA = false;
            $scope.fundA = $scope.fundsOb[selected1];
        }
        // console.log("$scope.fundA", $scope.fundA);
        $timeout(0);
    }

    function spFundBChange() {
        selected2 = $('.spFundB option:selected').val();
        if (Number(selected2) >= 307) {
            if (Number(selected2) == 311) {
                $scope.fundNotFoundB = true;
                $scope.fundB = {
                    name: $scope.fundNameB,
                    annualPercentageFee: Number($scope.contributionFeeB.replaceAll('%', '')),
                    adminFee: Number($scope.adminFeeB.replaceAll('$', '').replaceAll(',', '')),
                    indirectCostRation: Number($scope.indirectCostRationB.replaceAll('%', ''))
                };
            } else {
                $scope.fundNotFoundB = false;
                $scope.fundB = {
                    name: $scope.fundsOb[selected2].name,
                    annualPercentageFee: $scope.fundsOb[selected2].contributionFee,
                    adminFee: $scope.fundsOb[selected2].adminFee,
                    indirectCostRation: $scope.fundsOb[selected2].indirectCostRation
                };
            }
        } else {
            $scope.fundNotFoundB = false;
            $scope.fundB = $scope.fundsOb[selected2];
        }
        // console.log("$scope.fundB", $scope.fundB);
        $timeout(0);
    }

    function spInvestOptionChange() {
        selected3 = $('.spInvestOption option:selected').val();
        //console.log("selected2",selected2);
        $scope.netReturn = $scope.investOptions[selected3].netReturn;
        //console.log("$scope.netReturn",$scope.netReturn);
    }

    function spFundATypeChange() {
       var spFundAType = $('.spFundAType option:selected').val();
        switch (Number(spFundAType)) {
            case 0:
                $scope.$apply(function() {
                    $scope.fundsOb1 = $scope.fundsMySuper;
                });
                break;
            case 1:
                $scope.$apply(function() {
                    $scope.fundsOb1 = $scope.fundsLifestage;
                });
                break;

            case 2:
                $scope.$apply(function() {
                    $scope.fundsOb1 = $scope.fundsOther;
                });
                break;
        };
        // console.log("sel", $scope.fundsOb1);
        $('.spFundA').selectpicker('refresh');
        $timeout(0);
    }

    function spFundBTypeChange() {
       var spFundBType = $('.spFundBType option:selected').val();
        switch (Number(spFundBType)) {
            case 0:
                $scope.$apply(function() {
                    $scope.fundsOb2 = $scope.fundsMySuper;
                });
                break;
            case 1:
                $scope.$apply(function() {
                    $scope.fundsOb2 = $scope.fundsLifestage;
                });
                break;

            case 2:
                $scope.$apply(function() {
                    $scope.fundsOb2 = $scope.fundsOther;
                });
                break;
        };
        // console.log("sel", $scope.fundsOb2);
        $('.spFundB').selectpicker('refresh');
        $timeout(0);
    }

    function calculateMinPension(age) {
        if (age >= 56 && age <= 64) {
            return 4;
        }
        if (age >= 65 && age <= 74) {
            return 5;
        }
        if (age >= 75 && age <= 79) {
            return 6;
        }
        if (age >= 80 && age <= 84) {
            return 7;
        }
        if (age >= 85 && age <= 89) {
            return 9;
        }
        if (age >= 90 && age <= 94) {
            return 11;
        }
        if (age >= 95) {
            return 14;
        }
    }

    function cLookUp(sal) {
        if (sal <= 249999) {
            return 0.15;
        } else {
            return 0.3;
        }
    }

    function changeCCLimit() {
        var salary = $scope.newChangesApplied ? Number($scope.annualSalaryNew.replaceAll('$', '').replaceAll(',', '')) : Number($scope.annualSalary.replaceAll('$', '').replaceAll(',', ''));
        var empContributionPerc = Number($scope.employerContributionLevel.replaceAll('%', ''));
        var empContribution = salary * (empContributionPerc / 100) > 19615.60 ? 19615.60 : salary * (empContributionPerc / 100);
        var ccLimit = $scope.age >= 49 ? 35000 - empContribution : 30000 - empContribution;
        if (ccLimit < 0) {
            ccLimit = 0.4;
        }
        salarySacrificeSlider.noUiSlider.updateOptions({
            range: {
                'min': 0,
                'max': ccLimit
            }
        });
    }

    function changeCCLimitSpouse() {
        var salary = $scope.newChangesApplied ? Number($scope.annualSalarySpouseNew.replaceAll('$', '').replaceAll(',', '')) : Number($scope.annualSalarySpouse.replaceAll('$', '').replaceAll(',', ''));
        var empContributionPerc = Number($scope.employerContributionLevelSpouse.replaceAll('%', ''));
        var empContribution = salary * (empContributionPerc / 100) > 19615.60 ? 19615.60 : salary * (empContributionPerc / 100);
        var ccLimit = $scope.ageSpouse >= 49 ? 35000 - empContribution : 30000 - empContribution;
        if (ccLimit < 0) {
            ccLimit = 0.4;
        }
        salarySacrificeSpouseSlider.noUiSlider.updateOptions({
            range: {
                'min': 0,
                'max': ccLimit
            }
        });
    }

    changeCCLimit();

    changeCCLimitSpouse();

    $scope.isCouple = true;

    $scope.ownsHome = true;

    $scope.minPension = true;

    $scope.ddPercent = 4.00;

    $scope.ddBase = 40000;

    $scope.minPensionSpouse = true;

    $scope.ddBaseSpouse = 30000;

    function biCount(spouse) {

        if (!spouse) {
            var annualSalary = $scope.newChangesApplied ? Number($scope.annualSalaryNew.replaceAll('$', '').replaceAll(',', '')) : Number($scope.annualSalary.replaceAll('$', '').replaceAll(',', ''));

            var superBalance = $scope.newChangesApplied ? Number($scope.superBalanceNew.replaceAll('$', '').replaceAll(',', '')) : Number($scope.superBalance.replaceAll('$', '').replaceAll(',', ''));

            var wageIncrease = Number($scope.wageIncrease.replaceAll('%', ''));

            var inflation = Number($scope.inflation.replaceAll('%', ''));
            var inflationSpouse = Number($scope.inflationSpouse.replaceAll('%', ''));

            var investmentReturn = Number($scope.investmentReturn.replaceAll('%', ''));

            var variableFee = Number($scope.variableFee.replaceAll('%', ''));

            var employerContributionLevel = Number($scope.employerContributionLevel.replaceAll('%', ''));

            var salarySacrifice = Number($scope.salarySacrifice.replaceAll('$', '').replaceAll(',', ''));

            // var salarySacrifice = 20000;

            var fixedFee = Number($scope.fixedFee.replaceAll('$', '').replaceAll(',', ''));

            var insurancePremium = Number($scope.insurancePremium.replaceAll('$', '').replaceAll(',', ''));

            var retirementAge = $scope.newChangesApplied ? Number($scope.retirementAgeNew) : Number($scope.retirementAge);

            var pensionStart = Number($scope.pensionStart);

            var minPension = !$scope.showPensionOption;


            var ddBase = Number($scope.pensionDrawdownBase.replaceAll('$', '').replaceAll(',', ''));

            var ageL = Number($scope.age);

        } else {
            var annualSalary = $scope.newChangesApplied ? Number($scope.annualSalarySpouseNew.replaceAll('$', '').replaceAll(',', '')) : Number($scope.annualSalarySpouse.replaceAll('$', '').replaceAll(',', ''));

            var superBalance = $scope.newChangesApplied ? Number($scope.superBalanceSpouseNew.replaceAll('$', '').replaceAll(',', '')) : Number($scope.superBalanceSpouse.replaceAll('$', '').replaceAll(',', ''));

            var wageIncrease = Number($scope.wageIncreaseSpouse.replaceAll('%', ''));

            var inflation = Number($scope.inflationSpouse.replaceAll('%', ''));

            var investmentReturn = Number($scope.investmentReturnSpouse.replaceAll('%', ''));

            var variableFee = Number($scope.variableFeeSpouse.replaceAll('%', ''));

            var employerContributionLevel = Number($scope.employerContributionLevelSpouse.replaceAll('%', ''));

            var salarySacrifice = Number($scope.salarySacrificeSpouse.replaceAll('$', '').replaceAll(',', ''));

            // var salarySacrifice = 5000;

            var fixedFee = Number($scope.fixedFeeSpouse.replaceAll('$', '').replaceAll(',', ''));

            var insurancePremium = Number($scope.insurancePremiumSpouse.replaceAll('$', '').replaceAll(',', ''));

            var retirementAge = $scope.newChangesApplied ? Number($scope.retirementAgeSpouseNew) : Number($scope.retirementAgeSpouse);


            var pensionStart = Number($scope.pensionStartSpouse);

            var minPension = !$scope.showPensionOptionSpouse;

            var ddBase = Number($scope.pensionDrawdownBaseSpouse.replaceAll('$', '').replaceAll(',', ''));

            var ageL = Number($scope.ageSpouse);
        }



        var biArray = [];

        var baArray = [];

        var penArray = [];

        var ageArray = [];

        var balanceIndexed = 0;

        var year = 0;

        var cpi;

        var adjustedSalary, concessionalCo, earning, taxation, drawdown, fAndI, balance, balanceCpi, paymentFactor;

        var count = 0;

        while (balanceIndexed >= 0) {
            cpi = Math.pow(1 + (inflation / 100), year);
            adjustedSalary = ageL < retirementAge ? annualSalary * Math.pow(1 + (wageIncrease / 100), year) : 0;
            if (year === 0) {
                concessionalCo = 0;
            } else {
                if (ageL < retirementAge) {
                    var concessionalCap = ageL >= 49 ? 35000 : 30000;
                    // console.log("cCap",concessionalCap);
                    concessionalCo = Math.min(Math.min(adjustedSalary * (employerContributionLevel / 100), 19615.60) + salarySacrifice, concessionalCap);
                } else {
                    concessionalCo = 0;
                }
            }
            balanceCpi = 1 / cpi;
            // var temp1 = 0;
            if (year === 0) {
                earnings = taxation = drawdown = fAndI = 0;
                balance = superBalance;

            } else {
                if (minPension) {
                    if (ageL < pensionStart) {
                        drawdown = 0;
                    } else {
                        drawdown = baArray[year - 1] * (calculateMinPension(ageL) / 100)
                    }
                } else {
                    if (ageL < pensionStart) {
                        drawdown = 0;
                    } else {
                        drawdown = ddBase * Math.pow(1 + (inflation / 100), ageL - pensionStart);
                    }
                }
                minDrawdown = drawdown;


                fAndI = baArray[year - 1] * (variableFee / 100.00) + fixedFee + insurancePremium;


                earnings = baArray[year - 1] * (Math.pow(1 + (investmentReturn / 100), 0.5) - 1) + (baArray[year - 1] * Math.pow(1 + (investmentReturn / 100), 0.5) + concessionalCo - fAndI - drawdown) * (Math.pow(1 + (investmentReturn / 100), 0.5) - 1);


                if (ageL >= 60 && ageL >= pensionStart) {
                    taxation = cLookUp(annualSalary) * concessionalCo;
                } else {
                    taxation = cLookUp(annualSalary) * concessionalCo + earnings * 0.15;
                }

                balance = baArray[year - 1] + concessionalCo + earnings - taxation - drawdown - fAndI;
            }

            balanceIndexed = balance * balanceCpi;

            baArray.push(balance);

            penArray.push(drawdown);

            biArray.push(balanceIndexed);

            ageArray.push(ageL);

            year++;

            ageL++;

            count++;

            // console.log([balance,balanceCpi,balanceIndexed]);

        }

        // console.log(biArray);

        // console.log({
        //     count: count - 1,
        //     biArray: biArray,
        //     penArray: penArray,
        //     ageArray: ageArray
        // });

        return {
            count: count - 1,
            biArray: biArray,
            penArray: penArray,
            ageArray: ageArray
        }

    }

    function entitledAgedPension(superFunds, assetCalculationObj, ageMember1, ageMember2) {
        var homeContents = Number($scope.homeContents.replaceAll('$', '').replaceAll(',', ''));
        var vehicleCost = Number($scope.vehicleCost.replaceAll('$', '').replaceAll(',', ''));
        var investmentProperty = Number($scope.investmentProperty.replaceAll('$', '').replaceAll(',', ''));
        var bankAssets = Number($scope.bankAssets.replaceAll('$', '').replaceAll(',', ''));
        var listedInvestment = Number($scope.listedInvestment.replaceAll('$', '').replaceAll(',', ''));
        var marginLoans = Number($scope.marginLoans.replaceAll('$', '').replaceAll(',', ''));
        var allocatedPension = Number($scope.allocatedPension.replaceAll('$', '').replaceAll(',', ''));
        var otherInvestment = Number($scope.otherInvestment.replaceAll('$', '').replaceAll(',', ''));
        var employmentIncome = $scope.newChangesApplied ? Number($scope.annualSalaryNew.replaceAll('$', '').replaceAll(',', '')) : Number($scope.annualSalary.replaceAll('$', '').replaceAll(',', ''));
        var employmentIncomePartner = $scope.spouseOption ? ($scope.newChangesApplied ? Number($scope.annualSalarySpouseNew.replaceAll('$', '').replaceAll(',', '')) : Number($scope.annualSalarySpouse.replaceAll('$', '').replaceAll(',', ''))) : 0;
        var netRentalIncome = Number($scope.netRentalIncome.replaceAll('$', '').replaceAll(',', ''));
        var otherIncome = Number($scope.otherIncome.replaceAll('$', '').replaceAll(',', ''));
        var pensionIncome = Number($scope.pensionIncome.replaceAll('$', '').replaceAll(',', ''));

        // console.log("super" , superFunds);

        if (ageMember1 >= ($scope.newChangesApplied ? Number($scope.retirementAgeNew) : Number($scope.retirementAge))) {
            employmentIncome = 0;
        }

        if (ageMember2 >= ($scope.newChangesApplied ? Number($scope.retirementAgeSpouseNew) : Number($scope.retirementAgeSpouse))) {
            employmentIncomePartner = 0;
        }



        var temp, temp2, temp3, deemingRate;

        if ($scope.spouseOption) {
            deemingRate = (($scope.age < $scope.pensionStart) && ($scope.ageSpouse < $scope.pensionStartSpouse)) ? 40300 : 80600;
        } else {
            deemingRate = 48600;
        }


        var totalAsset = homeContents + vehicleCost + investmentProperty;
        var totalInvestment = bankAssets + listedInvestment + marginLoans + allocatedPension + superFunds + otherInvestment;
        var totalIncome = employmentIncome + employmentIncomePartner + netRentalIncome + otherIncome + pensionIncome;

        // console.log("tip", totalIncome , memberN);

        if (totalInvestment <= deemingRate) {
            temp = totalInvestment * (1.75 / 100);
        } else {
            temp = deemingRate * (1.75 / 100) + (totalInvestment - deemingRate) * (3.25 / 100);
        }

        var totalCalcIncome = totalIncome + temp;


        var fortnightIncome = totalCalcIncome / 26;


        if (fortnightIncome <= assetCalculationObj.itCheck) {
            temp2 = assetCalculationObj.default;
        } else {
            temp2 = assetCalculationObj.default-assetCalculationObj.percent * (fortnightIncome - assetCalculationObj.itCheck);
        }

        var maxAgedPensionIncome = temp2;

        var totalCalcAsset = totalAsset + totalInvestment;

        if (totalCalcAsset <= assetCalculationObj.low) {
            temp3 = assetCalculationObj.default;
        } else {
            if (totalCalcAsset > assetCalculationObj.high) {
                temp3 = 0;
            } else {
                temp3 = assetCalculationObj.default-(assetCalculationObj.default / (assetCalculationObj.high - assetCalculationObj.low)) * (totalCalcAsset - assetCalculationObj.low);
            }
        }

        var maxAgedPensionAsset = temp3;


        var entitledAgedPension = maxAgedPensionIncome > maxAgedPensionAsset ? maxAgedPensionAsset : maxAgedPensionIncome;

        // return entitledAgedPension;

        return entitledAgedPension > 0 ? entitledAgedPension : 0;
    }


    $scope.calculateFinalR = function(isValid, closeInputs) {

        // console.log($scope.newChangesApplied);

        // console.log("calculating");

        if (isValid) {

            if (closeInputs) {
                document.getElementById("inputs").style.display = "none";
                // $("#results").animate({height: 'toggle'},1500);
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                document.getElementById("results").style.display = "block";
            }

            // console.log('chaling');
            var targetIncome = $scope.newChangesApplied ? Number($scope.targetNew.replaceAll('$', '').replaceAll(',', '')) : Number($scope.target.replaceAll('$', '').replaceAll(',', ''));
            //console.log(targetIncome);
            var isCouple = $scope.spouseOption;
            var ctm;
            var object1 = biCount(false);
            var object2;

            if (isCouple) {
                object2 = biCount(true);
                ctm = Math.max(object1.count, object2.count);
            } else {
                ctm = object1.count;
            }

            var last = Math.max(object1.penArray[object1.count] + object1.biArray[object1.count], 0);

            object1.penArray.pop();

            object1.penArray.push(last);

            // console.log("array",object1.penArray);

            if ($scope.spouseOption) {

                var last = Math.max(object2.penArray[object2.count] + object2.biArray[object2.count], 0);

                object2.penArray.pop();

                object2.penArray.push(last);

                // console.log("array2",object2.penArray);

            }

            if (isCouple) {
                fillArray();
            }

            function fillArray() {
                if (object1.count < object2.count) {
                    for (var i = 0; i < object2.count - object1.count; i++) {
                        object1.penArray.push(0);
                        object1.biArray.push(0);
                        object1.ageArray.push(object1.ageArray[object1.count + i] + 1);
                    }
                } else {
                    for (var i = 0; i < object1.count - object2.count; i++) {
                        object2.penArray.push(0);
                        object2.biArray.push(0);
                        object2.ageArray.push(object2.ageArray[object2.count + i] + 1);
                    }
                }
            }

            // console.log("obj1",object1);
            // console.log("obj2",object2);


            var assetCalculationObj = {};

            if ($scope.spouseOption && $scope.houseOption) {
                assetCalculationObj.high = 1163000;
                assetCalculationObj.low = 291500;
                assetCalculationObj.default = 653.5;
                assetCalculationObj.itCheck = 288;
                assetCalculationObj.percent = 0.25;
            }

            if ($scope.spouseOption && !$scope.houseOption) {
                assetCalculationObj.high = 1312000;
                assetCalculationObj.low = 440500;
                assetCalculationObj.default = 653.5;
                assetCalculationObj.itCheck = 288;
                assetCalculationObj.percent = 0.25;
            }

            if (!$scope.spouseOption && $scope.houseOption) {
                assetCalculationObj.high = 783500;
                assetCalculationObj.low = 205500;
                assetCalculationObj.default = 867;
                assetCalculationObj.itCheck = 162;
                assetCalculationObj.percent = 0.5;
            }

            if (!$scope.spouseOption && !$scope.houseOption) {
                assetCalculationObj.high = 932500;
                assetCalculationObj.low = 354500;
                assetCalculationObj.default = 867;
                assetCalculationObj.itCheck = 162;
                assetCalculationObj.percent = 0.5;
            }

            var superFund;

            var member1BalanceArray = object1.biArray;

            // console.log(cArray);

            var member2BalanceArray = $scope.spouseOption ? object2.biArray : [];

            // console.log(eArray);

            var member1PensionArray = object1.penArray;

            var member2PensionArray = $scope.spouseOption ? object2.penArray : [];



            var member1EPArray = [];

            var member2EPArray = [];

            var member1APArray = [];

            var member2APArray = [];

            var totalSuperBalanceArray = [];

            var totalAnnualIncomeArray = [];

            for (i = 0; i <= ctm; i++) {
                if ($scope.spouseOption) {
                    superFund = object1.biArray[i] > 0 ? object1.biArray[i] : 0 + object2.biArray[i] > 0 ? object2.biArray[i] : 0;
                    if (object2.ageArray[i] < 65) {
                        member2EPArray.push(0);
                    } else {
                        // if(i > object2.count){
                        //     member2EPArray.push(0);
                        // }else{
                        member2EPArray.push(entitledAgedPension(superFund, assetCalculationObj, object1.ageArray[i], object2.ageArray[i]));
                        // }
                    }

                    if (object1.ageArray[i] < 65) {
                        member1EPArray.push(0);
                    } else {
                        // if(i > object1.count){
                        // member1EPArray.push(0);
                        // }else{
                        member1EPArray.push(entitledAgedPension(superFund, assetCalculationObj, object1.ageArray[i], object2.ageArray[i]));
                        // }
                    }
                    member2APArray.push(member2EPArray[i] * 26);
                    member1APArray.push(member1EPArray[i] * 26);
                    totalSuperBalanceArray.push(member1BalanceArray[i] + member2BalanceArray[i]);
                    totalAnnualIncomeArray.push(member1APArray[i] + member2APArray[i] + member1PensionArray[i] + member2PensionArray[i]);
                } else {
                    superFund = object1.biArray[i] > 0 ? object1.biArray[i] : 0;
                    if (object1.ageArray[i] < 65) {
                        member1EPArray.push(0);
                    } else {
                        member1EPArray.push(entitledAgedPension(superFund, assetCalculationObj, object1.ageArray[i], object1.ageArray[i]));
                    }
                    member2EPArray.push(0);
                    member2APArray.push(member2EPArray[i] * 26);
                    member1APArray.push(member1EPArray[i] * 26);
                    totalSuperBalanceArray.push(member1BalanceArray[i]);
                    totalAnnualIncomeArray.push(member1APArray[i] + member1PensionArray[i]);
                }



            }

            // console.log('j', member1APArray);
            // console.log('k', member2APArray);
            // console.log('l',totalSuperBalanceArray);
            // console.log('m', totalAnnualIncomeArray);

            // console.log(assetCalculationObj);


            $scope.resultPerc.perc = 0;
            $scope.resultPerc.diff = 0;
            $scope.resultPerc.target = 0;
            $scope.resultPerc.achieved = 0;

            console.log("yoyo", object1);
            console.log("yoyo", $scope.retirementAge);
            console.log("yoyo", $scope.age);

            if (!$scope.spouseOption) {
                while (member1APArray.length <= Math.ceil(leMember1)) {
                    member1APArray.push(0);
                }
                while (member1PensionArray.length <= Math.ceil(leMember1)) {
                    member1PensionArray.push(0);
                }
                ChartServiceHc.createChart(totalSuperBalanceArray.slice(0, 5 + Math.ceil(leMember1)));
                AreaChartService.createChart(member1APArray.slice(0, 5 + Math.ceil(leMember1)), [], member1PensionArray.slice(0, 5 + Math.ceil(leMember1)), [], leMember1, leMember2, false, targetIncome);



                for (i = Number($scope.retirementAge) - $scope.age; i < leMember1; i++) {
                    $scope.resultPerc.achieved = $scope.resultPerc.achieved + member1APArray[i] + member1PensionArray[i];
                }
                $scope.resultPerc.achieved = $scope.resultPerc.achieved.toFixed(0);

                $scope.resultPerc.target = Number($scope.target.replaceAll('$', '').replaceAll(',', '')) * ((leMember1 + $scope.age) - Number($scope.retirementAge));


                if ($scope.resultPerc.achieved > $scope.resultPerc.target) {
                    $scope.resultPerc.diff = $scope.resultPerc.achieved - $scope.resultPerc.target;
                    $scope.resultPerc.perc = 100;
                    $scope.surplusOption = true;
                } else {
                    $scope.resultPerc.diff = $scope.resultPerc.target - $scope.resultPerc.achieved;
                    $scope.resultPerc.perc = 100 - (($scope.resultPerc.diff / $scope.resultPerc.target) * 100);
                    $scope.resultPerc.perc = $scope.resultPerc.perc.toFixed(0);
                    $scope.surplusOption = false;
                }

                $scope.mediumOption = $scope.resultPerc.perc > 75 ? true : false;
                $timeout(0);

                var canvas = document.createElement("canvas");

                canvg(canvas, $('#container').highcharts().getSVG());

                var imgAA = canvas.toDataURL("image/png");

                document.getElementById("containerImage").src = imgAA;

                var canvas = document.createElement("canvas");

                canvg(canvas, $('#containerA').highcharts().getSVG());

                var imgBB = canvas.toDataURL("image/png");

                document.getElementById("containerImageA").src = imgBB;
                document.getElementById("containerImageB").src = imgBB;
            } else {
                while (member1APArray.length <= Math.max(Math.ceil(leMember1), Math.ceil(leMember2))) {
                    member1APArray.push(0);
                }
                while (member1PensionArray.length <= Math.max(Math.ceil(leMember1), Math.ceil(leMember2))) {
                    member1PensionArray.push(0);
                }
                while (member2PensionArray.length <= Math.max(Math.ceil(leMember1), Math.ceil(leMember2))) {
                    member2PensionArray.push(0);
                }
                while (member2APArray.length <= Math.max(Math.ceil(leMember1), Math.ceil(leMember2))) {
                    member2APArray.push(0);
                }
                ChartServiceHc.createChart(totalSuperBalanceArray.slice(0, 5 + Math.max(Math.ceil(leMember1), Math.ceil(leMember2))));
                AreaChartService.createChart(member1APArray.slice(0, 5 + Math.max(Math.ceil(leMember1), Math.ceil(leMember2))), member2APArray.slice(0, 5 + Math.max(Math.ceil(leMember1), Math.ceil(leMember2))), member1PensionArray.slice(0, 5 + Math.max(Math.ceil(leMember1), Math.ceil(leMember2))), member2PensionArray.slice(0, 5 + Math.max(Math.ceil(leMember1), Math.ceil(leMember2))), leMember1, leMember2, true, targetIncome);


                for (i = Number($scope.retirementAge) - $scope.age; i < leMember1; i++) {
                    $scope.resultPerc.achieved = $scope.resultPerc.achieved + member1APArray[i] + member1PensionArray[i] + member2APArray[i] + member2PensionArray[i]
                }
                $scope.resultPerc.achieved = $scope.resultPerc.achieved.toFixed(0);

                $scope.resultPerc.target = Number($scope.target.replaceAll('$', '').replaceAll(',', '')) * ((leMember1 + $scope.age) - Number($scope.retirementAge));


                if ($scope.resultPerc.achieved > $scope.resultPerc.target) {
                    $scope.resultPerc.diff = $scope.resultPerc.achieved - $scope.resultPerc.target;
                    $scope.resultPerc.perc = 100;
                    $scope.surplusOption = true;
                } else {
                    $scope.resultPerc.diff = $scope.resultPerc.target - $scope.resultPerc.achieved;
                    $scope.resultPerc.perc = 100 - (($scope.resultPerc.diff / $scope.resultPerc.target) * 100);
                    $scope.resultPerc.perc = $scope.resultPerc.perc.toFixed(0);
                    $scope.surplusOption = false;
                }

                $scope.mediumOption = $scope.resultPerc.perc > 75 ? true : false;
                $timeout(0);

                var canvas = document.createElement("canvas");

                canvg(canvas, $('#container').highcharts().getSVG());

                var imgAA = canvas.toDataURL("image/png");

                document.getElementById("containerImage").src = imgAA;

                var canvas = document.createElement("canvas");

                canvg(canvas, $('#containerA').highcharts().getSVG());

                var imgBB = canvas.toDataURL("image/png");

                document.getElementById("containerImageA").src = imgBB;
                document.getElementById("containerImageB").src = imgBB;
            }
            // console.log("calculated");
        } else {
            $("#myModal").modal('show');
            $("html, body").animate({
                scrollTop: $("#tell-us").position().top + 80
            }, "slow");
        }


    }

    $scope.hitLink = function() {
        $('#myModal4').modal('hide');
        $rootScope.isLoading = true;
        console.log("kartik is great again");
        var http = new XMLHttpRequest();
        var url = "http://180.151.85.194:3001/htmlPDF";
        var params = {
            'name': 'binny'
        };
        http.open("POST", url, true);

        //Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() { //Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {

                var yut = JSON.parse(http.response);
                console.log(yut.filePath);
                console.log(yut.fileName);
                SaveToDisk(yut.filePath, yut.fileName)
            }
        }
        http.send(params);
    }


    $scope.calculatePdf = function() {
        $("#myModal4").modal('show');

    }

    function SaveToDisk(fileURL, fileName) {
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = fileURL;
        link.target = '_blank';
        link.click();
        $rootScope.isLoading = false;
        $timeout(0);
    }

    var grossAnnualIncome1, homeMortgage1, investmentPropertyMortgage1, creditCardDebt1, carLoan1, personalLoan1,
        otherLoan1, homeValue1, cashAtBank1, otherInvestment1, superBalance1, ecLife1, ecTPD1, ecIP1, ecTrauma1,
        funeralCost1, educationExpensePerYearPerChild1, familyLivingCostPerYear1, inflation1, rateOfReturn1,
        moneyToBeBorrowed1, valueOfNewProperty1, spouseSalary1;


    $scope.calculateFinal = function(isValid, closeInputs) {

            if (isValid) {

                if (closeInputs) {
                    document.getElementById("inputs").style.display = "none";
                    // $("#results").animate({height: 'toggle'},1500);
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    document.getElementById("results").style.display = "block";
                }


                grossAnnualIncome1 = $scope.newChangesApplied ? Number($scope.grossAnnualIncomeNew.replaceAll("$", "").replaceAll(",", "")) : Number($scope.grossAnnualIncome.replaceAll("$", "").replaceAll(",", ""));
                homeMortgage1 = Number($scope.homeMortgage.replaceAll("$", "").replaceAll(",", ""));
                investmentPropertyMortgage1 = Number($scope.investmentPropertyMortgage.replaceAll("$", "").replaceAll(",", ""));
                creditCardDebt1 = Number($scope.creditCardDebt.replaceAll("$", "").replaceAll(",", ""));
                carLoan1 = Number($scope.carLoan.replaceAll("$", "").replaceAll(",", ""));
                personalLoan1 = Number($scope.personalLoan.replaceAll("$", "").replaceAll(",", ""));
                otherLoan1 = Number($scope.otherLoan.replaceAll("$", "").replaceAll(",", ""));
                homeValue1 = Number($scope.homeValue.replaceAll("$", "").replaceAll(",", ""));
                cashAtBank1 = Number($scope.cashAtBank.replaceAll("$", "").replaceAll(",", ""));
                otherInvestment1 = Number($scope.otherInvestment.replaceAll("$", "").replaceAll(",", ""));
                superBalance1 = Number($scope.superBalance.replaceAll("$", "").replaceAll(",", ""));
                ecLife1 = $scope.newChangesApplied ? Number($scope.ecLifeNew.replaceAll("$", "").replaceAll(",", "")) : Number($scope.ecLife.replaceAll("$", "").replaceAll(",", ""));
                ecTPD1 = $scope.newChangesApplied ? Number($scope.ecTPDNew.replaceAll("$", "").replaceAll(",", "")) : Number($scope.ecTPD.replaceAll("$", "").replaceAll(",", ""));
                ecIP1 = $scope.newChangesApplied ? Number($scope.ecIPNew.replaceAll("$", "").replaceAll(",", "")) : Number($scope.ecIP.replaceAll("$", "").replaceAll(",", ""));
                ecTrauma1 = $scope.newChangesApplied ? Number($scope.ecTraumaNew.replaceAll("$", "").replaceAll(",", "")) : Number($scope.ecTrauma.replaceAll("$", "").replaceAll(",", ""));
                funeralCost1 = Number($scope.funeralCost.replaceAll("$", "").replaceAll(",", ""));
                educationExpensePerYearPerChild1 = Number($scope.educationExpensePerYearPerChild.replaceAll("$", "").replaceAll(",", ""));
                familyLivingCostPerYear1 = Number($scope.familyLivingCostPerYear.replaceAll("$", "").replaceAll(",", ""));
                inflation1 = Number($scope.inflation.replaceAll("%", "").replaceAll(",", ""));
                rateOfReturn1 = Number($scope.rateOfReturn.replaceAll("%", "").replaceAll(",", ""));
                moneyToBeBorrowed1 = Number($scope.moneyToBeBorrowed.replaceAll("$", "").replaceAll(",", ""));
                valueOfNewProperty1 = Number($scope.valueOfNewProperty.replaceAll("$", "").replaceAll(",", ""));
                spouseSalary1 = Number($scope.spouseSalary.replaceAll("$", "").replaceAll(",", ""));

                $scope.ecL = ecLife1;
                $scope.ecT = ecTPD1;
                $scope.ecI = ecIP1;
                $scope.ecTr = ecTrauma1;

                function PV(rate, periods, payment, future, type) {
                    // Initialize type
                    var type = (typeof type === 'undefined') ? 0 : type;

                    // Evaluate rate and periods (TODO: repersonalLoanace with secure expression evaluator)
                    rate = eval(rate);
                    periods = eval(periods);

                    // Return present value
                    if (rate === 0) {
                        return -payment * periods - future;
                    } else {
                        return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
                    }
                }

                var PVExpenseSpouse;
                $scope.realRateOfReturn = (1 + (rateOfReturn1 / 100)) / (1 + (inflation1 / 100)) - 1;


                if (!$scope.spouseOption) {
                    PVExpenseSpouse = 0;
                } else {
                    if (!$scope.spouseWorkOption) {
                        PVExpenseSpouse = Math.abs(PV($scope.realRateOfReturn, 65 - $scope.ageSpouse, familyLivingCostPerYear1, 0, 0));
                    } else {
                        PVExpenseSpouse = Math.abs(PV($scope.realRateOfReturn, 65 - $scope.ageSpouse, familyLivingCostPerYear1 - spouseSalary1, 0, 0));
                    }
                }
                //PVExpenseSpouse=1243994.6;
                console.log("PVExpenseSpouse", PVExpenseSpouse);
                var PVExpenseChildren = 0;
                var ageChild = [$scope.ageChildren1, $scope.ageChildren2, $scope.ageChildren3, $scope.ageChildren4, $scope.ageChildren5]

                if ($scope.numChildren == 0) {
                    PVExpenseChildren = 0;
                } else {

                    for (var i = 0; i < $scope.numChildren; i++) {
                        var temp = Math.abs(PV($scope.realRateOfReturn, 25 - ageChild[i], educationExpensePerYearPerChild1, 0, 0));

                        PVExpenseChildren = PVExpenseChildren + temp;
                    }
                }
                // PVExpenseChildren=80156.1983032635+74793.54924005;
                console.log("PVExpenseChildren", PVExpenseChildren);

                $scope.D34 = Math.pow(1 + rateOfReturn1 / 100, Number((100 / 1200).toFixed(2))) - 1;
                $scope.saleProceeds = homeValue1 - homeMortgage1;


                //ScenarioOneInputs
                var sAssets = cashAtBank1 + otherInvestment1 + superBalance1;
                var sLiability = homeMortgage1 + investmentPropertyMortgage1 + creditCardDebt1 +
                    carLoan1 + personalLoan1 + otherLoan1;
                var PVExpenseLife = PVExpenseSpouse + PVExpenseChildren + funeralCost1;
                var PVExpenseTPD = PVExpenseLife - funeralCost1;
                var IP1 = Number(((grossAnnualIncome1 * 0.75) / 12).toFixed(2));
                var IP2 = Math.abs(PV($scope.D34, (65 - $scope.age) * 12, IP1, 0, 0));
                var Trauma1 = 225000;
                var Trauma2 = Math.abs(PV($scope.D34, 24, 0.25 * grossAnnualIncome1 / 12, 0, 0));

                $scope.resultS1 = calculateResult(sAssets, sLiability, PVExpenseLife, PVExpenseTPD, IP1, IP2, Trauma1, Trauma2, ecLife1, ecTPD1, ecIP1, ecTrauma1);


                //ScenarioTwo
                var additionalAssets;
                if (moneyToBeBorrowed1 + $scope.saleProceeds > valueOfNewProperty1) {
                    additionalAssets = moneyToBeBorrowed1 + $scope.saleProceeds - valueOfNewProperty1;
                } else {
                    additionalAssets = 0;
                }
                var s2Assets = cashAtBank1 + otherInvestment1 + superBalance1 + additionalAssets;
                var s2Liability = investmentPropertyMortgage1 + creditCardDebt1 +
                    carLoan1 + personalLoan1 + otherLoan1 + moneyToBeBorrowed1;
                var PVExpenseLife2 = PVExpenseSpouse + PVExpenseChildren;
                var PVExpenseTPD2 = PVExpenseLife2;

                $scope.resultS2 = calculateResult(s2Assets, s2Liability, PVExpenseLife2, PVExpenseTPD2, IP1, IP2, Trauma1, Trauma2, ecLife1, ecTPD1, ecIP1, ecTrauma1);

                function calculateResult(asset, liability, PVExpenseLife, PVExpenseTPD, IP1, IP2, Trauma1, Trauma2, ecLife, ecTPD, ecIP, ecTrauma) {
                    var requiredLifeCover = PVExpenseLife + liability - asset;
                    var requiredTPDCover = PVExpenseTPD + liability - asset - IP2;
                    var requiredIPCover = IP1;
                    var requiredTraumaCover = Trauma1 + Trauma2;
                    return {
                        life: requiredLifeCover,
                        TPD: requiredTPDCover,
                        IP: requiredIPCover,
                        trauma: requiredTraumaCover,
                        waiting: 30
                    };
                };
                console.log("Result 1", $scope.resultS1);
                console.log("Result 2", $scope.resultS2);

                $scope.resultTemp = $scope.buyOption ? $scope.resultS2 : $scope.resultS1;

                $scope.needLife1 = $scope.resultS1.life >= ecLife1 ? true : false;

                $scope.needLife2 = $scope.resultS2.life >= ecLife1 ? true : false;

                $scope.sfLife1 = Math.abs($scope.resultS1.life - ecLife1);

                $scope.sfLife2 = Math.abs($scope.resultS2.life - ecLife1);

                $scope.needTPD1 = $scope.resultS1.TPD >= ecTPD1 ? true : false;

                $scope.needTPD2 = $scope.resultS2.TPD >= ecTPD1 ? true : false;

                $scope.sfTPD1 = Math.abs($scope.resultS1.TPD - ecTPD1);

                $scope.sfTPD2 = Math.abs($scope.resultS2.TPD - ecTPD1);

                $scope.needIP1 = $scope.resultS1.IP >= ecIP1 ? true : false;

                $scope.needIP2 = $scope.resultS2.IP >= ecIP1 ? true : false;

                $scope.sfIP1 = Math.abs($scope.resultS1.IP - ecIP1);

                $scope.sfIP2 = Math.abs($scope.resultS2.IP - ecIP1);

                $scope.needTrauma1 = $scope.resultS1.trauma >= ecTrauma1 ? true : false;

                $scope.needTrauma2 = $scope.resultS2.trauma >= ecTrauma1 ? true : false;

                $scope.sfTrauma1 = Math.abs($scope.resultS1.trauma - ecTrauma1);

                $scope.sfTrauma2 = Math.abs($scope.resultS2.trauma - ecTrauma1);

                $scope.resultPerc.perc = 0;
                $scope.resultPerc.diff = 0;
                $scope.resultPerc.target = 0;
                $scope.resultPerc.achieved = 0;


                //$scope.resultPerc.achieved = $scope.ecL + $scope.ecT + $scope.ecI + $scope.ecTr;

                // $scope.resultPerc.achieved = $scope.resultPerc.achieved.toFixed(0);


                if ($scope.buyOption) {
                    ChartServiceHc.createChart('#containerB', 'Death Cover', ecLife1, $scope.resultS1.life, $scope.resultS2.life, false, true);
                    ChartServiceHc.createChart('#containerB2', 'TPD Cover', ecTPD1, $scope.resultS1.TPD, $scope.resultS2.TPD, false, true);
                    ChartServiceHc.createChart('#containerB3', 'Income Protection Cover', ecIP1, $scope.resultS1.IP, $scope.resultS2.IP, false, true);
                    ChartServiceHc.createChart('#containerB4', 'Trauma Cover', ecTrauma1, $scope.resultS1.trauma, $scope.resultS2.trauma, false, true);

                    //$scope.resultPerc.target = $scope.resultS2.life + $scope.resultS2.TPD + $scope.resultS2.IP + $scope.resultS2.trauma;

                    $scope.tempResult = $scope.resultS2;
                    $timeout(0);
                } else {
                    ChartServiceHc.createChart('#containerB', 'Death Cover', ecLife1, $scope.resultS1.life, {}, false, false);
                    ChartServiceHc.createChart('#containerB2', 'TPD Cover', ecTPD1, $scope.resultS1.TPD, {}, false, false);
                    ChartServiceHc.createChart('#containerB3', 'Income Protection Cover', ecIP1, $scope.resultS1.IP, {}, false, false);
                    ChartServiceHc.createChart('#containerB4', 'Trauma Cover', ecTrauma1, $scope.resultS1.trauma, {}, false, false);

                    //$scope.resultPerc.target = $scope.resultS1.life + $scope.resultS1.TPD + $scope.resultS1.IP + $scope.resultS1.trauma;

                    $scope.tempResult = $scope.resultS1;
                    $timeout(0);
                }

                if ($scope.ecL > $scope.tempResult.life) {
                    $scope.resultPerc.diffLife = $scope.ecL - $scope.tempResult.life;
                    $scope.resultPerc.percLife = 100;
                    $scope.surplusOptionLife = true;
                } else {
                    $scope.resultPerc.diffLife = $scope.tempResult.life - $scope.ecL;
                    $scope.resultPerc.percLife = 100 - (($scope.resultPerc.diffLife / $scope.tempResult.life) * 100);
                    $scope.resultPerc.percLife = $scope.resultPerc.percLife.toFixed(0);
                    $scope.surplusOptionLife = false;
                }
                if ($scope.ecT > $scope.tempResult.TPD) {
                    $scope.resultPerc.diffTPD = $scope.ecT - $scope.tempResult.TPD;
                    $scope.resultPerc.percTPD = 100;
                    $scope.surplusOptionTPD = true;
                } else {
                    $scope.resultPerc.diffTPD = $scope.tempResult.TPD - $scope.ecT;
                    $scope.resultPerc.percTPD = 100 - (($scope.resultPerc.diffTPD / $scope.tempResult.TPD) * 100);
                    $scope.resultPerc.percTPD = $scope.resultPerc.percTPD.toFixed(0);
                    $scope.surplusOptionTPD = false;
                }
                if ($scope.ecI > $scope.tempResult.IP) {
                    $scope.resultPerc.diffIP = $scope.ecI - $scope.tempResult.IP;
                    $scope.resultPerc.percIP = 100;
                    $scope.surplusOptionIP = true;
                } else {
                    $scope.resultPerc.diffIP = $scope.tempResult.IP - $scope.ecI;
                    $scope.resultPerc.percIP = 100 - (($scope.resultPerc.diffIP / $scope.tempResult.IP) * 100);
                    $scope.resultPerc.percIP = $scope.resultPerc.percIP.toFixed(0);
                    $scope.surplusOptionIP = false;
                }
                if ($scope.ecTr > $scope.tempResult.trauma) {
                    $scope.resultPerc.diffTrauma = $scope.ecTr - $scope.tempResult.trauma;
                    $scope.resultPerc.percTrauma = 100;
                    $scope.surplusOptionTrauma = true;
                } else {
                    $scope.resultPerc.diffTrauma = $scope.tempResult.trauma - $scope.ecTr;
                    $scope.resultPerc.percTrauma = 100 - (($scope.resultPerc.diffTrauma / $scope.tempResult.trauma) * 100);
                    $scope.resultPerc.percTrauma = $scope.resultPerc.percTrauma.toFixed(0);
                    $scope.surplusOptionTrauma = false;
                }

                $scope.mediumOptionLife = $scope.resultPerc.percLife > 75 ? true : false;
                $scope.mediumOptionTPD = $scope.resultPerc.percTPD > 75 ? true : false;
                $scope.mediumOptionIP = $scope.resultPerc.percIP > 75 ? true : false;
                $scope.mediumOptionTrauma = $scope.resultPerc.percTrauma > 75 ? true : false;


            } else {
                $("#myModal").modal('show');
                $("html, body").animate({
                    scrollTop: $("#tell-us").position().top + 80
                }, "slow");
            }
        }
        //$scope.calculateFinal(true, false);

    document.getElementById("download").addEventListener("click", function() {
        if ($scope.forms.ttrForm.$valid) {

            var personalDetailsObject = {
                firstName: $scope.personalDetails.firstName,
                lastName: $scope.personalDetails.lastName,
                email: $scope.personalDetails.email,
                mobile: $scope.personalDetails.mobile,
                address: $scope.personalDetails.address,
                postalCode: $scope.personalDetails.postalCode,
                dob: $scope.dob,
                age: $scope.age,
                genderOption: $scope.genderOption,
                spouseOption: $scope.spouseOption,
                numChildren: $scope.numChildren,
            };

            var liabilitiesObject = {
                homeMortgage: homeMortgage1,
                investmentPropertyMortgage: investmentPropertyMortgage1,
                creditCardDebt: creditCardDebt1,
                carLoan: carLoan1,
                personalLoan: personalLoan1,
                otherLoan: otherLoan1
            };

            var assetsObject = {
                homeValue: homeValue1,
                cashAtBank: cashAtBank1,
                otherInvestment: otherInvestment1,
                superBalance: superBalance1
            };

            var otherExpenses = {
                funeralCost: funeralCost1,
                educationExpense: educationExpensePerYearPerChild1,
                familyLivingCost: familyLivingCostPerYear1,
                moveProperty: $scope.buyOption ? "Yes" : "No",
                newPropertyValue: valueOfNewProperty1,
                moneyBorrowed: moneyToBeBorrowed1,
                saleProceeds: $scope.saleProceeds
            };

            var existingCovers = {
                ecLife: ecLife1,
                ecTPD: ecTPD1,
                ecIP: ecIP1,
                ecTrauma: ecTrauma1
            };

            var assumptions = {
                inflation: inflation1,
                rateOfReturn: rateOfReturn1,
                realRate: $scope.realRateOfReturn
            }

            if ($scope.buyOption) {
                PdfMaker.createChart(personalDetailsObject, assetsObject, liabilitiesObject, otherExpenses, existingCovers, assumptions, $scope.resultS1, $scope.resultS2, $scope.buyOption, $scope.waitingPeriod);
            } else {
                PdfMaker.createChart(personalDetailsObject, assetsObject, liabilitiesObject, otherExpenses, existingCovers, assumptions, $scope.resultS1, {}, $scope.buyOption, $scope.waitingPeriod);

            }
        } else {
            $("#myModal").modal('show');
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
        }
    });

    // document.getElementById("bar-chart").addEventListener("click", function() {
    $("#bar-chart,#bar-chart-m").on("click", function() {
        $scope.chartOneOpen = true;
        $scope.chartTwoOpen = false;
        $scope.chartThreeOpen = false;
        $scope.chartFourOpen = false;
        $("#containerB2").highcharts().reflow();
        $("#containerB3").highcharts().reflow();
        $("#containerB4").highcharts().reflow();
        document.getElementById("containerB2").style.display = "none";
        document.getElementById("containerB3").style.display = "none";
        document.getElementById("containerB4").style.display = "none";
        document.getElementById("containerB").style.display = "block";
        $("#containerB").highcharts().reflow();
        $timeout(0);
    });

    // document.getElementById("area-chart").addEventListener("click", function() {
    $("#area-chart,#area-chart-m").on("click", function() {
        $scope.chartOneOpen = false;
        $scope.chartTwoOpen = true;
        $scope.chartThreeOpen = false;
        $scope.chartFourOpen = false;
        $("#containerB").highcharts().reflow();
        $("#containerB3").highcharts().reflow();
        $("#containerB4").highcharts().reflow();
        document.getElementById("containerB").style.display = "none";
        document.getElementById("containerB3").style.display = "none";
        document.getElementById("containerB4").style.display = "none";
        document.getElementById("containerB2").style.display = "block";
        $("#containerB2").highcharts().reflow();
        $timeout(0);
    });
    $("#area-chart1,#area-chart1-m").on("click", function() {
        $scope.chartOneOpen = false;
        $scope.chartTwoOpen = false;
        $scope.chartThreeOpen = true;
        $scope.chartFourOpen = false;
        $("#containerB").highcharts().reflow();
        $("#containerB2").highcharts().reflow();
        $("#containerB4").highcharts().reflow();
        document.getElementById("containerB").style.display = "none";
        document.getElementById("containerB2").style.display = "none";
        document.getElementById("containerB4").style.display = "none";
        document.getElementById("containerB3").style.display = "block";
        $("#containerB3").highcharts().reflow();
        $timeout(0);
    });
    $("#area-chart2,#area-chart2-m").on("click", function() {
        $scope.chartOneOpen = false;
        $scope.chartTwoOpen = false;
        $scope.chartThreeOpen = false;
        $scope.chartFourOpen = true;
        $("#containerB").highcharts().reflow();
        $("#containerB2").highcharts().reflow();
        $("#containerB3").highcharts().reflow();
        document.getElementById("containerB").style.display = "none";
        document.getElementById("containerB2").style.display = "none";
        document.getElementById("containerB3").style.display = "none";
        document.getElementById("containerB4").style.display = "block";
        $("#containerB4").highcharts().reflow();
        $timeout(0);
    });

    $(".print-doc").on("click", printBothCharts);

    function printBothCharts() {
        if ($scope.forms.ttrForm.$valid) {
            var printUpdate = function() {
                $('#container').highcharts().reflow();
                $("#containerA").highcharts().reflow();
            };

            if ($scope.chartOneOpen) {
                document.getElementById("containerA").style.display = "block";
                if (window.matchMedia) {
                    var mediaQueryList = window.matchMedia('print');
                    mediaQueryList.addListener(function(mql) {
                        printUpdate();
                    });
                }
                window.print();
                setTimeout(function() {
                    document.getElementById("containerA").style.display = "none";
                }, 200);
            } else {
                document.getElementById("container").style.display = "block";
                if (window.matchMedia) {
                    var mediaQueryList = window.matchMedia('print');
                    mediaQueryList.addListener(function(mql) {
                        printUpdate();
                    });
                }
                window.print();
                setTimeout(function() {
                    document.getElementById("container").style.display = "none";
                }, 200);
            }
        } else {
            $("#myModal").modal('show');
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
        }
    };

    $scope.resetSliders = function() {
        window.contentRevealOptions.reset = true;
        sr.reveal('.contents', contentRevealOptions);
        // console.log(contentRevealOptions);
        var sliders = document.getElementsByClassName("slider-div");
        [].forEach.call(sliders, function(slider) {
            slider.noUiSlider.reset();
        })
        document.getElementById("results").style.display = "none";
        // $("#inputs").animate({height: 'toggle'},2000);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.getElementById("inputs").style.display = "block";

        $scope.saveWithNew = false;
    }
    $scope.goalCal = [
       
        {
            isOpen: false,
            id:0,
            goalimg : "/assets/images/cal-goal1.png", 
            headings: "protect my income"
        },
        
        
         {
            isOpen: false,
            id:1,    
            goalimg : "/assets/images/cal-goal2.png", 
            headings: "Simplify my finances"
        },
        
        
        {
            isOpen: false,
            id:2,    
            goalimg : "/assets/images/cal-goal3.jpg", 
            headings: "Retire right"
        },
        
          {
            isOpen: false,
            id:3,    
            goalimg : "/assets/images/cal-goal4.png", 
            headings: "Be debt free"
        },
        
         {
            isOpen: false,
            id:4, 
            goalimg : "/assets/images/cal-goal5.png", 
            headings: "Invest in property"
        },
        
           {
            isOpen: false,
            id:5,   
            goalimg : "/assets/images/cal-goal6.jpg", 
            headings: "Save for something big"
        },
        
        {
            isOpen: false,
            id:6,
            goalimg : "/assets/images/cal-goal7.png", 
            headings: "Pursue a passion"
        },
        
        {
            isOpen: false,
            id:7,    
            goalimg : "/assets/images/cal-goal8.png", 
            headings: "Buy a home"
        },
        
        {
            isOpen: false,
            id:8,
            goalimg : "/assets/images/cal-goal9.png", 
            headings: "We're married, now what?"
        },
        
        {
            isOpen: false,
            id:9,
            goalimg : "/assets/images/cal-goal10.png", 
            headings: "Retirement living options"
        },
        
        {
            isOpen: false,
            id:11,
            goalimg : "/assets/images/cal-goal11.png", 
            headings: "Start accessing my super"
        },
        
        {
            isOpen: false,
            id:12,
            goalimg : "/assets/images/cal-goal12.png", 
            headings: "Give them the best chance"
        },
    
    ];
    
   $scope.addGoal= function(index) 
    {
      for(var i=0;i<$scope.goalCal.length;i++)
          {
              if(index == $scope.goalCal[i].id)
                  {
                      $scope.goalCal[i].isOpen = true;
                      break;
                  }
          }
    }
    
    
}]);