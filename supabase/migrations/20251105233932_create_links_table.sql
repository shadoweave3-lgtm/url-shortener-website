/*
  # URL Shortener Links Table

  1. New Tables
    - `links`
      - `id` (uuid, primary key) - Unique identifier for each link
      - `slug` (text, unique) - Short unique code (e.g., "aB3xYz")
      - `long_url` (text) - Original long URL to redirect to
      - `clicks` (integer) - Count of times the link was accessed
      - `created_at` (timestamptz) - When the link was created
      - `last_clicked_at` (timestamptz, nullable) - Last time link was used

  2. Security
    - Enable RLS on `links` table
    - Add policy for anyone to create links (public service)
    - Add policy for anyone to read links (needed for redirects)
    - Add policy for anyone to update click count (needed for analytics)

  3. Indexes
    - Index on `slug` for fast lookups during redirects
    - Index on `created_at` for analytics queries
*/

CREATE TABLE IF NOT EXISTS links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  long_url text NOT NULL,
  clicks integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  last_clicked_at timestamptz
);

ALTER TABLE links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create links"
  ON links FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can read links"
  ON links FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can update click counts"
  ON links FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_links_slug ON links(slug);
CREATE INDEX IF NOT EXISTS idx_links_created_at ON links(created_at DESC);