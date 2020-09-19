// Add all data to one singel Array with each student as object
// Fix the row editing problem, when edited it should change the data in the array
// Student marks table use data from updated "AJAX-DATA" called myArray(change to Marks Array)
// This will be data destructured from the main array
// wgen marks table is filtered the click function stops working

// LOCAL STORAGE DATA
var ajax_data = [{
  fname: "Kevin",
  lname: "van Deventer",
  age: 16,
  level: "B",
  avg: 75,
  engAvg: 65,
  khmerAvg: 88,
  absc: 3,
  subjects: {
    english: 55,
    khmer: 47,
    maths: 62,
    science: 85,
    history: 77,
    average: 0,
    tests:6,
  }
},
{
  fname: "Claudia",
  lname: "Martin",
  age: 12,
  level: "B",
  avg: 47,
  engAvg: 65,
  khmerAvg: 88,
  absc: 3,
  subjects: {
    english: 68,
    khmer: 33,
    maths: 55,
    science: 64,
    history: 92,
    average: 0
  }
},
{
  fname: "Josh",
  lname: "Pretorius",
  age: 13,
  level: "C",
  avg: 69,
  engAvg: 65,
  khmerAvg: 88,
  absc: 3,
  subjects: {
    english: 58,
    khmer: 76,
    maths: 55,
    science: 94,
    history: 75,
    average: 0
  }
},
{
  fname: "JayJay",
  lname: "van Rensburg",
  age: 15,
  level: "B",
  avg: 39,
  engAvg: 65,
  khmerAvg: 88,
  absc: 3,
  subjects: {
    english: 47,
    khmer: 85,
    maths: 65,
    science: 17,
    history: 44,
    average: 0
  }
}
];
console.log(ajax_data[1].subjects.history)
$(document).ready(function($) {

// hide and display tables
$("#hideData").click(function myfunction() {
  $("#hideContainer").toggle({
    display: "none"
  });
});
$("#hideAdd").click(function myfunction() {
  $("#hideAddTabel").toggle({
    display: "none"
  });
});
$("#hideMarks").click(function myfunction() {
  $("#hideMarksContainer").toggle({
    display: "none"
  });
});
$("#hideEvents").click(function myfunction() {
  $("#hideEventsContainer").toggle({
    display: "none"
  });
});
$("#hideExams").click(function myfunction() {
  $("#hideExamsContainer").toggle({
    display: "none"
  });
});
// FINISHED HIDING AND DISPLAYING

$("input").keypress(function(e){
  if(e.which == 13){
    $(".submit").trigger("click");
  }
})
  
$(".submit").click(function() {
  var first = $("#fNameIn").val();
  var last = $("#lNameIn").val();
  var age = $("#ageIn").val();
  var level = $("#lvlIn").val();
  var avgs = $("#avgIn").val();
  var engAvgs = $("#engIn").val();
  var khmAvg = $("#khmIn").val();
  var abscs = $("#abscIn").val();
  var row_id = random_id();



  $(".tbl_user_data table")
    .first()
    .append(
      "<tbody><tr class='back'' row_id=" +
      row_id +
      ">" +
      '<td ><div class="row_data" edit_type="click" col_name="fname">' +
      first +
      "</div></td>" +
      '<td ><div class="row_data" edit_type="click" col_name="lname">' +
      last +
      "</div></td>" +
      '<td ><div class="row_data" edit_type="click" col_name="age">' +
      age +
      "</div></td>" +
      '<td ><div class="row_data" edit_type="click" col_name="lvl">' +
      level +
      "</div></td>" +
      '<td ><div class="row_data" edit_type="click" col_name="avg">' +
      avgs +
      "</div></td>" +
      '<td ><div class="row_data" edit_type="click" col_name="engAvg">' +
      engAvgs +
      "</div></td>" +
      '<td ><div class="row_data" edit_type="click" col_name="khmerAvg">' +
      khmAvg +
      "</div></td>" +
      '<td ><div class="row_data" edit_type="click" col_name="absc">' +
      abscs +
      "</div></td>" +
      '<td><span class="btn_edit" > <a href="#" class="btn btn-link " row_id="' +
      row_id +
      '" > Edit</a> </span>' +
      '<span class="btn_save"> <a href="#" class="btn btn-link"  row_id="' +
      row_id +
      '"> Save</a> | </span>' +
      '<span class="btn_cancel"> <a href="#" class="btn btn-link" row_id="' +
      row_id +
      '"> Cancel</a> | </span>' +
      "</td></tr></tbody>"
    );

  $("input").val("");
  //when submitted fields will be cleared

  // take the user input and append it as object to array
  let addStudent = {
    fname: first,
    lname: last,
    age: age,
    level: level,
    avg: avgs,
    engAvg: engAvgs,
    khmerAvg: khmAvg,
    absc: abscs,
    subjects: {
      english: 0,
      khmer: 0,
      maths: 0,
      science: 0,
      history: 0,
      average: 0
    }
  };
  ajax_data.push(addStudent);
  console.log(ajax_data);
});

var random_id = function() {
  var id_num = Math.random().toString(9).substr(2, 3);
  var id_str = Math.random().toString(36).substr(2);
  return id_num + id_str;
};

//--->create data table > start
var tbl = "";
tbl += '<table class="table table-hover">';
//--->create table header > start
tbl += "<thead class='thBack'>";
tbl += "<tr>";
tbl += "<th>Name</th>";
tbl += "<th>Last Name</th>";
tbl += "<th>Age</th>";
tbl += "<th>Lvl</th>";
tbl += "<th>Avg</th>";
tbl += "<th>Eng Avg</th>";
tbl += "<th>Khm Avg</th>";
tbl += "<th>Absence</th>";
tbl += "<th>Options</th>";
tbl += "</tr>";
tbl += "</thead>";
//--->create table header > end

tbl += "<tbody>"; //--->create table body > start
$.each(ajax_data, function(index, val) {
  //--->create table body rows > start
  //you can replace with your database row id
  var row_id = random_id();
  //loop through ajax row data
  tbl += '<tr row_id="' + row_id + '">';
  tbl +=
    '<td ><div class="row_data" edit_type="click" col_name="fname">' +
    val["fname"] +
    "</div></td>";
  tbl +=
    '<td ><div class="row_data" edit_type="click" col_name="lname">' +
    val["lname"] +
    "</div></td>";
  tbl +=
    '<td ><div class="row_data" edit_type="click" col_name="age">' +
    val["age"] +
    "</div></td>";
  tbl +=
    '<td ><div class="row_data" edit_type="click" col_name="lvl">' +
    val["level"] +
    "</div></td>";
  tbl +=
    '<td ><div class="row_data" edit_type="click" col_name="avg">' +
    val["avg"] +
    "</div></td>";
  tbl +=
    '<td ><div class="row_data" edit_type="click" col_name="engAvg">' +
    val["engAvg"] +
    "</div></td>";
  tbl +=
    '<td ><div class="row_data" edit_type="click" col_name="khmerAvg">' +
    val["khmerAvg"] +
    "</div></td>";
  tbl +=
    '<td ><div class="row_data" edit_type="click" col_name="absc">' +
    val["absc"] +
    "</div></td>";
  //--->edit options > start
  tbl += "<td>";
  tbl +=
    '<span class="btn_edit" > <a href="#" class="btn btn-link " row_id="' +
    row_id +
    '" > Edit</a> </span>';
  //only show this button if edit button is clicked
  tbl +=
    '<span class="btn_save"> <a href="#" class="btn btn-link"  row_id="' +
    row_id +
    '"> Save</a> | </span>';
  tbl +=
    '<span class="btn_cancel"> <a href="#" class="btn btn-link" row_id="' +
    row_id +
    '"> Cancel</a> | </span>';
  tbl += "</td>";
  //--->edit options > end
  tbl += "</tr>";
});
//--->create table body rows > end
tbl += "</tbody>";
//--->create table body > end
tbl += "</table>";
//--->create data table > end

//out put table data
$(document).find(".tbl_user_data").html(tbl);
$(document).find(".btn_save").hide();
$(document).find(".btn_cancel").hide();

//--->make div editable > start

$(document).on("click", ".row_data", function(event) {
  event.preventDefault();

  if ($(this).attr("edit_type") == "button") {
    return false;
  }
  //make div editable
  $(this).closest("div").attr("contenteditable", "true");
  //add bg css
  $(this).addClass("bg-white").css("padding", "5px");
  $(this).focus();
});
//--->make div editable > end

//--->save single field data > start
$(document).on("focusout", ".row_data", function(event) {
  event.preventDefault();

  if ($(this).attr("edit_type") == "button") {
    return false;
  }
  var row_id = $(this).closest("tr").attr("row_id");
  var row_div = $(this)
    .removeClass("bg-warning") //add bg css
    .css("padding", "");

  var col_name = row_div.attr("col_name");
  var col_val = row_div.html();

  var arr = {};
  arr[col_name] = col_val;

  //use the "arr"	object for your ajax call
  $.extend(arr, {
    row_id: row_id
  });
  //out put to show
  $(".post_msg").html(
    '<pre class="bg-success">' + JSON.stringify(arr, null, 2) + "</pre>"
  );
});
//--->save single field data > end

//--->button > edit > start
$(document).on("click", ".btn_edit", function(event) {
  event.preventDefault();
  var tbl_row = $(this).closest("tr");

  var row_id = tbl_row.attr("row_id");

  tbl_row.find(".btn_save").show();
  tbl_row.find(".btn_cancel").show();

  //hide edit button
  tbl_row.find(".btn_edit").hide();

  //make the whole row editable
  tbl_row
    .find(".row_data")
    .attr("contenteditable", "true")
    .attr("edit_type", "button")
    .addClass("bg-warning")
    .css("padding", "3px");

  //--->add the original entry > start
  tbl_row.find(".row_data").each(function(index, val) {
    //this will help in case user decided to click on cancel button
    $(this).attr("original_entry", $(this).html());
  });
  //--->add the original entry > end
});
//--->button > edit > end

//--->button > cancel > start
$(document).on("click", ".btn_cancel", function(event) {
  event.preventDefault();

  var tbl_row = $(this).closest("tr");

  var row_id = tbl_row.attr("row_id");

  //hide save and cacel buttons
  tbl_row.find(".btn_save").hide();
  tbl_row.find(".btn_cancel").hide();

  //show edit button
  tbl_row.find(".btn_edit").show();

  //make the whole row editable
  tbl_row
    .find(".row_data")
    .attr("edit_type", "click")
    .removeClass("bg-warning")
    .css("padding", "");

  tbl_row.find(".row_data").each(function(index, val) {
    $(this).html($(this).attr("original_entry"));
  });
});
//--->button > cancel > end

//--->save whole row entery > start
$(document).on("click", ".btn_save", function(event) {
  event.preventDefault();
  var tbl_row = $(this).closest("tr");
  var row_id = tbl_row.attr("row_id");
  $(this).val();
  // remove added background when saved
  $(".tbl_user_data tr").removeClass("back");

  //hide save and cacel buttons
  tbl_row.find(".btn_save").hide();
  tbl_row.find(".btn_cancel").hide();

  //show edit button
  tbl_row.find(".btn_edit").show();

  //make the whole row editable
  tbl_row
    .find(".row_data")
    .attr("edit_type", "click")
    .removeClass("bg-warning")
    .css("padding", "");

  //--->get row data > start
  var arr = {};
  tbl_row.find(".row_data").each(function(index, val) {
    var col_name = $(this).attr("col_name");
    var col_val = $(this).html();
    arr[col_name] = col_val;
  });
  //--->get row data > end
  //use the "arr"	object for your ajax call
  $.extend(arr, {
    row_id: row_id
  });
  //out put to show
  $(".post_msg").html(
    '<pre class="bg-success">' + JSON.stringify(arr, null, 2) + "</pre>"
  );
});
//--->save whole row entery > end
addedArray = ajax_data;
//console.log(addedArray)
console.log(addedArray);




// NEW TABLE

$("#refresh").click(function disfunction() {

  addedArray = JSON.parse(JSON.stringify(ajax_data)); // Peter
  let grades = [];
  let ajaxNames = addedArray.map((item) => {
    let subjects = item.subjects;
    //subjects.name = item.fname +" "+ item.lname;
    //subjects.level = item.level;
    //subjects.age = item.age;
    grades.push(subjects);
    for (i = 0; i < grades.length; i++) {
      let obj = grades[i];
      let keys = Object.keys(obj).map(function(keys) {
        return obj[keys]
      });
      finalMark = keys.reduce(function(mark, keys) {
        return mark + keys;
      }, 0); // very important
      let total = keys.push(finalMark)
      // console.log(keys); // [55, 47, 62, 85, 77, 75, 401]
      ; // 401
    };
    subjects.average = finalMark / 5;
  });
  //console.log(grades); // new array to use on subject marks table
  marksArray = JSON.parse(JSON.stringify(addedArray)); // Peter 
  //console.log(marksArray)


  let arr = []
  let ajaxMarks = marksArray.map((item) => {
    let subjects = item.subjects;
    subjects.fname = item.fname + " " + item.lname;
    subjects.level = item.level;
    subjects.age = item.age;
    arr.push(subjects)
  });

  var myArray = arr;

  $("th").on("click", function() {
    let column = $(this).data("column");
    let order = $(this).data("order");
    let text = $(this).html();
    text = text.substring(0, text.length - 1);

    if (order == "desc") {
      $(this).data("order", "asc");
      myArray = myArray.sort((a, b) => (a[column] > b[column] ? 1 : -1));
      text += "&#9660";
    } else {
      $(this).data("order", "desc");
      myArray = myArray.sort((a, b) => (a[column] < b[column] ? 1 : -1));
      text += "&#9650";
    }
    $(this).html(text);
    buildTable(myArray);
  });

  buildTable(myArray); // Peter

  function buildTable(data) {
    let table = document.getElementById("myTable");
    table.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
      let row = `<tr class="clicker">
            <td>${data[i].fname}</td>
            <td>${data[i].age}</td>
            <td>${data[i].level}</td>
            <td>${data[i].english}</td>
            <td>${data[i].khmer}</td>
            <td>${data[i].maths}</td>
            <td>${data[i].science}</td>
            <td>${data[i].history}</td>
            <td>${data[i].average}</td>
          </tr>`;
      table.innerHTML += row;
    }
  }
  // add a clicker for table dropdowns
  // $(".clicker").on("click",function(){
  //  $("tr .hide").eq(4).toggle()
  // })
});
});
