<?php

switch ($_GET['action']) {
    case 'get_all':
        get_all($_GET['tableName']);
        break;
    
    default:
        # code...
        break;
}

function get_all($tableName) {
    $con = mysqli_connect('localhost:8889','root','root','admin_db');
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

?>