function manipulateData(array) {
  const data = array;
  for (var i in data) {
    if (data[i].category == 0 || data[i].category == null) {
      data[i].category = "Other";
    }
    data[i].element = data[i].category.toLowerCase().replace(/\W/g, "_");
    data[i].identifier = data[i].element + "-key";
  }
  return data;
}

module.exports = { manipulateData };
