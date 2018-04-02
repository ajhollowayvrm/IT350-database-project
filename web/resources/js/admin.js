// var mysql_data_url = "/IT350-database-project/web/get_mysql_data.php"
var mysql_data_url = "/get_mysql_data.php"


$(document).ready(function() {
  $('[tileview="no"').hide();
  $('.ui.menu .item').tab();
  getBlog();

  $.fn.api.settings.api = {
    'get_mysql_data': mysql_data_url + "?action={action}&tableName={tableName}",
  }
  getAdminTables();
})

function getAdminTables() {
  $('.menu [data-tab="customers"]').api({
    action: 'get_mysql_data',
    method: 'GET',
    urlData: {
      'action':"get_all",
      'tableName':"Customers"
    },
    stateContext: ".tab[data-tab='customers']",
    onSuccess: function(res) {
      var appendString = `<br><button class="ui blue large button" onclick="addModal(this)">Add A Record</button><br><br><table class='ui compact selectable celled table'>
        <thead>
        <tr>
            <th>Customer ID</th>
            <th>CustomerName</th>
            <th>Number_of_Reports_Compiled</th>
            <th>Preferences</th>
          </tr>
        </thead>
        <tbody id="customer_table">
        </tbody>
        </table>
        <br>
        <br>
        `
      $(this).html(appendString);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr id='` + i + `' onclick='crudModal(this)'>
          <td class='id'>` + res[i]['CustomerID'] + `</td>
          <td>` + res[i]['CustomerName'] + `</td>
          <td>` + res[i]['Number_of_Reports_Compiled'] + `</td>
          <td>` + res[i]['Preferences'] + `</td>
        </tr>
        `
      }

      $("#customer_table").html(appendstr);
    }
  })



  $('.menu [data-tab="employees"]').api({
    action: 'get_mysql_data',
    method: 'GET',
    urlData: {
      'action':"get_all",
      'tableName':"Employees"
    },
    stateContext: ".tab[data-tab='employees']",
    onSuccess: function(res) {
      var appendString = `<br><button class="ui blue large button" onclick="addModal(this)">Add A Record</button><br><br><table class='ui compact selectable celled table'>
        <thead>
        <tr></tr>
            <th>EmployeeID</th>
            <th>EmplyName</th>
            <th>Yrs_At_Comp</th>
            <th>EmplyType</th>
          </tr>
        </thead>
        <tbody id="employees_table">
        </tbody>
        </table>
        <br>
        <br>
        `
      $(this).html(appendString);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr id='` + i + `' onclick='crudModal(this)'>
          <td class='id'>` + res[i]['EmployeeID'] + `</td>
          <td>` + res[i]['EmplName'] + `</td>
          <td>` + res[i]['Yrs_At_Comp'] + `</td>
          <td>` + res[i]['EmplType'] + `</td>
        </tr>
        `
      }

      $("#employees_table").html(appendstr);
    }
  })



  $('.menu [data-tab="feed"]').api({
    action: 'get_mysql_data',
    method: 'GET',
    urlData: {
      'action':"get_all",
      'tableName':"Feedback_Reports"
    },
    stateContext: ".tab[data-tab='feed']",
    onSuccess: function(res) {
      var appendString = `<br><button class="ui blue large button" onclick="addModal(this)">Add A Record</button><br><br><table class='ui compact selectable celled table'>
        <thead>
          <tr></tr>
            <th>FeedBackID</th>
            <th>EmployeeID</th>
            <th>Ratings</th>
            <th>FeedBack_Text</th>
          </tr>
        </thead>
        <tbody id="feed_table">
        </tbody>
        </table>
        <br>
        <br>
        `
      $(this).html(appendString);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr id='` + i + `' onclick='crudModal(this)'>
          <td class='id'>` + res[i]['EmployeeID'] + `</td>
          <td>` + res[i]['EmplName'] + `</td>
          <td>` + res[i]['Yrs_At_Comp'] + `</td>
          <td>` + res[i]['EmplType'] + `</td>
        </tr>
        `
      }

      $("#feed_table").html(appendstr);
    }
  })



  $('.menu [data-tab="sheet"]').api({
    action: 'get_mysql_data',
    method: 'GET',
    urlData: {
      'action':"get_all",
      'tableName':"S3_Sheets"
    },
    stateContext: ".tab[data-tab='sheet']",
    onSuccess: function(res) {
      var appendString = `<br><button class="ui blue large button" onclick="addModal(this)">Add A Record</button><br><br><table class='ui compact selectable celled table'>
        <thead>
          <tr>
            <th>SheetID</th>
            <th>BB_PlayerIDs</th>
            <th>FB_PlayerIDs</th>
          </tr>
        </thead>
        <tbody id="sheet_table">
        </tbody>
        </table>
        <br>
        <br>
        `
      $(this).html(appendString);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr id='` + i + `' onclick='crudModal(this)'>
          <td class='id'>` + res[i]['SheetID'] + `</td>
          <td>` + res[i]['BB_PlayerIDs'] + `</td>
          <td>` + res[i]['FB_PlayerIDs'] + `</td>
        </tr>
        `
      }

      $("#sheet_table").html(appendstr);
    }
  })



  $('.menu [data-tab="bball"]').api({
    action: 'get_mysql_data',
    method: 'GET',
    urlData: {
      'action':"get_all",
      'tableName':"Basketball_Player"
    },
    stateContext: ".tab[data-tab='bball']",
    onSuccess: function(res) {
      var appendString = `<br><button class="ui blue large button" onclick="addModal(this)">Add A Record</button><br><br><div style="overflow-x:scroll;"><table class='ui compact selectable celled table'>
        <thead>
          <tr>
            <th>PlayerID</th>
            <th>Jersey_No</th>
            <th>PlayerName</th>
            <th>FG_Attp</th>
            <th>FG_Made</th>
            <th>Three_PT_Att</th>
            <th>Three_PT_Made</th>
            <th>Shooting_Perc</th>
            <th>Three_Perc</th>
            <th>PTS_Scored</th>
            <th>Steals</th>
            <th>Turnovers</th>
            <th>Def_Reb</th>
            <th>Off_Reb</th>
            <th>Blocks</th>
            <th>Assists</th>
          </tr>
        </thead>
        <tbody id="bball_table">
        </tbody>
        </table>
        </div>
        <br>
        <br>
        `
      $(this).html(appendString);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr id='` + i + `' onclick='crudModal(this)'>
          <td class='id'>` + res[i]['PlayerID'] + `</td>
          <td>` + res[i]['Jersey_No'] + `</td>
          <td>` + res[i]['PlayerName'] + `</td>
          <td>` + res[i]['FG_Attp'] + `</td>
          <td>` + res[i]['FG_Made'] + `</td>
          <td>` + res[i]['Three_PT_Att'] + `</td>
          <td>` + res[i]['Three_PT_Made'] + `</td>
          <td>` + res[i]['Shooting_Perc'] + `</td>
          <td>` + res[i]['Three_Perc'] + `</td>
          <td>` + res[i]['PTS_Scored'] + `</td>
          <td>` + res[i]['Steals'] + `</td>
          <td>` + res[i]['Turnovers'] + `</td>
          <td>` + res[i]['Def_Reb'] + `</td>
          <td>` + res[i]['Off_Reb'] + `</td>
          <td>` + res[i]['Blocks'] + `</td>
          <td>` + res[i]['Assists'] + `</td>
        </tr>
        `
      }

      $("#bball_table").html(appendstr);
    }
  })



  $('.menu [data-tab="fball"]').api({
    action: 'get_mysql_data',
    method: 'GET',
    urlData: {
      'action':"get_all",
      'tableName':"Football_Player"
    },
    stateContext: ".tab[data-tab='fball']",
    onSuccess: function(res) {
      var appendString = `<br><button class="ui blue large button" onclick="addModal(this)">Add A Record</button><br><br><table class='ui compact selectable celled table'>
        <thead>
          <tr></tr>
            <th>PlayerID</th>
            <th>Jersey_No</th>
            <th>PlayerName</th>
            <th>Games_Started</th>
            <th>Games_Played</th>
            <th>Pass_Att</th>
            <th>Pass_Comp</th>
            <th>Comp_Perc</th>
            <th>Pass_TDS</th>
            <th>INTs</th>
          </tr>
        </thead>
        <tbody id="fball_table">
        </tbody>
        </table>
        <br>
        <br>
        `
      $(this).html(appendString);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr id='` + i + `' onclick='crudModal(this)'>
          <td class='id'>` + res[i]['PlayerID'] + `</td>
          <td>` + res[i]['Jersey_No'] + `</td>
          <td>` + res[i]['PlayerName'] + `</td>
          <td>` + res[i]['Games_Started'] + `</td>
          <td>` + res[i]['Games_Played'] + `</td>
          <td>` + res[i]['Pass_Att'] + `</td>
          <td>` + res[i]['Pass_Comp'] + `</td>
          <td>` + res[i]['Comp_Perc'] + `</td>
          <td>` + res[i]['Pass_TDs'] + `</td>
          <td>` + res[i]['INTs'] + `</td>
        </tr>
        `
      }

      $("#fball_table").html(appendstr);
    }
  })  
}


function crudModal(elem) {
  var values = $(elem).children().map(function() {
    return $(this).html()
  }).toArray();

  var headings = $(elem).parent().parent().find('thead tr th').map(function() {
    return $(this).html();
  }).toArray();

  $('#editModal .header').html($('.tabular.menu .active').text());

  var appendStr = ""

  for (let index = 0; index < headings.length; index++) {
    if(index == 0) {
      appendStr = appendStr + `<h2 class='headings'>` + headings[index] + `: </h2><p class='values' id='ID'>` + values[index] + `</p>`;
    } else {
      appendStr = appendStr + `<h2 id=` + headings[index] + ` class='headings'>` + headings[index] + `: </h2><input class='values' value='` + values[index] + `'><br>`;
    }
  }

  $('#editModal .content').html(appendStr);
  $('#editModal').modal({
    onApprove: function() {
      var values = $('#editModal .values').map(function() {if($(this).val() != ""){return $(this).val()}else{return $(this).html()}}).toArray()
      $.get(mysql_data_url + "?action=add&tableName=" + $('#editModal .header').text() + "&values=" + values.join(',') + "&id=" + $('#editModal #ID').html());
    },
    onDeny: function() {
      $.get(mysql_data_url + "?action=delete&tableName=" + $('#editModal .header').text() + "&id=" + $('#editModal #ID').html());
      alert("Updating successful. To see your addition, move to another tab and return to this one.")
    }
  }).modal('show');
}

function addModal(elem) {
  var headings = $(elem).parent().find('thead tr th').map(function() {
    return $(this).html();
  }).toArray();

  $('#addModal .header').html("Adding A Record to " + $('.tabular.menu .active').text());

  var appendStr = ""

  for (let index = 0; index < headings.length; index++) {
    if(index == 0) {
      appendStr = appendStr + `<h2 class='headings'>` + headings[index] + `: </h2><input class='values' id='ID'><br>`;
    } else {
      appendStr = appendStr + `<h2 id=` + headings[index] + ` class='headings'>` + headings[index] + `: </h2><input class='values'><br>`;
    }
  }

  $('#addModal .content').html(appendStr);
  $('#addModal').modal({
    onApprove: function() {
      var values = $('#addModal .values').map(function() {if($(this).val() != ""){return $(this).val()}else{return $(this).html()}}).toArray()

      if($.inArray("",values) != "-1") {
        alert('Not all values are filled')
        return;
      }
      if(idIsUnique() != "-1") {
        alert('ID is not unique');
        return;
      }

      $.get(mysql_data_url + "?action=add&tableName=" + $('.tabular.menu .item.active').text() + "&values=" + values.join(',') + "&id=FALSE");
      alert("Adding successful. To see your addition, move to another tab and return to this one.")
    }
  }).modal('show');
}

function move(tileName) {
  if(tileName == "admin") {
    admin_auth();
    if(getCookie("s3_auth") && $.getTile('admin').getTileView() == "no") {
      moveToTile(tileName);
    }
  } else {
    moveToTile(tileName);
    $(this).activate();
  }
}

function admin_auth() {

  if(getCookie("s3_auth")) {
    moveToTile("admin");
  } else {
    
    var authname = prompt("Username: ");
    var authpass = prompt("Password: ")
  
    $.get(mysql_data_url + '?action=admin_auth&username=' + authname + "&password=" + authpass, (res) => {
      if(res == "true") {
          setCookie('s3_auth',true,1);
          moveToTile("admin");
      } else {
          alert("Incorrect Admin Credentials.")
          moveToTile('home');
      }
    })
  }
}


function idIsUnique() {
  var ids = $('.tab.bottom.active').find('.id').map(function() {return $(this).text()}).toArray();
  return $.inArray($('#addModal #ID').val(),ids);
}


function getBlog() {

  $.getJSON("http://192.168.50.29:5000/get_blog", (response) => {
    var blog_str = "";
    

    response.forEach(element => {
      var comment_str = "";

      for (var i = 0; i < (element['comments']).length; i++) {
        comment_str = comment_str + `
          <div class='ui raised segment'>
            ` + (element['comments'])[i] + `
          </div>
        `
      }

      blog_str = blog_str + `
        <div class='ui grid' id=` + element['_id'] + `>
          <div class='four column centered row'>
            <div class='one wide column' id=` + element['_id'] + `>
              <p style='font-weight:bold'>` + element['date'] + ` </p>
            </div>
            <div class='ten wide column' id=` + element['_id'] + `>
              <div class='ui raised segment'>
                <h1>` + element['title'] + `</h1><br>
                ` + element['content'] + `
              </div>  
            </div>
            <div class='four wide column' id=` + element['_id'] + `>
              <div class='ui raised segment'>
                <h3>Comments</h3>
                <div class='comments'> ` + comment_str + `</div>
                <div class='ui divider'></div>
                <form class='ui form'>
                  <div class='field'>
                    <textarea rows='2' name='comment'></textarea>
                  </div>
                  <button class='ui button' type='submit'>Add Comment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      `
    });

    $('#blogContent').html(blog_str);
    $('.ui.form')
    .form()
    .submit(function(evt) {
        evt.preventDefault();
        addComment($(this));
    });
  })
}

function addComment(button) {
  var comment_obj = {
    "id":button.parent().parent().attr('id'),
    "comment":(button.parent().form('get values'))['comment']
  }

  $.post("http://192.168.50.29:5000/add_comment", comment_obj, () => { getBlog(); })
;}

/*---------------------Utilites--------------------*/

(function($) {
  $.fn.activate = function() {
      $('nav.menu .item').each(() => {
        this.removeClass('active');
      });
      this.addClass('active')
  };
}(jQuery));

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {   
  document.cookie = name+'=; Max-Age=-99999999;';  
}

function isDigits(input) {
  var regex = /^([0-9])*$/;

  return regex.test(input);
}