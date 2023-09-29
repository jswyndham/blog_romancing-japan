import React, { useRef, useState } from "react";

function NavbarHooks() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const checkOutsideNavbar = (e: any) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", checkOutsideNavbar);
    return () => {
      document.removeEventListener("click", checkOutsideNavbar);
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, ref, handleClick };
}

export default NavbarHooks;
