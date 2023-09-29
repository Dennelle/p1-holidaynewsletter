//alert("The Walton Family Newsletter");

function toggleDisplay(imageId, textId) {
const imageElement = document.getElementById (imageId);
const textElement = document.getElementById (textId);

imageElement.addEventListener('click', function(){
    if (textElement.style.display === 'none') {
        textElement.style.display = 'block';
    } else {
            textElement.style.display = 'none';
        }
    });
}

toggleDisplay ('clickableImage1', 'displayText1');
toggleDisplay ('clickableImage2', 'displayText2');
toggleDisplay ('clickableImage3', 'displayText3');
toggleDisplay ('clickableImage4', 'displayText4');
toggleDisplay ('clickableImage5', 'displayText5');
toggleDisplay ('clickableImage6', 'displayText6');
toggleDisplay ('clickableImage7', 'displayText7');
toggleDisplay ('clickableImage8', 'displayText8');
toggleDisplay ('clickableImage9', 'displayText9');
toggleDisplay ('clickableImage10', 'displayText10');

/*document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 10; i++) {
        const textElement = document.getElementById('displayText' + i);
        textElement.style.display = 'none';
    }
});
*/
