//alert("The Walton Family Newsletter");

function toggleDisplay(imageId, textId) {
    const imageEl = document.querySelector(`#${imageId}`);
    const textEl = document.querySelector(`#${textId}`);

    imageEl.addEventListener('click', function() {
        if (textEl.style.display === 'none' || !textEl.style.display) {
            textEl.style.display = 'block';
        } else {
            textEl.style.display = 'none';
        }
    });
}

toggleDisplay('clickableImage1', 'displayText1');
toggleDisplay('clickableImage2', 'displayText2');
toggleDisplay('clickableImage3', 'displayText3');
toggleDisplay('clickableImage4', 'displayText4');
toggleDisplay('clickableImage5', 'displayText5');
toggleDisplay('clickableImage6', 'displayText6');
toggleDisplay('clickableImage7', 'displayText7');
toggleDisplay('clickableImage8', 'displayText8');
toggleDisplay('clickableImage9', 'displayText9');
toggleDisplay('clickableImage10', 'displayText10');
