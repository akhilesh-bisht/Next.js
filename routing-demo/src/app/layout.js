// app/layout.js
import {Metadata} from "next"


export const metadata = {
    title:{
        default:'default title',
    template:"%s | code template ",
  
}
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
