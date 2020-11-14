$(".context-menu__item").on('click', function() {
	$(".context-menu__item").removeClass("active");
	$(this).addClass("active");
});

$(document).ready(function() {
	if(!$(".input-text__input").val()) {
		$(".input-text__input").addClass("is--empty");
	} else {
		$(".input-text__input").removeClass("is--empty");
	}
	
	$(".woocommerce-notices-wrapper").has(".woocommerce-error").attr("style", "display: flex;justify-content: center;padding: 20px;background-color: #243e8e;");
});

$(".input-text__input").change(function() {
	if(!$(this).val()) {
		$(this).addClass("is--empty");
	} else {
		$(this).removeClass("is--empty");
	}
});

$("body").on("DOMSubtreeModified", "#select-country .selectric-wrapper .selectric .label", function(){
	if($("#select-country .selectric-wrapper .selectric .label").innerHTML == "") {
		$("#select-country-wrapper .selectric-wrapper").addClass("is-empty");
	} else {
		$("#select-country-wrapper .selectric-wrapper").removeClass("is-empty");
	}
});

$("body").on("DOMSubtreeModified", "#select-region .selectric-wrapper .selectric .label", function(){
	if($("#select-region .selectric-wrapper .selectric .label").innerHTML == "") {
		$("#select-region-wrapper .selectric-wrapper").addClass("is-empty");
	} else {
		$("#select-region-wrapper .selectric-wrapper").removeClass("is-empty");
	}
});

$("body").on("DOMSubtreeModified", "#select-role .selectric-wrapper .selectric .label", function(){
    if($("#select-role .selectric-wrapper .selectric .label").innerHTML == "") {
        $("#select-role-wrapper .selectric-wrapper").addClass("is-empty");
    } else {
        $("#select-role-wrapper .selectric-wrapper").removeClass("is-empty");
    }
});

function loadBillingCountry(){
	if (window.location.href.includes("/it/")) {
		var countries = 
		`
		<option value="" disabled="" selected=""></option>
		<option value="Afghanistan">Afghanistan</option>
		<option value="Albania">Albania</option>
		<option value="Algeria">Algeria</option>
		<option value="U.S. Outlying Islands">Altre isole americane del Pacifico</option>
		<option value="Andorra">Andorra</option>
		<option value="Angola">Angola</option>
		<option value="Anguilla">Anguilla</option>
		<option value="Antarctica">Antartide</option>
		<option value="Antigua &amp; Barbuda">Antigua e Barbuda</option>
		<option value="Saudi Arabia">Arabia Saudita</option>
		<option value="Argentina">Argentina</option>
		<option value="Armenia">Armenia</option>
		<option value="Aruba">Aruba</option>
		<option value="Australia">Australia</option>
		<option value="Austria">Austria</option>
		<option value="Azerbaijan">Azerbaigian</option>
		<option value="Bahamas">Bahamas</option>
		<option value="Bahrain">Bahrein</option>
		<option value="Bangladesh">Bangladesh</option>
		<option value="Barbados">Barbados</option>
		<option value="Belgium">Belgio</option>
		<option value="Belize">Belize</option>
		<option value="Benin">Benin</option>
		<option value="Bermuda">Bermuda</option>
		<option value="Bhutan">Bhutan</option>
		<option value="Belarus">Bielorussia</option>
		<option value="Bolivia">Bolivia</option>
		<option value="Bosnia &amp; Herzegovina">Bosnia ed Erzegovina</option>
		<option value="Botswana">Botswana</option>
		<option value="Brazil">Brasile</option>
		<option value="Brunei">Brunei</option>
		<option value="Bulgaria">Bulgaria</option>
		<option value="Burkina Faso">Burkina Faso</option>
		<option value="Burundi">Burundi</option>
		<option value="Cambodia">Cambogia</option>
		<option value="Cameroon">Camerun</option>
		<option value="Canada">Canada</option>
		<option value="Cape Verde">Capo Verde</option>
		<option value="Czechia">Cechia</option>
		<option value="Chad">Ciad</option>
		<option value="Chile">Cile</option>
		<option value="China">Cina</option>
		<option value="Cyprus">Cipro</option>
		<option value="Vatican City">Città del Vaticano</option>
		<option value="Colombia">Colombia</option>
		<option value="Comoros">Comore</option>
		<option value="Congo - Brazzaville">Congo - Brazzaville</option>
		<option value="Congo - Kinshasa">Congo - Kinshasa</option>
		<option value="North Korea">Corea del Nord</option>
		<option value="South Korea">Corea del Sud</option>
		<option value="Côte d’Ivoire">Costa d’Avorio</option>
		<option value="Costa Rica">Costa Rica</option>
		<option value="Croatia">Croazia</option>
		<option value="Cuba">Cuba</option>
		<option value="Denmark">Danimarca</option>
		<option value="Dominica">Dominica</option>
		<option value="Ecuador">Ecuador</option>
		<option value="Egypt">Egitto</option>
		<option value="El Salvador">El Salvador</option>
		<option value="United Arab Emirates">Emirati Arabi Uniti</option>
		<option value="Eritrea">Eritrea</option>
		<option value="Estonia">Estonia</option>
		<option value="Ethiopia">Etiopia</option>
		<option value="Fiji">Figi</option>
		<option value="Philippines">Filippine</option>
		<option value="Finland">Finlandia</option>
		<option value="France">Francia</option>
		<option value="Gabon">Gabon</option>
		<option value="Gambia">Gambia</option>
		<option value="Georgia">Georgia</option>
		<option value="South Georgia &amp; South Sandwich Islands">Georgia del Sud e Sandwich australi</option>
		<option value="Germany">Germania</option>
		<option value="Ghana">Ghana</option>
		<option value="Jamaica">Giamaica</option>
		<option value="Japan">Giappone</option>
		<option value="Gibraltar">Gibilterra</option>
		<option value="Djibouti">Gibuti</option>
		<option value="Jordan">Giordania</option>
		<option value="Greece">Grecia</option>
		<option value="Grenada">Grenada</option>
		<option value="Greenland">Groenlandia</option>
		<option value="Guadeloupe">Guadalupa</option>
		<option value="Guam">Guam</option>
		<option value="Guatemala">Guatemala</option>
		<option value="Guernsey">Guernsey</option>
		<option value="Guinea">Guinea</option>
		<option value="Guinea-Bissau">Guinea-Bissau</option>
		<option value="Equatorial Guinea">Guinea Equatoriale</option>
		<option value="Guyana">Guyana</option>
		<option value="French Guiana">Guyana francese</option>
		<option value="Haiti">Haiti</option>
		<option value="Honduras">Honduras</option>
		<option value="India">India</option>
		<option value="Indonesia">Indonesia</option>
		<option value="Iran">Iran</option>
		<option value="Iraq">Iraq</option>
		<option value="Ireland">Irlanda</option>
		<option value="Iceland">Islanda</option>
		<option value="Bouvet Island">Isola Bouvet</option>
		<option value="Christmas Island">Isola Christmas</option>
		<option value="Isle of Man">Isola di Man</option>
		<option value="Norfolk Island">Isola Norfolk</option>
		<option value="Åland Islands">Isole Åland</option>
		<option value="Cayman Islands">Isole Cayman</option>
		<option value="Cocos (Keeling) Islands">Isole Cocos (Keeling)</option>
		<option value="Cook Islands">Isole Cook</option>
		<option value="Faroe Islands">Isole Fær Øer</option>
		<option value="Falkland Islands">Isole Falkland</option>
		<option value="Heard &amp; McDonald Islands">Isole Heard e McDonald</option>
		<option value="Northern Mariana Islands">Isole Marianne settentrionali</option>
		<option value="Marshall Islands">Isole Marshall</option>
		<option value="Pitcairn Islands">Isole Pitcairn</option>
		<option value="Solomon Islands">Isole Salomone</option>
		<option value="Turks &amp; Caicos Islands">Isole Turks e Caicos</option>
		<option value="U.S. Virgin Islands">Isole Vergini Americane</option>
		<option value="British Virgin Islands">Isole Vergini Britanniche</option>
		<option value="Israel">Israele</option>
		<option value="Italy">Italia</option>
		<option value="Jersey">Jersey</option>
		<option value="Kazakhstan">Kazakistan</option>
		<option value="Kenya">Kenya</option>
		<option value="Kyrgyzstan">Kirghizistan</option>
		<option value="Kiribati">Kiribati</option>
		<option value="Kuwait">Kuwait</option>
		<option value="Laos">Laos</option>
		<option value="Lesotho">Lesotho</option>
		<option value="Latvia">Lettonia</option>
		<option value="Lebanon">Libano</option>
		<option value="Liberia">Liberia</option>
		<option value="Libya">Libia</option>
		<option value="Liechtenstein">Liechtenstein</option>
		<option value="Lithuania">Lituania</option>
		<option value="Luxembourg">Lussemburgo</option>
		<option value="Madagascar">Madagascar</option>
		<option value="Malawi">Malawi</option>
		<option value="Malaysia">Malaysia</option>
		<option value="Maldives">Maldive</option>
		<option value="Mali">Mali</option>
		<option value="Malta">Malta</option>
		<option value="Morocco">Marocco</option>
		<option value="Martinique">Martinica</option>
		<option value="Mauritania">Mauritania</option>
		<option value="Mauritius">Mauritius</option>
		<option value="Mayotte">Mayotte</option>
		<option value="Mexico">Messico</option>
		<option value="Micronesia">Micronesia</option>
		<option value="Moldova">Moldavia</option>
		<option value="Monaco">Monaco</option>
		<option value="Mongolia">Mongolia</option>
		<option value="Montenegro">Montenegro</option>
		<option value="Montserrat">Montserrat</option>
		<option value="Mozambique">Mozambico</option>
		<option value="Myanmar (Burma)">Myanmar (Birmania)</option>
		<option value="Namibia">Namibia</option>
		<option value="Nauru">Nauru</option>
		<option value="Nepal">Nepal</option>
		<option value="Nicaragua">Nicaragua</option>
		<option value="Niger">Niger</option>
		<option value="Nigeria">Nigeria</option>
		<option value="Niue">Niue</option>
		<option value="Norway">Norvegia</option>
		<option value="New Caledonia">Nuova Caledonia</option>
		<option value="New Zealand">Nuova Zelanda</option>
		<option value="Oman">Oman</option>
		<option value="Netherlands">Paesi Bassi</option>
		<option value="Pakistan">Pakistan</option>
		<option value="Palau">Palau</option>
		<option value="Panama">Panamá</option>
		<option value="Papua New Guinea">Papua Nuova Guinea</option>
		<option value="Paraguay">Paraguay</option>
		<option value="Peru">Perù</option>
		<option value="French Polynesia">Polinesia francese</option>
		<option value="Poland">Polonia</option>
		<option value="Portugal">Portogallo</option>
		<option value="Qatar">Qatar</option>
		<option value="Hong Kong SAR China">RAS di Hong Kong</option>
		<option value="Macau SAR China">RAS di Macao</option>
		<option value="United Kingdom">Regno Unito</option>
		<option value="Central African Republic">Repubblica Centrafricana</option>
		<option value="Macedonia">Repubblica di Macedonia</option>
		<option value="Dominican Republic">Repubblica Dominicana</option>
		<option value="Réunion">Riunione</option>
		<option value="Romania">Romania</option>
		<option value="Rwanda">Ruanda</option>
		<option value="Russia">Russia</option>
		<option value="Western Sahara">Sahara occidentale</option>
		<option value="St. Barthélemy">Saint-Barthélemy</option>
		<option value="St. Kitts &amp; Nevis">Saint Kitts e Nevis</option>
		<option value="St. Lucia">Saint Lucia</option>
		<option value="St. Martin">Saint Martin</option>
		<option value="St. Pierre &amp; Miquelon">Saint-Pierre e Miquelon</option>
		<option value="St. Vincent &amp; Grenadines">Saint Vincent e Grenadine</option>
		<option value="Samoa">Samoa</option>
		<option value="American Samoa">Samoa americane</option>
		<option value="San Marino">San Marino</option>
		<option value="St. Helena">Sant’Elena</option>
		<option value="São Tomé &amp; Príncipe">São Tomé e Príncipe</option>
		<option value="Senegal">Senegal</option>
		<option value="Serbia">Serbia</option>
		<option value="Seychelles">Seychelles</option>
		<option value="Sierra Leone">Sierra Leone</option>
		<option value="Singapore">Singapore</option>
		<option value="Syria">Siria</option>
		<option value="Slovakia">Slovacchia</option>
		<option value="Slovenia">Slovenia</option>
		<option value="Somalia">Somalia</option>
		<option value="Spain">Spagna</option>
		<option value="Sri Lanka">Sri Lanka</option>
		<option value="United States">Stati Uniti</option>
		<option value="South Africa">Sudafrica</option>
		<option value="Sudan">Sudan</option>
		<option value="Suriname">Suriname</option>
		<option value="Svalbard &amp; Jan Mayen">Svalbard e Jan Mayen</option>
		<option value="Sweden">Svezia</option>
		<option value="Switzerland">Svizzera</option>
		<option value="Swaziland">Swaziland</option>
		<option value="Tajikistan">Tagikistan</option>
		<option value="Taiwan">Taiwan</option>
		<option value="Tanzania">Tanzania</option>
		<option value="French Southern Territories">Terre australi francesi</option>
		<option value="British Indian Ocean Territory">Territorio britannico dell’Oceano Indiano</option>
		<option value="Palestinian Territories">Territori palestinesi</option>
		<option value="Thailand">Thailandia</option>
		<option value="Timor-Leste">Timor Est</option>
		<option value="Togo">Togo</option>
		<option value="Tokelau">Tokelau</option>
		<option value="Tonga">Tonga</option>
		<option value="Trinidad &amp; Tobago">Trinidad e Tobago</option>
		<option value="Tunisia">Tunisia</option>
		<option value="Turkey">Turchia</option>
		<option value="Turkmenistan">Turkmenistan</option>
		<option value="Tuvalu">Tuvalu</option>
		<option value="Ukraine">Ucraina</option>
		<option value="Uganda">Uganda</option>
		<option value="Hungary">Ungheria</option>
		<option value="Uruguay">Uruguay</option>
		<option value="Uzbekistan">Uzbekistan</option>
		<option value="Vanuatu">Vanuatu</option>
		<option value="Venezuela">Venezuela</option>
		<option value="Vietnam">Vietnam</option>
		<option value="Wallis &amp; Futuna">Wallis e Futuna</option>
		<option value="Yemen">Yemen</option>
		<option value="Zambia">Zambia</option>
		<option value="Zimbabwe">Zimbabwe</option>
		`;
	} else {
		var countries = 
		`
		<option value="" disabled="" selected=""></option>
		<option value="Afghanistan">Afghanistan</option>
		<option value="Åland Islands">Åland Islands</option>
		<option value="Albania">Albania</option>
		<option value="Algeria">Algeria</option>
		<option value="American Samoa">American Samoa</option>
		<option value="Andorra">Andorra</option>
		<option value="Angola">Angola</option>
		<option value="Anguilla">Anguilla</option>
		<option value="Antarctica">Antarctica</option>
		<option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
		<option value="Argentina">Argentina</option>
		<option value="Armenia">Armenia</option>
		<option value="Aruba">Aruba</option>
		<option value="Australia">Australia</option>
		<option value="Austria">Austria</option>
		<option value="Azerbaijan">Azerbaijan</option>
		<option value="Bahamas">Bahamas</option>
		<option value="Bahrain">Bahrain</option>
		<option value="Bangladesh">Bangladesh</option>
		<option value="Barbados">Barbados</option>
		<option value="Belarus">Belarus</option>
		<option value="Belgium">Belgium</option>
		<option value="Belize">Belize</option>
		<option value="Benin">Benin</option>
		<option value="Bermuda">Bermuda</option>
		<option value="Bhutan">Bhutan</option>
		<option value="Bolivia">Bolivia</option>
		<option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
		<option value="Botswana">Botswana</option>
		<option value="Bouvet Island">Bouvet Island</option>
		<option value="Brazil">Brazil</option>
		<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
		<option value="British Virgin Islands">British Virgin Islands</option>
		<option value="Brunei">Brunei</option>
		<option value="Bulgaria">Bulgaria</option>
		<option value="Burkina Faso">Burkina Faso</option>
		<option value="Burundi">Burundi</option>
		<option value="Cambodia">Cambodia</option>
		<option value="Cameroon">Cameroon</option>
		<option value="Canada">Canada</option>
		<option value="Cape Verde">Cape Verde</option>
		<option value="KY">Cayman Islands</option>
		<option value="Central African Republic">Central African Republic</option>
		<option value="Chad">Chad</option>
		<option value="Chile">Chile</option>
		<option value="CN">China</option>
		<option value="Christmas Island">Christmas Island</option>
		<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
		<option value="Colombia">Colombia</option>
		<option value="Comoros">Comoros</option>
		<option value="Congo - Brazzaville">Congo - Brazzaville</option>
		<option value="Congo - Kinshasa">Congo - Kinshasa</option>
		<option value="Cook Islands">Cook Islands</option>
		<option value="Costa Rica">Costa Rica</option>
		<option value="Côte d’Ivoire">Côte d’Ivoire</option>
		<option value="Croatia">Croatia</option>
		<option value="Cuba">Cuba</option>
		<option value="Cyprus">Cyprus</option>
		<option value="Czechia">Czechia</option>
		<option value="Denmark">Denmark</option>
		<option value="Djibouti">Djibouti</option>
		<option value="Dominica">Dominica</option>
		<option value="Dominican Republic">Dominican Republic</option>
		<option value="Ecuador">Ecuador</option>
		<option value="Egypt">Egypt</option>
		<option value="El Salvador">El Salvador</option>
		<option value="Equatorial Guinea">Equatorial Guinea</option>
		<option value="Eritrea">Eritrea</option>
		<option value="Estonia">Estonia</option>
		<option value="Ethiopia">Ethiopia</option>
		<option value="Falkland Islands">Falkland Islands</option>
		<option value="Faroe Islands">Faroe Islands</option>
		<option value="Fiji">Fiji</option>
		<option value="Finland">Finland</option>
		<option value="France">France</option>
		<option value="French Guiana">French Guiana</option>
		<option value="French Polynesia">French Polynesia</option>
		<option value="French Southern Territories">French Southern Territories</option>
		<option value="Gabon">Gabon</option>
		<option value="Gambia">Gambia</option>
		<option value="Georgia">Georgia</option>
		<option value="Germany">Germany</option>
		<option value="Ghana">Ghana</option>
		<option value="Gibraltar">Gibraltar</option>
		<option value="Greece">Greece</option>
		<option value="Greenland">Greenland</option>
		<option value="Grenada">Grenada</option>
		<option value="Guadeloupe">Guadeloupe</option>
		<option value="Guam">Guam</option>
		<option value="Guatemala">Guatemala</option>
		<option value="Guernsey">Guernsey</option>
		<option value="Guinea">Guinea</option>
		<option value="Guinea-Bissau">Guinea-Bissau</option>
		<option value="Guyana">Guyana</option>
		<option value="Haiti">Haiti</option>
		<option value="Heard &amp; McDonald Islands">Heard &amp; McDonald Islands</option>
		<option value="Honduras">Honduras</option>
		<option value="Hong Kong SAR China">Hong Kong SAR China</option>
		<option value="HU">Hungary</option>
		<option value="IS">Iceland</option>
		<option value="India">India</option>
		<option value="Indonesia">Indonesia</option>
		<option value="Iran">Iran</option>
		<option value="Iraq">Iraq</option>
		<option value="Ireland">Ireland</option>
		<option value="Isle of Man">Isle of Man</option>
		<option value="Israel">Israel</option>
		<option value="Italy">Italy</option>
		<option value="Jamaica">Jamaica</option>
		<option value="Japan">Japan</option>
		<option value="Jersey">Jersey</option>
		<option value="Jordan">Jordan</option>
		<option value="Kazakhstan">Kazakhstan</option>
		<option value="Kenya">Kenya</option>
		<option value="Kiribati">Kiribati</option>
		<option value="Kuwait">Kuwait</option>
		<option value="Kyrgyzstan">Kyrgyzstan</option>
		<option value="Laos">Laos</option>
		<option value="Latvia">Latvia</option>
		<option value="Lebanon">Lebanon</option>
		<option value="Lesotho">Lesotho</option>
		<option value="Liberia">Liberia</option>
		<option value="Libya">Libya</option>
		<option value="Liechtenstein">Liechtenstein</option>
		<option value="Lithuania">Lithuania</option>
		<option value="Luxembourg">Luxembourg</option>
		<option value="Macau SAR China">Macau SAR China</option>
		<option value="Macedonia">Macedonia</option>
		<option value="Madagascar">Madagascar</option>
		<option value="Malawi">Malawi</option>
		<option value="Malaysia">Malaysia</option>
		<option value="Maldives">Maldives</option>
		<option value="Mali">Mali</option>
		<option value="Malta">Malta</option>
		<option value="Marshall Islands">Marshall Islands</option>
		<option value="Martinique">Martinique</option>
		<option value="Mauritania">Mauritania</option>
		<option value="Mauritius">Mauritius</option>
		<option value="Mayotte">Mayotte</option>
		<option value="Mexico">Mexico</option>
		<option value="Micronesia">Micronesia</option>
		<option value="Moldova">Moldova</option>
		<option value="Monaco">Monaco</option>
		<option value="Mongolia">Mongolia</option>
		<option value="Montenegro">Montenegro</option>
		<option value="Montserrat">Montserrat</option>
		<option value="Morocco">Morocco</option>
		<option value="Mozambique">Mozambique</option>
		<option value="Myanmar (Burma)">Myanmar (Burma)</option>
		<option value="Namibia">Namibia</option>
		<option value="Nauru">Nauru</option>
		<option value="Nepal">Nepal</option>
		<option value="Netherlands">Netherlands</option>
		<option value="New Caledonia">New Caledonia</option>
		<option value="New Zealand">New Zealand</option>
		<option value="Nicaragua">Nicaragua</option>
		<option value="Niger">Niger</option>
		<option value="Nigeria">Nigeria</option>
		<option value="Niue">Niue</option>
		<option value="Norfolk Island">Norfolk Island</option>
		<option value="Northern Mariana Islands">Northern Mariana Islands</option>
		<option value="North Korea">North Korea</option>
		<option value="Norway">Norway</option>
		<option value="Oman">Oman</option>
		<option value="Pakistan">Pakistan</option>
		<option value="Palau">Palau</option>
		<option value="Palestinian Territories">Palestinian Territories</option>
		<option value="Panama">Panama</option>
		<option value="Papua New Guinea">Papua New Guinea</option>
		<option value="Paraguay">Paraguay</option>
		<option value="Peru">Peru</option>
		<option value="Philippines">Philippines</option>
		<option value="Pitcairn Islands">Pitcairn Islands</option>
		<option value="Poland">Poland</option>
		<option value="Portugal">Portugal</option>
		<option value="Qatar">Qatar</option>
		<option value="Réunion">Réunion</option>
		<option value="Romania">Romania</option>
		<option value="Russia">Russia</option>
		<option value="Rwanda">Rwanda</option>
		<option value="Samoa">Samoa</option>
		<option value="San Marino">San Marino</option>
		<option value="São Tomé &amp; Príncipe">São Tomé &amp; Príncipe</option>
		<option value="Saudi Arabia">Saudi Arabia</option>
		<option value="Senegal">Senegal</option>
		<option value="Serbia">Serbia</option>
		<option value="Seychelles">Seychelles</option>
		<option value="Sierra Leone">Sierra Leone</option>
		<option value="Singapore">Singapore</option>
		<option value="Slovakia">Slovakia</option>
		<option value="Slovenia">Slovenia</option>
		<option value="Solomon Islands">Solomon Islands</option>
		<option value="Somalia">Somalia</option>
		<option value="South Africa">South Africa</option>
		<option value="South Georgia &amp; South Sandwich Islands">South Georgia &amp; South Sandwich Islands</option>
		<option value="South Korea">South Korea</option>
		<option value="Spain">Spain</option>
		<option value="Sri Lanka">Sri Lanka</option>
		<option value="St. Barthélemy">St. Barthélemy</option>
		<option value="St. Helena">St. Helena</option>
		<option value="St. Kitts &amp; Nevis">St. Kitts &amp; Nevis</option>
		<option value="St. Lucia">St. Lucia</option>
		<option value="St. Martin">St. Martin</option>
		<option value="St. Pierre &amp; Miquelon">St. Pierre &amp; Miquelon</option>
		<option value="St. Vincent &amp; Grenadines">St. Vincent &amp; Grenadines</option>
		<option value="Sudan">Sudan</option>
		<option value="Suriname">Suriname</option>
		<option value="Svalbard &amp; Jan Mayen">Svalbard &amp; Jan Mayen</option>
		<option value="Swaziland">Swaziland</option>
		<option value="Sweden">Sweden</option>
		<option value="Switzerland">Switzerland</option>
		<option value="Syria">Syria</option>
		<option value="Taiwan">Taiwan</option>
		<option value="Tajikistan">Tajikistan</option>
		<option value="Tanzania">Tanzania</option>
		<option value="Thailand">Thailand</option>
		<option value="Timor-Leste">Timor-Leste</option>
		<option value="Togo">Togo</option>
		<option value="Tokelau">Tokelau</option>
		<option value="Tonga">Tonga</option>
		<option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
		<option value="Tunisia">Tunisia</option>
		<option value="Turkey">Turkey</option>
		<option value="Turkmenistan">Turkmenistan</option>
		<option value="Turks &amp; Caicos Islands">Turks &amp; Caicos Islands</option>
		<option value="Tuvalu">Tuvalu</option>
		<option value="Uganda">Uganda</option>
		<option value="Ukraine">Ukraine</option>
		<option value="United Arab Emirates">United Arab Emirates</option>
		<option value="United Kingdom">United Kingdom</option>
		<option value="United States">United States</option>
		<option value="Uruguay">Uruguay</option>
		<option value="U.S. Outlying Islands">U.S. Outlying Islands</option>
		<option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
		<option value="Uzbekistan">Uzbekistan</option>
		<option value="Vanuatu">Vanuatu</option>
		<option value="Vatican City">Vatican City</option>
		<option value="Venezuela">Venezuela</option>
		<option value="Vietnam">Vietnam</option>
		<option value="Wallis &amp; Futuna">Wallis &amp; Futuna</option>
		<option value="Western Sahara">Western Sahara</option>
		<option value="Yemen">Yemen</option>
		<option value="Zambia">Zambia</option>
		<option value="Zimbabwe">Zimbabwe</option>
		`;
	}
	var regions = ``;
	$('#selectric-billing-country').append(countries).selectric();
}
function loadBillingRegion(){
	$('#selectric-billing-region').attr("disabled", "disabled");
	$('#selectric-billing-region').selectric();
	$(document).on('change', '#selectric-billing-country', function() {
		if (window.location.href.includes("/it/")) {
    		var region_denomination = "Stato/Provincia";
    	} else {
    		var region_denomination = "State/Province";
    	}
	    if ($(this).val() === 'Italy') {
	    	if (window.location.href.includes("/it/")) {
	    		region_denomination = "Provincia";
	    	} else {
	    		region_denomination = "Province";
	    	}
			regions = 
	        `
	        <option value="Agrigento">Agrigento</option>
	        <option value="Alessandria">Alessandria</option>
	        <option value="Ancona">Ancona</option>
	        <option value="Aosta">Aosta</option>
	        <option value="Arezzo">Arezzo</option>
	        <option value="Ascoli Piceno">Ascoli Piceno</option>
	        <option value="Asti">Asti</option>
	        <option value="Avellino">Avellino</option>
	        <option value="Bari">Bari</option>
	        <option value="Barletta-Andria-Trani">Barletta-Andria-Trani</option>
	        <option value="Belluno">Belluno</option>
	        <option value="Benevento">Benevento</option>
	        <option value="Bergamo">Bergamo</option>
	        <option value="Biella">Biella</option>
	        <option value="Bologna">Bologna</option>
	        <option value="Bolzano">Bolzano</option>
	        <option value="Brescia">Brescia</option>
	        <option value="Brindisi">Brindisi</option>
	        <option value="Cagliari">Cagliari</option>
	        <option value="Caltanissetta">Caltanissetta</option>
	        <option value="Campobasso">Campobasso</option>
	        <option value="Carbonia-Iglesias">Carbonia-Iglesias</option>
	        <option value="Caserta">Caserta</option>
	        <option value="Catania">Catania</option>
	        <option value="Catanzaro">Catanzaro</option>
	        <option value="Chieti">Chieti</option>
	        <option value="Como">Como</option>
	        <option value="Cosenza">Cosenza</option>
	        <option value="Cremona">Cremona</option>
	        <option value="Crotone">Crotone</option>
	        <option value="Cuneo">Cuneo</option>
	        <option value="Enna">Enna</option>
	        <option value="Fermo">Fermo</option>
	        <option value="Ferrara">Ferrara</option>
	        <option value="Firenze">Firenze</option>
	        <option value="Foggia">Foggia</option>
	        <option value="Forlì-Cesena">Forlì-Cesena</option>
	        <option value="Frosinone">Frosinone</option>
	        <option value="Genova">Genova</option>
	        <option value="Gorizia">Gorizia</option>
	        <option value="Grosseto">Grosseto</option>
	        <option value="Imperia">Imperia</option>
	        <option value="Isernia">Isernia</option>
	        <option value="La Spezia">La Spezia</option>
	        <option value="L'Aquila">L'Aquila</option>
	        <option value="Latina">Latina</option>
	        <option value="Lecce">Lecce</option>
	        <option value="Lecco">Lecco</option>
	        <option value="Livorno">Livorno</option>
	        <option value="Lodi">Lodi</option>
	        <option value="Lucca">Lucca</option>
	        <option value="Macerata">Macerata</option>
	        <option value="Medio Campidano">Medio Campidano</option>
	        <option value="Mantova">Mantova</option>
	        <option value="Massa-Carrara">Massa-Carrara</option>
	        <option value="624">Matera</option>
	        <option value="Messina">Messina</option>
	        <option value="Milano">Milano</option>
	        <option value="Modena">Modena</option>
	        <option value="Monza e Brianza">Monza e Brianza</option>
	        <option value="Napoli">Napoli</option>
	        <option value="Novara">Novara</option>
	        <option value="Nuoro">Nuoro</option>
	        <option value="Olbia-Tempio">Olbia-Tempio</option>
	        <option value="Oristano">Oristano</option>
	        <option value="Padova">Padova</option>
	        <option value="Palermo">Palermo</option>
	        <option value="Parma">Parma</option>
	        <option value="Pavia">Pavia</option>
	        <option value="Perugia">Perugia</option>
	        <option value="Pesaro e Urbino">Pesaro e Urbino</option>
	        <option value="Pescara">Pescara</option>
	        <option value="Piacenza">Piacenza</option>
	        <option value="Pisa">Pisa</option>
	        <option value="Pistoia">Pistoia</option>
	        <option value="Pordenone">Pordenone</option>
	        <option value="Potenza">Potenza</option>
	        <option value="Prato">Prato</option>
	        <option value="Ragusa">Ragusa</option>
	        <option value="Ravenna">Ravenna</option>
	        <option value="Reggio Calabria">Reggio Calabria</option>
	        <option value="Reggio Emilia">Reggio Emilia</option>
	        <option value="Rieti">Rieti</option>
	        <option value="Rimini">Rimini</option>
	        <option value="Roma">Roma</option>
	        <option value="Rovigo">Rovigo</option>
	        <option value="Salerno">Salerno</option>
	        <option value="Medio Campidano">Medio Campidano</option>
	        <option value="Sassari">Sassari</option>
	        <option value="Savona">Savona</option>
	        <option value="Siena">Siena</option>
	        <option value="Siracusa">Siracusa</option>
	        <option value="Sondrio">Sondrio</option>
	        <option value="Taranto">Taranto</option>
	        <option value="Teramo">Teramo</option>
	        <option value="Terni">Terni</option>
	        <option value="Torino">Torino</option>
	        <option value="Ogliastra">Ogliastra</option>
	        <option value="Trapani">Trapani</option>
	        <option value="Trento">Trento</option>
	        <option value="Treviso">Treviso</option>
	        <option value="Trieste">Trieste</option>
	        <option value="Udine">Udine</option>
	        <option value="Varese">Varese</option>
	        <option value="Venezia">Venezia</option>
	        <option value="Verbano-Cusio-Ossola">Verbano-Cusio-Ossola</option>
	        <option value="Vercelli">Vercelli</option>
	        <option value="Verona">Verona</option>
	        <option value="Vibo Valentia">Vibo Valentia</option>
	        <option value="Vicenza">Vicenza</option>
	        <option value="Viterbo">Viterbo</option>
	        <option value="Sud Sardegna">Sud Sardegna</option>
	        `;
	        $('.billing-region .control').html('<select id="selectric-billing-region" name="billing_state" title="'+region_denomination+'" class="required-entry"></select>');
	        $('.region-box').html('<div class="select" id="select-billing-region-wrapper" data-ctrl="Select"><div class="selectric-wrapper selectric-select"><div class="selectric-hide-select"></div><div id="select-region"><select id="selectric-billing-region" name="billing_state"></select></div></div><span class="select__label"><label data-ctrl-dom="label" class="select__floating-label" id="region-label" for="selectric-billing-region"></label>▾</span></div>');
	        $('#selectric-billing-region').removeAttr("disabled");
	    }
	    else if ($(this).val() === 'Switzerland') {
	    	if (window.location.href.includes("/de/")) {
	    		region_denomination = "Kanton";
	    		regions = 
	    		`
		        <option value="Aargau">Aargau</option>
				<option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
				<option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
				<option value="Basel-Landschaft">Basel-Landschaft</option>
				<option value="Basel-Stadt">Basel-Stadt</option>
				<option value="Bern">Bern</option>
				<option value="Freiburg">Freiburg</option>
				<option value="Genève">Genf</option>
				<option value="Glarus">Glarus</option>
				<option value="Grigioni">Graubünden</option>
				<option value="Jura">Jura</option>
				<option value="Luzern">Luzern</option>
				<option value="Neuchâtel">Neuenburg</option>
				<option value="Nidwalden">Nidwalden</option>
				<option value="Obwalden">Obwalden</option>
				<option value="Sankt Gallen">Sankt Gallen</option>
				<option value="Schaffhausen">Schaffhausen</option>
				<option value="Schwyz">Schwyz</option>
				<option value="Solothurn">Solothurn</option>
				<option value="Thurgau">Thurgau</option>
				<option value="Ticino">Tessin</option>
				<option value="Uri">Uri</option>
				<option value="Vaud">Waadt</option>
				<option value="Valais">Wallis</option>
				<option value="Zug">Zug</option>
				<option value="Zürich">Zürich</option>
		        `;
	    	}
	    	else if (window.location.href.includes("/it/")) {
	    		region_denomination = "Cantone";
	    		regions = 
		        `
		        <option value="Aargau">Argovia</option>
				<option value="Appenzell Ausserrhoden">Appenzello Esterno</option>
				<option value="Appenzell Innerrhoden">Appenzell Interno</option>
				<option value="Basel-Landschaft">Basilea Campagna</option>
				<option value="Basel-Stadt">Basilea Città</option>
				<option value="Bern">Berna</option>
				<option value="Freiburg">Friburgo</option>
				<option value="Genève">Ginevra</option>
				<option value="Jura">Giura</option>
				<option value="Glarus">Glarona</option>
				<option value="Grigioni">Grigioni</option>
				<option value="Luzern">Lucerna</option>
				<option value="Neuchâtel">Neuchâtel</option>
				<option value="Nidwalden">Nidvaldo</option>
				<option value="Obwalden">Obvaldo</option>
				<option value="Sankt Gallen">San Gallo</option>
				<option value="Schaffhausen">Sciaffusa</option>
				<option value="Solothurn">Soletta</option>
				<option value="Schwyz">Svitto</option>
				<option value="Ticino">Ticino</option>
				<option value="Thurgau">Turgovia</option>
				<option value="Uri">Uri</option>
				<option value="Valais">Vallese</option>
				<option value="Vaud">Vaud</option>
				<option value="Zug">Zugo</option>
				<option value="Zürich">Zurigo</option>
		        `;
		    }
		    else {
		    	region_denomination = "Canton";
		    	regions = 
		        `
		        <option value="Aargau">Aargau</option>
				<option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
				<option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
				<option value="Basel-Landschaft">Basel-Landschaft</option>
				<option value="Basel-Stadt">Basel-Stadt</option>
				<option value="Bern">Bern</option>
				<option value="Freiburg">Fribourg</option>
				<option value="Genève">Geneva</option>
				<option value="Glarus">Glarus</option>
				<option value="Grigioni">Grisons</option>
				<option value="Jura">Jura</option>
				<option value="Luzern">Luzern</option>
				<option value="Neuchâtel">Neuchâtel</option>
				<option value="Nidwalden">Nidwalden</option>
				<option value="Obwalden">Obwalden</option>
				<option value="Schaffhausen">Schaffhausen</option>
				<option value="Schwyz">Schwyz</option>
				<option value="Solothurn">Solothurn</option>
				<option value="Sankt Gallen">St. Gallen</option>
				<option value="Thurgau">Thurgau</option>
				<option value="Ticino">Ticino</option>
				<option value="Uri">Uri</option>
				<option value="Valais">Valais</option>
				<option value="Vaud">Vaud</option>
				<option value="Zug">Zug</option>
				<option value="Zürich">Zürich</option>
		        `;
		    }
		    $('.billing-region .control').html('<select id="selectric-billing-region" name="billing_state" title="'+region_denomination+'" class="required-entry"></select>');
	        $('.region-box').html('<div class="select" id="select-region-wrapper" data-ctrl="Select"><div class="selectric-wrapper selectric-select"><div class="selectric-hide-select"></div><div id="select-region"><select id="selectric-billing-region" name="billing_state"></select></div></div><span class="select__label"><label data-ctrl-dom="label" class="select__floating-label" id="region-label" for="selectric-billing-region"></label>▾</span></div>');
	        $('#selectric-billing-region').removeAttr("disabled");
	    }
	    else if ($(this).val() === 'United States') {
	    	if (window.location.href.includes("/it/")) {
	    		region_denomination = "Stato";
	    	} else {
	    		region_denomination = "State";
	    	}
	        regions = `
	        <option value="Alabama">Alabama</option>
			<option value="Alaska">Alaska</option>
			<option value="Arizona">Arizona</option>
			<option value="Arkansas">Arkansas</option>
			<option value="California">California</option>
			<option value="Colorado">Colorado</option>
			<option value="Connecticut">Connecticut</option>
			<option value="District Of Columbia">District Of Columbia</option>
			<option value="Delaware">Delaware</option>
			<option value="Florida">Florida</option>
			<option value="Georgia">Georgia</option>
			<option value="Hawaii">Hawaii</option>
			<option value="Idaho">Idaho</option>
			<option value="Illinois">Illinois</option>
			<option value="Indiana">Indiana</option>
			<option value="Iowa">Iowa</option>
			<option value="Kansas">Kansas</option>
			<option value="Kentucky">Kentucky</option>
			<option value="Louisiana">Louisiana</option>
			<option value="Maine">Maine</option>
			<option value="Maryland">Maryland</option>
			<option value="Massachusetts">Massachusetts</option>
			<option value="Michigan">Michigan</option>
			<option value="Minnesota">Minnesota</option>
			<option value="Mississippi">Mississippi</option>
			<option value="Missouri">Missouri</option>
			<option value="Montana">Montana</option>
			<option value="Nebraska">Nebraska</option>
			<option value="Nevada">Nevada</option>
			<option value="New Hampshire">New Hampshire</option>
			<option value="New Jersey">New Jersey</option>
			<option value="New Mexico">New Mexico</option>
			<option value="New York">New York</option>
			<option value="North Carolina">North Carolina</option>
			<option value="North Dakota">North Dakota</option>
			<option value="Ohio">Ohio</option>
			<option value="Oklahoma">Oklahoma</option>
			<option value="Oregon">Oregon</option>
			<option value="Pennsylvania">Pennsylvania</option>
			<option value="Rhode Island">Rhode Island</option>
			<option value="South Carolina">South Carolina</option>
			<option value="South Dakota">South Dakota</option>
			<option value="Tennessee">Tennessee</option>
			<option value="Texas">Texas</option>
			<option value="Utah">Utah</option>
			<option value="Vermont">Vermont</option>
			<option value="Virgin Islands">Virgin Islands</option>
			<option value="Virginia">Virginia</option>
			<option value="Washington">Washington</option>
			<option value="West Virginia">West Virginia</option>
			<option value="Wisconsin">Wisconsin</option>
			<option value="WWyomingY">Wyoming</option>
	        `;
	        $('.billing-region .control').html('<select id="selectric-billing-region" name="billing_state" title="'+region_denomination+'" class="required-entry"></select>');
	        $('.region-box').html('<div class="select" id="select-region-wrapper" data-ctrl="Select"><div class="selectric-wrapper selectric-select"><div class="selectric-hide-select"></div><div id="select-region"><select id="selectric-billing-region" name="billing_state"></select></div></div><span class="select__label"><label data-ctrl-dom="label" class="select__floating-label" id="region-label" for="selectric-billing-region"></label>▾</span></div>');
	        $('#selectric-billing-region').removeAttr("disabled");
	    } 
	    else {
	        regions = ``;
    		$('.billing-region .control').html('<input type="text" name="billing_state" value="'+posted_billing_state+'" title="'+region_denomination+'" class="input-text required-entry" id="billing_state" aria-required="true" required>');
    		if (posted_billing_state != '') {
    			$('.region-box').html('<div class="form-group input-text   " data-ctrl="InputText"><input type="text" class="form-control input-text__input" data-ctrl-dom="input" name="billing_state" id="reg_billing_state" value="'+posted_billing_state+'" required=""><label for="reg_billing_state" class="input-text__label"><span>'+region_denomination+'</span></label></div>');
    		} else {
    			$('.region-box').html('<div class="form-group input-text   " data-ctrl="InputText"><input type="text" class="form-control input-text__input is--empty" data-ctrl-dom="input" name="billing_state" id="reg_billing_state" value="'+posted_billing_state+'" required=""><label for="reg_billing_state" class="input-text__label"><span>'+region_denomination+'</span></label></div>');
    		}
    		$(".input-text__input").change(function() {
				if(!$(this).val()) {
					$(this).addClass("is--empty");
				} else {
					$(this).removeClass("is--empty");
				}
			});
	    }
	    $('#region-label').text(region_denomination);
	    $('label[for="selectric-billing-region"] span').text(region_denomination);
	    $('#selectric-billing-region').empty().append(regions).selectric("refresh");
	});
}
function loadBillingRegionOnCopy(){
	$('#selectric-billing-region').attr("disabled", "disabled");
	$('#selectric-billing-region').selectric();
	if (window.location.href.includes("/en/")) {
		var region_denomination = "State/Province";
	} else {
		var region_denomination = "Stato/Provincia";
	}
    if ($('#selectric-billing-country').val() === 'Italy') {
    	if (window.location.href.includes("/en/")) {
    		region_denomination = "Province";
    	} else {
    		region_denomination = "Provincia";
    	}
		regions = 
        `
        <option value="Agrigento">Agrigento</option>
        <option value="Alessandria">Alessandria</option>
        <option value="Ancona">Ancona</option>
        <option value="Aosta">Aosta</option>
        <option value="Arezzo">Arezzo</option>
        <option value="Ascoli Piceno">Ascoli Piceno</option>
        <option value="Asti">Asti</option>
        <option value="Avellino">Avellino</option>
        <option value="Bari">Bari</option>
        <option value="Barletta-Andria-Trani">Barletta-Andria-Trani</option>
        <option value="Belluno">Belluno</option>
        <option value="Benevento">Benevento</option>
        <option value="Bergamo">Bergamo</option>
        <option value="Biella">Biella</option>
        <option value="Bologna">Bologna</option>
        <option value="Bolzano">Bolzano</option>
        <option value="Brescia">Brescia</option>
        <option value="Brindisi">Brindisi</option>
        <option value="Cagliari">Cagliari</option>
        <option value="Caltanissetta">Caltanissetta</option>
        <option value="Campobasso">Campobasso</option>
        <option value="Carbonia-Iglesias">Carbonia-Iglesias</option>
        <option value="Caserta">Caserta</option>
        <option value="Catania">Catania</option>
        <option value="Catanzaro">Catanzaro</option>
        <option value="Chieti">Chieti</option>
        <option value="Como">Como</option>
        <option value="Cosenza">Cosenza</option>
        <option value="Cremona">Cremona</option>
        <option value="Crotone">Crotone</option>
        <option value="Cuneo">Cuneo</option>
        <option value="Enna">Enna</option>
        <option value="Fermo">Fermo</option>
        <option value="Ferrara">Ferrara</option>
        <option value="Firenze">Firenze</option>
        <option value="Foggia">Foggia</option>
        <option value="Forlì-Cesena">Forlì-Cesena</option>
        <option value="Frosinone">Frosinone</option>
        <option value="Genova">Genova</option>
        <option value="Gorizia">Gorizia</option>
        <option value="Grosseto">Grosseto</option>
        <option value="Imperia">Imperia</option>
        <option value="Isernia">Isernia</option>
        <option value="La Spezia">La Spezia</option>
        <option value="L'Aquila">L'Aquila</option>
        <option value="Latina">Latina</option>
        <option value="Lecce">Lecce</option>
        <option value="Lecco">Lecco</option>
        <option value="Livorno">Livorno</option>
        <option value="Lodi">Lodi</option>
        <option value="Lucca">Lucca</option>
        <option value="Macerata">Macerata</option>
        <option value="Medio Campidano">Medio Campidano</option>
        <option value="Mantova">Mantova</option>
        <option value="Massa-Carrara">Massa-Carrara</option>
        <option value="624">Matera</option>
        <option value="Messina">Messina</option>
        <option value="Milano">Milano</option>
        <option value="Modena">Modena</option>
        <option value="Monza e Brianza">Monza e Brianza</option>
        <option value="Napoli">Napoli</option>
        <option value="Novara">Novara</option>
        <option value="Nuoro">Nuoro</option>
        <option value="Olbia-Tempio">Olbia-Tempio</option>
        <option value="Oristano">Oristano</option>
        <option value="Padova">Padova</option>
        <option value="Palermo">Palermo</option>
        <option value="Parma">Parma</option>
        <option value="Pavia">Pavia</option>
        <option value="Perugia">Perugia</option>
        <option value="Pesaro e Urbino">Pesaro e Urbino</option>
        <option value="Pescara">Pescara</option>
        <option value="Piacenza">Piacenza</option>
        <option value="Pisa">Pisa</option>
        <option value="Pistoia">Pistoia</option>
        <option value="Pordenone">Pordenone</option>
        <option value="Potenza">Potenza</option>
        <option value="Prato">Prato</option>
        <option value="Ragusa">Ragusa</option>
        <option value="Ravenna">Ravenna</option>
        <option value="Reggio Calabria">Reggio Calabria</option>
        <option value="Reggio Emilia">Reggio Emilia</option>
        <option value="Rieti">Rieti</option>
        <option value="Rimini">Rimini</option>
        <option value="Roma">Roma</option>
        <option value="Rovigo">Rovigo</option>
        <option value="Salerno">Salerno</option>
        <option value="Medio Campidano">Medio Campidano</option>
        <option value="Sassari">Sassari</option>
        <option value="Savona">Savona</option>
        <option value="Siena">Siena</option>
        <option value="Siracusa">Siracusa</option>
        <option value="Sondrio">Sondrio</option>
        <option value="Taranto">Taranto</option>
        <option value="Teramo">Teramo</option>
        <option value="Terni">Terni</option>
        <option value="Torino">Torino</option>
        <option value="Ogliastra">Ogliastra</option>
        <option value="Trapani">Trapani</option>
        <option value="Trento">Trento</option>
        <option value="Treviso">Treviso</option>
        <option value="Trieste">Trieste</option>
        <option value="Udine">Udine</option>
        <option value="Varese">Varese</option>
        <option value="Venezia">Venezia</option>
        <option value="Verbano-Cusio-Ossola">Verbano-Cusio-Ossola</option>
        <option value="Vercelli">Vercelli</option>
        <option value="Verona">Verona</option>
        <option value="Vibo Valentia">Vibo Valentia</option>
        <option value="Vicenza">Vicenza</option>
        <option value="Viterbo">Viterbo</option>
        <option value="Sud Sardegna">Sud Sardegna</option>
        `;
        $('.billing-region .control').html('<select id="selectric-billing-region" name="billing_state" title="'+region_denomination+'" class="required-entry"></select>');
        $('.region-box').html('<div class="select" id="select-billing-region-wrapper" data-ctrl="Select"><div class="selectric-wrapper selectric-select"><div class="selectric-hide-select"></div><div id="select-region"><select id="selectric-billing-region" name="billing_state"></select></div></div><span class="select__label"><label data-ctrl-dom="label" class="select__floating-label" id="region-label" for="selectric-billing-region"></label>▾</span></div>');
        $('#selectric-billing-region').removeAttr("disabled");
    }
    else if ($('#selectric-billing-country').val() === 'Switzerland') {
    	if (window.location.href.includes("/de/")) {
    		region_denomination = "Kanton";
    		regions = 
    		`
	        <option value="Aargau">Aargau</option>
			<option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
			<option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
			<option value="Basel-Landschaft">Basel-Landschaft</option>
			<option value="Basel-Stadt">Basel-Stadt</option>
			<option value="Bern">Bern</option>
			<option value="Freiburg">Freiburg</option>
			<option value="Genève">Genf</option>
			<option value="Glarus">Glarus</option>
			<option value="Grigioni">Graubünden</option>
			<option value="Jura">Jura</option>
			<option value="Luzern">Luzern</option>
			<option value="Neuchâtel">Neuenburg</option>
			<option value="Nidwalden">Nidwalden</option>
			<option value="Obwalden">Obwalden</option>
			<option value="Sankt Gallen">Sankt Gallen</option>
			<option value="Schaffhausen">Schaffhausen</option>
			<option value="Schwyz">Schwyz</option>
			<option value="Solothurn">Solothurn</option>
			<option value="Thurgau">Thurgau</option>
			<option value="Ticino">Tessin</option>
			<option value="Uri">Uri</option>
			<option value="Vaud">Waadt</option>
			<option value="Valais">Wallis</option>
			<option value="Zug">Zug</option>
			<option value="Zürich">Zürich</option>
	        `;
    	}
    	else if (window.location.href.includes("/it/")) {
    		region_denomination = "Cantone";
    		regions = 
	        `
	        <option value="Aargau">Argovia</option>
			<option value="Appenzell Ausserrhoden">Appenzello Esterno</option>
			<option value="Appenzell Innerrhoden">Appenzell Interno</option>
			<option value="Basel-Landschaft">Basilea Campagna</option>
			<option value="Basel-Stadt">Basilea Città</option>
			<option value="Bern">Berna</option>
			<option value="Freiburg">Friburgo</option>
			<option value="Genève">Ginevra</option>
			<option value="Jura">Giura</option>
			<option value="Glarus">Glarona</option>
			<option value="Grigioni">Grigioni</option>
			<option value="Luzern">Lucerna</option>
			<option value="Neuchâtel">Neuchâtel</option>
			<option value="Nidwalden">Nidvaldo</option>
			<option value="Obwalden">Obvaldo</option>
			<option value="Sankt Gallen">San Gallo</option>
			<option value="Schaffhausen">Sciaffusa</option>
			<option value="Solothurn">Soletta</option>
			<option value="Schwyz">Svitto</option>
			<option value="Ticino">Ticino</option>
			<option value="Thurgau">Turgovia</option>
			<option value="Uri">Uri</option>
			<option value="Valais">Vallese</option>
			<option value="Vaud">Vaud</option>
			<option value="Zug">Zugo</option>
			<option value="Zürich">Zurigo</option>
	        `;
	    }
	    else {
	    	region_denomination = "Canton";
	    	regions = 
	        `
	        <option value="Aargau">Aargau</option>
			<option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
			<option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
			<option value="Basel-Landschaft">Basel-Landschaft</option>
			<option value="Basel-Stadt">Basel-Stadt</option>
			<option value="Bern">Bern</option>
			<option value="Freiburg">Fribourg</option>
			<option value="Genève">Geneva</option>
			<option value="Glarus">Glarus</option>
			<option value="Grigioni">Grisons</option>
			<option value="Jura">Jura</option>
			<option value="Luzern">Luzern</option>
			<option value="Neuchâtel">Neuchâtel</option>
			<option value="Nidwalden">Nidwalden</option>
			<option value="Obwalden">Obwalden</option>
			<option value="Schaffhausen">Schaffhausen</option>
			<option value="Schwyz">Schwyz</option>
			<option value="Solothurn">Solothurn</option>
			<option value="Sankt Gallen">St. Gallen</option>
			<option value="Thurgau">Thurgau</option>
			<option value="Ticino">Ticino</option>
			<option value="Uri">Uri</option>
			<option value="Valais">Valais</option>
			<option value="Vaud">Vaud</option>
			<option value="Zug">Zug</option>
			<option value="Zürich">Zürich</option>
	        `;
	    }
	    $('.billing-region .control').html('<select id="selectric-billing-region" name="billing_state" title="'+region_denomination+'" class="required-entry"></select>');
        $('.region-box').html('<div class="select" id="select-region-wrapper" data-ctrl="Select"><div class="selectric-wrapper selectric-select"><div class="selectric-hide-select"></div><div id="select-region"><select id="selectric-billing-region" name="billing_state"></select></div></div><span class="select__label"><label data-ctrl-dom="label" class="select__floating-label" id="region-label" for="selectric-billing-region"></label>▾</span></div>');
        $('#selectric-billing-region').removeAttr("disabled");
    }
    else if ($('#selectric-billing-country').val() === 'United States') {
    	if (window.location.href.includes("/it/")) {
    		region_denomination = "Stato";
    	} else {
    		region_denomination = "State";
    	}
        regions = `
        <option value="Alabama">Alabama</option>
		<option value="Alaska">Alaska</option>
		<option value="Arizona">Arizona</option>
		<option value="Arkansas">Arkansas</option>
		<option value="California">California</option>
		<option value="Colorado">Colorado</option>
		<option value="Connecticut">Connecticut</option>
		<option value="District Of Columbia">District Of Columbia</option>
		<option value="Delaware">Delaware</option>
		<option value="Florida">Florida</option>
		<option value="Georgia">Georgia</option>
		<option value="Hawaii">Hawaii</option>
		<option value="Idaho">Idaho</option>
		<option value="Illinois">Illinois</option>
		<option value="Indiana">Indiana</option>
		<option value="Iowa">Iowa</option>
		<option value="Kansas">Kansas</option>
		<option value="Kentucky">Kentucky</option>
		<option value="Louisiana">Louisiana</option>
		<option value="Maine">Maine</option>
		<option value="Maryland">Maryland</option>
		<option value="Massachusetts">Massachusetts</option>
		<option value="Michigan">Michigan</option>
		<option value="Minnesota">Minnesota</option>
		<option value="Mississippi">Mississippi</option>
		<option value="Missouri">Missouri</option>
		<option value="Montana">Montana</option>
		<option value="Nebraska">Nebraska</option>
		<option value="Nevada">Nevada</option>
		<option value="New Hampshire">New Hampshire</option>
		<option value="New Jersey">New Jersey</option>
		<option value="New Mexico">New Mexico</option>
		<option value="New York">New York</option>
		<option value="North Carolina">North Carolina</option>
		<option value="North Dakota">North Dakota</option>
		<option value="Ohio">Ohio</option>
		<option value="Oklahoma">Oklahoma</option>
		<option value="Oregon">Oregon</option>
		<option value="Pennsylvania">Pennsylvania</option>
		<option value="Rhode Island">Rhode Island</option>
		<option value="South Carolina">South Carolina</option>
		<option value="South Dakota">South Dakota</option>
		<option value="Tennessee">Tennessee</option>
		<option value="Texas">Texas</option>
		<option value="Utah">Utah</option>
		<option value="Vermont">Vermont</option>
		<option value="Virgin Islands">Virgin Islands</option>
		<option value="Virginia">Virginia</option>
		<option value="Washington">Washington</option>
		<option value="West Virginia">West Virginia</option>
		<option value="Wisconsin">Wisconsin</option>
		<option value="WWyomingY">Wyoming</option>
        `;
        $('.billing-region .control').html('<select id="selectric-billing-region" name="billing_state" title="'+region_denomination+'" class="required-entry"></select>');
        $('.region-box').html('<div class="select" id="select-region-wrapper" data-ctrl="Select"><div class="selectric-wrapper selectric-select"><div class="selectric-hide-select"></div><div id="select-region"><select id="selectric-billing-region" name="billing_state"></select></div></div><span class="select__label"><label data-ctrl-dom="label" class="select__floating-label" id="region-label" for="selectric-billing-region"></label>▾</span></div>');
        $('#selectric-billing-region').removeAttr("disabled");
    } 
    else {
        regions = ``;
		$('.billing-region .control').html('<input type="text" name="billing_state" value="'+posted_billing_state+'" title="'+region_denomination+'" class="input-text required-entry" id="billing_state" aria-required="true" required>');
		if (posted_billing_state != '') {
			$('.region-box').html('<div class="form-group input-text   " data-ctrl="InputText"><input type="text" class="form-control input-text__input" data-ctrl-dom="input" name="billing_state" id="reg_billing_state" value="'+posted_billing_state+'" required=""><label for="reg_billing_state" class="input-text__label"><span>'+region_denomination+'</span></label></div>');
		} else {
			$('.region-box').html('<div class="form-group input-text   " data-ctrl="InputText"><input type="text" class="form-control input-text__input is--empty" data-ctrl-dom="input" name="billing_state" id="reg_billing_state" value="'+posted_billing_state+'" required=""><label for="reg_billing_state" class="input-text__label"><span>'+region_denomination+'</span></label></div>');
		}
		$(".input-text__input").change(function() {
			if(!$(this).val()) {
				$(this).addClass("is--empty");
			} else {
				$(this).removeClass("is--empty");
			}
		});
    }
    $('#region-label').text(region_denomination);
    $('label[for="selectric-billing-region"] span').text(region_denomination);
    $('#selectric-billing-region').empty().append(regions).selectric("refresh");
}

function loadShippingCountry(){
	if (window.location.href.includes("/it/")) {
		var countries = 
		`
		<option value="" disabled="" selected=""></option>
		<option value="Afghanistan">Afghanistan</option>
		<option value="Albania">Albania</option>
		<option value="Algeria">Algeria</option>
		<option value="U.S. Outlying Islands">Altre isole americane del Pacifico</option>
		<option value="Andorra">Andorra</option>
		<option value="Angola">Angola</option>
		<option value="Anguilla">Anguilla</option>
		<option value="Antarctica">Antartide</option>
		<option value="Antigua &amp; Barbuda">Antigua e Barbuda</option>
		<option value="Saudi Arabia">Arabia Saudita</option>
		<option value="Argentina">Argentina</option>
		<option value="Armenia">Armenia</option>
		<option value="Aruba">Aruba</option>
		<option value="Australia">Australia</option>
		<option value="Austria">Austria</option>
		<option value="Azerbaijan">Azerbaigian</option>
		<option value="Bahamas">Bahamas</option>
		<option value="Bahrain">Bahrein</option>
		<option value="Bangladesh">Bangladesh</option>
		<option value="Barbados">Barbados</option>
		<option value="Belgium">Belgio</option>
		<option value="Belize">Belize</option>
		<option value="Benin">Benin</option>
		<option value="Bermuda">Bermuda</option>
		<option value="Bhutan">Bhutan</option>
		<option value="Belarus">Bielorussia</option>
		<option value="Bolivia">Bolivia</option>
		<option value="Bosnia &amp; Herzegovina">Bosnia ed Erzegovina</option>
		<option value="Botswana">Botswana</option>
		<option value="Brazil">Brasile</option>
		<option value="Brunei">Brunei</option>
		<option value="Bulgaria">Bulgaria</option>
		<option value="Burkina Faso">Burkina Faso</option>
		<option value="Burundi">Burundi</option>
		<option value="Cambodia">Cambogia</option>
		<option value="Cameroon">Camerun</option>
		<option value="Canada">Canada</option>
		<option value="Cape Verde">Capo Verde</option>
		<option value="Czechia">Cechia</option>
		<option value="Chad">Ciad</option>
		<option value="Chile">Cile</option>
		<option value="China">Cina</option>
		<option value="Cyprus">Cipro</option>
		<option value="Vatican City">Città del Vaticano</option>
		<option value="Colombia">Colombia</option>
		<option value="Comoros">Comore</option>
		<option value="Congo - Brazzaville">Congo - Brazzaville</option>
		<option value="Congo - Kinshasa">Congo - Kinshasa</option>
		<option value="North Korea">Corea del Nord</option>
		<option value="South Korea">Corea del Sud</option>
		<option value="Côte d’Ivoire">Costa d’Avorio</option>
		<option value="Costa Rica">Costa Rica</option>
		<option value="Croatia">Croazia</option>
		<option value="Cuba">Cuba</option>
		<option value="Denmark">Danimarca</option>
		<option value="Dominica">Dominica</option>
		<option value="Ecuador">Ecuador</option>
		<option value="Egypt">Egitto</option>
		<option value="El Salvador">El Salvador</option>
		<option value="United Arab Emirates">Emirati Arabi Uniti</option>
		<option value="Eritrea">Eritrea</option>
		<option value="Estonia">Estonia</option>
		<option value="Ethiopia">Etiopia</option>
		<option value="Fiji">Figi</option>
		<option value="Philippines">Filippine</option>
		<option value="Finland">Finlandia</option>
		<option value="France">Francia</option>
		<option value="Gabon">Gabon</option>
		<option value="Gambia">Gambia</option>
		<option value="Georgia">Georgia</option>
		<option value="South Georgia &amp; South Sandwich Islands">Georgia del Sud e Sandwich australi</option>
		<option value="Germany">Germania</option>
		<option value="Ghana">Ghana</option>
		<option value="Jamaica">Giamaica</option>
		<option value="Japan">Giappone</option>
		<option value="Gibraltar">Gibilterra</option>
		<option value="Djibouti">Gibuti</option>
		<option value="Jordan">Giordania</option>
		<option value="Greece">Grecia</option>
		<option value="Grenada">Grenada</option>
		<option value="Greenland">Groenlandia</option>
		<option value="Guadeloupe">Guadalupa</option>
		<option value="Guam">Guam</option>
		<option value="Guatemala">Guatemala</option>
		<option value="Guernsey">Guernsey</option>
		<option value="Guinea">Guinea</option>
		<option value="Guinea-Bissau">Guinea-Bissau</option>
		<option value="Equatorial Guinea">Guinea Equatoriale</option>
		<option value="Guyana">Guyana</option>
		<option value="French Guiana">Guyana francese</option>
		<option value="Haiti">Haiti</option>
		<option value="Honduras">Honduras</option>
		<option value="India">India</option>
		<option value="Indonesia">Indonesia</option>
		<option value="Iran">Iran</option>
		<option value="Iraq">Iraq</option>
		<option value="Ireland">Irlanda</option>
		<option value="Iceland">Islanda</option>
		<option value="Bouvet Island">Isola Bouvet</option>
		<option value="Christmas Island">Isola Christmas</option>
		<option value="Isle of Man">Isola di Man</option>
		<option value="Norfolk Island">Isola Norfolk</option>
		<option value="Åland Islands">Isole Åland</option>
		<option value="Cayman Islands">Isole Cayman</option>
		<option value="Cocos (Keeling) Islands">Isole Cocos (Keeling)</option>
		<option value="Cook Islands">Isole Cook</option>
		<option value="Faroe Islands">Isole Fær Øer</option>
		<option value="Falkland Islands">Isole Falkland</option>
		<option value="Heard &amp; McDonald Islands">Isole Heard e McDonald</option>
		<option value="Northern Mariana Islands">Isole Marianne settentrionali</option>
		<option value="Marshall Islands">Isole Marshall</option>
		<option value="Pitcairn Islands">Isole Pitcairn</option>
		<option value="Solomon Islands">Isole Salomone</option>
		<option value="Turks &amp; Caicos Islands">Isole Turks e Caicos</option>
		<option value="U.S. Virgin Islands">Isole Vergini Americane</option>
		<option value="British Virgin Islands">Isole Vergini Britanniche</option>
		<option value="Israel">Israele</option>
		<option value="Italy">Italia</option>
		<option value="Jersey">Jersey</option>
		<option value="Kazakhstan">Kazakistan</option>
		<option value="Kenya">Kenya</option>
		<option value="Kyrgyzstan">Kirghizistan</option>
		<option value="Kiribati">Kiribati</option>
		<option value="Kuwait">Kuwait</option>
		<option value="Laos">Laos</option>
		<option value="Lesotho">Lesotho</option>
		<option value="Latvia">Lettonia</option>
		<option value="Lebanon">Libano</option>
		<option value="Liberia">Liberia</option>
		<option value="Libya">Libia</option>
		<option value="Liechtenstein">Liechtenstein</option>
		<option value="Lithuania">Lituania</option>
		<option value="Luxembourg">Lussemburgo</option>
		<option value="Madagascar">Madagascar</option>
		<option value="Malawi">Malawi</option>
		<option value="Malaysia">Malaysia</option>
		<option value="Maldives">Maldive</option>
		<option value="Mali">Mali</option>
		<option value="Malta">Malta</option>
		<option value="Morocco">Marocco</option>
		<option value="Martinique">Martinica</option>
		<option value="Mauritania">Mauritania</option>
		<option value="Mauritius">Mauritius</option>
		<option value="Mayotte">Mayotte</option>
		<option value="Mexico">Messico</option>
		<option value="Micronesia">Micronesia</option>
		<option value="Moldova">Moldavia</option>
		<option value="Monaco">Monaco</option>
		<option value="Mongolia">Mongolia</option>
		<option value="Montenegro">Montenegro</option>
		<option value="Montserrat">Montserrat</option>
		<option value="Mozambique">Mozambico</option>
		<option value="Myanmar (Burma)">Myanmar (Birmania)</option>
		<option value="Namibia">Namibia</option>
		<option value="Nauru">Nauru</option>
		<option value="Nepal">Nepal</option>
		<option value="Nicaragua">Nicaragua</option>
		<option value="Niger">Niger</option>
		<option value="Nigeria">Nigeria</option>
		<option value="Niue">Niue</option>
		<option value="Norway">Norvegia</option>
		<option value="New Caledonia">Nuova Caledonia</option>
		<option value="New Zealand">Nuova Zelanda</option>
		<option value="Oman">Oman</option>
		<option value="Netherlands">Paesi Bassi</option>
		<option value="Pakistan">Pakistan</option>
		<option value="Palau">Palau</option>
		<option value="Panama">Panamá</option>
		<option value="Papua New Guinea">Papua Nuova Guinea</option>
		<option value="Paraguay">Paraguay</option>
		<option value="Peru">Perù</option>
		<option value="French Polynesia">Polinesia francese</option>
		<option value="Poland">Polonia</option>
		<option value="Portugal">Portogallo</option>
		<option value="Qatar">Qatar</option>
		<option value="Hong Kong SAR China">RAS di Hong Kong</option>
		<option value="Macau SAR China">RAS di Macao</option>
		<option value="United Kingdom">Regno Unito</option>
		<option value="Central African Republic">Repubblica Centrafricana</option>
		<option value="Macedonia">Repubblica di Macedonia</option>
		<option value="Dominican Republic">Repubblica Dominicana</option>
		<option value="Réunion">Riunione</option>
		<option value="Romania">Romania</option>
		<option value="Rwanda">Ruanda</option>
		<option value="Russia">Russia</option>
		<option value="Western Sahara">Sahara occidentale</option>
		<option value="St. Barthélemy">Saint-Barthélemy</option>
		<option value="St. Kitts &amp; Nevis">Saint Kitts e Nevis</option>
		<option value="St. Lucia">Saint Lucia</option>
		<option value="St. Martin">Saint Martin</option>
		<option value="St. Pierre &amp; Miquelon">Saint-Pierre e Miquelon</option>
		<option value="St. Vincent &amp; Grenadines">Saint Vincent e Grenadine</option>
		<option value="Samoa">Samoa</option>
		<option value="American Samoa">Samoa americane</option>
		<option value="San Marino">San Marino</option>
		<option value="St. Helena">Sant’Elena</option>
		<option value="São Tomé &amp; Príncipe">São Tomé e Príncipe</option>
		<option value="Senegal">Senegal</option>
		<option value="Serbia">Serbia</option>
		<option value="Seychelles">Seychelles</option>
		<option value="Sierra Leone">Sierra Leone</option>
		<option value="Singapore">Singapore</option>
		<option value="Syria">Siria</option>
		<option value="Slovakia">Slovacchia</option>
		<option value="Slovenia">Slovenia</option>
		<option value="Somalia">Somalia</option>
		<option value="Spain">Spagna</option>
		<option value="Sri Lanka">Sri Lanka</option>
		<option value="United States">Stati Uniti</option>
		<option value="South Africa">Sudafrica</option>
		<option value="Sudan">Sudan</option>
		<option value="Suriname">Suriname</option>
		<option value="Svalbard &amp; Jan Mayen">Svalbard e Jan Mayen</option>
		<option value="Sweden">Svezia</option>
		<option value="Switzerland">Svizzera</option>
		<option value="Swaziland">Swaziland</option>
		<option value="Tajikistan">Tagikistan</option>
		<option value="Taiwan">Taiwan</option>
		<option value="Tanzania">Tanzania</option>
		<option value="French Southern Territories">Terre australi francesi</option>
		<option value="British Indian Ocean Territory">Territorio britannico dell’Oceano Indiano</option>
		<option value="Palestinian Territories">Territori palestinesi</option>
		<option value="Thailand">Thailandia</option>
		<option value="Timor-Leste">Timor Est</option>
		<option value="Togo">Togo</option>
		<option value="Tokelau">Tokelau</option>
		<option value="Tonga">Tonga</option>
		<option value="Trinidad &amp; Tobago">Trinidad e Tobago</option>
		<option value="Tunisia">Tunisia</option>
		<option value="Turkey">Turchia</option>
		<option value="Turkmenistan">Turkmenistan</option>
		<option value="Tuvalu">Tuvalu</option>
		<option value="Ukraine">Ucraina</option>
		<option value="Uganda">Uganda</option>
		<option value="Hungary">Ungheria</option>
		<option value="Uruguay">Uruguay</option>
		<option value="Uzbekistan">Uzbekistan</option>
		<option value="Vanuatu">Vanuatu</option>
		<option value="Venezuela">Venezuela</option>
		<option value="Vietnam">Vietnam</option>
		<option value="Wallis &amp; Futuna">Wallis e Futuna</option>
		<option value="Yemen">Yemen</option>
		<option value="Zambia">Zambia</option>
		<option value="Zimbabwe">Zimbabwe</option>
		`;
	} else {
		var countries = 
		`
		<option value="" disabled="" selected=""></option>
		<option value="Afghanistan">Afghanistan</option>
		<option value="Åland Islands">Åland Islands</option>
		<option value="Albania">Albania</option>
		<option value="Algeria">Algeria</option>
		<option value="American Samoa">American Samoa</option>
		<option value="Andorra">Andorra</option>
		<option value="Angola">Angola</option>
		<option value="Anguilla">Anguilla</option>
		<option value="Antarctica">Antarctica</option>
		<option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
		<option value="Argentina">Argentina</option>
		<option value="Armenia">Armenia</option>
		<option value="Aruba">Aruba</option>
		<option value="Australia">Australia</option>
		<option value="Austria">Austria</option>
		<option value="Azerbaijan">Azerbaijan</option>
		<option value="Bahamas">Bahamas</option>
		<option value="Bahrain">Bahrain</option>
		<option value="Bangladesh">Bangladesh</option>
		<option value="Barbados">Barbados</option>
		<option value="Belarus">Belarus</option>
		<option value="Belgium">Belgium</option>
		<option value="Belize">Belize</option>
		<option value="Benin">Benin</option>
		<option value="Bermuda">Bermuda</option>
		<option value="Bhutan">Bhutan</option>
		<option value="Bolivia">Bolivia</option>
		<option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
		<option value="Botswana">Botswana</option>
		<option value="Bouvet Island">Bouvet Island</option>
		<option value="Brazil">Brazil</option>
		<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
		<option value="British Virgin Islands">British Virgin Islands</option>
		<option value="Brunei">Brunei</option>
		<option value="Bulgaria">Bulgaria</option>
		<option value="Burkina Faso">Burkina Faso</option>
		<option value="Burundi">Burundi</option>
		<option value="Cambodia">Cambodia</option>
		<option value="Cameroon">Cameroon</option>
		<option value="Canada">Canada</option>
		<option value="Cape Verde">Cape Verde</option>
		<option value="KY">Cayman Islands</option>
		<option value="Central African Republic">Central African Republic</option>
		<option value="Chad">Chad</option>
		<option value="Chile">Chile</option>
		<option value="CN">China</option>
		<option value="Christmas Island">Christmas Island</option>
		<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
		<option value="Colombia">Colombia</option>
		<option value="Comoros">Comoros</option>
		<option value="Congo - Brazzaville">Congo - Brazzaville</option>
		<option value="Congo - Kinshasa">Congo - Kinshasa</option>
		<option value="Cook Islands">Cook Islands</option>
		<option value="Costa Rica">Costa Rica</option>
		<option value="Côte d’Ivoire">Côte d’Ivoire</option>
		<option value="Croatia">Croatia</option>
		<option value="Cuba">Cuba</option>
		<option value="Cyprus">Cyprus</option>
		<option value="Czechia">Czechia</option>
		<option value="Denmark">Denmark</option>
		<option value="Djibouti">Djibouti</option>
		<option value="Dominica">Dominica</option>
		<option value="Dominican Republic">Dominican Republic</option>
		<option value="Ecuador">Ecuador</option>
		<option value="Egypt">Egypt</option>
		<option value="El Salvador">El Salvador</option>
		<option value="Equatorial Guinea">Equatorial Guinea</option>
		<option value="Eritrea">Eritrea</option>
		<option value="Estonia">Estonia</option>
		<option value="Ethiopia">Ethiopia</option>
		<option value="Falkland Islands">Falkland Islands</option>
		<option value="Faroe Islands">Faroe Islands</option>
		<option value="Fiji">Fiji</option>
		<option value="Finland">Finland</option>
		<option value="France">France</option>
		<option value="French Guiana">French Guiana</option>
		<option value="French Polynesia">French Polynesia</option>
		<option value="French Southern Territories">French Southern Territories</option>
		<option value="Gabon">Gabon</option>
		<option value="Gambia">Gambia</option>
		<option value="Georgia">Georgia</option>
		<option value="Germany">Germany</option>
		<option value="Ghana">Ghana</option>
		<option value="Gibraltar">Gibraltar</option>
		<option value="Greece">Greece</option>
		<option value="Greenland">Greenland</option>
		<option value="Grenada">Grenada</option>
		<option value="Guadeloupe">Guadeloupe</option>
		<option value="Guam">Guam</option>
		<option value="Guatemala">Guatemala</option>
		<option value="Guernsey">Guernsey</option>
		<option value="Guinea">Guinea</option>
		<option value="Guinea-Bissau">Guinea-Bissau</option>
		<option value="Guyana">Guyana</option>
		<option value="Haiti">Haiti</option>
		<option value="Heard &amp; McDonald Islands">Heard &amp; McDonald Islands</option>
		<option value="Honduras">Honduras</option>
		<option value="Hong Kong SAR China">Hong Kong SAR China</option>
		<option value="HU">Hungary</option>
		<option value="IS">Iceland</option>
		<option value="India">India</option>
		<option value="Indonesia">Indonesia</option>
		<option value="Iran">Iran</option>
		<option value="Iraq">Iraq</option>
		<option value="Ireland">Ireland</option>
		<option value="Isle of Man">Isle of Man</option>
		<option value="Israel">Israel</option>
		<option value="Italy">Italy</option>
		<option value="Jamaica">Jamaica</option>
		<option value="Japan">Japan</option>
		<option value="Jersey">Jersey</option>
		<option value="Jordan">Jordan</option>
		<option value="Kazakhstan">Kazakhstan</option>
		<option value="Kenya">Kenya</option>
		<option value="Kiribati">Kiribati</option>
		<option value="Kuwait">Kuwait</option>
		<option value="Kyrgyzstan">Kyrgyzstan</option>
		<option value="Laos">Laos</option>
		<option value="Latvia">Latvia</option>
		<option value="Lebanon">Lebanon</option>
		<option value="Lesotho">Lesotho</option>
		<option value="Liberia">Liberia</option>
		<option value="Libya">Libya</option>
		<option value="Liechtenstein">Liechtenstein</option>
		<option value="Lithuania">Lithuania</option>
		<option value="Luxembourg">Luxembourg</option>
		<option value="Macau SAR China">Macau SAR China</option>
		<option value="Macedonia">Macedonia</option>
		<option value="Madagascar">Madagascar</option>
		<option value="Malawi">Malawi</option>
		<option value="Malaysia">Malaysia</option>
		<option value="Maldives">Maldives</option>
		<option value="Mali">Mali</option>
		<option value="Malta">Malta</option>
		<option value="Marshall Islands">Marshall Islands</option>
		<option value="Martinique">Martinique</option>
		<option value="Mauritania">Mauritania</option>
		<option value="Mauritius">Mauritius</option>
		<option value="Mayotte">Mayotte</option>
		<option value="Mexico">Mexico</option>
		<option value="Micronesia">Micronesia</option>
		<option value="Moldova">Moldova</option>
		<option value="Monaco">Monaco</option>
		<option value="Mongolia">Mongolia</option>
		<option value="Montenegro">Montenegro</option>
		<option value="Montserrat">Montserrat</option>
		<option value="Morocco">Morocco</option>
		<option value="Mozambique">Mozambique</option>
		<option value="Myanmar (Burma)">Myanmar (Burma)</option>
		<option value="Namibia">Namibia</option>
		<option value="Nauru">Nauru</option>
		<option value="Nepal">Nepal</option>
		<option value="Netherlands">Netherlands</option>
		<option value="New Caledonia">New Caledonia</option>
		<option value="New Zealand">New Zealand</option>
		<option value="Nicaragua">Nicaragua</option>
		<option value="Niger">Niger</option>
		<option value="Nigeria">Nigeria</option>
		<option value="Niue">Niue</option>
		<option value="Norfolk Island">Norfolk Island</option>
		<option value="Northern Mariana Islands">Northern Mariana Islands</option>
		<option value="North Korea">North Korea</option>
		<option value="Norway">Norway</option>
		<option value="Oman">Oman</option>
		<option value="Pakistan">Pakistan</option>
		<option value="Palau">Palau</option>
		<option value="Palestinian Territories">Palestinian Territories</option>
		<option value="Panama">Panama</option>
		<option value="Papua New Guinea">Papua New Guinea</option>
		<option value="Paraguay">Paraguay</option>
		<option value="Peru">Peru</option>
		<option value="Philippines">Philippines</option>
		<option value="Pitcairn Islands">Pitcairn Islands</option>
		<option value="Poland">Poland</option>
		<option value="Portugal">Portugal</option>
		<option value="Qatar">Qatar</option>
		<option value="Réunion">Réunion</option>
		<option value="Romania">Romania</option>
		<option value="Russia">Russia</option>
		<option value="Rwanda">Rwanda</option>
		<option value="Samoa">Samoa</option>
		<option value="San Marino">San Marino</option>
		<option value="São Tomé &amp; Príncipe">São Tomé &amp; Príncipe</option>
		<option value="Saudi Arabia">Saudi Arabia</option>
		<option value="Senegal">Senegal</option>
		<option value="Serbia">Serbia</option>
		<option value="Seychelles">Seychelles</option>
		<option value="Sierra Leone">Sierra Leone</option>
		<option value="Singapore">Singapore</option>
		<option value="Slovakia">Slovakia</option>
		<option value="Slovenia">Slovenia</option>
		<option value="Solomon Islands">Solomon Islands</option>
		<option value="Somalia">Somalia</option>
		<option value="South Africa">South Africa</option>
		<option value="South Georgia &amp; South Sandwich Islands">South Georgia &amp; South Sandwich Islands</option>
		<option value="South Korea">South Korea</option>
		<option value="Spain">Spain</option>
		<option value="Sri Lanka">Sri Lanka</option>
		<option value="St. Barthélemy">St. Barthélemy</option>
		<option value="St. Helena">St. Helena</option>
		<option value="St. Kitts &amp; Nevis">St. Kitts &amp; Nevis</option>
		<option value="St. Lucia">St. Lucia</option>
		<option value="St. Martin">St. Martin</option>
		<option value="St. Pierre &amp; Miquelon">St. Pierre &amp; Miquelon</option>
		<option value="St. Vincent &amp; Grenadines">St. Vincent &amp; Grenadines</option>
		<option value="Sudan">Sudan</option>
		<option value="Suriname">Suriname</option>
		<option value="Svalbard &amp; Jan Mayen">Svalbard &amp; Jan Mayen</option>
		<option value="Swaziland">Swaziland</option>
		<option value="Sweden">Sweden</option>
		<option value="Switzerland">Switzerland</option>
		<option value="Syria">Syria</option>
		<option value="Taiwan">Taiwan</option>
		<option value="Tajikistan">Tajikistan</option>
		<option value="Tanzania">Tanzania</option>
		<option value="Thailand">Thailand</option>
		<option value="Timor-Leste">Timor-Leste</option>
		<option value="Togo">Togo</option>
		<option value="Tokelau">Tokelau</option>
		<option value="Tonga">Tonga</option>
		<option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
		<option value="Tunisia">Tunisia</option>
		<option value="Turkey">Turkey</option>
		<option value="Turkmenistan">Turkmenistan</option>
		<option value="Turks &amp; Caicos Islands">Turks &amp; Caicos Islands</option>
		<option value="Tuvalu">Tuvalu</option>
		<option value="Uganda">Uganda</option>
		<option value="Ukraine">Ukraine</option>
		<option value="United Arab Emirates">United Arab Emirates</option>
		<option value="United Kingdom">United Kingdom</option>
		<option value="United States">United States</option>
		<option value="Uruguay">Uruguay</option>
		<option value="U.S. Outlying Islands">U.S. Outlying Islands</option>
		<option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
		<option value="Uzbekistan">Uzbekistan</option>
		<option value="Vanuatu">Vanuatu</option>
		<option value="Vatican City">Vatican City</option>
		<option value="Venezuela">Venezuela</option>
		<option value="Vietnam">Vietnam</option>
		<option value="Wallis &amp; Futuna">Wallis &amp; Futuna</option>
		<option value="Western Sahara">Western Sahara</option>
		<option value="Yemen">Yemen</option>
		<option value="Zambia">Zambia</option>
		<option value="Zimbabwe">Zimbabwe</option>
		`;
	}
	var regions = ``;
	$('#selectric-shipping-country').append(countries).selectric();
}
function loadShippingRegion(){
	$('#selectric-shipping-region').attr("disabled", "disabled");
	$('#selectric-shipping-region').selectric();
	$(document).on('change', '#selectric-shipping-country', function() {
		if (window.location.href.includes("/it/")) {
    		var region_denomination = "Stato/Provincia";
    	} else {
    		var region_denomination = "State/Province";
    	}
	    if ($(this).val() === 'Italy') {
	    	if (window.location.href.includes("/it/")) {
	    		region_denomination = "Provincia";
	    	} else {
	    		region_denomination = "Province";
	    	}
			regions = 
	        `
	        <option value="Agrigento">Agrigento</option>
	        <option value="Alessandria">Alessandria</option>
	        <option value="Ancona">Ancona</option>
	        <option value="Aosta">Aosta</option>
	        <option value="Arezzo">Arezzo</option>
	        <option value="Ascoli Piceno">Ascoli Piceno</option>
	        <option value="Asti">Asti</option>
	        <option value="Avellino">Avellino</option>
	        <option value="Bari">Bari</option>
	        <option value="Barletta-Andria-Trani">Barletta-Andria-Trani</option>
	        <option value="Belluno">Belluno</option>
	        <option value="Benevento">Benevento</option>
	        <option value="Bergamo">Bergamo</option>
	        <option value="Biella">Biella</option>
	        <option value="Bologna">Bologna</option>
	        <option value="Bolzano">Bolzano</option>
	        <option value="Brescia">Brescia</option>
	        <option value="Brindisi">Brindisi</option>
	        <option value="Cagliari">Cagliari</option>
	        <option value="Caltanissetta">Caltanissetta</option>
	        <option value="Campobasso">Campobasso</option>
	        <option value="Carbonia-Iglesias">Carbonia-Iglesias</option>
	        <option value="Caserta">Caserta</option>
	        <option value="Catania">Catania</option>
	        <option value="Catanzaro">Catanzaro</option>
	        <option value="Chieti">Chieti</option>
	        <option value="Como">Como</option>
	        <option value="Cosenza">Cosenza</option>
	        <option value="Cremona">Cremona</option>
	        <option value="Crotone">Crotone</option>
	        <option value="Cuneo">Cuneo</option>
	        <option value="Enna">Enna</option>
	        <option value="Fermo">Fermo</option>
	        <option value="Ferrara">Ferrara</option>
	        <option value="Firenze">Firenze</option>
	        <option value="Foggia">Foggia</option>
	        <option value="Forlì-Cesena">Forlì-Cesena</option>
	        <option value="Frosinone">Frosinone</option>
	        <option value="Genova">Genova</option>
	        <option value="Gorizia">Gorizia</option>
	        <option value="Grosseto">Grosseto</option>
	        <option value="Imperia">Imperia</option>
	        <option value="Isernia">Isernia</option>
	        <option value="La Spezia">La Spezia</option>
	        <option value="L'Aquila">L'Aquila</option>
	        <option value="Latina">Latina</option>
	        <option value="Lecce">Lecce</option>
	        <option value="Lecco">Lecco</option>
	        <option value="Livorno">Livorno</option>
	        <option value="Lodi">Lodi</option>
	        <option value="Lucca">Lucca</option>
	        <option value="Macerata">Macerata</option>
	        <option value="Medio Campidano">Medio Campidano</option>
	        <option value="Mantova">Mantova</option>
	        <option value="Massa-Carrara">Massa-Carrara</option>
	        <option value="624">Matera</option>
	        <option value="Messina">Messina</option>
	        <option value="Milano">Milano</option>
	        <option value="Modena">Modena</option>
	        <option value="Monza e Brianza">Monza e Brianza</option>
	        <option value="Napoli">Napoli</option>
	        <option value="Novara">Novara</option>
	        <option value="Nuoro">Nuoro</option>
	        <option value="Olbia-Tempio">Olbia-Tempio</option>
	        <option value="Oristano">Oristano</option>
	        <option value="Padova">Padova</option>
	        <option value="Palermo">Palermo</option>
	        <option value="Parma">Parma</option>
	        <option value="Pavia">Pavia</option>
	        <option value="Perugia">Perugia</option>
	        <option value="Pesaro e Urbino">Pesaro e Urbino</option>
	        <option value="Pescara">Pescara</option>
	        <option value="Piacenza">Piacenza</option>
	        <option value="Pisa">Pisa</option>
	        <option value="Pistoia">Pistoia</option>
	        <option value="Pordenone">Pordenone</option>
	        <option value="Potenza">Potenza</option>
	        <option value="Prato">Prato</option>
	        <option value="Ragusa">Ragusa</option>
	        <option value="Ravenna">Ravenna</option>
	        <option value="Reggio Calabria">Reggio Calabria</option>
	        <option value="Reggio Emilia">Reggio Emilia</option>
	        <option value="Rieti">Rieti</option>
	        <option value="Rimini">Rimini</option>
	        <option value="Roma">Roma</option>
	        <option value="Rovigo">Rovigo</option>
	        <option value="Salerno">Salerno</option>
	        <option value="Medio Campidano">Medio Campidano</option>
	        <option value="Sassari">Sassari</option>
	        <option value="Savona">Savona</option>
	        <option value="Siena">Siena</option>
	        <option value="Siracusa">Siracusa</option>
	        <option value="Sondrio">Sondrio</option>
	        <option value="Taranto">Taranto</option>
	        <option value="Teramo">Teramo</option>
	        <option value="Terni">Terni</option>
	        <option value="Torino">Torino</option>
	        <option value="Ogliastra">Ogliastra</option>
	        <option value="Trapani">Trapani</option>
	        <option value="Trento">Trento</option>
	        <option value="Treviso">Treviso</option>
	        <option value="Trieste">Trieste</option>
	        <option value="Udine">Udine</option>
	        <option value="Varese">Varese</option>
	        <option value="Venezia">Venezia</option>
	        <option value="Verbano-Cusio-Ossola">Verbano-Cusio-Ossola</option>
	        <option value="Vercelli">Vercelli</option>
	        <option value="Verona">Verona</option>
	        <option value="Vibo Valentia">Vibo Valentia</option>
	        <option value="Vicenza">Vicenza</option>
	        <option value="Viterbo">Viterbo</option>
	        <option value="Sud Sardegna">Sud Sardegna</option>
	        `;
	        $('.shipping-region .control').html('<select id="selectric-shipping-region" name="shipping_state" title="'+region_denomination+'" class="required-entry"></select>');
	        $('#selectric-shipping-region').removeAttr("disabled");
	    }
	    else if ($(this).val() === 'Switzerland') {
	    	if (window.location.href.includes("/de/")) {
	    		region_denomination = "Kanton";
	    		regions = 
	    		`
		        <option value="Aargau">Aargau</option>
				<option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
				<option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
				<option value="Basel-Landschaft">Basel-Landschaft</option>
				<option value="Basel-Stadt">Basel-Stadt</option>
				<option value="Bern">Bern</option>
				<option value="Freiburg">Freiburg</option>
				<option value="Genève">Genf</option>
				<option value="Glarus">Glarus</option>
				<option value="Grigioni">Graubünden</option>
				<option value="Jura">Jura</option>
				<option value="Luzern">Luzern</option>
				<option value="Neuchâtel">Neuenburg</option>
				<option value="Nidwalden">Nidwalden</option>
				<option value="Obwalden">Obwalden</option>
				<option value="Sankt Gallen">Sankt Gallen</option>
				<option value="Schaffhausen">Schaffhausen</option>
				<option value="Schwyz">Schwyz</option>
				<option value="Solothurn">Solothurn</option>
				<option value="Thurgau">Thurgau</option>
				<option value="Ticino">Tessin</option>
				<option value="Uri">Uri</option>
				<option value="Vaud">Waadt</option>
				<option value="Valais">Wallis</option>
				<option value="Zug">Zug</option>
				<option value="Zürich">Zürich</option>
		        `;
	    	}
	    	else if (window.location.href.includes("/it/")) {
	    		region_denomination = "Cantone";
	    		regions = 
		        `
		        <option value="Aargau">Argovia</option>
				<option value="Appenzell Ausserrhoden">Appenzello Esterno</option>
				<option value="Appenzell Innerrhoden">Appenzell Interno</option>
				<option value="Basel-Landschaft">Basilea Campagna</option>
				<option value="Basel-Stadt">Basilea Città</option>
				<option value="Bern">Berna</option>
				<option value="Freiburg">Friburgo</option>
				<option value="Genève">Ginevra</option>
				<option value="Jura">Giura</option>
				<option value="Glarus">Glarona</option>
				<option value="Grigioni">Grigioni</option>
				<option value="Luzern">Lucerna</option>
				<option value="Neuchâtel">Neuchâtel</option>
				<option value="Nidwalden">Nidvaldo</option>
				<option value="Obwalden">Obvaldo</option>
				<option value="Sankt Gallen">San Gallo</option>
				<option value="Schaffhausen">Sciaffusa</option>
				<option value="Solothurn">Soletta</option>
				<option value="Schwyz">Svitto</option>
				<option value="Ticino">Ticino</option>
				<option value="Thurgau">Turgovia</option>
				<option value="Uri">Uri</option>
				<option value="Valais">Vallese</option>
				<option value="Vaud">Vaud</option>
				<option value="Zug">Zugo</option>
				<option value="Zürich">Zurigo</option>
		        `;
		    }
		    else {
		    	region_denomination = "Canton";
		    	regions = 
		        `
		        <option value="Aargau">Aargau</option>
				<option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
				<option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
				<option value="Basel-Landschaft">Basel-Landschaft</option>
				<option value="Basel-Stadt">Basel-Stadt</option>
				<option value="Bern">Bern</option>
				<option value="Freiburg">Fribourg</option>
				<option value="Genève">Geneva</option>
				<option value="Glarus">Glarus</option>
				<option value="Grigioni">Grisons</option>
				<option value="Jura">Jura</option>
				<option value="Luzern">Luzern</option>
				<option value="Neuchâtel">Neuchâtel</option>
				<option value="Nidwalden">Nidwalden</option>
				<option value="Obwalden">Obwalden</option>
				<option value="Schaffhausen">Schaffhausen</option>
				<option value="Schwyz">Schwyz</option>
				<option value="Solothurn">Solothurn</option>
				<option value="Sankt Gallen">St. Gallen</option>
				<option value="Thurgau">Thurgau</option>
				<option value="Ticino">Ticino</option>
				<option value="Uri">Uri</option>
				<option value="Valais">Valais</option>
				<option value="Vaud">Vaud</option>
				<option value="Zug">Zug</option>
				<option value="Zürich">Zürich</option>
		        `;
		    }
		    $('.shipping-region .control').html('<select id="selectric-shipping-region" name="shipping_state" title="'+region_denomination+'" class="required-entry"></select>');
	        $('#selectric-shipping-region').removeAttr("disabled");
	    }
	    else if ($(this).val() === 'United States') {
	    	if (window.location.href.includes("/it/")) {
	    		region_denomination = "Stato";
	    	} else {
	    		region_denomination = "State";
	    	}
	        regions = `
	        <option value="Alabama">Alabama</option>
			<option value="Alaska">Alaska</option>
			<option value="Arizona">Arizona</option>
			<option value="Arkansas">Arkansas</option>
			<option value="California">California</option>
			<option value="Colorado">Colorado</option>
			<option value="Connecticut">Connecticut</option>
			<option value="District Of Columbia">District Of Columbia</option>
			<option value="Delaware">Delaware</option>
			<option value="Florida">Florida</option>
			<option value="Georgia">Georgia</option>
			<option value="Hawaii">Hawaii</option>
			<option value="Idaho">Idaho</option>
			<option value="Illinois">Illinois</option>
			<option value="Indiana">Indiana</option>
			<option value="Iowa">Iowa</option>
			<option value="Kansas">Kansas</option>
			<option value="Kentucky">Kentucky</option>
			<option value="Louisiana">Louisiana</option>
			<option value="Maine">Maine</option>
			<option value="Maryland">Maryland</option>
			<option value="Massachusetts">Massachusetts</option>
			<option value="Michigan">Michigan</option>
			<option value="Minnesota">Minnesota</option>
			<option value="Mississippi">Mississippi</option>
			<option value="Missouri">Missouri</option>
			<option value="Montana">Montana</option>
			<option value="Nebraska">Nebraska</option>
			<option value="Nevada">Nevada</option>
			<option value="New Hampshire">New Hampshire</option>
			<option value="New Jersey">New Jersey</option>
			<option value="New Mexico">New Mexico</option>
			<option value="New York">New York</option>
			<option value="North Carolina">North Carolina</option>
			<option value="North Dakota">North Dakota</option>
			<option value="Ohio">Ohio</option>
			<option value="Oklahoma">Oklahoma</option>
			<option value="Oregon">Oregon</option>
			<option value="Pennsylvania">Pennsylvania</option>
			<option value="Rhode Island">Rhode Island</option>
			<option value="South Carolina">South Carolina</option>
			<option value="South Dakota">South Dakota</option>
			<option value="Tennessee">Tennessee</option>
			<option value="Texas">Texas</option>
			<option value="Utah">Utah</option>
			<option value="Vermont">Vermont</option>
			<option value="Virgin Islands">Virgin Islands</option>
			<option value="Virginia">Virginia</option>
			<option value="Washington">Washington</option>
			<option value="West Virginia">West Virginia</option>
			<option value="Wisconsin">Wisconsin</option>
			<option value="WWyomingY">Wyoming</option>
	        `;
	        $('.shipping-region .control').html('<select id="selectric-shipping-region" name="shipping_state" title="'+region_denomination+'" class="required-entry"></select>');
	        $('#selectric-shipping-region').removeAttr("disabled");
	    } 
	    else {
	        regions = ``;
    		$('.shipping-region .control').html('<input type="text" name="shipping_state" value="'+posted_shipping_state+'" title="'+region_denomination+'" class="input-text required-entry" id="shipping_state" aria-required="true" required>');
    		$(".input-text__input").change(function() {
				if(!$(this).val()) {
					$(this).addClass("is--empty");
				} else {
					$(this).removeClass("is--empty");
				}
			});
	    }
	    $('label[for="selectric-shipping-region"] span').text(region_denomination);
	    $('#selectric-shipping-region').empty().append(regions).selectric("refresh");
	});
}

loadBillingCountry();

loadBillingRegion();

loadShippingCountry();

loadShippingRegion();

$('#selectric-role').selectric();

$("body").on('click', '.cta-password', function() {
    $('.cta-password i').toggleClass("fa-eye fa-eye-slash");
    if ($('#reg_password').attr("type") === "password") {
        $('#reg_password').attr("type", "text");
    } else {
        $('#reg_password').attr("type", "password");
    }
    return false;
});

function eye() {
	$('.cta-password i').toggleClass("fa-eye fa-eye-slash");
	if ($('#password').attr("type") === "password") {
        $('#password').attr("type", "text");
    } else {
        $('#password').attr("type", "password");
    }
    return false;
}

$("body").on('click', '.cta-confirm', function() {
    $('.cta-confirm i').toggleClass("fa-eye fa-eye-slash");
    if ($('#reg_password-confirmation').attr("type") === "password") {
        $('#reg_password-confirmation').attr("type", "text");
    } else {
        $('#reg_password-confirmation').attr("type", "password");
    }
    return false;
});

if(window.location.href.includes("edit-account") || window.location.href.endsWith("/member/account/")) {
	$('.profile').addClass('active');
}

if(window.location.href.includes("edit-address")) {
	$('.address').addClass('active');
}

$("body").on('click', '.copy-address', function() {
    $('#billing_first_name').val($('#shipping_first_name').val());
    $('#billing_last_name').val($('#shipping_last_name').val());
    $('#billing_address_1').val($('#shipping_address_1').val());
    $('#billing_postcode').val($('#shipping_postcode').val());
    $('#billing_city').val($('#shipping_city').val());
    $('#selectric-billing-country').val($('#selectric-shipping-country').val());
  	$('#selectric-billing-country').selectric("refresh");
  	loadBillingRegionOnCopy();
  	$('#selectric-billing-region').val($('#selectric-shipping-region').val());
  	$('#selectric-billing-region').selectric("refresh");
  	$('#billing_state').val($('#shipping_state').val());
    return false;
});