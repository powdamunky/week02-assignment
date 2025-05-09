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
// }