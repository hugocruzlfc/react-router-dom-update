import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { EditPage, Error, IndexPage, Root } from "../pages";
import { ContactPage } from "../pages/ContactPage";
import {
  loaderContacts,
  actionCreateContact,
  loaderContact,
  actionEditContact,
  actionDestroyContact,
  actionUpdateFav,
} from "../api";
import { DeleteError } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(Root),
    errorElement: React.createElement(Error),
    loader: loaderContacts,
    action: actionCreateContact,
    children: [
      {
        errorElement: React.createElement(Error),
        children: [
          { index: true, element: React.createElement(IndexPage) },
          {
            path: "contacts/:contactId",
            element: React.createElement(ContactPage),
            loader: loaderContact,
            action: actionUpdateFav,
          },
          {
            path: "contacts/:contactId/edit",
            element: React.createElement(EditPage),
            loader: loaderContact,
            action: actionEditContact,
          },
          {
            path: "contacts/:contactId/destroy",
            action: actionDestroyContact,
            errorElement: React.createElement(DeleteError),
          },
        ],
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Root />}
//       loader={rootLoader}
//       action={rootAction}
//       errorElement={<ErrorPage />}
//     >
//       <Route errorElement={<ErrorPage />}>
//         <Route
//           index
//           element={<Index />}
//         />
//         <Route
//           path="contacts/:contactId"
//           element={<Contact />}
//           loader={contactLoader}
//           action={contactAction}
//         />
//         <Route
//           path="contacts/:contactId/edit"
//           element={<EditContact />}
//           loader={contactLoader}
//           action={editAction}
//         />
//         <Route
//           path="contacts/:contactId/destroy"
//           action={destroyAction}
//         />
//       </Route>
//     </Route>
//   )
// );
