var countries = Object();

countries['Ciudad 1'] = 'Distrito1|Distrito2|Distrito3';
countries['Ciudad 2'] = 'Distrito4|Distrito5|Distrito6';


////////////////////////////////////////////////////////////////////////////

html = "";
for (region in countries)
  html += '<option value="' + region + '">' + region + '</option>';

document.getElementById("region").innerHTML = document.getElementById("region").innerHTML + html;

function set_country(oRegionSel, oCountrySel, oCity_StateSel) {
  var countryArr;
  oCountrySel.length = 0;
  //oCity_StateSel.length = 0;
  var region = oRegionSel.options[oRegionSel.selectedIndex].text;
  if (countries[region]) {
    oCountrySel.disabled = false;
   // oCity_StateSel.disabled = true;
    oCountrySel.options[0] = new Option('Elige un distrito', '');
    countryArr = countries[region].split('|');
    for (var i = 0; i < countryArr.length; i++)
      oCountrySel.options[i + 1] = new Option(countryArr[i], countryArr[i]);
    document.getElementById('txtregion').innerHTML = region;
    document.getElementById('txtplacename').innerHTML = '';
  } else oCountrySel.disabled = true;
}

function set_city_state(oCountrySel) {
  var city_stateArr;
  //oCity_StateSel.length = 0;
  var country = oCountrySel.options[oCountrySel.selectedIndex].text;
  //if (city_states[country]) {
  //  oCity_StateSel.disabled = false;
  //  oCity_StateSel.options[0] = new Option('SELECT NEAREST DIVISION', '');
    city_stateArr = city_states[country].split('|');
    for (var i = 0; i < city_stateArr.length; i++)
      oCity_StateSel.options[i + 1] = new Option(city_stateArr[i], city_stateArr[i]);

  }
//else oCity_StateSel.disabled = true;
//}

function print_city_state(oCountrySel, oCity_StateSel) {
  var country = oCountrySel.options[oCountrySel.selectedIndex].text;
  var city_state = oCity_StateSel.options[oCity_StateSel.selectedIndex].text;

}
