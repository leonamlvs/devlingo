import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [loading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (senha !== confirmSenha) {
      alert("As senhas não coincidem!");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#9225D4] to-[#6c19a0] p-4">
      <div className="bg-white/95 w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Criar conta
        </h1>
        <p className="text-center text-gray-500 mt-1">
          Cadastre-se para começar sua jornada
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          {/* Nome */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-gray-700">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-1">
            <label htmlFor="senha" className="text-gray-700">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              placeholder="********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Confirmar Senha */}
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmSenha" className="text-gray-700">
              Confirmar Senha
            </label>
            <input
              id="confirmSenha"
              type="password"
              placeholder="********"
              value={confirmSenha}
              onChange={(e) => setConfirmSenha(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#9225D4] hover:bg-[#7a1fb3] transition rounded-lg text-white font-semibold text-center cursor-pointer"
          >
            Criar conta
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <span className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-500 text-sm">ou</span>
          <span className="flex-1 h-px bg-gray-300" />
        </div>

        <p className="mt-2 text-center text-gray-600">
          Já tem uma conta?{" "}
          <Link
            to="/login"
            className="text-[#9225D4] font-medium hover:underline"
          >
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
