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

function horizon_sparkchart(selection) {
};

/* Looping */

function render() {
  var i = Math.min(queue.length, 12);
  while (i-- > 0) {
    queue.pop()();
  }
};

window.requestAnimFrame =   window.requestAnimationFrame || 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame    || 
  window.oRequestAnimationFrame      || 
  window.msRequestAnimationFrame     || 
  function(/* function */ callback, /* DOMElement */ element){
    window.setTimeout(callback, 16);
  };

function startLoop() {
  (function animloop(){
    requestAnimFrame(animloop);
    render();
  })();
}
