# 🚀 Guia de Publicação - Portal de Futebol

Este documento contém instruções passo a passo para publicar seu Portal de Futebol em um site permanente e acessível na internet.

## 📋 Opções de Hospedagem

### 1️⃣ **Vercel** (Recomendado - Mais Fácil)

**Vantagens:**
- Deploy automático a partir do GitHub
- Certificado SSL gratuito
- CDN global
- Domínio personalizado gratuito
- Sem custo para projetos estáticos

**Passos:**

1. **Criar conta no GitHub**
   - Acesse [github.com](https://github.com)
   - Crie uma conta gratuita

2. **Fazer upload do projeto**
   ```bash
   git remote add origin https://github.com/seu-usuario/futebol-portal.git
   git branch -M main
   git push -u origin main
   ```

3. **Conectar ao Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Sign Up" e conecte sua conta GitHub
   - Clique em "Import Project"
   - Selecione o repositório `futebol-portal`
   - Clique em "Deploy"

4. **Configurar domínio personalizado** (opcional)
   - No painel do Vercel, vá para "Settings" > "Domains"
   - Adicione seu domínio personalizado
   - Siga as instruções para configurar DNS

**Resultado:** Seu site estará em `https://futebol-portal.vercel.app` (ou seu domínio personalizado)

---

### 2️⃣ **Netlify**

**Vantagens:**
- Deploy automático
- Formulários integrados
- Redirects e reescritas de URL
- Sem custo

**Passos:**

1. **Fazer upload para GitHub** (mesmo processo do Vercel)

2. **Conectar ao Netlify**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "Sign up"
   - Escolha "GitHub"
   - Autorize o Netlify
   - Clique em "New site from Git"
   - Selecione seu repositório

3. **Configurar build**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Clique em "Deploy site"

4. **Domínio personalizado** (opcional)
   - Em "Site settings" > "Domain management"
   - Adicione seu domínio

**Resultado:** Seu site estará em `https://futebol-portal.netlify.app` (ou seu domínio)

---

### 3️⃣ **GitHub Pages**

**Vantagens:**
- Hospedagem gratuita
- Integrado com GitHub
- Simples para projetos estáticos

**Passos:**

1. **Fazer upload para GitHub**
   ```bash
   git remote add origin https://github.com/seu-usuario/futebol-portal.git
   git branch -M main
   git push -u origin main
   ```

2. **Configurar GitHub Pages**
   - Vá para Settings do repositório
   - Procure por "Pages"
   - Em "Source", selecione "GitHub Actions"
   - Crie um arquivo `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy

   on:
     push:
       branches:
         - main

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Fazer commit e push**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages workflow"
   git push
   ```

**Resultado:** Seu site estará em `https://seu-usuario.github.io/futebol-portal`

---

### 4️⃣ **Hospedagem Tradicional (cPanel, Plesk, etc.)**

**Passos:**

1. **Fazer build local**
   ```bash
   npm run build
   ```

2. **Fazer upload dos arquivos**
   - Conecte via FTP/SFTP
   - Faça upload de todos os arquivos da pasta `dist/`
   - Para a raiz pública do seu domínio

3. **Configurar reescritas de URL**
   - Crie um arquivo `.htaccess` na raiz:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🎯 Próximos Passos Após Publicação

### 1. **Configurar Domínio Personalizado**

Se você tem um domínio próprio (ex: `www.meuportal.com.br`):

- **Vercel/Netlify**: Adicione nas configurações de domínio
- **GitHub Pages**: Configure nos settings do repositório
- **Hospedagem Tradicional**: Aponte os DNS para seu servidor

### 2. **Otimizações SEO**

Edite `index.html` para melhorar SEO:

```html
<meta name="description" content="Seu texto descritivo">
<meta name="keywords" content="futebol, notícias, resultados">
<meta property="og:image" content="URL da imagem">
```

### 3. **Certificado SSL**

- **Vercel/Netlify**: Automático (HTTPS gratuito)
- **GitHub Pages**: Automático
- **Hospedagem Tradicional**: Use Let's Encrypt (gratuito)

### 4. **Monitoramento**

- Configure Google Analytics
- Monitore performance com Lighthouse
- Configure alertas de downtime

---

## 📊 Comparação de Plataformas

| Plataforma | Custo | Facilidade | Performance | Suporte |
|-----------|-------|-----------|------------|---------|
| **Vercel** | Grátis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Excelente |
| **Netlify** | Grátis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Excelente |
| **GitHub Pages** | Grátis | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Comunidade |
| **Hospedagem Trad.** | Pago | ⭐⭐⭐ | ⭐⭐⭐ | Variável |

---

## 🔧 Atualizar o Site Após Publicação

### Com Vercel/Netlify (Deploy Automático)

1. Faça alterações no código
2. Faça commit: `git commit -m "Descrição das mudanças"`
3. Faça push: `git push`
4. O site será atualizado automaticamente!

### Com Hospedagem Tradicional

1. Faça alterações no código
2. Execute: `npm run build`
3. Faça upload dos arquivos de `dist/` via FTP

---

## ✅ Checklist de Publicação

- [ ] Código testado localmente
- [ ] Build sem erros (`npm run build`)
- [ ] Repositório Git criado e sincronizado
- [ ] Plataforma de hospedagem escolhida
- [ ] Deploy realizado com sucesso
- [ ] Site acessível na URL pública
- [ ] Domínio personalizado configurado (opcional)
- [ ] SSL/HTTPS ativo
- [ ] Meta tags SEO configuradas
- [ ] Google Analytics integrado (opcional)

---

## 🆘 Troubleshooting

### Site mostra "404 Not Found"

**Solução:** Configure as reescritas de URL para Single Page Applications (SPA)

### Build falha no deploy

**Solução:** Verifique se `package.json` tem todas as dependências:
```bash
npm install
npm run build
```

### Página em branco após deploy

**Solução:** Verifique o console do navegador (F12) para erros JavaScript

### Domínio personalizado não funciona

**Solução:** Aguarde 24-48 horas para propagação de DNS

---

## 📞 Suporte e Recursos

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com
- **Vite Guide**: https://vitejs.dev/guide/

---

**Parabéns! Seu Portal de Futebol está pronto para o mundo! ⚽🌍**
