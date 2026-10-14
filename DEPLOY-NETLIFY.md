# 🚀 Como Fazer Deploy no Netlify

## Passo a Passo:

### 1️⃣ Acesse o Netlify
- Vá em: https://www.netlify.com/
- Clique em **"Sign up"** ou **"Log in"**
- Entre com sua conta do GitHub

### 2️⃣ Conecte o Repositório
- Clique em **"Add new site"** → **"Import an existing project"**
- Escolha **"GitHub"**
- Autorize o Netlify a acessar seus repositórios
- Selecione o repositório: **"JooMello/Rocket"**

### 3️⃣ Configure o Deploy
- **Branch to deploy:** `gh-pages`
- **Publish directory:** `.` (ponto, significa raiz)
- **Build command:** deixe vazio ou `echo 'No build'`
- Clique em **"Deploy site"**

### 4️⃣ Pronto!
- O Netlify vai gerar uma URL tipo: `https://nome-aleatorio.netlify.app`
- A página estará online em alguns segundos!

### 5️⃣ (Opcional) Nome Personalizado
- Vá em **"Site settings"** → **"Change site name"**
- Escolha um nome: `aniversario-ellen` (por exemplo)
- Sua URL ficará: `https://aniversario-ellen.netlify.app`

## 📱 Acessar a Página:

Depois do deploy, acesse:
- `https://seu-site.netlify.app/` → Página principal
- `https://seu-site.netlify.app/divertida.html` → Versão divertida
- `https://seu-site.netlify.app/elegante.html` → Versão elegante

## 🔄 Atualizações Automáticas:

Qualquer push para a branch `gh-pages` vai atualizar automaticamente no Netlify!

## 🎉 Vantagens do Netlify:

- ✅ Deploy automático
- ✅ HTTPS grátis
- ✅ Rápido
- ✅ Fácil de usar
- ✅ URL personalizada grátis
