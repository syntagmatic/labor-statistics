function sparkchart(selection) {
  var margin = {top: 0, right: 0, bottom: 0, left: 0},
      width = 120 - margin.left - margin.right,
      height = 32 - margin.top - margin.bottom,
      xscale = d3.scale.linear().range([0,width]),
      yscale = d3.scale.linear().range([height,0]);

  var data = selection.data()[0].map(function(d) {
    return {
      value: parseFloat(d.value),
      period: d.period,
      year: parseInt(d.year)
    }
  });

  xscale.domain([0, data.length-1]);
  yscale.domain([0.95*d3.min(_.pluck(data, 'value')), 1.05*d3.max(_.pluck(data, 'value'))]);

  var svg = selection.append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("svg:path")
      .attr("class", "line")
      .attr("d", d3.svg.line()
      .x(function(d,i) { return xscale(i); })
      .y(function(d) { return yscale(d.value); }));
};
