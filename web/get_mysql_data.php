<?php


$addr = "127.0.0.1:3306";
//$addr = 'localhost:8889';


switch ($_GET['action']) {
    case 'get_all':
        get_all($_GET['tableName']);
        break;
    case 'admin_auth':
        admin_auth($_GET['username'], $_GET['password']);
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

?>