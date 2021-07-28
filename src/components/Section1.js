import React from "react";


export default function Section({ title, subtitle, dark, id }) {
//   var shadow={
//     boxShadow: "4px 4px 0px var(--red)"
// }

return (
    <div className={"section" + (dark ? " section-dark" : "")} id={id}>
      <div className="section-content limit-width">
        <h1>Hello, I'm Renato Frias.</h1>
        <p>I'm a full time web developer at Kay by Design for nearly 2 years. I've graduated on Digital Media Interaction Design and got my job straight away. The biggest issue    and advantage at the same time, was that I never had any one guide me. It has always been me working by meself.</p>
        <p>I've always been a curious person, I love learn and understand thing in general. But lately I'm getting myself doing the same things over and over again at my current job. There is no exitment anymore.
        
        <p>I'm looking for a place where I have the chance be my best version, have the chance to apply and test new skills but have the confidence that I will always count with a backup (mentor) to guide me if anything goes out of shape.</p>
        </p>
      </div>
    </div>
  );
}
