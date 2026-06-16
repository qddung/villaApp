-- ==========================================================
-- MySQL SETUP SCRIPT FOR RENTIFY APPLICATION
-- Run this file in your MySQL database (e.g., via phpMyAdmin,
-- MySQL Workbench, or CLI: mysql -u root -p < setup.mysql.sql)
-- ==========================================================
CREATE DATABASE rentify CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE rentify;

-- Users table
CREATE TABLE users (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tenants table
CREATE TABLE tenants (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  address TEXT,
  phone VARCHAR(50),
  business_type VARCHAR(100),
  status ENUM('active', 'pending', 'suspended') NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Profiles table
CREATE TABLE profiles (
  id CHAR(36) PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  phone VARCHAR(50),
  role ENUM(
    'owner',
    'admin',
    'staff',
    'pending',
    'pending_owner'
  ) NOT NULL DEFAULT 'pending',
  tenant_id CHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE
  SET
    NULL
);

-- Villas table
CREATE TABLE villas (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  address TEXT,
  description TEXT,
  status ENUM('active', 'maintenance', 'inactive') NOT NULL DEFAULT 'active',
  price DECIMAL(15, 2) DEFAULT 0,
  bedrooms INT DEFAULT 0,
  bathrooms INT DEFAULT 0,
  capacity JSON,
  amenities JSON,
  villa_details JSON,
  images JSON,
  map_link TEXT,
  monthly_prices JSON,
  tenant_id CHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- Bookings table
CREATE TABLE bookings (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  villa_id CHAR(36) NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50),
  check_in DATETIME NOT NULL,
  check_out DATETIME NOT NULL,
  adults INT DEFAULT 1,
  children INT DEFAULT 0,
  total_amount DECIMAL(15, 2) DEFAULT 0,
  deposit_amount DECIMAL(15, 2) DEFAULT 0,
  status ENUM(
    'pending',
    'deposited',
    'confirmed',
    'cancelled',
    'completed'
  ) DEFAULT 'pending',
  notes TEXT,
  additional_services JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (villa_id) REFERENCES villas(id) ON DELETE CASCADE,
);

-- Settings table
CREATE TABLE settings (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  `key` VARCHAR(255) NOT NULL,
  value TEXT,
  tenant_id CHAR(36) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY idx_settings_key_tenant (key, tenant_id),
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- Indexes
CREATE INDEX idx_profiles_tenant_id ON profiles(tenant_id);

CREATE INDEX idx_villas_tenant_id ON villas(tenant_id);
-- Insert default settings for new tenants (handled in app code)