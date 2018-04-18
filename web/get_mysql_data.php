<?php


$addr = "127.0.0.1:3306";
//$addr = 'localhost:8889';


switch ($_GET['action']) {
    case 'get_all':
        get_all($_GET['tableName']);
        break;
    case 'admin_auth':
        admin_auth($_GET['username'], $_GET['password']);
        break;
    case 'add':
        add($_GET['tableName'], $_GET['values'], $_GET['id']);
        break;
    case 'delete':
        del($_GET['tableName'], $_GET['id']);
        break;
    case 'stats':
        getStats();
        break;
    default:
        # code...
        break;
}


function get_all($tableName) {
    $con = mysqli_connect($addr,'root','root','admin_db');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    mysqli_select_db($con,'admin_db');
    $sql="SELECT * FROM " . $tableName;
    $result = mysqli_query($con,$sql);
    $array = [];

    while($row = $result->fetch_assoc()) {
        array_push($array, $row);
    }

    echo json_encode($array);

    mysqli_close($con);
}

function admin_auth($user, $pwd) {   
    $con = mysqli_connect($addr,'root','root','admin_db');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    $user = mysqli_real_escape_string($con, $user);
    $pwd = mysqli_real_escape_string($con, $pwd);

    mysqli_select_db($con,'admin_db');
    $sql="SELECT * FROM Authentication";
    $result = mysqli_query($con,$sql);
    $authenticated = FALSE;

    while($row = $result->fetch_assoc()) {
        if($row['UserName'] == $user) {
            if($row['Pass'] == $pwd) {
                $authenticated = TRUE;
            }
        }
    }

    echo json_encode($authenticated);

    mysqli_close($con);
}


function add($tableName, $values, $id) {
    $con = mysqli_connect($addr,'root','root','admin_db');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    $tableName = mysqli_real_escape_string($con, $tableName);
    $values = mysqli_real_escape_string($con, $values);
    $_id = mysqli_real_escape_string($con, $id);

    $values = explode(',',$values);

    for ($i=0; $i < count($values); $i++) { 
        if(!is_numeric($values[$i])){
            $values[$i] = add_quotes($values[$i]);
        }
    }
    $values = join(",",$values);

    mysqli_select_db($con,'admin_db');

    switch ($tableName) {
        case 'Customers':
            del($tableName, $_id);
            $sql="INSERT INTO Customers (CustomerID, CustomerName, Number_of_Reports_Compiled, Preferences) VALUES (" . $values . ")";
            var_dump($sql);
            break;
        case 'Orders':
            del($tableName, $_id);
            $sql="INSERT INTO Orders (OrderID, CustomerID, Man_Hours_to_Compile, Price, SheetID) VALUES (" . $values . ")";
            break;
        case 'S3_Sheets':
            del($tableName, $_id);
            $sql="INSERT INTO S3_Sheets(SheetID, BB_PlayerIDs, FB_PlayerIDs) VALUES (" . $values . ")";
            break;
        case 'Basketball_Player':
            del($tableName, $_id);
            $sql="INSERT INTO Basketball_Player(PlayerID, Jersey_No, PlayerName, FG_Attp, FG_Made, Three_PT_Att, Three_PT_Made, Shooting_Perc, Three_Perc, PTS_Scored, Steals, Turnovers, Def_Reb, Off_Reb, Blocks, Assists) VALUES (" . $values . ")";
            break;
        case 'Football_Player':
            del($tableName, $_id);
            $sql="INSERT INTO Football_Player (PlayerID, Jersey_No, PlayerName, Games_Started, Games_Played, Pass_Att, Pass_Comp, Comp_Perc, Pass_TDs, INTs) VALUES (" . $values . ")";
            break;
        case 'Employees':
            del($tableName, $_id);
            $sql="INSERT INTO Employees (EmployeeID, EmplName, Yrs_At_Comp, EmplType) VALUES (" . $values . ")";
            break;
        case 'Authentication':
            del($tableName, $_id);
            $sql="INSERT INTO Authentication (AuthID, UserName, Pass, EmployeeID) VALUES (" . $values . ")";
            break;
        case 'Feedback_Reports':
            del($tableName, $_id);
            $sql="INSERT INTO Feedback_Reports (FeedBackID, EmployeeID, Ratings, FeedBack_Text) VALUES (" . $values . ")";
            break;
        default:
            # code...
            break;
    }
    
    $result = mysqli_query($con,$sql);

    mysqli_close($con);
};

function del($tableName, $id){
    if($id == FALSE) {
        return;
    }

    $con = mysqli_connect($addr,'root','root','admin_db');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    $tableName = mysqli_real_escape_string($con, $tableName);
    $id = mysqli_real_escape_string($con, $id);

    mysqli_select_db($con,'admin_db');

    switch ($tableName) {
        case 'Customers':
            $sql="DELETE FROM " . $tableName . " WHERE CustomerID=" . $id;
            break;
        case 'Orders':
            $sql="DELETE FROM " . $tableName . " WHERE OrderID=" . $id;            
            break;
        case 'S3_Sheets':
            $sql="DELETE FROM " . $tableName . " WHERE SheetID=" . $id;            
            break;
        case 'Basketball_Player':
            $sql="DELETE FROM " . $tableName . " WHERE PlayerID=" . $id;            
            break;
        case 'Football_Player':
            $sql="DELETE FROM " . $tableName . " WHERE PlayerID=" . $id;            
            break;
        case 'Employees':
            $sql="DELETE FROM " . $tableName . " WHERE EmployeeID=" . $id;            
            break;
        case 'Authentication':
            $sql="DELETE FROM " . $tableName . " WHERE AuthID=" . $id;            
            break;
        case 'Feedback_Reports':
            $sql="DELETE FROM " . $tableName . " WHERE FeedBackID=" . $id;            
            break;
        default:
            # code...
            break;
    }

    $result = mysqli_query($con,$sql);
    mysqli_close($con);
};

function getStats() {

    $con = mysqli_connect($addr,'root','root','admin_db');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    //$tableName = mysqli_real_escape_string($con, $tableName);
    mysqli_select_db($con,'admin_db');

    $sql="SELECT * FROM INFORMATION_SCHEMA.STATISTICS";

    $result = mysqli_query($con,$sql);
    $array = [];

    while($row = $result->fetch_assoc()) {
        array_push($array, $row);
    }

    echo json_encode($array);
    mysqli_close($con);

}


function add_quotes($str) {
    return sprintf("\"%s\"", $str);
}

?>