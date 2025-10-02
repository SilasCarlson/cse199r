<?php

    class Server {
        private static ?Server $instance = null;
        private mysqli $database;

        public function __construct() {
            // Get database credentials
            $config = parse_ini_file("config.env");

            // Connection
            $this->database = new mysqli($config["DATABASE_HOST"], $config["DATABASE_USERNAME"], $config["DATABASE_PASSWORD"], $config["DATABASE_NAME"]);
        }

        public static function getInstance(): Server {
            if (self::$instance == null) {
                self::$instance = new Server();
            }

            return self::$instance;
        }

        public function getDatabase(): mysqli {
            return $this->database;
        }
    }

    $result = Server::getInstance()->getDatabase()->query("SELECT customer_id, first_name, last_name FROM customer")->fetch_all(MYSQLI_ASSOC);
    $result = Array(
        "users" => $result
    );
    echo json_encode($result);