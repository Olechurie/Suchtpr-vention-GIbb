import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-auto bg-[#00b8d9ff] text-[#0a0a0a]">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-10 items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-4">
            <Link to={"/contact"} className="text-medium font-medium">
              Contact
            </Link>
            <Link to={"/imprint"} className="text-medium font-medium">
              Imprint
            </Link>
            <Link to={"/privacy"} className="text-medium font-medium max-w-sm">
              Privacy
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mehavr"
              aria-label="GitHub"
              className="opacity-80 transition hover:opacity-100"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.48 2 2 6.58 2 12.15c0 4.48 2.87 8.27 6.85 9.61.5.09.65-.22.65-.48v-1.7c-2.78.61-3.37-1.35-3.37-1.35-.46-1.17-1.11-1.47-1.11-1.47-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.9 1.55 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.12-4.56-4.97 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.66 0 0 .84-.27 2.75 1.03A9.62 9.62 0 0 1 12 6.87c.86 0 1.72.12 2.53.35 1.9-1.3 2.74-1.03 2.74-1.03.55 1.39.2 2.41.1 2.66.64.71 1.03 1.6 1.03 2.7 0 3.87-2.34 4.7-4.57 4.96.37.31.69.93.69 1.86v2.03c0 .27.17.58.68.47A10.15 10.15 0 0 0 22 12.15C22 6.58 17.52 2 12 2Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
