<?php

    namespace Models;

    class User {
        private int $id;
        private string $username;
        private string $password;
        private string $email;
        private string $created_at;

        public static function get_with_id(int $id): User {
            $result = \Server::get_instance()->database_query("SELECT * FROM users WHERE id=?", [$id]);
            $result = $result->fetch_assoc();
            return new User($result['username']);
        }

        public function __construct(string $username) {
            // grab the mysqli result
            $result = \Server::get_instance()->database_query("SELECT * FROM users WHERE username=?", [$username]);
            $result = $result->fetch_assoc();

            $this->id = $result['id'];
            $this->username = $result['username'];
            $this->password = $result['password'];
            $this->email = $result['email'];
            $this->created_at = $result['created_at'];
        }

        public function password_verify(string $password): bool {
            return password_verify($password, $this->password);
        }

        public function get_id(): int {
            return $this->id;
        }

        public function get_username(): string {
            return $this->username;
        }

        public function get_email(): string {
            return $this->email;
        }

        public function get_created_at(): string {
            return $this->created_at;
        }
    }