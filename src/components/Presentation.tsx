import React from "react";

// <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export function Presentation(props: React.ComponentProps<"svg">) {
  return (
    <svg height={20} viewBox="0 0 24 24" {...props}>
      <path
        strokeWidth="1px"
        d="M22.25 4.5H1.75C.785 4.5 0 3.715 0 2.75v-1C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v1c0 .965-.785 1.75-1.75 1.75zm-20.5-3a.25.25 0 00-.25.25v1c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-1a.25.25 0 00-.25-.25zM22.25 18H1.75a.75.75 0 010-1.5h20.5a.75.75 0 010 1.5z"
      />
      <path
        strokeWidth="1px"
        d="M12 24a.75.75 0 01-.75-.75V17.5a.75.75 0 011.5 0v5.75A.75.75 0 0112 24z"
      />
      <path
        strokeWidth="1px"
        d="M16.25 24a.75.75 0 01-.604-.304L12 18.762l-3.647 4.934a.75.75 0 11-1.206-.892l4.25-5.75c.282-.383.924-.383 1.206 0l4.25 5.75A.75.75 0 0116.25 24zM21.25 18a.75.75 0 01-.75-.75V3.75a.75.75 0 011.5 0v13.5a.75.75 0 01-.75.75zM2.75 18a.75.75 0 01-.75-.75V3.75a.75.75 0 011.5 0v13.5a.75.75 0 01-.75.75z"
      />
    </svg>
  );
}
