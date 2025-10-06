<?php
    namespace Handlers;

    class Login extends \Handler {
       const REQUIRES_TOKEN = false;

        public function __construct() {
            parent::__construct();

            $user_credentials = array(
                "username" => $this->data->username,
                "password" => $this->data->password
            );

            // Make sure the user exists
            if (\Server::get_instance()->database_row_exists("SELECT * FROM users WHERE username=?", [$user_credentials["username"]])) {
                $user = new \Models\User($user_credentials['username']);

                // Verify password
                if ($user->password_verify($user_credentials["password"])) {
                    // Get the session
                    $session = \Models\UserSession::insert($user->get_id());

                    // Update the result
                    $this->result = array(
                        "success" => true,
                        "message" => "Logged in successfully",
                        "token" => $session->get_token(),
                        "user_id" => $user->get_id()
                    );
                } else $this->result['message'] = "Incorrect password";
            } else $this->result['message'] = "Incorrect username";
        }
    }