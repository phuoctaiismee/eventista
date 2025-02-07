import React from "react";

export const BlogDetailContent = ({ content }: { content: string }) => {
  return (
    <div className="w-full">
      <div
        className="prose lg:prose-xl prose-invert w-full"
        dangerouslySetInnerHTML={{
          __html: content || "",
        }}
      />
    </div>
  );
};
