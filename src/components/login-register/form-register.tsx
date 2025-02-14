import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../ui/button";

const FormRegister = () => {
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	function validatePassword() {
		return password === confirmPassword;
	}

	const handleRegister = (formData: FormData) => {
		const email = formData.get("email");

		console.log(email);
	};
	return (
		<form key="form-login" action={handleRegister} className="z-20 relative">
			<div className="flex flex-col gap-4">
				<label htmlFor="name" className="flex flex-col">
					<input
						className="p-2 rounded-md shadow-sm bg-[#1f1f38] border border-solid border-[#30324e] outline-none text-white focus:bg-[#1f1f38] focus:border-[#2d6be4]"
						type="text"
						name="name"
						placeholder="Nome"
					/>
				</label>

				<label htmlFor="phone" className="flex flex-col">
					<input
						className="p-2 rounded-md shadow-sm bg-[#1f1f38] border border-solid border-[#30324e] outline-none text-white focus:bg-[#1f1f38] focus:border-[#2d6be4]"
						type="text"
						name="phone"
						placeholder="Telefone"
					/>
				</label>

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
						type="password"
						placeholder="Senha"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<label htmlFor="confirmPassword" className="flex flex-col">
					<input
						className="p-2 rounded-md shadow-sm bg-[#1f1f38] border border-solid border-[#30324e] outline-none text-white focus:bg-[#1f1f38] focus:border-[#2d6be4]"
						name="confirmPassword"
						type="password"
						placeholder="Confirmar senha"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					{validatePassword() === false ? (
						<p className="text-red-400 text-sm mt-1">
							As senhas estão diferentes
						</p>
					) : (
						""
					)}
				</label>
			</div>

			<Button type="submit" className="mt-4 w-full " size="lg">
				Cadastrar
			</Button>

			<div className="text-center text-white text-sm mt-2">
				<p>
					Já possui uma conta?
					<Link
						to="/"
						className="ms-1 text-[#2d6be4] font-bold hover:underline hover:text-[#2d6be4]/80 "
					>
						Entrar
					</Link>
				</p>
			</div>
		</form>
	);
};

export default FormRegister;
