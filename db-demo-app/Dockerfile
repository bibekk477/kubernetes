# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies inside container
RUN npm install --production

# Copy rest of the project files (excluding node_modules)
COPY . .

# Expose the port your app uses (optional)
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
