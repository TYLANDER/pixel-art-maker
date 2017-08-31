var makeGrid = function (id, height, width) {
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

$(document).ready( function() {

  console.log("in document")

  $('td').on("click", function() {
    console.log("row color");
    $("td").css("color", "blue");
  });


  $('#submit').on("click", function () {
    console.log("In submit callback");
    var height = $('#input_height').val()
    console.log(height)
    var width = $('#input_width').val()
    console.log(width)
    var id = '#pixel_canvas'
    makeGrid(id, height, width);
  });

})
