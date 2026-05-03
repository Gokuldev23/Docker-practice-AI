# 1. Base image — start from a pre-built Linux + Node environment.
FROM node:20-alpine

# 2. Working directory inside the container. All subsequent commands run from here.
WORKDIR /app

# 3. Copy ONLY package files first. This is a cache trick — see README.
COPY package*.json ./

# 4. Install dependencies inside the container (not on your host).
RUN npm install

# 5. Now copy the rest of the source code.
COPY . .

# 6. Document which port the app listens on (informational; does NOT publish it).
EXPOSE 3000

# 7. Default command run when the container starts.
CMD ["node", "server.js"]
