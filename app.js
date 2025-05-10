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
 console.log("Hello World!")   
    
    const mainImage = document.getElementById('main-image-container');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');



const images = [
    {
    id: 1,
    title: 'Danhole',
    alt: 'An image of my friend Dan sitting in a hole on a beach',
    fullUrl: 'assets/images/danhole.webp',
    thumbnailUrl: 'assets/images/thumbs/danhole.webp'
    },
    {
    id: 2,
    title: 'Windmillin`',
    alt: 'An image of plastic windmill in the sun',
    fullUrl: 'assets/images/windmill.webp',
    thumbnailUrl: 'assets/images/thumbs/windmill.webp'
    },
    {
    id: 3,
    title: 'Black and white pylons',
    alt: 'A black and white image of some electrical pylons in a field',
    fullUrl: 'assets/images/pylons.webp',
    thumbnailUrl: 'assets/images/thumbs/pylons.webp'
    },
    {
    id: 4,
    title: 'Tibby asleep on my arm',
    alt: 'An image of my old cat Tibby asleep on my arm',
    fullUrl: 'assets/images/tibbs2.webp',
    thumbnailUrl: 'assets/images/thumbs/tibbs2.webp'
    },
    {
    id: 5,
    title: 'Tony reporting in!',
    alt: 'An image of Tony in a skip talking to someone on a freezers plug',
    fullUrl: 'assets/images/tony.webp',
    thumbnailUrl: 'assets/images/thumbs/tony.webp'
    },
    {
    id: 6,
    title: 'Tibby the tuxedo cat',
    alt: 'An image of my old cat Tibby',
    fullUrl: 'assets/images/tibbs.webp',
    thumbnailUrl: 'assets/images/thumbs/tibbs.webp'
    },
    {
    id: 7,
    title: 'Fish and Man shall live in harmony',
    alt: 'An image of a toy Viking at the bottom of a fishtank surrounded by fish',
    fullUrl: 'assets/images/fish.webp',
    thumbnailUrl: 'assets/images/thumbs/fish.webp'
    },
    {
    id: 8,
    title: 'Flying off into the sunset',
    alt: 'A photo of a flying off into the Norfolk sunset',
    fullUrl: 'assets/images/fly.webp',
    thumbnailUrl: 'assets/images/thumbs/fly.webp'
    },
  ];

let currentImageIndex = 0;

function loadImage(index) {
  mainImage.innerHTML = '';
  const img = document.createElement('img');
  img.src = images[index].fullUrl;
  img.alt = images[index].alt;
  img.title = images[index].title;
  mainImage.appendChild(img);
}

loadImage(currentImageIndex);

document.getElementById('next').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  loadImage(currentImageIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  loadImage(currentImageIndex);
});

images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.thumbnailUrl;
    thumbnail.alt = image.alt;
    thumbnail.style.cursor = 'pointer';
    thumbnail.addEventListener('click', () => {
                loadImage(index);
        });
    thumbnailContainer.appendChild(thumbnail);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    document.getElementById('prev').click();
  } else if (event.key === 'ArrowRight') {
    document.getElementById('next').click();
  }
});

let idleTime = 0;
let idleTimeout;

function resetIdleTime() {
  idleTime = 0;
  clearTimeout(idleTimeout);
  document.getElementById('thumbnail-container').style.display ='flex';
  idleTimeout = setTimeout(hideThumbnails, 2500);
}

function hideThumbnails() {
  document.getElementById('thumbnail-container').style.display = 'none';
}

document.addEventListener('mousemove', resetIdleTime);
document.addEventListener('keydown', resetIdleTime);
document.addEventListener('click', resetIdleTime)
resetIdleTime();