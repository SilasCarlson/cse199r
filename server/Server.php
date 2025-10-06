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

        public function __construct() {
            // Get database credentials
            $config = parse_ini_file("config.env");

            // Connection
            $this->database = new mysqli($config["DATABASE_HOST"], $config["DATABASE_USERNAME"], $config["DATABASE_PASSWORD"], $config["DATABASE_NAME"]);
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
    }