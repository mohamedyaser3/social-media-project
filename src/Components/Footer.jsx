
// export default function Footer() {

//   return (
//     <>
//       <div className="p-10 text-center bg-amber-200 my-10">
//         <h1>Footer </h1>
//       </div>
//     </>
//   );
// }

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo / Title */}
        <h2 className="text-xl font-bold text-white mb-4 md:mb-0">
          Circle
        </h2>

        {/* Links */}
        <ul className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <li>
            <a href="#" className="hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
          </li>
        </ul>

        {/* CopyRight */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Circle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
