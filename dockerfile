# Use the official Nginx image as the base
FROM nginx:latest

# Copy your website files to the default Nginx directory
COPY my-website /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
