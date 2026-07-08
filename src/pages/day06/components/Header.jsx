import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="p-6 border-b text-[18px] flex font-bold space-x-12">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Sub01"}>Sub01</Link>
        </li>
        <li>
          <Link to={"/Sub02"}>Sub02</Link>
        </li>
        <li>
          <Link to={"/Sub03"}>Sub03</Link>
        </li>
      </ul>
    </div>
  );
}
