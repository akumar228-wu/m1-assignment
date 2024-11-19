
var photos = [];
var fileNames = [];
var imageList = [];
var captions = [];
var descriptions = [];
var openList = "<li id='photo";
var closeList = "</li>";
var openCaptionTag = "<div class='gallery-caption'>";
var closeCaptionTag = "</div>";
var openDescTag = "<div class='description'>";
var closeDescTag = "</div>";



var captions = [
    "Charming Chihuahua",
    "Playful Terrier",
    "Gentle Rabbit",
    "Adorable Golden Pup",
    "Adoptable Companion",
    "Cuddly Ginger Kittens",
    "Relaxed Tabby Cat",
    "Content Calico",
    "Spotted Rescue Rabbit",
    "Curious Pup",
    "Snowy Golden Retriever",
    "Golden Retriever in Lavender",
    "Wide-Eyed Ginger Cat",
    "Puppy and Kitten Friendship",
    "Happy Golden Retriever",
];

var descriptions = [
    "This tiny Chihuahua loves attention.",
    "A terrier enjoying a sunny day outdoors.",
    "This gentle rabbit is perfect for calm house.",
    "A young golden retriever with soft fur.",
    "This adoptable pup is waiting for a home.",
    "A bundle of ginger kittens snuggling together.",
    "This tabby cat is all about lounging.",
    "A calico cat soaking up in its cozy spot.",
    "A beautiful rescue rabbit deserves a loving home.",
    "This curious pup can't wait to explore.",
    "A golden retriever enjoying the snowy outdoors.",
    "A happy retriever basking in a lavender field.",
    "A ginger cat with expressive eyes.",
    "A puppy sharing a sweet moment with its friend.",
    "A happy golden retriever smiling.",
];

var infoBoxContent = [
    "Chihuahuas are known for their charming personalities. This tiny companion loves being the center of attention and is always ready for a cuddle.",
    "Terriers are playful and energetic dogs. This one is enjoying the warmth of the sun, showcasing its adventurous spirit and love for the outdoors.",
    "Gentle and calm, this rabbit is ideal for a peaceful home. With its soft fur and quiet demeanor, it’s a perfect furry companion.",
    "This young golden pup is full of joy and energy. With its soft, fluffy coat and curious eyes, it’s always ready for an adventure.",
    "Every dog deserves a loving home. This adoptable companion is loyal and kind, ready to become a part of your family.",
    "A delightful litter of ginger kittens snuggling for warmth. These playful furballs bring happiness and joy wherever they go.",
    "Relaxation is an art, and this tabby cat has mastered it. Whether napping or lounging, it radiates calm and comfort.",
    "Calico cats are known for their unique patterns and gentle nature. This one is enjoying a cozy spot, looking content and serene.",
    "This spotted rabbit is a beautiful rescue animal. It’s a reminder that every creature deserves care and a loving home.",
    "Curiosity defines this little pup. With its bright eyes and wagging tail, it’s always ready to explore new surroundings.",
    "Snow is no match for this golden retriever. Enjoying the outdoors, this pup finds comfort and fun in the winter wonderland.",
    "Surrounded by lavender fields, this retriever is at peace. Its serene expression perfectly matches the calming scent of the flowers.",
    "With its wide, curious eyes, this ginger cat captures hearts instantly. It’s playful, affectionate, and full of character.",
    "Friendship knows no bounds with this puppy and kitten duo. Their playful bond showcases the purest form of love and trust.",
    "Golden retrievers are always full of joy, and this one is no exception. With a wagging tail and happy grin, it spreads positivity everywhere."
];



for (var i = 0; i < 15; i++) {
    fileNames.push("download" + (i + 1));
    photos.push(
        "<img src='images/" +
        fileNames[i] +
        ".jpeg' alt='" +
        captions[i] +
        "'>"
    );
    imageList.push(
        openList +
        (i + 1) +
        "'>" +
        photos[i] +
        openCaptionTag +
        captions[i] +
        closeCaptionTag +
        openDescTag +
        descriptions[i] +
        closeDescTag +
        closeList
    );
}

document.getElementById("gallery").innerHTML = imageList.join("");


document.addEventListener("DOMContentLoaded", function () {
    
    var galleryItems = document.querySelectorAll("#gallery li");

    galleryItems.forEach(function (item, index) {
        var description = item.querySelector(".description");

        
        description.addEventListener("click", function () {
            createInfoBox(index);
        });
    });

    function createInfoBox(index) {
        
        var infoBox = document.createElement("div");
        infoBox.setAttribute("id", "infoBox");
        infoBox.classList.add("info-box"); 

        
        var heading = document.createElement("h3");
        heading.textContent = captions[index];
        heading.classList.add("info-heading"); 
        infoBox.appendChild(heading);

        
        var text = document.createElement("p");
        text.textContent = infoBoxContent[index];
        text.classList.add("info-text"); 
        infoBox.appendChild(text);

        
        var closeLink = document.createElement("a");
        closeLink.textContent = "Click This To Close";
        closeLink.classList.add("info-close"); 
        closeLink.addEventListener("click", function () {
            document.body.removeChild(infoBox);
        });
        infoBox.appendChild(closeLink);

        
        document.body.appendChild(infoBox);
    }

});