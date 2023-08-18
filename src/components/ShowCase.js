import Link from "next/link";
import Image from "next/image";

import tailwindIcon from "@/utils/icons/tailwind-icon.svg";
import nextIcon from "@/utils/icons/nextjs-icon.svg";

const ShowCase = () => {
  return (
    <>
      {" "}
      <div className="container text-center flex align-center justify-center flex-col h-screen items-center">
        <h1 className="main-heading text-4xl font-medium h-color">
          NextJs web template with Tailwind CSS
        </h1>
        <div className="container-icons flex-row flex">
          <Image
            className="container-icon"
            width={40}
            height={40}
            src={nextIcon}
            alt="Next Js"
          />
          <Image
            className="container-icon"
            width={40}
            height={40}
            src={tailwindIcon}
            alt="Tailwind CSS"
          />
        </div>
        <p className="p-color p-3">
          Minimal website template created with NextJs & Tailwind CSS
        </p>
        <div className="flex flex-row flex-wrap justify-center">
          <Link
            className="flex-row btn p-color"
            href="https://github.com/preetsuthar17/nextjs-tailwind-template"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-star mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>{" "}
            &nbsp; Star us on GitHub
          </Link>

          <Link
            href="https://github.com/preetsuthar17/nextjs-tailwind-template/fork"
            target="_blank"
            className="btn p-color"
          >
            <svg
              aria-hidden="true"
              height="18"
              width="18"
              fill="currentColor"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              className="octicon octicon-repo-forked mr-2"
            >
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>{" "}
            &nbsp; Fork on GitHub
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
