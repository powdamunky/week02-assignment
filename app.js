console.info("Hello World!")

//TODO There are 3 main tasks to do:
// Store images data
// Create the thumbnails
// Create the full-screen images

//Step 1: Store the images data
// You can use local images or external images
// For simplicity, it might be easier this time to use external images

// const images= [
//     {   thumbnailSrc: "",
//         fullScreenSrc: "",
//         src:"url or path",
//         alt:"meaningful description of my image",
//         imgName:,
//         width:,
//         height:
//     }, {src:"", alt:""}, {src:"", alt:""}
// ]

// Step 2: Create the thumbnail images
// - Select the image containers from the DOM

// function createThumbnails(){
// We need a loop to create our thumbnails efficiently ---> forEach or for Loop will work well here
// In my loop, I have 3 steps
// create the dom element (img)
// Update the attribute values to be the values of our images stored in the array (img.src= / img.alt = / img.srcSet)
// append the new images into the thumbnail container
// add an addEventListener here (event handler/event listener --->img)
// addEventListener("click", function(){
// createFullScreenImage})
// }


//Step 3: Create the full-screen image
// function createFullScreenImage(largeImg) {
    //  we need to clear the current full-screen image before we add a new one
    // fullScreenContainer.innerHTML = ""
    // create a new image element
    // add a className
    // set the src and alt values to be the same as the thumbnail that was clicked
    // (image.src = largeImg.src)
    // append this new image to the fullscreen container
//
const images = [
    {   
        src: "./assets/images/danhole.jpg",
        alt: "My friend Dan sitting in a hole on the beach",
    },
    {
        src: "./assets/images/fish.jpg",
        alt: "An image of a toy Viking/Barbarian at the bottom of a fish tank"
    },
    {
        src: "./assets/images/pylons.jpg",
        alt: "A black and white photo of some electrical pylons in a field"
    }
];

// function init() {
//     console.log(images)
//     displayFullImage(images[currentImageIndex])
//     createThumbnails()
// }

const thumbContainer = document.getElementById('thumbBar');
const ImgContainer = document.getElementById('fullImgContainer');

let currentImage;

function createThumbnails() {
  images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    thumbnail.style.width = '100px';
    thumbnail.addEventListener('click', () => {
      displayFullImage(index);
    });
    thumbContainer.appendChild(thumbnail);
  });
}

function displayFullImage(index) {
  currentImage = index;
  const fullImage = ImgContainer.querySelector('img');
  if (!fullImage) {
    fullImage = document.createElement('img');
    ImgContainer.appendChild(fullImage);
  }
  ImgContainer.querySelector('img').src = images[index].src;
  ImgContainer.querySelector('img').alt = images[index].alt;
}
