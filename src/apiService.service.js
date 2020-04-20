function apiService($q) {
  return {
    getData: getData,
  };

  function getData() {
    let itens = [];
    let deferred = $q.defer();
    deferred.resolve(itens);

    return deferred.promise;
  }
}

export default apiService;
