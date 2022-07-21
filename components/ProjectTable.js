import React from "react";

export default function ProjectTable({ project }) {
  return (
    <div className="max-w-4xl bg-violet-400 mx-auto">
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </div>
  );
}
