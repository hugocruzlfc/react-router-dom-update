import { getContacts } from "./apiService";

export async function loaderContacts({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  const contacts = await getContacts(query);
  return { contacts, query };
}

// async function getContacts() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const contacts: Contact[] = [];
//       resolve(contacts);
//     }, 1000);
//   });
// }
