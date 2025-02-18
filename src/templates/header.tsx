import { Button } from "@/components/ui/button";
import { Link, type MakeRouteMatch } from "@tanstack/react-router";

interface HeaderLinkProps {
	match: MakeRouteMatch | undefined;
}

const Header: React.FC<HeaderLinkProps> = ({ match }) => {
	return (
		<header>
			<nav className="flex md:justify-between justify-center bg-[#000]/20 backdrop-blur-[10px] text-white p-6 fixed w-full z-50 text-2xl">
				<span className="gap-2 flex font-bold">
					AIO
					<span className="font-light">ALL IN ONE</span>
				</span>

				<div className="hidden md:flex itens-center gap-4 text-lg">
					<Button {...(match !== undefined ? { disabled: true } : {})}>
						<Link to="/">Entrar</Link>
					</Button>
					<Button {...(match === undefined ? { disabled: true } : {})}>
						<Link to="/register">Registrar</Link>
					</Button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
