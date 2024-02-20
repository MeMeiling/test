let img1;
let img2;

function preload() {
  // Load the first image file
  img1 = loadImage('https://scontent.fbkk13-3.fna.fbcdn.net/v/t1.6435-9/64501814_2568912419787490_1203357838139719680_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFcLoRkZVGN9mHa3_xhWAA5XK16cRLqREtcrXpxEupESx9-8RxjoGNjdxAdjJ8gkf8O5I7OQNvSu1bICdBy1arL&_nc_ohc=dsFv-GzeRVkAX_sRc37&_nc_ht=scontent.fbkk13-3.fna&oh=00_AfCGAFUwKh8ZY3tMz8DKXpSwaVNyPDLEwRb4eGQwlj3GBA&oe=65FC6C4B');

  // Load the second image file
  img2 = loadImage('https://cdn.discordapp.com/attachments/521349695239356417/1209554679651106847/image_57.png?ex=65e75894&is=65d4e394&hm=64f0a66877e246d093e5d32d1f79586818808588c4737d6321364574522384d7&'); // Replace 'https://example.com/second_image.jpg' with the URL or file path of your second image
}

function setup() {
  // Create a canvas
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  // Draw the first image onto the canvas
  image(img1, 100, 0, 500, 500, 0, 0, img1.width, img1.height, CONTAIN);
  
  // Draw the second image next to the first one
  image(img2, 630, 270, 200, 200, 0, 0, img2.width, img2.height, CONTAIN);
  
  // Write text on the right side of the images
  textSize(100);
  fill(255); // White color
  textAlign(LEFT, CENTER);
  text("美", 550, height/2 - 50); // Position for "美"
  text("玲", 550, height/2 + 50); // Position for "玲"
}
