
    // Function to generate a trend graph for a single metric
    function generateLineChart (DATA_SET, DIV) {
    	nv.addGraph(function() {
        	var chart = nv.models.lineChart()
                .useInteractiveGuideline(true)
                .x(function(d) { return d[0] })
                .y(function(d) { return d[1] })
                .color(d3.scale.category10().range())
                .transitionDuration(300)
                .clipVoronoi(true)
                .forceY([0]) // Lets start each Y axis at 0
                .margin({top: 35, right: 70, bottom: 70, left: 70});
        chart.xAxis.tickFormat(function(d) {return d3.time.format('%m/%d %I:%M %p')(new Date(d))});
        chart.xDomain([START_TIME,END_TIME]);
        chart.xAxis.rotateLabels(-45);
        chart.yAxis.tickFormat(d3.format(',.2f'));
        chart.color( ['#747c96','#d47385','#89a676','#c8b453'] )
        chart.xScale(d3.time.scale()); // Evenly scale the time values to align with data points
        d3.select(DIV).datum(DATA_SET).call(chart);
        //Rebuild the chart when the window reloaded
        nv.utils.windowResize(chart.update);
        // Log the new window state
        chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
        // return the chart to the function to get loaed
        return chart;
    	});
 	}
