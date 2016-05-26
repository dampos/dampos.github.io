<?php

$text = "Birokrat,Broz,Belier,CoffeeFactory,Stobi,TheGalery,Vodenica,Pelister,Veneto,Gurmet.Uranija,Posta,AlexandarPalace,HotelRussia,HotelArka,BushiResort,HolidayInn,CanyonMatka,Kale,VodnoMilleniumCross,MonasteryofStMark,GTC,TCSoravija,SkopjeCityMall,RamstoreMall,Zebra,Arheoloshki,MakBorba,MuzejNaSK,Holocaust,MacedoniaSquare,MotherTeresa,Jadran,Bazar,FilipII,Sektor,XLClub,Karting,IrishPub,GateMacedonia,StaraZeleznicka,Skupi,HouseofMotherTeresa,StoneBridge";


$locations = explode(',', $text);


foreach($locations as $location)
{
	$myFile = $location . '.html';
	$fh = fopen($myFile, 'w') or die("can't open file");
	
	$page = '<link href="style.css" rel="stylesheet">

<div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">' . $location . '</h1>
      <div id="bodyContent"> 

    <p></p>
	  
      </div>
      </div>';

	fwrite($fh, $page);
	fclose($fh);
	
	
}

?>

