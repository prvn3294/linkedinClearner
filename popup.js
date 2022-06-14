// function getDOM() {
//   return Array.from(document.getElementsByTagName("div"), (el) => el.innerHTML);
// }

// // async function TryGettingDOM() {
// //   const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// //   let result;
// //   try {
// //     [{ result }] = await chrome.scripting.executeScript({
// //       target: { tabId: tab.id },
// //       func: getDOM,
// //     });
// //   } catch (e) {
// //     document.body.textContent = "Cannot access page";
// //     return;
// //   }
// //   console.log(result);
// //   // process the result
// //   // document.body.textContent = result;
// // }

// function removeBSHandler() {
//   let posts = document.querySelectorAll(".feed-shared-update-v2__commentary");
//   let importantKeyWords = ["Hiring, Javascript"];
//   posts.forEach((post) => {
//     const important = importantKeyWords.some((keyword) =>
//       post.innerText.includes(keyword)
//     );
//     if (!important) {
//       let temp = 0;
//       while (!post.classList.contains("feed-shared-update-v2") && temp < 10) {
//         post = post.parentElement;
//         temp++;
//       }
//       post.remove();
//     }
//   });
// }

// // document.addEventListener(
// //   "DOMContentLoaded",
// //   function () {
// //     document
// //       .querySelector("button")
// //       .addEventListener("click", TryGettingDOM, false);
// //   },
// //   false
// // );
