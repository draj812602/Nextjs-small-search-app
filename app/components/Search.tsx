import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";

export default function Search() {
  const [search, setsearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setsearch("");
    console.log("erere");

    router.push(`/${search}/`);
  };
  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        className="me-2"
        aria-label="Search"
      />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}
