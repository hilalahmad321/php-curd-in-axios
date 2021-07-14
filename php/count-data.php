<?php

include "config.php";

$sql = "SELECT * FROM student";
$run_sql = mysqli_query($conn, $sql);
$output = mysqli_num_rows($run_sql);
echo json_encode($output);
mysqli_close($conn);