<?php

    // Autoload
    spl_autoload_register(function($class_name) {
        require_once $class_name . ".php";
    });

    // disable cors for development
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    class Server {
        private static ?Server $instance = null;
        private mysqli $database;
        private array $config;

        public function __construct() {
            // Get database credentials
            $this->config = parse_ini_file("config.env");

            // Connection
            $this->database = new mysqli($this->config["DATABASE_HOST"], $this->config["DATABASE_USERNAME"], $this->config["DATABASE_PASSWORD"], $this->config["DATABASE_NAME"]);
        }

        public static function get_instance(): Server {
            if (self::$instance == null) {
                self::$instance = new Server();
            }

            return self::$instance;
        }

        public function get_database(): mysqli {
            return $this->database;
        }

        public function database_query(string $query, array $values): mysqli_result|bool {
            return $this->database->execute_query($query, $values);
        }

        public function database_row_exists(string $query, array $values): bool {
            $result = $this->database->execute_query($query, $values);
            return $result->num_rows > 0;
        }

        public function get_config(): array {
            return $this->config;
        }
    }