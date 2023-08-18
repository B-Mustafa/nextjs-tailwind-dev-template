import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer flex justify-center align-center text-center">
        <div>
          <p className="p-color text-sm p-5">
            Created with ❤️ by{" "}
            <Link
              className="text-gray-300"
              href="https://github.com/preetsuthar17"
              target="_blank"
            >
              Preet Suthar
            </Link>
          </p>
          <p className="p-color text-sm">Wanna help us?</p>
          <Link
            className="text-gray-300 text-sm"
            href="https://github.com/preetsuthar17/nextjs-tailwind-dev-template"
            target="_blank"
          >
            Contribute in this website 😍
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
