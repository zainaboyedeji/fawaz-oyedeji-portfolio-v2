import DOMPurify from "dompurify";

interface HtmlRendererProps {
  htmlContent: string;
  className?: string;
}

export function HtmlRenderer({ htmlContent, className }: HtmlRendererProps) {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
