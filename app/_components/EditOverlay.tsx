export default function EditOverlay() {
  return (
    <div
      className={`absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-t from-black/60 to-black/60 opacity-0 transition-[opacity,transform] duration-200 ease-linear group-hover:scale-105 group-hover:opacity-100`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={100}
        width={100}
      >
        <g fill="none">
          <path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0z"
          />
          <path fill="white" d="m5 16l-1 4l4-1L18 9l-3-3z" />
          <path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="m15 6l3 3m-5 11h8"
          />
        </g>
      </svg>
    </div>
  );
}
