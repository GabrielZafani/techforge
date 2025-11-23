<?php 

require_once 'Classes/FormaDeBolo.php';

$primeiroBolo = new FormaDeBolo("Gabriel");
$primeiroBolo->adicionaIngredientes(["chocolate"]);
$primeiroBolo->fazerBolo();
$primeiroBolo->colocarNoForno(2);
$primeiroBolo->cliente();
echo "<pre>". print_r($primeiroBolo);

//$segundoBolo = new FormaDeBolo();
//echo"<pre>"; print_r($segundoBolo);
 
//$primeiroBolo->tranferirIngredientes("chocolate", $segundoBolo);
///echo "<pre>". print_r($primeiroBolo);
//echo "<pre>"; print_r($segundoBolo);


?>