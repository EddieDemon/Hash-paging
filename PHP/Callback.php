<?php
foreach (getallheaders() as $name => $value) {
	if ($name == "X-Requested-With" && $value == "XMLHttpRequest") // Checks if sent from AJAX Callback.
	{
		if (isset($_POST['pageName']) && empty($_POST['pageName']))
		{
?>
Loaded page: <?php echo $_POST['pageName'] ?>.
<?php
		}
		break;
	}
}
?>