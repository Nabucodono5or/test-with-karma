function apiService() {
  return {
    getData: getData,
  };

  function getData() {
    return "algum dado";
  }
}

export default apiService