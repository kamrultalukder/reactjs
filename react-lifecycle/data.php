<?php
$data[] = array("id"=> "1", "name"=> "Mynul Khan", "designation"=> "CEO");
$data[] = array("id"=> "2", "name"=> "Nazmul Basher", "designation"=> "HOD");

if(!empty($_REQUEST['name'])){
    $data[] = array('id' => count($data)+1, 'name' => $_REQUEST['name'], 'designation' => $_REQUEST['designation']);
}

echo json_encode($data);
exit;
?>
