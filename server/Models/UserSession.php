<?php

    namespace Models;

    class UserSession {
        private int $id;
        private int $user_id;
        private string $token;
        private string $expiry;


        public function __construct(int $id) {
            // Get the properties
            $properties = \Server::get_instance()->database_query("SELECT * FROM user_sessions WHERE id=?", [$id]);
            $properties = $properties->fetch_assoc();

            // Assign attributes
            $this->id = $properties['id'];
            $this->user_id = $properties['user_id'];
            $this->token = $properties['token'];
            $this->expiry = $properties['expiry'];
        }

        public static function insert(int $user_id): UserSession {
            // Get data
            $token = bin2hex(random_bytes(32));
            $expiry = date("Y-m-d H:i:s", time() + 3600); // 1 hour

            // While token is not unique
            while (\Server::get_instance()->database_row_exists("SELECT * FROM user_sessions WHERE token=?", [$token])) {
                $token = bin2hex(random_bytes(32));
            }

            // Insert
            $result = \Server::get_instance()->database_query("INSERT INTO user_sessions (user_id, token, expiry) VALUES (?, ?, ?)", [$user_id, $token, $expiry]);
            return new UserSession(\Server::get_instance()->get_database()->insert_id);
        }

        public function get_token(): string {
            return $this->token;
        }
    }