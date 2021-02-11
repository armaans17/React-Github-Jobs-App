import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";

export default function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs();

  return (
    <Container className="my-4">
      <h1 className="mb-4" style={{ color: style }}>
        GitHub Jobs
      </h1>
      {loading && <h1 style={{ color: style }}>Loading...</h1>}
      {error && <h1 style={{ color: style }}>Error. Try again</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </Container>
  );
}

const style = "whitesmoke";
