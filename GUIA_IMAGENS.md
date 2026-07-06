# 📸 Guia de Imagens - Blog da Lívia

## Como Adicionar Imagens ao Seu Blog

### Imagens Necessárias

Seu blog precisa de 5 imagens principais:

| Imagem | Caminho | Dimensões | Descrição |
|--------|---------|-----------|-----------|
| Hero | `images/hero.jpg` | 600x400px+ | Imagem principal do blog |
| Post 1 | `images/post1.jpg` | 400x220px+ | Maquiagem Romântica |
| Post 2 | `images/post2.jpg` | 400x220px+ | Iluminadores |
| Post 3 | `images/post3.jpg` | 400x220px+ | Blush Rosa |
| Sobre | `images/sobre.jpg` | 400x400px+ | Sua foto |

### Como Adicionar Imagens

1. **Preparar suas imagens**
   - Tire fotos ou selecione imagens de sua biblioteca
   - Edite em ferramentas como: Canva, Photoshop, GIMP, etc.
   - Redimensione para as dimensões recomendadas
   - Exporte em JPG (qualidade 70-80% para web)

2. **Salvar na pasta correta**
   - Coloque as imagens na pasta: `blog-da-livia/images/`
   - Nomeie exatamente como indicado acima

3. **Verificar no navegador**
   - Abra `index.html` no navegador
   - As imagens devem aparecer nos respectivos lugares

### Geradores de Imagens Placeholder (para testes)

Se ainda não tem as imagens, pode usar placeholders temporários:

#### Opção 1: Pixabay (Gratuito)
- Site: https://pixabay.com/pt/
- Busque: "maquiagem rosa", "beleza", "feminino"
- Baixe em alta qualidade

#### Opção 2: Unsplash (Gratuito)
- Site: https://unsplash.com/
- Busque: "makeup pink", "beauty pink", "elegant makeup"
- Qualidade profissional

#### Opção 3: Pexels (Gratuito)
- Site: https://www.pexels.com/pt-br/
- Busque: "maquiagem", "beleza"
- Muitas opções em português

#### Opção 4: Canva (Freemium)
- Site: https://www.canva.com/
- Crie designs personalizados
- Busque templates de blog
- Exporte em JPG

#### Opção 5: Placeholder Online
Se quiser testar rapidamente:
```html
<!-- Use URLs de imagens de teste -->
<img src="https://via.placeholder.com/600x400?text=Blog+da+Livia" alt="Hero">
<img src="https://via.placeholder.com/400x220?text=Post+1" alt="Post 1">
```

### Dicas para Fotos de Maquiagem

1. **Iluminação**
   - Use luz natural (perto de janela)
   - Evite sombras no rosto
   - Fotografe durante o dia

2. **Ângulo**
   - Frontal para mostrar maquiagem completa
   - 45° para destacar features específicas
   - Detalhe de olhos/lábios para close-ups

3. **Fundo**
   - Use cores neutras (branco, cinza claro, rosa claro)
   - Desfoque o fundo com sua câmera
   - Evite elementos distrativos

4. **Composição**
   - Deixe espaço ao redor do rosto
   - Enquadre bem a pessoa
   - Considere a regra dos terços

### Edição de Imagens

**Ferramentas Online Gratuitas:**
- Canva: https://www.canva.com/
- Pixlr: https://pixlr.com/pt/
- Photopea: https://www.photopea.com/
- Fotor: https://www.fotor.com/

**Operações Recomendadas:**
1. Redimensionar para as dimensões especificadas
2. Ajustar brilho e contraste
3. Aumentar saturação (cores mais vibrantes)
4. Adicionar filtro sutil (se desejar)
5. Comprimir para web (reduzir tamanho de arquivo)

### Compressão de Imagens

Reduza o tamanho dos arquivos sem perder qualidade:

- TinyPNG: https://tinypng.com/
- CompressJPEG: https://compressjpeg.com/pt/
- Imagemin (local): https://github.com/imagemin/imagemin

### Formatos Recomendados

| Formato | Uso | Tamanho |
|---------|-----|--------|
| JPG | Fotos, maquiagem | Médio (otimizado) |
| PNG | Logos, ícones | Pequeno |
| WebP | Moderno, eficiente | Muito pequeno |

### Estrutura de Pastas (Avançado)

```
images/
├── hero.jpg
├── posts/
│   ├── post1.jpg
│   ├── post2.jpg
│   └── post3.jpg
├── profiles/
│   └── sobre.jpg
└── gallery/
    ├── galeria-1.jpg
    ├── galeria-2.jpg
    └── (mais imagens)
```

### Checklist para Imagens

- ✅ Todas as imagens estão na pasta `images/`
- ✅ Os nomes dos arquivos estão corretos
- ✅ As dimensões estão apropriadas
- ✅ As imagens foram comprimidas
- ✅ As imagens carregam rapidamente
- ✅ Alt text está descritivo
- ✅ Tema das imagens é coerente (cores rosa, maquiagem, beleza)

### Otimização para Web

1. **Tamanho de arquivo ideal**
   - Imagens de destaque: 200-300 KB
   - Imagens de posts: 100-200 KB

2. **Dimensões para tela**
   - Desktop: até 1200px de largura
   - Mobile: até 600px de largura

3. **Formato moderno**
   - Considere converter para WebP (mais eficiente)
   - Mantenha fallback em JPG para navegadores antigos

---

**💡 Dica Final:** Mantenha coerência visual entre todas as imagens. Use uma paleta de cores similar (tons de rosa, brancos, delicados) para manter a identidade visual do blog.

🌸 Aproveite e crie um blog lindo! ✨
