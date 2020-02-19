const callbackFunc = (url, callback) => {
  setTimeout(() => {
    callback(`paso un segundo ${url}`);
  }, 1000);
};

callbackFunc("http://asd.com", url => console.log(url));

const promiseFunc = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("me resolvi");
      }, 1000);
    } catch (e) {
      reject(e);
    }
  });

const result = promiseFunc()
  .then(result => console.log("promise ", result))
  .catch(err => console.error(error));

(async () => {
  const awaitResult = await promiseFunc();

  console.log("async", awaitResult);
})();

// console.log("promise", result);