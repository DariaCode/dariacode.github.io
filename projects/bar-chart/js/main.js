
/* 	Sends http request to the specified url to load .json file 
or data and executes callback function with parsed json data objects. */

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json").then((data) => {
    createChart(data.data)
});

function createChart(dataset) {
    const w = 800, // width
        h = 400, // height
        p = 50, // padding
        chartW = (w - 2 * p) / 275; //chart's width

    const tooltip = d3.select(".chartBoard")
        .append("div")
        .attr("id", "tooltip");

    const svg = d3.select(".chartBoard")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    // the function creates a new array - data in the new format, value, data in the old format
    const newData = dataset.map(item => {
        return [new Date(item[0]), item[1], item[0]];
    });

    // CREATION AXISES

    // Time scales are similar to linear scales, but use Dates instead of numbers
    const xScale = d3.scaleTime()
        .domain([
            d3.min(newData, d => d[0]),
            d3.max(newData, d => d[0])
        ])
        .range([p, w - p]);

    const yScale = d3.scaleLinear()
        .domain([d3.max(dataset, (d) => d[1]), 0])
        .range([0, h - 2 * p]);


    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append("g")
        .attr("id", "x-axis")
        .style("transform", "translate(0, " + (h - p) + "px )")
        .call(xAxis);

    svg.append("g")
        .attr("id", "y-axis")
        .style("transform", "translate(" + p + "px," + p + "px )")
        .call(yAxis);

    // Handle quarters 
    function handleQuarters(date) {
        const quarter = date.split("-");
        if (quarter[1] == 1) return `Q1 of ${quarter[0]}`;
        if (quarter[1] == 4) return `Q2 of ${quarter[0]}`;
        if (quarter[1] == 7) return `Q3 of ${quarter[0]}`;
        return `Q4 of ${quarter[0]}`;
    }
    // HANDLE CHART DATA 
    svg.selectAll("rect")
        .data(newData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("width", chartW)
        .attr("height", d => h - 2 * p - yScale(d[1]))
        .attr("fill", "#0ABFBC")
        .attr("x", (d, i) => 1 + p + i * chartW)
        .attr("y", d => p + yScale(d[1]))
        .attr("data-date", d => d[2])
        .attr("data-gdp", d => d[1])
        .on("mouseover", function (d, i) {
            tooltip.html(handleQuarters(d[2]) + "<br>" + d[1])
                .style('display', 'block')
                .attr("data-date", d[2])
                .style("left", (i * chartW) + 120 + 'px')
                .style("top", "290px");
        })
        .on("mouseout", function (d, i) {
            tooltip.style("display", "none");
        });
};