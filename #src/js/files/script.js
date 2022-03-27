(function () {
	var square = document.querySelector('.square-wrapper');
 
	var observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		 var entrySquare = entry.target.querySelector('.square');
		 if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
			return;
		 }
		 
		 if (entry.isIntersecting) {
			if(entrySquare.classList.contains('square-animation')){
				return;
			} else {
				entrySquare.classList.add('square-animation');
				
			}
		 }
 
	
	  });
	});
	observer.observe(square);
 })();
 
 //=========================================================================================

/*  (function () {
	var visible = document.querySelector('.visible-wrapper');
 
	var observerVis = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		 var entryVisible = entry.target.querySelector('.visibleAnim');
		 if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
			return;
		 }
		 if (entry.isIntersecting) {
			if(entryVisible.classList.contains('visible-animation')){
				return;
			} else {
				entryVisible.classList.add('visible-animation');
				return;
			}
		 } */
		/*  entryVisible.classList.remove('visible-animation'); */

	  /* });
	});
 
	observerVis.observe(visible);
 })(); */
//=======================================================================================

(function () {
	var square1 = document.querySelector('.visible-wrapper');
 
	var observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		 var entrySquare = entry.target.querySelector('.visibleAnim');
		 if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
			return;
		 }
		 
		 if (entry.isIntersecting) {
			if(entrySquare.classList.contains('visible-animation')){
				return;
			} else {
				entrySquare.classList.add('visible-animation');
				
			}
		 }
 
	
	  });
	});
	observer.observe(square1);
 })();
 