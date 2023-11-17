import { getContact } from "./apiService";

export async function loaderContact({ params }: { params: any }) {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { contact };
}

// async function getContact(contactId: string) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const contact: Contact = {
//         id: contactId,
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
