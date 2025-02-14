import FormLogin from "@/components/login-register/form-login";
import FormRegister from "@/components/login-register/form-register";
import Header from "@/templates/header";
import { useMatch } from "@tanstack/react-router";

const Login: React.FC = () => {
	const matchRoute = useMatch({ from: "/", shouldThrow: false });

	return (
		<div className="bg-blue-1000 h-screen">
			<Header match={matchRoute} />
			<div className=" flex w-[80vw] m-auto">
				<div className="flex flex-[1] justify-center flex-col p-12 mt-16">
					<div className="w-[400px]">
						{matchRoute !== undefined ? (
							<>
								<h1 className=" text-[2.5rem] mb-6 text-transparent bg-clip-text text-gradient">
									Bem-vindo de volta!
								</h1>
								<p className="text-[#8b9cc7] text-[.95rem] mb-8">
									Entre com suas credenciais para acessar sua conta
								</p>
								<FormLogin />
							</>
						) : (
							<>
								<h1 className=" text-[2.5rem] mb-6 text-transparent bg-clip-text text-gradient">
									Criar conta
								</h1>
								<p className="text-[#8b9cc7] text-[.95rem] mb-6">
									Junte-se a nós para explorar todos os nossos recursos e
									serviços
								</p>
								<FormRegister />
							</>
						)}
					</div>
				</div>

				<div>
					<div className="flex flex-[1] overflow-hidden ">
						<div className="absolute z-10 w-full h-full right-[-20%] flex items-center justify-center">
							<svg
								className="floating-element"
								width="600"
								height="500"
								viewBox="0 0 600 500"
								role="img"
								aria-label="img"
							>
								<defs>
									<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
										<stop offset="0%" stopColor="#2d6be4" stopOpacity={0.2} />
										<stop offset="100%" stopColor="#2d6be4" stopOpacity={0.8} />
									</linearGradient>
								</defs>

								<rect
									x="100"
									y="50"
									width="400"
									height="300"
									rx="20"
									fill="url(#grad1)"
									opacity="0.8"
								/>

								<g className="floating-icons">
									<rect
										x="50"
										y="100"
										width="60"
										height="60"
										rx="15"
										fill="#2D6BE4"
										opacity="0.3"
									>
										<animate
											attributeName="y"
											values="100;90;100"
											dur="3s"
											repeatCount="indefinite"
										/>
									</rect>

									<circle cx="500" cy="150" r="25" fill="#2D6BE4" opacity="0.4">
										<animate
											attributeName="cy"
											values="150;170;150"
											dur="4s"
											repeatCount="indefinite"
										/>
									</circle>

									<rect
										x="450"
										y="300"
										width="40"
										height="40"
										rx="10"
										fill="#2D6BE4"
										opacity="0.3"
									>
										<animate
											attributeName="y"
											values="300;280;300"
											dur="3.5s"
											repeatCount="indefinite"
										/>
									</rect>
								</g>

								<path
									d="M150,200 Q300,100 450,200"
									stroke="#2D6BE4"
									fill="none"
									stroke-width="3"
									opacity="0.5"
								>
									<animate
										attributeName="d"
										dur="5s"
										repeatCount="indefinite"
										values="M150,200 Q300,100 450,200;
                                    M150,180 Q300,280 450,180;
                                    M150,200 Q300,100 450,200"
									/>
								</path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
