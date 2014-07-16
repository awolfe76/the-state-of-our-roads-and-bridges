var projects = new Map({
    scope: 'usa',
    el: $('#projects'),
    geography_config: { 
        highlightBorderColor: '#ddd',
        highlightBorderWidth: '1',
        highlightFillColor: '#fff',
        highlightOnHover: true,
        popupTemplate: _.template('<div class="hoverinfo"><strong><%= geography.properties.name %></strong><hr/><strong><%= data.activeHighwayProjects %></strong> projects')
    },

    fills: {
        'BEST': 'rgba(255, 133, 27, .25)',
        'BETTER': 'rgba(255, 133, 27, .5)',
        'WORSE': 'rgba(255, 133, 27, .75)',
        'WORST': 'rgba(255, 133, 27, 1)',
        defaultFill: '#dddddd'
    },
      data: {
      "AL": {
        "milesPublicRoad":101688,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":19,
        "highwayTrafficFatalities":894,
        "bridges":16078,
        "deficientObsoleteBridges":3608,
        "percentDeficientObsoleteBridges":22,
        "percentFedFundOfCapitalOutlays":78,
        "estAnnualJobRisk":11890,
        "activeHighwayProjects":3481,
        "activeTransitGrants":54,
        "fuelConsumptionGallonsPerCapita":695.6,
        "vehicleRepairOperationCostsPerDriver":366.35
      },
      "AK": {
        "milesPublicRoad":16674,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":6,
        "highwayTrafficFatalities":72,
        "bridges":1196,
        "deficientObsoleteBridges":290,
        "percentDeficientObsoleteBridges":24,
        "percentFedFundOfCapitalOutlays":95,
        "estAnnualJobRisk":7867,
        "activeHighwayProjects":962,
        "activeTransitGrants":83,
        "fuelConsumptionGallonsPerCapita":700.19,
        "vehicleRepairOperationCostsPerDriver":321.42
      },
      "AR": {
        "milesPublicRoad":100082,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":14,
        "highwayTrafficFatalities":549,
        "bridges":12748,
        "deficientObsoleteBridges":2894,
        "percentDeficientObsoleteBridges":23,
        "percentFedFundOfCapitalOutlays":80,
        "estAnnualJobRisk":7846,
        "activeHighwayProjects":1452,
        "activeTransitGrants":41,
        "fuelConsumptionGallonsPerCapita":690.36,
        "vehicleRepairOperationCostsPerDriver":496.89
      },
      "AZ": {
        "milesPublicRoad":65091,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":7,
        "highwayTrafficFatalities":825,
        "bridges":7862,
        "deficientObsoleteBridges":954,
        "percentDeficientObsoleteBridges":12,
        "percentFedFundOfCapitalOutlays":36,
        "estAnnualJobRisk":12562,
        "activeHighwayProjects":1273,
        "activeTransitGrants":105,
        "fuelConsumptionGallonsPerCapita":527.15,
        "vehicleRepairOperationCostsPerDriver":247.1
      },
      "CA": {
        "milesPublicRoad":172201,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":34,
        "highwayTrafficFatalities":2791,
        "bridges":24955,
        "deficientObsoleteBridges":6953,
        "percentDeficientObsoleteBridges":28,
        "percentFedFundOfCapitalOutlays":19,
        "estAnnualJobRisk":73572,
        "activeHighwayProjects":5692,
        "activeTransitGrants":704,
        "fuelConsumptionGallonsPerCapita":461.27,
        "vehicleRepairOperationCostsPerDriver":702.88
      },
      "CO": {
        "milesPublicRoad":88414,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":17,
        "highwayTrafficFatalities":447,
        "bridges":8612,
        "deficientObsoleteBridges":1483,
        "percentDeficientObsoleteBridges":17,
        "percentFedFundOfCapitalOutlays":69,
        "estAnnualJobRisk":9666,
        "activeHighwayProjects":1078,
        "activeTransitGrants":72,
        "fuelConsumptionGallonsPerCapita":522.32,
        "vehicleRepairOperationCostsPerDriver":534.56
      },
      "CT": {
        "milesPublicRoad":21414,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":41,
        "highwayTrafficFatalities":220,
        "bridges":4218,
        "deficientObsoleteBridges":1472,
        "percentDeficientObsoleteBridges":35,
        "percentFedFundOfCapitalOutlays":53,
        "estAnnualJobRisk":9612,
        "activeHighwayProjects":1630,
        "activeTransitGrants":89,
        "fuelConsumptionGallonsPerCapita":486.96,
        "vehicleRepairOperationCostsPerDriver":661.26
      },
      "DE": {
        "milesPublicRoad":6357,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":16,
        "highwayTrafficFatalities":99,
        "bridges":864,
        "deficientObsoleteBridges":177,
        "percentDeficientObsoleteBridges":20,
        "percentFedFundOfCapitalOutlays":49,
        "estAnnualJobRisk":2791,
        "activeHighwayProjects":602,
        "activeTransitGrants":21,
        "fuelConsumptionGallonsPerCapita":546.66,
        "vehicleRepairOperationCostsPerDriver":380.78
      },
      "FL": {
        "milesPublicRoad":121759,
        "fillKey": "WORSE",
        "percentRoadsPoorCondition":4,
        "highwayTrafficFatalities":2398,
        "bridges":12070,
        "deficientObsoleteBridges":2044,
        "percentDeficientObsoleteBridges":17,
        "percentFedFundOfCapitalOutlays":29,
        "estAnnualJobRisk":33760,
        "activeHighwayProjects":2791,
        "activeTransitGrants":367,
        "fuelConsumptionGallonsPerCapita":497.76,
        "vehicleRepairOperationCostsPerDriver":181.43
      },
      "GA": {
        "milesPublicRoad":123546,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":5,
        "highwayTrafficFatalities":1223,
        "bridges":14769,
        "deficientObsoleteBridges":2600,
        "percentDeficientObsoleteBridges":18,
        "percentFedFundOfCapitalOutlays":62,
        "estAnnualJobRisk":22119,
        "activeHighwayProjects":3341,
        "activeTransitGrants":126,
        "fuelConsumptionGallonsPerCapita":602.66,
        "vehicleRepairOperationCostsPerDriver":260.02
      },
      "HI": {
        "milesPublicRoad":4405,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":27,
        "highwayTrafficFatalities":100,
        "bridges":1125,
        "deficientObsoleteBridges":494,
        "percentDeficientObsoleteBridges":44,
        "percentFedFundOfCapitalOutlays":58,
        "estAnnualJobRisk":3115,
        "activeHighwayProjects":572,
        "activeTransitGrants":43,
        "fuelConsumptionGallonsPerCapita":377.86,
        "vehicleRepairOperationCostsPerDriver":527.86
      },
      "IA": {
        "milesPublicRoad":114387,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":12,
        "highwayTrafficFatalities":360,
        "bridges":24398,
        "deficientObsoleteBridges":6271,
        "percentDeficientObsoleteBridges":26,
        "percentFedFundOfCapitalOutlays":50,
        "estAnnualJobRisk":7928,
        "activeHighwayProjects":1556,
        "activeTransitGrants":62,
        "fuelConsumptionGallonsPerCapita":774.37,
        "vehicleRepairOperationCostsPerDriver":421.76
      },
      "ID": {
        "milesPublicRoad":48553,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":11,
        "highwayTrafficFatalities":167,
        "bridges":4232,
        "deficientObsoleteBridges":859,
        "percentDeficientObsoleteBridges":20,
        "percentFedFundOfCapitalOutlays":73,
        "estAnnualJobRisk":4546,
        "activeHighwayProjects":1185,
        "activeTransitGrants":68,
        "fuelConsumptionGallonsPerCapita":590.57,
        "vehicleRepairOperationCostsPerDriver":370.08
      },
      "IL": {
        "milesPublicRoad":139498,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":15,
        "highwayTrafficFatalities":918,
        "bridges":26621,
        "deficientObsoleteBridges":4246,
        "percentDeficientObsoleteBridges":16,
        "percentFedFundOfCapitalOutlays":37,
        "estAnnualJobRisk":29669,
        "activeHighwayProjects":3945,
        "activeTransitGrants":223,
        "fuelConsumptionGallonsPerCapita":482.41,
        "vehicleRepairOperationCostsPerDriver":448.61
      },
      "IN": {
        "milesPublicRoad":97065,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":16,
        "highwayTrafficFatalities":750,
        "bridges":18953,
        "deficientObsoleteBridges":4168,
        "percentDeficientObsoleteBridges":22,
        "percentFedFundOfCapitalOutlays":59,
        "estAnnualJobRisk":15321,
        "activeHighwayProjects":6093,
        "activeTransitGrants":115,
        "fuelConsumptionGallonsPerCapita":656.13,
        "vehicleRepairOperationCostsPerDriver":391.41
      },
      "KS": {
        "milesPublicRoad":140513,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":8,
        "highwayTrafficFatalities":386,
        "bridges":25171,
        "deficientObsoleteBridges":4465,
        "percentDeficientObsoleteBridges":18,
        "percentFedFundOfCapitalOutlays":55,
        "estAnnualJobRisk":6157,
        "activeHighwayProjects":837,
        "activeTransitGrants":42,
        "fuelConsumptionGallonsPerCapita":615.1,
        "vehicleRepairOperationCostsPerDriver":435.49
      },
      "KY": {
        "milesPublicRoad":79220,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":7,
        "highwayTrafficFatalities":721,
        "bridges":14116,
        "deficientObsoleteBridges":4436,
        "percentDeficientObsoleteBridges":31,
        "percentFedFundOfCapitalOutlays":38,
        "estAnnualJobRisk":10726,
        "activeHighwayProjects":1898,
        "activeTransitGrants":62,
        "fuelConsumptionGallonsPerCapita":673.12,
        "vehicleRepairOperationCostsPerDriver":315.11
      },
      "LA": {
        "milesPublicRoad":61635,
        "fillKey": "WORSE",
        "percentRoadsPoorCondition":19,
        "highwayTrafficFatalities":675,
        "bridges":13050,
        "deficientObsoleteBridges":3790,
        "percentDeficientObsoleteBridges":29,
        "percentFedFundOfCapitalOutlays":45,
        "estAnnualJobRisk":10926,
        "activeHighwayProjects":2089,
        "activeTransitGrants":153,
        "fuelConsumptionGallonsPerCapita":669.29,
        "vehicleRepairOperationCostsPerDriver":463.61
      },
      "MA": {
        "milesPublicRoad":36302,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":19,
        "highwayTrafficFatalities":337,
        "bridges":5136,
        "deficientObsoleteBridges":2694,
        "percentDeficientObsoleteBridges":52,
        "percentFedFundOfCapitalOutlays":32,
        "estAnnualJobRisk":14754,
        "activeHighwayProjects":926,
        "activeTransitGrants":193,
        "fuelConsumptionGallonsPerCapita":484.85,
        "vehicleRepairOperationCostsPerDriver":478.01
      },
      "MD": {
        "milesPublicRoad":32321,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":2,
        "highwayTrafficFatalities":485,
        "bridges":5291,
        "deficientObsoleteBridges":1418,
        "percentDeficientObsoleteBridges":27,
        "percentFedFundOfCapitalOutlays":28,
        "estAnnualJobRisk":12013,
        "activeHighwayProjects":1881,
        "activeTransitGrants":64,
        "fuelConsumptionGallonsPerCapita":542.63,
        "vehicleRepairOperationCostsPerDriver":459.56
      },
      "ME": {
        "milesPublicRoad":22873,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":7,
        "highwayTrafficFatalities":136,
        "bridges":2402,
        "deficientObsoleteBridges":791,
        "percentDeficientObsoleteBridges":33,
        "percentFedFundOfCapitalOutlays":57,
        "estAnnualJobRisk":3125,
        "activeHighwayProjects":1515,
        "activeTransitGrants":38,
        "fuelConsumptionGallonsPerCapita":651.23,
        "vehicleRepairOperationCostsPerDriver":450.86
      },
      "MI": {
        "milesPublicRoad":122085,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":22,
        "highwayTrafficFatalities":889,
        "bridges":11022,
        "deficientObsoleteBridges":3018,
        "percentDeficientObsoleteBridges":27,
        "percentFedFundOfCapitalOutlays":37,
        "estAnnualJobRisk":17824,
        "activeHighwayProjects":6123,
        "activeTransitGrants":143,
        "fuelConsumptionGallonsPerCapita":538.07,
        "vehicleRepairOperationCostsPerDriver":538.96
      },
      "MN": {
        "milesPublicRoad":138702,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":11,
        "highwayTrafficFatalities":368,
        "bridges":13137,
        "deficientObsoleteBridges":1513,
        "percentDeficientObsoleteBridges":12,
        "percentFedFundOfCapitalOutlays":37,
        "estAnnualJobRisk":11094,
        "activeHighwayProjects":1911,
        "activeTransitGrants":98,
        "fuelConsumptionGallonsPerCapita":588.55,
        "vehicleRepairOperationCostsPerDriver":369.25
      },
      "MO": {
        "milesPublicRoad":131667,
        "fillKey": "WORSE",
        "percentRoadsPoorCondition":1,
        "highwayTrafficFatalities":784,
        "bridges":24350,
        "deficientObsoleteBridges":6633,
        "percentDeficientObsoleteBridges":27,
        "percentFedFundOfCapitalOutlays":60,
        "estAnnualJobRisk":15319,
        "activeHighwayProjects":2471,
        "activeTransitGrants":94,
        "fuelConsumptionGallonsPerCapita":682.63,
        "vehicleRepairOperationCostsPerDriver":380.12
      },
      "MS": {
        "milesPublicRoad":75119,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":8,
        "highwayTrafficFatalities":630,
        "bridges":17044,
        "deficientObsoleteBridges":3636,
        "percentDeficientObsoleteBridges":21,
        "percentFedFundOfCapitalOutlays":66,
        "estAnnualJobRisk":7486,
        "activeHighwayProjects":1095,
        "activeTransitGrants":43,
        "fuelConsumptionGallonsPerCapita":722.26,
        "vehicleRepairOperationCostsPerDriver":463.79
      },
      "MT": {
        "milesPublicRoad":74880,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":5,
        "highwayTrafficFatalities":209,
        "bridges":5126,
        "deficientObsoleteBridges":882,
        "percentDeficientObsoleteBridges":17,
        "percentFedFundOfCapitalOutlays":88,
        "estAnnualJobRisk":6294,
        "activeHighwayProjects":1432,
        "activeTransitGrants":27,
        "fuelConsumptionGallonsPerCapita":750.83,
        "vehicleRepairOperationCostsPerDriver":292.13
      },
      "NC": {
        "milesPublicRoad":105869,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":11,
        "highwayTrafficFatalities":1227,
        "bridges":18168,
        "deficientObsoleteBridges":5534,
        "percentDeficientObsoleteBridges":30,
        "percentFedFundOfCapitalOutlays":37,
        "estAnnualJobRisk":17333,
        "activeHighwayProjects":3878,
        "activeTransitGrants":146,
        "fuelConsumptionGallonsPerCapita":556.87,
        "vehicleRepairOperationCostsPerDriver":340.32
      },
      "ND": {
        "milesPublicRoad":86851,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":4,
        "highwayTrafficFatalities":148,
        "bridges":4439,
        "deficientObsoleteBridges":966,
        "percentDeficientObsoleteBridges":22,
        "percentFedFundOfCapitalOutlays":75,
        "estAnnualJobRisk":3836,
        "activeHighwayProjects":1061,
        "activeTransitGrants":26,
        "fuelConsumptionGallonsPerCapita":1068.4,
        "vehicleRepairOperationCostsPerDriver":260.87
      },
      "NE": {
        "milesPublicRoad":93599,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":6,
        "highwayTrafficFatalities":181,
        "bridges":15370,
        "deficientObsoleteBridges":3765,
        "percentDeficientObsoleteBridges":24,
        "percentFedFundOfCapitalOutlays":36,
        "estAnnualJobRisk":4688,
        "activeHighwayProjects":921,
        "activeTransitGrants":34,
        "fuelConsumptionGallonsPerCapita":683.56,
        "vehicleRepairOperationCostsPerDriver":349.42
      },
      "NH": {
        "milesPublicRoad":16076,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":17,
        "highwayTrafficFatalities":90,
        "bridges":2438,
        "deficientObsoleteBridges":790,
        "percentDeficientObsoleteBridges":32,
        "percentFedFundOfCapitalOutlays":62,
        "estAnnualJobRisk":2675,
        "activeHighwayProjects":623,
        "activeTransitGrants":49,
        "fuelConsumptionGallonsPerCapita":605.89,
        "vehicleRepairOperationCostsPerDriver":404.43
      },
      "NJ": {
        "milesPublicRoad":39213,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":35,
        "highwayTrafficFatalities":627,
        "bridges":6566,
        "deficientObsoleteBridges":2334,
        "percentDeficientObsoleteBridges":36,
        "percentFedFundOfCapitalOutlays":21,
        "estAnnualJobRisk":23663,
        "activeHighwayProjects":1311,
        "activeTransitGrants":66,
        "fuelConsumptionGallonsPerCapita":564.94,
        "vehicleRepairOperationCostsPerDriver":604.88
      },
      "NM": {
        "milesPublicRoad":68384,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":1,
        "highwayTrafficFatalities":353,
        "bridges":3935,
        "deficientObsoleteBridges":654,
        "percentDeficientObsoleteBridges":17,
        "percentFedFundOfCapitalOutlays":74,
        "estAnnualJobRisk":5979,
        "activeHighwayProjects":710,
        "activeTransitGrants":84,
        "fuelConsumptionGallonsPerCapita":705.14,
        "vehicleRepairOperationCostsPerDriver":398.85
      },
      "NV": {
        "milesPublicRoad":36839,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":2,
        "highwayTrafficFatalities":246,
        "bridges":1853,
        "deficientObsoleteBridges":253,
        "percentDeficientObsoleteBridges":14,
        "percentFedFundOfCapitalOutlays":44,
        "estAnnualJobRisk":6208,
        "activeHighwayProjects":381,
        "activeTransitGrants":52,
        "fuelConsumptionGallonsPerCapita":508.21,
        "vehicleRepairOperationCostsPerDriver":241.76
      },
      "NY": {
        "milesPublicRoad":114592,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":23,
        "highwayTrafficFatalities":1169,
        "bridges":17442,
        "deficientObsoleteBridges":6775,
        "percentDeficientObsoleteBridges":39,
        "percentFedFundOfCapitalOutlays":44,
        "estAnnualJobRisk":48389,
        "activeHighwayProjects":6402,
        "activeTransitGrants":211,
        "fuelConsumptionGallonsPerCapita":352.58,
        "vehicleRepairOperationCostsPerDriver":504.9
      },
      "OH": {
        "milesPublicRoad":123247,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":15,
        "highwayTrafficFatalities":1016,
        "bridges":27015,
        "deficientObsoleteBridges":6647,
        "percentDeficientObsoleteBridges":25,
        "percentFedFundOfCapitalOutlays":39,
        "estAnnualJobRisk":22308,
        "activeHighwayProjects":3789,
        "activeTransitGrants":217,
        "fuelConsumptionGallonsPerCapita":559.02,
        "vehicleRepairOperationCostsPerDriver":413.37
      },
      "OK": {
        "milesPublicRoad":112808,
        "fillKey": "WORSE",
        "percentRoadsPoorCondition":18,
        "highwayTrafficFatalities":696,
        "bridges":22912,
        "deficientObsoleteBridges":5828,
        "percentDeficientObsoleteBridges":25,
        "percentFedFundOfCapitalOutlays":67,
        "estAnnualJobRisk":10114,
        "activeHighwayProjects":2059,
        "activeTransitGrants":81,
        "fuelConsumptionGallonsPerCapita":691.01,
        "vehicleRepairOperationCostsPerDriver":626.31
      },
      "OR": {
        "milesPublicRoad":59148,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":6,
        "highwayTrafficFatalities":331,
        "bridges":7656,
        "deficientObsoleteBridges":1754,
        "percentDeficientObsoleteBridges":23,
        "percentFedFundOfCapitalOutlays":58,
        "estAnnualJobRisk":8824,
        "activeHighwayProjects":1219,
        "activeTransitGrants":80,
        "fuelConsumptionGallonsPerCapita":519.29,
        "vehicleRepairOperationCostsPerDriver":236.4
      },
      "PA": {
        "milesPublicRoad":119771,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":15,
        "highwayTrafficFatalities":1286,
        "bridges":22660,
        "deficientObsoleteBridges":9561,
        "percentDeficientObsoleteBridges":42,
        "percentFedFundOfCapitalOutlays":38,
        "estAnnualJobRisk":30672,
        "activeHighwayProjects":4634,
        "activeTransitGrants":198,
        "fuelConsumptionGallonsPerCapita":512.52,
        "vehicleRepairOperationCostsPerDriver":424.14
      },
      "RI": {
        "milesPublicRoad":6484,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":41,
        "highwayTrafficFatalities":66,
        "bridges":766,
        "deficientObsoleteBridges":433,
        "percentDeficientObsoleteBridges":57,
        "percentFedFundOfCapitalOutlays":74,
        "estAnnualJobRisk":3595,
        "activeHighwayProjects":783,
        "activeTransitGrants":19,
        "fuelConsumptionGallonsPerCapita":415.53,
        "vehicleRepairOperationCostsPerDriver":661.94
      },
      "SC": {
        "milesPublicRoad":65997,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":5,
        "highwayTrafficFatalities":828,
        "bridges":9275,
        "deficientObsoleteBridges":1920,
        "percentDeficientObsoleteBridges":21,
        "percentFedFundOfCapitalOutlays":52,
        "estAnnualJobRisk":10715,
        "activeHighwayProjects":1508,
        "activeTransitGrants":88,
        "fuelConsumptionGallonsPerCapita":711.71,
        "vehicleRepairOperationCostsPerDriver":306.36
      },
      "SD": {
        "milesPublicRoad":82459,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":6,
        "highwayTrafficFatalities":111,
        "bridges":5875,
        "deficientObsoleteBridges":1459,
        "percentDeficientObsoleteBridges":25,
        "percentFedFundOfCapitalOutlays":64,
        "estAnnualJobRisk":4259,
        "activeHighwayProjects":1228,
        "activeTransitGrants":23,
        "fuelConsumptionGallonsPerCapita":797.4,
        "vehicleRepairOperationCostsPerDriver":339.48
      },
      "TN": {
        "milesPublicRoad":95492,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":6,
        "highwayTrafficFatalities":946,
        "bridges":20058,
        "deficientObsoleteBridges":3802,
        "percentDeficientObsoleteBridges":19,
        "percentFedFundOfCapitalOutlays":63,
        "estAnnualJobRisk":13361,
        "activeHighwayProjects":3032,
        "activeTransitGrants":121,
        "fuelConsumptionGallonsPerCapita":638.93,
        "vehicleRepairOperationCostsPerDriver":225.34
      },
      "TX": {
        "milesPublicRoad":312911,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":8,
        "highwayTrafficFatalities":3016,
        "bridges":52561,
        "deficientObsoleteBridges":9998,
        "percentDeficientObsoleteBridges":19,
        "percentFedFundOfCapitalOutlays":35,
        "estAnnualJobRisk":57917,
        "activeHighwayProjects":3772,
        "activeTransitGrants":344,
        "fuelConsumptionGallonsPerCapita":640.48,
        "vehicleRepairOperationCostsPerDriver":372.61
      },
      "UT": {
        "milesPublicRoad":45634,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":4,
        "highwayTrafficFatalities":240,
        "bridges":2974,
        "deficientObsoleteBridges":437,
        "percentDeficientObsoleteBridges":15,
        "percentFedFundOfCapitalOutlays":43,
        "estAnnualJobRisk":6125,
        "activeHighwayProjects":525,
        "activeTransitGrants":34,
        "fuelConsumptionGallonsPerCapita":556.74,
        "vehicleRepairOperationCostsPerDriver":294.79
      },
      "VA": {
        "milesPublicRoad":74461,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":6,
        "highwayTrafficFatalities":764,
        "bridges":13765,
        "deficientObsoleteBridges":3588,
        "percentDeficientObsoleteBridges":26,
        "percentFedFundOfCapitalOutlays":67,
        "estAnnualJobRisk":17228,
        "activeHighwayProjects":6595,
        "activeTransitGrants":121,
        "fuelConsumptionGallonsPerCapita":588.57,
        "vehicleRepairOperationCostsPerDriver":334.35
      },
      "VT": {
        "milesPublicRoad":14290,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":14,
        "highwayTrafficFatalities":55,
        "bridges":2731,
        "deficientObsoleteBridges":903,
        "percentDeficientObsoleteBridges":33,
        "percentFedFundOfCapitalOutlays":78,
        "estAnnualJobRisk":3091,
        "activeHighwayProjects":1353,
        "activeTransitGrants":31,
        "fuelConsumptionGallonsPerCapita":606.78,
        "vehicleRepairOperationCostsPerDriver":378.86
      },
      "WA": {
        "milesPublicRoad":83743,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":22,
        "highwayTrafficFatalities":457,
        "bridges":7902,
        "deficientObsoleteBridges":2066,
        "percentDeficientObsoleteBridges":26,
        "percentFedFundOfCapitalOutlays":33,
        "estAnnualJobRisk":13561,
        "activeHighwayProjects":1630,
        "activeTransitGrants":202,
        "fuelConsumptionGallonsPerCapita":482.44,
        "vehicleRepairOperationCostsPerDriver":537.47
      },
      "WI": {
        "milesPublicRoad":115018,
        "fillKey": "WORST",
        "percentRoadsPoorCondition":21,
        "highwayTrafficFatalities":582,
        "bridges":14088,
        "deficientObsoleteBridges":1970,
        "percentDeficientObsoleteBridges":14,
        "percentFedFundOfCapitalOutlays":46,
        "estAnnualJobRisk":12480,
        "activeHighwayProjects":4057,
        "activeTransitGrants":68,
        "fuelConsumptionGallonsPerCapita":561.86,
        "vehicleRepairOperationCostsPerDriver":502.1
      },
      "WV": {
        "milesPublicRoad":38646,
        "fillKey": "BETTER",
        "percentRoadsPoorCondition":12,
        "highwayTrafficFatalities":337,
        "bridges":7125,
        "deficientObsoleteBridges":2514,
        "percentDeficientObsoleteBridges":35,
        "percentFedFundOfCapitalOutlays":67,
        "estAnnualJobRisk":6766,
        "activeHighwayProjects":1526,
        "activeTransitGrants":45,
        "fuelConsumptionGallonsPerCapita":594.31,
        "vehicleRepairOperationCostsPerDriver":469.29
      },
      "WY": {
        "milesPublicRoad":28253,
        "fillKey": "BEST",
        "percentRoadsPoorCondition":2,
        "highwayTrafficFatalities":135,
        "bridges":3099,
        "deficientObsoleteBridges":723,
        "percentDeficientObsoleteBridges":23,
        "percentFedFundOfCapitalOutlays":68,
        "estAnnualJobRisk":3818,
        "activeHighwayProjects":854,
        "activeTransitGrants":18,
        "fuelConsumptionGallonsPerCapita":1171.22,
        "vehicleRepairOperationCostsPerDriver":301.99
      }
    }
});

projects.render();
