<?php

    class Handler {
        protected array $result = array(
            "success" => false,
            "message" => ""
        );

        protected mixed $data;

        public function __construct() {
            $this->data = json_decode(file_get_contents("php://input"));
        }

        public function get_result(): array {
            return $this->result;
        }
    }