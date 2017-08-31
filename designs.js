// Select color input
$('td').on("click", function() {
  console.log("row color");
  $("td").css("color", "blue");
});


// Select size input
var sizepicker = $('#sizePicker');
var pixelcanvas = $('#pixel_canvas');

// When size is submitted by the user, call makeGrid()

function makeGrid(id, height, width) {
  var table = $(id);
  console.log(table);

  for (i = 0; i < height; i++) {
    var tr = $('tr class="foo"></tr>')
    table.append('<tr class="foo"></tr>')

  }

  $.each($("tr.foo"),function (index, tr) {
    for (j = 0; j < width; j++) {
      tr.append('<td class="bar"></td>')
    }
  })
}


$('#submit').on("click", function () {
  console.log("In callback");
  var height = $('#input_height').val()
  var width = $('#input_width').val()
  var id = '#pixel_canvas'
  makeGrid(id, height, width);
});
