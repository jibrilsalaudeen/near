
var modal, modalImg, captionText, close;

// Event Handler
function imageClicked(e) {
   // set modal Elements on first click
   !modal && (
        modal = $("#modal"),
        modalImg = $("#modalImg"),
        captionText = $("#captionText"),
        // find the 'close' button and 
        // add an event listener
        close = $("#close"),
        close.addEventListener("click", closeModal, !1)
    );

    // the clicked image
    var clickedImage = e.target;

    // set the Elements in the 'modal' box
    modalImg.src = clickedImage.src;
    captionText.textContent = clickedImage.title;
    modal.style.display = "block";
}

// Event Handler
function closeModal(e) {
    modal.style.display = "none";
}

// Finally, add an event listener to
// every image with a class .clickable
$(".clickable").forEach(function(im) {
    im.addEventListener("click", imageClicked, !1);
});







//Ajax

$(function() {
	$('form').submit(function(e){
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: 'form.php',
			data: $(this).serialize(),
			success: (message) =>{
				alert(`${message}`)
			},
			error: (error) => {
				alert(`${error}`)
			}
		})
	})
})