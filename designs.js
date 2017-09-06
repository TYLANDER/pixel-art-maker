// I declare the table var and set it to pixel_canvas, and its a constant
const table = document.getElementById("pixel_canvas");

//use an event listener to submit. And tie that to the makeGrid function that does all the heavy lifting.
document.getElementById("submit").addEventListener("click", function makeGrid() {

    //clears the table on click.
    table.innerHTML = "";

    //pull the height and width element values.
    const width = document.getElementById("input_width").value;

    const height = document.getElementById("input_height").value;

    // dynamically Build a new grid with a for loop and nested while loop.

    for (let i = 0; i < height; i++) {
        const rows = document.createElement("tr");

        let j = 0;

        while (j < width) {
            const cells = document.createElement("td");

            j++;

            rows.appendChild(cells);
        }

        table.appendChild(rows);
    }
    associateCellEvents();
});

//Traverse the table and call the changeColour function on the table cells
const associateCellEvents = () => {
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++)
            //event listener for cell click routes to changeColour function.
            table.rows[i].cells[j].onclick = function() {
                changeColour(this);
            };
    }
};
//I love es6 functions
const changeColour = cell => {
    const colour = document.getElementById("colorPicker").value;
    //assigns cell value based on colorPicker color value
    cell.style.backgroundColor = colour;
};
// require width value or it returns a warning.
const validateForm = () => {
    return false;
};
