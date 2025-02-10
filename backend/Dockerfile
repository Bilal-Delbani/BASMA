FROM php:8.2-fpm-alpine

# Install dependencies
RUN apk add --no-cache \
    zip unzip curl libpng-dev libjpeg-turbo-dev \
    freetype-dev libzip-dev oniguruma-dev \
    mysql-client

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd mbstring pdo pdo_mysql zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . .

# Set permissions
RUN chmod -R 775 storage bootstrap/cache

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Expose the port Render uses
EXPOSE 10000

# Start Laravel with artisan
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=10000"]
