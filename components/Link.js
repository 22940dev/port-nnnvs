import Link from 'next/link';
import React from 'react';
const ImprovedLink = ({ className, href, children }) => (
   <Link href={href}>
      <a className={className}>{children}</a>
   </Link>
);
export default ImprovedLink;
