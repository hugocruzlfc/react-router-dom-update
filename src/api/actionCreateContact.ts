import { redirect } from "react-router-dom";
import { createContact } from "./apiService";

export async function actionCreateContact() {
  const contact = await createContact();
  //return { contact };
  return redirect(`/contacts/${contact.id}/edit`);
}

// async function createContact() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const contact: Contact = {
//         id: "1",
//         first: "John",
//         last: "Doe",
//         avatar:
//           "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//         twitter: "https://twitter.com/johndoe",
//         notes:
//           "John Doe is a JavaScript developer working on large applications. Usually, John Doe starts the day with a cup of coffee while reading the latest news. Favorite mug: eSarcasm. Favorite fruit: apple.",
//         favorite: true,
//       };
//       resolve(contact);
//     }, 1000);
//   });
// }
