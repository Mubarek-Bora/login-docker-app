# Use the official NGINX Alpine image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove the default nginx index page
RUN rm -rf ./*

# Copy your frontend static files to nginx html directory
COPY . .

# Expose port 80 (already handled by docker-compose, but optional here)
EXPOSE 80

