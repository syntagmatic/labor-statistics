var utils = {};

utils.date_value = function(data) {
  var years = _.pluck(data, "Year");

  return _(years).chain()
    .map(function(year,i) {
      return _(months).map(function(month,j) {
        return {
          date: (new Date(year, months.indexOf(month))).getTime(),
          value: data[i][month]
        }
      });
    })
    .flatten()
    .reject(function(d) {
      return d.value == " ";
    })
    .value();
};

utils.trim_table = function(table) { 
  return _(table).map(function(d) { 
    for (k in d)
      d[k] = _.str.trim(d[k]);
    return d;
  });
};

utils.upload_tsv = function(elem_id, callback) {
  var uploader = document.getElementById(elem_id);  
  var reader = new FileReader();

  reader.onload = function(e) {
    var contents = e.target.result;
    var data = d3.tsv.parse(contents);
    callback(data);
  };

  uploader.addEventListener("change", handleFiles, false);  

  function handleFiles() {
    var file = this.files[0];
    reader.readAsText(file);
  };
};
