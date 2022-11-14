const addImage = imgSrc => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    };
    const onImageError = () => {
      // setTimeout(() => rejectCb(new Error('Image load is failed...')), 1000);
      rejectCb(new Error('Image load is failed...'));
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', onImageError);
  });
  return p;
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-iew-Of-Blue-Lakes-And--227291596.jpg';
const resultPromise = addImage(imgSrc);
resultPromise.then(data => console.log(data));
// resultPromise.catch(error => console.log(error));
resultPromise.catch(error => setTimeout(() => console.log(error), 1000));
// console.log(result);

// export const addImage = (imgSrc, callback) => {
//   const imgElem = document.createElement('img');
//   imgElem.setAttribute('alt', 'My Photo');
//   imgElem.src = imgSrc;
//   const containerElem = document.querySelector('.page');
//   containerElem.append(imgElem);

//   imgElem.addEventListener('load', () => callback(null, imgElem));
//   imgElem.addEventListener('error', () => callback('Image load is failed'));
// };

// const onImageLoaded = (error, imgElem) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const { width, height } = imgElem;
//   const sizeElem = document.querySelector('.image-size');

//   sizeElem.textContent = `${width} x ${height}`;
// };

// const imgSrc =
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// addImage(imgSrc, onImageLoaded);
