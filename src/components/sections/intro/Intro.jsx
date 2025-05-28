import React from "react";
import Button from "../../button/Button";

function Intro() {
  return (
    <section>
      <h2>
        Need to bring your ideas to <span>life ?</span>
      </h2>
      <p>
        I specialize in bringing your ideas to life with bold designs,
        user-friendly websites, and engaging animations.
      </p>
      <p>
        Let&apos;s connect! We&apos;ll go over your needs together-coffee&apos;s
        on me.
      </p>
      <div>
        <Button type="primary" text="services" />
        <Button type="primary" text="projects" />
      </div>
    </section>
  );
}

export default Intro;
