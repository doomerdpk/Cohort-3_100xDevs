const axios = require("axios");

// async function testFetch() {
//   const response = await fetch(
//     "https://httpdump.app/dumps/15c8879b-624a-40b6-8feb-668885265b24",
//     {
//       method: "GET",
//       headers: {
//         Authorization: "123",
//       },
//     }
//   );
// }

// async function testFetch() {
//   const response = await fetch(
//     "https://httpdump.app/dumps/15c8879b-624a-40b6-8feb-668885265b24",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         username: "Deepak",
//         password: "Deepak@123",
//       }),
//       headers: {
//         Authorization: "123",
//       },
//     }
//   );
// }

// testFetch();

// async function testAxios() {
//   const response = await axios.get(
//     "https://httpdump.app/dumps/15c8879b-624a-40b6-8feb-668885265b24",
//     {
//       headers: {
//         Authorization: "123",
//       },
//     }
//   );
// }

// async function testAxios() {
//   const response = await axios.post(
//     "https://httpdump.app/dumps/15c8879b-624a-40b6-8feb-668885265b24",
//     {
//       username: "Deepak",
//       password: "Deepak@123",
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "123",
//       },
//     }
//   );
// }

async function testAxios() {
  const response = await axios({
    url: "https://httpdump.app/dumps/15c8879b-624a-40b6-8feb-668885265b24",
    method: "POST",
    data: {
      username: "Deepak",
      password: "Deepak@123",
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "123",
    },
  });
}

testAxios();
