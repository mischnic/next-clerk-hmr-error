import React from "react";
import { ClientClerkProvider } from "./ClientClerkProvider";

function ClerkProvider(props) {
  const { children, ...rest } = props;
  return React.createElement(ClientClerkProvider, {}, children);
}
export { ClerkProvider };
