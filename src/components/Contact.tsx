import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import { Contact as ContactI } from "../types";
import { Favorite } from "./Favorite";

export interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  const { contact } = useLoaderData() as { contact: ContactI };
  // const contact: ContactI = {
  //   first: "Your",
  //   last: "Name",
  //   avatar: "https://placekitten.com/g/200/200",
  //   twitter: "your_handle",
  //   notes: "Some notes",
  //   favorite: true,
  // };

  return (
    <div id="contact">
      <div>
        <img
          key={contact?.avatar}
          src={contact?.avatar}
        />
      </div>

      <div>
        <h1>
          {contact?.first || contact?.last ? (
            <>
              {contact?.first} {contact?.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          <Favorite contact={contact} />
        </h1>

        {contact?.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact?.twitter}`}
              rel="noreferrer"
            >
              {contact?.twitter}
            </a>
          </p>
        )}

        {contact?.notes && <p>{contact?.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              // eslint-disable-next-line no-restricted-globals
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};
