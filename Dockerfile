# Build Stage
FROM node:24 AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files and build Next.js application
COPY . .
RUN npm run build

# Production Stage
FROM node:24 AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN apt update && apt install curl

# Copy built application and node modules from the builder stage
COPY --from=builder /app ./

# Expose port (default for Next.js)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]

