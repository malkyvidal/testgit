App = (function () {
  var id = 0;

  return {
    getId: function () {
      id++;
      return id;
    },
    reset: function () {
      id = 0;
    },
  };
})();
