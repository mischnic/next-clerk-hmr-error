export const mergeNextClerkPropsWithEnv = (props) => {
  return {
    ...props,
    publishableKey:
      props.publishableKey ||
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
      "",
    signInUrl:
      props.signInUrl || process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "",
  };
};
