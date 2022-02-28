console.log("salam");

const customer = getCustomerDetail();

console.log("customer detail : ", customer);

function getCustomerDetail() {
  setTimeout(() => {
    console.log("fetch data from server");
    return {
      id: 1,
      name: "mohammad",
    };
  }, 4000);
}
