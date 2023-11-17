import { redirect } from "react-router-dom";
import { deleteContact } from "./apiService";

export async function actionDestroyContact({ params }: { params: any }) {
  //throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}
