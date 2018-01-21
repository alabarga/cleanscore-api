defineEnvVar PARENT_IMAGE_TAG "The tag of the parent image" "0.9.22";
overrideEnvVar TAG "1.0.0";
defineEnvVar SERVICE_USER "The echotel service user" "certify";
defineEnvVar SERVICE_USER_PASSWORD "The certify password" "secret";
defineEnvVar SERVICE_GROUP "The certify service group" "certify";
defineEnvVar SERVICE_USER_SHELL "The certify account shell" "/bin/bash";
defineEnvVar SERVICE_USER_HOME "The home of the certify account" "/opt/certify";
