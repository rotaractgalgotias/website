import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { Fragment } from 'react'

type MDXComponents = Record<string, React.ElementType>

type ServerMDXProps = {
    source: string
    components?: MDXComponents
}

export async function ServerMDX({ source, components }: ServerMDXProps) {
    const { default: Component } = await evaluate(source, {
        ...runtime,
        Fragment,
    } as any)

    return <Component components={components} />
}
