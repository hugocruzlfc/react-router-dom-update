import { redirect } from "react-router-dom";
import { updateContact } from "./apiService";

export async function actionEditContact({
  request,
  params,
}: {
  request: Request;
  params: any;
}) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function actionUpdateFav({
  request,
  params,
}: {
  request: Request;
  params: any;
}) {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

// async function updateContact(contactId: string, updates: any) {
//   // console.log(updates);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ ...updates, id: contactId });
//     }, 1000);
//   });
// }
