import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5 border-bottom">
      <h1 className="h4">
        <Link
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
         <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="black"/>
                <text x="13" y="27" font-family="Arial, sans-serif" font-size="24" fill="white" font-weight="bold">G</text>
                <text x="50" y="27" font-family="Arial, sans-serif" font-size="24" fill="black"></text>
            </svg>
          <span>Grant Computation</span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
