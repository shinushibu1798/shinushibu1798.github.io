//I'm not hosting so I could not load any of my data from txt files. So I did most of my processing through python
// and copy pasted it.
var radar_data = [['action',5149166370],
    ['adventure',4963997213],
    ['sci-fi',4568716681],
    ['drama',1422442259],
    ['comedy',843560803],
    ['crime',687729153],
    ['thriller',579976990],
    ['mystery',504992368],
    ['romance',379981888]];
var i;
chartLabels = []
chartValues = []
for (i = 0; i < radar_data.length; i++) {
    chartLabels.push(radar_data[i][0])
    chartValues.push(radar_data[i][1])
}
console.log(chartLabels);
Highcharts.chart('container1', {

    chart: {
        polar: true
    },

    title: {
        text: 'Robert Downey Jr.\'s Domestic Box Office Per Genre'
    },

    subtitle: {
        text: 'Projection of RDJ\'s Domestics Box Office Sales for the top 9 genres he has acted in'
    },

    pane: {
        startAngle: 0,
        endAngle: 360
    },
    tooltip: {
        formatter: function (pointInterval, tooltip) {
            var point = '<span style="color:' + this.series.color + '">\u25CF</span> ' + '<b>' +'$'+ this.y + '</b><br/>';
            return point;
        }
    },

    xAxis: {
        tickInterval: 45,
        tickColor: '#FFFFFF',
        min: 0,
        max: 360,
        labels: {
            formatter: function () {
                return chartLabels.shift();
            }
        }
    },

    yAxis: {
        min: 0
    },

    plotOptions: {
        series: {
            pointStart: 0,
            pointInterval: 45,
            color: '#FF005F'
        },
        column: {
            pointPadding: 0,
            groupPadding: 0
        }
    },

    series: [{
        type: 'line',
        name: 'line',
        data: chartValues
    }]
});
var categories = [
    '2019', '2018', '2017', '2016',
    '2015', '2014', '2013', '2012', '2011',
    '2010', '2009', '2008', '2007', '2006',
    '2005', '2004', '2003', '2000', '1999',
    '1998', '1990', '1985'];
International = [-1939427564,-1369544272, -545965784, -745211944,-943800000,-51843932,-805797258,-895455078,-357000000,-422741781
,-321612836,-472940095,-55632644,-31769047,-34624580,-1347437,-81995195,-14033031,-32505132,-45200000,-2407668,-15100000]

Domestic = [858373000,678815482,334201140,408084349,459005868,78543391,409013994,623357910,186848418,412972374
,240748837,563926352,42790733,67366196,35801759,188392,60031754,19393557,71662074,57167405,31053601,23834048]

Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Robert Downey Jr.\'s International VS Domestic Box Office'
    },
    subtitle: {
        text: 'Comparision of RDJ\'s International VS Domestic Box Office Sales'
    },
    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var index = point.index + 1,
                    category = point.category,
                    val = Math.abs(point.y),
                    series = point.series.name;

                return index + ', Box Office ' + category + ', $' + val + '' + series + '.';
            }
        }
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        },
        accessibility: {
            description: 'BoxOffice (International)'
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        },
        accessibility: {
            description: 'BoxOffice (Domestic)'
        }
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return '$'+Math.abs(this.value);
            }
        },
        accessibility: {
            description: 'Percentage population',
            rangeDescription: 'Range: 0 to 5%'
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ', year ' + this.point.category + '</b><br/>' +
                'Box Office: '+ '$'+ Highcharts.numberFormat(Math.abs(this.point.y), 1);
        }
    },

    series: [{
        name: 'International',
        data: International
    }, {
        name: 'Domestic',
        data: Domestic
    }]
});

//var text was preprocessed through a python file. Scrapped comments from a youtube video to get the text.
var text = 'rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj rdj robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert robert love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like like tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony tony stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark stark man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man man downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey downey 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr jr emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional emotional one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even even know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know know best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best best enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough enough great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor actor iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron iron oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh oh'
var lines = text.split(/[,\. ]+/g),
    data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('container3', {
    series: [{
        type: 'wordcloud',
        data: data,
        name: 'Occurrences'
    }],
    title: {
        text: 'Wordcloud of What People think of Robert Downey Jr.'
    }
});