const ArrowBack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height || "24px"}
    viewBox="0 -960 960 960"
    width={props.width || "24px"}
    fill={props.fill || "#e8eaed"}
    {...props}>
    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
  </svg>
);

export default ArrowBack;