import React from "react";
import { useFetcher } from "react-router-dom";
import { Contact } from "../types";

export interface FavoriteProps {
  contact: Contact;
}

export const Favorite: React.FC<FavoriteProps> = ({ contact }) => {
  const fetcher = useFetcher();
  let favorite = fetcher.formData
    ? fetcher.formData.get("favorite") === "true"
    : contact?.favorite;

  // if (fetcher.formData) {
  //   favorite = fetcher.formData.get("favorite") === "true";
  // }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
};
