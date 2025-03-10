import React from 'react'
import Link from 'next/link'


const MenuItem: React.FC<{ title: string; address: string; className?: string }> = ({ title, address, className }) => {
  return (
    
    <Link href={address} className={`${className}`}>
      {title.toUpperCase()}
    </Link>
    
    
  );
};
export default MenuItem;