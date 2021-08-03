CREATE DATABASE IF NOT EXISTS dev;

CREATE TABLE IF NOT EXISTS dev.tracking_events (
    date Date,
    date_time DateTime,
    event_id String,
    tracker_id String,
    ip String,
    user_id String,
    user_agent String,
    url String,
    value String
) ENGINE = MergeTree PARTITION BY toYYYYMM(date) ORDER BY (tracker_id) SETTINGS index_granularity = 8192;

CREATE DATABASE IF NOT EXISTS pg
ENGINE = PostgreSQL('postgresql:5432', 'dev', 'dev', 'dev', 1);
