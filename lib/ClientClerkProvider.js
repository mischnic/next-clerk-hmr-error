"use client";
import { mergeNextClerkPropsWithEnv } from "./mergeNextClerkPropsWithEnv.js";
export const NEXT_WINDOW_HISTORY_SUPPORT_VERSION = "14.1.0";
export const ClientClerkProvider = (props) => {
  const { children } = props;

  const mergedProps = mergeNextClerkPropsWithEnv({
    ...props,
  });
  console.log(mergedProps);
  return children;
};
