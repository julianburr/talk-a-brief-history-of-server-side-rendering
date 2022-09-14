import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { content, flatContent } from "~/utils/content";

const slideCounts = content.reduce(
  (all, arr) => {
    all.push(all[all.length - 1] + arr.length);
    return all;
  },
  [0]
);

function useSlide() {
  const router = useRouter();

  const minSlide = 0;
  const maxSlide = flatContent.length;

  const slide = parseInt((router?.query?.slide as string) || `${minSlide}`);
  const setSlide = useCallback(
    (slide: number) => {
      const newSlide = Math.max(Math.min(slide, maxSlide), minSlide);
      router.push({ query: { slide: newSlide } });
    },
    [router, maxSlide]
  );

  const evolution = slideCounts.findIndex((nmb) => slide <= nmb);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSlide(slide - 1);
      } else if (e.key === "ArrowRight" || e.key === " ") {
        setSlide(slide + 1);
      } else if (e.key === "b") {
        if (window.document.fullscreenElement) {
          window.document.exitFullscreen();
        } else {
          window.document.body.requestFullscreen();
        }
      }
    };

    window.document.body.addEventListener("keydown", handleKeyDown);
    return () =>
      window.document.body.removeEventListener("keydown", handleKeyDown);
  }, [slide, setSlide, router]);

  return { slide, setSlide, evolution };
}

export { useSlide };
