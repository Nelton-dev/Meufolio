Coloque as imagens usadas no site dentro desta pasta.

Como usar as imagens em `constants.ts` (ou em qualquer componente):

- Se você colocar um arquivo chamado `projeto1.jpg` aqui, use:

  imageUrl: "/images/projeto1.jpg"

- Para a foto de perfil (avatar):

  avatarUrl: "/images/minha-foto.jpg"

Observações:
- Esta pasta está dentro de `public`, então os arquivos são servidos como recursos estáticos pela Vite.
- Não é necessário importar as imagens em TypeScript se usar o caminho absoluto iniciado por `/`.
- Se preferir importar imagens diretamente (import img from "../assets/x.png"), adicione as imagens em `src` e crie um arquivo de declaração `.d.ts` (já incluído neste projeto como `images.d.ts`) para evitar erros do TypeScript.
- Reinicie o servidor de desenvolvimento (`npm run dev` / `pnpm dev` / `yarn dev`) se o Vite não detectar novos arquivos imediatamente.

Exemplo em `constants.ts`:

  {
    id: 1,
    title: "DeliciasMz",
    description: "...",
    tags: ["React", "Tailwind", "Vite"],
    imageUrl: "/images/deliciasmz.jpg",
    repoUrl: "#",
  }

Se quiser, eu posso mover imagens de outro local para cá ou atualizar as entradas em `constants.ts` com exemplos reais.
