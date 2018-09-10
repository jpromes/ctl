<script>
function fedpov(house,income,percentage){
	// Determines if your income is less than or equal to 
	// a percentage of the 2018 federal poverty guidelines 
	// for the contiguous United States. See
	// https://www.federalregister.gov/documents/2018/01/18/2018-00814/annual-update-of-the-hhs-poverty-guidelines
	
		var line = NaN;
	
		if (house == 1) {
			line = 12140;
		} else if (house == 2) {
			line = 16460;
		} else if (house == 3) {
			line = 20780;
		} else if (house == 4) {
			line = 25100;
		} else if (house == 5) {
			line = 29420;
		} else if (house == 6) {
			line = 33740;
		} else if (house == 7) {
			line = 38060;
		} else if (house == 8) {
			line = 42380;
		} else if (house > 8) {
			line = 42380 + (house-8)*4320;
		}
	
		if (income <= (line*(percentage/100))) {
			return true;
		} else {
			return false;
		}
	}	
</script>	
