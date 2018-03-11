<!DOCTYPE html>
<html>
    <head>
        <title>S-Cube</title>

        <link rel="stylesheet" type="text/css" href="./resources/Semantic-UI-CSS-master/semantic.css">
    </head>
<nav>
    <div class="ui five item menu">
        <a class="item active" onclick='move("home")'>Home</a>
        <a class="item" onclick='move("users")'>Users</a>
        <a class="item" onclick='move("feedback")'>FeedBack Reports</a>
        <a class="item" onclick='move("s3_sheets")'>S3_Sheets</a>
        <a class="item" onclick='move("admin")'>Administration</a>
    </div>
</nav>
<body>
    
    <div tile='admin' tileview='no'>
        <br>
        <div class='ui one column center aligned grid'>
            <div class='column'>
                <h2 class="ui centered icon header" >
                    <i class="settings icon"></i>
                    <div class="content">
                        Administration
                        <div class="sub header">Database Management</div>
                    </div>
                </h2>
            </div>
        </div>


        <div class="ui top attached tabular menu">
            <a class="item" data-tab="customers">Customers</a>
            <a class="item" data-tab="employees">Employees</a>
            <a class="item" data-tab="feed">Feedback Reports</a>
            <a class="item" data-tab="sheet">S3_Sheets</a>
            <a class="item" data-tab="bball">Basketball</a>
            <a class="item" data-tab="fball">Football</a>
        </div>

        <div class="ui bottom attached tab segment" data-tab="customers">
        </div>
        <div class="ui bottom attached tab segment" data-tab="employees">
        </div>
        <div class="ui bottom attached tab segment" data-tab="feed">
        </div>
        <div class="ui bottom attached tab segment" data-tab="sheet">
        </div>
        <div class="ui bottom attached tab segment" data-tab="bball">
        </div>
        <div class="ui bottom attached tab segment" data-tab="fball">
        </div>
    </div>

</body>
    <script src="./resources/js/jquery-3.3.1.min.js"></script>
    <script src="./resources/Semantic-UI-CSS-master/semantic.min.js"></script>
    <script src="./resources/js/tile.js"></script>
    <script src="./resources/js/admin.js"></script>
</html>