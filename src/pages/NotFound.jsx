import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function NotFound() {
  const { istDunkel } = useContext(ThemeContext); // oder const istDunkel = useContext(ThemeContext);

  return (
    <div className="max-w-md mx-auto text-center">
      <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
      <p
        className={`text-xl mb-6 ${
          istDunkel ? "text-gray-300" : "text-gray-800"
        }`}
      >
        Seite nicht gefunden.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-300 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}

export default NotFound;