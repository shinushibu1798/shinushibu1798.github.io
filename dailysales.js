var strings= ["1/1/2016","1/2/2016","1/3/2016","1/4/2016","1/5/2016","1/6/2016","1/7/2016",
"1/8/2016","1/9/2016","1/10/2016","1/11/2016","1/12/2016","1/13/2016","1/14/2016","1/15/2016",
"1/16/2016","1/17/2016","1/18/2016","1/19/2016","1/20/2016","1/21/2016","1/22/2016","1/23/2016",
"1/24/2016","1/25/2016","1/26/2016","1/27/2016","1/28/2016","1/29/2016","1/30/2016","1/31/2016"]

Highcharts.chart('container NE', {
    title: {
        text: 'Daily Sales For January 2016 - North East'
    },
    yAxis: {
        title: {
            text: 'Sales'
        }
    },
    xAxis: {
        categories: ["1/1/2016","","","","","","","1/8/2016","","","","","","","1/15/2016","","","",
        "","","","1/22/2016","","","","","","","1/29/2016","",""],
        crosshair: {
            enabled: true,
            width: 2
        }
    },
    series: [{
        data: [37240,36258,37007,37590,38036,38187,38095,34685,35059,36906,36893,37243,37476,
            37977,36130,35147,38330,35629,38094,34610,35293,35862,38019,38460,37295,35164,36414,
            35179,38474,37323,36880],
        name: 'Hamburger'
    }, {
        data: [16077,14726,15103,16413,16199,16386,16045,15058,14585,16905,16771,15642,15343,16256,
            16352,15408,16272,15691,15224,17072,16677,16553,14905,15743,16769,17046,16974,16900,14468,
            15347,15892],
        name: 'Chicken fillet'
    }, {
        data: [8446,7950,8397,9537,10123,8410,11791,8179,7193,10580,10091,9247,10250,12264,7127,7174,
            9313,8441,9101,8739,11108,6865,7271,9887,9068,9835,10656,12027,7554,7413,11201],
        name: 'Fish fillet'
    }],
    plotOptions: {
        series: {
            marker: {
                enabled: false,
                fillColor: '#ED1C22',
                lineColor: '#FFC20F'
            }
        }
    },
    tooltip: {
        formatter: function() {
                    var idx = this.point.index;
                    var point = this.point;
        return `<b>${strings[idx]}</b>
        <br>${point.series.name}`;

            }
    },
    chart: {
        // Explicitly tell the width and height of a chart
        width: 580
    }

});
Highcharts.chart('container SW', {
    title: {
        text: 'Daily Sales For January 2016 - South West'
    },
    yAxis: {
        title: {
            text: 'Sales'
        }
    },
    xAxis: {
        categories: ["1/1/2016","","","","","","","1/8/2016","","","","","","","1/15/2016","","","",
        "","","","1/22/2016","","","","","","","1/29/2016","",""],
        crosshair: {
            enabled: true,
            width: 2
        }
    },
    series: [{
        data: [39249,38106,35494,33666,33528,33608,33007,38964,33637,39361,35750,35040,35242,36682,
            38272,36955,36046,37242,35703,38221,38971,37796,35544,36372,33006,38405,38709,35194,34861,
            35504,36430],
        name: 'Hamburger'
    }, {
        data: [16565,14003,15987,15114,13721,14322,15068,13608,14035,14788,16565,16132,14846,14869,
            15946,15204,16032,16313,16032,14952,14999,16330,14326,15520,16468,13150,16688,12996,16469,
            13307,14213],
        name: 'Chicken fillet'
    }, {
        data: [10204,7316,8683,8429,10085,9652,8985,10985,7616,7105,9506,8424,9316,8832,10360,8140,
            7152,9602,8425,9944,9787,11615,9015,7722,9428,8632,9102,9959,10941,7877,8302],
        name: 'Fish fillet'
    }],
    plotOptions: {
        series: {
            marker: {
                enabled: false,
                fillColor: '#ED1C22',
                lineColor: '#FFC20F'
            }
        }
    },
    tooltip: {
        formatter: function() {
                    var idx = this.point.index;
                    var point = this.point;
        return `<b>${strings[idx]}</b>
        <br>${point.series.name}`;

            }
    },
    chart: {
        // Explicitly tell the width and height of a chart
        width: 580
    }
});
Highcharts.chart('container NW', {
    title: {
        text: 'Daily Sales For January 2016 - North West'
    },
    yAxis: {
        title: {
            text: 'Sales'
        }
    },
    xAxis: {
        categories: ["1/1/2016","","","","","","","1/8/2016","","","","","","","1/15/2016","","","",
        "","","","1/22/2016","","","","","","","1/29/2016","",""],
        crosshair: {
            enabled: true,
            width: 2
        }
    },
    series: [{
        data: [37271,35021,35369,37993,37854,36343,35901,36279,38059,35332,37802,36105,38015,36866,
            35068,34234,35821,36945,33663,35313,34489,37919,33703,33234,36311,37012,35904,34396,34071,
            35644,33681],
        name: 'Hamburger'
    }, {
        data: [16819,14705,16591,14535,14590,16302,15408,14465,13804,15809,15222,16518,16162,15822,
            16561,15179,14858,14479,13625,14239,16771,14578,15514,14814,17134,17253,15021,17001,14691,
            16680,16929],
        name: 'Chicken fillet'
    }, {
        data: [9924,9028,8105,8034,9879,9360,8834,10639,8589,7702,8566,8555,9872,8617,10503,8543,7177,
            9107,8765,9474,9876,10598,8058,7680,8892,7952,8609,9768,10364,8465,8369],
        name: 'Fish fillet'
    }],
    plotOptions: {
        series: {
            marker: {
                enabled: false,
                fillColor: '#ED1C22',
                lineColor: '#FFC20F'
            }
        }
    },
    tooltip: {
        formatter: function() {
                    var idx = this.point.index;
                    var point = this.point;
        return `<b>${strings[idx]}</b>
        <br>${point.series.name}`;

            }
    },
    chart: {
        // Explicitly tell the width and height of a chart
        width: 580
    }
});
Highcharts.chart('container SE', {
    title: {
        text: 'Daily Sales For January 2016 - South East'
    },
    yAxis: {
        title: {
            text: 'Sales'
        }
    },
    xAxis: {
        categories: ["1/1/2016","","","","","","","1/8/2016","","","","","","","1/15/2016","","","",
        "","","","1/22/2016","","","","","","","1/29/2016","",""],
        crosshair: {
            enabled: true,
            width: 2
        }
    },
    series: [{
        data: [35967,36398,34864,36601,36661,34374,35895,35441,36194,33847,34769,35134,37190,34698,
            35856,36609,33645,34210,34634,34044,34814,34969,36681,35579,35061,32933,37051,35124,35301,
            34985,35505],
        name: 'Hamburger'
    }, {
        data: [13955,15089,13919,14528,15132,14696,14981,13411,15525,15282,15528,14510,15693,13358,
            15537,15241,15273,13589,15295,13408,15293,15744,13458,14646,13521,15373,15461,14684,14829,
            14366,14939],
        name: 'Chicken fillet'
    }, {
        data: [11734,8005,7011,8201,8874,9674,8370,11630,6890,7520,9312,7735,8416,8826,11533,8346,
            7647,8793,8436,8426,8637,11709,8189,7167,8545,8565,8954,9376,12241,7727,7269],
        name: 'Fish fillet'
    }],
    plotOptions: {
        series: {
            marker: {
                enabled: false,
                fillColor: '#ED1C22',
                lineColor: '#FFC20F'
            }
        }
    },
    tooltip: {
        formatter: function() {
                    var idx = this.point.index;
                    var point = this.point;
        return `<b>${strings[idx]}</b>
        <br>${point.series.name}`;

            }
    },
    chart: {
        // Explicitly tell the width and height of a chart
        width: 580
    }
});
Highcharts.chart('container C', {
    title: {
        text: 'Daily Sales For January 2016 - Central'
    },
    yAxis: {
        title: {
            text: 'Sales'
        }
    },
    xAxis: {
        categories: ["1/1/2016","","","","","","","1/8/2016","","","","","","","1/15/2016","","","",
        "","","","1/22/2016","","","","","","","1/29/2016","",""],
        crosshair: {
            enabled: true,
            width: 2
        }
    },
    series: [{
        data: [35689,37178,35855,36168,36837,37790,36061,34898,37192,35334,37905,35045,34532,36526,
            37012,36274,36386,36938,36811,35951,37177,37222,35494,36777,37700,37465,36245,35524,35109,
            36614,34767],
        name: 'Hamburger'
    }, {
        data: [13499,14256,15557,15699,15420,13810,13436,15544,13619,14447,14909,14419,15537,14421,
            13057,15202,15493,14565,13162,15017,13464,15335,15609,13787,14362,13658,13868,15171,14045,
            15210,15380],
        name: 'Chicken fillet'
    }, {
        data: [11232,9152,8406,7940,8607,10228,8993,12463,6799,7583,9037,8418,9279,7804,11764,9431,
            7112,9250,7773,8276,9376,12847,8713,6881,9227,9194,8185,10200,12377,7632,7440],
        name: 'Fish fillet'
    }],
    plotOptions: {
        series: {
            marker: {
                enabled: false,
                fillColor: '#ED1C22',
                lineColor: '#FFC20F'
            }
        }
    },
    tooltip: {
        formatter: function() {
                    var idx = this.point.index;
                    var point = this.point;
        return `<b>${strings[idx]}</b>
        <br>${point.series.name}`;

            }
    },
    chart: {
        // Explicitly tell the width and height of a chart
        width: 1210
    }
});