"use client";

import { Newsletter as NewsletterType } from "@prisma/client";
import React from "react";
import HTMLFlipBook from "react-pageflip";

export default function Newsletter({
  newsletter,
}: {
  newsletter: NewsletterType;
}) {
  console.log(newsletter);
  return (
    <HTMLFlipBook
      width={600}
      height={700}
      size="fixed"
      minWidth={1000}
      maxWidth={1000}
      minHeight={1000}
      maxHeight={1000}
      showCover={false}
      className="cursor-auto select-none w-full h-full"
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
      <div className="bg-red-500">Page 1</div>
      <div className="bg-blue-500">Page 2</div>
      <div className="bg-green-500">Page 3</div>
      <div className="bg-yellow-500">Page 4</div>
    </HTMLFlipBook>
  );
}
