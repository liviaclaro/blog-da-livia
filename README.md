# 🌸 Blog da Lívia - Maquiagem & Beleza

Um blog elegante e moderno sobre maquiagem com tema em **rosa bebê**, desenvolvido com HTML, CSS e JavaScript puro.

![Blog da Lívia](https://via.placeholder.com/1200x600?text=Blog+da+Lívia)

## ✨ Características Principais

- 🎨 **Design Rosa Bebê** - Paleta de cores suaves e delicadas
- 📱 **100% Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Ultra Rápido** - Sem dependências externas, carrega instantaneamente
- 🎭 **Animações Suaves** - Efeitos elegantes ao rolar a página
- 🌐 **SEO Otimizado** - Pronto para ranquear no Google
- ♿ **Acessível** - Segue boas práticas de acessibilidade
- 🎯 **Fácil de Personalizar** - Código limpo e bem organizado

## 🚀 Comece em 5 Minutos

### 1. Abrir localmente
```bash
# Opção A: Duplo clique em index.html

# Opção B: Abrir no navegador
# Clique em: File > Open File > index.html

# Opção C: Terminal
cd /workspaces/blog-da-livia
python -m http.server 8000
# Acesse: http://localhost:8000
```

### 2. Personalizar
- Edite `index.html` com suas informações
- Adicione suas imagens em `images/`
- Customize as cores em `css/style.css`

### 3. Publicar (Gratuito!)
Siga o [GUIA_DEPLOY.md](GUIA_DEPLOY.md) para publicar seu blog na internet!

## 📁 Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| **index.html** | Página principal (COMECE AQUI!) |
| **css/style.css** | Todos os estilos (cores, layout, animações) |
| **js/script.js** | Funcionalidades interativas |
| **images/** | Pasta para suas imagens |
| **COMECE_AQUI.md** | Guia rápido de início |
| **GUIA_BLOGUEIRA.md** | Guia detalhado completo |
| **GUIA_IMAGENS.md** | Como adicionar imagens |
| **GUIA_DEPLOY.md** | Como publicar na internet |

## 🎨 Seções Incluídas

✅ **Header/Navbar** - Navegação principal com logo  
✅ **Hero Section** - Seção impactante com chamada para ação  
✅ **Grid de Posts** - Mostra posts em destaque  
✅ **Sobre a Maquiadora** - Apresente-se  
✅ **Newsletter** - Inscrição para email  
✅ **Footer** - Links e contato  

## 🎯 Paleta de Cores

```
Rosa Bebê Principal:  #FFB6D9
Rosa Claro:          #FFC9E3
Rosa Muito Claro:    #FFE4F0
Rosa Escuro:         #FF9EC5
Rosa Profundo:       #DB7093
Branco:              #FFFFFF
```

## ✍️ Próximos Passos

### 1. Adicionar Imagens
- Prepare 5 imagens (hero, 3 posts, sobre)
- Dimensões recomendadas: Hero 600x400px, Posts 400x220px
- Salve em `images/` com nomes: hero.jpg, post1.jpg, post2.jpg, post3.jpg, sobre.jpg
- [Ver detalhes →](GUIA_IMAGENS.md)

### 2. Personalizar Conteúdo
- Edite textos em `index.html`
- Atualize informações de contato
- Adicione links de redes sociais
- [Ver instruções →](COMECE_AQUI.md)

### 3. Criar Novos Posts
- Copie o template em `TEMPLATE_POSTS.html`
- Use o exemplo em `exemplo-post-completo.html` como referência
- Adicione seus posts ao grid

### 4. Publicar (Gratuito!)
- **GitHub Pages** (Recomendado) ← Fácil e gratuito
- **Netlify** ← Muito simples
- **Vercel** ← Super rápido
- [Ver guia completo →](GUIA_DEPLOY.md)

## 🛠️ Personalizações

### Mudar Cores
Abra `css/style.css` e atualize as variáveis:
```css
:root {
    --rosa-bebê: #FFB6D9;
    --rosa-claro: #FFC9E3;
    /* ... etc */
}
```

### Mudar Fontes
Procure por `@import` em `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display..." rel="stylesheet">
```
Visite https://fonts.google.com/ para mais opções

### Adicionar mais Posts
Copie este template e cole em `<div class="posts-grid">`:
```html
<article class="post-card">
    <div class="post-image">
        <img src="images/novo.jpg" alt="Título">
    </div>
    <div class="post-content">
        <span class="post-category">Categoria</span>
        <h3>Seu Título</h3>
        <p>Descrição breve...</p>
        <a href="#" class="read-more">Leia Mais →</a>
    </div>
</article>
```

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS e Android)

## 🚀 Deploy Rápido (GitHub Pages)

```bash
# 1. Crie repositório no GitHub
# 2. Clone localmente
git clone https://github.com/seu-usuario/blog-da-livia.git
cd blog-da-livia

# 3. Copie seus arquivos (já estão aqui!)

# 4. Envie para GitHub
git add .
git commit -m "Blog da Lívia publicado!"
git push -u origin main

# 5. Ative em: Settings > GitHub Pages > main branch
# Seu blog estará em: https://seu-usuario.github.io/blog-da-livia
```

[Guia detalhado →](GUIA_DEPLOY.md)

## 📊 Recursos Incluídos

### Tecnologias
- HTML5 Semântico
- CSS3 (Grid, Flexbox, Gradientes, Animações)
- JavaScript Vanilla (ES6+)
- Google Fonts (Playfair Display, Poppins, Cormorant Garamond)

### Otimizações
- 📦 Nenhuma dependência externa pesada
- ⚡ Carregamento muito rápido
- 📱 Mobile-first design
- ♿ Acessível WCAG 2.1
- 🔍 SEO pronto

## 📚 Documentação Completa

| Documento | Para Quem |
|-----------|-----------|
| [COMECE_AQUI.md](COMECE_AQUI.md) | Novo? Leia primeiro! |
| [GUIA_BLOGUEIRA.md](GUIA_BLOGUEIRA.md) | Guia completo e detalhado |
| [GUIA_IMAGENS.md](GUIA_IMAGENS.md) | Ajuda com imagens |
| [GUIA_DEPLOY.md](GUIA_DEPLOY.md) | Publicar na internet |
| [TEMPLATE_POSTS.html](TEMPLATE_POSTS.html) | Template para novos posts |
| [exemplo-post-completo.html](exemplo-post-completo.html) | Exemplo de post individual |

## 🤔 Dúvidas Frequentes

**P: Preciso saber programar?**  
R: Não! Este template é totalmente pronto para usar. Apenas edite os textos.

**P: Quanto custa publicar?**  
R: Totalmente gratuito! Use GitHub Pages, Netlify ou Vercel.

**P: Consigo usar meu próprio domínio?**  
R: Sim! Todos os métodos de deploy suportam domínios personalizados.

**P: Posso vender este template?**  
R: Não, mas pode usar gratuitamente para seu blog pessoal.

**P: Como adiciono comentários?**  
R: Use Disqus, Utterances ou Commento (mostrado no guia).

## 💡 Dicas Importantes

- 📸 Use imagens de alta qualidade em seus posts
- ⏰ Publique novos posts regularmente
- 📱 Divulgue nas redes sociais
- 💬 Responda comentários dos leitores
- 🔍 Otimize para SEO (meta tags, palavras-chave)
- 🎨 Mantenha consistência visual

## 🤝 Contribuições

Encontrou um bug? Quer sugerir uma melhoria?  
[Abra uma issue](https://github.com/liviaclaro/blog-da-livia/issues)

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE) - sinta-se livre para usar!

## 💕 Créditos

Criado com amor para blogueiras e maquiadoras apaixonadas por seu trabalho.

---

### 🌟 Começar Agora!

1. **Ler:** [COMECE_AQUI.md](COMECE_AQUI.md)
2. **Personalizar:** Edite `index.html` e `css/style.css`
3. **Adicionar imagens:** Coloque em `images/`
4. **Publicar:** Siga [GUIA_DEPLOY.md](GUIA_DEPLOY.md)
5. **Compartilhar:** Divulgue seu blog!

---

**🌸 Bem-vinda ao Blog da Lívia!** ✨

Aproveite para criar um espaço lindo e inspirador sobre maquiagem e beleza!

#BlogDaLívia #Maquiagem #Beleza #RosaBebê #CSS #HTML #JavaScript