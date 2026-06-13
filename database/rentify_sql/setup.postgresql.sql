-- ==========================================================
-- PostgreSQL SETUP SCRIPT FOR RENTIFY APPLICATION
-- Run this file in your PostgreSQL database (e.g., via pgAdmin,
-- psql CLI: psql -U postgres -d rentify -f setup.postgresql.sql)
-- ==========================================================

-- Enable the pgcrypto extension for gen_random_uuid() if on older Postgres, 
-- though Postgres 13+ supports gen_random_uuid() natively.
-- CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Enums
CREATE TYPE tenant_status AS ENUM ('active', 'pending', 'suspended');
CREATE TYPE profile_role AS ENUM ('owner', 'admin', 'staff', 'pending', 'pending_owner');
CREATE TYPE villa_status AS ENUM ('active', 'maintenance', 'inactive');
CREATE TYPE booking_status AS ENUM ('pending', 'deposited', 'confirmed', 'cancelled', 'completed');

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tenants table
CREATE TABLE tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  address TEXT,
  phone VARCHAR(50),
  business_type VARCHAR(100),
  status tenant_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  phone VARCHAR(50),
  role profile_role NOT NULL DEFAULT 'pending',
  tenant_id UUID,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE SET NULL
);

-- Villas table
CREATE TABLE villas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  address TEXT,
  description TEXT,
  status villa_status NOT NULL DEFAULT 'active',
  price DECIMAL(15, 2) DEFAULT 0,
  bedrooms INT DEFAULT 0,
  bathrooms INT DEFAULT 0,
  capacity JSONB,
  amenities JSONB,
  villa_details JSONB,
  images JSONB,
  map_link TEXT,
  monthly_prices JSONB,
  tenant_id UUID,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- Bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  villa_id UUID NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50),
  check_in TIMESTAMP NOT NULL,
  check_out TIMESTAMP NOT NULL,
  adults INT DEFAULT 1,
  children INT DEFAULT 0,
  total_amount DECIMAL(15, 2) DEFAULT 0,
  deposit_amount DECIMAL(15, 2) DEFAULT 0,
  status booking_status DEFAULT 'pending',
  notes TEXT,
  additional_services JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (villa_id) REFERENCES villas(id) ON DELETE CASCADE
);

-- Settings table
CREATE TABLE settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "key" VARCHAR(255) NOT NULL,
  value TEXT,
  tenant_id UUID NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE ("key", tenant_id),
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- Indexes
CREATE INDEX idx_profiles_tenant_id ON profiles(tenant_id);
CREATE INDEX idx_villas_tenant_id ON villas(tenant_id);
