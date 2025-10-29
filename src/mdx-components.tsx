// import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className='text-orange font-bold text-xl' {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className='text-dark-blue font-bold' {...props} />
  )
}

declare global {
  type MDXProvidedComponents = typeof components;
}


export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
