<?php

    namespace Handlers;

    class GetUser extends \Handler {
        const REQUIRES_TOKEN = false;

        public function __construct() {
            parent::__construct();

            if (\Server::get_instance()->database_row_exists("SELECT * FROM users WHERE id=?", [$this->data->user_id])) {
                $user = \Models\User::get_with_id($this->data->user_id);
                $this->result['data'] = array(
                    "username" => $user->get_username(),
                    "email" => $user->get_email(),
                    "created_at" => $user->get_created_at()
                );
            } else $this->result['message'] = "Unknown user";
        }
    }