import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Apply styling to headings
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium mt-6 mb-3">{children}</h3>
    ),
    // Style paragraphs
    p: ({ children }) => (
      <p className="my-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    // Style lists
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>
    ),
    // Style links
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
      >
        {children}
      </a>
    ),
    // Additional custom components
    ...components,
  }
}
