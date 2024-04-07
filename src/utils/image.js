import { imreadAsync, Mat, CV_8UC3, Rect } from '@opencv4js/opencv'; // Assuming you have OpenCV.js installed

async function cutImage(imagePath, n, m) {
  // Read the image
  const image = await imreadAsync(imagePath);

  // Check if image read successfully
  if (image.empty) {
    console.error('Failed to read image!');
    return;
  }

  // Get image dimensions
  const imageHeight = image.rows;
  const imageWidth = image.cols;

  // Check if n x m can be divided into image dimensions
  if (imageHeight % n !== 0 || imageWidth % m !== 0) {
    console.error(`Image cannot be divided perfectly into ${n}x${m} sub-images.`);
    return;
  }

  // Calculate sub-image dimensions
  const subImageHeight = imageHeight / n;
  const subImageWidth = imageWidth / m;

  // Create an empty n x m matrix to store sub-images
  const subImages = new Mat.zeros(n, m, CV_8UC3);

  // Loop through each cell of the n x m matrix
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      // Define the ROI (Region of Interest) for the sub-image
      const roi = new Rect(x * subImageWidth, y * subImageHeight, subImageWidth, subImageHeight);

      // Extract the sub-image from the original image
      const subImage = image.roi(roi);

      // Copy the sub-image into the corresponding cell of the subImages matrix
      subImages.splice(y, x, subImage);
    }
  }

  // You can now access individual sub-images using subImages.at([y, x])

  // (Optional) Display or save sub-images
  // ...
}

// Example usage
const imagePath = 'path/to/your/image.jpg';
const n = 2; // Number of rows in the output matrix
const m = 3; // Number of columns in the output matrix

cutImage(imagePath, n, m)
  .then(() => console.log('Image successfully cut into sub-images!'))
  .catch(error => console.error('Error:', error));
