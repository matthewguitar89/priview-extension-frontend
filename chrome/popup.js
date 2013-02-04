function specific_info(what_sort){
	document.getElementById('specific_info_span').style.visibility = 'visible';
	//first have to close existing ones
	for(var thing in document.getElementById('specific_info_span').children){
		thing.style.visibility = 'hidden';
	}
	//then open this specific one
	document.getElementById('specific_info_'+what_sort).style.visibility = 'visible';
}

function setLinkFunctionality(){
	//mega annoying that you can't seem to have onClick within popup.html
	for(var iconLink in document.getElementById('rowIcons').children){
		iconLink.click = specific_info(iconLink.children[0].id.replace('icon_', ''))
	}
}

window.onload = setLinkFunctionality();