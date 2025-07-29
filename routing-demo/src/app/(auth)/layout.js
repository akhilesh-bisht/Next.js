"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function AuthLayout({ children }) {
  const pathname = usePathname();

  const navlinks = [
    {
      name: "Login",
      href: "/login"
    },
    {
      name: "Signup",
      href: "/register"
    },
    {
      name: "Forgot Password",
      href: "/forgot-password"
    },
  ];

  return (
    <>
      <h1 style={{ fontSize: '50px', backgroundColor: 'red' }}>Header</h1>
      <nav>
        {navlinks.map((nav, index) => {
          const isActive = pathname === nav.href || (pathname.startsWith(nav.href) && nav.href !== '/');

          return (
            <Link
              key={index}
              href={nav.href}
              style={{
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'yellow' : 'blue',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              {nav.name}
            </Link>
          );
        })}
      </nav>
      {children}
      <h1 style={{ fontSize: '50px', backgroundColor: 'red' }}>Footer</h1>
    </>
  );
}

export default AuthLayout;
