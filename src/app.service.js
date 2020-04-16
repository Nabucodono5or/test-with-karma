function appFactory() {
  return {
    get: get,
  };

  function get() {
    return "Olá mundo";
  }
}

export default appFactory;
