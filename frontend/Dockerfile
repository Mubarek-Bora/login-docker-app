FROM nginx:alpine

# Clean the default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy all frontend files
COPY . /usr/share/nginx/html/
