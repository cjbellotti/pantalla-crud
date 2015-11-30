var templateCache = {};
function getTemplate(path) {

  if (!templateCache[path]) {

    $.ajax({

      url : path,
      async : false,
      success : function (content) {
        templateCache[path] = content;
      }
    });
  }

  return templateCache[path];

}
