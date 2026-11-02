# Portfolio — Next.js static export, served by nginx.
#
# In Dokploy set:
#   Build Type  : Dockerfile
#   Build Path  : /            (repository root)
#   Docker File : Dockerfile
#   Port        : 80
#
# next.config.ts sets output: "export", so `next build` emits plain HTML, CSS
# and JS into ./out and no Node process is needed at runtime. That is why this
# serves from nginx rather than `next start` — a static site does not need a
# server, and one that isn't there cannot fall over at 3am.
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
# Dev dependencies are required: TypeScript, Tailwind and the Next compiler all
# live there, and the build cannot run without them.
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
