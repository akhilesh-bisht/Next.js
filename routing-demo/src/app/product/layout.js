import React from 'react';

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Product Layout Header</h1>
      </header>

      <main>
        {children} {/* This will render the content of the nested pages */}
      </main>

      <footer>
        <h2>This is a nested layout footer</h2>
      </footer>
    </>
  );
}

export default Layout;
