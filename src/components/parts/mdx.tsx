import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";

import { Kit } from "./kit";

const components = {
  Kit
};

export function Mdx(props: MDXRemoteProps) {
  return (
    <div className="flex flex-col gap-3 p-4 items-center w-full">
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  );
}
