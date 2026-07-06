# 🚀 Guia de Deploy - Publicar seu Blog

Este guia mostra como publicar seu Blog da Lívia gratuitamente na internet!

## Opção 1: GitHub Pages (Recomendado - Gratuito)

### Passo 1: Criar conta no GitHub
1. Visite https://github.com
2. Clique em "Sign up"
3. Preencha com seu email, senha e nome de usuário
4. Confirme seu email

### Passo 2: Fazer upload do blog
1. Vá para: https://github.com/new
2. Nome do repositório: `blog-da-livia`
3. Descrição: "Blog sobre maquiagem e beleza"
4. Escolha "Public"
5. Clique "Create repository"

### Passo 3: Upload dos arquivos
```bash
# Clone seu novo repositório
git clone https://github.com/seu-usuario/blog-da-livia.git
cd blog-da-livia

# Copie seus arquivos do blog para essa pasta
# (index.html, css/, js/, images/)

# Adicione todos os arquivos
git add .

# Faça commit
git commit -m "Primeiro commit - Blog da Lívia"

# Envie para GitHub
git push -u origin main
```

### Passo 4: Ativar GitHub Pages
1. Vá para seu repositório no GitHub
2. Clique em "Settings"
3. Role para baixo até "GitHub Pages"
4. Selecione "Deploy from a branch"
5. Escolha branch "main" e folder "/ (root)"
6. Clique "Save"

### Passo 5: Acessar seu blog
Seu blog estará disponível em:
```
https://seu-usuario.github.io/blog-da-livia
```

**Exemplo:** Se seu usuário é "liviaclaro"
```
https://liviaclaro.github.io/blog-da-livia
```

---

## Opção 2: Netlify (Gratuito - Muito Fácil)

### Passo 1: Fazer upload para GitHub
Siga os passos 1-3 da Opção 1

### Passo 2: Conectar ao Netlify
1. Visite https://netlify.com
2. Clique "Sign up"
3. Escolha "Sign up with GitHub"
4. Autorize o Netlify
5. Clique "New site from Git"
6. Selecione seu repositório "blog-da-livia"
7. Clique "Deploy site"

### Passo 3: Acessar seu blog
Seu blog terá um URL tipo:
```
https://xxxxx-xxxxx-12345.netlify.app
```

---

## Opção 3: Vercel (Gratuito - Rápido)

### Passo 1: Fazer upload para GitHub
Siga os passos 1-3 da Opção 1

### Passo 2: Conectar ao Vercel
1. Visite https://vercel.com
2. Clique "Sign Up"
3. Escolha "Continue with GitHub"
4. Autorize o Vercel
5. Clique "Import Git Repository"
6. Cole o link do seu repositório
7. Clique "Import"

### Passo 3: Deploy automático
Seu site será publicado automaticamente!

---

## Opção 4: Domínio Personalizado

### Registrar um domínio
Sites para registrar (alguns gratuitos):
- Registro.br: https://registro.br (dominios .com.br)
- Namecheap: https://www.namecheap.com
- Google Domains: https://domains.google
- Godaddy: https://godaddy.com

**Nomes sugeridos:**
- blogdalivia.com
- maquiagemdelívia.com
- liviamaquiagem.com
- belezadelívia.com

### Conectar domínio ao GitHub Pages
1. Compre seu domínio
2. Vá para as configurações de DNS do domínio
3. Adicione estes registros A:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
4. Vá para Settings do seu repositório GitHub
5. Em "GitHub Pages", adicione seu domínio em "Custom domain"
6. Marque "Enforce HTTPS"
7. Salve

**Mais detalhes:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-pages-site

---

## Opção 5: Hospedagem Paga (Mais Controle)

Se quiser mais funcionalidades:
- Bluehost: https://www.bluehost.com
- SiteGround: https://www.siteground.com
- Hostinger: https://www.hostinger.com.br

Estas oferecem:
- Email profissional (@blogdalivia.com)
- Melhor suporte
- Mais controle total
- Domínio incluído

---

## Atualizando seu blog após publicado

### Método 1: GitHub Desktop (Mais Fácil)
1. Baixe GitHub Desktop: https://desktop.github.com/
2. Abra e faça login
3. Selecione seu repositório
4. Faça suas mudanças nos arquivos
5. No GitHub Desktop:
   - Selecione os arquivos alterados
   - Escreva uma descrição da mudança
   - Clique "Commit to main"
   - Clique "Push origin"
6. Pronto! Seu blog se atualiza automaticamente

### Método 2: Terminal (Mais Técnico)
```bash
# Abra o terminal na pasta do seu blog
cd /caminho/para/blog-da-livia

# Faça suas mudanças (editar arquivos)

# Adicione as mudanças
git add .

# Descreva a mudança
git commit -m "Adicionei novo post sobre blush"

# Envie para GitHub
git push origin main
```

---

## Próximos Passos para Crescimento

1. **SEO (Busca no Google)**
   - Adicione meta tags em index.html
   - Crie um sitemap.xml
   - Envie para Google Search Console

2. **Analytics**
   - Integre Google Analytics
   - Veja quantas pessoas visitam

3. **Compartilhar nas Redes**
   - Instagram, TikTok, Pinterest
   - Divulgue seus posts

4. **Otimizar Performance**
   - Comprima imagens
   - Use cache
   - Minimize CSS/JS

5. **Adicionar Funcionalidades**
   - Sistema de comentários (Disqus)
   - Formulário de contato
   - Galeria de fotos

---

## Troubleshooting (Solução de Problemas)

### Imagens não aparecem
- Verifique se estão em `images/`
- Verifique se os nomes estão corretos
- Tente caminho relativo: `./images/foto.jpg`

### Estilos não funcionam
- Verifique se CSS está em `css/style.css`
- Limpe cache do navegador (Ctrl+Shift+Delete)
- Tente em navegador diferente

### Blog offline
- Verifique se GitHub Pages está ativado
- Espere alguns minutos para atualizar
- Verificar status em https://www.githubstatus.com

---

## Checklist de Deploy

- ✅ Todos os arquivos no repositório
- ✅ index.html está na raiz
- ✅ Pastas css/, js/, images/ existem
- ✅ Imagens têm nomes corretos
- ✅ Links funcionam (teste local primeiro)
- ✅ GitHub Pages ativado
- ✅ URL funciona e é acessível
- ✅ Responsivo em mobile
- ✅ Sem erros no console do navegador

---

## Links Úteis

- GitHub Pages Docs: https://docs.github.com/en/pages
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- SEO Beginner: https://developers.google.com/search/docs

---

🌸 Parabéns! Seu blog está no ar! ✨

Compartilhe seu sucesso! #BlogDaLívia #Maquiagem #Beleza
