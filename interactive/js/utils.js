function date_value(data) {
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
