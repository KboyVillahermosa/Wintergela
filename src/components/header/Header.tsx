import "./Header.css";

function Header() {
  return (
    <>
      <section className="dark:bg-gray-900" id="header">
      <div className="fixed inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="header-top ">
          <div className="header-content ">
          
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            When Life Feels Heavy <span className="text-[#0e7490] dark:text-[#0e7490]">
              Let This Lighten  
              </span> Your <span className="text-[#0e7490] dark:text-[#0e7490]">Heart.</span>
            </h1>
            <p className="text-lg font-normal text-gray-500 dark:text-white lg:text-xl">
            When life feels heavy, this space is here to remind you of your strength, beauty, and the love that surrounds you. Whenever you're feeling down, come back and let it lighten your heart you're never alone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
