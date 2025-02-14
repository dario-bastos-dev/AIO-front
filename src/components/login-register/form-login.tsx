import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

const FormLogin = () => {
	const handleLogin = (formData: FormData) => {
		const email = formData.get("email");

		console.log(email);
	};
	return (
		<form key="form-login" action={handleLogin} className="z-20 relative">
			<div className="flex flex-col gap-4">
				<label htmlFor="email" className="flex flex-col">
					<input
						className="p-2 rounded-md shadow-sm bg-[#1f1f38] border border-solid border-[#30324e] outline-none text-white focus:bg-[#1f1f38] focus:border-[#2d6be4]"
						type="email"
						name="email"
						placeholder="E-mail"
					/>
				</label>

				<label htmlFor="password" className="flex flex-col">
					<input
						className="p-2 rounded-md shadow-sm bg-[#1f1f38] border border-solid border-[#30324e] outline-none text-white focus:bg-[#1f1f38] focus:border-[#2d6be4]"
						name="password"
						placeholder="Senha"
					/>
				</label>
			</div>

			<Button
				type="submit"
				className="mt-4 w-full hover:cursor-pointer"
				size="lg"
			>
				Entrar
			</Button>

			<div className="text-center text-white text-sm mt-2">
				<p>
					Não tem uma conta?
					<Link
						to="/register"
						className="ms-1 text-[#2d6be4] font-bold hover:underline hover:text-[#2d6be4]/80"
					>
						Crie uma conta
					</Link>
				</p>
			</div>
		</form>
	);
};

export default FormLogin;
