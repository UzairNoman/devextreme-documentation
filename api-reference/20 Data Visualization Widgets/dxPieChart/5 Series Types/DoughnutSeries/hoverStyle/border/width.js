﻿var dataSource = [
    { continent: 'Africa', population: 1022234000 },
    { continent: 'Europe', population: 738199000 },
    { continent: 'Australia', population: 29127000 },
    { continent: 'North America', population: 542056000 },
    { continent: 'Asia', population: 4164252000 },
    { continent: 'Antarctica', population: 4490 },
    { continent: 'South America', population: 392555000 }
];

$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            type: 'doughnut',
            argumentField: 'continent',
            valueField: 'population',
            label: {
                visible: true,
                format: {
                    type: 'largeNumber',
                    precision: 2
                },
                connector: { visible: true }
            },
            hoverStyle: {
                border: {
                    visible: 'true',
                    width: 1
                }
            }
        },
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        title: 'Population by Continent',
        palette: ['#8B7355', '#EE9A49', '#808000', '#A2CD5A', '#DEB887', '#87CEFA', '#BDBDBD']
    });
});