function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		 change.target.classList.add('element-show');
	  }
	});
 }
 let options = { threshold: [0.0] };
 let observer = new IntersectionObserver(onEntry, options);
 let elements = document.querySelectorAll('.element-animation');
 for (let elm of elements) {
	observer.observe(elm);
 }
 //=================================================
 function onEntry1(entry1) {
	entry1.forEach(change1 => {
	  if (change1.isIntersecting) {
		 change1.target.classList.add('rotate-show');
	  }
	});
 }
 let options1 = { threshold: [0.0] };
 let observer1 = new IntersectionObserver(onEntry1, options);
 let elements1 = document.querySelectorAll('.rotate');
 for (let elm1 of elements1) {
	observer1.observe(elm1);
 }


