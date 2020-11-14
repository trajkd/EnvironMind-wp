<?php
$connect = mysqli_connect("3.120.249.39", "bn_wordpress", "8f970997a1", "bitnami_wordpress");
$output = '';
$sql = "SELECT * FROM wp_users WHERE display_name LIKE '".$_POST["search"]."%'"; 
$result = mysqli_query($connect, $sql);
while($row = mysqli_fetch_array($result)) {
	$output .= '<span id="'.$row["ID"].'"></span><div class="found-member">'.$row["display_name"].'<button type="button" class="button project-team__action-add"> Add member </button> </div>';
	echo $output;
}
mysqli_free_result($result);
?>