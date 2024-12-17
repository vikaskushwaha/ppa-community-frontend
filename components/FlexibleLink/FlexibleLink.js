import Link from 'next/link';

function FlexibleLink({ href, children, ...props }) {
  const isInternalLink = href && href.startsWith('/');

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

export default FlexibleLink;
