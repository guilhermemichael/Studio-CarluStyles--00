# Segurança

Princípios:

- Toda entrada é hostil.
- Todo upload é suspeito.
- Segredos ficam fora do código.
- Erros não devem vazar dados sensíveis.
- Leads exigem consentimento.

Camadas implementadas:

- Configurações Django para cookies seguros em produção.
- CSRF trusted origins.
- CORS restrito.
- Nginx com HSTS, CSP, X-Frame-Options e nosniff.
- `SecureImageProcessor` com extensão, MIME real, limite de bytes, limite de pixels e conversão para WebP.
- Auditoria de rotas administrativas.

Pendências de produção:

- Rate limit Redis nos endpoints públicos.
- Política LGPD revisada juridicamente.
- Backup automatizado validado.
- Gestão de segredos fora do `.env` em produção.
