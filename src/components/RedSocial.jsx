import React from "react";

function RedSocial( { href, label, children, className }) {
  return (
    <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={label}
    className={className}>
      {children}
    </a>
  )
}

export default RedSocial;