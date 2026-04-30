# syntax=docker/dockerfile:1.7
# Multi-stage Dockerfile for Chandu D Portfolio (React + Vite)
# --------------------------------------------------------------
# 1) build : installs deps and produces the optimized /dist bundle
# 2) runtime: copies /dist into a minimal NGINX image

# -----------------------------
# Stage 1 — build
# -----------------------------
FROM node:20-alpine AS build
WORKDIR /app

# Install deps first for better layer caching
COPY frontend/package.json frontend/yarn.lock ./
RUN corepack enable && yarn install --frozen-lockfile --network-timeout 600000

# Copy source and build
COPY frontend/ ./
ARG VITE_APP_VERSION=1.0.0
ENV VITE_APP_VERSION=$VITE_APP_VERSION
RUN yarn build

# -----------------------------
# Stage 2 — runtime (NGINX)
# -----------------------------
FROM nginx:1.27-alpine AS runtime

# Hardened NGINX config tuned for SPAs
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static assets
COPY --from=build /app/dist /usr/share/nginx/html

# Non-root user (NGINX already drops to nginx user at runtime)
EXPOSE 80

# Healthcheck for orchestrators (ECS / K8s)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --spider -q http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
