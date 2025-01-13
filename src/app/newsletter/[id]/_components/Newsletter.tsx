"use client";

import { Newsletter as NewsletterType } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
        width: window.innerWidth > 450 ? 450 : 350,
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


  const pdfLink = `https://github.com/rotaractgalgotias/images/blob/main/newsletter/${newsletter.month}/RaC%20Galgotias%20Newsletter%20Q1%20Jul-Sept%202024-25.pdf?raw=true`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: newsletter.title,
        url: window.location.href,
      });
    } else {
      alert("Share feature is not supported in this browser.");
    }
  };


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
        mobileScrollSupport={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={0}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {pages.map((page, index) => (
          <div key={page} >
            <Image
              src={`https://github.com/rotaractgalgotias/images/blob/main/newsletter/${newsletter.month}/${index + 1}.jpg?raw=true`}
              alt={`Newsletter ${newsletter.month} page ${index + 1}`}
              quality={100}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}

            />
          </div>
        ))}
      </HTMLFlipBook>
      <div className="flex justify-center items-center gap-2 my-4">
        <Button
          onClick={() => {
            book.current?.pageFlip().flipPrev()

          }}>Prev</Button>
        <span className="text-gray-800 text-center">Page {currentPage + 1} of {pages.length}</span>
        <Button
          onClick={() => {
            book.current?.pageFlip().flipNext()
          }}>Next</Button>

      </div>
      <Separator />
      <div className="flex justify-center items-center gap-4 my-4">
        <Button >
          <a
            href={pdfLink}
            download
            className="flex items-center gap-2 justify-center"
          >
            Download <Download size={18} />
          </a>
        </Button>
        <Button
          onClick={handleShare}
          className="flex items-center gap-2 justify-center"
        >
          Share <Share2 size={18} />
        </Button>
      </div>
    </>

  );
}
