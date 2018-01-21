defineEnvVar PARENT_IMAGE_TAG "The tag of the parent image" "0.9.22";
overrideEnvVar TAG "1.0.0";
defineEnvVar SERVICE_USER "The echotel service user" "echotel";
defineEnvVar SERVICE_USER_PASSWORD "The echotel service password" "secret";
defineEnvVar SERVICE_GROUP "The echotel service group" "echotel";
defineEnvVar SERVICE_USER_SHELL "The echotel account shell" "/bin/bash";
defineEnvVar SERVICE_USER_HOME "The home of the echotel account" "/opt/cleanscore-api";
