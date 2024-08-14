# Etapa de construção
FROM node:18-alpine AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar todas as dependências (incluindo devDependencies) para o build
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Gerar o Prisma
RUN npx prisma generate

# Construir a aplicação Next.js
RUN npm run build

# Etapa de produção
FROM node:18-alpine AS production

# Definir o diretório de trabalho
WORKDIR /app

# Copiar apenas os arquivos necessários da etapa de build
COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./

# Instalar apenas as dependências de produção
RUN npm install --only=production

# Definir variável de ambiente
ENV NODE_ENV=production

# Expor a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
