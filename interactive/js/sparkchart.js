function sparkchart(selection) {
  var margin = {top: 12, right: 1, bottom: 2, left: 1},
      width = 140 - margin.left - margin.right,
      height = 36 - margin.top - margin.bottom,
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
  yscale.domain([d3.min(_.pluck(data, 'value')), d3.max(_.pluck(data, 'value'))]);

  selection.style("width", width + "px");

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

function sparkchart_canvas(selection) {
  var data = selection.data()[0].map(function(d) {
    return {
      value: parseFloat(d.value),
      period: d.period,
      year: parseInt(d.year)
    }
  });

  var margin = {top: 1, right: 1, bottom: 2, left: 1},
      width = data.length,
      height = 56 - margin.top - margin.bottom,
      xscale = d3.scale.linear().range([margin.left,width]),
      yscale = d3.scale.linear().range([height,margin.top]);
  var max = d3.max(_.pluck(data, 'value'));
  var min = d3.min(_.pluck(data, 'value'));

  xscale.domain([0, data.length-1]);
  yscale.domain([0, max]);

  var canvas = selection.append("canvas")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)[0][0];
  var ctx = canvas.getContext("2d");

  ctx.strokeStyle = "#368";
  ctx.strokeWdith= "1px";
  ctx.beginPath
  _(data).each(function(d,i) {
    ctx.moveTo(xscale(i), yscale(0));
    ctx.lineTo(xscale(i), yscale(d.value));
  });
  ctx.stroke();
  /*
  _(data).each(function(d,i) {
    ctx.fillRect(xscale(i), yscale(d.value), 1, 1);
  });
  */
};

