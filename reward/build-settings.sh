defineEnvVar PARENT_IMAGE_TAG "The tag of the parent image" "0.9.22";
overrideEnvVar TAG "1.0.0";
defineEnvVar SERVICE_USER "The echotel service user" "reward";
defineEnvVar SERVICE_USER_PASSWORD "The reward password" "secret";
defineEnvVar SERVICE_GROUP "The reward service group" "reward";
defineEnvVar SERVICE_USER_SHELL "The reward account shell" "/bin/bash";
defineEnvVar SERVICE_USER_HOME "The home of the reward account" "/opt/reward";