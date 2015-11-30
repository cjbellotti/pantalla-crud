App.Views.Crud = Backbone.View.extend({

  className : "modal fade",

  initialize : function (config) {

    this.model = config.model;
    this.template = swig.compile(getTemplate('templates/crud-screen.html'));
    this.fields = config.fields;
    this.title = config.title;

  },

  events : {
    "click .crud-ok" : "save",
  },

  save : function () {
  },

  render : function () {

    var content = $('<div class="row"/>');

    var formFields = [];
    for (var field in this.fields) {

      //var data = this.model.get(field) || "";
      var data = "";
      var id = field.toLowerCase().replace('_', '-');
      var formGroup = $('<div class="form-group"/>');
      formGroup.append('<label for="' + id + '" class="col-lg-3 control-label">' + field + '</label>');
      var divField = $('<div class="col-lg-9"/>');
      formGroup.append(divField);

      if (this.fields[field].options) {

        var options = $('<select id="' + id + '" class="form-control"/>');
        for (var optionIndex in this.fields[field].options) {

          var description = this.fields[field].options[optionIndex].content;
          var value = this.fields[field].options[optionIndex].value;
          var item = $('<option value="' + value + '">' + description + '</option>');
          options.append(item);

        }

        divField.append(options);

      } else {

        divField.append('<input type="text" class="form-control" id="' + id + '" name="' + id + '" maxlength="20" value="'+ data +'">');

      }
      formFields.push(formGroup);

    }

    var fieldIndex = 0;
    var colClass = 'col-md-12';
    var i = _.keys(this.fields).length;

    do {

      var col = $('<div/>');
      var form = $('<form class="form-horizontal" role="form" action=""/>');
      col.append(form);

      for (var j = 0; j < 6 && fieldIndex < formFields.length ; j++) {
        form.append(formFields[fieldIndex]);
        fieldIndex++;
      }

      if (fieldIndex < formFields.length)
        colClass = 'col-md-6'
      col.addClass(colClass);

      content.append(col);

      i -= 6;

    } while(i > 0);

    this.$el.html(this.template({
      title : this.title
    }));

    this.$el.find('.modal-body').html(content);

  }

});
