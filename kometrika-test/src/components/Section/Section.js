import React from "react";

const section = ({ sectionConfig }) => {
  const { title, subtitle } = sectionConfig;

  return (
    <section>
      <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
      <div>Section Content Is Here</div>
    </section>
  );
};

export default section;
