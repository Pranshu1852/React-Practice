import { useEffect, type RefObject } from "react";

function useOnClickOutside(
  ref: RefObject<HTMLElement | null>,
  callBack: (args?: unknown[]) => unknown
) {

  useEffect(() => {
    document.addEventListener("click", (event: MouseEvent) => {
      if (event.target !== ref.current) {
        callBack();
      }
    });
  },[])
}

export default useOnClickOutside;
