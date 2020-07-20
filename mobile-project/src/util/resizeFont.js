/*---------------- set body size的公式：------------------*/
function flexible(window, document) {
	var docEl = document.documentElement
	var dpr = window.devicePixelRatio || 1
	// adjust body font size
	function setBodyFontSize() {
		if(document.body) {
			document.body.style.fontSize = (12 * dpr) + 'px'
//			alert('dpr:'+(12 * dpr) + 'px')
		} else {
			document.addEventListener('DOMContentLoaded', setBodyFontSize)
		}
	}
	setBodyFontSize();
	// set 1rem = viewWidth / 10
	function setRemUnit() {
		if(docEl.clientWidth<=320){
			docEl.style.fontSize = "28px";
		}
		else{
			var rem = docEl.clientWidth / 10;
			var sizeFont = rem + 'px';
			docEl.style.fontSize = sizeFont;
		}
//		alert('rem:'+rem)
	}
	setRemUnit()
	// reset rem unit on page resize
	window.addEventListener('resize', setRemUnit)

	// detect 0.5px supports
	if(dpr >= 2) {
		var fakeBody = document.createElement('body')
		var testElement = document.createElement('div')
		testElement.style.border = '.5px solid transparent'
		fakeBody.appendChild(testElement)
		docEl.appendChild(fakeBody)
		if(testElement.offsetHeight === 1) {
			docEl.classList.add('hairlines')
		}
		docEl.removeChild(fakeBody)
	}
	document.body.style.opacity=1;
}
//调用
flexible(window, document); //set size