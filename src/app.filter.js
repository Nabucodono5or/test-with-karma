function lengthFilter() {
  return filter;

  function filter(text) {
    return ("" + (text || "")).length;
  }
}

export default lengthFilter;
