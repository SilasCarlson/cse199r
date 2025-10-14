<?php

    class Controller {
        protected array $result = array(
            "success" => false,
            "message" => ""
        );

        protected stdClass $data_post;
        protected array $data_get;

        public function __construct(array $data_get, stdClass $data_post) {
            $this->data_get = $data_get;
            $this->data_post = $data_post;
        }

        protected function invalid_token(): Controller {
            $this->result['success'] = false;
            $this->result['message'] = "Unauthorized request";
            return $this;
        }

        protected function update_result_message(string $message): Controller {
            $this->result['message'] = $message;
            return $this;
        }

        public function get_result(): array {
            return $this->result;
        }

        public function verify_token(string $token): bool {
            $user_session = Models\UserSession::get_with_token($token);
            return $user_session != null && !$user_session->is_expired();
        }
    }