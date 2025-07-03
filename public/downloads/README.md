# Pasta de Downloads

Esta pasta contém todos os arquivos que estão disponíveis para download na página de manuais.

## Arquivos Esperados

Para que a página de downloads funcione corretamente, adicione os seguintes arquivos nesta pasta:

### Manuais PDF
- `manual_basico_instalacao.pdf` - Manual básico oficial OnBoard v1.0 (2.1 MB) - **Disponível via S3**
- `guia-rapido-instalacao.pdf` - Guia rápido de instalação (850 KB)
- `manual-tecnico.pdf` - Manual técnico com especificações (3.1 MB)
- `troubleshooting.pdf` - Guia de solução de problemas (1.2 MB)
- `checklist-instalacao.pdf` - Checklist de instalação (450 KB)

### Vídeos
- `tutorial-instalacao.mp4` - Vídeo tutorial de instalação (45 MB)

## Como Funciona

1. Os usuários acessam a página `/manual-instalacao/downloads`
2. Clicam no card do arquivo desejado
3. O download é iniciado automaticamente
4. O componente `DownloadCard` fornece feedback visual do processo

## Estrutura de URLs

Os downloads são servidos através das seguintes URLs:
- **Arquivos locais**: `/downloads/[nome-do-arquivo]`
- **Arquivos externos**: URLs completas (ex: S3, CDN)

### Exemplo de URLs
- Local: `/downloads/manual-tecnico.pdf`
- S3: `https://infofleet-onboard.s3.us-east-1.amazonaws.com/public/helpdesk/manuals/manual_basico_instalacao.pdf`

## Observações

- Certifique-se de que os tamanhos dos arquivos no código correspondem aos tamanhos reais
- Os arquivos devem estar otimizados para web
- Mantenha os nomes dos arquivos consistentes com o código 