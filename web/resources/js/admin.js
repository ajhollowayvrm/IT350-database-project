var mysql_data_url = "/IT350-database-project/web/get_mysql_data.php"
var authenticated = false;
if(getCookie("s3_auth")) {
  authenticated = true;
}


$(document).ready(function() {
  try {
    if(!authenticated) {
      throw true;
    }

    $('.ui.menu .item').tab();

  $.fn.api.settings.api = {
    'get_mysql_data': mysql_data_url + "?action={action}&tableName={tableName}",
  }

  $('.menu [data-tab="customers"]').api({
    action: 'get_mysql_data',
    method: 'GET',
    urlData: {
      'action':"get_all",
      'tableName':"Customers"
    },
    stateContext: ".tab[data-tab='customers']",
    onSuccess: function(res) {
      var appendstring = `<br><br><table class='ui compact celled table'>
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
      $(this).html(appendstring);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr>
          <td>` + res[i]['CustomerID'] + `</td>
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
      var appendstring = `<br><br><table class='ui compact celled table'>
        <thead>
          <tr>
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
      $(this).html(appendstring);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr>
          <td>` + res[i]['EmployeeID'] + `</td>
          <td>` + res[i]['EmplyName'] + `</td>
          <td>` + res[i]['Yrs_At_Comp'] + `</td>
          <td>` + res[i]['EmplyType'] + `</td>
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
      var appendstring = `<br><br><table class='ui compact celled table'>
        <thead>
          <tr>
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
      $(this).html(appendstring);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr>
          <td>` + res[i]['EmployeeID'] + `</td>
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
      var appendstring = `<br><br><table class='ui compact celled table'>
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
      $(this).html(appendstring);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr>
          <td>` + res[i]['SheetID'] + `</td>
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
      var appendstring = `<br><br><div style="overflow-x:scroll;"><table class='ui compact celled table'>
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
      $(this).html(appendstring);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr>
          <td>` + res[i]['PlayerID'] + `</td>
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
      var appendstring = `<br><br><table class='ui compact celled table'>
        <thead>
          <tr>
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
      $(this).html(appendstring);

      var appendstr = "";

      for (let i = 0; i < res.length; i++) {
        appendstr = appendstr + `
        <tr>
          <td>` + res[i]['PlayerID'] + `</td>
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
  catch(notLoggedIn) {
    var authname = prompt("UserName: ");
    var authpass = prompt("PassWord: ")

    $.get(mysql_data_url + '?action=admin_auth&username=' + authname + "&password=" + authpass, (res) => {
      setCookie('s3_auth',res,1);
      window.reload;
    })
  }
})


function move(tileName) {
  moveToTile(tileName);
  $(this).activate();
}

function getAuth() {
  getData("action=get_all&tableName=Authentication");
}


function getData(parameters) {
  parameters = parameters || false

  if(parameters) {
    var url = mysql_data_url + "?" + parameters;
    $.get(url, (res) => {
      console.log(res);
    })
  } else {
    $.get(mysql_data_url, (res) => {
      console.log(res)
    })
  }
}


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