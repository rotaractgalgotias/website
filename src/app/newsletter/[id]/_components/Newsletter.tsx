"use client";

import { Newsletter as NewsletterType } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

export default function Newsletter({
  newsletter,
}: {
  newsletter: NewsletterType;
}) {
  const book = React.useRef<any>(null);
  const pages = Array.from({ length: newsletter.totalPages }, (_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(0);

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Set dimensions based on the current window size
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth > 450 ? 500 : 350,
        height: window.innerWidth > 450 ? 600 : 500,
      });
    };

    // Update dimensions on mount and window resize
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Render nothing until dimensions are set
  if (dimensions.width === 0 || dimensions.height === 0) {
    return null;
  }




  return (
    <>
      <HTMLFlipBook
        width={dimensions.width}
        height={dimensions.height}
        size="fixed"
        ref={book}
        minWidth={1000}
        maxWidth={1000}
        minHeight={1000}
        onFlip={onFlip}
        maxHeight={1000}
        showCover={false}
        className="cursor-auto select-none w-full h-full block"
        style={{}}
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={0}
        showPageCorners={true}
        disableFlipByClick={true}
      >
        {pages.map((page, index) => (
          <div key={page} >
            <Image
              src={`https://github.com/rotaractgalgotias/images/blob/main/newsletter/${newsletter.month}/${index + 1}.jpg?raw=true`}
              alt={`Newsletter ${newsletter.month} page ${index + 1}`}
              quality={100}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </HTMLFlipBook>
      <div className="flex justify-center items-center gap-2 mt-4 mb-8">
        <button
          className=" p-2 bg-gray-800 text-sm text-white rounded-full shadow-md hover:bg-gray-700 transition"

          onClick={() =>
            {book.current?.pageFlip().flipPrev()
             
            }}>Prev</button>
        <span className="text-gray-800 text-center">Page {currentPage} of {pages.length}</span>
        <button
          className="p-2 bg-gray-800 text-sm text-white rounded-full shadow-md hover:bg-gray-700 transition"

          onClick={() =>
            {book.current?.pageFlip().flipNext()
            }}>Next</button>

      </div>
    </>

  );
}
