import React from 'react';

function Layout({ children }) {
  function getRandome(count) {
    return Math.floor(Math.random() * count)
}
 const random = getRandome(2)


    if(random ===1){
         throw new Error('error product how its work')
    }
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
