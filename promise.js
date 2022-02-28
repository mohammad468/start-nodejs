const p = new Promise((resolve, reject) => {
  // ....
  setTimeout(() => {
    resolve({
      id: 1,
      name: "mohammad",
    });
  }, 2000);
  //   reject(new Error("Error"));
});

p.then((item) => {
  console.log(item);
});
