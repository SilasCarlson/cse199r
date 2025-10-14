<?php

    namespace Controllers;

    class User extends \Controller {
        public function login(): User {
            $username = $this->data_post->username;
            $password = $this->data_post->password;

            // Make sure the user exists
            if (\Server::get_instance()->database_row_exists("SELECT * FROM users WHERE username=?", [$username])) {
                $user = new \Models\User($username);

                // Verify password
                if ($user->password_verify($password)) {
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

            return $this;
        }

        public function profile(): User {
            // Return early if no token is provided
            if (!isset($this->data_post->token) || !$this->verify_token($this->data_post->token)) return $this->invalid_token();

            $data = array(
                "user_id" => $this->data_get[0]
            );

            if (\Server::get_instance()->database_row_exists("SELECT * FROM users WHERE id=?", [$data['user_id']])) {
                $user = \Models\User::get_with_id($data['user_id']);
                $this->result['success'] = true;
                $this->result['data'] = array(
                    "username" => $user->get_username(),
                    "email" => $user->get_email(),
                    "created_at" => $user->get_created_at()
                );
            } else return $this->update_result_message("Unknown user");

            return $this;
        }
    }