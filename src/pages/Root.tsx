import React, { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  Form,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { RootNav } from "../components";
import { Contact } from "../types";

export const Root: React.FC = () => {
  const { contacts, query } = useLoaderData() as {
    contacts: Contact[];
    query: string;
  };
  const navigation = useNavigation(); //navigation.state :"idle" | "submitting" | "loading".
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    const inputElement = document.getElementById(
      "q"
    ) as HTMLInputElement | null;
    if (inputElement) {
      inputElement.value = query ?? "";
    }
  }, [query]);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form
            id="search-form"
            role="search"
          >
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={query}
              onChange={(event) => {
                submit(event.currentTarget.form);
                // const isFirstSearch = q == null;
                // submit(event.currentTarget.form, {
                //   replace: !isFirstSearch,
                // });
              }}
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <RootNav contacts={contacts} />
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
};
