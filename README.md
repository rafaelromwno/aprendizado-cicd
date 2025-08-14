# Placar CS:GO Simples com CI/CD

Este projeto é um contador de pontos simples inspirado no jogo **CS:GO**, onde você pode incrementar os pontos dos **Terroristas (T)** e **Contra-Terroristas (CT)**. O time que atingir 10 pontos primeiro vence a partida.


## Funcionalidades

- Contador de pontos para dois times.
- Vencedor é anunciado quando um time atinge 10 pontos.
- Botões desativados após a vitória.
- Lógica separada e testável com Jest.
- Integração contínua configurada com GitHub Actions.

## Como funciona o pipeline de CI/CD

Este projeto usa **GitHub Actions** para executar **integração contínua (CI)** automatizada.

### Quando ele é executado:

- Em **push** ou **pull request** na branch `main`.

### O que o pipeline faz:

1. **Faz checkout** do código do repositório.
2. **Configura o Node.js** (versão 20).
3. **Instala as dependências** via `npm install`.
4. **Executa os testes** com o Jest.

### Resultado:

- Garante que o código submetido **passa nos testes automaticamente**.
- Evita que mudanças com erro sejam integradas à branch principal.

## 🤝 Como contribuir

1. Fork o repositório.
2. Crie uma branch para sua funcionalidade/ajuste:
3. git checkout -b minha-contribuicao
4. Faça suas modificações.
5. Execute os testes localmente com npm test.
6. Faça commit e push das mudanças:
```bash
    git add .
    git commit -m "Minha contribuição"
    git push origin minha-contribuicao
```
7. Crie um Pull Request no GitHub.

## Obrigado! :D