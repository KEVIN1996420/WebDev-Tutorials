// FIX THE USERS LIST HIDE AND DISPLAY BUTTON
// REMOVE OR CHANGE ARRAY DATA


let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

// create headers and array
let headers = ["Name","Surname","Age","Level","Avg","Eng Avg","Khmer Avg","Absences"];
let array = [{name:"Kevin",lastname:"van Deventer",age: "16",level:"B",avg:"75",engAvg:"65",khmerAvg:"88",absc:"3"},
             {name:"Claudia",lastname:"Martin",age: "12",level:"B",avg:"47",engAvg:"65",khmerAvg:"88",absc:"3"},
            {name:"Josh",lastname:"Pretorius",age: "13",level:"C",avg:"87",engAvg:"65",khmerAvg:"88",absc:"3"},
            {name:"JayJay",lastname:"van Rensburg",age: "15",level:"B",avg:"97",engAvg:"65",khmerAvg:"88",absc:"3"}];

// hide and display buttons and table FFFFFFFIIIIXXXXXX
$("#display").click("click",function(){
    $(this).css({display:"none"});
    $("#hide2").css({display:"inline-block"});
    $("#hide2").click("click",function(){
            $(this).css({display:"none"});
            $("#table").css({display:"none"});
            $("#display").css({display:"inline-block"});
})
})

// create a table with child elements
function myfunction(){
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    })
    table.appendChild(headerRow);
// loop through array creating table rows
    array.forEach(arr => {
        let row = document.createElement('tr');
        Object.values(arr).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    myTable.appendChild(table);
    // add class to second table and an id
    $("table").last().attr('id', 'newTable').addClass("table table-bordered table-hover table-responsive");
};

// Add field to table
$(".button3").click(function(){
    var first = $("#fNameIn").val();
    var last = $("#lNameIn").val();
    var age = $("#ageIn").val();
    var lvl = $("#lvlIn").val();
    var avgs = $("#avgIn").val();
    var engAvgs = $("#engIn").val();
    var khmAvg = $("#khmIn").val();
    var abscs = $("#abscIn").val();
    $("table").last().append(
                   "<tbody><tr><td>" + first + "</td>"+
                   "<td>" + last + "</td>"+
                   "<td>" + age + "</td>"+
                   "<td>" + lvl + "</td>"+
                   "<td>" + avgs + "</td>"+
                   "<td>" + engAvgs + "</td>"+
                   "<td>" + khmAvg + "</td>"+
                   "<td>" + abscs + "</td></tr></tbody>")
    $("input").val("");
    //when submitted fields will be cleared

    // take the user input and append it as object to array
    let addStudent = {name: first, lastname: last, age: age, level: lvl, avg: avgs, engAvg: engAvgs, khmerAvg: khmAvg, absc: abscs};
    array.push(addStudent);
});

// to display field bar and buttons
  $("#show").click(function(){
    $("#display1").css({display:"block"});
    $(".button1").css({display:"block"});
    $(".button2").css({display:"none"});
    $(".button3").css({display:"block"});
  });
$(".button1").click(function(){
    $("#display1").css({display:"none"});
    $(".button1").css({display:"none"});
    $(".button2").css({display:"block"});
    $(".button3").css({display:"none"});
  });

// remove table rows or change element in data


// save the array data once done
$("#save").click(function(){
     av = 0;
    for(i = 0 ;i < array.length ;i++){
        averages = array[i].avg;
        av += Math.floor(averages);
    }
    var classAvg = (Math.floor(av)/Math.floor(array.length));
    console.log(classAvg);
    let para = document.getElementById("para");
    para.innerHTML = classAvg + "%";
});

//print the average of all the students in a p element